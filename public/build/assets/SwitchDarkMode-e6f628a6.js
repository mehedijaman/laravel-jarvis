import{h as le,M as ce}from"./index-afa3307c.js";import{H as fe,r as S,u as $,U as pe,E as de,y as ee,V as ve,W as _e,Y as me,z as C,i as N,q as ge,R as Oe,m as ye,j as he,o as M,d as we,c as x,g as T}from"./app-9cb26ff6.js";var V;const te=typeof window<"u",Pe=e=>typeof e=="function",be=e=>typeof e=="string",Se=()=>{};te&&((V=window==null?void 0:window.navigator)!=null&&V.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function k(e){return typeof e=="function"?e():$(e)}function Ee(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const re=e=>e();function $e(e=re){const t=S(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:me(t),pause:r,resume:n,eventFilter:a}}function Ie(e){return e}function ne(e){return ve()?(_e(e),!0):!1}function je(e){return typeof e=="function"?C(e):S(e)}function ae(e,t=!0){pe()?de(e):t?e():ee(e)}function ke(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=fe(e),o=S(e);function u(i){if(arguments.length)return o.value=i,o.value;{const p=k(r);return o.value=o.value===p?k(n):p,o.value}}return a?u:[o,u]}var Q=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,Ae=(e,t)=>{var r={};for(var n in e)Ce.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Q)for(var n of Q(e))t.indexOf(n)<0&&Ne.call(e,n)&&(r[n]=e[n]);return r};function De(e,t,r={}){const n=r,{eventFilter:a=re}=n,o=Ae(n,["eventFilter"]);return N(e,Ee(a,t),o)}var Me=Object.defineProperty,Fe=Object.defineProperties,Le=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,xe=(e,t)=>{for(var r in t||(t={}))oe.call(t,r)&&R(e,r,t[r]);if(A)for(var r of A(t))se.call(t,r)&&R(e,r,t[r]);return e},Te=(e,t)=>Fe(e,Le(t)),Ve=(e,t)=>{var r={};for(var n in e)oe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&A)for(var n of A(e))t.indexOf(n)<0&&se.call(e,n)&&(r[n]=e[n]);return r};function Qe(e,t,r={}){const n=r,{eventFilter:a}=n,o=Ve(n,["eventFilter"]),{eventFilter:u,pause:i,resume:p,isActive:l}=$e(a);return{stop:De(e,t,Te(xe({},o),{eventFilter:u})),pause:i,resume:p,isActive:l}}function Re(e){var t;const r=k(e);return(t=r==null?void 0:r.$el)!=null?t:r}const I=te?window:void 0;function W(...e){let t,r,n,a;if(be(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=I):[t,r,n,a]=e,!t)return Se;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],u=()=>{o.forEach(c=>c()),o.length=0},i=(c,d,g,v)=>(c.addEventListener(d,g,v),()=>c.removeEventListener(d,g,v)),p=N(()=>[Re(t),k(a)],([c,d])=>{u(),c&&o.push(...r.flatMap(g=>n.map(v=>i(c,g,v,d))))},{immediate:!0,flush:"post"}),l=()=>{p(),u()};return ne(l),l}function We(e,t=!1){const r=S(),n=()=>r.value=!!e();return n(),ae(n,t),r}function Be(e,t={}){const{window:r=I}=t,n=We(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=S(!1),u=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},i=()=>{n.value&&(u(),a=r.matchMedia(je(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",i):a.addListener(i))};return ge(i),ne(()=>u()),o}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__";F[L]=F[L]||{};const ze=F[L];function ie(e,t){return ze[e]||t}function He(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Je=Object.defineProperty,B=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,H=(e,t)=>{for(var r in t||(t={}))Ue.call(t,r)&&z(e,r,t[r]);if(B)for(var r of B(t))qe.call(t,r)&&z(e,r,t[r]);return e};const Ge={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},J="vueuse-storage";function Ke(e,t,r,n={}){var a;const{flush:o="pre",deep:u=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,mergeDefaults:l=!1,shallow:c,window:d=I,eventFilter:g,onError:v=s=>{console.error(s)}}=n,_=(c?Oe:S)(t);if(!r)try{r=ie("getDefaultStorage",()=>{var s;return(s=I)==null?void 0:s.localStorage})()}catch(s){v(s)}if(!r)return _;const O=k(t),j=He(O),h=(a=n.serializer)!=null?a:Ge[j],{pause:m,resume:w}=Qe(_,()=>P(_.value),{flush:o,deep:u,eventFilter:g});return d&&i&&(W(d,"storage",y),W(d,J,D)),y(),_;function P(s){try{if(s==null)r.removeItem(e);else{const f=h.write(s),b=r.getItem(e);b!==f&&(r.setItem(e,f),d&&d.dispatchEvent(new CustomEvent(J,{detail:{key:e,oldValue:b,newValue:f,storageArea:r}})))}}catch(f){v(f)}}function E(s){const f=s?s.newValue:r.getItem(e);if(f==null)return p&&O!==null&&r.setItem(e,h.write(O)),O;if(!s&&l){const b=h.read(f);return Pe(l)?l(b,O):j==="object"&&!Array.isArray(b)?H(H({},O),b):b}else return typeof f!="string"?f:h.read(f)}function D(s){y(s.detail)}function y(s){if(!(s&&s.storageArea!==r)){if(s&&s.key==null){_.value=O;return}if(!(s&&s.key!==e)){m();try{_.value=E(s)}catch(f){v(f)}finally{s?ee(w):w()}}}}}function ue(e){return Be("(prefers-color-scheme: dark)",e)}var Ye=Object.defineProperty,U=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,et=(e,t)=>{for(var r in t||(t={}))Xe.call(t,r)&&q(e,r,t[r]);if(U)for(var r of U(t))Ze.call(t,r)&&q(e,r,t[r]);return e};function tt(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=I,storage:o,storageKey:u="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:p,emitAuto:l}=e,c=et({auto:"",light:"light",dark:"dark"},e.modes||{}),d=ue({window:a}),g=C(()=>d.value?"dark":"light"),v=p||(u==null?S(n):Ke(u,n,o,{window:a,listenToStorageChanges:i})),_=C({get(){return v.value==="auto"&&!l?g.value:v.value},set(m){v.value=m}}),O=ie("updateHTMLAttrs",(m,w,P)=>{const E=a==null?void 0:a.document.querySelector(m);if(E)if(w==="class"){const D=P.split(/\s/g);Object.values(c).flatMap(y=>(y||"").split(/\s/g)).filter(Boolean).forEach(y=>{D.includes(y)?E.classList.add(y):E.classList.remove(y)})}else E.setAttribute(w,P)});function j(m){var w;const P=m==="auto"?g.value:m;O(t,r,(w=c[P])!=null?w:P)}function h(m){e.onChanged?e.onChanged(m,j):j(m)}return N(_,h,{flush:"post",immediate:!0}),l&&N(g,()=>h(_.value),{flush:"post"}),ae(()=>h(_.value)),_}var rt=Object.defineProperty,nt=Object.defineProperties,at=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,it=(e,t)=>{for(var r in t||(t={}))ot.call(t,r)&&K(e,r,t[r]);if(G)for(var r of G(t))st.call(t,r)&&K(e,r,t[r]);return e},ut=(e,t)=>nt(e,at(t));function lt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=I}=e,a=tt(ut(it({},e),{onChanged:(i,p)=>{var l;e.onChanged?(l=e.onChanged)==null||l.call(e,i==="dark"):p(i)},modes:{dark:t,light:r}})),o=ue({window:n});return C({get(){return a.value==="dark"},set(i){i===o.value?a.value="auto":a.value=i?"dark":"light"}})}var Y;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Y||(Y={}));var ct=Object.defineProperty,X=Object.getOwnPropertySymbols,ft=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,dt=(e,t)=>{for(var r in t||(t={}))ft.call(t,r)&&Z(e,r,t[r]);if(X)for(var r of X(t))pt.call(t,r)&&Z(e,r,t[r]);return e};const vt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};dt({linear:Ie},vt);const gt={__name:"SwitchDarkMode",setup(e){const t=lt(),r=ke(t);return(n,a)=>{const o=ye("tooltip");return he((M(),we("button",{class:"inline-flex items-center justify-center p-2 rounded text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-900 focus:text-slate-500 dark:focus:text-slate-400 transition duration-150 ease-in-out",onClick:a[0]||(a[0]=u=>$(r)())},[$(t)?(M(),x($(le),{key:0,class:"w-5 h-5 fill-current"})):T("",!0),$(t)?T("",!0):(M(),x($(ce),{key:1,class:"w-5 h-5 fill-current"}))])),[[o,n.lang().label.dark_mode]])}}};export{gt as _};
