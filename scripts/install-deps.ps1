# Run from project root after Node.js is installed: .\scripts\install-deps.ps1
$ErrorActionPreference = "Stop"

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "npm not found. Install Node.js LTS from https://nodejs.org/ then re-run this script." -ForegroundColor Red
    exit 1
}

Set-Location $PSScriptRoot\..
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install
Write-Host "Done. Start dev server with: npm run dev" -ForegroundColor Green
