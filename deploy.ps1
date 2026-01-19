$user = 'antigravity'
$pass = '3z7df5D1$'
$host_url = 'ftp://damiennichols.com'

# Upload to httpdocs folder

# Build the project
Write-Host "Building project..."
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed!"
    exit 1
}

$base = Join-Path $PSScriptRoot "dist"
$files = Get-ChildItem -Path $base -Recurse -File

Write-Host "Starting upload to root and httpdocs..."

foreach ($f in $files) {
    $relative = $f.FullName.Substring($base.Length + 1).Replace('\', '/')
    
    # Deploy to Root
    Write-Host "Uploading $relative to root..."
    & curl.exe -s --ftp-create-dirs -u "$($user):$($pass)" -T "$($f.FullName)" "$($host_url)/$($relative)"
    
    # Deploy to httpdocs
    Write-Host "Uploading $relative to httpdocs..."
    & curl.exe -s --ftp-create-dirs -u "$($user):$($pass)" -T "$($f.FullName)" "$($host_url)/httpdocs/$($relative)"
    
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "Failed to upload $relative"
    }
}

Write-Host "Deployment complete!"
