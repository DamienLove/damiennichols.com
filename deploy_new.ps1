$user = 'abwjyvtj'
$pass = '1wyEh2v65H'
$host_url = 'ftp://node712.extrainfra.com'

# Build the project
Write-Host "Building project..."
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed!"
    exit 1
}

$base = Join-Path $PSScriptRoot "dist"
$files = Get-ChildItem -Path $base -Recurse -File

Write-Host "Starting upload to public_html..."

foreach ($f in $files) {
    $relative = $f.FullName.Substring($base.Length + 1).Replace('\', '/')
    
    # Deploy to public_html
    # Note: public_html is a symlink to domains/magide.dev/public_html
    Write-Host "Uploading $relative to public_html..."
    & curl.exe -s --ftp-create-dirs -u "$($user):$($pass)" -T "$($f.FullName)" "$($host_url)/public_html/$($relative)"
    
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "Failed to upload $relative"
    }
}

Write-Host "Deployment complete!"
