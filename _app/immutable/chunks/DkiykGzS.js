import"./Bg9kRutz.js";import"./69_IOA4Y.js";import{Y as le,K as fe,b as ce,h as k,k as M,i as H,O as z,H as ke,j as ae,l as T,g as I,m as W,d as F,o as de,az as D,I as ue,L as j,aA as G,ax as te,aB as Y,aC as Ee,G as we,aD as Ne,e as ve,aE as he,y as pe,aj as _e,a5 as Ie,C as $e,aF as Ce,ak as Me,a0 as se,aG as Te,A as Se,E as xe,aH as ge,a4 as Oe,aI as He,aJ as ze,p as Be,t as ie,a as Re,c as Le,s as Pe,r as Ve,f as B}from"./Dwf0aE3m.js";import{d as De,g as je,j as We,k as Fe,e as Ge,n as Ye,m as qe,a as S,o as Ke,c as R}from"./DAzwvns1.js";import{l as x,a as $,s as q}from"./DNt3LT-Q.js";import{i as Ue}from"./BNGmT-Ny.js";function Je(e,a){if(a){const t=document.body;e.autofocus=!0,le(()=>{document.activeElement===t&&e.focus()})}}function Xe(e,a){return a}function Ze(e,a,t,s){for(var n=[],u=a.length,f=0;f<u;f++)Ee(a[f].e,n,!0);var o=u>0&&n.length===0&&t!==null;if(o){var b=t.parentNode;we(b),b.append(t),s.clear(),N(e,a[0].prev,a[u-1].next)}Ne(n,()=>{for(var p=0;p<u;p++){var m=a[p];o||(s.delete(m.k),N(e,m.prev,m.next)),ve(m.e,!o)}})}function Qe(e,a,t,s,n,u=null){var f=e,o={flags:a,items:new Map,first:null},b=(a&he)!==0;if(b){var p=e;f=k?M(pe(p)):p.appendChild(fe())}k&&H();var m=null,A=!1,i=_e(()=>{var _=t();return Ie(_)?_:_==null?[]:ue(_)});ce(()=>{var _=z(i),r=_.length;if(A&&r===0)return;A=r===0;let h=!1;if(k){var y=f.data===ke;y!==(r===0)&&(f=ae(),M(f),T(!1),h=!0)}if(k){for(var d=null,v,g=0;g<r;g++){if(I.nodeType===8&&I.data===$e){f=I,h=!0,T(!1);break}var l=_[g],c=s(l,g);v=me(I,o,d,null,l,c,g,n,a,t),o.items.set(c,v),d=v}r>0&&M(ae())}k||ea(_,o,f,n,a,s,t),u!==null&&(r===0?m?W(m):m=F(()=>u(f)):m!==null&&de(m,()=>{m=null})),h&&T(!0),z(i)}),k&&(f=I)}function ea(e,a,t,s,n,u,f){var J,X,Z,Q;var o=(n&Ce)!==0,b=(n&(G|Y))!==0,p=e.length,m=a.items,A=a.first,i=A,_,r=null,h,y=[],d=[],v,g,l,c;if(o)for(c=0;c<p;c+=1)v=e[c],g=u(v,c),l=m.get(g),l!==void 0&&((J=l.a)==null||J.measure(),(h??(h=new Set)).add(l));for(c=0;c<p;c+=1){if(v=e[c],g=u(v,c),l=m.get(g),l===void 0){var O=i?i.e.nodes_start:t;r=me(O,a,r,r===null?a.first:r.next,v,g,c,s,n,f),m.set(g,r),y=[],d=[],i=r.next;continue}if(b&&aa(l,v,c,n),l.e.f&D&&(W(l.e),o&&((X=l.a)==null||X.unfix(),(h??(h=new Set)).delete(l))),l!==i){if(_!==void 0&&_.has(l)){if(y.length<d.length){var E=d[0],w;r=E.prev;var U=y[0],P=y[y.length-1];for(w=0;w<y.length;w+=1)re(y[w],E,t);for(w=0;w<d.length;w+=1)_.delete(d[w]);N(a,U.prev,P.next),N(a,r,U),N(a,P,E),i=E,r=P,c-=1,y=[],d=[]}else _.delete(l),re(l,i,t),N(a,l.prev,l.next),N(a,l,r===null?a.first:r.next),N(a,r,l),r=l;continue}for(y=[],d=[];i!==null&&i.k!==g;)i.e.f&D||(_??(_=new Set)).add(i),d.push(i),i=i.next;if(i===null)continue;l=i}y.push(l),r=l,i=l.next}if(i!==null||_!==void 0){for(var C=_===void 0?[]:ue(_);i!==null;)i.e.f&D||C.push(i),i=i.next;var V=C.length;if(V>0){var Ae=n&he&&p===0?t:null;if(o){for(c=0;c<V;c+=1)(Z=C[c].a)==null||Z.measure();for(c=0;c<V;c+=1)(Q=C[c].a)==null||Q.fix()}Ze(a,C,Ae,m)}}o&&le(()=>{var ee;if(h!==void 0)for(l of h)(ee=l.a)==null||ee.apply()}),j.first=a.first&&a.first.e,j.last=r&&r.e}function aa(e,a,t,s){s&G&&te(e.v,a),s&Y?te(e.i,t):e.i=t}function me(e,a,t,s,n,u,f,o,b,p){var m=(b&G)!==0,A=(b&Te)===0,i=m?A?Me(n):se(n):n,_=b&Y?se(f):f,r={i:_,v:i,k:u,a:null,e:null,prev:t,next:s};try{return r.e=F(()=>o(e,i,_,p),k),r.e.prev=t&&t.e,r.e.next=s&&s.e,t===null?a.first=r:(t.next=r,t.e.next=r.e),s!==null&&(s.prev=r,s.e.prev=r.e),r}finally{}}function re(e,a,t){for(var s=e.next?e.next.e.nodes_start:t,n=a?a.e.nodes_start:t,u=e.e.nodes_start;u!==s;){var f=Se(u);n.before(u),u=f}}function N(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function L(e,a,t,s,n){var o;k&&H();var u=(o=a.$$slots)==null?void 0:o[t],f=!1;u===!0&&(u=a.children,f=!0),u===void 0||u(e,f?()=>s:s)}function ta(e,a,t,s,n,u){let f=k;k&&H();var o,b,p=null;k&&I.nodeType===1&&(p=I,H());var m=k?I:e,A;ce(()=>{const i=a()||null;var _=ge;i!==o&&(A&&(i===null?de(A,()=>{A=null,b=null}):i===b?W(A):ve(A)),i&&i!==b&&(A=F(()=>{p=k?p:document.createElementNS(_,i),De(p,p);{k&&je(i)&&p.append(document.createComment(""));var r=k?pe(p):p.appendChild(fe());k&&(r===null?T(!1):M(r)),s(p,r)}j.nodes_end=p,m.before(p)})),o=i,o&&(b=o))},xe),f&&(T(!0),M(m))}function ye(e){var a,t,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(a=0;a<n;a++)e[a]&&(t=ye(e[a]))&&(s&&(s+=" "),s+=t)}else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function sa(){for(var e,a,t=0,s="",n=arguments.length;t<n;t++)(e=arguments[t])&&(a=ye(e))&&(s&&(s+=" "),s+=a);return s}function ia(e){return typeof e=="object"?sa(e):e??""}function ra(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function na(e,a,t,s){var n=e.__attributes??(e.__attributes={});k&&(n[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||n[a]!==(n[a]=t)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[He]=t),t==null?e.removeAttribute(a):typeof t!="string"&&be(e).includes(a)?e[a]=t:e.setAttribute(a,t))}function ne(e,a,t,s,n=!1,u=!1,f=!1){var o=a||{},b=e.tagName==="OPTION";for(var p in a)p in t||(t[p]=null);t.class&&(t.class=ia(t.class));var m=be(e),A=e.__attributes??(e.__attributes={});for(const d in t){let v=t[d];if(b&&d==="value"&&v==null){e.value=e.__value="",o[d]=v;continue}var i=o[d];if(v!==i){o[d]=v;var _=d[0]+d[1];if(_!=="$$"){if(_==="on"){const g={},l="$$"+d;let c=d.slice(2);var r=qe(c);if(We(c)&&(c=c.slice(0,-7),g.capture=!0),!r&&i){if(v!=null)continue;e.removeEventListener(c,o[l],g),o[l]=null}if(v!=null)if(r)e[`__${c}`]=v,Ge([c]);else{let O=function(E){o[d].call(this,E)};o[l]=Fe(c,e,O,g)}else r&&(e[`__${c}`]=void 0)}else if(d==="style"&&v!=null)e.style.cssText=v+"";else if(d==="autofocus")Je(e,!!v);else if(d==="__value"||d==="value"&&v!=null)e.value=e[d]=e.__value=v;else if(d==="selected"&&b)ra(e,v);else{var h=d;n||(h=Ye(h));var y=h==="defaultValue"||h==="defaultChecked";if(v==null&&!u&&!y)if(A[d]=null,h==="value"||h==="checked"){let g=e;if(h==="value"){let l=g.defaultValue;g.removeAttribute(h),g.defaultValue=l}else{let l=g.defaultChecked;g.removeAttribute(h),g.defaultChecked=l}}else e.removeAttribute(d);else y||m.includes(h)&&(u||typeof v!="string")?e[h]=v:typeof v!="function"&&(k&&(h==="src"||h==="href"||h==="srcset")||na(e,h,v))}d==="style"&&"__styles"in e&&(e.__styles={})}}}return o}var oe=new Map;function be(e){var a=oe.get(e.nodeName);if(a)return a;oe.set(e.nodeName,a=[]);for(var t,s=e,n=Element.prototype;n!==s;){t=ze(s);for(var u in t)t[u].set&&a.push(u);s=Oe(s)}return a}/**
 * @license lucide-svelte v0.474.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const oa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var la=Ke("<svg><!><!></svg>");function K(e,a){const t=x(a,["children","$$slots","$$events","$$legacy"]),s=x(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Be(a,!1);let n=$(a,"name",8,void 0),u=$(a,"color",8,"currentColor"),f=$(a,"size",8,24),o=$(a,"strokeWidth",8,2),b=$(a,"absoluteStrokeWidth",8,!1),p=$(a,"iconNode",24,()=>[]);const m=(...h)=>h.filter((y,d,v)=>!!y&&v.indexOf(y)===d).join(" ");Ue();var A=la();let i;var _=Le(A);Qe(_,1,p,Xe,(h,y)=>{let d=()=>z(y)[0],v=()=>z(y)[1];var g=R(),l=B(g);ta(l,d,!0,(c,O)=>{let E;ie(()=>E=ne(c,E,{...v()},void 0,c.namespaceURI===ge,c.nodeName.includes("-")))}),S(h,g)});var r=Pe(_);L(r,a,"default",{}),Ve(A),ie((h,y)=>i=ne(A,i,{...oa,...s,width:f(),height:f(),stroke:u(),"stroke-width":h,class:y},void 0,!0),[()=>b()?Number(o())*24/Number(f()):o(),()=>m("lucide-icon","lucide",n()?`lucide-${n()}`:"",t.class)],_e),S(e,A),Re()}function fa(e,a){const t=x(a,["children","$$slots","$$events","$$legacy"]);K(e,q({name:"scan-text"},()=>t,{iconNode:[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]],children:(n,u)=>{var f=R(),o=B(f);L(o,a,"default",{}),S(n,f)},$$slots:{default:!0}}))}function ca(e,a){const t=x(a,["children","$$slots","$$events","$$legacy"]);K(e,q({name:"radar"},()=>t,{iconNode:[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]],children:(n,u)=>{var f=R(),o=B(f);L(o,a,"default",{}),S(n,f)},$$slots:{default:!0}}))}function da(e,a){const t=x(a,["children","$$slots","$$events","$$legacy"]);K(e,q({name:"signature"},()=>t,{iconNode:[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}],["path",{d:"M3 21h18"}]],children:(n,u)=>{var f=R(),o=B(f);L(o,a,"default",{}),S(n,f)},$$slots:{default:!0}}))}const ua="https://tangible-caiman-669.convex.cloud",Ea=`${ua}/api/storage`,wa={name:"MegaHydronics",phone:6046206121,address:"114-4268 Lozells Ave, Burnaby, BC V5A0C6",mapLink:"https://maps.app.goo.gl/nmgju3NoJyZ1XAER9"},va=[];Object.fromEntries(va.map(e=>[e.id,e]));const ha=[{id:"buildOps",name:"BuildOps",url:"https://live.buildops.com/"},{id:"assetPanda",name:"Asset Panda",url:"https://login.assetpanda.com/"},{id:"samsara",name:"Samsara",url:"https://cloud.samsara.com/"},{id:"brightHr",name:"BrightHR",url:"https://app.brighthr.ca/"},{id:"convex",name:"Convex",url:"https://dashboard.convex.dev/"},{id:"office365",name:"Office 365",url:"https://www.office.com/"},{id:"bluEpyc",name:"BluEpyc",url:""},{id:"openAi",name:"OpenAI",url:""}],Na=Object.fromEntries(ha.map(e=>[e.id,e])),pa=[{id:"assetCompiler",title:"Asset Compiler",description:"Extract tabular asset information from equipment schedule screenshots",icon:fa,solutions:["openAi"]},{id:"toolTracker",title:"Tool Tracker",description:"View list of tracked shop tools with presence and assignment status",icon:ca,solutions:["bluEpyc","assetPanda"]},{id:"emailSignature",title:"Email Signature",description:"Copy the standard MegaHydronics email signature and customize it",icon:da,solutions:["office365"]}],Ia=Object.fromEntries(pa.map(e=>[e.id,e])),_a=[{id:"megaHydronics",name:"MegaHydronics",link:"https://megahydronics.com",path:"3552f385-4f53-46bd-a2f2-6ff6a68c10b9",size:29},{id:"linkedIn",name:"LinkedIn",link:"https://ca.linkedin.com/company/megahydronics-inc",path:"9a667ba3-da6f-4924-8892-2a791c51a983",size:12},{id:"facebook",name:"Facebook",link:"https://www.facebook.com/megahydronics",path:"cbad1c50-8101-435e-bd0d-1e2eb9a1c4dd",size:12},{id:"instagram",name:"Instagram",link:"https://www.instagram.com/megahydronics",path:"a9d1eb38-e722-45fc-a3d4-8ea22329da75",size:12}],$a=Object.fromEntries(_a.map(e=>[e.id,e]));export{K as I,Na as a,na as b,pa as c,ia as d,Qe as e,wa as f,Ea as g,$a as h,Xe as i,ua as j,L as s,Ia as t};
