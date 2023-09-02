import { log } from "./log";

const injectRefreshUIButton = () => {
    let Snippet = `
    <svg role="img" height="16"
            width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 Svg-img-16-icon-autoMirror main-topBar-icon"
            viewBox="0 0 128 128" data-encore-id="icon" style="fill:white;">
            <path
                d="M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z"
                style="fill:whiteSmoke;opacity:0.8"></path>
        </svg>`
    //let Snippet = `<svg role="img" height="16" width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 Svg-img-16-icon-autoMirror main-topBar-icon" viewBox="0 0 16 16" data-encore-id="icon"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>`
    
    let refButtonElement = document.createElement("button");
    refButtonElement.classList = "main-topBar-button main-topBar-forward";
    refButtonElement.style="border-radius: 5px;";
    refButtonElement.onclick = function(){location.reload();}
    const toNodes = html =>
    new DOMParser().parseFromString(html, 'text/html').body.childNodes[0]
    
    refButtonElement.appendChild(toNodes(Snippet));
 
   return refButtonElement
    }
   

    export {injectRefreshUIButton}