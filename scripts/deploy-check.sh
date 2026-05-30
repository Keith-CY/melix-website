#!/usr/bin/env bash

set -euo pipefail

REPO="${REPO:-Keith-CY/melix-website}"
BRANCH="${BRANCH:-main}"
SITE_URL="${SITE_URL:-https://www.melix.run}"
TIMEOUT_SECONDS="${TIMEOUT_SECONDS:-20}"
STRICT=0
EXPECT_DEPLOY_ID="${EXPECT_DEPLOY_ID:-}"
USE_GH_FALLBACK=0

print_help() {
  cat <<'EOF'
Usage: ./scripts/deploy-check.sh [--repo owner/repo] [--branch branch] [--url website-url] [--timeout seconds] [--strict] [--expect-deploy-id <id>] [--use-gh-fallback]

Examples:
  ./scripts/deploy-check.sh
  REPO=Keith-CY/melix-website BRANCH=main SITE_URL=https://www.melix.run ./scripts/deploy-check.sh
  ./scripts/deploy-check.sh --use-gh-fallback --strict
  ./scripts/deploy-check.sh --strict --expect-deploy-id abc123
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --repo)
      REPO="$2"
      shift 2
      ;;
    --branch)
      BRANCH="$2"
      shift 2
      ;;
    --url)
      SITE_URL="$2"
      shift 2
      ;;
    --timeout)
      TIMEOUT_SECONDS="$2"
      shift 2
      ;;
    --strict)
      STRICT=1
      shift
      ;;
    --expect-deploy-id)
      EXPECT_DEPLOY_ID="$2"
      shift 2
      ;;
    --use-gh-fallback)
      USE_GH_FALLBACK=1
      shift
      ;;
    -h|--help)
      print_help
      exit 0
      ;;
    *)
      echo "Unknown argument: $1"
      print_help
      exit 2
      ;;
  esac
done

if ! command -v git >/dev/null 2>&1; then
  echo "[deploy-check] git is required."
  exit 2
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "[deploy-check] curl is required."
  exit 2
fi

warn() {
  echo "⚠️  $1"
}

fail() {
  FAIL_COUNT=$((FAIL_COUNT + 1))
  echo "❌ $1"
}

FAIL_COUNT=0

echo "🔎 Melix deployment verification"
echo "Repository: https://github.com/${REPO}"
echo "Branch: ${BRANCH}"
echo "Site URL: ${SITE_URL}"
echo "---"
if [[ "$STRICT" -eq 1 ]]; then
  echo "Mode: strict (fail-on-warning)"
fi
if [[ -n "${EXPECT_DEPLOY_ID}" ]]; then
  echo "Expect Deploy ID: ${EXPECT_DEPLOY_ID}"
fi

LOCAL_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
LOCAL_SHA="$(git rev-parse HEAD)"
if [[ -z "$LOCAL_BRANCH" || -z "$LOCAL_SHA" ]]; then
  echo "[deploy-check] Failed to read local git branch/commit."
  exit 2
fi

echo "1) Local git state"
echo "   Branch: ${LOCAL_BRANCH}"
echo "   Commit: ${LOCAL_SHA}"

REMOTE_SHA=""
if REMOTE_SHA="$(git ls-remote "https://github.com/${REPO}.git" "refs/heads/${BRANCH}" 2>/dev/null | awk '{print $1}' | head -n1)"; then
  :
fi

if [[ -z "$REMOTE_SHA" && "$USE_GH_FALLBACK" -eq 1 ]] && command -v gh >/dev/null 2>&1; then
  GH_RAW="$(gh api "repos/${REPO}/branches/${BRANCH}" --jq '.commit.sha' 2>/dev/null || true)"
  if [[ -n "${GH_RAW}" ]]; then
    REMOTE_SHA="${GH_RAW}"
  fi
fi

HAS_REMOTE_SHA=0
if [[ -n "$REMOTE_SHA" ]]; then
  HAS_REMOTE_SHA=1
  echo "2) GitHub remote state"
  echo "   Remote ${BRANCH}: ${REMOTE_SHA}"
  if [[ "$REMOTE_SHA" == "$LOCAL_SHA" ]]; then
  echo "   Sync: local head == remote head (ready for deploy check)"
  else
    if [[ "$STRICT" -eq 1 && "$LOCAL_BRANCH" == "$BRANCH" ]]; then
      fail "local and remote differ"
    else
      warn "local and remote differ (push needed)"
    fi
  fi
else
  echo "2) GitHub remote state"
  if [[ "$USE_GH_FALLBACK" -eq 1 ]]; then
    if command -v gh >/dev/null 2>&1; then
      warn "cannot fetch remote branch reference via git (network/DNS/auth issue)."
    else
      warn "gh not available for remote fallback; cannot fetch remote branch reference (network/DNS or auth issue)."
    fi
  else
    warn "cannot fetch remote branch reference (network/DNS or auth issue)."
    echo "   Tip: run with --use-gh-fallback if GitHub CLI is available and authenticated."
  fi
  echo "   Sync: unknown."
fi

