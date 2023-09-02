# LegacyTweaks

[Spicetify](https://github.com/khanhas/spicetify-cli) extension that aims to bring back the legacy layout from around 2017, while focusing on useablility.

 ## Features

 A descriptive list of all tweaks is available here: [tweaks.md](./docs/tweaks.md).
 
 Here's a quick rundown of the features:
  * [Rounded corners](./docs/tweaks.md#panel-gap-remover-and-panel-rounded-corner-remover) that are there just for the sake of it are removed.
  * [Single line tracklists](./docs/tweaks.md#single-line-tracklist-entries).
  * [Gaps](./docs/tweaks.md#second-one-allows-you-to-remove-rounded-corners-of-those-panels-turning-them-into-squares-i-recommend-leaving-it-on-as-square-panels-with-gaps-look-kinda-weird) between panels are gone.
  * Legacy color palette.
  * Better, resizable [cover art display](./docs/tweaks.md#enlarged-cover-art-will-take-up-full-width-of-the-sidebar), that is tied to the sidebar's width with configurable limit.
  * [Legacy play/pause button](./docs/tweaks.md#old-spotify-play-button).
  * A [UI refresh button](./docs/tweaks.md#refresh-button) next to navigation buttons.
  * ["Liked songs"](./docs/tweaks.md#liked-songs-shortcut) link under "Marketplace" on sidebar, assuming that you have installed marketplace.
  * [Removed cover thumbnails in playlists](./docs/tweaks.md#hide-small-covers-in-tracklists), so they feel less cluttered.
  * [Spotify Connect bar is no longer rounded](./docs/tweaks.md#removes-rounded-corners-on-spotify-connect-bar), and nicely fills the window.
  * Navigation buttons, friends and "My profile" buttons are now rounded rectangles.
  * Minor layout tweaks for bits that annoyed Me.



## Installation
Copy `legacyTweaks.js` into your [Spicetify](https://github.com/khanhas/spicetify-cli) extensions directory:
| **Platform** | **Path**                                                                            |
|------------|-----------------------------------------------------------------------------------|
| **Linux**      | `~/.config/spicetify/Extensions` or `$XDG_CONFIG_HOME/.config/spicetify/Extensions/` |
| **MacOS**      | `~/spicetify_data/Extensions` or `$SPICETIFY_CONFIG/Extensions`                      |
| **Windows**    | `%appdata%\spicetify\Extensions\`                                              |

After putting the extension file into the correct folder, run the following command to install the extension:
```
spicetify config extensions legacyLook.js
spicetify apply
```

