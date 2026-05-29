#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(pwd)"
cd "$ROOT_DIR"
HAS_ERROR=0

echo "== Melix Third-Party Dependency Audit =="

if [ ! -f package.json ]; then
  echo "[ok] No package.json detected."
  echo "[ok] Current page uses no dependency-managed third-party runtime libraries."
  exit 0
fi

if ! command -v bun >/dev/null 2>&1; then
  echo "[!] bun is not installed; cannot run dependency audit."
  echo "[i] Install bun and rerun this script before adding/updating any third-party dependency."
  exit 1
fi

echo "[1] Install / resolve lockfile"
if [ -f bun.lockb ] || [ -f bun.lock ]; then
  bun install --frozen-lockfile
else
  bun install
fi

echo "[2] Security audit (high threshold)"
if bun audit --audit-level=high; then
  echo "[ok] bun audit passed"
else
  echo "[!] bun audit reported issues that must be fixed before release"
  HAS_ERROR=1
fi

echo "[3] Freshness check (latest available versions)"
TMP_OUT="$(mktemp)"
if bun outdated > "$TMP_OUT" 2>&1; then
  if rg -qi "up to date|all dependencies are up to date|no outdated dependencies|already up to date" "$TMP_OUT"; then
    echo "[ok] No outdated dependencies detected by bun outdated"
  else
    echo "[!] Outdated packages found:"
    cat "$TMP_OUT"
    HAS_ERROR=1
  fi
else
  echo "[!] bun outdated failed"
  HAS_ERROR=1
fi
rm -f "$TMP_OUT"

echo "[4] Manifest policy check"
if command -v jq >/dev/null 2>&1; then
  jq '.dependencies, .devDependencies' package.json
else
  echo "[i] Install jq to print dependency manifest summary (optional)."
fi

if [ "$HAS_ERROR" -ne 0 ]; then
  echo "== Dependency audit FAILED =="
  exit 1
fi

echo "== Dependency audit PASSED =="
