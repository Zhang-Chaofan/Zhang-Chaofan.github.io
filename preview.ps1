$ErrorActionPreference = "Stop"

$projectRoot = $PSScriptRoot
$runtimeRoot = "C:\Users\zhang\AppData\Local\Temp\academic-site-build-runtime"
$ruby = Join-Path $runtimeRoot "rubydevkit\bin\ruby.exe"
$bundlePath = Join-Path $runtimeRoot "bundle"
$jekyll = Join-Path $bundlePath "ruby\3.2.0\bin\jekyll"
$wrapper = Join-Path $projectRoot "tmp\jekyll_windows_build.rb"
$python = "C:\Users\zhang\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

foreach ($requiredFile in @($ruby, $jekyll, $wrapper, $python)) {
  if (-not (Test-Path -LiteralPath $requiredFile)) {
    throw "Missing local preview dependency: $requiredFile"
  }
}

$env:BUNDLE_IGNORE_CONFIG = "1"
$env:BUNDLE_PATH = $bundlePath

Push-Location $projectRoot
try {
  & $ruby $wrapper $jekyll build
  if ($LASTEXITCODE -ne 0) {
    throw "Jekyll build failed with exit code $LASTEXITCODE"
  }

  $serverRunning = Get-NetTCPConnection -LocalPort 4173 -State Listen -ErrorAction SilentlyContinue
  if (-not $serverRunning) {
    Start-Process -FilePath $python `
      -ArgumentList @("-m", "http.server", "4173", "--bind", "127.0.0.1", "--directory", "_site") `
      -WorkingDirectory $projectRoot `
      -WindowStyle Hidden
    Start-Sleep -Milliseconds 800
  }

  Write-Host "Preview updated: http://127.0.0.1:4173/" -ForegroundColor Green
  Write-Host "Refresh the browser with Ctrl+F5 if it still shows cached content."
}
finally {
  Pop-Location
}
