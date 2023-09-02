import { SettingsSection } from "spcr-settings";
import { changedMaxWidthSignal } from "./sidebarResizing";
import { updateStyleElement } from "./dynamicStyling";
import { updatePanelGapsState } from "./removePanelGaps";
import { log } from "./log";

const defaultSettingsObject =()=> {
  let settingsObject= {
        "requiredTweaks": true,
        "playlistTitleShift12px": false,
        "roundedPlayButtons": false,
        "roundedTopNavbuttons": false,
        "fullSizeCoverart": false,
        "removePanelGaps": false,
        "changePlaybarColor": false,
        "rootBackgroundColor": false,
        "removeRoundedPanelCorners": false,
        "removePlaylistCoverArt": false,
        "squareChips": false,
        "removeSidebarListEntryRoundedCorners": false,
        "playlistEntryUnderscored": false,
        "removeTrackListRoundedCorners": false,
        "singleLineTracklist": false,
        "oldPlayButton": false,
        "removeExpandLibraryArrowButton": false,
        "carouselRoundedRectangles": false,
        "removeBlankSpaceBetweenMyLibraryAndLikedSongs": false,
        "sidebarLibraryUnderscored": false,
        "removeRoundedCornersSpotifyConnect": false
        

    }
    return settingsObject;
}








/**
 * TODOS:
 * Add input for single line playlist heigth;
 * Add switch for refresh button
 * 
 * 
 */
