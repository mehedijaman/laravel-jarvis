import{v as p,r as c,d as f,b as a,u as o,w as t,F as u,o as _,X as w,a as e,t as l,n as b,f as g,h}from"./app-da72e2c5.js";import{_ as v}from"./AuthenticationCard-d9e7b0f2.js";import{_ as x}from"./AuthenticationCardLogo-99bdb633.js";import{_ as y,a as V}from"./TextInput-d3c8e09a.js";import{_ as $}from"./InputLabel-17c69ed5.js";import{_ as k}from"./PrimaryButton-d514179f.js";import"./SwitchLocale-5c87b8c4.js";import"./index-075021ca.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationLogo-be8e7620.js";const B={class:"flex flex-col mb-4"},C={class:"text-primary font-semibold text-xl"},F={class:"text-slate-400"},N=["onSubmit"],S={class:"flex justify-end mt-4"},A={__name:"ConfirmPassword",setup(I){const s=p({password:""}),n=c(null),m=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),n.value.focus()}})};return(r,i)=>(_(),f(u,null,[a(o(w),{title:"lang().label.secure_area"}),a(v,null,{logo:t(()=>[a(x)]),default:t(()=>[e("div",B,[e("h2",C,l(r.lang().label.confirm_password),1),e("small",F,l(r.lang().label.confirm_password_caption),1)]),e("form",{onSubmit:h(m,["prevent"])},[e("div",null,[a($,{for:"password",value:r.lang().label.password},null,8,["value"]),a(y,{id:"password",ref_key:"passwordInput",ref:n,modelValue:o(s).password,"onUpdate:modelValue":i[0]||(i[0]=d=>o(s).password=d),type:"password",class:"mt-1 block w-full",required:"",placeholder:r.lang().placeholder.password,error:o(s).errors.password,autocomplete:"current-password",autofocus:""},null,8,["modelValue","placeholder","error"]),a(V,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",S,[a(k,{class:b(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[g(l(r.lang().button.confirm)+" "+l(o(s).processing?"...":""),1)]),_:1},8,["class","disabled"])])],40,N)]),_:1})],64))}};export{A as default};
