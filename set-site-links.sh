#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 3 ]]; then
  cat <<'USAGE'
Usage:
  ./set-site-links.sh <github> <discussions> <issues>

Example:
  ./set-site-links.sh \
    "https://github.com/<your_org_or_user>/<your_repo>" \
    "https://github.com/<your_org_or_user>/<your_repo>/discussions" \
    "https://github.com/<your_org_or_user>/<your_repo>/issues"

This updates the JSON block with id "site-links" in index.html.
Do not pass placeholder strings containing "your-org" or "<" and ">" placeholders.
USAGE
  exit 1
fi

GITHUB="$1"
DISCUSSIONS="$2"
ISSUES="$3"

validate_url() {
  local value="$1"
  local label="$2"
  if [[ "$value" == *"<"* || "$value" == *">"* ]]; then
    echo "[error] ${label} contains invalid placeholder characters (< or >)." >&2
    exit 1
  fi
  if [[ "$value" == *"your-org"* ]]; then
    echo "[error] ${label} appears to still use placeholder 'your-org'." >&2
    exit 1
  fi
  if [[ "$value" != http://* && "$value" != https://* ]]; then
    echo "[error] ${label} must start with http:// or https://" >&2
    exit 1
  fi
}

validate_url "$GITHUB" "github"
validate_url "$DISCUSSIONS" "discussions"
validate_url "$ISSUES" "issues"

TMP_FILE="$(mktemp)"
awk -v github="$GITHUB" -v discussions="$DISCUSSIONS" -v issues="$ISSUES" '
BEGIN {in_block=0}
{
  if ($0 ~ /<script id="site-links" type="application\/json">/) {
    print $0
    print "      {"
    print "        \"github\": \"" github "\"," 
    print "        \"discussions\": \"" discussions "\"," 
    print "        \"issues\": \"" issues "\""
    print "      }"
    in_block=1
    next
  }

  if (in_block == 1) {
    if ($0 ~ /<\/script>/) {
      print $0
      in_block=0
    }
    next
  }

  print
}
' index.html > "$TMP_FILE"

mv "$TMP_FILE" index.html
chmod +x set-site-links.sh
echo "Updated index.html site-links block."
