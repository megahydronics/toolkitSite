import{a as n,m as i,d as s,f as r}from"./l5udqaTR.js";const d=t=>{const e=t.toString();if(e.length!==10)throw new Error("Input must be a 10-digit number");return`${e.slice(0,3)}-${e.slice(3,6)}-${e.slice(6)}`},l=t=>t?t.trim().split(/\s+/).map(a=>a[0].toUpperCase()).join(""):"",m=t=>{const e=new Date(t),a=n.clock.now.getTime()-e.getTime(),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return a<3*i?"just now":a<s&&n.clock.now.getDate()===e.getDate()?`${r(t)}`:a<s?`yesterday at ${r(t)}`:a<5*s?`${o[e.getDay()]} at ${r(t)}`:`${e.toLocaleDateString()} at ${r(t)}`};export{l as c,d as f,m as h};
