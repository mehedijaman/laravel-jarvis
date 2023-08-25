import{r as $,v as S,B as C,m as U,o as y,d as B,j,c as D,w as i,b as a,u as l,p as V,e as g,t as d,a as m,C as w,n as E}from"./app-9cb26ff6.js";import{_ as N}from"./DialogModal-9a2b4a3d.js";import{_ as p}from"./InputError-71f77be1.js";import{_ as u}from"./InputLabel-ef1a5601.js";import{_ as M}from"./ActionButton-0ff23640.js";import{_ as O}from"./PrimaryButton-0fb1f193.js";import{_ as z}from"./SecondaryButton-4d541c38.js";import{_}from"./TextInput-f97bd710.js";import{_ as F}from"./SelectInput-188689a8.js";import{a as I}from"./index-afa3307c.js";import"./Modal-d953ae84.js";const P=["onSubmit"],T={class:"space-y-1"},q={class:"space-y-1"},A={class:"space-y-1"},G={class:"space-y-1"},H={class:"space-y-1"},oe={__name:"Edit",props:{title:String,roles:Object,user:Object},emits:["open"],setup(h,{emit:k}){var b;const n=h,c=$(!1),e=S({name:"",email:"",password:"",password_confirmation:"",role:""});C(()=>{var o,s,f,r;c&&(e.name=(o=n.user)==null?void 0:o.name,e.email=(s=n.user)==null?void 0:s.email,e.role=((f=n.user)==null?void 0:f.roles)==0?"":(r=n.user)==null?void 0:r.roles[0].name)});const t=()=>{var o;e.put(route("user.update",(o=n.user)==null?void 0:o.id),{preserveScroll:!0,onSuccess:()=>v(),onError:()=>null,onFinish:()=>null})},v=()=>{c.value=!1,e.errors={},e.reset()},K=(b=n.roles)==null?void 0:b.map(o=>({label:o.name,value:o.name}));return(o,s)=>{const f=U("tooltip");return y(),B("div",null,[j((y(),D(M,{onClick:s[0]||(s[0]=V(r=>(c.value=!0,k("open")),["prevent"]))},{default:i(()=>[a(l(I),{class:"w-4 h-auto"})]),_:1})),[[f,o.lang().label.edit]]),a(N,{show:c.value,onClose:v},{title:i(()=>[g(d(o.lang().label.edit)+" "+d(n.title),1)]),content:i(()=>[m("form",{class:"space-y-2",onSubmit:V(t,["prevent"])},[m("div",T,[a(u,{for:"name",value:o.lang().label.name},null,8,["value"]),a(_,{id:"name",modelValue:l(e).name,"onUpdate:modelValue":s[1]||(s[1]=r=>l(e).name=r),type:"text",class:"block w-full",autocomplete:"name",placeholder:o.lang().placeholder.name,error:l(e).errors.name,onKeyup:w(t,["enter"])},null,8,["modelValue","placeholder","error","onKeyup"]),a(p,{message:l(e).errors.name},null,8,["message"])]),m("div",q,[a(u,{for:"email",value:o.lang().label.email},null,8,["value"]),a(_,{id:"email",modelValue:l(e).email,"onUpdate:modelValue":s[2]||(s[2]=r=>l(e).email=r),type:"email",class:"block w-full",placeholder:o.lang().placeholder.email,error:l(e).errors.email,onKeyup:w(t,["enter"])},null,8,["modelValue","placeholder","error","onKeyup"]),a(p,{message:l(e).errors.email},null,8,["message"])]),m("div",A,[a(u,{for:"password",value:o.lang().label.password},null,8,["value"]),a(_,{id:"password",modelValue:l(e).password,"onUpdate:modelValue":s[3]||(s[3]=r=>l(e).password=r),type:"password",class:"block w-full",placeholder:o.lang().placeholder.password,error:l(e).errors.password,onKeyup:w(t,["enter"])},null,8,["modelValue","placeholder","error","onKeyup"]),a(p,{message:l(e).errors.password},null,8,["message"])]),m("div",G,[a(u,{for:"password_confirmation",value:o.lang().label.password_confirmation},null,8,["value"]),a(_,{id:"password_confirmation",modelValue:l(e).password_confirmation,"onUpdate:modelValue":s[4]||(s[4]=r=>l(e).password_confirmation=r),type:"password",class:"block w-full",placeholder:o.lang().placeholder.password,error:l(e).errors.password_confirmation,onKeyup:w(t,["enter"])},null,8,["modelValue","placeholder","error","onKeyup"]),a(p,{message:l(e).errors.password_confirmation},null,8,["message"])]),m("div",H,[a(u,{for:"role",value:o.lang().label.role},null,8,["value"]),a(F,{id:"role",modelValue:l(e).role,"onUpdate:modelValue":s[5]||(s[5]=r=>l(e).role=r),dataSet:l(K),class:"block w-full",error:l(e).errors.role},null,8,["modelValue","dataSet","error"]),a(p,{message:l(e).errors.role},null,8,["message"])])],40,P)]),footer:i(()=>[a(z,{onClick:v},{default:i(()=>[g(d(o.lang().button.cancel),1)]),_:1}),a(O,{class:E(["ml-3",{"opacity-25":l(e).processing}]),disabled:l(e).processing,onClick:t},{default:i(()=>[g(d(o.lang().button.save)+" "+d(l(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{oe as default};
