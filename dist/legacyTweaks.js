var legacyTweaks = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // external-global-plugin:react-dom
  var require_react_dom = __commonJS({
    "external-global-plugin:react-dom"(exports, module) {
      module.exports = Spicetify.ReactDOM;
    }
  });

  // src/log.js
  var log = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift("[legacyLook.js]: ");
    console.log.apply(console, args);
  };

  // src/appendLikedSongs.js
  var tryAppendLikesSongsHyperlink = (el) => {
    try {
      log("Trying to append 'Liked Songs' to sidebar list...");
      if (!document.querySelector(`#customLikedSongs`)) {
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
          `;
        el.insertAdjacentHTML("beforeend", likesSongsLink);
      }
      if (document.querySelector(`#customLikedSongs`)) {
        log("Success! Liked Songs hyperlink is present...");
      } else {
        log("Liked Songs hyperlink injection has failed...");
      }
    } catch (error) {
      log("Liked Songs hyperlink injection has failed..., got an error:", error);
    }
  };

  // src/injectRefreshButton.js
  var injectRefreshUIButton = () => {
    let Snippet = `
    <svg role="img" height="16"
            width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 Svg-img-16-icon-autoMirror main-topBar-icon"
            viewBox="0 0 128 128" data-encore-id="icon" style="fill:white;">
            <path
                d="M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z"
                style="fill:whiteSmoke;opacity:0.8"></path>
        </svg>`;
    let refButtonElement = document.createElement("button");
    refButtonElement.classList = "main-topBar-button main-topBar-forward";
    refButtonElement.style = "border-radius: 5px;";
    refButtonElement.onclick = function() {
      location.reload();
    };
    const toNodes = (html) => new DOMParser().parseFromString(html, "text/html").body.childNodes[0];
    refButtonElement.appendChild(toNodes(Snippet));
    return refButtonElement;
  };

  // node_modules/spcr-settings/settingsSection.tsx
  var import_react = __toESM(require_react());
  var import_react_dom = __toESM(require_react_dom());

  // postcss-module:C:\Users\szymo\AppData\Local\Temp\tmp-6416-Yu8Moa3MXtYM\18a5718e1cd0\settings.module.css
  var settings_module_default = { "settingsContainer": "settings-module__settingsContainer___e9wxn_legacyTweaks", "heading": "settings-module__heading___AnER-_legacyTweaks", "description": "settings-module__description___dP4fR_legacyTweaks", "inputWrapper": "settings-module__inputWrapper___LgOrw_legacyTweaks" };

  // node_modules/spcr-settings/settingsSection.tsx
  var SettingsSection = class {
    constructor(name, settingsId, initialSettingsFields = {}) {
      this.name = name;
      this.settingsId = settingsId;
      this.initialSettingsFields = initialSettingsFields;
      this.settingsFields = this.initialSettingsFields;
      this.setRerender = null;
      this.buttonClassnames = null;
      this.pushSettings = async () => {
        Object.entries(this.settingsFields).forEach(([nameId, field]) => {
          if (field.type !== "button" && this.getFieldValue(nameId) === void 0) {
            this.setFieldValue(nameId, field.defaultValue);
          }
        });
        while (!Spicetify?.Platform?.History?.listen) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        if (this.stopHistoryListener)
          this.stopHistoryListener();
        this.stopHistoryListener = Spicetify.Platform.History.listen((e) => {
          if (e.pathname === "/preferences") {
            this.render();
          }
        });
        if (Spicetify.Platform.History.location.pathname === "/preferences") {
          await this.render();
        }
      };
      this.rerender = () => {
        if (this.setRerender) {
          this.setRerender(Math.random());
        }
      };
      this.render = async () => {
        while (!document.getElementById("desktop.settings.selectLanguage")) {
          if (Spicetify.Platform.History.location.pathname !== "/preferences")
            return;
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        const allSettingsContainer = document.querySelector(
          ".main-view-container__scroll-node-child main div"
        );
        if (!allSettingsContainer)
          return console.error("[spcr-settings] settings container not found");
        this.buttonClassnames = Array.from(allSettingsContainer.querySelectorAll(":scope > button")).at(
          -1
        )?.className ?? null;
        let pluginSettingsContainer = Array.from(
          allSettingsContainer.children
        ).find((child) => child.id === this.settingsId);
        if (!pluginSettingsContainer) {
          pluginSettingsContainer = document.createElement("div");
          pluginSettingsContainer.id = this.settingsId;
          pluginSettingsContainer.className = settings_module_default.settingsContainer;
          allSettingsContainer.appendChild(pluginSettingsContainer);
        } else {
          console.log(pluginSettingsContainer);
        }
        import_react_dom.default.render(/* @__PURE__ */ import_react.default.createElement(this.FieldsContainer, null), pluginSettingsContainer);
      };
      this.addButton = (nameId, description, value, onClick, events) => {
        this.settingsFields[nameId] = {
          type: "button",
          description,
          value,
          events: {
            onClick,
            ...events
          }
        };
      };
      this.addInput = (nameId, description, defaultValue, onChange, events) => {
        this.settingsFields[nameId] = {
          type: "input",
          description,
          defaultValue,
          events: {
            onChange,
            ...events
          }
        };
      };
      this.addHidden = (nameId, defaultValue) => {
        this.settingsFields[nameId] = {
          type: "hidden",
          defaultValue
        };
      };
      this.addToggle = (nameId, description, defaultValue, onChange, events) => {
        this.settingsFields[nameId] = {
          type: "toggle",
          description,
          defaultValue,
          events: {
            onChange,
            ...events
          }
        };
      };
      this.addDropDown = (nameId, description, options, defaultIndex, onSelect, events) => {
        this.settingsFields[nameId] = {
          type: "dropdown",
          description,
          defaultValue: options[defaultIndex],
          options,
          events: {
            onSelect,
            ...events
          }
        };
      };
      this.getFieldValue = (nameId) => {
        return JSON.parse(
          Spicetify.LocalStorage.get(`${this.settingsId}.${nameId}`) || "{}"
        )?.value;
      };
      this.setFieldValue = (nameId, newValue) => {
        Spicetify.LocalStorage.set(
          `${this.settingsId}.${nameId}`,
          JSON.stringify({ value: newValue })
        );
      };
      this.FieldsContainer = () => {
        const [rerender, setRerender] = (0, import_react.useState)(0);
        this.setRerender = setRerender;
        return /* @__PURE__ */ import_react.default.createElement("div", {
          className: settings_module_default.settingsContainer,
          key: rerender
        }, /* @__PURE__ */ import_react.default.createElement("h2", {
          className: ["main-shelf-title main-type-cello", settings_module_default.heading].join(
            " "
          )
        }, this.name), Object.entries(this.settingsFields).map(([nameId, field]) => {
          return /* @__PURE__ */ import_react.default.createElement(this.Field, {
            nameId,
            field
          });
        }));
      };
      this.Field = (props) => {
        const id = `${this.settingsId}.${props.nameId}`;
        let defaultStateValue;
        if (props.field.type === "button") {
          defaultStateValue = props.field.value;
        } else {
          defaultStateValue = this.getFieldValue(props.nameId);
        }
        if (props.field.type === "hidden") {
          return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null);
        }
        const [value, setValueState] = (0, import_react.useState)(defaultStateValue);
        const setValue = (newValue) => {
          if (newValue !== void 0) {
            setValueState(newValue);
            this.setFieldValue(props.nameId, newValue);
          }
        };
        return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
          className: "main-type-mesto",
          style: { color: "var(--spice-subtext)" }
        }, /* @__PURE__ */ import_react.default.createElement("label", {
          className: settings_module_default.description,
          htmlFor: id
        }, props.field.description || "")), /* @__PURE__ */ import_react.default.createElement("span", {
          className: ["x-settings-secondColumn", settings_module_default.inputWrapper].join(" ")
        }, props.field.type === "input" ? /* @__PURE__ */ import_react.default.createElement("input", {
          className: "main-dropDown-dropDown",
          id,
          dir: "ltr",
          value,
          type: "text",
          ...props.field.events,
          onChange: (e) => {
            setValue(e.currentTarget.value);
            const onChange = props.field.events?.onChange;
            if (onChange)
              onChange(e);
          }
        }) : props.field.type === "button" ? /* @__PURE__ */ import_react.default.createElement("span", {
          className: ""
        }, /* @__PURE__ */ import_react.default.createElement("button", {
          id,
          className: this.buttonClassnames ?? "",
          ...props.field.events,
          onClick: (e) => {
            setValue();
            const onClick = props.field.events?.onClick;
            if (onClick)
              onClick(e);
          },
          type: "button"
        }, value)) : props.field.type === "toggle" ? /* @__PURE__ */ import_react.default.createElement("label", {
          className: "x-toggle-wrapper x-settings-secondColumn"
        }, /* @__PURE__ */ import_react.default.createElement("input", {
          id,
          className: "x-toggle-input",
          type: "checkbox",
          checked: value,
          ...props.field.events,
          onClick: (e) => {
            setValue(e.currentTarget.checked);
            const onClick = props.field.events?.onClick;
            if (onClick)
              onClick(e);
          }
        }), /* @__PURE__ */ import_react.default.createElement("span", {
          className: "x-toggle-indicatorWrapper"
        }, /* @__PURE__ */ import_react.default.createElement("span", {
          className: "x-toggle-indicator"
        }))) : props.field.type === "dropdown" ? /* @__PURE__ */ import_react.default.createElement("select", {
          className: "main-dropDown-dropDown",
          id,
          ...props.field.events,
          onChange: (e) => {
            setValue(
              props.field.options[e.currentTarget.selectedIndex]
            );
            const onChange = props.field.events?.onChange;
            if (onChange)
              onChange(e);
          }
        }, props.field.options.map((option, i) => {
          return /* @__PURE__ */ import_react.default.createElement("option", {
            selected: option === value,
            value: i + 1
          }, option);
        })) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null)));
      };
    }
  };

  // src/waitForElm.js
  var waitForElm = (selector) => {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver((mutations) => {
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
  };

  // src/sidebarResizing.js
  var sidebarWidthLimit;
  var changedMaxWidthSignal = (newLimit) => {
    sidebarWidthLimit = newLimit;
    document.querySelector(`html`).style.setProperty("--nav-bar-width", `${sidebarWidthLimit}px`);
  };
  var sidebarResizing = () => {
    sidebarWidthLimit = (Spicetify == null ? void 0 : Spicetify.LocalStorage) ? Spicetify == null ? void 0 : Spicetify.LocalStorage.get("LegacyLook-sidebarMaxWidth") : 420;
    let isBigCoverListenerPending = false;
    log("Sidebar width limit is set to:", sidebarWidthLimit);
    let widthMutationObserver = new MutationObserver((e) => {
      sidebarWidthLimit = (Spicetify == null ? void 0 : Spicetify.LocalStorage) ? Spicetify == null ? void 0 : Spicetify.LocalStorage.get("LegacyLook-sidebarMaxWidth") : 420;
      let width = parseInt(e[0].target.style.getPropertyValue("--nav-bar-width"), 10);
      if (!!document.querySelector(`.main-coverSlotExpanded-containerExpanding`)) {
        if (document.querySelectorAll(`.main-yourLibraryX-libraryIsExpanded>div:nth-child(1)>header>div>button.main-useDropTarget-show`).length === 2) {
          let collapseButton = document.querySelector(`.main-yourLibraryX-iconOnly.main-useDropTarget-base.main-useDropTarget-show`);
          collapseButton.style.display = "block";
          collapseButton.click();
          collapseButton.style.display = "";
        }
        if (width > sidebarWidthLimit) {
          document.querySelector(`html`).style.setProperty("--nav-bar-width", `${sidebarWidthLimit}px`);
        }
      } else {
        log("isBigCoverListenerPending", isBigCoverListenerPending);
        if (!isBigCoverListenerPending) {
          isBigCoverListenerPending = true;
          waitForElm(".main-coverSlotExpanded-containerExpanding").then(() => {
            if (document.querySelector(`.main-yourLibraryX-header.main-yourLibraryX-headerIsCollapsed`)) {
              document.querySelector(`.main-yourLibraryX-collapseButton.main-yourLibraryX-collapseButtonIsCollapsed`).firstChild.click();
            }
            document.querySelector(`html`).style.setProperty("--nav-bar-width", `${sidebarWidthLimit}px`);
            isBigCoverListenerPending = 0;
          });
        }
      }
    });
    widthMutationObserver.observe(document.querySelector(`html`), {
      attributes: true,
      attributeFilter: ["style"]
    });
  };

  // src/removePanelGaps.js
  var removePanelGaps = () => {
    waitForElm(`.Root`).then((element) => {
      element.style.setProperty("--panel-gap", "0px", "important");
    });
    waitForElm(`[aria-label="Main"]`, (elm) => elm.style.gap = "0px");
    log("Removed gaps between panels...");
  };
  var revertPanelGaps = () => {
    log("Adding back gaps between panels...");
    waitForElm(`.Root`).then((element) => {
      element.style.setProperty("--panel-gap", "8px", "important");
    });
    waitForElm(`[aria-label="Main"]`, (elm) => elm.style.gap = "8px");
  };
  var updatePanelGapsState = () => {
    let settingsObject2 = JSON.parse(Spicetify.LocalStorage.get("LegacyLook-settingsObject"));
    if (settingsObject2["removePanelGaps"]) {
      removePanelGaps();
    } else {
      revertPanelGaps();
    }
  };

  // src/styleSnippets.js
  var requiredTweaks = `

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

`;
  var playlistTitleShift12px = `

.main-topBar-topbarContent.main-entityHeader-topbarContentFadeIn>span {
    transform: translate(12px);
}

`;
  var roundedPlayButtons = `


.main-topBar-button {
    border-radius: var(--br5) !important;
}

.main-playButton-PlayButton>button>span {
    border-radius: var(--br5);
}

`;
  var roundedTopNavbuttons = `

[aria-label="Friend Activity"] {
    border-radius: var(--br5);
}

button>figure {
    border-radius: var(--br5);

}

[data-encore-id="buttonTertiary"].main-userWidget-boxCondensed {
    border-radius: var(--br5);
}

`;
  var fullSizeCoverart = `

.main-coverSlotExpanded-containerExpanding {
    width: var(--nav-bar-width);
    border-radius: var(--none);
}


.os-viewport.os-viewport-native-scrollbars-invisible>.os-content>.main-yourLibraryX-libraryRootlist {
    height: calc(100% - var(--nav-bar-width))
}
`;
  var removePanelGaps2 = `
div.main {
    --panel-gap: var(--none) !important;
}
`;
  var changePlaybarColor = `

.main-nowPlayingBar-container {
    background-color: var(--playbarColor) !important
}
`;
  var rootBackgroundColor = `

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

`;
  var removeRoundedPanelCorners = `


.Root__main-view {
    border-radius: var(--none) !important;
}

.main-yourLibraryX-entryPoints {
    border-radius: var(--none) !important;
}
.nav-ylx .Root__main-view .os-viewport{
    border-radius: var(--none) !important;
}

`;
  var removePlaylistCoverArt = `
[aria-colindex="2"]>img {
    display: none;
}
.main-trackList-rowImage.main-trackList-rowImageFallback {
    display: none;
}

.main-trackList-rowImageWithPlay {
    display: none;
}

`;
  var squareChips = `

[data-encore-id="chip"]>span {
    border-radius: var(--br5);
}
`;
  var removeSidebarListEntryRoundedCorners = `
[aria-posinset]>div {
    border-radius: var(--none);
}

[aria-posinset]>div>div:hover {
    border-radius: var(--none);

}
`;
  var playlistEntryUnderscored = `

[aria-rowindex] {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
`;
  var removeTrackListRoundedCorners = `
.main-trackList-trackListRow {
    border-radius: var(--none)
}
`;
  var singleLineTracklist = `

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
`;
  var oldPlayButton = `
.main-playPauseButton-button {
    background-color: transparent;
    border: 2px solid #bcbcbc;

}

.main-playPauseButton-button>svg>path {
    fill: #bababa;
}
`;
  var removeExpandLibraryArrowButton = `
.Button-sc-1dqy6lx-0.Button-sm-16-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle.main-yourLibraryX-button.main-yourLibraryX-iconOnly.main-useDropTarget-base:nth-of-type(2) {
    display: none !important;
}
`;
  var carouselRoundedRectangles = `

.search-searchCategory-carouselButton {
    border-radius: var(--br5);
}
`;
  var removeBlankSpaceBetweenMyLibraryAndLikedSongs = `


.main-yourLibraryX-entryPoints.main-yourLibraryX-library {
    margin-top: -16px;
}
`;
  var sidebarLibraryUnderscored = `

.main-useDropTarget-base.main-yourLibraryX-listItem {
    border-bottom: 1px solid rgb(109 109 109 / 20%);
}
`;
  var removeRoundedCornersSpotifyConnect = `
.main-connectBar-connected {
    border-radius: 0px !important;
    
}
`;

  // src/dynamicStyling.js
  var settingsObject = JSON.parse(Spicetify.LocalStorage.get("LegacyLook-settingsObject"));
  var composeStylesheet = () => {
    settingsObject = JSON.parse(Spicetify.LocalStorage.get("LegacyLook-settingsObject"));
    let styleTextContent = requiredTweaks;
    if (settingsObject["playlistTitleShift12px"]) {
      styleTextContent += playlistTitleShift12px;
    }
    if (settingsObject["roundedPlayButtons"]) {
      styleTextContent += roundedPlayButtons;
    }
    if (settingsObject["roundedTopNavbuttons"]) {
      styleTextContent += roundedTopNavbuttons;
    }
    if (settingsObject["removeRoundedPanelCorners"]) {
      styleTextContent += removeRoundedPanelCorners;
    }
    if (settingsObject["fullSizeCoverart"]) {
      styleTextContent += fullSizeCoverart;
    }
    if (settingsObject["removePanelGaps"]) {
      styleTextContent += removePanelGaps2;
    }
    if (settingsObject["changePlaybarColor"]) {
      styleTextContent += changePlaybarColor;
    }
    if (settingsObject["rootBackgroundColor"]) {
      styleTextContent += rootBackgroundColor;
    }
    if (settingsObject["squareChips"]) {
      styleTextContent += squareChips;
    }
    if (settingsObject["removePlaylistCoverArt"]) {
      styleTextContent += removePlaylistCoverArt;
    }
    if (settingsObject["removeSidebarListEntryRoundedCorners"]) {
      styleTextContent += removeSidebarListEntryRoundedCorners;
    }
    if (settingsObject["playlistEntryUnderscored"]) {
      styleTextContent += playlistEntryUnderscored;
    }
    if (settingsObject["removeTrackListRoundedCorners"]) {
      styleTextContent += removeTrackListRoundedCorners;
    }
    if (settingsObject["singleLineTracklist"]) {
      styleTextContent += singleLineTracklist;
    }
    if (settingsObject["oldPlayButton"]) {
      styleTextContent += oldPlayButton;
    }
    if (settingsObject["removeExpandLibraryArrowButton"]) {
      styleTextContent += removeExpandLibraryArrowButton;
    }
    if (settingsObject["carouselRoundedRectangles"]) {
      styleTextContent += carouselRoundedRectangles;
    }
    if (settingsObject["removeBlankSpaceBetweenMyLibraryAndLikedSongs"]) {
      styleTextContent += removeBlankSpaceBetweenMyLibraryAndLikedSongs;
    }
    if (settingsObject["sidebarLibraryUnderscored"]) {
      styleTextContent += sidebarLibraryUnderscored;
    }
    if (settingsObject["removeRoundedCornersSpotifyConnect"]) {
      styleTextContent += removeRoundedCornersSpotifyConnect;
    }
    return styleTextContent;
  };
  var makeStyleElement = (_textContent) => {
    var ss = document.createElement("style");
    ss.type = "text/css";
    ss.rel = "stylesheet";
    ss.id = "legacyStyle";
    ss.textContent = _textContent;
    return ss;
  };
  var updateStyleElement = () => {
    if (document.querySelector(`#legacyStyle`)) {
      document.querySelector(`#legacyStyle`).remove();
      applyStyle();
    } else {
      applyStyle();
    }
  };
  var applyStyle = () => {
    let styleEl = makeStyleElement(composeStylesheet());
    document.head.appendChild(styleEl);
    updatePanelGapsState();
    if (document.head.querySelector("#legacyStyle")) {
      log("Success! Applied custom stylesheet.");
    } else {
      log("FAILED to apply stylesheet! Trying again.");
      document.head.appendChild(styleEl);
      if (!document.head.querySelector("#legacyStyle")) {
        log("FAILED to apply stylesheet twice! Giving up, Contact developer.");
      }
    }
  };

  // src/settings.js
  var defaultSettingsObject = () => {
    let settingsObject2 = {
      "requiredTweaks": true,
      "playlistTitleShift12px": true,
      "roundedPlayButtons": true,
      "roundedTopNavbuttons": true,
      "fullSizeCoverart": true,
      "removePanelGaps": true,
      "changePlaybarColor": true,
      "rootBackgroundColor": true,
      "removeRoundedPanelCorners": true,
      "removePlaylistCoverArt": true,
      "squareChips": true,
      "removeSidebarListEntryRoundedCorners": true,
      "playlistEntryUnderscored": true,
      "removeTrackListRoundedCorners": true,
      "singleLineTracklist": true,
      "oldPlayButton": true,
      "removeExpandLibraryArrowButton": true,
      "carouselRoundedRectangles": true,
      "removeBlankSpaceBetweenMyLibraryAndLikedSongs": true,
      "sidebarLibraryUnderscored": true,
      "removeRoundedCornersSpotifyConnect": true
    };
    return settingsObject2;
  };
  var setupSettings = () => {
    let settingsFromStorage = JSON.parse(Spicetify.LocalStorage.get("LegacyLook-settingsObject"));
    let settingsObject2 = {};
    const saveObject = () => {
      Spicetify.LocalStorage.set("LegacyLook-settingsObject", JSON.stringify(settingsObject2));
      updateStyleElement();
    };
    if (settingsFromStorage == null) {
      settingsObject2 = defaultSettingsObject();
      log("Setting not available in local storage, most likely first run.");
      saveObject();
      Spicetify.showNotification("Hello! Go to Spotify settings to configure the extension to your liking.", 5e3);
      log("Current settings are: ", settingsObject2);
    } else {
      settingsObject2 = settingsFromStorage;
    }
    console.log("Add Settings");
    const settings = new SettingsSection("LegacyLook Tweak settings", "LegacyLook-settings");
    if (Spicetify.Platform.PlatformData.event_sender_context_information.client_version_string == "1.2.10.760") {
      settings.addToggle(
        "hasDisabledCompatibilityWarning",
        "Disable Compatibility warning at startup",
        Spicetify.LocalStorage.get("LegacyLook-hasDisabledCompatibilityWarning"),
        (e) => {
          Spicetify.LocalStorage.set("LegacyLook-hasDisabledCompatibilityWarning", e.target.checked);
        }
      );
    }
    let defaultWidth = 420;
    settings.addInput(
      "left-sidebar-max-width",
      "Left Sidebar Max Width in pixels (420px by default)",
      Spicetify.LocalStorage.get("LegacyLook-sidebarMaxWidth") ? Spicetify.LocalStorage.get("LegacyLook-sidebarMaxWidth") : defaultWidth,
      () => {
        let inputWidth = parseInt(settings.getFieldValue("left-sidebar-max-width"));
        if (inputWidth < 200 || inputWidth > 1e3) {
          inputWidth = 420;
          Spicetify.showNotification("Value must be greater or equal than 200 and less or equal to 1000!");
        } else {
          Spicetify.LocalStorage.set("LegacyLook-sidebarMaxWidth", inputWidth);
          changedMaxWidthSignal(parseInt(settings.getFieldValue("left-sidebar-max-width")));
        }
      }
    );
    settings.addButton("set-sidebar-max-width-default", `Reset width to default (${defaultWidth}px)`, "RESET", () => {
      settings.setFieldValue("left-sidebar-max-width", `${defaultWidth}px`);
      Spicetify.LocalStorage.set("LegacyLook-sidebarMaxWidth", defaultWidth);
      changedMaxWidthSignal(parseInt(settings.getFieldValue("left-sidebar-max-width")));
      settings.rerender();
      Spicetify.showNotification(`Reset to default: ${defaultWidth}px`);
    });
    settings.addToggle(
      "playlistTitleShift12px",
      "When enabled, shifts playlist title by 12px to the right.",
      settingsObject2["playlistTitleShift12px"],
      (e) => {
        settingsObject2["playlistTitleShift12px"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "fullSizeCoverart",
      "When enabled, Cover Art will take up full width of the Sidebar.",
      settingsObject2["fullSizeCoverart"],
      (e) => {
        settingsObject2["fullSizeCoverart"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "removePanelGaps",
      "When enabled, removes gaps between UI sections, it is meant to be used together with rounded panel corners remover.",
      settingsObject2["removePanelGaps"],
      (e) => {
        settingsObject2["removePanelGaps"] = e.target.checked;
        saveObject();
        updatePanelGapsState();
      }
    );
    settings.addToggle(
      "removeRoundedPanelCorners",
      "When enabled, removes rounded corners of UI panels, it is meant to be used together with panel gaps remover.",
      settingsObject2["removeRoundedPanelCorners"],
      (e) => {
        settingsObject2["removeRoundedPanelCorners"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "changePlaybarColor",
      "When enabled, changes playbar color to gray, just like 2017 Spotify App.",
      settingsObject2["changePlaybarColor"],
      (e) => {
        settingsObject2["changePlaybarColor"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "rootBackgroundColor",
      "When enabled, changes background color scheme to gray, just like 2017 Spotify App.",
      settingsObject2["rootBackgroundColor"],
      (e) => {
        settingsObject2["rootBackgroundColor"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "removePlaylistCoverArt",
      "When enabled, hides small covers in tracklists.",
      settingsObject2["removePlaylistCoverArt"],
      (e) => {
        settingsObject2["removePlaylistCoverArt"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "squareChips",
      'When enabled, makes selectors just below "My Library" square instead od rounded.',
      settingsObject2["squareChips"],
      (e) => {
        settingsObject2["squareChips"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "removeSidebarListEntryRoundedCorners",
      'When enabled, removes rounded corners from entries in the list below "My library". (Currently buggy.)',
      settingsObject2["removeSidebarListEntryRoundedCorners"],
      (e) => {
        settingsObject2["removeSidebarListEntryRoundedCorners"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "playlistEntryUnderscored",
      "When enabled, underscores each tracklist entry, just like 2017 Spotify App did.",
      settingsObject2["playlistEntryUnderscored"],
      (e) => {
        settingsObject2["playlistEntryUnderscored"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "sidebarLibraryUnderscored",
      "When enabled, underscores each sidebar Library entry.",
      settingsObject2["sidebarLibraryUnderscored"],
      (e) => {
        settingsObject2["sidebarLibraryUnderscored"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "removeTrackListRoundedCorners",
      "When enabled, removes rounded corners of tracklist entries.",
      settingsObject2["removeTrackListRoundedCorners"],
      (e) => {
        settingsObject2["removeTrackListRoundedCorners"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "singleLineTracklist",
      "When enabled, tracklist entries take up only single line, TITLE-ARTIST on a single line.",
      settingsObject2["singleLineTracklist"],
      (e) => {
        settingsObject2["singleLineTracklist"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "oldPlayButton",
      "When enabled, reverts main play button to look like the one 2017 Spotify App had.",
      settingsObject2["oldPlayButton"],
      (e) => {
        settingsObject2["oldPlayButton"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "removeExpandLibraryArrowButton",
      'When enabled, removes "Expand Library Arrow" button. Expanding library is still possible via dragging.',
      settingsObject2["removeExpandLibraryArrowButton"],
      (e) => {
        settingsObject2["removeExpandLibraryArrowButton"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "carouselRoundedRectangles",
      'When enabled, changes carousel buttons to rounded rectangles, used when selectors below "My Library" no longer fit',
      settingsObject2["carouselRoundedRectangles"],
      (e) => {
        settingsObject2["carouselRoundedRectangles"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "removeBlankSpaceBetweenMyLibraryAndLikedSongs",
      'When enabled, removes a bit of blank space between "Liked Songs" and "My Library".',
      settingsObject2["removeBlankSpaceBetweenMyLibraryAndLikedSongs"],
      (e) => {
        settingsObject2["removeBlankSpaceBetweenMyLibraryAndLikedSongs"] = e.target.checked;
        saveObject();
      }
    );
    settings.addToggle(
      "removeRoundedCornersSpotifyConnect",
      "When enabled, removes rounded borders of Spotify Connect bar so it fits nicely.",
      settingsObject2["removeRoundedCornersSpotifyConnect"],
      (e) => {
        settingsObject2["removeRoundedCornersSpotifyConnect"] = e.target.checked;
        saveObject();
      }
    );
    const checkForReact = () => {
      if (Spicetify.React) {
        settings.pushSettings();
      } else {
        setTimeout(checkForReact, 50);
      }
    };
    checkForReact();
  };

  // src/app.js
  async function main() {
    while (!(Spicetify == null ? void 0 : Spicetify.showNotification)) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    if (Spicetify.Platform.PlatformData.event_sender_context_information.client_version_string != "1.2.10.760") {
      if (!Spicetify.LocalStorage.get("LegacyLook-hasDisabledCompatibilityWarning")) {
        Spicetify.showNotification(`
        LegacyLook.js may not be compatible with this version of Spotify.
        This extension is compatible with Spotify 1.2.10.760.
        You are using ${Spicetify.Platform.PlatformData.event_sender_context_information.client_version_string}.
        If extension doesn't work, you may need to install Spotify 1.2.10.760.
        If it works on any other version, let me know,
        and I will add it to the compatibility list.
        You can disable this message in settings.
        `, 0, 15e3);
      }
    } else {
      Spicetify.showNotification("LegacyTweaks.js is active...", 0, 500);
    }
    setupSettings();
    applyStyle();
    log(`Developed on: Spotify for Windows; 1.2.10.760.g52970952 Spicetify v2.20.2`);
    log("May not work on newer Spotify releases...");
    log("LegacyTweaks.js v0.2 starting up...");
    waitForElm(".Root__now-playing-bar").then(() => {
      log("Playbar exists, waiting for sidebar to exist...");
      waitForElm(`#spicetify-sticky-list`).then(() => {
        log("Sidebar exists, waiting for navbtns to exist...");
        waitForElm(`[aria-label="Go back"]`).then(() => {
          log("Assuming spotify is fully loaded...");
          fullyLoaded();
        });
      });
    });
    const fullyLoaded = () => {
      waitForElm(`.main-topBar-historyButtons`).then((el) => {
        el.prepend(injectRefreshUIButton());
      });
      log("Appended a refresh button to navbuttons...");
      waitForElm(`#spicetify-sticky-list`).then((stickyList) => {
        tryAppendLikesSongsHyperlink(stickyList);
      });
      sidebarResizing();
    };
  }
  var app_default = main;

  // node_modules/spicetify-creator/dist/temp/index.jsx
  (async () => {
    await app_default();
  })();
})();
(async () => {
    if (!document.getElementById(`legacyTweaks`)) {
      var el = document.createElement('style');
      el.id = `legacyTweaks`;
      el.textContent = (String.raw`
  /* C:/Users/szymo/AppData/Local/Temp/tmp-6416-Yu8Moa3MXtYM/18a5718e1cd0/settings.module.css */
.settings-module__settingsContainer___e9wxn_legacyTweaks {
  display: contents;
}
.settings-module__heading___AnER-_legacyTweaks {
  grid-column: 1/-1;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #fff;
  margin-top: 24px;
}
.settings-module__description___dP4fR_legacyTweaks {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.settings-module__inputWrapper___LgOrw_legacyTweaks {
  display: flex;
  justify-self: end;
}

      `).trim();
      document.head.appendChild(el);
    }
  })()