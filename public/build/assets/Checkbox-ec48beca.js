import{k as d,s as l,y as u,u as n,o as k,d as p,I as i}from"./app-da72e2c5.js";const m=["value"],h={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(r,{emit:s}){const o=r,e=d({get(){return o.checked},set(a){s("update:checked",a)}});return(a,t)=>l((k(),p("input",{type:"checkbox",value:r.value,"onUpdate:modelValue":t[0]||(t[0]=c=>i(e)?e.value=c:null),class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary"},null,8,m)),[[u,n(e)]])}};export{h as _};
