import { log } from "./log";

const tryAppendLikesSongsHyperlink = (el)=>{
    try {
      log("Trying to append 'Liked Songs' to sidebar list...")
      if(!document.querySelector(`#customLikedSongs`)){
  
          //insert html snippet for "Likes songs" below marketplace hyperlink
          let likesSongsLink = `<li class="main-yourLibraryX-navItem InvalidDropTarget" id="customLikedSongs">
                                                                                                                                                                      
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
          `
          el.insertAdjacentHTML("beforeend", likesSongsLink);
  
      }
  
      
      if(document.querySelector(`#customLikedSongs`)){
    log("Success! Liked Songs hyperlink is present...");
          
      }else{
          log("Liked Songs hyperlink injection has failed...");
      }
  
      } catch (error) {
          log("Liked Songs hyperlink injection has failed..., got an error:", error);
      }
  }

  export {tryAppendLikesSongsHyperlink}