@echo off
setlocal
cd /d "%~dp0"
title ImunoMed Premium

if not exist "%~dp0index.html" (
  echo [ERRO] index.html nao foi encontrado nesta pasta.
  echo Descompacte o ZIP inteiro antes de executar o aplicativo.
  pause
  exit /b 1
)

start "" "%~dp0index.html"
if errorlevel 1 (
  echo [ERRO] O Windows nao conseguiu abrir o navegador padrao.
  echo Abra manualmente este arquivo:
  echo %~dp0index.html
  pause
  exit /b 1
)
exit /b 0
