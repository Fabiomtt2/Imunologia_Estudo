@echo off
cd /d %~dp0
set PORT=8000
echo Imunologia AV1 Premium: http://127.0.0.1:%PORT%/index.html
start "" http://127.0.0.1:%PORT%/index.html
py -m http.server %PORT%
