#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(pwd)"
cd "$ROOT_DIR"
HAS_ERROR=0

echo "== Melix Website dependency + inline dependency scan =="

echo "[1] Suspicious remote URLs in rendered assets (HTML/CSS/JS)"
SCAN_HTML="$(mktemp)"
awk '
  /<script id="site-links" type="application\/json">/ { in_block = 1; next }
  /<\/script>/ { if (in_block) { in_block = 0; next } }
  { if (!in_block) print }
' index.html > "$SCAN_HTML"
if rg -n "https?://|src=\"//|href=\"//|@import\\s+url\\(https?:\\/\\/|url\\(https?:\\/\\/|font-family: .*url\\(" "$SCAN_HTML" styles.css app.js; then
  echo "[!] unexpected remote assets detected in rendered assets"
  HAS_ERROR=1
else
  echo "[ok] no remote assets detected in rendered assets"
fi
rm "$SCAN_HTML"

echo "[2] Potential third-party runtime tags in HTML"
if rg -n "<(script|link|img|iframe|object|embed|video|audio|source)\b[^>]*" index.html | head -n 240; then
  echo "[i] verify all matched tags are local and expected"
else
  echo "[ok] no suspicious runtime tags"
fi

echo "[3] CSP/Referrer/Permissions policy presence"
if rg -n "Content-Security-Policy|Permissions-Policy|referrer-policy|Strict-Transport-Security" index.html; then
  echo "[ok] required policy fields found"
else
  echo "[!] policy fields missing"
  HAS_ERROR=1
fi

echo "[4] site-links JSON outbound URL audit"
GITHUB_LINK="$(awk -F '\"' '/"github"[[:space:]]*:/ {print $4; exit}' index.html || true)"
DISCUSSIONS_LINK="$(awk -F '\"' '/"discussions"[[:space:]]*:/ {print $4; exit}' index.html || true)"
ISSUES_LINK="$(awk -F '\"' '/"issues"[[:space:]]*:/ {print $4; exit}' index.html || true)"

validate_link() {
  local value="$1"
  local label="$2"
  if [[ -z "$value" ]]; then
    echo "[!] ${label} is empty"
    return 1
  fi
  if [[ "$value" == *"your-org"* || "$value" == *"<"* || "$value" == *">"* ]]; then
    echo "[!] ${label} contains invalid placeholder characters"
    return 1
  fi
  if [[ "$value" != http://* && "$value" != https://* ]]; then
    echo "[!] ${label} must start with http:// or https://"
    return 1
  fi
  return 0
}

if validate_link "$GITHUB_LINK" "github"; then
  echo "[ok] github configured"
else
  HAS_ERROR=1
fi

if validate_link "$DISCUSSIONS_LINK" "discussions"; then
  echo "[ok] discussions configured"
else
  HAS_ERROR=1
fi

if validate_link "$ISSUES_LINK" "issues"; then
  echo "[ok] issues configured"
else
  HAS_ERROR=1
fi

echo "[5] Local file dependency footprint"
wc -l index.html styles.css app.js README.md | cat

if [[ $HAS_ERROR -ne 0 ]]; then
  echo "== Check complete: FAILED =="
  exit 1
fi

echo "== Check complete: OK =="
