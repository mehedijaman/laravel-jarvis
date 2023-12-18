import{v as d,r as c,o as f,d as u,b as a,u as o,X as _,w as t,a as e,t as l,n as w,e as b,p as g,F as h}from"./app-79fce0c4.js";import{_ as v}from"./AuthenticationCard-46b70238.js";import{_ as x}from"./AuthenticationCardLogo-5272f840.js";import{_ as y}from"./InputError-fb0193dc.js";import{_ as V}from"./InputLabel-905894e7.js";import{_ as $}from"./PrimaryButton-fb9252e9.js";import{_ as k}from"./TextInput-a5c08f99.js";import"./SwitchLocale-064b80c5.js";import"./index-c5e6f597.js";import"./ApplicationLogo-508747b1.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={class:"flex flex-col mb-4"},C={class:"text-primary font-semibold text-xl"},F={class:"text-slate-400"},N=["onSubmit"],S={class:"flex justify-end mt-4"},G={__name:"ConfirmPassword",setup(I){const s=d({password:""}),n=c(null),m=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),n.value.focus()}})};return(r,i)=>(f(),u(h,null,[a(o(_),{title:"lang().label.secure_area"}),a(v,null,{logo:t(()=>[a(x)]),default:t(()=>[e("div",B,[e("h2",C,l(r.lang().label.confirm_password),1),e("small",F,l(r.lang().label.confirm_password_caption),1)]),e("form",{onSubmit:g(m,["prevent"])},[e("div",null,[a(V,{for:"password",value:r.lang().label.password},null,8,["value"]),a(k,{id:"password",ref_key:"passwordInput",ref:n,modelValue:o(s).password,"onUpdate:modelValue":i[0]||(i[0]=p=>o(s).password=p),type:"password",class:"mt-1 block w-full",required:"",placeholder:r.lang().placeholder.password,error:o(s).errors.password,autocomplete:"current-password",autofocus:""},null,8,["modelValue","placeholder","error"]),a(y,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",S,[a($,{class:w(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[b(l(r.lang().button.confirm)+" "+l(o(s).processing?"...":""),1)]),_:1},8,["class","disabled"])])],40,N)]),_:1})],64))}};export{G as default};
