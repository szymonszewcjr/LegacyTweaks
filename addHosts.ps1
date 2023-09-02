$file = "C:\Windows\System32\drivers\etc\hosts"
$hostfile = Get-Content $file
$hostfile += "
##    SPOTIFY - NO UPDATE - LegacyTweaks

0.0.0.0 upgrade.spotify.com
0.0.0.0 sto3-accesspoint-a88.sto3.spotify.net
0.0.0.0 upgrade.scdn.co
0.0.0.0 beta.spotify.map.fastly.net
0.0.0.0 prod.spotify.map.fastlylb.net

##    SPOTIFY - NO UPDATE - END
"
Set-Content -Path $file -Value $hostfile -Force