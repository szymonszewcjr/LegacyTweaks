export const requiredTweaks = `

:root {
    --none: 0px;
    --br5: 5px;
    --bgcolor: #1f1f1f;
    --playbarColor: #232323;
    --background-base: #1d1d1d !important;
    --spice-main: #191919 !important;
}


 /* required for options to show up correctly */

span.x-settings-secondColumn.settings-module__inputWrapper___LgOrw_legacyDlook > label{ 
    transform: translateY(8px);
    margin-bottom: -3.8px;
}
.main-type-mesto {
    margin-bottom: -60px;
}
.main-type-mesto + [for="LegacyLook-settings.left-sidebar-max-width"]{
    transform:translateY(-30px);
}




/*custom settings button*/

[id="LegacyLook-settings.set-sidebar-max-width-default"]{
    direction: inherit;
    visibility: visible;
    -webkit-box-direction: normal;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-weight: 700;
    font-family: var(--font-family,CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif));
    background-color: transparent;
    border-radius: 500px;
    cursor: pointer;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    touch-action: manipulation;
    transition-duration: 33ms;
    transition-property: background-color, border-color, color, box-shadow, filter, transform;
    user-select: none;
    vertical-align: middle;
    transform: translate3d(0px, 0px, 0px);
    padding-block: 3px;
    padding-inline: 15px;
    border: 1px solid var(--essential-subdued,#878787);
    color: var(--text-base,#000000);
    min-block-size: 32px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 0.875rem;
    overflow-wrap: anywhere;
    
    
    transform:translateY(-40px);
    margin-top: 40px;
    }

`

//shifts big playlist title heading 12px down.

export const playlistTitleShift12px = `

.main-topBar-topbarContent.main-entityHeader-topbarContentFadeIn>span {
    transform: translate(12px);
}

`


//turns play buttons from circles into rounded rects

export const roundedPlayButtons = `


.main-topBar-button {
    border-radius: var(--br5) !important;
}

.main-playButton-PlayButton>button>span {
    border-radius: var(--br5);
}

` 


//turns navbuttons buttons from circles into rounded rects

export const roundedTopNavbuttons = `

[aria-label="Friend Activity"] {
    border-radius: var(--br5);
}

button>figure {
    border-radius: var(--br5);

}

[data-encore-id="buttonTertiary"].main-userWidget-boxCondensed {
    border-radius: var(--br5);
}

`

//responsible for positioning and resizing cover art element and setting sidebar playlist menu height

export const fullSizeCoverart = `

.main-coverSlotExpanded-containerExpanding {
    width: var(--nav-bar-width);
    border-radius: var(--none);
}


.os-viewport.os-viewport-native-scrollbars-invisible>.os-content>.main-yourLibraryX-libraryRootlist {
    height: calc(100% - var(--nav-bar-width))
}
`

//removes gaps between ui panels

export const removePanelGaps = `
div.main {
    --panel-gap: var(--none) !important;
}
`

//changes color of player panel to old spotify shade of gray

export const changePlaybarColor = `

.main-nowPlayingBar-container {
    background-color: var(--playbarColor) !important
}
`

//changes colors of rest of the panels to old spotify shade of gray

export const rootBackgroundColor = `

.Root__top-container {
    
    background-color: var(--bgcolor) !important
}

.Root__nav-bar {
    background-color: var(--bgcolor) !important
}

#spicetify-sticky-list {
    background-color: var(--bgcolor);
}

.main-yourLibraryX-libraryContainer {
    background-color: var(--bgcolor);
}

`


//removes rounded panel corners from mainViews

export const removeRoundedPanelCorners = `


.Root__main-view {
    border-radius: var(--none) !important;
}

.main-yourLibraryX-entryPoints {
    border-radius: var(--none) !important;
}
.nav-ylx .Root__main-view .os-viewport{
    border-radius: var(--none) !important;
}

`

//removes covers from playlist entries

export const removePlaylistCoverArt = `
[aria-colindex="2"]>img {
    display: none;
}
.main-trackList-rowImage.main-trackList-rowImageFallback {
    display: none;
}

.main-trackList-rowImageWithPlay {
    display: none;
}

`

//circle chips to rounded rects. (chips are those arrow thingies under "Your Library")

export const squareChips = `

[data-encore-id="chip"]>span {
    border-radius: var(--br5);
}
`


//removes rounded corners from myLibrary entries

export const removeSidebarListEntryRoundedCorners = `
[aria-posinset]>div {
    border-radius: var(--none);
}

[aria-posinset]>div>div:hover {
    border-radius: var(--none);

}
`

//underscores each of the tracklist entries

export const playlistEntryUnderscored = `

[aria-rowindex] {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
`


//removes round corners in tracklists, eg. playlists, albums, etc.

export const removeTrackListRoundedCorners = `
.main-trackList-trackListRow {
    border-radius: var(--none)
}
`

// playlist entries are now single-line

export const singleLineTracklist = `

.main-trackList-trackListRow>[aria-colindex].main-trackList-rowSectionStart>.main-trackList-rowMainContent {
    display: flex;
    flex-direction: row;
}

.main-trackList-trackListRow {
    height: 2.5rem;
}

[aria-rowindex="2"] {
    border-top: none;
}

.main-trackList-trackListHeader {
    margin-bottom: 0px;
    border-bottom: none;
}
`

// old spotify play/pause button, only border instead of solid white
export const oldPlayButton = `
.main-playPauseButton-button {
    background-color: transparent;
    border: 2px solid #bcbcbc;

}

.main-playPauseButton-button>svg>path {
    fill: #bababa;
}
`

//removes expand library arrow, this arrow is not needed when using full size coverart
export const removeExpandLibraryArrowButton = `
.Button-sc-1dqy6lx-0.Button-sm-16-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle.main-yourLibraryX-button.main-yourLibraryX-iconOnly.main-useDropTarget-base:nth-of-type(2) {
    display: none !important;
}
`

//this relates to chips and is used to jog chips around when sidebar is too small to display them all,
//this tweak turns circle buttons into rounded rects.
export const carouselRoundedRectangles =`

.search-searchCategory-carouselButton {
    border-radius: var(--br5);
}
`


//removes bit of blank space between Mylibrary and Liked Songs, assuming you have enabled Liked songs shortcut
export const removeBlankSpaceBetweenMyLibraryAndLikedSongs =`


.main-yourLibraryX-entryPoints.main-yourLibraryX-library {
    margin-top: -16px;
}
`

//underscores each library entry
export const sidebarLibraryUnderscored = `

.main-useDropTarget-base.main-yourLibraryX-listItem {
    border-bottom: 1px solid rgb(109 109 109 / 20%);
}
`


// removes rounded corners from SpotifyConnect to make fill whole bottom of window without leaving voids.
export const removeRoundedCornersSpotifyConnect = `
.main-connectBar-connected {
    border-radius: 0px !important;
    
}
`


