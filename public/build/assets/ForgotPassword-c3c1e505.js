import{v as p,o as n,d,b as a,u as s,X as _,w as r,a as o,t as l,g as f,n as g,e as b,p as h,F as w}from"./app-79fce0c4.js";import{_ as v}from"./AuthenticationCard-46b70238.js";import{_ as x}from"./AuthenticationCardLogo-5272f840.js";import{_ as V}from"./InputError-fb0193dc.js";import{_ as k}from"./InputLabel-905894e7.js";import{_ as y}from"./PrimaryButton-fb9252e9.js";import{_ as $}from"./TextInput-a5c08f99.js";import"./SwitchLocale-064b80c5.js";import"./index-c5e6f597.js";import"./ApplicationLogo-508747b1.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={class:"flex flex-col mb-4"},S={class:"text-primary font-semibold text-xl"},B={class:"text-slate-400"},C={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},F=["onSubmit"],j={class:"flex items-center justify-end mt-4"},H={__name:"ForgotPassword",props:{status:String},setup(i){const e=p({email:""}),c=()=>{e.post(route("password.email"))};return(t,m)=>(n(),d(w,null,[a(s(_),{title:t.lang().label.forgot_password},null,8,["title"]),a(v,null,{logo:r(()=>[a(x)]),default:r(()=>[o("div",N,[o("h2",S,l(t.lang().label.forgot_password),1),o("small",B,l(t.lang().label.forgot_password_caption),1)]),i.status?(n(),d("div",C,l(i.status),1)):f("",!0),o("form",{onSubmit:h(c,["prevent"])},[o("div",null,[a(k,{for:"email",value:t.lang().label.email},null,8,["value"]),a($,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":m[0]||(m[0]=u=>s(e).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username",placeholder:t.lang().placeholder.email,error:s(e).errors.email},null,8,["modelValue","placeholder","error"]),a(V,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),o("div",j,[a(y,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[b(l(t.lang().button.email_password_reset_link)+" "+l(s(e).processing?"...":""),1)]),_:1},8,["class","disabled"])])],40,F)]),_:1})],64))}};export{H as default};
