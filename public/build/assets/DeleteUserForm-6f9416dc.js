import{r as p,v as g,c as b,w as s,o as v,f as a,t as o,a as u,b as l,u as r,C as h,n as k}from"./app-140420f6.js";import{_ as y}from"./ActionSection-8c3b989c.js";import{_}from"./DangerButton-ea8fd6cb.js";import{_ as C}from"./DialogModal-960de5e0.js";import{_ as V}from"./InputError-ec5e04a0.js";import{_ as $}from"./SecondaryButton-92b0cd9d.js";import{_ as U}from"./TextInput-7ec62e4f.js";import"./SectionTitle-267e7b6e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-82d8797f.js";import"./Modal-b2fb9e2b.js";const D={class:"max-w-xl text-sm text-slate-600 dark:text-slate-400"},B={class:"mt-5"},K={class:"mt-4"},A={__name:"DeleteUserForm",setup(N){const n=p(!1),c=p(null),e=g({password:""}),f=()=>{n.value=!0,setTimeout(()=>c.value.focus(),250)},d=()=>{e.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>c.value.focus(),onFinish:()=>e.reset()})},i=()=>{n.value=!1,e.reset()};return(t,m)=>(v(),b(y,null,{title:s(()=>[a(o(t.lang().label.delete_account),1)]),description:s(()=>[a(o(t.lang().label.delete_account_description),1)]),content:s(()=>[u("div",D,o(t.lang().label.delete_account_content),1),u("div",B,[l(_,{onClick:f},{default:s(()=>[a(o(t.lang().button.delete_account),1)]),_:1})]),l(C,{show:n.value,onClose:i},{title:s(()=>[a(o(t.lang().label.delete_account),1)]),content:s(()=>[a(o(t.lang().label.delete_account_confirm)+" ",1),u("div",K,[l(U,{ref_key:"passwordInput",ref:c,modelValue:r(e).password,"onUpdate:modelValue":m[0]||(m[0]=w=>r(e).password=w),type:"password",class:"mt-1 block w-full",placeholder:"Password",autocomplete:"current-password",onKeyup:h(d,["enter"]),error:r(e).errors.password},null,8,["modelValue","onKeyup","error"]),l(V,{message:r(e).errors.password,class:"mt-2"},null,8,["message"])])]),footer:s(()=>[l($,{onClick:i},{default:s(()=>[a(o(t.lang().button.cancel),1)]),_:1}),l(_,{class:k(["ml-3",{"opacity-25":r(e).processing}]),disabled:r(e).processing,onClick:d},{default:s(()=>[a(o(t.lang().button.delete_account)+" "+o(r(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{A as default};