const setupSettings = () => {
    let settingsFromStorage = JSON.parse(Spicetify.LocalStorage.get('LegacyLook-settingsObject')) 
    let settingsObject = {}// 

    const saveObject = () => {
        Spicetify.LocalStorage.set('LegacyLook-settingsObject', JSON.stringify(settingsObject));
        updateStyleElement();
    }


    if (settingsFromStorage == null) { //if object doesn't exist in local storage, create one and save it.
        settingsObject = defaultSettingsObject();

        log("Setting not available in local storage, most likely first run.")

        saveObject();
        Spicetify.showNotification("Hello! Go to Spotify settings to configure the extension to your liking.", 5000);
        log("Current settings are: ", settingsObject)
        
        
    }else{
        settingsObject = settingsFromStorage;
    } 

        console.log("Add Settings")
    const settings = new SettingsSection("LegacyLook Tweak settings", "LegacyLook-settings");

    if(Spicetify.Platform.PlatformData.event_sender_context_information.client_version_string == '1.2.10.760'){
            settings.addToggle(
        "hasDisabledCompatibilityWarning",
        "Disable Compatibility warning at startup",
        Spicetify.LocalStorage.get('LegacyLook-hasDisabledCompatibilityWarning'),
         (e) => {Spicetify.LocalStorage.set('LegacyLook-hasDisabledCompatibilityWarning',e.target.checked)}
         )
    }


            
    

    let defaultWidth = 420;
    settings.addInput("left-sidebar-max-width", "Left Sidebar Max Width in pixels (420px by default)",
     Spicetify.LocalStorage.get('LegacyLook-sidebarMaxWidth')? Spicetify.LocalStorage.get('LegacyLook-sidebarMaxWidth'): defaultWidth, //if entry exists, use it, else use default
      () => {

        let inputWidth = parseInt(settings.getFieldValue("left-sidebar-max-width"));
        if (inputWidth < 200 || inputWidth > 1000) {
            inputWidth = 420;
            Spicetify.showNotification("Value must be greater or equal than 200 and less or equal to 1000!");

        } else {

            Spicetify.LocalStorage.set("LegacyLook-sidebarMaxWidth", inputWidth);
            changedMaxWidthSignal(parseInt(settings.getFieldValue("left-sidebar-max-width")));
        }

    });
   
    settings.addButton("set-sidebar-max-width-default", `Reset width to default (${defaultWidth}px)`, "RESET", () => {

        settings.setFieldValue("left-sidebar-max-width", `${defaultWidth}px`)
        Spicetify.LocalStorage.set("LegacyLook-sidebarMaxWidth", defaultWidth);
        changedMaxWidthSignal(parseInt(settings.getFieldValue("left-sidebar-max-width")));
        settings.rerender();
        Spicetify.showNotification(`Reset to default: ${defaultWidth}px`);
    });

    settings.addToggle("playlistTitleShift12px",
        "When enabled, shifts playlist title by 12px to the right.",
        settingsObject["playlistTitleShift12px"], (e) => {
            settingsObject["playlistTitleShift12px"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("fullSizeCoverart",
        "When enabled, Cover Art will take up full width of the Sidebar.",
        settingsObject["fullSizeCoverart"], (e) => {
            settingsObject["fullSizeCoverart"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("removePanelGaps",
        "When enabled, removes gaps between UI sections, it is meant to be used together with rounded panel corners remover.",
        settingsObject["removePanelGaps"], (e) => {
            settingsObject["removePanelGaps"] = e.target.checked;
            saveObject();
            updatePanelGapsState();
        });

    settings.addToggle("removeRoundedPanelCorners",
        "When enabled, removes rounded corners of UI panels, it is meant to be used together with panel gaps remover.",
        settingsObject["removeRoundedPanelCorners"], (e) => {
            settingsObject["removeRoundedPanelCorners"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("changePlaybarColor",
        "When enabled, changes playbar color to gray, just like 2017 Spotify App.",
        settingsObject["changePlaybarColor"], (e) => {
            settingsObject["changePlaybarColor"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("rootBackgroundColor",
        "When enabled, changes background color scheme to gray, just like 2017 Spotify App.",
        settingsObject["rootBackgroundColor"], (e) => {
            settingsObject["rootBackgroundColor"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("removePlaylistCoverArt",
        "When enabled, hides small covers in tracklists.",
        settingsObject["removePlaylistCoverArt"], (e) => {
            settingsObject["removePlaylistCoverArt"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("squareChips",
        "When enabled, makes selectors just below \"My Library\" square instead od rounded.",
        settingsObject["squareChips"], (e) => {
            settingsObject["squareChips"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("removeSidebarListEntryRoundedCorners",
        "When enabled, removes rounded corners from entries in the list below \"My library\". (Currently buggy.)",
        settingsObject["removeSidebarListEntryRoundedCorners"], (e) => {
            settingsObject["removeSidebarListEntryRoundedCorners"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("playlistEntryUnderscored",
        "When enabled, underscores each tracklist entry, just like 2017 Spotify App did.",
        settingsObject["playlistEntryUnderscored"], (e) => {
            settingsObject["playlistEntryUnderscored"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("sidebarLibraryUnderscored",
        "When enabled, underscores each sidebar Library entry.",
        settingsObject["sidebarLibraryUnderscored"], (e) => {
            settingsObject["sidebarLibraryUnderscored"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("removeTrackListRoundedCorners",
        "When enabled, removes rounded corners of tracklist entries.",
        settingsObject["removeTrackListRoundedCorners"], (e) => {
            settingsObject["removeTrackListRoundedCorners"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("singleLineTracklist",
        "When enabled, tracklist entries take up only single line, TITLE-ARTIST on a single line.",
        settingsObject["singleLineTracklist"], (e) => {
            settingsObject["singleLineTracklist"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("oldPlayButton",
        "When enabled, reverts main play button to look like the one 2017 Spotify App had.",
        settingsObject["oldPlayButton"], (e) => {
            settingsObject["oldPlayButton"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("removeExpandLibraryArrowButton",
        "When enabled, removes \"Expand Library Arrow\" button. Expanding library is still possible via dragging.",
        settingsObject["removeExpandLibraryArrowButton"], (e) => {
            settingsObject["removeExpandLibraryArrowButton"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("carouselRoundedRectangles",
        "When enabled, changes carousel buttons to rounded rectangles, used when selectors below \"My Library\" no longer fit",
        settingsObject["carouselRoundedRectangles"], (e) => {
            settingsObject["carouselRoundedRectangles"] = e.target.checked;
            saveObject();
        });

    settings.addToggle("removeBlankSpaceBetweenMyLibraryAndLikedSongs",
        "When enabled, removes a bit of blank space between \"Liked Songs\" and \"My Library\".",
        settingsObject["removeBlankSpaceBetweenMyLibraryAndLikedSongs"], (e) => {
            settingsObject["removeBlankSpaceBetweenMyLibraryAndLikedSongs"] = e.target.checked;
            saveObject();
        });


    settings.addToggle("removeRoundedCornersSpotifyConnect",
        "When enabled, removes rounded borders of Spotify Connect bar so it fits nicely.",
        settingsObject["removeRoundedCornersSpotifyConnect"], (e) => {
            settingsObject["removeRoundedCornersSpotifyConnect"] = e.target.checked;
            saveObject();
        });

    settings.pushSettings();
    settings.rerender();
    
    

    
}
export { setupSettings }