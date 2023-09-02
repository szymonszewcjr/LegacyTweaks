
import {log} from "./log.js"
import {tryAppendLikesSongsHyperlink} from "./appendLikedSongs";
import {injectRefreshUIButton} from "./injectRefreshButton";
import {appendStyleSheet} from "./appendStyleSheet";
import {setupSettings} from "./settings";
import { sidebarResizing } from "./sidebarResizing.js";
import { applyStyle } from "./dynamicStyling.js";
//import './styles/legacy.scss';

//import styles from './styles/legacy.module.scss'


function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

async function main() {
  while (!Spicetify?.showNotification) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  if(Spicetify.Platform.PlatformData.event_sender_context_information.client_version_string != '1.2.10.760'){

    if(!Spicetify.LocalStorage.get('LegacyLook-hasDisabledCompatibilityWarning')){
       Spicetify.showNotification(`
        LegacyLook.js may not be compatible with this version of Spotify.
        This extension is compatible with Spotify 1.2.10.760.
        You are using ${Spicetify.Platform.PlatformData.event_sender_context_information.client_version_string}.
        If extension doesn't work, you may need to install Spotify 1.2.10.760.
        If it works on any other version, let me know,
        and I will add it to the compatibility list.
        You can disable this message in settings.
        `,0,15000)
    }



   } else{
    Spicetify.showNotification("LegacyTweaks.js is active...",0,500);
  }

  // Show message on start.
  


  
  




//appendStyleSheet();
setupSettings();

applyStyle();


log(`Developed on: Spotify for Windows; 1.2.10.760.g52970952 Spicetify v2.20.2`)
log("May not work on newer Spotify releases...")
log("LegacyTweaks.js v0.2 starting up...");


waitForElm(".Root__now-playing-bar").then(()=>{ //wait for playing bar to exist
    log("Playbar exists, waiting for sidebar to exist...")
    waitForElm(`#spicetify-sticky-list`).then(() => { //wait for sidebar to exist
        log("Sidebar exists, waiting for navbtns to exist...")
        waitForElm(`[aria-label="Go back"]`).then(()=>{//wait for "GO BACK" button to exist
            // assuming everything has loaded
            log("Assuming spotify is fully loaded...")
            
            fullyLoaded();
        })
    })
})







const fullyLoaded = () => {



    
    waitForElm(`.main-topBar-historyButtons`).then(el=>{
        el.prepend(injectRefreshUIButton())})
    

    log("Appended a refresh button to navbuttons...")


    



    waitForElm(`#spicetify-sticky-list`).then((stickyList)=>{
        tryAppendLikesSongsHyperlink(stickyList); 
    })

        sidebarResizing();


}
}
export default main;
export { waitForElm}
