import{r as b,T as w,l as h,o as d,d as k,j as C,c as $,w as t,b as l,u as a,m as D,e as r,t as o,n as S}from"./app-4aad6063.js";import{_ as y}from"./ConfirmationModal-8bd1e1f7.js";import{_ as B}from"./ActionButton-cbf46b04.js";import{_ as j}from"./DangerButton-f09c0e22.js";import{_ as E}from"./SecondaryButton-66f1fe03.js";import{r as M}from"./TrashIcon-ba825236.js";import"./Modal-246df657.js";const A={__name:"Delete",props:{title:String,role:Object},emits:["open"],setup(f,{emit:u}){const _=u,n=b(!1),i=f,s=w({}),v=()=>{var e;s.delete(route("role.destroy",(e=i.role)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>null,onFinish:()=>null})},c=()=>{n.value=!1};return(e,p)=>{const g=h("tooltip");return d(),k("div",null,[C((d(),$(B,{variant:"danger",onClick:p[0]||(p[0]=D(m=>(n.value=!0,_("open")),["prevent"]))},{default:t(()=>[l(a(M),{class:"w-4 h-auto"})]),_:1})),[[g,e.lang().label.delete]]),l(y,{show:n.value,onClose:c},{title:t(()=>[r(o(e.lang().label.delete)+" "+o(i.title),1)]),content:t(()=>{var m;return[r(o(e.lang().label.delete_confirm)+" "+o((m=i.role)==null?void 0:m.name)+"? ",1)]}),footer:t(()=>[l(E,{onClick:c},{default:t(()=>[r(o(e.lang().button.cancel),1)]),_:1}),l(j,{class:S(["ml-3",{"opacity-25":a(s).processing}]),disabled:a(s).processing,onClick:v},{default:t(()=>[r(o(e.lang().button.delete)+" "+o(a(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{A as default};
