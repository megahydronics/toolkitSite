var Qt=t=>{throw TypeError(t)};var De=(t,e,n)=>e.has(t)||Qt("Cannot "+n);var S=(t,e,n)=>(De(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Qt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{n as Ut,aM as Fe,al as C,P as O,a0 as N,at as Ve}from"./CiAMSZcE.js";import{o as te}from"./B5x7-EP0.js";const B=[];function jt(t,e=Ut){let n=null;const r=new Set;function a(o){if(Fe(t,o)&&(t=o,n)){const c=!B.length;for(const l of r)l[1](),B.push(l,t);if(c){for(let l=0;l<B.length;l+=2)B[l][0](B[l+1]);B.length=0}}}function s(o){a(o(t))}function i(o,c=Ut){const l=[o,c];return r.add(l),r.size===1&&(n=e(a,s)||Ut),o(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}new URL("sveltekit-internal://");function Be(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function qe(t){return t.split("%25").map(decodeURI).join("%25")}function Me(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Lt({href:t}){return t.split("#")[0]}function Ge(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}const He="/__data.json",Ke=".html__data.json";function We(t){return t.endsWith(".html")?t.replace(/\.html$/,Ke):t.replace(/\/$/,"")+He}function Ye(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function ze(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const Je=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&Y.delete($t(t)),Je(t,e));const Y=new Map;function Xe(t,e){const n=$t(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=ze(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function Ze(t,e,n){if(Y.size>0){const r=$t(t,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(e,n)}function $t(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Ye(...a)}"]`}return r}const Qe=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function tn(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${nn(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Tt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Tt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Qe.exec(c),[,u,y,h,m]=d;return e.push({name:h,matcher:m,optional:!!u,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Tt(c)}).join("")}).join("")}/?$`),params:e}}function en(t){return!/^\([^)]+\)$/.test(t)}function nn(t){return t.slice(1).split("/").filter(en)}function rn(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=e[o+1],u=a[o+1];d&&!d.rest&&d.optional&&u&&c.chained&&(i=0),!d&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Tt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function an({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:u,params:y}=tn(o),h={id:o,exec:m=>{const f=u.exec(m);if(f)return rn(f,y,r)},errors:[1,...d||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return h.errors.length=h.layouts.length=Math.max(h.errors.length,h.layouts.length),h});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function ge(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function ee(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var fe;const x=((fe=globalThis.__sveltekit_1vjf0us)==null?void 0:fe.base)??"";var ue;const on=((ue=globalThis.__sveltekit_1vjf0us)==null?void 0:ue.assets)??x,sn="1737486274549",me="sveltekit:snapshot",ye="sveltekit:scroll",Dt="sveltekit:states",_e="sveltekit:pageurl",F="sveltekit:history",G="sveltekit:navigation",ut={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ft=location.origin;function Ft(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Vt(){return{x:pageXOffset,y:pageYOffset}}function q(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const ne={...ut,"":ut.hover};function we(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ve(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=we(t)}}function Ct(t,e,n){let r;try{r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||bt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ft&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ht(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=q(o,"preload-code")),a===null&&(a=q(o,"preload-data")),e===null&&(e=q(o,"keepfocus")),n===null&&(n=q(o,"noscroll")),s===null&&(s=q(o,"reload")),i===null&&(i=q(o,"replacestate")),o=we(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:ne[r??"off"],preload_data:ne[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function re(t){const e=jt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const be={v:()=>{}};function cn(){const{set:t,subscribe:e}=jt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${on}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==sn;return i&&(t(!0),be.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function bt(t,e,n){return t.origin!==ft||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function ae(t){const e=fn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const ln="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function fn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=ln.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const un=-1,hn=-2,dn=-3,pn=-4,gn=-5,mn=-6;function yn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===un)return;if(s===dn)return NaN;if(s===pn)return 1/0;if(s===gn)return-1/0;if(s===mn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let h=1;h<o.length;h+=1)d.add(a(o[h]));break;case"Map":const u=new Map;r[s]=u;for(let h=1;h<o.length;h+=2)u.set(a(o[h]),a(o[h+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let h=1;h<o.length;h+=2)y[o[h]]=a(o[h+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const h=globalThis[c],m=o[1],f=ae(m),g=new h(f);r[s]=g;break}case"ArrayBuffer":{const h=o[1],m=ae(h);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==hn&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const Se=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Se];const _n=new Set([...Se]);[..._n];function wn(t){return t.filter(e=>e!=null)}class St{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Bt{constructor(e,n){this.status=e,this.location=n}}class qt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const vn="x-sveltekit-invalidated",bn="x-sveltekit-trailing-slash";function dt(t){return t instanceof St||t instanceof qt?t.status:500}function Sn(t){return t instanceof qt?t.text:"Internal Error"}let I,X,xt;const An=te.toString().includes("$$")||/function \w+\(\) \{\}/.test(te.toString());var tt,et,nt,rt,at,ot,st,it,he,ct,de,lt,pe;An?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},xt={current:!1}):(I=new(he=class{constructor(){P(this,tt,C({}));P(this,et,C(null));P(this,nt,C(null));P(this,rt,C({}));P(this,at,C({id:null}));P(this,ot,C({}));P(this,st,C(-1));P(this,it,C(new URL("https://example.com")))}get data(){return O(S(this,tt))}set data(e){N(S(this,tt),e)}get form(){return O(S(this,et))}set form(e){N(S(this,et),e)}get error(){return O(S(this,nt))}set error(e){N(S(this,nt),e)}get params(){return O(S(this,rt))}set params(e){N(S(this,rt),e)}get route(){return O(S(this,at))}set route(e){N(S(this,at),e)}get state(){return O(S(this,ot))}set state(e){N(S(this,ot),e)}get status(){return O(S(this,st))}set status(e){N(S(this,st),e)}get url(){return O(S(this,it))}set url(e){N(S(this,it),e)}},tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,he),X=new(de=class{constructor(){P(this,ct,C(null))}get current(){return O(S(this,ct))}set current(e){N(S(this,ct),e)}},ct=new WeakMap,de),xt=new(pe=class{constructor(){P(this,lt,C(!1))}get current(){return O(S(this,lt))}set current(e){N(S(this,lt),e)}},lt=new WeakMap,pe),be.v=()=>xt.current=!0);function kn(t){Object.assign(I,t)}const En=new Set(["icon","shortcut icon","apple-touch-icon"]),V=ge(ye)??{},Z=ge(me)??{},$={url:re({}),page:re({}),navigating:jt(null),updated:cn()};function Mt(t){V[t]=Vt()}function Rn(t,e){let n=t+1;for(;V[n];)delete V[n],n+=1;for(n=e+1;Z[n];)delete Z[n],n+=1}function H(t){return location.href=t.href,new Promise(()=>{})}async function Ae(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function oe(){}let At,Ot,pt,j,Nt,A;const gt=[],mt=[];let T=null;const ke=new Set,In=new Set,z=new Set;let w={branch:[],error:null,url:null},Gt=!1,yt=!1,se=!0,Q=!1,K=!1,Ee=!1,Ht=!1,Kt,R,L,_t;const J=new Set;async function Gn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),At=an(t),j=document.documentElement,Nt=e,Ot=t.nodes[0],pt=t.nodes[1],Ot(),pt(),R=(i=history.state)==null?void 0:i[F],L=(o=history.state)==null?void 0:o[G],R||(R=L=Date.now(),history.replaceState({...history.state,[F]:R,[G]:L},""));const r=V[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await jn(Nt,n):Cn(A.hash?$e(new URL(location.href)):location.href,{replaceState:!0}),Nn()}function Un(){gt.length=0,Ht=!1}function Re(t){mt.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=mt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Ie(t){var e;(e=Z[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=mt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function ie(){Mt(R),ee(ye,V),Re(L),ee(me,Z)}async function Wt(t,e,n,r){return W({type:"goto",url:Ft(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Ht=!0),e.invalidate&&e.invalidate.forEach(On)}})}async function Ln(t){if(t.id!==(T==null?void 0:T.id)){const e={};J.add(e),T={id:t.id,token:e,promise:Le({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(T=null),n))}}return T.promise}async function Pt(t){const e=Te(t);if(!e)return;const n=At.find(r=>r.exec(xe(e)));n&&await Promise.all([...n.layouts,n.leaf].map(r=>r==null?void 0:r[1]()))}function Ue(t,e,n){var s;w=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(I,t.props.page),Kt=new A.root({target:e,props:{...t.props,stores:$,components:mt},hydrate:n,sync:!1}),Ie(L);const a={from:null,to:{params:w.params,route:{id:((s=w.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(a)),yt=!0}function wt({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const h of n)(h==null?void 0:h.slash)!==void 0&&(o=h.slash);t.pathname=Be(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:wn(n).map(h=>h.node.component),page:Et(I)}};i!==void 0&&(c.props.form=i);let l={},d=!I,u=0;for(let h=0;h<Math.max(n.length,w.branch.length);h+=1){const m=n[h],f=w.branch[h];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${u}`]=l),u+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==I.form||d)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?l:I.data}),c}async function Yt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var d,u,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let h=function(...f){for(const g of f){const{href:_}=new URL(g,n);c.dependencies.add(_)}};const m={route:new Proxy(a,{get:(f,g)=>(o&&(c.route=!0),f[g])}),params:new Proxy(r,{get:(f,g)=>(o&&c.params.add(g),f[g])}),data:(s==null?void 0:s.data)??null,url:Ge(n,()=>{o&&(c.url=!0)},f=>{o&&c.search_params.add(f)},A.hash),async fetch(f,g){let _;f instanceof Request?(_=f.url,g={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...g}):_=f;const U=new URL(_,n);return o&&h(U.href),U.origin===n.origin&&(_=U.href.slice(n.origin.length)),yt?Ze(_,U.href,g):Xe(_,g)},setHeaders:()=>{},depends:h,parent(){return o&&(c.parent=!0),e()},untrack(f){o=!1;try{return f()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function ce(t,e,n,r,a,s){if(Ht)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==w.params[i])return!0;for(const i of a.dependencies)if(gt.some(o=>o(new URL(i))))return!0;return!1}function zt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Tn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function le({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Et(I),constructors:[]}}}async function Le({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((T==null?void 0:T.id)===t)return J.delete(T.token),T.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let d=null;const u=w.url?t!==vt(w.url):!1,y=w.route?a.id!==w.route.id:!1,h=Tn(w.url,n);let m=!1;const f=l.map((p,v)=>{var D;const k=w.branch[v],E=!!(p!=null&&p[0])&&((k==null?void 0:k.loader)!==p[1]||ce(m,y,u,h,(D=k.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(f.some(Boolean)){try{d=await Oe(n,f)}catch(p){const v=await M(p,{url:n,params:r,route:{id:t}});return J.has(s)?le({error:v,url:n,params:r,route:a}):kt({status:dt(p),error:v,url:n,route:a})}if(d.type==="redirect")return d}const g=d==null?void 0:d.nodes;let _=!1;const U=l.map(async(p,v)=>{var Rt;if(!p)return;const k=w.branch[v],E=g==null?void 0:g[v];if((!E||E.type==="skip")&&p[1]===(k==null?void 0:k.loader)&&!ce(_,y,u,h,(Rt=k.universal)==null?void 0:Rt.uses,r))return k;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Yt({loader:p[1],url:n,params:r,route:a,parent:async()=>{var Zt;const Xt={};for(let It=0;It<v;It+=1)Object.assign(Xt,(Zt=await U[It])==null?void 0:Zt.data);return Xt},server_data_node:zt(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?k==null?void 0:k.server:void 0)})});for(const p of U)p.catch(()=>{});const b=[];for(let p=0;p<l.length;p+=1)if(l[p])try{b.push(await U[p])}catch(v){if(v instanceof Bt)return{type:"redirect",location:v.location};if(J.has(s))return le({error:await M(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let k=dt(v),E;if(g!=null&&g.includes(v))k=v.status??k,E=v.error;else if(v instanceof St)E=v.body;else{if(await $.updated.check())return await Ae(),await H(n);E=await M(v,{params:r,url:n,route:{id:a.id}})}const D=await xn(p,b,i);return D?wt({url:n,params:r,branch:b.slice(0,D.idx).concat(D.node),status:k,error:E,route:a}):await Ce(n,{id:a.id},E,k)}else b.push(void 0);return wt({url:n,params:r,branch:b,status:200,error:null,route:a,form:e?void 0:null})}async function xn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function kt({status:t,error:e,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await Oe(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ft||n.pathname!==location.pathname||Gt)&&await H(n)}try{const o=await Yt({loader:Ot,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:zt(s)}),c={node:await pt(),loader:pt,universal:null,server:null,data:null};return wt({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof Bt)return Wt(new URL(o.location,location.href),{},0);throw o}}function Te(t){let e;try{if(e=A.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);A.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}function Jt(t,e){if(!t||bt(t,x,A.hash))return;const n=Te(t);if(!n)return;const r=xe(n);for(const a of At){const s=a.exec(r);if(s)return{id:vt(t),invalidating:e,route:a,params:Me(s),url:t}}}function xe(t){return qe(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function vt(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Pe({url:t,type:e,intent:n,delta:r}){let a=!1;const s=je(w,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Q||ke.forEach(o=>o(i)),a?null:s}async function W({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=oe,block:d=oe}){const u=Jt(e,!1),y=Pe({url:e,type:t,delta:n==null?void 0:n.delta,intent:u});if(!y){d();return}const h=R,m=L;l(),Q=!0,yt&&$.navigating.set(X.current=y.navigation),_t=c;let f=u&&await Le(u);if(!f){if(bt(e,x,A.hash))return await H(e);f=await Ce(e,{id:null},await M(new qt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(u==null?void 0:u.url)||e,_t!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(o>=20)f=await kt({status:500,error:await M(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Wt(new URL(f.location,e).href,{},o+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await Ae(),await H(e));if(Un(),Mt(h),Re(m),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const b=s?0:1,p={[F]:R+=b,[G]:L+=b,[Dt]:i};(s?history.replaceState:history.pushState).call(history,p,"",e),s||Rn(R,L)}if(T=null,f.props.page.state=i,yt){w=f.state,f.props.page&&(f.props.page.url=e);const b=(await Promise.all(Array.from(In,p=>p(y.navigation)))).filter(p=>typeof p=="function");if(b.length>0){let p=function(){b.forEach(v=>{z.delete(v)})};b.push(p),b.forEach(v=>{z.add(v)})}Kt.$set(f.props),kn(f.props.page),Ee=!0}else Ue(f,Nt,!1);const{activeElement:g}=document;await Ve();const _=n?n.scroll:a?Vt():null;if(se){const b=e.hash&&document.getElementById(decodeURIComponent(A.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));_?scrollTo(_.x,_.y):b?b.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==g&&document.activeElement!==document.body;!r&&!U&&$n(),se=!0,f.props.page&&Object.assign(I,f.props.page),Q=!1,t==="popstate"&&Ie(L),y.fulfil(void 0),z.forEach(b=>b(y.navigation)),$.navigating.set(X.current=null)}async function Ce(t,e,n,r){return t.origin===ft&&t.pathname===location.pathname&&!Gt?await kt({status:r,error:n,url:t,route:e}):await H(t)}function Pn(){let t;j.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(s){s.defaultPrevented||r(s.composedPath()[0],1)}j.addEventListener("mousedown",e),j.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(Pt(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=ve(s,j);if(!o)return;const{url:c,external:l,download:d}=Ct(o,x,A.hash);if(l||d)return;const u=ht(o),y=c&&vt(w.url)===vt(c);if(!u.reload&&!y)if(i<=u.preload_data){const h=Jt(c,!1);h&&Ln(h)}else i<=u.preload_code&&Pt(c)}function a(){n.disconnect();for(const s of j.querySelectorAll("a")){const{url:i,external:o,download:c}=Ct(s,x,A.hash);if(o||c)continue;const l=ht(s);l.reload||(l.preload_code===ut.viewport&&n.observe(s),l.preload_code===ut.eager&&Pt(i))}}z.add(a),a()}function M(t,e){if(t instanceof St)return t.body;const n=dt(t),r=Sn(t);return A.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Cn(t,e={}){return t=new URL(Ft(t)),t.origin!==ft?Promise.reject(new Error("goto: invalid URL")):Wt(t,e,0)}function On(t){if(typeof t=="function")gt.push(t);else{const{href:e}=new URL(t,location.href);gt.push(n=>n.href===e)}}function Hn(t,e){const n={[F]:R,[G]:L,[_e]:I.url.href,[Dt]:e};history.replaceState(n,"",Ft(t)),I.state=e,Kt.$set({page:Et(I)})}function Nn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ie(),!Q){const a=je(w,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ke.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ie()}),(e=navigator.connection)!=null&&e.saveData||Pn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=ve(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Ct(r,x,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ht(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[d,u]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=d===Lt(location);if(s||c.reload&&(!y||!u)){Pe({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(u!==void 0&&y){const[,h]=w.url.href.split("#");if(h===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(K=!0,Mt(R),t(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(h=>{requestAnimationFrame(()=>{setTimeout(h,0)}),setTimeout(h,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(bt(o,x,!1))return;const c=n.target,l=ht(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&d.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),W({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[F]){const a=n.state[F];if(_t={},a===R)return;const s=V[a],i=n.state[Dt]??{},o=new URL(n.state[_e]??location.href),c=n.state[G],l=w.url?Lt(location)===Lt(w.url):!1;if(c===L&&(Ee||l)){i!==I.state&&(I.state=i),t(o),V[R]=Vt(),s&&scrollTo(s.x,s.y),R=a;return}const u=a-R;await W({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{R=a,L=c},block:()=>{history.go(-u)},nav_token:_t})}else if(!K){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{K?(K=!1,history.replaceState({...history.state,[F]:++R,[G]:L},"",location.href)):A.hash&&w.url.hash===location.hash&&W({type:"goto",url:$e(w.url)})});for(const n of document.querySelectorAll("link"))En.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function t(n){w.url=I.url=n,$.page.set(Et(I)),$.page.notify()}}async function jn(t,{status:e=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Gt=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Jt(c,!1)||{});let l,d=!0;try{const u=r.map(async(m,f)=>{const g=i[f];return g!=null&&g.uses&&(g.uses=Ne(g.uses)),Yt({loader:A.nodes[m],url:c,params:a,route:s,parent:async()=>{const _={};for(let U=0;U<f;U+=1)Object.assign(_,(await u[U]).data);return _},server_data_node:zt(g)})}),y=await Promise.all(u),h=At.find(({id:m})=>m===s.id);if(h){const m=h.layouts;for(let f=0;f<m.length;f++)m[f]||y.splice(f,0,void 0)}l=wt({url:c,params:a,branch:y,status:e,error:n,form:o,route:h??null})}catch(u){if(u instanceof Bt){await H(new URL(u.location,location.href));return}l=await kt({status:dt(u),error:await M(u,{url:c,params:a,route:s}),url:c,route:s}),t.textContent="",d=!1}l.props.page&&(l.props.page.state={}),Ue(l,t,d)}async function Oe(t,e){var s;const n=new URL(t);n.pathname=We(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(bn,"1"),n.searchParams.append(vn,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new St(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function d(h){return yn(h,{...A.decoders,Promise:m=>new Promise((f,g)=>{o.set(m,{fulfil:f,reject:g})})})}let u="";for(;;){const{done:h,value:m}=await c.read();if(h&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const f=u.indexOf(`
`);if(f===-1)break;const g=JSON.parse(u.slice(0,f));if(u=u.slice(f+1),g.type==="redirect")return i(g);if(g.type==="data")(y=g.nodes)==null||y.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=Ne(_.uses),_.data=d(_.data))}),i(g);else if(g.type==="chunk"){const{id:_,data:U,error:b}=g,p=o.get(_);o.delete(_),b?p.reject(d(b)):p.fulfil(d(U))}}}})}function Ne(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function $n(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function je(t,e,n,r){var c,l;let a,s;const i=new Promise((d,u)=>{a=d,s=u});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Et(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function $e(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{Gn as a,I as p,Hn as r,$ as s,xt as u};
