import{r as g,T as h,l as w,o as d,d as k,j as C,c as $,w as o,b as l,u as n,m as B,e as t,t as s,a as D,n as S}from"./app-1a6d31c9.js";import{_ as y}from"./ConfirmationModal-bdcdf5f8.js";import{_ as N}from"./ActionButton-ffee6b27.js";import{_ as V}from"./DangerButton-eea13b67.js";import{_ as j}from"./SecondaryButton-516045e7.js";import{r as E}from"./TrashIcon-249ef2fa.js";import"./Modal-71b0900b.js";const M={class:"font-black"},H={__name:"Delete",props:{title:String,permission:Object},emits:["open"],setup(f,{emit:u}){const _=u,r=g(!1),i=f,a=h({}),v=()=>{var e;a.delete(route("permission.destroy",(e=i.permission)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>null,onFinish:()=>null})},c=()=>{r.value=!1};return(e,p)=>{const b=w("tooltip");return d(),k("div",null,[C((d(),$(N,{variant:"danger",onClick:p[0]||(p[0]=B(m=>(r.value=!0,_("open")),["prevent"]))},{default:o(()=>[l(n(E),{class:"w-4 h-auto"})]),_:1})),[[b,e.lang().label.delete]]),l(y,{show:r.value,onClose:c},{title:o(()=>[t(s(e.lang().label.delete)+" "+s(i.title),1)]),content:o(()=>{var m;return[t(s(e.lang().label.delete_confirm)+" ",1),D("span",M,s((m=i.permission)==null?void 0:m.name),1),t("? ")]}),footer:o(()=>[l(j,{onClick:c},{default:o(()=>[t(s(e.lang().button.cancel),1)]),_:1}),l(V,{class:S(["ml-3",{"opacity-25":n(a).processing}]),disabled:n(a).processing,onClick:v},{default:o(()=>[t(s(e.lang().button.delete)+" "+s(n(a).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{H as default};
