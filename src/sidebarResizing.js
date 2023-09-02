import { log } from "./log";
import { waitForElm } from "./waitForElm.js";
var sidebarWidthLimit;


const changedMaxWidthSignal = (newLimit)=>{
    sidebarWidthLimit = newLimit;
    document.querySelector(`html`).style.setProperty('--nav-bar-width', `${sidebarWidthLimit}px`);
}

const sidebarResizing = () =>{
    sidebarWidthLimit = Spicetify?.LocalStorage ? Spicetify?.LocalStorage.get('LegacyLook-sidebarMaxWidth') : 420;
    

let isBigCoverListenerPending = false;
//prevents resizing past set width, 420px by default





log("Sidebar width limit is set to:", sidebarWidthLimit)
let widthMutationObserver = new MutationObserver(e=>{
    sidebarWidthLimit = Spicetify?.LocalStorage ? Spicetify?.LocalStorage.get('LegacyLook-sidebarMaxWidth') : 420;
        

 let width = parseInt(e[0].target.style.getPropertyValue('--nav-bar-width'), 10);

//if library is collapsed 



 if(!!document.querySelector(`.main-coverSlotExpanded-containerExpanding`)){ //if big cover, then limit sidebar width else don't

    if(document.querySelectorAll(`.main-yourLibraryX-libraryIsExpanded>div:nth-child(1)>header>div>button.main-useDropTarget-show`).length === 2){
        //we're expanded, click button to collapse
        let collapseButton = document.querySelector(`.main-yourLibraryX-iconOnly.main-useDropTarget-base.main-useDropTarget-show`);
        collapseButton.style.display = 'block';
        collapseButton.click();
        collapseButton.style.display = '';
    }

        if(width > sidebarWidthLimit){
        
        //document.querySelector(`.main-yourLibraryX-iconOnly.main-useDropTarget-base.main-useDropTarget-show`).click();
        
        document.querySelector(`html`).style.setProperty('--nav-bar-width', `${sidebarWidthLimit}px`)
    }
 }else{
    log('isBigCoverListenerPending', isBigCoverListenerPending);
    if(!isBigCoverListenerPending){
        isBigCoverListenerPending = true;
        
        waitForElm('.main-coverSlotExpanded-containerExpanding').then(()=>{
            if(document.querySelector(`.main-yourLibraryX-header.main-yourLibraryX-headerIsCollapsed`)){
                document.querySelector(`.main-yourLibraryX-collapseButton.main-yourLibraryX-collapseButtonIsCollapsed`).firstChild.click();
        }
            document.querySelector(`html`).style.setProperty('--nav-bar-width', `${sidebarWidthLimit}px`);
            isBigCoverListenerPending=0;
        })
}

 }


});

widthMutationObserver.observe(document.querySelector(`html`),{
    
    attributes:    true,
    attributeFilter: ["style"]
});
}

export {sidebarResizing, changedMaxWidthSignal}