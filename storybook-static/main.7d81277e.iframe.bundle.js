(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[179],{"./config/storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{preview:()=>preview});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.Z,options);styles.Z&&styles.Z.locals&&styles.Z.locals;var preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[function StyleDecorator(story){return story()}]}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'*{margin:0;padding:0;box-sizing:border-box}input,button,textarea,select{margin:0;font:inherit}:root{--font-family-main: consolas, "Times New Roman", serif;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--font-size-xl: 32px;--font-line-xl: 40px;--font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px;--modal-z-index: 10;--overlay-color: rgba(0 0 0 / 60%);--red-light: #f00;--red-dark: #ce0505}:root{--bg-color: #e8e8ea;--inverted-bg-color: #090949;--primary-color: #0232c2;--secondary-color: #0449e0;--inverted-primary-color: #04ff04;--inverted-secondary-color: #049604}.app_dark_theme{--bg-color: #090949;--inverted-bg-color: #e8e8ea;--primary-color: #04ff04;--secondary-color: #049604;--inverted-primary-color: #0232c2;--inverted-secondary-color: #0452ff}body{font:var(--font-m);color:var(--primary-color)}.app{min-height:100vh;background:var(--bg-color)}.content-page{display:flex}.page-wrapper{flex-grow:1;padding:20px}',"",{version:3,sources:["webpack://./src/app/styles/reset.scss","webpack://./src/app/styles/variables/global.scss","webpack://./src/app/styles/themes/normal.scss","webpack://./src/app/styles/themes/dark.scss","webpack://./src/app/styles/index.scss"],names:[],mappings:"AAAA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,6BAII,QAAA,CACA,YAAA,CCXJ,MACI,sDAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,oBAAA,CACA,oBAAA,CACA,4EAAA,CAGA,qBAAA,CACA,sBAAA,CACA,+BAAA,CAGA,mBAAA,CAGA,kCAAA,CACA,iBAAA,CACA,mBAAA,CCvBJ,MACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCNJ,gBACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CAAA,KCCA,kBAAA,CACA,0BAAA,CAGJ,KACI,gBAAA,CACA,0BAAA,CAGJ,cACI,YAAA,CAGJ,cACI,WAAA,CACA,YAAA",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    margin: 0;\n    font: inherit;\n}\n",':root {\n    --font-family-main: consolas, "Times New Roman", serif;\n    --font-size-m: 16px;\n    --font-line-m: 24px;\n    --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\n    --font-size-l: 24px;\n    --font-line-l: 32px;\n    --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\n    --font-size-xl: 32px;\n    --font-line-xl: 40px;\n    --font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);\n\n    // sizes\n    --navbar-height: 50px;\n    --sidebar-width: 300px;\n    --sidebar-width-collapsed: 80px;\n\n    // z - index\n    --modal-z-index: 10;\n\n    // colors\n    --overlay-color: rgba(0 0 0 / 60%);\n    --red-light: #f00;\n    --red-dark: #ce0505;\n}\n',":root {\n    --bg-color: #e8e8ea;\n    --inverted-bg-color: #090949;\n    --primary-color: #0232c2;\n    --secondary-color: #0449e0;\n    --inverted-primary-color: #04ff04;\n    --inverted-secondary-color: #049604;\n}\n",".app_dark_theme {\n    --bg-color: #090949;\n    --inverted-bg-color: #e8e8ea;\n    --primary-color: #04ff04;\n    --secondary-color: #049604;\n    --inverted-primary-color: #0232c2;\n    --inverted-secondary-color: #0452ff;\n}\n",'@import "reset";\n@import "variables/global";\n@import "themes/normal";\n@import "themes/dark";\n\n\nbody {\n    font: var(--font-m);\n    color: var(--primary-color);\n}\n\n.app {\n    min-height: 100vh;\n    background: var(--bg-color);\n}\n\n.content-page {\n    display: flex;\n}\n\n.page-wrapper {\n    flex-grow: 1;\n    padding: 20px;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./features/AuthByUsername/ui/LoginForm/LoginForm.stories":["./src/features/AuthByUsername/ui/LoginForm/LoginForm.stories.tsx",386,577,180,314],"./features/AuthByUsername/ui/LoginForm/LoginForm.stories.tsx":["./src/features/AuthByUsername/ui/LoginForm/LoginForm.stories.tsx",386,577,180,314],"./shared/ui/Avatar/Avatar.stories":["./src/shared/ui/Avatar/Avatar.stories.tsx",385],"./shared/ui/Avatar/Avatar.stories.tsx":["./src/shared/ui/Avatar/Avatar.stories.tsx",385],"./shared/ui/Button/Button.stories":["./src/shared/ui/Button/Button.stories.tsx",982],"./shared/ui/Button/Button.stories.tsx":["./src/shared/ui/Button/Button.stories.tsx",982],"./shared/ui/Modal/Modal.stories":["./src/shared/ui/Modal/Modal.stories.tsx",769],"./shared/ui/Modal/Modal.stories.tsx":["./src/shared/ui/Modal/Modal.stories.tsx",769],"./shared/ui/Text/Text.stories":["./src/shared/ui/Text/Text.stories.tsx",308],"./shared/ui/Text/Text.stories.tsx":["./src/shared/ui/Text/Text.stories.tsx",308],"./widgets/PageError/ui/PageError.stories":["./src/widgets/PageError/ui/PageError.stories.tsx",596],"./widgets/PageError/ui/PageError.stories.tsx":["./src/widgets/PageError/ui/PageError.stories.tsx",596],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",577,363],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",577,363]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./config/storybook/preview.ts")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[469],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);