TMP_HEADERS="$(mktemp -t melix-deploy-headers.XXXXXX)"
TMP_BODY="$(mktemp -t melix-deploy-body.XXXXXX)"
trap 'rm -f "${TMP_HEADERS}" "${TMP_BODY}"' EXIT

echo "3) Site edge response"
HTTP_STATUS=""
if HTTP_STATUS="$(curl --max-time "${TIMEOUT_SECONDS}" -L -D "${TMP_HEADERS}" -o "${TMP_BODY}" -sS "${SITE_URL}" -w "%{http_code}" 2>/tmp/melix-deploy-curl.err || true)"; then
  :
fi
if [[ "$HTTP_STATUS" == "200" ]]; then
  echo "3) Site edge response"
  echo "   HTTP: ${HTTP_STATUS} OK"
elif [[ -n "$HTTP_STATUS" ]]; then
  warn "3) Site edge response  HTTP: ${HTTP_STATUS} (may still be valid for redirects)"
else
  fail "3) Site edge response  HTTP failed (command output unavailable)"
  HTTP_STATUS=""
fi

if [[ -f /tmp/melix-deploy-curl.err ]]; then
  if [[ -s /tmp/melix-deploy-curl.err ]]; then
    warn "   Curl error:"
    cat /tmp/melix-deploy-curl.err
  fi
  rm -f /tmp/melix-deploy-curl.err
fi

CONTENT_TYPE="$(awk 'BEGIN{IGNORECASE=1} $1 ~ /^content-type:/ {sub(/\r/, "", $0); sub(/^Content-Type:[[:space:]]*/, "", $0); print $0; exit}' "${TMP_HEADERS}")"
CACHE_STATUS="$(awk 'BEGIN{IGNORECASE=1} $1 ~ /^cache-control:/ {sub(/\r/, "", $0); sub(/^Cache-Control:[[:space:]]*/, "", $0); print $0; exit}' "${TMP_HEADERS}")"
VERCEL_ID="$(awk 'BEGIN{IGNORECASE=1} $1 == "x-vercel-id:" {sub(/\r/, "", $2); print $2; exit}' "${TMP_HEADERS}")"
LAST_MODIFIED="$(awk 'BEGIN{IGNORECASE=1} $1 ~ /^last-modified:/ {sub(/\r/, "", $0); sub(/^last-modified:[[:space:]]*/, "", $0); print $0; exit}' "${TMP_HEADERS}")"

echo "---"
if [[ -n "${CONTENT_TYPE:-}" ]]; then
  echo "   Content-Type: ${CONTENT_TYPE}"
elif [[ "$STRICT" -eq 1 ]]; then
  warn "   Content-Type: n/a"
fi
if [[ -n "${CACHE_STATUS:-}" ]]; then
  echo "   Cache-Control: ${CACHE_STATUS}"
fi

if [[ -n "${VERCEL_ID}" ]]; then
  echo "4) Edge metadata"
  echo "   Vercel deployment id: ${VERCEL_ID}"
  if [[ -n "${EXPECT_DEPLOY_ID}" && "${VERCEL_ID}" != *"${EXPECT_DEPLOY_ID}"* ]]; then
    fail "   Unexpected Vercel deployment id."
  fi
else
  warn "Vercel deployment id header: n/a (not present)"
fi

if [[ -n "${LAST_MODIFIED}" ]]; then
  echo "   Last-Modified: ${LAST_MODIFIED}"
else
  warn "   Last-Modified: n/a"
fi

echo "---"
echo "5) Conclusion"
if [[ "${HTTP_STATUS}" == "200" ]]; then
  echo "✅ Site responds."
else
  fail "Site is not returning a successful page response."
fi
if [[ "$HAS_REMOTE_SHA" -eq 1 ]]; then
  if [[ "$LOCAL_BRANCH" == "$BRANCH" && "$REMOTE_SHA" == "$LOCAL_SHA" ]]; then
    echo "✅ Local and remote HEAD are aligned for branch ${BRANCH}."
  elif [[ "$LOCAL_BRANCH" == "$BRANCH" ]]; then
    fail "Local/main commit differs from remote main."
  else
    echo "ℹ️  Local branch (${LOCAL_BRANCH}) does not match branch target (${BRANCH}); sync check skipped."
  fi
else
  warn "Cannot confirm git sync due missing remote SHA."
fi
if [[ -n "${VERCEL_ID}" ]]; then
  echo "✅ Edge metadata present."
fi
if [[ "$STRICT" -eq 1 ]]; then
  if [[ "$HAS_REMOTE_SHA" -ne 1 ]]; then
    fail "Strict mode requires remote SHA lookup."
  fi
  if [[ "$FAIL_COUNT" -gt 0 ]] || [[ "${HTTP_STATUS}" != "200" ]] || [[ -z "${VERCEL_ID}" ]] || [[ "$LOCAL_BRANCH" == "$BRANCH" && "$REMOTE_SHA" != "$LOCAL_SHA" ]]; then
    echo "---"
    echo "Deployment check failed under strict mode."
    exit 2
  fi
  echo "---"
  echo "Strict deployment check passed."
fi
