@echo off
setlocal
cd /d "%~dp0"
title ImunoMed Premium

echo.
echo ==========================================
echo   ImunoMed Premium - Windows 11
echo ==========================================
echo.
echo Iniciando o servidor local...
echo Se esta janela fechar imediatamente, execute:
echo   powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start.ps1"
echo.

powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0start.ps1"
set ERR=%ERRORLEVEL%

if not "%ERR%"=="0" (
  echo.
  echo [ERRO] Nao foi possivel iniciar o modo servidor.
  echo Voce ainda pode estudar normalmente abrindo index.html diretamente.
  echo.
  pause
)
exit /b %ERR%
