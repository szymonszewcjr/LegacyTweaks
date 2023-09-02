import { log } from "./log";

const appendStyleSheet = ()=>{

var ss = document.createElement("style");
ss.type = "text/css";
ss.rel = "stylesheet";
ss.id="legacyStyle";
ss.textContent = `

:root {
    --none: 0px;
    --br5: 5px;
    --bgcolor: #1f1f1f;
    --playbarColor: #232323;
    --background-base: #1d1d1d !important;
    --spice-main: #191919 !important;
}


/*custom settings button*/
[id="LegacyLook-settings.set-sidebar-max-width-default"]{
    Button-sc-y0gtbx-0 Button-sm-buttonSecondary-useBrowserDefaultFocusStyle
}



.main-topBar-topbarContent.main-entityHeader-topbarContentFadeIn>span {
    transform: translate(12px);

}

.main-topBar-button {
    border-radius: var(--br5) !important;
}

[aria-label="Friend Activity"] {
    border-radius: var(--br5);
}

button>figure {
    border-radius: var(--br5);

}

[data-encore-id="buttonTertiary"].main-userWidget-boxCondensed {
    border-radius: var(--br5);
}

.main-coverSlotExpanded-container {
    width: var(--left-sidebar-width);
    border-radius: var(--none);
}

.os-viewport.os-viewport-native-scrollbars-invisible>.os-content>.main-yourLibraryX-libraryRootlist {
    height: calc(100% - var(--left-sidebar-width))
}

div.main {
    --panel-gap: var(--none) !important;
}

.main-nowPlayingBar-container {
    background-color: var(--playbarColor) !important
}

.Root__top-container {
    background-color: var(--bgcolor) !important
}

.Root__nav-bar {
    background-color: var(--bgcolor) !important
}

.Root__main-view {
    border-radius: var(--none);
}

.main-yourLibraryX-entryPoints {
    border-radius: var(--none);
}

[aria-colindex="2"]>img {
    display: none;
}

.main-trackList-rowImage.main-trackList-rowImageFallback {
    display: none;
}

[data-encore-id="chip"]>span {
    border-radius: var(--br5);
}

[aria-posinset]>div {
    border-radius: var(--none);
}

[aria-posinset]>div>div:hover {
    border-radius: var(--none);

}

#spicetify-sticky-list {
    background-color: var(--bgcolor);
}

.main-yourLibraryX-libraryContainer {
    background-color: var(--bgcolor);
}

[aria-rowindex] {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.main-trackList-trackListRow {
    border-radius: var(--none)
}

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

.main-playPauseButton-button {
    background-color: transparent;
    border: 2px solid #bcbcbc;

}

.main-playPauseButton-button>svg>path {
    fill: #bababa;
}

.main-yourLibraryX-iconOnly.main-useDropTarget-base.main-useDropTarget-show {
    display: none !important;
}

.search-searchCategory-carouselButton {
    border-radius: var(--br5);
}

.main-trackList-rowImageWithPlay {
    display: none;
}

.main-yourLibraryX-entryPoints.main-yourLibraryX-library {
    margin-top: -16px;
}

.main-playButton-PlayButton>button>span {
    border-radius: var(--br5);
}

.main-useDropTarget-base.main-yourLibraryX-listItem {
    border-bottom: 1px solid rgb(109 109 109 / 20%);
}

.main-connectBar-connected {
    border-radius: 0px;
    
}





/* //////////////////  SEARCH SCREEN */ 


/*
SCRAPPED


.search-searchBrowse-SearchBrowse{
    transform: translateY(50vh);
}

.main-topBar-topbarContent{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
transform: translateY(30vh);
}
*/









`


document.head.appendChild(ss);

if(document.querySelector(`#legacyStyle`)){
    log("Stylesheet injected successfully");
}else{
    log("Failed to inject stylesheet");
    alert("[LegacyLook.js]: Failed to inject stylesheet")
}

}
export {appendStyleSheet};