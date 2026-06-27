$dir = 'd:\C Amazing\portfolio\Chuks.design\public\assets\Portfolio'
Set-Location $dir
$files = Get-ChildItem -Filter *.mp4
foreach ($file in $files) {
    if (-not $file.Name.Contains('-opt')) {
        $out = $file.BaseName + '-opt.mp4'
        ffmpeg -i $file.Name -vcodec libx264 -crf 28 -preset fast -vf "scale='min(1280,iw)':-2" -an -y $out
    }
}
