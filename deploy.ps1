$user = 'antigravity'
$pass = '3z7df5D1$'
$host_url = 'ftp://damiennichols.com'

# Check if we should target httpdocs specifically
# The user mentioned it, so let's try to prefix paths with it.
$remote_root = "" # Start empty, if we find we need httpdocs we can add it here.
# Based on ls output, root seems to be the web root. 
# But I'll try to create/use httpdocs if that's what's expected.
# Actually, I'll try a test upload to httpdocs/ first.
Write-Host "Checking for httpdocs access..."
& curl.exe -u "$($user):$($pass)" -X "MKD httpdocs" "$host_url/" 2>$null

# We will try to upload to httpdocs if the user specifically asked for it.
# If the FTP user's root IS httpdocs, then uploading to /httpdocs/ might create a nested folder.
# Given 'ls' showed index.html at root, it's likely root IS httpdocs or we are in it.
# However, I will follow the user's wish and try to target 'httpdocs'.

$target_path = "httpdocs"

# Build the project
Write-Host "Building project..."
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed!"
    exit 1
}

$base = Join-Path $PSScriptRoot "dist"
$files = Get-ChildItem -Path $base -Recurse -File

Write-Host "Starting upload..."

foreach ($f in $files) {
    $relative = $f.FullName.Substring($base.Length + 1).Replace('\', '/')
    $remote_file_path = "$target_path/$relative"
    
    Write-Host "Uploading $relative to $remote_file_path..."
    & curl.exe -s --ftp-create-dirs -u "$($user):$($pass)" -T "$($f.FullName)" "$($host_url)/$($remote_file_path)"
    
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "Failed to upload $relative"
    }
}

Write-Host "Deployment complete!"
