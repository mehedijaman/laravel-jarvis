import{r as p,v as g,c as b,w as s,o as v,f as a,t as o,a as u,b as r,u as l,z as h,n as k}from"./app-da72e2c5.js";import{_ as y}from"./ActionSection-d22049ab.js";import{_}from"./DangerButton-05b0ea1e.js";import{_ as C}from"./DialogModal-a9296744.js";import{_ as V,a as $}from"./TextInput-d3c8e09a.js";import{_ as U}from"./SecondaryButton-d412c3be.js";import"./SectionTitle-75774476.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-075021ca.js";import"./Modal-ab842a41.js";const D={class:"max-w-xl text-sm text-slate-600 dark:text-slate-400"},B={class:"mt-5"},K={class:"mt-4"},q={__name:"DeleteUserForm",setup(N){const n=p(!1),c=p(null),e=g({password:""}),f=()=>{n.value=!0,setTimeout(()=>c.value.focus(),250)},d=()=>{e.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>c.value.focus(),onFinish:()=>e.reset()})},i=()=>{n.value=!1,e.reset()};return(t,m)=>(v(),b(y,null,{title:s(()=>[a(o(t.lang().label.delete_account),1)]),description:s(()=>[a(o(t.lang().label.delete_account_description),1)]),content:s(()=>[u("div",D,o(t.lang().label.delete_account_content),1),u("div",B,[r(_,{onClick:f},{default:s(()=>[a(o(t.lang().button.delete_account),1)]),_:1})]),r(C,{show:n.value,onClose:i},{title:s(()=>[a(o(t.lang().label.delete_account),1)]),content:s(()=>[a(o(t.lang().label.delete_account_confirm)+" ",1),u("div",K,[r(V,{ref_key:"passwordInput",ref:c,modelValue:l(e).password,"onUpdate:modelValue":m[0]||(m[0]=w=>l(e).password=w),type:"password",class:"mt-1 block w-full",placeholder:"Password",autocomplete:"current-password",onKeyup:h(d,["enter"]),error:l(e).errors.password},null,8,["modelValue","onKeyup","error"]),r($,{message:l(e).errors.password,class:"mt-2"},null,8,["message"])])]),footer:s(()=>[r(U,{onClick:i},{default:s(()=>[a(o(t.lang().button.cancel),1)]),_:1}),r(_,{class:k(["ml-3",{"opacity-25":l(e).processing}]),disabled:l(e).processing,onClick:d},{default:s(()=>[a(o(t.lang().button.delete_account)+" "+o(l(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{q as default};
