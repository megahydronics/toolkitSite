import{m as i,d as n,f as a}from"./DxRnBbZr.js";const c=e=>{const t=e.toString();if(t.length!==10)throw new Error("Input must be a 10-digit number");return`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`},m=e=>e?e.trim().split(/\s+/).map(s=>s[0].toUpperCase()).join(""):"",u=e=>{const t=new Date(e),s=new Date,r=s.getTime()-t.getTime(),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return r<3*i?"just now":r<n&&s.getDate()===t.getDate()?`${a(e)}`:r<n?`yesterday at ${a(e)}`:r<5*n?`${o[t.getDay()]} at ${a(e)}`:`${t.toLocaleDateString()} at ${a(e)}`};export{m as c,c as f,u as h};
