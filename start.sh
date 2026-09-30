#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
PORT=${1:-8000}
echo "Imunologia AV1 Premium: http://127.0.0.1:${PORT}/index.html"
python3 -m http.server "$PORT"
