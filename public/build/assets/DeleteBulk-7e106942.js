import{r as g,v as h,B as w,d as k,s as C,c as B,w as s,h as D,b as n,A as I,o as f,u as r,f as i,t as e,n as S}from"./app-da72e2c5.js";import{_ as $}from"./ConfirmationModal-c92abf05.js";import{_ as m}from"./DangerButton-05b0ea1e.js";import{_ as y}from"./SecondaryButton-d412c3be.js";import{T as E}from"./index-075021ca.js";import"./Modal-ab842a41.js";const A={__name:"DeleteBulk",props:{title:String,selectedId:Object},emits:["close"],setup(p,{emit:_}){const o=p,a=g(!1),t=h({id:[]});w(()=>{a&&(t.id=o.selectedId)});const v=()=>{t.post(route("role.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{c(),_("close")},onError:()=>null,onFinish:()=>null})},c=()=>{a.value=!1};return(l,u)=>{const b=I("tooltip");return f(),k("div",null,[C((f(),B(m,{class:"rounded-none",onClick:u[0]||(u[0]=D(d=>a.value=!0,["prevent"]))},{default:s(()=>[n(r(E),{class:"w-4 h-auto"})]),_:1})),[[b,l.lang().label.delete_selected]]),n($,{show:a.value,onClose:c},{title:s(()=>[i(e(l.lang().label.delete_selected)+" "+e(o.title),1)]),content:s(()=>{var d;return[i(e(l.lang().label.delete_confirm)+" "+e((d=o.selectedId)==null?void 0:d.length)+" "+e(o.title)+"? ",1)]}),footer:s(()=>[n(y,{onClick:c},{default:s(()=>[i(e(l.lang().button.cancel),1)]),_:1}),n(m,{class:S(["ml-3",{"opacity-25":r(t).processing}]),disabled:r(t).processing,onClick:v},{default:s(()=>[i(e(l.lang().button.delete)+" "+e(r(t).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{A as default};
