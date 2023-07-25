import{p as C,q as O,O as V,c as j,w as i,o as p,a as e,t as n,b as o,s as d,x as c,u as f,d as m,g as B,F as P,y as U}from"./app-6c9f8333.js";import{_ as D}from"./AppLayout-d350bb28.js";import{p as N,_ as A,T as E}from"./TablePagination-254ac1ec.js";import{_ as F}from"./Breadcrumb-d11a2697.js";import{_ as T}from"./SelectInput-f82997f8.js";import{_ as q}from"./TextInput-c86fbb98.js";import L from"./Create-4c976650.js";import M from"./Edit-1ab520ee.js";import z from"./Delete-ec3cdca9.js";import G from"./Permission-da735d21.js";import{C as _}from"./index-d7f3806b.js";import{_ as H}from"./Checkbox-9f3e8d36.js";import J from"./DeleteBulk-13cc8bab.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SwitchLocale-641d16f9.js";import"./ApplicationLogo-ea6a98e1.js";import"./DialogModal-f66e7994.js";import"./Modal-fa81fe98.js";import"./InputLabel-e2554143.js";import"./PrimaryButton-1b2410a3.js";import"./SecondaryButton-e1ae459a.js";import"./ActionButton-ed327aae.js";import"./ConfirmationModal-eee26e20.js";import"./DangerButton-2df92394.js";const K={class:"py-6"},Q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},R={class:"bg-white dark:bg-slate-800 overflow-hidden shadow-md sm:rounded"},W={class:"flex shrink-0 rounded overflow-hidden"},X={class:"flex justify-end items-center gap-2"},Y={class:"flex space-x-2"},Z={class:"px-2 py-4 text-center"},ee=e("th",{class:"px-2 py-4 text-center"},"#",-1),se={class:"flex justify-between items-center"},te={class:"flex justify-between items-center"},le={class:"px-2 py-4 text-left"},ae={class:"flex justify-between items-center"},re=e("th",{class:"px-2 py-4 text-center sr-only"}," Action ",-1),oe={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ne=["value"],ie={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},pe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},de={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ce={class:"whitespace-nowrap py-4 px-2 sm:py-3"},me={key:0},ue={key:1},he={class:"whitespace-nowrap py-4 px-2 sm:py-3"},fe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},_e={class:"flex w-fit rounded overflow-hidden"},Le={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(y){const r=y,{_:x,debounce:v,pickBy:$}=N,s=C({params:{search:r.filters.search,field:r.filters.field,order:r.filters.order,perPage:r.perPage},selectedId:[],multipleSelect:!1,user:null}),u=l=>{s.params.field=l,s.params.order=s.params.order==="asc"?"desc":"asc"};O(()=>x.cloneDeep(s.params),v(()=>{let l=$(s.params);V.get(route("user.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const I=l=>{var a;l.target.checked===!1?s.selectedId=[]:(a=r.users)==null||a.data.forEach(t=>{s.selectedId.push(t.id)})},S=()=>{var l;((l=r.users)==null?void 0:l.data.length)==s.selectedId.length?s.multipleSelect=!0:s.multipleSelect=!1};return(l,a)=>(p(),j(D,{title:r.title},{title:i(()=>[e("span",null,n(r.title),1)]),breadcrumb:i(()=>[o(F)]),default:i(()=>[e("div",K,[e("div",Q,[e("div",R,[o(E,null,{"table-action":i(()=>[e("div",W,[d(o(L,{title:r.title,roles:r.roles},null,8,["title","roles"]),[[c,l.can(["user create"])]]),d(o(J,{selectedId:s.selectedId,title:r.title,onClose:a[0]||(a[0]=t=>(s.selectedId=[],s.multipleSelect=!1))},null,8,["selectedId","title"]),[[c,s.selectedId.length!=0&&l.can(["user delete"])]])]),e("div",X,[e("div",Y,[o(T,{class:"h-9 text-sm",modelValue:s.params.perPage,"onUpdate:modelValue":a[1]||(a[1]=t=>s.params.perPage=t),dataSet:l.$page.props.app.perpage},null,8,["modelValue","dataSet"])]),o(q,{modelValue:s.params.search,"onUpdate:modelValue":a[2]||(a[2]=t=>s.params.search=t),type:"search",class:"block h-9",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])])]),"table-head":i(()=>[e("tr",null,[e("th",Z,[o(H,{checked:s.multipleSelect,"onUpdate:checked":a[3]||(a[3]=t=>s.multipleSelect=t),onChange:I},null,8,["checked"])]),ee,e("th",{class:"px-2 py-4 cursor-pointer",onClick:a[4]||(a[4]=t=>u("name"))},[e("div",se,[e("span",null,n(l.lang().label.name),1),o(f(_),{class:"w-4 h-4"})])]),e("th",{class:"px-2 py-4 cursor-pointer",onClick:a[5]||(a[5]=t=>u("email"))},[e("div",te,[e("span",null,n(l.lang().label.email),1),o(f(_),{class:"w-4 h-4"})])]),e("th",le,n(l.lang().label.role),1),e("th",{class:"px-2 py-4 cursor-pointer",onClick:a[6]||(a[6]=t=>u("created_at"))},[e("div",ae,[e("span",null,n(l.lang().label.created),1),o(f(_),{class:"w-4 h-4"})])]),re])]),"table-body":i(()=>[(p(!0),m(P,null,B(y.users.data,(t,b)=>{var g,w,k;return p(),m("tr",{key:b,class:"border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20"},[e("td",oe,[d(e("input",{class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:S,value:t.id,"onUpdate:modelValue":a[7]||(a[7]=h=>s.selectedId=h)},null,40,ne),[[U,s.selectedId]])]),e("td",ie,n(++b),1),e("td",pe,n(t.name),1),e("td",de,n(t.email),1),e("td",ce,[(g=t.roles[0])!=null&&g.name?(p(),m("p",me,[o(G,{permissions:(w=t.roles[0])==null?void 0:w.permissions,title:(k=t.roles[0])==null?void 0:k.name},null,8,["permissions","title"])])):(p(),m("p",ue,n(l.lang().label.not_selected),1))]),e("td",he,n(t.created_at),1),e("td",fe,[e("div",_e,[d(o(M,{title:r.title,user:s.user,onOpen:h=>s.user=t,roles:r.roles},null,8,["title","user","onOpen","roles"]),[[c,l.can(["user update"])]]),d(o(z,{title:r.title,user:s.user,onOpen:h=>s.user=t,roles:r.roles},null,8,["title","user","onOpen","roles"]),[[c,l.can(["user delete"])]])])])])}),128))]),"table-pagination":i(()=>[o(A,{links:r.users,filters:s.params},null,8,["links","filters"])]),_:1})])])])]),_:1},8,["title"]))}};export{Le as default};
