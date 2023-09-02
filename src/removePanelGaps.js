import { waitForElm } from "./app";
import { log } from "./log";


const removePanelGaps = () => {
waitForElm(`.Root`).then((element) =>{
   element.style.setProperty("--panel-gap", "0px", "important"); //removes gaps between panels
    document.querySelector(`[aria-label="Main"]`).style.gap = 0; // removes gap between panels

    log("Removed gaps between panels...")
})

    
 
        
}

const revertPanelGaps = () => {
    

    

    waitForElm(`.Root`).then((element) =>{
        element.style.setProperty("--panel-gap", "8px", "important"); //adds back gaps between panels
        document.querySelector(`[aria-label="Main"]`).style.gap = "8px"; //adds back between panels 
     log("Adding back gaps between panels...")
         
     })




}



const updatePanelGapsState = () =>{
    let settingsObject = JSON.parse(Spicetify.LocalStorage.get('LegacyLook-settingsObject'));
    if (settingsObject["removePanelGaps"]) {
        removePanelGaps();
    }else{
        revertPanelGaps();
    }

}

export {updatePanelGapsState}