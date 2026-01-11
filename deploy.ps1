$user = 'antigravity'
$pass = '17*vF75qw'
$base = 'c:\Projects\damiennichols-site\damiennichols.com\dist'

Write-Host "Creating assets directory..."
curl.exe -u "$($user):$($pass)" -X "MKD assets" "ftp://damiennichols.com/"

Write-Host "Uploading root files..."
$files = @('.htaccess', 'app.js', 'index.html', 'package.json', 'vite.svg')
foreach ($f in $files) {
    $localFile = Join-Path $base $f
    if (Test-Path $localFile) {
        Write-Host "Uploading $f..."
        curl.exe -u "$($user):$($pass)" -T "$localFile" "ftp://damiennichols.com/$f"
    }
}

Write-Host "Uploading assets..."
$assets = Get-ChildItem -Path (Join-Path $base "assets")
foreach ($file in $assets) {
    if ($file.PsIsContainer) { continue }
    $a = $file.Name
    $localFile = $file.FullName
    Write-Host "Uploading assets/$a..."
    curl.exe -u "$($user):$($pass)" -T "$localFile" "ftp://damiennichols.com/assets/$a"
}

Write-Host "Deployment complete!"
