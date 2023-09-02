var legacyTweaks=(()=>{var o,t,s=Object.create,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,e=(e,t)=>function(){return t||(0,e[c(e)[0]])((t={exports:{}}).exports,t),t.exports},a=(e,t,a)=>{a=null!=e?s(p(e)):{};var r=!t&&e&&e.__esModule?a:l(a,"default",{value:e,enumerable:!0}),o=e,i=void 0,n=void 0;if(o&&"object"==typeof o||"function"==typeof o)for(let e of c(o))u.call(r,e)||e===i||l(r,e,{get:()=>o[e],enumerable:!(n=d(o,e))||n.enumerable});return r},r=e({"external-global-plugin:react"(e,t){t.exports=Spicetify.React}}),e=e({"external-global-plugin:react-dom"(e,t){t.exports=Spicetify.ReactDOM}}),i=function(){var e=Array.prototype.slice.call(arguments);e.unshift("[legacyLook.js]: "),console.log.apply(console,e)},n=a(r()),g=a(e()),y={settingsContainer:"settings-module__settingsContainer___e9wxn_legacyTweaks",heading:"settings-module__heading___AnER-_legacyTweaks",description:"settings-module__description___dP4fR_legacyTweaks",inputWrapper:"settings-module__inputWrapper___LgOrw_legacyTweaks"},m=class{constructor(e,t,a={}){this.name=e,this.settingsId=t,this.initialSettingsFields=a,this.settingsFields=this.initialSettingsFields,this.setRerender=null,this.buttonClassnames=null,this.pushSettings=async()=>{for(Object.entries(this.settingsFields).forEach(([e,t])=>{"button"!==t.type&&void 0===this.getFieldValue(e)&&this.setFieldValue(e,t.defaultValue)});!Spicetify?.Platform?.History?.listen;)await new Promise(e=>setTimeout(e,100));this.stopHistoryListener&&this.stopHistoryListener(),this.stopHistoryListener=Spicetify.Platform.History.listen(e=>{"/preferences"===e.pathname&&this.render()}),"/preferences"===Spicetify.Platform.History.location.pathname&&await this.render()},this.rerender=()=>{this.setRerender&&this.setRerender(Math.random())},this.render=async()=>{for(;!document.getElementById("desktop.settings.selectLanguage");){if("/preferences"!==Spicetify.Platform.History.location.pathname)return;await new Promise(e=>setTimeout(e,100))}var e=document.querySelector(".main-view-container__scroll-node-child main div");if(!e)return console.error("[spcr-settings] settings container not found");this.buttonClassnames=Array.from(e.querySelectorAll(":scope > button")).at(-1)?.className??null;let t=Array.from(e.children).find(e=>e.id===this.settingsId);t?console.log(t):((t=document.createElement("div")).id=this.settingsId,t.className=y.settingsContainer,e.appendChild(t)),g.default.render(n.default.createElement(this.FieldsContainer,null),t)},this.addButton=(e,t,a,r,o)=>{this.settingsFields[e]={type:"button",description:t,value:a,events:{onClick:r,...o}}},this.addInput=(e,t,a,r,o)=>{this.settingsFields[e]={type:"input",description:t,defaultValue:a,events:{onChange:r,...o}}},this.addHidden=(e,t)=>{this.settingsFields[e]={type:"hidden",defaultValue:t}},this.addToggle=(e,t,a,r,o)=>{this.settingsFields[e]={type:"toggle",description:t,defaultValue:a,events:{onChange:r,...o}}},this.addDropDown=(e,t,a,r,o,i)=>{this.settingsFields[e]={type:"dropdown",description:t,defaultValue:a[r],options:a,events:{onSelect:o,...i}}},this.getFieldValue=e=>JSON.parse(Spicetify.LocalStorage.get(this.settingsId+"."+e)||"{}")?.value,this.setFieldValue=(e,t)=>{Spicetify.LocalStorage.set(this.settingsId+"."+e,JSON.stringify({value:t}))},this.FieldsContainer=()=>{var[e,t]=(0,n.useState)(0);return this.setRerender=t,n.default.createElement("div",{className:y.settingsContainer,key:e},n.default.createElement("h2",{className:["main-shelf-title main-type-cello",y.heading].join(" ")},this.name),Object.entries(this.settingsFields).map(([e,t])=>n.default.createElement(this.Field,{nameId:e,field:t})))},this.Field=a=>{var e=this.settingsId+"."+a.nameId;let t;if(t="button"===a.field.type?a.field.value:this.getFieldValue(a.nameId),"hidden"===a.field.type)return n.default.createElement(n.default.Fragment,null);const[r,o]=(0,n.useState)(t),i=e=>{void 0!==e&&(o(e),this.setFieldValue(a.nameId,e))};return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"main-type-mesto",style:{color:"var(--spice-subtext)"}},n.default.createElement("label",{className:y.description,htmlFor:e},a.field.description||"")),n.default.createElement("span",{className:["x-settings-secondColumn",y.inputWrapper].join(" ")},"input"===a.field.type?n.default.createElement("input",{className:"main-dropDown-dropDown",id:e,dir:"ltr",value:r,type:"text",...a.field.events,onChange:e=>{i(e.currentTarget.value);var t=a.field.events?.onChange;t&&t(e)}}):"button"===a.field.type?n.default.createElement("span",{className:""},n.default.createElement("button",{id:e,className:this.buttonClassnames??"",...a.field.events,onClick:e=>{i();var t=a.field.events?.onClick;t&&t(e)},type:"button"},r)):"toggle"===a.field.type?n.default.createElement("label",{className:"x-toggle-wrapper x-settings-secondColumn"},n.default.createElement("input",{id:e,className:"x-toggle-input",type:"checkbox",checked:r,...a.field.events,onClick:e=>{i(e.currentTarget.checked);var t=a.field.events?.onClick;t&&t(e)}}),n.default.createElement("span",{className:"x-toggle-indicatorWrapper"},n.default.createElement("span",{className:"x-toggle-indicator"}))):"dropdown"===a.field.type?n.default.createElement("select",{className:"main-dropDown-dropDown",id:e,...a.field.events,onChange:e=>{i(a.field.options[e.currentTarget.selectedIndex]);var t=a.field.events?.onChange;t&&t(e)}},a.field.options.map((e,t)=>n.default.createElement("option",{selected:e===r,value:t+1},e))):n.default.createElement(n.default.Fragment,null)))}}},b=e=>{o=e,document.querySelector("html").style.setProperty("--nav-bar-width",o+"px")},h=()=>{JSON.parse(Spicetify.LocalStorage.get("LegacyLook-settingsObject")).removePanelGaps?(w(".Root").then(e=>{e.style.setProperty("--panel-gap","0px","important")}),w('[aria-label="Main"]'),i("Removed gaps between panels...")):(i("Adding back gaps between panels..."),w(".Root").then(e=>{e.style.setProperty("--panel-gap","8px","important")}),w('[aria-label="Main"]'))},f=(JSON.parse(Spicetify.LocalStorage.get("LegacyLook-settingsObject")),()=>{let e=`

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

`;return(t=JSON.parse(Spicetify.LocalStorage.get("LegacyLook-settingsObject"))).playlistTitleShift12px&&(e+=`

.main-topBar-topbarContent.main-entityHeader-topbarContentFadeIn>span {
    transform: translate(12px);
}

`),t.roundedPlayButtons&&(e+=`


.main-topBar-button {
    border-radius: var(--br5) !important;
}

.main-playButton-PlayButton>button>span {
    border-radius: var(--br5);
}

`),t.roundedTopNavbuttons&&(e+=`

[aria-label="Friend Activity"] {
    border-radius: var(--br5);
}

button>figure {
    border-radius: var(--br5);

}

[data-encore-id="buttonTertiary"].main-userWidget-boxCondensed {
    border-radius: var(--br5);
}

`),t.removeRoundedPanelCorners&&(e+=`


.Root__main-view {
    border-radius: var(--none) !important;
}

.main-yourLibraryX-entryPoints {
    border-radius: var(--none) !important;
}
.nav-ylx .Root__main-view .os-viewport{
    border-radius: var(--none) !important;
}

`),t.fullSizeCoverart&&(e+=`

.main-coverSlotExpanded-containerExpanding {
    width: var(--nav-bar-width);
    border-radius: var(--none);
}


.os-viewport.os-viewport-native-scrollbars-invisible>.os-content>.main-yourLibraryX-libraryRootlist {
    height: calc(100% - var(--nav-bar-width))
}
`),t.removePanelGaps&&(e+=`
div.main {
    --panel-gap: var(--none) !important;
}
`),t.changePlaybarColor&&(e+=`

.main-nowPlayingBar-container {
    background-color: var(--playbarColor) !important
}
`),t.rootBackgroundColor&&(e+=`

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

`),t.squareChips&&(e+=`

[data-encore-id="chip"]>span {
    border-radius: var(--br5);
}
`),t.removePlaylistCoverArt&&(e+=`
[aria-colindex="2"]>img {
    display: none;
}
.main-trackList-rowImage.main-trackList-rowImageFallback {
    display: none;
}

.main-trackList-rowImageWithPlay {
    display: none;
}

`),t.removeSidebarListEntryRoundedCorners&&(e+=`
[aria-posinset]>div {
    border-radius: var(--none);
}

[aria-posinset]>div>div:hover {
    border-radius: var(--none);

}
`),t.playlistEntryUnderscored&&(e+=`

[aria-rowindex] {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
`),t.removeTrackListRoundedCorners&&(e+=`
.main-trackList-trackListRow {
    border-radius: var(--none)
}
`),t.singleLineTracklist&&(e+=`

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
`),t.oldPlayButton&&(e+=`
.main-playPauseButton-button {
    background-color: transparent;
    border: 2px solid #bcbcbc;

}

.main-playPauseButton-button>svg>path {
    fill: #bababa;
}
`),t.removeExpandLibraryArrowButton&&(e+=`
.Button-sc-1dqy6lx-0.Button-sm-16-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle.main-yourLibraryX-button.main-yourLibraryX-iconOnly.main-useDropTarget-base:nth-of-type(2) {
    display: none !important;
}
`),t.carouselRoundedRectangles&&(e+=`

.search-searchCategory-carouselButton {
    border-radius: var(--br5);
}
`),t.removeBlankSpaceBetweenMyLibraryAndLikedSongs&&(e+=`


.main-yourLibraryX-entryPoints.main-yourLibraryX-library {
    margin-top: -16px;
}
`),t.sidebarLibraryUnderscored&&(e+=`

.main-useDropTarget-base.main-yourLibraryX-listItem {
    border-bottom: 1px solid rgb(109 109 109 / 20%);
}
`),t.removeRoundedCornersSpotifyConnect&&(e+=`
.main-connectBar-connected {
    border-radius: 0px !important;
    
}
`),e}),v=e=>{var t=document.createElement("style");return t.type="text/css",t.rel="stylesheet",t.id="legacyStyle",t.textContent=e,t},S=()=>{document.querySelector("#legacyStyle")&&document.querySelector("#legacyStyle").remove(),k()},k=()=>{var e=v(f());document.head.appendChild(e),h(),document.head.querySelector("#legacyStyle")?i("Success! Applied custom stylesheet."):(i("FAILED to apply stylesheet! Trying again."),document.head.appendChild(e),document.head.querySelector("#legacyStyle")||i("FAILED to apply stylesheet twice! Giving up, Contact developer."))},L=()=>{return{requiredTweaks:!0,playlistTitleShift12px:!1,roundedPlayButtons:!1,roundedTopNavbuttons:!1,fullSizeCoverart:!1,removePanelGaps:!1,changePlaybarColor:!1,rootBackgroundColor:!1,removeRoundedPanelCorners:!1,removePlaylistCoverArt:!1,squareChips:!1,removeSidebarListEntryRoundedCorners:!1,playlistEntryUnderscored:!1,removeTrackListRoundedCorners:!1,singleLineTracklist:!1,oldPlayButton:!1,removeExpandLibraryArrowButton:!1,carouselRoundedRectangles:!1,removeBlankSpaceBetweenMyLibraryAndLikedSongs:!1,sidebarLibraryUnderscored:!1,removeRoundedCornersSpotifyConnect:!1}};function w(r){return new Promise(t=>{if(document.querySelector(r))return t(document.querySelector(r));const a=new MutationObserver(e=>{document.querySelector(r)&&(t(document.querySelector(r)),a.disconnect())});a.observe(document.body,{childList:!0,subtree:!0})})}var x=async function(){for(;null==Spicetify||!Spicetify.showNotification;)await new Promise(e=>setTimeout(e,100));"1.2.10.760"!=Spicetify.Platform.PlatformData.event_sender_context_information.client_version_string?Spicetify.LocalStorage.get("LegacyLook-hasDisabledCompatibilityWarning")||Spicetify.showNotification(`
        LegacyLook.js may not be compatible with this version of Spotify.
        This extension is compatible with Spotify 1.2.10.760.
        You are using ${Spicetify.Platform.PlatformData.event_sender_context_information.client_version_string}.
        If extension doesn't work, you may need to install Spotify 1.2.10.760.
        If it works on any other version, let me know,
        and I will add it to the compatibility list.
        You can disable this message in settings.
        `,0,15e3):Spicetify.showNotification("LegacyTweaks.js is active...",0,500);{var e=JSON.parse(Spicetify.LocalStorage.get("LegacyLook-settingsObject"));let t={};const a=()=>{Spicetify.LocalStorage.set("LegacyLook-settingsObject",JSON.stringify(t)),S()},r=(null==e?(t=L(),i("Setting not available in local storage, most likely first run."),a(),Spicetify.showNotification("Hello! Go to Spotify settings to configure the extension to your liking.",5e3),i("Current settings are: ",t)):t=e,console.log("Add Settings"),new m("LegacyLook Tweak settings","LegacyLook-settings"));"1.2.10.760"==Spicetify.Platform.PlatformData.event_sender_context_information.client_version_string&&r.addToggle("hasDisabledCompatibilityWarning","Disable Compatibility warning at startup",Spicetify.LocalStorage.get("LegacyLook-hasDisabledCompatibilityWarning"),e=>{Spicetify.LocalStorage.set("LegacyLook-hasDisabledCompatibilityWarning",e.target.checked)}),r.addInput("left-sidebar-max-width","Left Sidebar Max Width in pixels (420px by default)",Spicetify.LocalStorage.get("LegacyLook-sidebarMaxWidth")?Spicetify.LocalStorage.get("LegacyLook-sidebarMaxWidth"):420,()=>{let e=parseInt(r.getFieldValue("left-sidebar-max-width"));e<200||1e3<e?(e=420,Spicetify.showNotification("Value must be greater or equal than 200 and less or equal to 1000!")):(Spicetify.LocalStorage.set("LegacyLook-sidebarMaxWidth",e),b(parseInt(r.getFieldValue("left-sidebar-max-width"))))}),r.addButton("set-sidebar-max-width-default","Reset width to default (420px)","RESET",()=>{r.setFieldValue("left-sidebar-max-width","420px"),Spicetify.LocalStorage.set("LegacyLook-sidebarMaxWidth",420),b(parseInt(r.getFieldValue("left-sidebar-max-width"))),r.rerender(),Spicetify.showNotification("Reset to default: 420px")}),r.addToggle("playlistTitleShift12px","When enabled, shifts playlist title by 12px to the right.",t.playlistTitleShift12px,e=>{t.playlistTitleShift12px=e.target.checked,a()}),r.addToggle("fullSizeCoverart","When enabled, Cover Art will take up full width of the Sidebar.",t.fullSizeCoverart,e=>{t.fullSizeCoverart=e.target.checked,a()}),r.addToggle("removePanelGaps","When enabled, removes gaps between UI sections, it is meant to be used together with rounded panel corners remover.",t.removePanelGaps,e=>{t.removePanelGaps=e.target.checked,a(),h()}),r.addToggle("removeRoundedPanelCorners","When enabled, removes rounded corners of UI panels, it is meant to be used together with panel gaps remover.",t.removeRoundedPanelCorners,e=>{t.removeRoundedPanelCorners=e.target.checked,a()}),r.addToggle("changePlaybarColor","When enabled, changes playbar color to gray, just like 2017 Spotify App.",t.changePlaybarColor,e=>{t.changePlaybarColor=e.target.checked,a()}),r.addToggle("rootBackgroundColor","When enabled, changes background color scheme to gray, just like 2017 Spotify App.",t.rootBackgroundColor,e=>{t.rootBackgroundColor=e.target.checked,a()}),r.addToggle("removePlaylistCoverArt","When enabled, hides small covers in tracklists.",t.removePlaylistCoverArt,e=>{t.removePlaylistCoverArt=e.target.checked,a()}),r.addToggle("squareChips",'When enabled, makes selectors just below "My Library" square instead od rounded.',t.squareChips,e=>{t.squareChips=e.target.checked,a()}),r.addToggle("removeSidebarListEntryRoundedCorners",'When enabled, removes rounded corners from entries in the list below "My library". (Currently buggy.)',t.removeSidebarListEntryRoundedCorners,e=>{t.removeSidebarListEntryRoundedCorners=e.target.checked,a()}),r.addToggle("playlistEntryUnderscored","When enabled, underscores each tracklist entry, just like 2017 Spotify App did.",t.playlistEntryUnderscored,e=>{t.playlistEntryUnderscored=e.target.checked,a()}),r.addToggle("sidebarLibraryUnderscored","When enabled, underscores each sidebar Library entry.",t.sidebarLibraryUnderscored,e=>{t.sidebarLibraryUnderscored=e.target.checked,a()}),r.addToggle("removeTrackListRoundedCorners","When enabled, removes rounded corners of tracklist entries.",t.removeTrackListRoundedCorners,e=>{t.removeTrackListRoundedCorners=e.target.checked,a()}),r.addToggle("singleLineTracklist","When enabled, tracklist entries take up only single line, TITLE-ARTIST on a single line.",t.singleLineTracklist,e=>{t.singleLineTracklist=e.target.checked,a()}),r.addToggle("oldPlayButton","When enabled, reverts main play button to look like the one 2017 Spotify App had.",t.oldPlayButton,e=>{t.oldPlayButton=e.target.checked,a()}),r.addToggle("removeExpandLibraryArrowButton",'When enabled, removes "Expand Library Arrow" button. Expanding library is still possible via dragging.',t.removeExpandLibraryArrowButton,e=>{t.removeExpandLibraryArrowButton=e.target.checked,a()}),r.addToggle("carouselRoundedRectangles",'When enabled, changes carousel buttons to rounded rectangles, used when selectors below "My Library" no longer fit',t.carouselRoundedRectangles,e=>{t.carouselRoundedRectangles=e.target.checked,a()}),r.addToggle("removeBlankSpaceBetweenMyLibraryAndLikedSongs",'When enabled, removes a bit of blank space between "Liked Songs" and "My Library".',t.removeBlankSpaceBetweenMyLibraryAndLikedSongs,e=>{t.removeBlankSpaceBetweenMyLibraryAndLikedSongs=e.target.checked,a()}),r.addToggle("removeRoundedCornersSpotifyConnect","When enabled, removes rounded borders of Spotify Connect bar so it fits nicely.",t.removeRoundedCornersSpotifyConnect,e=>{t.removeRoundedCornersSpotifyConnect=e.target.checked,a()}),r.pushSettings(),r.rerender()}k(),i("Developed on: Spotify for Windows; 1.2.10.760.g52970952 Spicetify v2.20.2"),i("May not work on newer Spotify releases..."),i("LegacyTweaks.js v0.2 starting up..."),w(".Root__now-playing-bar").then(()=>{i("Playbar exists, waiting for sidebar to exist..."),w("#spicetify-sticky-list").then(()=>{i("Sidebar exists, waiting for navbtns to exist..."),w('[aria-label="Go back"]').then(()=>{i("Assuming spotify is fully loaded..."),t()})})});const t=()=>{w(".main-topBar-historyButtons").then(e=>{e.prepend((()=>{var e,t=document.createElement("button");t.classList="main-topBar-button main-topBar-forward",t.style="border-radius: 5px;",t.onclick=function(){location.reload()};return t.appendChild((e=`
    <svg role="img" height="16"
            width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 Svg-img-16-icon-autoMirror main-topBar-icon"
            viewBox="0 0 128 128" data-encore-id="icon" style="fill:white;">
            <path
                d="M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z"
                style="fill:whiteSmoke;opacity:0.8"></path>
        </svg>`,(new DOMParser).parseFromString(e,"text/html").body.childNodes[0])),t})())}),i("Appended a refresh button to navbuttons..."),w("#spicetify-sticky-list").then(e=>{try{i("Trying to append 'Liked Songs' to sidebar list..."),document.querySelector("#customLikedSongs")||e.insertAdjacentHTML("beforeend",`<li class="main-yourLibraryX-navItem InvalidDropTarget" id="customLikedSongs">
                                                                                                                                                                      
              <a draggable="false" aria-label="Liked Songs" class="link-subtle main-yourLibraryX-navLink" href="#" aria-expanded="false" onclick="Spicetify.Platform.History.push('/collection/tracks')">
          
              <svg role="img" height="35"
                  width="35" aria-hidden="true" class="Svg-sc-ytk21e-0 Svg-img-medium-icon search-icon" viewBox="0 -5 24 24"
                  data-encore-id="icon">
                  <path
                      d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"
                      style="fill: gray;"
                      >
                  </path>
              </svg>
              
              <svg role="img" height="24" width="24" aria-hidden="true"
                  class="Svg-sc-ytk21e-0 Svg-img-medium-icon search-active-icon" viewBox="0 0 24 24" data-encore-id="icon">
                  <path
                      d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z">
                  </path>
                  <path
                      d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z">
                  </path>
              </svg>
              
              <span data-encore-id="type" class="Type__TypeElement-sc-goli3j-0 TypeElement-balladBold-type" style="transform:translateX(-11px) ;">
                  Liked Songs
              </span>
          
              </a>
          
          </li>
          `),document.querySelector("#customLikedSongs")?i("Success! Liked Songs hyperlink is present..."):i("Liked Songs hyperlink injection has failed...")}catch(e){i("Liked Songs hyperlink injection has failed..., got an error:",e)}});{o=null!=Spicetify&&Spicetify.LocalStorage?null==Spicetify?void 0:Spicetify.LocalStorage.get("LegacyLook-sidebarMaxWidth"):420;let a=!1;i("Sidebar width limit is set to:",o),new MutationObserver(e=>{o=null!=Spicetify&&Spicetify.LocalStorage?null==Spicetify?void 0:Spicetify.LocalStorage.get("LegacyLook-sidebarMaxWidth"):420;var t,e=parseInt(e[0].target.style.getPropertyValue("--nav-bar-width"),10);document.querySelector(".main-coverSlotExpanded-containerExpanding")?(2===document.querySelectorAll(".main-yourLibraryX-libraryIsExpanded>div:nth-child(1)>header>div>button.main-useDropTarget-show").length&&((t=document.querySelector(".main-yourLibraryX-iconOnly.main-useDropTarget-base.main-useDropTarget-show")).style.display="block",t.click(),t.style.display=""),o<e&&document.querySelector("html").style.setProperty("--nav-bar-width",o+"px")):(i("isBigCoverListenerPending",a),a||(a=!0,waitForElm(".main-coverSlotExpanded-containerExpanding").then(()=>{document.querySelector(".main-yourLibraryX-header.main-yourLibraryX-headerIsCollapsed")&&document.querySelector(".main-yourLibraryX-collapseButton.main-yourLibraryX-collapseButtonIsCollapsed").firstChild.click(),document.querySelector("html").style.setProperty("--nav-bar-width",o+"px"),a=0})))}).observe(document.querySelector("html"),{attributes:!0,attributeFilter:["style"]})}}};(async()=>{await x()})()})();(async()=>{var e;document.getElementById("legacyTweaks")||((e=document.createElement("style")).id="legacyTweaks",e.textContent=String.raw`
  .settings-module__settingsContainer___e9wxn_legacyTweaks{display:contents}.settings-module__heading___AnER-_legacyTweaks{grid-column:1/-1;font-size:1.125rem;line-height:1.5rem;color:#fff;margin-top:24px}.settings-module__description___dP4fR_legacyTweaks{font-size:.875rem;line-height:1.25rem}.settings-module__inputWrapper___LgOrw_legacyTweaks{display:flex;justify-self:end}
      `.trim(),document.head.appendChild(e))})();