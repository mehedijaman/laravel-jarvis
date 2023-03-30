import{r as f,v as g,c as v,w as l,o as b,f as d,t as p,a as t,b as o,u as r,n as V}from"./app-da72e2c5.js";import{_ as h}from"./ActionMessage-d877edbd.js";import{_ as y}from"./FormSection-a2c49dae.js";import{_ as u,a as c}from"./TextInput-d3c8e09a.js";import{_ as m}from"./InputLabel-17c69ed5.js";import{_ as k}from"./PrimaryButton-d514179f.js";import"./SectionTitle-75774476.js";import"./_plugin-vue_export-helper-c27b6911.js";const $={class:"col-span-6 sm:col-span-4"},P={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},T={__name:"UpdatePasswordForm",setup(B){const i=f(null),w=f(null),s=g({current_password:"",password:"",password_confirmation:""}),_=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),i.value.focus()),s.errors.current_password&&(s.reset("current_password"),w.value.focus())}})};return(a,e)=>(b(),v(y,{onSubmitted:_},{title:l(()=>[d(p(a.lang().label.update_password),1)]),description:l(()=>[d(p(a.lang().label.update_password_description),1)]),form:l(()=>[t("div",$,[o(m,{for:"current_password",value:a.lang().label.current_password},null,8,["value"]),o(u,{id:"current_password",ref_key:"currentPasswordInput",ref:w,modelValue:r(s).current_password,"onUpdate:modelValue":e[0]||(e[0]=n=>r(s).current_password=n),type:"password",class:"mt-1 block w-full",autocomplete:"current-password",placeholder:a.lang().placeholder.password,error:r(s).errors.current_password},null,8,["modelValue","placeholder","error"]),o(c,{message:r(s).errors.current_password,class:"mt-2"},null,8,["message"])]),t("div",P,[o(m,{for:"password",value:a.lang().label.new_password},null,8,["value"]),o(u,{id:"password",ref_key:"passwordInput",ref:i,modelValue:r(s).password,"onUpdate:modelValue":e[1]||(e[1]=n=>r(s).password=n),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:a.lang().placeholder.password,error:r(s).errors.password},null,8,["modelValue","placeholder","error"]),o(c,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])]),t("div",S,[o(m,{for:"password_confirmation",value:a.lang().label.new_password},null,8,["value"]),o(u,{id:"password_confirmation",modelValue:r(s).password_confirmation,"onUpdate:modelValue":e[2]||(e[2]=n=>r(s).password_confirmation=n),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:a.lang().placeholder.password,error:r(s).errors.password_confirmation},null,8,["modelValue","placeholder","error"]),o(c,{message:r(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:l(()=>[o(h,{on:r(s).recentlySuccessful,class:"mr-3"},{default:l(()=>[d(p(a.lang().label.saved),1)]),_:1},8,["on"]),o(k,{class:V({"opacity-25":r(s).processing}),disabled:r(s).processing},{default:l(()=>[d(p(a.lang().button.save)+" "+p(r(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1}))}};export{T as default};
