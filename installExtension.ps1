$spicetifyDir = "$env:LOCALAPPDATA\spicetify"
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/szymonszewcjr/LegacyTweaks/main/dist/legacyTweaks.js?token=GHSAT0AAAAAACEYGXL7CHNFCWP7RRUMLNJMZHTM5EQ" -OutFile $spicetifyDir -Force