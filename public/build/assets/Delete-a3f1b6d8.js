import{r as b,T as w,l as h,o as d,d as y,j as k,c as C,w as o,b as a,u as i,m as $,e as l,t,n as D}from"./app-1a6d31c9.js";import{_ as S}from"./ConfirmationModal-bdcdf5f8.js";import{_ as B}from"./ActionButton-ffee6b27.js";import{_ as j}from"./DangerButton-eea13b67.js";import{_ as E}from"./SecondaryButton-516045e7.js";import{r as M}from"./TrashIcon-249ef2fa.js";import"./Modal-71b0900b.js";const A={__name:"Delete",props:{title:String,activity:Object},emits:["open"],setup(f,{emit:u}){const _=u,r=b(!1),n=f,s=w({}),v=()=>{var e;s.delete(route("activity.destroy",(e=n.activity)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>null,onFinish:()=>null})},c=()=>{r.value=!1};return(e,p)=>{const g=h("tooltip");return d(),y("div",null,[k((d(),C(B,{variant:"danger",onClick:p[0]||(p[0]=$(m=>(r.value=!0,_("open")),["prevent"]))},{default:o(()=>[a(i(M),{class:"w-4 h-auto"})]),_:1})),[[g,e.lang().label.delete]]),a(S,{show:r.value,onClose:c},{title:o(()=>[l(t(e.lang().label.delete)+" "+t(n.title),1)]),content:o(()=>{var m;return[l(t(e.lang().label.delete_confirm)+" "+t((m=n.activity)==null?void 0:m.description)+"? ",1)]}),footer:o(()=>[a(E,{onClick:c},{default:o(()=>[l(t(e.lang().button.cancel),1)]),_:1}),a(j,{class:D(["ml-3",{"opacity-25":i(s).processing}]),disabled:i(s).processing,onClick:v},{default:o(()=>[l(t(e.lang().button.delete)+" "+t(i(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{A as default};
