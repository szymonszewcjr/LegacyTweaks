import { log } from './log';
import { updatePanelGapsState } from './removePanelGaps';
import * as styles from './styleSnippets';


let settingsObject = JSON.parse(Spicetify.LocalStorage.get('LegacyLook-settingsObject'));





const composeStylesheet = () =>{
    settingsObject = JSON.parse(Spicetify.LocalStorage.get('LegacyLook-settingsObject'));
    let styleTextContent = styles.requiredTweaks;

    if(settingsObject["playlistTitleShift12px"]){
        styleTextContent += styles.playlistTitleShift12px
    }

    if(settingsObject["roundedPlayButtons"]){
        styleTextContent += styles.roundedPlayButtons
    }
    
    if(settingsObject["roundedTopNavbuttons"]){
        styleTextContent += styles.roundedTopNavbuttons
    }
    
    if(settingsObject["removeRoundedPanelCorners"]){
        styleTextContent += styles.removeRoundedPanelCorners;
    }

    if(settingsObject["fullSizeCoverart"]){
        styleTextContent += styles.fullSizeCoverart
    }
    
    if(settingsObject["removePanelGaps"]){
        styleTextContent += styles.removePanelGaps //////////////////////////////////////UWAGA 
    }
    
    if(settingsObject["changePlaybarColor"]){
        styleTextContent += styles.changePlaybarColor
    }
    
    if(settingsObject["rootBackgroundColor"]){
        styleTextContent += styles.rootBackgroundColor
    }
    
    if(settingsObject["squareChips"]){
        styleTextContent += styles.squareChips
    }
    
    if(settingsObject["removePlaylistCoverArt"]){
        styleTextContent += styles.removePlaylistCoverArt
    }
    
    if(settingsObject["removeSidebarListEntryRoundedCorners"]){
        styleTextContent += styles.removeSidebarListEntryRoundedCorners
    }
    
    if(settingsObject["playlistEntryUnderscored"]){
        styleTextContent += styles.playlistEntryUnderscored
    }
    
    if(settingsObject["removeTrackListRoundedCorners"]){
        styleTextContent += styles.removeTrackListRoundedCorners
    }
    
    if(settingsObject["singleLineTracklist"]){
        styleTextContent += styles.singleLineTracklist
    }
    
    if(settingsObject["oldPlayButton"]){
        styleTextContent += styles.oldPlayButton
    }
    
    if(settingsObject["removeExpandLibraryArrowButton"]){
        styleTextContent += styles.removeExpandLibraryArrowButton
    }
    
    if(settingsObject["carouselRoundedRectangles"]){
        styleTextContent += styles.carouselRoundedRectangles
    }
    
    if(settingsObject["removeBlankSpaceBetweenMyLibraryAndLikedSongs"]){
        styleTextContent += styles.removeBlankSpaceBetweenMyLibraryAndLikedSongs
    }
    
    if(settingsObject["sidebarLibraryUnderscored"]){
        styleTextContent += styles.sidebarLibraryUnderscored
    }
    
    if(settingsObject["removeRoundedCornersSpotifyConnect"]){
        styleTextContent += styles.removeRoundedCornersSpotifyConnect
    }

    if(settingsObject["removeRoundedCornersNavbuttons"]){
        styleTextContent += styles.removeRoundedCornersNavbuttons
    }
    



    return styleTextContent;
     

}

const makeStyleElement = (_textContent) => {
    var ss = document.createElement("style");
    ss.type = "text/css";
    ss.rel = "stylesheet";
    ss.id="legacyStyle";
    ss.textContent = _textContent;
    return ss;
}

const updateStyleElement = () => {

if(document.querySelector(`#legacyStyle`)){
    document.querySelector(`#legacyStyle`).remove()

    applyStyle();
}else{
    applyStyle();
}


}

const applyStyle = ()=>{

    let styleEl = makeStyleElement(composeStylesheet());
    document.head.appendChild(styleEl);
    updatePanelGapsState();
    
    if(document.head.querySelector("#legacyStyle")){
        log("Success! Applied custom stylesheet.")
    }else{
        log("FAILED to apply stylesheet! Trying again.")
        document.head.appendChild(styleEl);
        if(!document.head.querySelector("#legacyStyle")){
            log("FAILED to apply stylesheet twice! Giving up, Contact developer.")
        }
    }
}




export {applyStyle,updateStyleElement}