import{r as V,v as x,p as j,d as _,b as s,w as n,h as v,o as h,u as l,f as d,a as t,t as i,z as B,F as E,g as F,n as K,s as M,y as N}from"./app-da72e2c5.js";import{_ as U}from"./Checkbox-ec48beca.js";import{_ as z}from"./DialogModal-a9296744.js";import{_ as D,a as b}from"./TextInput-d3c8e09a.js";import{_ as u}from"./InputLabel-17c69ed5.js";import{_ as k}from"./PrimaryButton-d514179f.js";import{_ as P}from"./SecondaryButton-d412c3be.js";import{P as A}from"./index-075021ca.js";import"./Modal-ab842a41.js";const I={class:"hidden md:block"},L=["onSubmit"],O={class:"space-y-1"},T={class:"flex justify-start items-center space-x-2 mt-2"},q={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2"},G=["id","value"],se={__name:"Create",props:{title:String,permissions:Object},setup(y){const c=y,p=V(!1),e=x({name:"",guard_name:"web",permissions:[]}),m=j({multipleSelect:!1}),f=()=>{e.post(route("role.store"),{preserveScroll:!0,onSuccess:()=>g(),onError:()=>null,onFinish:()=>null})},g=()=>{p.value=!1,e.errors={},e.reset(),m.multipleSelect=!1},w=a=>{a.target.checked===!1?e.permissions=[]:(e.permissions=[],c.permissions.forEach(r=>{e.permissions.push(r.id)}))},S=()=>{c.permissions.length==e.permissions.length?m.multipleSelect=!0:m.multipleSelect=!1};return(a,r)=>(h(),_("div",null,[s(k,{class:"flex rounded-none items-center justify-start gap-2",onClick:r[0]||(r[0]=v(o=>p.value=!0,["prevent"]))},{default:n(()=>[s(l(A),{class:"w-4 h-auto"}),d(),t("span",I,i(a.lang().label.add),1)]),_:1}),s(z,{show:p.value,onClose:g},{title:n(()=>[d(i(a.lang().label.add)+" "+i(c.title),1)]),content:n(()=>[t("form",{class:"space-y-2",onSubmit:v(f,["prevent"])},[t("div",O,[s(u,{for:"name",value:a.lang().label.name},null,8,["value"]),s(D,{id:"name",modelValue:l(e).name,"onUpdate:modelValue":r[1]||(r[1]=o=>l(e).name=o),type:"text",class:"block w-full",autocomplete:"name",placeholder:a.lang().placeholder.role_name,error:l(e).errors.name,onKeyup:B(f,["enter"])},null,8,["modelValue","placeholder","error","onKeyup"]),s(b,{message:l(e).errors.name},null,8,["message"])]),t("div",null,[s(u,{value:a.lang().label.permissions},null,8,["value"]),s(b,{class:"mt-2",message:l(e).errors.permissions},null,8,["message"]),t("div",T,[s(U,{id:"permission-all",checked:m.multipleSelect,"onUpdate:checked":r[2]||(r[2]=o=>m.multipleSelect=o),onChange:w},null,8,["checked"]),s(u,{for:"permission-all",value:a.lang().label.check_all},null,8,["value"])]),t("div",q,[(h(!0),_(E,null,F(c.permissions,(o,C)=>(h(),_("div",{class:"flex items-center justify-start space-x-2",key:C},[M(t("input",{onChange:S,class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",id:"permission_"+o.id,value:o.id,"onUpdate:modelValue":r[3]||(r[3]=$=>l(e).permissions=$)},null,40,G),[[N,l(e).permissions]]),s(u,{for:"permission_"+o.id,value:o.name},null,8,["for","value"])]))),128))])])],40,L)]),footer:n(()=>[s(P,{onClick:g},{default:n(()=>[d(i(a.lang().button.cancel),1)]),_:1}),s(k,{class:K(["ml-3",{"opacity-25":l(e).processing}]),disabled:l(e).processing,onClick:f},{default:n(()=>[d(i(a.lang().button.save)+" "+i(l(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{se as default};
