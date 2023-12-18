import{f as qe,M as Xe}from"./index-c5e6f597.js";import{H as Ye,r as b,u as x,P as Ze,E as U,y as A,Q as et,R as tt,S as rt,z as P,i as H,q as L,U as nt,m as ke,j as Ae,o as V,d as at,c as te,g as fe,V as lt,W as ot,F as it,Y as $e,Z as De,_ as Q,G as st,J as ut,w as N,a as h,b as k,e as B,t as ct,T as ft,x as q,n as X}from"./app-79fce0c4.js";var de;const Te=typeof window<"u",dt=e=>typeof e=="function",pt=e=>typeof e=="string",vt=()=>{};Te&&((de=window==null?void 0:window.navigator)!=null&&de.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function R(e){return typeof e=="function"?e():x(e)}function mt(e,t){function r(...a){return new Promise((n,o)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(n).catch(o)})}return r}const je=e=>e();function ht(e=je){const t=b(!0);function r(){t.value=!1}function a(){t.value=!0}const n=(...o)=>{t.value&&e(...o)};return{isActive:rt(t),pause:r,resume:a,eventFilter:n}}function gt(e){return e}function Fe(e){return et()?(tt(e),!0):!1}function yt(e){return typeof e=="function"?P(e):b(e)}function Re(e,t=!0){Ze()?U(e):t?e():A(e)}function wt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:a=!1}=t,n=Ye(e),o=b(e);function i(s){if(arguments.length)return o.value=s,o.value;{const v=R(r);return o.value=o.value===v?R(a):v,o.value}}return n?i:[o,i]}var pe=Object.getOwnPropertySymbols,bt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,Ot=(e,t)=>{var r={};for(var a in e)bt.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&pe)for(var a of pe(e))t.indexOf(a)<0&&_t.call(e,a)&&(r[a]=e[a]);return r};function xt(e,t,r={}){const a=r,{eventFilter:n=je}=a,o=Ot(a,["eventFilter"]);return H(e,mt(n,t),o)}var It=Object.defineProperty,St=Object.defineProperties,Pt=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,ve=(e,t,r)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Et=(e,t)=>{for(var r in t||(t={}))Ce.call(t,r)&&ve(e,r,t[r]);if(W)for(var r of W(t))Le.call(t,r)&&ve(e,r,t[r]);return e},Nt=(e,t)=>St(e,Pt(t)),Mt=(e,t)=>{var r={};for(var a in e)Ce.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&W)for(var a of W(e))t.indexOf(a)<0&&Le.call(e,a)&&(r[a]=e[a]);return r};function kt(e,t,r={}){const a=r,{eventFilter:n}=a,o=Mt(a,["eventFilter"]),{eventFilter:i,pause:s,resume:v,isActive:c}=ht(n);return{stop:xt(e,t,Nt(Et({},o),{eventFilter:i})),pause:s,resume:v,isActive:c}}function At(e){var t;const r=R(e);return(t=r==null?void 0:r.$el)!=null?t:r}const F=Te?window:void 0;function me(...e){let t,r,a,n;if(pt(e[0])||Array.isArray(e[0])?([r,a,n]=e,t=F):[t,r,a,n]=e,!t)return vt;Array.isArray(r)||(r=[r]),Array.isArray(a)||(a=[a]);const o=[],i=()=>{o.forEach(l=>l()),o.length=0},s=(l,m,p,f)=>(l.addEventListener(m,p,f),()=>l.removeEventListener(m,p,f)),v=H(()=>[At(t),R(n)],([l,m])=>{i(),l&&o.push(...r.flatMap(p=>a.map(f=>s(l,p,f,m))))},{immediate:!0,flush:"post"}),c=()=>{v(),i()};return Fe(c),c}function $t(e,t=!1){const r=b(),a=()=>r.value=!!e();return a(),Re(a,t),r}function Dt(e,t={}){const{window:r=F}=t,a=$t(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let n;const o=b(!1),i=()=>{n&&("removeEventListener"in n?n.removeEventListener("change",s):n.removeListener(s))},s=()=>{a.value&&(i(),n=r.matchMedia(yt(e).value),o.value=n.matches,"addEventListener"in n?n.addEventListener("change",s):n.addListener(s))};return L(s),Fe(()=>i()),o}const re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ne="__vueuse_ssr_handlers__";re[ne]=re[ne]||{};const Tt=re[ne];function Be(e,t){return Tt[e]||t}function jt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ft=Object.defineProperty,he=Object.getOwnPropertySymbols,Rt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,ge=(e,t,r)=>t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ye=(e,t)=>{for(var r in t||(t={}))Rt.call(t,r)&&ge(e,r,t[r]);if(he)for(var r of he(t))Ct.call(t,r)&&ge(e,r,t[r]);return e};const Lt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},we="vueuse-storage";function Bt(e,t,r,a={}){var n;const{flush:o="pre",deep:i=!0,listenToStorageChanges:s=!0,writeDefaults:v=!0,mergeDefaults:c=!1,shallow:l,window:m=F,eventFilter:p,onError:f=g=>{console.error(g)}}=a,u=(l?nt:b)(t);if(!r)try{r=Be("getDefaultStorage",()=>{var g;return(g=F)==null?void 0:g.localStorage})()}catch(g){f(g)}if(!r)return u;const d=R(t),y=jt(d),O=(n=a.serializer)!=null?n:Lt[y],{pause:E,resume:$}=kt(u,()=>D(u.value),{flush:o,deep:i,eventFilter:p});return m&&s&&(me(m,"storage",M),me(m,we,G)),M(),u;function D(g){try{if(g==null)r.removeItem(e);else{const I=O.write(g),T=r.getItem(e);T!==I&&(r.setItem(e,I),m&&m.dispatchEvent(new CustomEvent(we,{detail:{key:e,oldValue:T,newValue:I,storageArea:r}})))}}catch(I){f(I)}}function j(g){const I=g?g.newValue:r.getItem(e);if(I==null)return v&&d!==null&&r.setItem(e,O.write(d)),d;if(!g&&c){const T=O.read(I);return dt(c)?c(T,d):y==="object"&&!Array.isArray(T)?ye(ye({},d),T):T}else return typeof I!="string"?I:O.read(I)}function G(g){M(g.detail)}function M(g){if(!(g&&g.storageArea!==r)){if(g&&g.key==null){u.value=d;return}if(!(g&&g.key!==e)){E();try{u.value=j(g)}catch(I){f(I)}finally{g?A($):$()}}}}}function Ve(e){return Dt("(prefers-color-scheme: dark)",e)}var Vt=Object.defineProperty,be=Object.getOwnPropertySymbols,Ut=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,_e=(e,t,r)=>t in e?Vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Wt=(e,t)=>{for(var r in t||(t={}))Ut.call(t,r)&&_e(e,r,t[r]);if(be)for(var r of be(t))Ht.call(t,r)&&_e(e,r,t[r]);return e};function Qt(e={}){const{selector:t="html",attribute:r="class",initialValue:a="auto",window:n=F,storage:o,storageKey:i="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:v,emitAuto:c}=e,l=Wt({auto:"",light:"light",dark:"dark"},e.modes||{}),m=Ve({window:n}),p=P(()=>m.value?"dark":"light"),f=v||(i==null?b(a):Bt(i,a,o,{window:n,listenToStorageChanges:s})),u=P({get(){return f.value==="auto"&&!c?p.value:f.value},set(E){f.value=E}}),d=Be("updateHTMLAttrs",(E,$,D)=>{const j=n==null?void 0:n.document.querySelector(E);if(j)if($==="class"){const G=D.split(/\s/g);Object.values(l).flatMap(M=>(M||"").split(/\s/g)).filter(Boolean).forEach(M=>{G.includes(M)?j.classList.add(M):j.classList.remove(M)})}else j.setAttribute($,D)});function y(E){var $;const D=E==="auto"?p.value:E;d(t,r,($=l[D])!=null?$:D)}function O(E){e.onChanged?e.onChanged(E,y):y(E)}return H(u,O,{flush:"post",immediate:!0}),c&&H(p,()=>O(u.value),{flush:"post"}),Re(()=>O(u.value)),u}var zt=Object.defineProperty,Jt=Object.defineProperties,Kt=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertySymbols,Gt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,xe=(e,t,r)=>t in e?zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Xt=(e,t)=>{for(var r in t||(t={}))Gt.call(t,r)&&xe(e,r,t[r]);if(Oe)for(var r of Oe(t))qt.call(t,r)&&xe(e,r,t[r]);return e},Yt=(e,t)=>Jt(e,Kt(t));function Zt(e={}){const{valueDark:t="dark",valueLight:r="",window:a=F}=e,n=Qt(Yt(Xt({},e),{onChanged:(s,v)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,s==="dark"):v(s)},modes:{dark:t,light:r}})),o=Ve({window:a});return P({get(){return n.value==="dark"},set(s){s===o.value?n.value="auto":n.value=s?"dark":"light"}})}var Ie;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ie||(Ie={}));var er=Object.defineProperty,Se=Object.getOwnPropertySymbols,tr=Object.prototype.hasOwnProperty,rr=Object.prototype.propertyIsEnumerable,Pe=(e,t,r)=>t in e?er(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nr=(e,t)=>{for(var r in t||(t={}))tr.call(t,r)&&Pe(e,r,t[r]);if(Se)for(var r of Se(t))rr.call(t,r)&&Pe(e,r,t[r]);return e};const ar={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};nr({linear:gt},ar);const Vr={__name:"SwitchDarkMode",setup(e){const t=Zt(),r=wt(t);return(a,n)=>{const o=ke("tooltip");return Ae((V(),at("button",{class:"inline-flex items-center justify-center p-2 rounded text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-900 focus:text-slate-500 dark:focus:text-slate-400 transition duration-150 ease-in-out",onClick:n[0]||(n[0]=i=>x(r)())},[x(t)?(V(),te(x(qe),{key:0,class:"w-5 h-5 fill-current"})):fe("",!0),x(t)?fe("",!0):(V(),te(x(Xe),{key:1,class:"w-5 h-5 fill-current"}))])),[[o,a.lang().label.dark_mode]])}}};function z(e,t,...r){if(e in t){let n=t[e];return typeof n=="function"?n(...r):n}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,z),a}var ae=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ae||{}),lr=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(lr||{});function J({visible:e=!0,features:t=0,ourProps:r,theirProps:a,...n}){var o;let i=He(a,r),s=Object.assign(n,{props:i});if(e||t&2&&i.static)return Y(s);if(t&1){let v=(o=i.unmount)==null||o?0:1;return z(v,{0(){return null},1(){return Y({...n,props:{...i,hidden:!0,style:{display:"none"}}})}})}return Y(s)}function Y({props:e,attrs:t,slots:r,slot:a,name:n}){var o,i;let{as:s,...v}=or(e,["unmount","static"]),c=(o=r.default)==null?void 0:o.call(r,a),l={};if(a){let m=!1,p=[];for(let[f,u]of Object.entries(a))typeof u=="boolean"&&(m=!0),u===!0&&p.push(f);m&&(l["data-headlessui-state"]=p.join(" "))}if(s==="template"){if(c=Ue(c??[]),Object.keys(v).length>0||Object.keys(t).length>0){let[m,...p]=c??[];if(!ir(m)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(v).concat(Object.keys(t)).map(d=>d.trim()).filter((d,y,O)=>O.indexOf(d)===y).sort((d,y)=>d.localeCompare(y)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let f=He((i=m.props)!=null?i:{},v),u=lt(m,f);for(let d in f)d.startsWith("on")&&(u.props||(u.props={}),u.props[d]=f[d]);return u}return Array.isArray(c)&&c.length===1?c[0]:c}return ot(s,Object.assign({},v,l),{default:()=>c})}function Ue(e){return e.flatMap(t=>t.type===it?Ue(t.children):[t])}function He(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let a of e)for(let n in a)n.startsWith("on")&&typeof a[n]=="function"?(r[n]!=null||(r[n]=[]),r[n].push(a[n])):t[n]=a[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(a=>[a,void 0])));for(let a in r)Object.assign(t,{[a](n,...o){let i=r[a];for(let s of i){if(n instanceof Event&&n.defaultPrevented)return;s(n,...o)}}});return t}function or(e,t=[]){let r=Object.assign({},e);for(let a of t)a in r&&delete r[a];return r}function ir(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let sr=0;function ur(){return++sr}function ie(){return ur()}var _=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(_||{});function cr(e){throw new Error("Unexpected object: "+e)}var S=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(S||{});function fr(e,t){let r=t.resolveItems();if(r.length<=0)return null;let a=t.resolveActiveIndex(),n=a??-1,o=(()=>{switch(e.focus){case 0:return r.findIndex(i=>!t.resolveDisabled(i));case 1:{let i=r.slice().reverse().findIndex((s,v,c)=>n!==-1&&c.length-v-1>=n?!1:!t.resolveDisabled(s));return i===-1?i:r.length-1-i}case 2:return r.findIndex((i,s)=>s<=n?!1:!t.resolveDisabled(i));case 3:{let i=r.slice().reverse().findIndex(s=>!t.resolveDisabled(s));return i===-1?i:r.length-1-i}case 4:return r.findIndex(i=>t.resolveId(i)===e.id);case 5:return null;default:cr(e)}})();return o===-1?a:o}function w(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let We=Symbol("Context");var C=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(C||{});function dr(){return $e(We,null)}function pr(e){De(We,e)}function Ee(e,t){if(e)return e;let r=t??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function vr(e,t){let r=b(Ee(e.value.type,e.value.as));return U(()=>{r.value=Ee(e.value.type,e.value.as)}),L(()=>{var a;r.value||w(t)&&w(t)instanceof HTMLButtonElement&&!((a=w(t))!=null&&a.hasAttribute("type"))&&(r.value="button")}),r}var mr=Object.defineProperty,hr=(e,t,r)=>t in e?mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ne=(e,t,r)=>(hr(e,typeof t!="symbol"?t+"":t,r),r);class gr{constructor(){Ne(this,"current",this.detect()),Ne(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Qe=new gr;function se(e){if(Qe.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=w(e);if(t)return t.ownerDocument}return document}function yr({container:e,accept:t,walk:r,enabled:a}){L(()=>{let n=e.value;if(!n||a!==void 0&&!a.value)return;let o=se(e);if(!o)return;let i=Object.assign(v=>t(v),{acceptNode:t}),s=o.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,i,!1);for(;s.nextNode();)r(s.currentNode)})}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var oe=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(oe||{}),wr=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(wr||{}),br=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(br||{});function ze(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var ue=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ue||{});function ce(e,t=0){var r;return e===((r=se(e))==null?void 0:r.body)?!1:z(t,{0(){return e.matches(le)},1(){let a=e;for(;a!==null;){if(a.matches(le))return!0;a=a.parentElement}return!1}})}function Je(e){let t=se(e);A(()=>{t&&!ce(t.activeElement,0)&&_r(e)})}function _r(e){e==null||e.focus({preventScroll:!0})}let Or=["textarea","input"].join(",");function xr(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Or))!=null?r:!1}function Ke(e,t=r=>r){return e.slice().sort((r,a)=>{let n=t(r),o=t(a);if(n===null||o===null)return 0;let i=n.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ir(e,t){return Sr(ze(),t,{relativeTo:e})}function Sr(e,t,{sorted:r=!0,relativeTo:a=null,skipElements:n=[]}={}){var o;let i=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,s=Array.isArray(e)?r?Ke(e):e:ze(e);n.length>0&&s.length>1&&(s=s.filter(u=>!n.includes(u))),a=a??i.activeElement;let v=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(a))-1;if(t&4)return Math.max(0,s.indexOf(a))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=t&32?{preventScroll:!0}:{},m=0,p=s.length,f;do{if(m>=p||m+p<=0)return 0;let u=c+m;if(t&16)u=(u+p)%p;else{if(u<0)return 3;if(u>=p)return 1}f=s[u],f==null||f.focus(l),m+=v}while(f!==i.activeElement);return t&6&&xr(f)&&f.select(),f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),2}function Z(e,t,r){Qe.isServer||L(a=>{document.addEventListener(e,t,r),a(()=>document.removeEventListener(e,t,r))})}function Pr(e,t,r=P(()=>!0)){function a(o,i){if(!r.value||o.defaultPrevented)return;let s=i(o);if(s===null||!s.getRootNode().contains(s))return;let v=function c(l){return typeof l=="function"?c(l()):Array.isArray(l)||l instanceof Set?l:[l]}(e);for(let c of v){if(c===null)continue;let l=c instanceof HTMLElement?c:w(c);if(l!=null&&l.contains(s)||o.composed&&o.composedPath().includes(l))return}return!ce(s,ue.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let n=b(null);Z("mousedown",o=>{var i,s;r.value&&(n.value=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),Z("click",o=>{n.value&&(a(o,()=>n.value),n.value=null)},!0),Z("blur",o=>a(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Me(e){return[e.screenX,e.screenY]}function Er(){let e=b([-1,-1]);return{wasMoved(t){let r=Me(t);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(t){e.value=Me(t)}}}var Nr=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Nr||{}),Mr=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Mr||{});function kr(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ge=Symbol("MenuContext");function K(e){let t=$e(Ge,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,K),r}return t}let Ar=Q({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:r}){let a=b(1),n=b(null),o=b(null),i=b([]),s=b(""),v=b(null),c=b(1);function l(p=f=>f){let f=v.value!==null?i.value[v.value]:null,u=Ke(p(i.value.slice()),y=>w(y.dataRef.domRef)),d=f?u.indexOf(f):null;return d===-1&&(d=null),{items:u,activeItemIndex:d}}let m={menuState:a,buttonRef:n,itemsRef:o,items:i,searchQuery:s,activeItemIndex:v,activationTrigger:c,closeMenu:()=>{a.value=1,v.value=null},openMenu:()=>a.value=0,goToItem(p,f,u){let d=l(),y=fr(p===S.Specific?{focus:S.Specific,id:f}:{focus:p},{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:O=>O.id,resolveDisabled:O=>O.dataRef.disabled});s.value="",v.value=y,c.value=u??1,i.value=d.items},search(p){let f=s.value!==""?0:1;s.value+=p.toLowerCase();let u=(v.value!==null?i.value.slice(v.value+f).concat(i.value.slice(0,v.value+f)):i.value).find(y=>y.dataRef.textValue.startsWith(s.value)&&!y.dataRef.disabled),d=u?i.value.indexOf(u):-1;d===-1||d===v.value||(v.value=d,c.value=1)},clearSearch(){s.value=""},registerItem(p,f){let u=l(d=>[...d,{id:p,dataRef:f}]);i.value=u.items,v.value=u.activeItemIndex,c.value=1},unregisterItem(p){let f=l(u=>{let d=u.findIndex(y=>y.id===p);return d!==-1&&u.splice(d,1),u});i.value=f.items,v.value=f.activeItemIndex,c.value=1}};return Pr([n,o],(p,f)=>{var u;m.closeMenu(),ce(f,ue.Loose)||(p.preventDefault(),(u=w(n))==null||u.focus())},P(()=>a.value===0)),De(Ge,m),pr(P(()=>z(a.value,{0:C.Open,1:C.Closed}))),()=>{let p={open:a.value===0,close:m.closeMenu};return J({ourProps:{},theirProps:e,slot:p,slots:t,attrs:r,name:"Menu"})}}}),$r=Q({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${ie()}`}},setup(e,{attrs:t,slots:r,expose:a}){let n=K("MenuButton");a({el:n.buttonRef,$el:n.buttonRef});function o(c){switch(c.key){case _.Space:case _.Enter:case _.ArrowDown:c.preventDefault(),c.stopPropagation(),n.openMenu(),A(()=>{var l;(l=w(n.itemsRef))==null||l.focus({preventScroll:!0}),n.goToItem(S.First)});break;case _.ArrowUp:c.preventDefault(),c.stopPropagation(),n.openMenu(),A(()=>{var l;(l=w(n.itemsRef))==null||l.focus({preventScroll:!0}),n.goToItem(S.Last)});break}}function i(c){switch(c.key){case _.Space:c.preventDefault();break}}function s(c){e.disabled||(n.menuState.value===0?(n.closeMenu(),A(()=>{var l;return(l=w(n.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(c.preventDefault(),n.openMenu(),kr(()=>{var l;return(l=w(n.itemsRef))==null?void 0:l.focus({preventScroll:!0})})))}let v=vr(P(()=>({as:e.as,type:t.type})),n.buttonRef);return()=>{var c;let l={open:n.menuState.value===0},{id:m,...p}=e,f={ref:n.buttonRef,id:m,type:v.value,"aria-haspopup":"menu","aria-controls":(c=w(n.itemsRef))==null?void 0:c.id,"aria-expanded":e.disabled?void 0:n.menuState.value===0,onKeydown:o,onKeyup:i,onClick:s};return J({ourProps:f,theirProps:p,slot:l,attrs:t,slots:r,name:"MenuButton"})}}}),Dr=Q({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${ie()}`}},setup(e,{attrs:t,slots:r,expose:a}){let n=K("MenuItems"),o=b(null);a({el:n.itemsRef,$el:n.itemsRef}),yr({container:P(()=>w(n.itemsRef)),enabled:P(()=>n.menuState.value===0),accept(l){return l.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:l.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(l){l.setAttribute("role","none")}});function i(l){var m;switch(o.value&&clearTimeout(o.value),l.key){case _.Space:if(n.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),n.search(l.key);case _.Enter:if(l.preventDefault(),l.stopPropagation(),n.activeItemIndex.value!==null){let p=n.items.value[n.activeItemIndex.value];(m=w(p.dataRef.domRef))==null||m.click()}n.closeMenu(),Je(w(n.buttonRef));break;case _.ArrowDown:return l.preventDefault(),l.stopPropagation(),n.goToItem(S.Next);case _.ArrowUp:return l.preventDefault(),l.stopPropagation(),n.goToItem(S.Previous);case _.Home:case _.PageUp:return l.preventDefault(),l.stopPropagation(),n.goToItem(S.First);case _.End:case _.PageDown:return l.preventDefault(),l.stopPropagation(),n.goToItem(S.Last);case _.Escape:l.preventDefault(),l.stopPropagation(),n.closeMenu(),A(()=>{var p;return(p=w(n.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case _.Tab:l.preventDefault(),l.stopPropagation(),n.closeMenu(),A(()=>Ir(w(n.buttonRef),l.shiftKey?oe.Previous:oe.Next));break;default:l.key.length===1&&(n.search(l.key),o.value=setTimeout(()=>n.clearSearch(),350));break}}function s(l){switch(l.key){case _.Space:l.preventDefault();break}}let v=dr(),c=P(()=>v!==null?(v.value&C.Open)===C.Open:n.menuState.value===0);return()=>{var l,m;let p={open:n.menuState.value===0},{id:f,...u}=e,d={"aria-activedescendant":n.activeItemIndex.value===null||(l=n.items.value[n.activeItemIndex.value])==null?void 0:l.id,"aria-labelledby":(m=w(n.buttonRef))==null?void 0:m.id,id:f,onKeydown:i,onKeyup:s,role:"menu",tabIndex:0,ref:n.itemsRef};return J({ourProps:d,theirProps:u,slot:p,attrs:t,slots:r,features:ae.RenderStrategy|ae.Static,visible:c.value,name:"MenuItems"})}}}),ee=Q({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${ie()}`}},setup(e,{slots:t,attrs:r,expose:a}){let n=K("MenuItem"),o=b(null);a({el:o,$el:o});let i=P(()=>n.activeItemIndex.value!==null?n.items.value[n.activeItemIndex.value].id===e.id:!1),s=P(()=>({disabled:e.disabled,textValue:"",domRef:o}));U(()=>{var u,d;let y=(d=(u=w(o))==null?void 0:u.textContent)==null?void 0:d.toLowerCase().trim();y!==void 0&&(s.value.textValue=y)}),U(()=>n.registerItem(e.id,s)),st(()=>n.unregisterItem(e.id)),L(()=>{n.menuState.value===0&&i.value&&n.activationTrigger.value!==0&&A(()=>{var u,d;return(d=(u=w(o))==null?void 0:u.scrollIntoView)==null?void 0:d.call(u,{block:"nearest"})})});function v(u){if(e.disabled)return u.preventDefault();n.closeMenu(),Je(w(n.buttonRef))}function c(){if(e.disabled)return n.goToItem(S.Nothing);n.goToItem(S.Specific,e.id)}let l=Er();function m(u){l.update(u)}function p(u){l.wasMoved(u)&&(e.disabled||i.value||n.goToItem(S.Specific,e.id,0))}function f(u){l.wasMoved(u)&&(e.disabled||i.value&&n.goToItem(S.Nothing))}return()=>{let{disabled:u}=e,d={active:i.value,disabled:u,close:n.closeMenu},{id:y,...O}=e;return J({ourProps:{id:y,ref:o,role:"menuitem",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,disabled:void 0,onClick:v,onFocus:c,onPointerenter:m,onMouseenter:m,onPointermove:p,onMousemove:p,onPointerleave:f,onMouseleave:f},theirProps:{...r,...O},slot:d,attrs:r,slots:t,name:"MenuItem"})}}});const Tr=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[h("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})],-1),jr={class:"px-1 py-1"},Fr=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 400",class:"h-4 w-6 mr-2"},[h("rect",{width:"300",height:"200",fill:"#3C3B6E"}),h("rect",{width:"600",height:"40",y:"40",fill:"#fff"}),h("rect",{width:"600",height:"40",y:"120",fill:"#fff"}),h("rect",{width:"600",height:"40",y:"200",fill:"#fff"}),h("rect",{width:"600",height:"40",y:"280",fill:"#fff"}),h("rect",{width:"600",height:"40",y:"80",fill:"#FF0000"}),h("rect",{width:"600",height:"40",y:"160",fill:"#FF0000"}),h("rect",{width:"600",height:"40",y:"240",fill:"#FF0000"}),h("circle",{cx:"30",cy:"30",r:"5",fill:"#fff"}),h("circle",{cx:"90",cy:"30",r:"5",fill:"#fff"}),h("circle",{cx:"150",cy:"30",r:"5",fill:"#fff"}),h("circle",{cx:"210",cy:"30",r:"5",fill:"#fff"}),h("circle",{cx:"270",cy:"30",r:"5",fill:"#fff"}),h("circle",{cx:"30",cy:"70",r:"5",fill:"#fff"}),h("circle",{cx:"90",cy:"70",r:"5",fill:"#fff"}),h("circle",{cx:"150",cy:"70",r:"5",fill:"#fff"}),h("circle",{cx:"210",cy:"70",r:"5",fill:"#fff"}),h("circle",{cx:"270",cy:"70",r:"5",fill:"#fff"}),h("circle",{cx:"30",cy:"110",r:"5",fill:"#fff"}),h("circle",{cx:"90",cy:"110",r:"5",fill:"#fff"}),h("circle",{cx:"150",cy:"110",r:"5",fill:"#fff"}),h("circle",{cx:"210",cy:"110",r:"5",fill:"#fff"}),h("circle",{cx:"270",cy:"110",r:"5",fill:"#fff"})],-1),Rr=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 800",class:"h-4 w-6 mr-2"},[h("rect",{width:"1200",height:"400",fill:"#ff0000"}),h("rect",{width:"1200",height:"400",y:"400",fill:"#ffffff"})],-1),Cr=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 800",class:"h-4 w-6 mr-2"},[h("rect",{width:"1200",height:"800",fill:"#138808"}),h("circle",{cx:"600",cy:"400",r:"200",fill:"#e70010"})],-1),Ur={__name:"SwitchLocale",setup(e){const r=ut().props.app.locale.toUpperCase();return(a,n)=>{const o=ke("tooltip");return Ae((V(),te(x(Ar),{as:"div",class:"relative inline-block text-left"},{default:N(()=>[h("div",null,[k(x($r),{class:"inline-flex w-full justify-center rounded-md bg-violet-400 px-4 py-2 text-sm font-medium text-white hover:bg-violet-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"},{default:N(()=>[B(ct(x(r))+" ",1),Tr]),_:1})]),k(ft,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:N(()=>[k(x(Dr),{class:"absolute right-0 mt-2 whitespace-nowrap origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"},{default:N(()=>[h("div",jr,[k(x(ee),null,{default:N(({active:i})=>[k(x(q),{href:a.route("set-locale","en"),class:X([i?"bg-violet-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])},{default:N(()=>[Fr,B(" English ")]),_:2},1032,["href","class"])]),_:1}),k(x(ee),null,{default:N(({active:i})=>[k(x(q),{href:a.route("set-locale","id"),class:X([i?"bg-violet-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])},{default:N(()=>[Rr,B(" Bahasa Indonesia ")]),_:2},1032,["href","class"])]),_:1}),k(x(ee),null,{default:N(({active:i})=>[k(x(q),{href:a.route("set-locale","bn"),class:X([i?"bg-violet-500 text-white":"text-gray-900","group flex w-full items-center rounded-md px-2 py-2 text-sm"])},{default:N(()=>[Cr,B(" বাংলা ")]),_:2},1032,["href","class"])]),_:1})])]),_:1})]),_:1})]),_:1})),[[o,a.lang().label.set_locale]])}}};export{Ur as _,Vr as a};
