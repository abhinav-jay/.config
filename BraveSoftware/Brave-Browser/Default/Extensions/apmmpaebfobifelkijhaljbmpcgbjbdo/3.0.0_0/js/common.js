{const e=this,t=e;(()=>{var r,n,o,s={7337:()=>{e.browser=chrome},7209:(e,t,r)=>{"use strict";r.d(t,{LZ_KEY:()=>g,get:()=>y,getLZValue:()=>getLZValue,getLZValues:()=>getLZValues,remove:()=>m,set:()=>b,setLZValue:()=>setLZValue});for(var n,o,s,a,i,c=0,l={},u=String.fromCharCode,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+",d=(p+"/=").split(""),f=(p+"-$").split("");c<65;)c>62&&(l[f[c].charCodeAt(0)]=c),l[d[c].charCodeAt(0)]=c++;function streamBits(e,t){for(var r=0;t>>=1;r++)o=e>>r&1|o<<1,++s===a&&(s=0,n.push(i(o)),o=0)}function getCharFromUTF16(e){return u(e+32)}function _compress(e,t,r){if(n=[],null!=e){o=0,s=0,a=t,i=r;var c=0,l=0,u=0,p=[3],d=[2,2,p],f=!0,_=0,h=3,g=4;if(e.length){streamBits(u=(_=e.charCodeAt(0))<256?0:1,g),streamBits(_,u?65536:256),d[1]=_;e:for(c=1;c<e.length;c++){for(_=e.charCodeAt(c),l=1;l<p.length;l+=2)if(p[l]==_){p=p[l+1];continue e}for(f?f=!1:streamBits(p[0],g),l=1;d[l]!=_&&l<d.length;)l+=2;l==d.length&&(++h>=g&&(g<<=1),streamBits(u=_<256?0:1,g),streamBits(_,u?65536:256),d.push(_),d.push([h]),f=!0),p.push(_),p.push([++h]),h>=g&&(g<<=1),p=d[l+1]}for(f?f=!1:streamBits(p[0],g),l=1;d[l]!=_&&l<d.length;)l+=2;l==d.length&&(++h>=g&&(g<<=1),streamBits(u=_<256?0:1,g),streamBits(_,u?65536:256)),++h>=g&&(g<<=1)}streamBits(2,g),o<<=a-s,n.push(i(o))}return n}function _decompress(e,t,r){for(var n,o=[0,1,2],s=4,a=4,i=3,c="",l=[],p="",d=0,f=2,_=0,h=r(0),g=t,m=1;_!=f;)d+=(h>>--g&1)<<_++,0==g&&(g=t,h=r(m++));if(2==d)return"";for(f=8*d+8,d=_=0;_!=f;)d+=(h>>--g&1)<<_++,0==g&&(g=t,h=r(m++));for(n=u(d),o[3]=n,p=n,l.push(n);m<=e;){for(f=i,d=_=0;_!=f;)d+=(h>>--g&1)<<_++,0==g&&(g=t,h=r(m++));if(d<2){for(f=8+8*d,d=_=0;_!=f;)d+=(h>>--g&1)<<_++,0==g&&(g=t,h=r(m++));o[a]=u(d),d=a++,0==--s&&(s=1<<i++)}else if(2==d)return l.join("");if(d>o.length)return null;c=d<o.length?o[d]:p+p.charAt(0),l.push(c),o[a++]=p+c.charAt(0),p=c,0==--s&&(s=1<<i++)}return""}function compressToUTF16(e){if(null==e)return"";var t=_compress(e,15,getCharFromUTF16);return t.push(" "),t.join("")}function decompressFromUTF16(e){return null==e?"":""==e?null:_decompress(e.length,15,function(t){return e.charCodeAt(t)-32})}r(7337);var _=r(9521);const h=browser.storage.sync,g={csslint:"editorCSSLintConfig",stylelint:"editorStylelintConfig",usercssTemplate:"usercssTemplate"},m=h.remove.bind(h),y=h.get.bind(h),b=h.set.bind(h),setValue=(e,t)=>b({[e]:t});async function getLZValue(e){return(0,_.tryJSONparse)(decompressFromUTF16((await y(e))[e]))}function setLZValue(e,t){return setValue(e,compressToUTF16(JSON.stringify(t)))}async function getLZValues(e=Object.values(g)){const t=await y(e);for(const r of e){const e=t[r];t[r]=e&&(0,_.tryJSONparse)(decompressFromUTF16(e))}return t}},8060:(e,t,r)=>{"use strict";r.d(t,{default:()=>compareVersion});const n=/^(.*?)-([-.0-9a-z]+)|$/i,o=/^\d+$/;function compareVersion(e,t){const[,r=e||"",o]=n.exec(e),[,s=t||"",a]=n.exec(t),i=compareVersionChunk(r,s)||!o-!a||o&&compareVersionChunk(o,a,!0);return Math.sign(i)}function compareVersionChunk(e,t,r){const n=e.split("."),s=t.split("."),a=n.length,i=s.length,c=(r?Math.min:Math.max)(a,i);let l;for(let e=0;!l&&e<c;e+=1){const t=n[e],a=s[e];l=r?o.test(t)&&o.test(a)?t-a:t>a||t<a&&-1:(parseInt(t,10)||0)-(parseInt(a,10)||0)}return l||r&&a-i}},5619:(e,t,r)=>{"use strict";r.r(t),r(2923),r(5525),r(256)},1173:(t,r,n)=>{"use strict";n.d(r,{API:()=>a,apiHandler:()=>s,apiPortDisconnect:()=>apiPortDisconnect,apiSendProxy:()=>apiSendProxy,bgReadySignal:()=>{},port:()=>i});const saveStack=()=>new Error,o={},s={get:({name:e},t)=>new Proxy(Object.defineProperty(()=>{},"name",{value:e?e+"."+t:t}),s),apply:apiSendProxy},a=e.API=new Proxy({path:""},s);let i,c=0;async function apiSend(e){const t=++c,r=saveStack();return i||(i=chrome.runtime.connect({name:"api"}),i.onMessage.addListener(apiPortResponse),i.onDisconnect.addListener(apiPortDisconnect)),i.postMessage({id:t,data:e,TDM:self.TDM}),new Promise((e,n)=>o[t]={ok:e,ko:n,err:r})}function apiSendProxy({name:e},t,r){return apiSend({method:"invokeAPI",path:e,args:r})}function apiPortDisconnect(){const e=chrome.runtime.lastError;if(e)for(const t in o)apiPortResponse({id:t,error:e});i=null}function apiPortResponse({id:e,data:t,error:r}){const n=o[e];if(delete o[e],r){const{err:e}=n;e.message=r.message,r.stack&&(e.stack=r.stack+"\n"+e.stack),n.ko(r)}else n.ok(t)}},8235:(e,r,n)=>{"use strict";n(7337);var o=n(1173),s=n(838),a=n(1679),i=(n(9521),n(4523));const c=["updateIconBadge","styleViaAPI"],l=(0,s.createPortExec)(()=>navigator.serviceWorker.controller,{lock:a.swPath});let u;o.apiHandler.apply=async function({name:e},r,n){if(n[0]instanceof Event&&(n[0]="Event"),e.startsWith("worker."))return u??=(0,s.createPortProxy)(a.workerPath),u[e.slice(7)](...n);let o=!1;const p=t===top?0:1;if(!c.includes(e)||!p&&(o=await(0,i.getOwnTab)())){const t={method:"invokeAPI",path:e,args:n},r={url:location.href,tab:o,frameId:p};return l(t,r)}}},9204:(e,t,r)=>{"use strict";r.d(t,{API:()=>n.API,off:()=>off,onExtension:()=>onExtension,onMessage:()=>onMessage,onTab:()=>onTab});var n=r(1173);const o={__proto:null,all:["both","tab","extension"],extension:["both","extension"],tab:["both","tab"]},s={both:new Set,tab:new Set,extension:new Set};function onMessage(e){s.both.add(e)}function onTab(e){s.tab.add(e)}function onExtension(e){s.extension.add(e)}function off(e){for(const t of o.all)s[t].delete(e)}function _execute(e,...t){let r;for(const n of o[e]||o.all)for(const e of s[n]){let n;try{n=e(...t)}catch(e){n=Promise.reject(e)}void 0!==n&&void 0===r&&(r=n)}return r}function wrapData(e){return{data:e}}function wrapError(e){return{error:Object.assign({message:e.message||`${e}`,stack:e.stack},e)}}chrome.runtime.onMessage.addListener(function({data:e,target:t},r,o){"backgroundReady"===e.method&&(n.bgReadySignal&&(0,n.bgReadySignal)(!0),n.port&&(0,n.apiPortDisconnect)());const s=_execute(t,e,r);if(s instanceof Promise)return s.then(wrapData,wrapError).then(o),!0;void 0!==s&&o(wrapData(s))})},838:(e,t,r)=>{"use strict";r.d(t,{COMMANDS:()=>n,createPortExec:()=>createPortExec,createPortProxy:()=>createPortProxy});const n={__proto__:null,getWorkerPort(e){const t=new SharedWorker(e).port;return this._transfer=[t],t},syncLifetimeToSW(e){e&&!i?(i=chrome.runtime.connect({name:"offscreen"}),i.onDisconnect.addListener(close),c=c&&clearTimeout(c)):!e&&i&&(i.disconnect(),i=null,c||l||(c=setTimeout(close,o)))}},o=3e5,s="/offscreen.html"===location.pathname,NOP=()=>{};let a;navigator.serviceWorker.onmessage=function(e){const{lock:t=location.pathname,id:r}=e.data||{},n=this,u=e.ports[0];async function onMessage(e){const t=e.data,{args:r,id:a}=t.id?t:JSON.parse(t);let p,d;l++,c&&(clearTimeout(c),c=0);try{p=("function"==typeof n?n:n[r.shift()]).apply(e,r),p instanceof Promise&&(p=await p)}catch(e){p=void 0,d=e,delete e.source}u.postMessage({id:a,res:p,err:d},e._transfer),--l||!s||c||i||(c=setTimeout(close,o))}a||!t||r||(a=!0,navigator.locks.request(t,()=>new Promise(NOP))),u.onerror=console.error,u.onmessage=onMessage,u.onmessageerror=onMessageError,r&&onMessage(e)}.bind(n);let i,c,l=0;function createPortProxy(e,t){let r;const init=(...n)=>(r??=createPortExec(e,t))(...n);return new Proxy({},{get:(e,t)=>function(...e){return(r||init).call(this,t,...e)}})}function createPortExec(e,{lock:t,once:r}={}){let n,o,s,a,i=0;return async function(...e){const t=[(new Error).stack],a=new Promise((e,r)=>t.push(e,r));return(o??=initPort()).then&&(o=await o),(r?s:o).postMessage({args:e,id:++i},r||(Array.isArray(this)?this:void 0)),n.set(i,t),a};async function initPort(){if("string"==typeof e?(t=e,s=new SharedWorker(e),s.onerror=console.error,s=s.port):(s="function"==typeof e?e():e,s.then&&(s=await s)),s instanceof MessagePort)o=s;else{const e=new MessageChannel;o=e.port1,r?r=[e.port2]:s.postMessage({lock:t},[e.port2])}return o.onmessage=onMessage,o.onmessageerror=onMessageError,n=new Map,i=0,o}function onMessage({data:e}){a||r||trackTarget(n);const{id:t,res:c,err:l}=e.id?e:JSON.parse(e),[u,p,d]=n.get(t);n.delete(t),t===i&&--i,l?(l.stack+="\n"+u,d(l)):p(c),r&&(o.close(),n=o=s=null)}async function trackTarget(e){a=!0,await navigator.locks.request(t,NOP),a=!1;for(const[t,,r]of e.values()){const e=new Error("Target disconnected");e.stack=t,r(e)}n===e&&(o=n=s=null)}}function onMessageError({data:e,source:t}){console.warn("Non-cloneable data",e),t.postMessage(JSON.stringify(e))}},2691:(t,r,n)=>{"use strict";n.d(r,{STORAGE_KEY:()=>f,__values:()=>p,clientData:()=>c,defaults:()=>_,get:()=>get,knownKeys:()=>h,ready:()=>g,reset:()=>reset,set:()=>set,subscribe:()=>subscribe,unsubscribe:()=>unsubscribe});var o=n(1173),s=n(9521),a=n(4523);let i;const c=e.clientData??=o.API.setClientData(null,{url:location.href,dark:(0,s.isCssDarkScheme)()}).then(s.makePropertyPopProxy),l={__proto__:null,disableAll:!1,exposeIframes:!1,exposeStyleName:!1,keepAlive:0,newStyleAsUsercss:!1,openEditInWindow:!1,"openEditInWindow.popup":!1,patchCsp:!1,"show-badge":!0,styleViaASS:!1,styleViaXhr:!0,urlInstaller:!0,windowPosition:{},"config.autosave":!0,"schemeSwitcher.enabled":"system","schemeSwitcher.nightStart":"18:00","schemeSwitcher.nightEnd":"06:00","popup.enabledFirst":!0,"popup.stylesFirst":!0,"popup.autoResort":!1,"popup.borders":!1,"popup.findSort":"w","manage.onlyEnabled":!1,"manage.onlyLocal":!1,"manage.onlyUsercss":!1,"manage.onlyEnabled.invert":!1,"manage.onlyLocal.invert":!1,"manage.onlyUsercss.invert":!1,"manage.actions.expanded":!0,"manage.backup.expanded":!0,"manage.filters.expanded":!0,"manage.minColumnWidth":750,"manage.newUI":!0,"manage.newUI.favicons":!0,"manage.newUI.faviconsGray":!1,"manage.newUI.targets":3,"manage.newUI.sort":"title,asc","manage.searchMode":"meta","editor.options":{},"editor.toc.expanded":!0,"editor.options.expanded":!0,"editor.lint.expanded":!0,"editor.publish.expanded":!0,"editor.lineWrapping":!0,"editor.smartIndent":!0,"editor.indentWithTabs":!1,"editor.tabSize":4,"editor.keyMap":"default","editor.theme":"default","editor.beautify":{selector_separator_newline:!0,newline_before_open_brace:!1,newline_after_open_brace:!0,newline_between_properties:!0,newline_before_close_brace:!0,newline_between_rules:!1,preserve_newlines:!0,end_with_newline:!1,indent_conditional:!0,indent_mozdoc:!0,space_around_combinator:!0,space_around_cmp:!1},"editor.beautify.hotkey":"","editor.lintDelay":300,"editor.linter":"csslint","editor.lintReportDelay":500,"editor.matchHighlight":"token","editor.autoCloseBrackets":!0,"editor.autocompleteOnTyping":!1,"editor.contextDelete":!1,"editor.selectByTokens":!0,"editor.arrowKeysTraverse":!0,"editor.appliesToLineWidget":!0,"editor.autosaveDraft":10,"editor.livePreview":!0,"editor.livePreview.delay":.2,"editor.targetsFirst":!0,"editor.colorpicker":!0,"editor.colorpicker.hexUppercase":!1,"editor.colorpicker.hotkey":"","editor.colorpicker.color":"","editor.colorpicker.maxHeight":300,"hotkey._execute_browser_action":"","hotkey.openManage":"","hotkey.styleDisableAll":"","sync.enabled":"none",iconset:-1,badgeDisabled:"#8B0000",badgeNormal:"#006666","headerWidth.edit":280,"headerWidth.install":280,"headerWidth.manage":280,"popup.search.globals":!1,popupWidth:246,popupWidthMax:280,updateInterval:24,updateOnlyEnabled:!1},u=console.warn.bind(console,'Unknown preference "%s"'),p=(0,s.deepCopy)(l),d={},f="settings",_=new Proxy({},{get:(e,t)=>(0,s.deepCopy)(l[t])}),h=Object.keys(l),get=e=>{const{[e]:t=u(e)}=p;return t&&"object"==typeof t?(0,s.deepCopy)(t):t};let set=(e,t,r)=>{const n=p[e],a=typeof l[e];if(!a)return u(e);if(a!==typeof t&&(t="string"===a?`${t}`:"number"===a?+t||0:"boolean"===a?"true"===t||"false"!==t&&!!t:null),t===n||"object"===a&&(0,s.deepEqual)(t,n))return;p[e]=t;const i=d[e];if(i)for(const r of i)r(e,t);return r||o.API.prefs.set(e,t),!0};const reset=e=>{set(e,(0,s.deepCopy)(l[e]))},subscribe=(e,t,r)=>{if(!t)return;let n;for(const o of Array.isArray(e)?new Set(e):[e])o in l?((d[o]??=new Set).add(t),r&&(i?(n??=[]).push(o):t(o,p[o]))):u(o);return n?i.then(()=>{for(const e of n)t(e,p[e],!0)}):void 0},unsubscribe=(e,t)=>{for(const r of Array.isArray(e)?e:[e]){const e=d[r];e&&(e.delete(t),e.size||delete d[r])}};function setAll(e,t){if(i=!1,t){for(const r in t)!(r in e)&&r in l&&set(r,l[r],!0);for(const t in e||(e={}))set(t,e[t],!0)}else Object.assign(p,e)}setAll(c.prefs),a.onStorageChanged.addListener((e,t)=>{if(i)return;const r=(!t||"sync"===t)&&e[f];r&&setAll(r.newValue,r.oldValue)});const g=i||Promise.resolve();i||(g.then=e=>e())},7394:(e,t,r)=>{"use strict";r.d(t,{forEachProp:()=>forEachProp,styleCodeEmpty:()=>styleCodeEmpty,styleJSONseemsValid:()=>styleJSONseemsValid,styleSectionsEqual:()=>styleSectionsEqual,styleToCss:()=>styleToCss,toSection:()=>toSection});const n={urls:"url",urlPrefixes:"url-prefix",domains:"domain",regexps:"regexp"},o={url:"urls","url-prefix":"urlPrefixes",domain:"domains",regexp:"regexps"},forEachProp=(e,t)=>{for(const[r,o]of Object.entries(n))e[r]?.forEach(e=>t(o,e))},toSection=(e,t={})=>{for(const r of e){const[e,n]=r||[],s=o[e];if(s){const e=t[s]||(t[s]=[]);Array.isArray(n)?e.push(...n):e.push(n)}}return t},styleToCss=e=>{const t=[];for(const r of e.sections){const e=[];forEachProp(r,(t,r)=>e.push(`${t}("${r.replace(/[\\"]/g,"\\$&")}")`)),t.push(e.length?`@-moz-document ${e.join(", ")} {\n${r.code}\n}`:r.code)}return t.join("\n\n")},s=/\s+|\/\*([^*]+|\*(?!\/))*(\*\/|$)|@namespace[^;]+;|@charset[^;]+;/giuy,abEqual=(e,t)=>e===t,a=["urls","urlPrefixes","domains","regexps"];function styleCodeEmpty(e){const{code:t}=e;let r=!t;if(r||null!=(r=e._empty))return r;const n=t.length,o=s;o.lastIndex=0;let a=0;for(;o.exec(t)&&(a=o.lastIndex)!==n;);return Object.defineProperty(e,"_empty",{value:r=a===n,configurable:!0}),styleCodeEmpty.lastIndex=a,r}function styleSectionsEqual({sections:e},{sections:t}){return e&&t&&e.length===t.length&&e.every(sameSection,t)}function sameSection(e,t){if(equalOrEmpty(e.code,this[t].code,"string",abEqual)){for(const r of a)if(!equalOrEmpty(e[r],this[t][r],"array",arrayMirrors))return;return!0}}function equalOrEmpty(e,t,r,n){const o="array"===r?Array.isArray(e):typeof e===r,s="array"===r?Array.isArray(t):typeof t===r;return o&&s&&n(e,t)||(null==e||o&&!e.length)&&(null==t||s&&!t.length)}function arrayMirrors(e,t){return e.length===t.length&&e.every(thisIncludes,t)&&t.every(thisIncludes,e)}function thisIncludes(e){return this.includes(e)}function styleJSONseemsValid(e){return e&&"string"==typeof e.name&&e.name.trim()&&Array.isArray(e.sections)&&"string"==typeof e.sections[0]?.code}},6981:(e,t,r)=>{"use strict";r.d(t,{chromeLocal:()=>o}),r(7337);const n={async getValue(e){return(await this.get(e))[e]},async setValue(e,t){await this.set({[e]:t})}},o=Object.assign(browser.storage.local,n);chrome.storage.session},4435:(e,t,r)=>{"use strict";r.d(t,{CHROME:()=>c,FIREFOX:()=>l,MAC:()=>p,MOBILE:()=>d,OPERA:()=>u,VIVALDI:()=>_,WINDOWS:()=>f});const n=navigator.userAgentData,o=n||navigator.userAgent,s=n?n.brands.map(e=>`${e.brand}/${e.version}`).join(" "):o,a=n?n.platform:o,i=+s.match(/Chrom\w*\/(\d+)|$/)[1],c=i,l=i?NaN:+s.match(/Firefox\w*\/(\d+)|$/)[1],u=+s.match(/(Opera|OPR)\w*\/(\d+)|$/)[1],p=/mac/i.test(a),d=n?n.mobile:/Android/.test(o),f=/Windows/.test(a),_=+s.match(/Vivaldi\w*\/(\d+)|$/)[1]},1679:(e,t,r)=>{"use strict";r.d(t,{actionPopupUrl:()=>o,extractUsoaId:()=>extractUsoaId,favicon:()=>favicon,installUsercss:()=>s,isLocalhost:()=>_,makeUpdateUrl:()=>makeUpdateUrl,ownRoot:()=>n,supported:()=>f,swPath:()=>i,uso:()=>c,usoa:()=>l,usoaRaw:()=>u,usw:()=>p,workerPath:()=>a}),r(4435);const n=chrome.runtime.getURL(""),o=n+"popup.html",s="install-usercss.html",a="/js/worker.js",i="/sw.js",favicon=e=>`https://icons.duckduckgo.com/ip3/${e}.ico`,c="https://userstyles.org/",l="https://uso.kkx.one/",u=["https://cdn.jsdelivr.net/gh/uso-archive/data@flomaster/data/","https://raw.githubusercontent.com/uso-archive/data/flomaster/data/","https://cdn.jsdelivr.net/gh/33kk/uso-archive@flomaster/data/","https://raw.githubusercontent.com/33kk/uso-archive/flomaster/data/"],p="https://userstyles.world/",extractUsoaId=e=>e&&u.some(t=>e.startsWith(t))&&+e.match(/\/(\d+)\.user\.css|$/)[1],extractUswId=e=>e&&e.startsWith(p)&&+e.match(/\/(\d+)\.user\.css|$/)[1],makeUpdateUrl=(e,t)=>"usoa"===e||!t&&(t=extractUsoaId(e))?`${u[0]}usercss/${t}.user.css`:"usw"===e||!t&&(t=extractUswId(e))?`${p}api/style/${t}.user.css`:"",d=RegExp.prototype.test,f=d.bind(new RegExp(`^(?:(?:ht|f)tps?:|file:|${n})`)),_=d.bind(/^file:|^https?:\/\/([^/]+@)?(localhost|127\.0\.0\.1)(:\d+)?\//)},4523:(t,r,n)=>{"use strict";n.d(r,{CHROME_POPUP_BORDER_BUG:()=>u,MF:()=>a,MF_ICON:()=>i,MF_ICON_EXT:()=>l,MF_ICON_PATH:()=>c,browserWindows:()=>p,closeCurrentTab:()=>closeCurrentTab,getActiveTab:()=>getActiveTab,getOwnTab:()=>getOwnTab,ignoreChromeError:()=>ignoreChromeError,onStorageChanged:()=>d}),n(7337),n(4435);var o=n(1679),s=n(9521);const a=chrome.runtime.getManifest(),i=a.icons[16].replace(o.ownRoot,""),c=i.slice(0,i.lastIndexOf("/")+1),l=i.slice(i.lastIndexOf(".")),u=!1,p=browser.windows,d=chrome.storage.sync.onChanged||chrome.storage.onChanged,getOwnTab=()=>browser.tabs.getCurrent(),getActiveTab=async()=>(await browser.tabs.query({currentWindow:!0,active:!0}))[0]||p&&(await browser.tabs.query({windowId:(await p.getCurrent()).id,active:!0}))[0],ignoreChromeError=()=>chrome.runtime.lastError;async function closeCurrentTab(){const e=await getOwnTab();if(e)return chrome.tabs.remove(e.id)}e._deepCopy=s.deepCopy},9521:(e,r,n)=>{"use strict";n.d(r,{RX_META:()=>s,capitalize:()=>capitalize,clamp:()=>clamp,clipString:()=>clipString,debounce:()=>a,deepCopy:()=>deepCopy,deepEqual:()=>deepEqual,deepMerge:()=>deepMerge,fetchText:()=>fetchText,fetchWebDAV:()=>fetchWebDAV,hasOwn:()=>o,isCssDarkScheme:()=>isCssDarkScheme,isEmptyObj:()=>isEmptyObj,makePropertyPopProxy:()=>makePropertyPopProxy,mapObj:()=>mapObj,sessionStore:()=>i,sleep:()=>sleep,stringAsRegExp:()=>stringAsRegExp,stringAsRegExpStr:()=>stringAsRegExpStr,tryJSONparse:()=>tryJSONparse,tryRegExp:()=>tryRegExp,tryURL:()=>tryURL});const capitalize=e=>e.slice(0,1).toUpperCase()+e.slice(1),clamp=(e,t,r)=>e<t?t:e>r?r:e,clipString=(e,t=100)=>e.length>t?e.substr(0,t)+"...":e,o=Object.call.bind({}.hasOwnProperty),isCssDarkScheme=()=>matchMedia("(prefers-color-scheme:dark)").matches,sleep=e=>new Promise(e>0?t=>setTimeout(t,e):setTimeout),stringAsRegExpStr=e=>e.replace(/[{}()[\]\\.+*?^$|]/g,"\\$&"),stringAsRegExp=(e,t)=>new RegExp(stringAsRegExpStr(e),t),s=/\/\*!?\s*==userstyle==[\s\S]*?==\/userstyle==\s*\*\//i,a=(()=>{const e=new Map;return Object.assign((t,r,...n)=>{r=+r||0;const o=performance.now()+r;let s=e.get(t);if(s){if(r&&s.time<o)clearTimer(s);else if(s.args.length===n.length&&s.args.every((e,t)=>e===n[t]))return}else e.set(t,s={});s.args=n,s.time=o,s.timer=setTimeout(run,r,t,n,!1)},{timers:e,run,unregister(t){const r=e.get(t);r&&(clearTimer(r),e.delete(t))}});function clearTimer(e){clearTimeout(e.timer)}async function run(t,r,n){e.delete(t),t(...r)}})(),makePropertyPopProxy=()=>new Proxy({},{get:(e,t,r)=>(r=e[t],delete e[t],r)});function isEmptyObj(e){if(e)for(const t in e)if(o(e,t))return!1;return!0}function mapObj(e,t,r){if(!e)return e;const n={};for(const o of r||Object.keys(e))r&&!(o in e)||(n[o]=t?t(e[o],o,e):e[o]);return n}function tryRegExp(e,t){try{return new RegExp(e,t)}catch{}}function tryJSONparse(e){try{if(e)return JSON.parse(e)}catch{}}function tryURL(e){try{if(e)return new URL(e)}catch{}return""}function deepMerge(e,t,r){if(!e||"object"!=typeof e)return e;if(Array.isArray(e))if(t&&r)for(const r of e)t.push(deepMerge(r));else t=Array.prototype.map.call(e,deepCopy);else{t||(t={});for(const[r,n]of Object.entries(e))t[r]=deepMerge(n,t[r])}return t}function deepCopy(e){return deepMerge(e)}function deepEqual(e,t,r){if(!e||!t||e===t)return e===t;const n=typeof e;if(n!==typeof t)return!1;if("object"!==n)return e===t;if(Array.isArray(e))return Array.isArray(t)&&e.length===t.length&&e.every((e,n)=>deepEqual(e,t[n],r));for(const n in e)if(!(!o(e,n)||r&&r.includes(n))){if(!o(t,n))return!1;if(!deepEqual(e[n],t[n],r))return!1}for(const n in t)if(!(!o(t,n)||r&&r.includes(n)||o(e,n)))return!1;return!0}async function fetchText(e,t){return(await fetch(e,t)).text()}function fetchWebDAV(e,t={}){return fetch(e,{...t,credentials:"omit",headers:{...t.headers,Authorization:`Basic ${btoa(`${this.username||""}:${this.password||""}`)}`}})}let i=new Proxy({},{get(e,r){try{const e=sessionStorage[r];return i=sessionStorage,e}catch{Object.defineProperty(t,"sessionStorage",{value:e})}},set(e,t,r){try{sessionStorage[t]=`${r}`,i=sessionStorage}catch{this.get(e),e[t]=`${r}`}return!0},deleteProperty:(e,t)=>delete e[t]})}},a={};function __webpack_require__(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return s[e].call(r.exports,r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=s,r=[],__webpack_require__.O=(e,t,n,o)=>{if(!t){var s=1/0;for(l=0;l<r.length;l++){for(var[t,n,o]=r[l],a=!0,i=0;i<t.length;i++)(!1&o||s>=o)&&Object.keys(__webpack_require__.O).every(e=>__webpack_require__.O[e](t[i]))?t.splice(i--,1):(a=!1,o<s&&(s=o));if(a){r.splice(l--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=r.length;l>0&&r[l-1][2]>o;l--)r[l]=r[l-1];r[l]=[t,n,o]},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce((t,r)=>(__webpack_require__.f[r](e,t),t),[])),__webpack_require__.u=e=>"js/"+e+".js",__webpack_require__.miniCssF=e=>"css/"+e+".css",__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="Stylus:",__webpack_require__.l=(e,t,r,s)=>{if(n[e])n[e].push(t);else{var a,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){a=u;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",o+r),a.src=e),n[e]=[t];var onScriptComplete=(t,r)=>{a.onerror=a.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach(e=>e(r)),t)return t(r)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=onScriptComplete.bind(null,a.onerror),a.onload=onScriptComplete.bind(null,a.onload),i&&document.head.appendChild(a)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.p="/",(()=>{if("undefined"!=typeof document){var createStylesheet=(e,t,r,n,o)=>{var s=document.createElement("link");return s.rel="stylesheet",s.type="text/css",__webpack_require__.nc&&(s.nonce=__webpack_require__.nc),s.onerror=s.onload=r=>{if(s.onerror=s.onload=null,"load"===r.type)n();else{var a=r&&r.type,i=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+i+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,s.parentNode&&s.parentNode.removeChild(s),o(c)}},s.href=t,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},findStylesheet=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){var a;if((o=(a=s[n]).getAttribute("data-href"))===e||o===t)return a}},loadStylesheet=e=>new Promise((t,r)=>{var n=__webpack_require__.miniCssF(e),o=__webpack_require__.p+n;if(findStylesheet(n,o))return t();createStylesheet(e,o,null,t,r)}),e={common:0};__webpack_require__.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{"edit_global-search_js":1,"edit_regexp-tester_js":1,"js_dlg_config-dialog_js":1,"js_dlg_message-box_js":1,popup_search_js:1,"manage_injection-order_css":1,codemirror:1,"js_color_color-picker_css":1}[t]&&r.push(e[t]=loadStylesheet(t).then(()=>{e[t]=0},r=>{throw delete e[t],r}))}}})(),(()=>{var e={common:0,"css_global-dark_css-css_global_css-css_spinner_css":0};__webpack_require__.f.j=(t,r)=>{var n=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(css_global\-dark_css\-css_global_css\-css_spinn|js_color_color\-pick)er_css$/.test(t))e[t]=0;else{var o=new Promise((r,o)=>n=e[t]=[r,o]);r.push(n[2]=o);var s=__webpack_require__.p+__webpack_require__.u(t),a=new Error;__webpack_require__.l(s,r=>{if(__webpack_require__.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,n[1](a)}},"chunk-"+t,t)}},__webpack_require__.O.j=t=>0===e[t];var webpackJsonpCallback=(t,r)=>{var n,o,[s,a,i]=r,c=0;if(s.some(t=>0!==e[t])){for(n in a)__webpack_require__.o(a,n)&&(__webpack_require__.m[n]=a[n]);if(i)var l=i(__webpack_require__)}for(t&&t(r);c<s.length;c++)o=s[c],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return __webpack_require__.O(l)},t=self.webpackChunkStylus=self.webpackChunkStylus||[];t.forEach(webpackJsonpCallback.bind(null,0)),t.push=webpackJsonpCallback.bind(null,t.push.bind(t))})()})()}