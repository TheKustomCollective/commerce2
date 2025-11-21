# CommerceCult Deployment Fix Script
# This script validates and prepares the repository for Vercel deployment

Write-Host "=== CommerceCult Deployment Fix Script ===" -ForegroundColor Cyan
Write-Host ""

# Store the root directory
$rootDir = $PSScriptRoot
$frontendDir = Join-Path $rootDir "CommerceCult_app_v2-1\frontend"

# Step 1: Check if Node.js and npm are installed
Write-Host "[1/7] Checking Node.js and npm installation..." -ForegroundColor Yellow
$nodeInstalled = $false
try {
    $nodeVersion = & node --version 2>&1
    $npmVersion = & npm --version 2>&1
    
    if ($nodeVersion -like "v*" -and $npmVersion -match "^\d") {
        Write-Host "  Node.js $nodeVersion found" -ForegroundColor Green
        Write-Host "  npm $npmVersion found" -ForegroundColor Green
        $nodeInstalled = $true
    }
}
catch {
    Write-Host "  Node.js/npm not found in PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "REQUIRED: Install Node.js first" -ForegroundColor Yellow
    Write-Host "1. Download from: https://nodejs.org/en/download/" -ForegroundColor Cyan
    Write-Host "2. Install the LTS version (includes npm)" -ForegroundColor Cyan
    Write-Host "3. Restart PowerShell and run this script again" -ForegroundColor Cyan
}
Write-Host ""

# Step 2: Verify repository structure
Write-Host "[2/7] Verifying repository structure..." -ForegroundColor Yellow
$structureValid = $true

if (Test-Path $frontendDir) {
    Write-Host "  Frontend directory found" -ForegroundColor Green
}
else {
    Write-Host "  Frontend directory not found!" -ForegroundColor Red
    $structureValid = $false
}

$requiredFiles = @(
    "package.json",
    "next.config.js",
    "tsconfig.json",
    "tailwind.config.js",
    "app\layout.tsx",
    "app\page.tsx"
)

foreach ($file in $requiredFiles) {
    $filePath = Join-Path $frontendDir $file
    if (Test-Path $filePath) {
        Write-Host "  $file exists" -ForegroundColor Green
    }
    else {
        Write-Host "  $file missing!" -ForegroundColor Red
        $structureValid = $false
    }
}
Write-Host ""

