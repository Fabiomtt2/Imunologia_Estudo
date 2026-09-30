@echo off
setlocal
cd /d "%~dp0"
title ImunoMed Premium - Servidor local
powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0start.ps1"
if errorlevel 1 pause
