$user = 'abwjyvtj'
$pass = '1wyEh2v65H'
$host_url = 'ftp://node712.extrainfra.com'
$remote_path = '/domains/holldasa.com/public_html/'

# Build the project (already done, but keeping in script for future use)
# Write-Host "Building project..."
# npm run build

# if ($LASTEXITCODE -ne 0) {
#     Write-Error "Build failed!"
#     exit 1
# }

$base = Join-Path $PSScriptRoot "dist"
$files = Get-ChildItem -Path $base -Recurse -File

Write-Host "Starting upload to $remote_path..."

foreach ($f in $files) {
    $relative = $f.FullName.Substring($base.Length + 1).Replace('\', '/')
    
    Write-Host "Uploading $relative to $remote_path..."
    & curl.exe -s --ftp-create-dirs -u "$($user):$($pass)" -T "$($f.FullName)" "$($host_url)$($remote_path)$($relative)"
    
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "Failed to upload $relative"
    }
}

Write-Host "Deployment complete!"
