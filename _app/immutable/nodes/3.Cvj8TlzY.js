import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{p as x,c as l,s as d,r,t as f,a as h,O as b}from"../chunks/DRdzsAZa.js";import{a as g,t as v}from"../chunks/BkM76rGT.js";import{a as z,b as m,t as B,e as y,i as _,c as O}from"../chunks/CPLO2SW9.js";import{s as p}from"../chunks/Ctfbm0HW.js";var S=v('<div class="flex items-center gap-1.5 rounded-full shrink-0 pl-1.75 pr-2.5 py-1 font-medium text-xs whitespace-nowrap text-gray-900 bg-gray-100"><img class="size-4.5"> </div>');function T(o,a){x(a,!0);const t=z[a.id];var s=S(),e=l(s),i=d(e);r(s),f(()=>{m(e,"src",`logo/${t.id??""}.png`),m(e,"alt",`${t.name??""} logo`),p(i,` ${t.name??""}`)}),g(o,s),h()}var W=v('<a class="flex flex-col items-start p-6 rounded-lg hover:shadow-lg ring-1 ring-black/5"><!> <h2 class="mt-4 font-bold text-xl"> </h2> <div class="mt-3 flex flex-wrap items-center gap-2 -ml-1"></div> <p class="mt-3 text-sm"> </p></a>');function j(o,a){x(a,!0);const t=B[a.id],s=t.icon;var e=W(),i=l(e);s(i,{size:"32",class:"text-gray-800",strokeWidth:"1.5"});var n=d(i,2),$=l(n,!0);r(n);var c=d(n,2);y(c,21,()=>t.solutions,_,(k,I,A,C)=>{T(k,{get id(){return b(I)}})}),r(c);var u=d(c,2),w=l(u,!0);r(u),r(e),f(()=>{m(e,"href",t.id),p($,t.title),p(w,t.description)}),g(o,e),h()}var q=v('<div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"></div>');function K(o){var a=q();y(a,5,()=>O,_,(t,s)=>{j(t,{get id(){return b(s).id}})}),r(a),g(o,a)}export{K as component};
