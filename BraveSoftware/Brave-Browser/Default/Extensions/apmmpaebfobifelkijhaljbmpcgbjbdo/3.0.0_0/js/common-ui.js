{const e=this,n=e;(self.webpackChunkStylus=self.webpackChunkStylus||[]).push([["common-ui"],{4404:(o,a,s)=>{var i=s(6001),r=s(9030),c=s(2691),l=s(4435),d=(s(8235),s(7136),s(4523),s(9204)),u=s(1173);const f="stylus",m=f+"-",p="screen, "+m,g="adoptedStyleSheets",h=document,y=new Set(["head","body","frameset",!1,"link"]),b=function(e){let n=!1;const o=new MutationObserver(e);return{start,stop,restart:function(){n&&(stop(),start())}};function start(){n||w||(o.observe(D,{childList:!0}),n=!0)}function stop(){n&&(o.disconnect(),n=!1)}}(restoreOrder),toSafeChar=e=>String.fromCharCode(65280+e.charCodeAt(0)-32),v=[],E=new Map;let w,k,C,S,A,x,I,T,N,M,F,D=document.documentElement,O=!0,L="",W=0,R=0;function removeId(e){removeStyle(E.get(e))&&emitUpdate()}function toggle(e){O!==(e=!!e)&&(O=e,e?addAllElements():removeAllElements())}function addElement(e,n){if(w){const o=k||h[g].slice();let a=C(o,e);a>=0&&(e=o.splice(a,1)[0]),a=n?C(o,n):-1,a>=0?o.splice(a,0,e):o.push(e),k||(h[g]=o)}else updateRoot().insertBefore(e,n);return e}function addAllElements(){v.length&&(toggleObservers(!1),w?replaceAss(!0):updateRoot().append(...v.map(e=>e.el)),toggleObservers(!0))}function removeElement(e){if(e.remove)e.remove();else if(w){const n=k||h[g].slice(),o=C(n,e);o>=0&&(n.splice(o,1),k||(h[g]=n))}}function removeAllElements(){if(toggleObservers(!1),w)replaceAss();else for(const{el:e}of v)removeElement(e)}function replaceAss(e){const n=v.map(e=>e.el),o=[];for(let e,a=k||h[g],s=0;s<a.length&&(e=a[s]);s++)C(n,e)<0&&o.push(e);e&&o.push(...n),h[g]=o}function apply({cfg:e,sections:n},o){e&&updateConfig(e);const a=o&&new Set;for(const e of n){const{id:n,code:s}=e,i=E.get(n);if(i)(i.code.length!==s.length||i.code.some(arrItemDiff,s)||A&&i.name!==e.name)&&(i.code=s,setTextAndName(i.el,e),i.el.disabled=!1);else{e.el=createStyle(e),E.set(n,e);const o=v.findIndex(n=>M(n,e)>0);v.splice(o<0?v.length:o,0,e)}o&&a.add(n)}if(toggleObservers(!1),o&&v.length>a.size)for(let e,n=v.length;--n>=0;)a.has((e=v[n]).id)||removeStyle(e);O&&(S||applyTransitionPatch(n),restoreOrder()),emitUpdate()}function applyTransitionPatch(e){if(S=!0,"complete"===document.readyState||"hidden"===document.visibilityState||!e.some(e=>e.code.some(e=>e.includes("transition"))))return;const n=createStyle({id:"transition-patch",code:[":not(#\\0):not(#\\0) { transition: none !important }"]});addElement(n),requestAnimationFrame(()=>setTimeout(removeElement,0,n))}function arrItemDiff(e,n){return e!==this[n]}function createStyle(e){let n,{id:o}=e;if(w){o=p+o,n=new CSSStyleSheet({media:o}),setTextAndName(n,e);for(let e,n=k||h[g],a=0;a<n.length;a++)(e=n[a].media).mediaText===o&&(e.mediaText+="-old");return n}if(!I&&(n=initCreationDoc()))return n;if(n=T("style"),o){n.id=`${m}${o}`;const e=document.getElementById(n.id);e&&(e.id+="-superseded-by-Stylus")}return n.nonce=L,n.type="text/css",n.classList.add(f),setTextAndName(n,e),n}function setTextAndName(e,{id:o,code:a,name:s}){if(w){a=a.join("");try{e.replaceSync(a)}catch{e.replace(a)}return}if(A&&s&&(e.dataset.name!==s&&(e.dataset.name=s),s=encodeURIComponent(s.replace(/[?#/']/g,toSafeChar)),a=a.concat(`\n/*# sourceURL=${chrome.runtime.getURL(s)}.user.css#${o}${n!==top?"#"+Math.random().toString(36).slice(2):""} */`)),x)return void(e.textContent=a.join(""));let i,r,c;for(i=0,r=a.length,c=e.firstChild;c;i++,c=c.nextSibling)i>=r?c.nodeValue="":c.nodeValue!==a[i]&&(c.nodeValue=a[i]);i<r&&e.append(...a.slice(i))}function toggleObservers(e){if(w&&e)return;b[e&&O?"start":"stop"]()}function emitUpdate(){toggleObservers(v.length),F()}function initCreationDoc(e){I=h;for(let e,n=0;!e&&n<2;n++)return T=I.createElement.bind(I),void(N=I.createElementNS.bind(I))}function removeStyle(e){if(e)return E.delete(e.id),v.splice(v.indexOf(e),1),removeElement(e.el),!0}function restoreOrder(e){let n,o=v.length&&v[0].el;if(o)if(w){k||(w=h[g]);for(let e=v.length,o=w.length-e,a=0;a<e;a++)if(o<0||w[o+a]!==v[a].el){n=!0;break}}else if(o.parentNode!==I.documentElement)n=!0;else{let e=0;for(;o;){if(e<v.length&&o===v[e].el)e++;else if(y.has(o.localName)){n=!0;break}o=o.nextElementSibling}e<v.length&&(n=!0)}else n=!1;if(!n)return;!e||++W<10?addAllElements():console.debug("Stylus ignored wrong order of styles to avoid an infinite loop of mutations.");const a=performance.now();a-R>250&&(W=0,R=a)}function updateConfig(e){if(A=e.name,L=e.nonce||L,x=!L&&!1,!w!=!e.ass){removeAllElements(),w=w?null:h[g],w&&(C||(Object.isExtensible(w)&&(k=w),C=Object.call.bind([].indexOf)));for(const e of v)e.el=createStyle(e);addAllElements()}}function updateRoot(){return D!==document.documentElement&&(D=document.documentElement,addAllElements(),b.restart()),D}const B={cfg:{off:!1,top:""}},P=(chrome.runtime.id,({id:e},n)=>(n=B.cfg.order)&&1e6*(n.prio[e]||0)||n.main[e]||e+5e5),H=(document,XMLDocument,"styles"),_=_deepCopy,V=n!==parent;let j=n.TDM=V?0:document.prerendering?-1:1,z=!1;if(V)try{z=Object.getOwnPropertyDescriptor(parent.location,"href"),z=!!z?.get}catch{}const U=z&&"about:"===location.protocol,K=!CSS.supports("top","1ic")&&(Math.random()||Math.random()),X=`${K}`,q=!V&&matchMedia("(prefers-color-scheme: dark)");let Y,G,J,Q,Z=U?parent.location.href.split("#")[0]:location.href,ee=V;async function apply_init(){let n;(n=e.clientData)?n=n.apply:(n=U&&_(parent[parent.Symbol.for(H)]),n?await new Promise(onFrameElementInView):n=!1),await applyStyles(n),Y&&(dispatchEvent(new Event(Y)),Y=!1)}async function applyStyles(e){e||(e=await u.API.styles.getSectionsByUrl(Z,null,!B.sections)),e.cfg||(e.cfg=B.cfg),Object.assign(B,n[Symbol.for(H)]=e),V||""!==B.cfg.top||(B.cfg.top=location.origin),V||B.cfg.dark===q.matches||q.onchange(q),v.length?apply(B,!0):B.cfg.off||apply(B),toggle(!B.cfg.off)}function apply_updateConfig({cfg:e}){for(const n in e){const o=e[n];o!==B.cfg[n]&&("top"!==n||V)&&(B.cfg[n]=o,"off"===n?B.sections||B.cfg.off?toggle(!B.cfg.off):G||apply_init():"order"===n?(v.sort(M),O&&addAllElements()):"top"===n?updateExposeIframes():updateConfig(B.cfg))}}function updateExposeIframes(){const e="stylus-iframe",n=document.documentElement;n&&(B.cfg.top&&v.length?n.getAttribute(e)!==B.cfg.top&&n.setAttribute(e,B.cfg.top):n.hasAttribute(e)&&n.removeAttribute(e))}function updateCount(){j<0||(!J&&v.length?(J=chrome.runtime.connect({name:"iframe"}),J.onDisconnect.addListener(()=>J=null)):J&&!v.length&&(J.disconnect(),J=null),ee&&performance.now()>1e3&&(ee=!1),u.API.updateIconBadge(v.map(e=>e.id),{lazyBadge:ee,iid:K}))}function onFrameElementInView(e){parent[parent.Symbol.for("xo")](frameElement,e),(G||(G=[])).push(e)}function onIntersect(e){for(const n of e)n.intersectionRatio&&(Q.unobserve(n.target),n.target.dispatchEvent(new Event(X)))}function onBFCache(e){e.isTrusted&&e.persisted&&((0,u.apiPortDisconnect)(),updateCount())}n[Symbol.for("xo")]=(e,n)=>{Q||(Q=new IntersectionObserver(onIntersect,{rootMargin:"100%"})),e.addEventListener(X,n,{once:!0}),Q.observe(e)},q&&(q.onchange=({matches:e})=>{e!==B.cfg.dark&&u.API.info.set({preferDark:B.cfg.dark=e})}),j<0&&(document.onprerenderingchange=function(e){e.isTrusted&&(j=n.TDM=2,document.onprerenderingchange=null,u.API.styles.getSectionsByUrl("",0,"cfg").then(apply_updateConfig),updateCount())}),F=function(){updateCount(),V&&updateExposeIframes()},M=(e,n)=>P(e)-P(n),apply_init(),d.onTab(function(e){const{style:n}=e;switch(e.method){case"ping":return!0;case"styleDeleted":removeId(n.id);break;case"styleUpdated":if(!B.sections&&B.cfg.off)break;n.enabled?u.API.styles.getSectionsByUrl(Z,n.id).then(e=>e.sections.length?apply(e):removeId(n.id)):removeId(n.id);break;case"styleAdded":!B.sections&&B.cfg.off||!n.enabled||u.API.styles.getSectionsByUrl(Z,n.id).then(apply);break;case"urlChanged":e.iid===K&&Z!==e.url&&(Z=e.url,B.sections&&applyStyles(B.cfg.off&&{}));break;case"injectorConfig":apply_updateConfig(e);break;case"backgroundReady":return B.sections&&updateCount(),!0}}),addEventListener("pageshow",onBFCache),addEventListener("pagehide",onBFCache),c.subscribe("disableAll",(e,n)=>{i.$.rootCL.toggle("all-disabled",n)},!0),c.ready.then(()=>{function canSave(e){return!e.matches(".ignore-pref, .compact-layout .ignore-pref-if-compact")}function saveOnChange([{target:e}]){canSave(e)&&c.set(e.dataset.pref,e.open)}function updateOnPrefChange(e,n){const o=(0,i.$)(`details[data-pref="${e}"]`);o.open!==n&&canSave(o)&&(o.open=n)}(0,r.waitForSelector)("details[data-pref]",{recur(e){for(const n of e)c.subscribe(n.dataset.pref,updateOnPrefChange,!0),new MutationObserver(saveOnChange).observe(n,{attributes:!0,attributeFilter:["open"]})}})});{const e=["mv3",l.MOBILE&&"mobile",!l.WINDOWS&&"non-windows",l.FIREFOX?"firefox":l.OPERA?"opera":l.VIVALDI&&"vivaldi"].filter(Boolean).join(" ");e&&(i.$.root.className+=" "+e),i.$.root.lang=chrome.i18n.getUILanguage();const o="headerWidth.",a=o+location.pathname.match(/^.(\w*)/)[1];c.knownKeys.includes(a)&&(Object.assign(i.dom,{HW:o,HWprefId:a,setHWProp(e){const n=(innerWidth<850?screen.availWidth:innerWidth)/3;return e=Math.round(Math.max(200,Math.min(n,Number(e)||0))),i.$.root.style.setProperty("--header-width",e+"px"),i.dom.HWval=e,e}}),c.ready.then(()=>i.dom.setHWProp(c.get(a)))),n.on("load",()=>s.e("common-ui").then(s.bind(s,5336)),{once:!0})}},5336:(e,o,a)=>{var s=a(6001),i=a(9030),r=a(2691),c=a(6308),l=a(9204),d=a(4435),u=a(1679),f=a(9521);const m=".split-btn-menu",p=new WeakMap;if(function(){for(const e of(0,s.$$)("[title]")){if(p.set(e,e.title),e.title=e.title.replace(/\s*<\/?[^>]+>\s*/g," "),e.title.length<50)continue;const n=e.title.split("\n").map(e=>e.replace(/([.?!]\s+|[．。？！]\s*|.{50,60},)\s+/gu,"$1\n")).map(e=>e.replace(/(.{50,80}(?=.{40,}))\s+/gu,"$1\n")).join("\n");n!==e.title&&(e.title=n)}}(),addTooltipsToEllipsized(),n.on("mousedown",function({target:e}){const n=s.focusA11y.closest(e);n&&(s.focusA11y.lastFocusedViaClick=!0,s.focusA11y.toggle(n,!0))},{passive:!0}),n.on("keydown",function(e){"Tab"!==e.key||e.ctrlKey||e.altKey||e.metaKey||(s.focusA11y.lastFocusedViaClick=!1,setTimeout(()=>{let e=document.activeElement;e&&(e=e.closest("[data-focused-via-click]"),s.focusA11y.toggle(e,!1))}))},{passive:!0}),n.on("keypress",function(e){if("Enter"===(0,i.getEventKeyName)(e)){const n=e.target.closest("a");n&&!n.href&&0===n.tabIndex&&n.dispatchEvent(new MouseEvent("click",{bubbles:!0}))}}),n.on("wheel",function(e){const n=document.activeElement;if(!n||n!==e.target&&!n.contains(e.target))return;const o="SELECT"===n.tagName;if(o||"INPUT"===n.tagName&&"range"===n.type){const a=o?"selectedIndex":"valueAsNumber",s=n[a],i=s+Math.sign(e.deltaY)*(n.step||1);n[a]=(0,f.clamp)(i,n.min||0,n.max||n.length-1),n[a]!==s&&n.dispatchEvent(new Event("change",{bubbles:!0})),e.preventDefault()}e.stopImmediatePropagation()},{capture:!0,passive:!1}),n.on("click",splitMenu),n.on("click",function(e){const n=e.target.closest("[data-cmd=note]");n&&(e.preventDefault(),i.messageBox.show({className:"note center-dialog",contents:(0,c.tHTML)(p.get(n)||n.title),buttons:[(0,c.t)("confirmClose")]})),e.target.closest(".intercepts-click")&&e.preventDefault()},!0),n.on("resize",()=>(0,f.debounce)(addTooltipsToEllipsized,100)),(0,l.onExtension)(e=>{"editDeleteText"===e.method&&document.execCommand("delete")}),!d.CHROME||d.CHROME<93)e:for(const{sheet:e}of document.styleSheets)for(let n,o=0;n=e.cssRules[o];o++)if(/#\\1\s?transition-suppressor/.test(n.cssText)){e.deleteRule(o);break e}const g=(0,s.$)("#disableAll-label");g&&r.subscribe("disableAll",()=>g.dataset.persist=""),(0,s.$)("#header")&&function(){let e,n,o=(0,s.$)("#header").offsetWidth;function resize(n){setWidth(e+n.clientX)}function resizeStop(){document.off("mouseup",resizeStop),document.off("mousemove",resize),document.body.classList.remove("resizing-h"),save()}function save(){if(n)r.set(s.dom.HWprefId,o);else for(const e of r.knownKeys)e.startsWith(s.dom.HW)&&r.set(e,o)}function setWidth(e){const n=(e=s.dom.setHWProp(e))-o;if(n){o=e;for(const e of(0,s.$$)('.CodeMirror-linewidget[style*="width:"]'))e.style.width=parseFloat(e.style.width)-n+"px"}}r.subscribe(s.dom.HWprefId,(e,n)=>setWidth(n)),(0,s.$)("#header-resizer").onmousedown=a=>{a.button||(e=o-a.clientX,n=a.shiftKey,document.body.classList.add("resizing-h"),document.on("mousemove",resize),document.on("mouseup",resizeStop))}}();const h=DataTransferItem.prototype.getAsFileSystemHandle;function addTooltipsToEllipsized(){const e=new IntersectionObserver(n=>{for(const e of n){const n=e.target,o=e.boundingClientRect.width;if(o&&n.preresizeClientWidth!==o)if(n.preresizeClientWidth=o,n.scrollWidth>o){const e=n.textContent;n.title=e.includes("­")?e.replace(/\u00AD/g,""):e,n.titleIsForEllipsis=!0}else n.title&&(n.title="")}e.disconnect()});for(const n of(0,s.$$)("button, h2"))n.title&&!n.titleIsForEllipsis||e.observe(n)}function splitMenu(e){const o=(0,s.$)(".split-btn.active "+m)||(0,s.$)(m),a=o?.previousElementSibling,r=e&&e.target.closest(".split-btn-pedal"),c=e&&o&&e.target.closest(m+">*");if(o&&(o.onfocusout=null,o.remove(),a.parentElement.classList.remove("active"),n.off("keydown",splitMenuEscape),e||a.focus()),r&&r!==a){const e=(0,s.$create)(m,Array.from(r.attributes,({name:e,value:n})=>e.startsWith("menu-")&&(0,s.$create)("a",{tabIndex:0,__cmd:e.split("-").pop()},n)));n.on("keydown",splitMenuEscape),e.onfocusout=n=>{e.contains(n.relatedTarget)||setTimeout(splitMenu)},r.on("mousedown",e=>e.preventDefault()),r.parentElement.classList.toggle("active"),r.after(e),(0,i.moveFocus)(e,0),s.focusA11y.toggle(e.firstChild,s.focusA11y.get(r))}c&&a.previousElementSibling.dispatchEvent(new CustomEvent("split-btn",{detail:c.__cmd,bubbles:!0}))}function splitMenuEscape(e){"Escape"===(0,i.getEventKeyName)(e)&&(e.preventDefault(),splitMenu())}h&&(addEventListener("dragover",e=>{e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation())},!0),addEventListener("drop",async e=>{const o=e.dataTransfer,a=o.files[0];if(a.type.includes("json"))return void document.body.ondrop(e);if(!/\.(css|styl|less)$/i.test(a.name))return;e.preventDefault(),e.stopPropagation();const s=u.installUsercss,i=(0,f.tryURL)(o.getData("text")).href,r=await h.call([].find.call(o.items,e=>"file"===e.kind)),c=n.open(s),{structuredClone:l}=c;(c.fsh=l?l(r):r)._url=i},!0))},9030:(e,o,a)=>{a.d(o,{animateElement:()=>animateElement,configDialog:()=>configDialog,getCssMediaRuleByName:()=>getCssMediaRuleByName,getEventKeyName:()=>getEventKeyName,important:()=>important,messageBox:()=>r,moveFocus:()=>moveFocus,scrollElementIntoView:()=>scrollElementIntoView,setInputValue:()=>setInputValue,setupLivePrefs:()=>setupLivePrefs,showSpinner:()=>showSpinner,waitForSelector:()=>waitForSelector});var s=a(6001),i=a(2691);let configDialog=async(...e)=>(configDialog=(await a.e("js_dlg_config-dialog_js").then(a.bind(a,7262))).default)(...e),r=new Proxy({},{get:(e,n)=>async(...e)=>(r=(await a.e("js_dlg_message-box_js").then(a.bind(a,584))).default)[n](...e)});function animateElement(e,n="highlight",...o){return e?new Promise(a=>{let onDone=()=>{e.classList.remove(n,...o),onDone=null,a()};requestAnimationFrame(()=>{if(onDone){const n=getComputedStyle(e);"none"!==n.animationName&&parseFloat(n.animationDuration)||(e.off("animationend",onDone),onDone())}}),e.on("animationend",onDone,{once:!0}),e.classList.add(n)}):Promise.resolve(e)}function getEventKeyName(e,n){const o=(e.shiftKey?"Shift-":"")+(e.ctrlKey?"Ctrl-":"")+(e.altKey?"Alt-":"")+(e.metaKey?"Meta-":"");return`${o===e.key+"-"?"":o}${e.key?!e.key[1]&&n?e.code:e.key[1]?e.key:e.key.toUpperCase():"Mouse"+("LMR"[e.button]||e.button)}`}function getCssMediaRuleByName(e,n){for(const o of document.styleSheets)for(const{media:a}of o.cssRules)if(a&&a[1]===e&&!1===n(a))return}function important(e){return e.replace(/;/g,"!important;")}function moveFocus(e,n){const o=[...e.getElementsByTagName("*")],a=document.activeElement,i=n?Math.max(n<0?0:-1,o.indexOf(a)):-1,r=o.length;n||(n=1);for(let e=1;e<=r;e++){const c=o[(i+e*n+r)%r];if(!c.disabled&&c.tabIndex>=0&&c.getBoundingClientRect().width)return c.focus(),(0,s.toggleDataset)(c,"focusedViaClick",s.focusA11y.lastFocusedViaClick),a!==c&&c}}function scrollElementIntoView(e,{invalidMarginRatio:o=0}={}){if(!e.parentNode)return;const{top:a,height:s}=e.getBoundingClientRect(),{top:i,bottom:r}=e.parentNode.getBoundingClientRect(),c=n.innerHeight;if(a<Math.max(i,c*o)||a>Math.min(r,c)-s-c*o){const o=e.closest(".scroller")||n;o.scrollBy(0,a-(o.clientHeight||c)/2+s)}}function setInputValue(e,n){e.focus(),e.select(),document.execCommand(n?"insertText":"delete",!1,n),e.value!==n&&(e.value=n,e.dispatchEvent(new Event("input",{bubbles:!0})))}function setupLivePrefs(e){let n=!0;const o=(e instanceof Element?e:document).getElementsByTagName("*");function onChange(){this.checkValidity()&&("radio"!==this.type||this.checked)&&i.set(this.id||this.name,getValue(this))}function getValue(e){const n=e.dataset.valueType||e.type;return"checkbox"===n?e.checked:"number"===n?parseFloat(e.value):e.value}function isSame(e,n,o){return"radio"===e.type?e.checked===(n===o):"select"===e.localName&&"boolean"==typeof o&&n===`${o}`||n===o}e=e?.forEach?[...e]:i.knownKeys.filter(e=>e in o),i.subscribe(e,function updateElement(e,a){const s=o[e],r=s&&s.id?[s]:document.getElementsByName(e);if(r[0])for(const e of r){const o=getValue(e),s=!isSame(e,o,a),i=e.type;"select-one"===i?(n||s)&&e.classList.contains("fit-width")&&fitSelectBox(e,a,n):s&&("radio"===i?e.checked=a===o:"checkbox"===i?e.checked=a:e.value=a,e.dispatchEvent(new Event("change",{bubbles:!0}))),n&&e.on("change",onChange)}else i.unsubscribe(e,updateElement)},!0),n=!1}function showSpinner(e){return(e=e instanceof Node?e:(0,s.$)(e)).appendChild((0,s.$create)(".lds-spinner",new Array(12).fill((0,s.$create)("div")).map(e=>e.cloneNode())))}function waitForSelector(e,{recur:n,stopOnDomReady:o=!0}={}){let a,i=(0,s.$)(e);return!i||n&&!1!==n(a=[...(0,s.$$)(e)])?new Promise(r=>{function isMatching(n){return n.tagName&&(n.matches(e)||n.firstElementChild&&(0,s.$)(e,n))}function callRecur([o,i]){if(i||(o=o.addedNodes)[3]||[].some.call(o,isMatching)){const o=[...(0,s.$$)(e)],i=a?o.filter(notIncludedInArray,a):o;if(i.length)return a=o,n(i)}}new MutationObserver((a,c)=>{i||(i=(0,s.$)(e)),i&&((!n||!1===callRecur(a)||o&&"complete"===document.readyState)&&c.disconnect(),r&&(r(i),r=null))}).observe(document,{childList:!0,subtree:!0})}):Promise.resolve(i)}function notIncludedInArray(e){return!this.includes(e)}},6001:(e,n,o)=>{o.d(n,{$:()=>$,$$:()=>$$,$$remove:()=>$$remove,$create:()=>$create,$createLink:()=>$createLink,$isTextInput:()=>$isTextInput,$remove:()=>$remove,$toFragment:()=>$toFragment,dom:()=>a,focusA11y:()=>s,toggleDataset:()=>toggleDataset}),Object.assign(EventTarget.prototype,{on:addEventListener,off:removeEventListener}),$.root=document.documentElement,$.rootCL=$.root.classList;const a={},s={lastFocusedViaClick:!1,get:e=>e&&null!=e.dataset.focusedViaClick,toggle:(e,n)=>e&&toggleDataset(e,"focusedViaClick",n),closest(e){let n;for(;e;e=e.parentElement)if("label"===e.localName&&e.control&&!n&&(e=e.control,n=!0),e.tabIndex>=0)return e}};function $(e,n){return!n&&e.startsWith("#")&&document.getElementById(e.slice(1))||(n||document).querySelector(e)}function $$(e,n=document){return n.querySelectorAll(e)}function $isTextInput(e={}){return"textarea"===e.localName||"input"===e.localName&&/^(text|search|number)$/.test(e.type)}function $remove(e,n=document){const o=e&&"string"==typeof e?$(e,n):e;o&&o.remove()}function $$remove(e,n=document){for(const o of n.querySelectorAll(e))o.remove()}function $create(e="div",n,o){let a,s;if("string"==typeof e){Array.isArray(n)||n instanceof Node||"object"!=typeof n&&null==o?(s={},o=n):s=n||{};const i=(e.indexOf("#")+1||e.length+1)-1,r=(e.indexOf(".")+1||e.length+1)-1,c=e.slice(i+1,r);c&&(s.id=c);const l=e.slice(r+1);l&&(s.className=l.replace(/\./g," ")),a=e.slice(0,Math.min(i,r))}else Array.isArray(e)?(a="div",s={},o=e):(s=e,a=s.tag,o=n);const i="fragment"===a?document.createDocumentFragment():document.createElement(a||"div");(Array.isArray(o)?(o=o.filter(Boolean)).length:o&&(o=[o]))&&i.append(...o);for(const[e,n]of Object.entries(s))switch(e){case"dataset":Object.assign(i.dataset,n);break;case"attributes":n&&Object.entries(n).forEach(e=>i.setAttribute(...e));break;case"style":{const e=typeof n;"string"===e&&(i.style.cssText=n),"object"===e&&Object.assign(i.style,n);break}case"tag":break;default:e.startsWith("attr:")?i.setAttribute(e.slice(5),n):e.startsWith("data-")?i.setAttribute(e,n):i[e]=n}return i}function $createLink(e="",n){const o={tag:"a",target:"_blank",rel:"noopener"};return"object"==typeof e?Object.assign(o,e):o.href=e,$create(o,n)}function $toFragment(e){const n=document.createDocumentFragment();return n.append(...e.childNodes),n}function toggleDataset(e,n,o){if(!e)return;const a=null!=e.dataset[n];o?a||(e.dataset[n]=""):a&&delete e.dataset[n]}},6308:(e,n,o)=>{o.d(n,{breakWord:()=>breakWord,fetchTemplate:()=>fetchTemplate,formatDate:()=>formatDate,formatRelativeDate:()=>formatRelativeDate,t:()=>t,tBody:()=>tBody,tHTML:()=>tHTML,template:()=>i});var a=o(6001),s=o(9521);const i=new Proxy({},{get:(e,n,o)=>(0,s.hasOwn)(e,n)?e[n]:(o=(0,a.$)(`template[data-id="${n}"]`))&&(e[n]=createTemplate(o))}),r=["a","b","br","code","i","nobr","small","sub","sup","wbr"],c=/([\w{-\uFFFF]{10}|[\w{-\uFFFF]{5,10}[!'")*,./]|((?!\s)\W){10})(?!\s|$)/gu,l="[i18n]",d=[[60,"second",0],[60,"minute",0],[24,"hour",1],[7,"day",1],[4,"week",1],[12,"month",1],[1e99,"year",1]],u={},f={};let m=[];function t(e,n,o=!0){const a=!n&&u[e]||chrome.i18n.getMessage(e,n);if(!a&&o)throw`Missing string "${e}"`;return n||(u[e]=a),a}function tHTML(e){return"string"!=typeof e?e:/<\w+/.test(e)?createHtml(e.replace(/>\n\s*</g,"><").trim()):document.createTextNode(e)}function tNodeList(e){for(const o of e){if(!o.localName)continue;const e=o.getAttribute("i18n");if(e){for(const a of e.split(",")){let e,s,[i,r]=a.trim().split(/\s*:\s*/);switch(r||([i,r]=i.split(/(\w+)/)),r=t(r),i){case"":s=!0;case"+":n=r,e=document.createTextNode(breakWord(n));break;case"html":s=!0;case"+html":e=createHtml(r);break;default:o.setAttribute(i,r)}e&&o.insertBefore(e,s&&o.firstChild)}o.removeAttribute("i18n")}}var n}function breakWord(e){return e.length<=10?e:e.replace(c,"$&­")}function createTemplate(e){const{content:n}=e,o=[],s=document.createTreeWalker(n,132);for(let e;e=s.nextNode();)/[\xA0\S]/.test(e.textContent)&&8!==e.nodeType||o.push(e);return o.forEach(e=>e.remove()),tNodeList((0,a.$$)(l,n)),i[e.dataset.id]=n.childNodes.length>1?n:n.childNodes[0]}function createHtml(e,n){const o=parseHtml(e);return n?e.includes("i18n=")&&tNodeList((0,a.$$)(l,o)):sanitizeHtml(o),(0,a.$toFragment)(o)}async function fetchTemplate(e,n,o){let r=i[n];return r||(r=parseHtml(await(0,s.fetchText)(e),"*"),[...(0,a.$$)(`template[data-id${o?"":`="${n}"`}]`,r)].map(createTemplate).length||createTemplate({content:(0,a.$toFragment)((0,a.$)("body",r)),dataset:{id:n}}),r=i[n]),r}function parseHtml(e,n="body"){return(0,a.$)(n,(new DOMParser).parseFromString(e,"text/html"))}function sanitizeHtml(e){const n=[],o=document.createTreeWalker(e);for(let e;e=o.nextNode();)if(e.nodeType===Node.TEXT_NODE)e.nodeValue=breakWord(e.nodeValue);else if(r.includes(e.localName)){const n="a"===e.localName;for(const o of e.attributes)n&&"href"===o.localName&&/^https?:/.test(e.href)||e.removeAttribute(o.name);n&&(e.target="_blank",e.rel="noreferrer")}else n.push(e);for(const e of n){const n=e.parentNode;n&&n.removeChild(e)}}function formatDate(e,n){if(!e)return"";try{const o=new Date,a=new Date(Number(e)||e),s=a.getYear()!==o.getYear(),i=n&&o-a<=6048e5,r=(i?"W":"")+(s?"Y":"")+(n?"HM":""),c=(f[r]||(f[r]=new Intl.DateTimeFormat([chrome.i18n.getUILanguage(),"en"],{day:"numeric",month:"short",year:n?"numeric":s?"2-digit":void 0,hour:n?"numeric":void 0,minute:n?"2-digit":void 0,weekday:i?"long":void 0}))).format(a);return"Invalid Date"===c?"":c}catch{return""}}function formatRelativeDate(e,n){let o=(Date.now()-e)/1e3;if(o>=0&&Intl.RelativeTimeFormat)for(const[e,a,s]of d){if(o<e)return(f.R||(f.R=new Intl.RelativeTimeFormat([chrome.i18n.getUILanguage(),"en"],{style:n}))).format(-o.toFixed(s),a);o/=e}return""}function tBody(e){if(e)m?m.push(e):e();else{for(e of(tNodeList((0,a.$$)(l)),i.body&&document.body.append(i.body),m))e();i.body=m=void 0}}},7136:(e,o,a)=>{a.d(o,{MEDIA_OFF:()=>u,MEDIA_ON:()=>d});var s=a(6001),i=a(9030),r=a(9204),c=a(2691),l=a(4523);const d="screen",u="not all",f="dark",m={[d]:!0,[u]:!1};function toggle(e,n){s.$.root.dataset.uiTheme=e?"dark":"light",n&&!e||(0,i.getCssMediaRuleByName)(f,n=>{m[n[0]]!==e&&(n.mediaText=`${e?d:u},${f}`)})}(async()=>{let e,o;n===top?({dark:e,favicon:o}=c.clientData):e="dark"===parent.document.documentElement.dataset.uiTheme,toggle(e,!0),(0,r.onExtension)(n=>{"colorScheme"===n.method&&(e=n.value,toggle(e))}),o&&n===top&&"/popup.html"!==location.pathname&&document.head.append(...[32,16].map(n=>(0,s.$create)("link",{rel:"icon",href:`${l.MF_ICON_PATH}${e?"":"light/"}${n}${l.MF_ICON_EXT}`,sizes:n+"x"+n})))})()}}])}