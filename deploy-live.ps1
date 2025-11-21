# CommerceCult Deployment Validation Script
# Validates and prepares the repository for Vercel deployment

Write-Host "`n=== CommerceCult Deployment Validator ===" -ForegroundColor Cyan
Write-Host ""

$rootDir = $PSScriptRoot
$frontendDir = Join-Path $rootDir "CommerceCult_app_v2-1\frontend"

# Step 1: Check Node.js/npm
Write-Host "[1/7] Checking Node.js and npm..." -ForegroundColor Yellow
$nodeInstalled = $false
try {
    $nodeVer = & node --version 2>&1
    $npmVer = & npm --version 2>&1
    if ($nodeVer -like "v*") {
        Write-Host "  Node.js: $nodeVer" -ForegroundColor Green
        Write-Host "  npm: $npmVer" -ForegroundColor Green
        $nodeInstalled = $true
    }
}
catch {
    Write-Host "  Node.js/npm not installed" -ForegroundColor Red
    Write-Host "  Install from: https://nodejs.org/" -ForegroundColor Cyan
}
Write-Host ""

# Step 2: Verify structure
Write-Host "[2/7] Verifying structure..." -ForegroundColor Yellow
$structureValid = $true
$files = @("package.json", "next.config.js", "tsconfig.json", "app\layout.tsx", "app\page.tsx")
foreach ($f in $files) {
    $path = Join-Path $frontendDir $f
    if (Test-Path $path) {
        Write-Host "  $f OK" -ForegroundColor Green
    }
    else {
        Write-Host "  $f MISSING" -ForegroundColor Red
        $structureValid = $false
    }
}
Write-Host ""

# Step 3: Validate vercel.json
Write-Host "[3/7] Validating vercel.json..." -ForegroundColor Yellow
$vercelPath = Join-Path $rootDir "vercel.json"
try {
    $vcfg = Get-Content $vercelPath -Raw | ConvertFrom-Json
    Write-Host "  vercel.json valid" -ForegroundColor Green
}
catch {
    Write-Host "  vercel.json invalid" -ForegroundColor Red
}
Write-Host ""

# Step 4: Install dependencies
$installSuccess = $false
if ($nodeInstalled -and $structureValid) {
    Write-Host "[4/7] Installing dependencies..." -ForegroundColor Yellow
    Push-Location $frontendDir
    & npm ci 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  Dependencies installed" -ForegroundColor Green
        $installSuccess = $true
    }
    else {
        Write-Host "  Install failed" -ForegroundColor Red
    }
    Pop-Location
}
else {
    Write-Host "[4/7] Skipping install (prerequisites missing)" -ForegroundColor Yellow
}
Write-Host ""

# Step 5: Test build
if ($installSuccess) {
    Write-Host "[5/7] Testing build..." -ForegroundColor Yellow
    Push-Location $frontendDir
    & npm run build 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  Build successful!" -ForegroundColor Green
    }
    else {
        Write-Host "  Build failed" -ForegroundColor Red
    }
    Pop-Location
}
else {
    Write-Host "[5/7] Skipping build test" -ForegroundColor Yellow
}
Write-Host ""

# Step 6: Git status
Write-Host "[6/7] Checking Git status..." -ForegroundColor Yellow
try {
    $gitStat = & git status --porcelain 2>&1
    if ($LASTEXITCODE -eq 0 -and $gitStat) {
        Write-Host "  Uncommitted changes found" -ForegroundColor Yellow
    }
    elseif ($LASTEXITCODE -eq 0) {
        Write-Host "  Working directory clean" -ForegroundColor Green
    }
}
catch {
    Write-Host "  Git not available" -ForegroundColor Yellow
}
Write-Host ""

# Step 7: Deployment instructions
Write-Host "[7/7] Deployment Instructions" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "NEXT STEPS TO GET YOUR SITE LIVE:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if (-not $nodeInstalled) {
    Write-Host "1. INSTALL NODE.JS (REQUIRED)" -ForegroundColor Red
    Write-Host "   https://nodejs.org/" -ForegroundColor White
    Write-Host ""
}

Write-Host "2. COMMIT YOUR CHANGES" -ForegroundColor Yellow
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'Prepare for deployment'" -ForegroundColor Gray
Write-Host "   git push origin main" -ForegroundColor Gray
Write-Host ""

Write-Host "3. DEPLOY TO VERCEL" -ForegroundColor Yellow
Write-Host "   A. Via GitHub (Recommended):" -ForegroundColor White
Write-Host "      - Go to https://vercel.com/new" -ForegroundColor Cyan
Write-Host "      - Import your GitHub repository" -ForegroundColor White
Write-Host "      - Vercel auto-detects Next.js" -ForegroundColor White
Write-Host "      - Override settings:" -ForegroundColor White
Write-Host "        Root Directory: CommerceCult_app_v2-1/frontend" -ForegroundColor Gray
Write-Host "        Build Command: npm run build" -ForegroundColor Gray
Write-Host "        Install Command: npm ci" -ForegroundColor Gray
Write-Host "      - Click Deploy" -ForegroundColor White
Write-Host ""
Write-Host "   B. Via Vercel CLI:" -ForegroundColor White
Write-Host "      npm install -g vercel" -ForegroundColor Gray
Write-Host "      cd CommerceCult_app_v2-1/frontend" -ForegroundColor Gray
Write-Host "      vercel --prod" -ForegroundColor Gray
Write-Host ""

Write-Host "4. CUSTOM DOMAIN" -ForegroundColor Yellow
Write-Host "   - Vercel Dashboard > Settings > Domains" -ForegroundColor White
Write-Host "   - Add commercecult.app" -ForegroundColor White
Write-Host "   - Follow DNS instructions" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
if ($nodeInstalled -and $structureValid) {
    Write-Host "READY TO DEPLOY!" -ForegroundColor Green
}
else {
    Write-Host "Fix issues above first" -ForegroundColor Yellow
}
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
