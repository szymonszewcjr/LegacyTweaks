[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$spicetifyDir = "$env:LOCALAPPDATA\spicetify"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/szymonszewcjr/LegacyTweaks/main/dist/legacyTweaks.js" -OutFile $spicetifyDir -Force