import{r as u,E as l,o as d,d as n,n as i}from"./app-140420f6.js";const c=["value"],p={__name:"TextInput",props:{modelValue:String,error:{type:String,default:null}},emits:["update:modelValue"],setup(r,{expose:o}){const e=u(null);return l(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),o({focus:()=>e.value.focus()}),(t,a)=>(d(),n("input",{ref_key:"input",ref:e,class:i([r.error?"border-rose-500 dark:border-rose-400 dark:bg-slate-900 dark:text-slate-300 focus:border-rose-500 dark:focus:border-rose-400 focus:ring-rose-500 dark:focus:ring-rose-400 ":"border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 focus:border-primary dark:focus:border-primary focus:ring-primary dark:focus:ring-primary ","rounded shadow-sm placeholder:text-slate-300 dark:placeholder:text-slate-700"]),value:r.modelValue,onInput:a[0]||(a[0]=s=>t.$emit("update:modelValue",s.target.value))},null,42,c))}};export{p as _};
