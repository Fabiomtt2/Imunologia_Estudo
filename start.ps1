param([int]$Port = 8000)

$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Index = Join-Path $Root 'index.html'
Set-Location $Root

function Test-PortInUse([int]$p) {
  try {
    $client = New-Object System.Net.Sockets.TcpClient
    $iar = $client.BeginConnect('127.0.0.1', $p, $null, $null)
    $ok = $iar.AsyncWaitHandle.WaitOne(200, $false)
    if ($ok -and $client.Connected) { $client.Close(); return $true }
    $client.Close(); return $false
  } catch { return $false }
}

Write-Host ''
Write-Host '==========================================' -ForegroundColor DarkCyan
Write-Host '  ImunoMed Premium - Windows 11' -ForegroundColor Cyan
Write-Host '==========================================' -ForegroundColor DarkCyan
Write-Host ''

# O conteúdo principal funciona por file://. O servidor só é necessário para PWA/service worker.
$python = $null
$pythonArgs = @()
foreach ($candidate in @('py','python','python3')) {
  $cmd = Get-Command $candidate -ErrorAction SilentlyContinue
  if ($cmd) {
    $python = $cmd.Source
    if ($candidate -eq 'py') { $pythonArgs = @('-3') }
    break
  }
}

if (-not $python) {
  Write-Host 'Python nao encontrado. Abrindo o modo direto, que contem todo o material de estudo.' -ForegroundColor Yellow
  Write-Host 'Apenas a instalacao PWA/cache por service worker ficara desativada neste modo.' -ForegroundColor DarkGray
  Start-Process $Index
  exit 0
}

while (Test-PortInUse $Port) {
  $Port++
  if ($Port -gt 8099) {
    Write-Host 'Portas 8000-8099 ocupadas. Abrindo o modo direto.' -ForegroundColor Yellow
    Start-Process $Index
    exit 0
  }
}

$Url = "http://127.0.0.1:$Port/index.html"
$serverArgs = @() + $pythonArgs + @('-m','http.server',"$Port",'--bind','127.0.0.1')

try {
  $proc = Start-Process -FilePath $python -ArgumentList $serverArgs -WorkingDirectory $Root -PassThru -WindowStyle Hidden
  $ready = $false
  for ($i=0; $i -lt 40; $i++) {
    Start-Sleep -Milliseconds 150
    if ($proc.HasExited) { break }
    if (Test-PortInUse $Port) { $ready = $true; break }
  }

  if (-not $ready) {
    if ($proc -and -not $proc.HasExited) { Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue }
    Write-Host 'O servidor nao respondeu. Abrindo o modo direto como fallback.' -ForegroundColor Yellow
    Start-Process $Index
    exit 0
  }

  Write-Host "Servidor local ativo: $Url" -ForegroundColor Green
  Write-Host 'O navegador sera aberto agora.'
  Write-Host 'Quando terminar de estudar, volte a esta janela e pressione ENTER para encerrar o servidor.' -ForegroundColor DarkGray
  Start-Process $Url
  [void](Read-Host)
  if (-not $proc.HasExited) { Stop-Process -Id $proc.Id -Force }
  exit 0
}
catch {
  Write-Host "Falha no modo servidor: $($_.Exception.Message)" -ForegroundColor Yellow
  Write-Host 'Abrindo o modo direto como fallback...' -ForegroundColor Yellow
  Start-Process $Index
  exit 0
}