# Step 3: Validate vercel.json
Write-Host "[3/7] Validating vercel.json..." -ForegroundColor Yellow
$vercelJsonPath = Join-Path $rootDir "vercel.json"
if (Test-Path $vercelJsonPath) {
    try {
        $vercelConfig = Get-Content $vercelJsonPath -Raw | ConvertFrom-Json
        Write-Host "  vercel.json is valid JSON" -ForegroundColor Green
        
        if ($vercelConfig.buildCommand) {
            Write-Host "  Build command configured" -ForegroundColor Green
        }
        if ($vercelConfig.outputDirectory) {
            Write-Host "  Output directory configured" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "  vercel.json has JSON syntax errors" -ForegroundColor Red
    }
}
else {
    Write-Host "  vercel.json not found!" -ForegroundColor Red
}
Write-Host ""

# Step 4: Install dependencies (if Node.js is available)
if ($nodeInstalled -and $structureValid) {
    Write-Host "[4/7] Installing dependencies..." -ForegroundColor Yellow
    Push-Location $frontendDir
    $installSuccess = $false
    try {
        & npm ci 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "  Dependencies installed successfully" -ForegroundColor Green
            $installSuccess = $true
        }
        else {
            Write-Host "  Failed to install dependencies" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "  Failed to install dependencies" -ForegroundColor Red
    }
    Pop-Location
    Write-Host ""
}
else {
    Write-Host "[4/7] Skipping dependency installation (prerequisites not met)" -ForegroundColor Yellow
    Write-Host ""
    $installSuccess = $false
}

# Step 5: Run build test (if dependencies installed)
if ($nodeInstalled -and $structureValid -and $installSuccess) {
    Write-Host "[5/7] Testing production build..." -ForegroundColor Yellow
    Push-Location $frontendDir
    try {
        & npm run build 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "  Build completed successfully" -ForegroundColor Green
        }
        else {
            Write-Host "  Build failed" -ForegroundColor Red
            Write-Host "  Run 'cd CommerceCult_app_v2-1\frontend; npm run build' for details" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "  Build failed with error" -ForegroundColor Red
    }
    Pop-Location
    Write-Host ""
}
else {
    Write-Host "[5/7] Skipping build test (prerequisites not met)" -ForegroundColor Yellow
    Write-Host ""
}

# Step 6: Check Git status
Write-Host "[6/7] Checking Git repository status..." -ForegroundColor Yellow
try {
    $gitStatus = & git status --porcelain 2>&1
    if ($LASTEXITCODE -eq 0) {
        if ($gitStatus) {
            Write-Host "  Uncommitted changes detected" -ForegroundColor Yellow
            Write-Host ""
            Write-Host "Consider committing changes before deployment:" -ForegroundColor Cyan
            Write-Host "  git add ." -ForegroundColor Gray
            Write-Host "  git commit -m 'Fix deployment configuration'" -ForegroundColor Gray
            Write-Host "  git push" -ForegroundColor Gray
        }
        else {
            Write-Host "  Working directory is clean" -ForegroundColor Green
        }
    }
}
catch {
    Write-Host "  Git not available or not a git repository" -ForegroundColor Yellow
}
Write-Host ""

# Step 7: Deployment instructions
Write-Host "[7/7] Deployment to Vercel" -ForegroundColor Yellow
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "NEXT STEPS TO GET YOUR WEBSITE LIVE:" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

if (-not $nodeInstalled) {
    Write-Host "❶ INSTALL NODE.JS (REQUIRED)" -ForegroundColor Red
    Write-Host "   • Download: https://nodejs.org/en/download/" -ForegroundColor White
    Write-Host "   • Install LTS version" -ForegroundColor White
    Write-Host "   • Restart PowerShell and run this script again" -ForegroundColor White
    Write-Host ""
}

Write-Host "❷ COMMIT YOUR CHANGES" -ForegroundColor Yellow
Write-Host "   In PowerShell, run:" -ForegroundColor White
Write-Host "   cd '$rootDir'" -ForegroundColor Gray
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m 'Fix deployment configuration and prepare for launch'" -ForegroundColor Gray
Write-Host "   git push origin main" -ForegroundColor Gray
Write-Host ""

Write-Host "❸ DEPLOY TO VERCEL" -ForegroundColor Yellow
Write-Host "   Option A - GitHub Integration (Recommended):" -ForegroundColor White
Write-Host "   • Go to: https://vercel.com/new" -ForegroundColor Cyan
Write-Host "   • Import your GitHub repository" -ForegroundColor White
Write-Host "   • Vercel will auto-detect Next.js" -ForegroundColor White
Write-Host "   • Override these settings:" -ForegroundColor White
Write-Host "     - Root Directory: CommerceCult_app_v2-1/frontend" -ForegroundColor Gray
Write-Host "     - Build Command: npm run build" -ForegroundColor Gray
Write-Host "     - Output Directory: .next" -ForegroundColor Gray
Write-Host "     - Install Command: npm ci" -ForegroundColor Gray
Write-Host "   • Click 'Deploy'" -ForegroundColor White
Write-Host "   • Future pushes to 'main' will auto-deploy!" -ForegroundColor Green
Write-Host ""
Write-Host "   Option B - Vercel CLI:" -ForegroundColor White
Write-Host "   npm install -g vercel" -ForegroundColor Gray
Write-Host "   cd CommerceCult_app_v2-1/frontend" -ForegroundColor Gray
Write-Host "   vercel --prod" -ForegroundColor Gray
Write-Host ""

Write-Host "❹ CUSTOM DOMAIN (commercecult.app)" -ForegroundColor Yellow
Write-Host "   • In Vercel Dashboard → Settings → Domains" -ForegroundColor White
Write-Host "   • Add 'commercecult.app'" -ForegroundColor White
Write-Host "   • Follow DNS configuration instructions" -ForegroundColor White
Write-Host ""

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Summary
Write-Host "=== SUMMARY ===" -ForegroundColor Cyan
if ($nodeInstalled -and $structureValid) {
    Write-Host "Your repository is ready for deployment!" -ForegroundColor Green
    Write-Host "Follow steps above to get live" -ForegroundColor White
}
else {
    Write-Host "Prerequisites needed before deployment" -ForegroundColor Yellow
    Write-Host "Fix the issues above, then run this script again" -ForegroundColor White
}
Write-Host ""
