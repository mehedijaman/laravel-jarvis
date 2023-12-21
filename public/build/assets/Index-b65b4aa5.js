import{h as V,i as O,O as B,m as D,o as c,c as x,w as d,a as e,t as i,b as o,j as n,k as p,u as m,d as u,f as P,l as U,D as N,g as A,F as E}from"./app-748b2137.js";import{C as F,_ as T}from"./AppLayout-c884fbe6.js";import{_ as z,T as L,p as M}from"./TablePagination-c02f0844.js";import{_ as q}from"./Breadcrumb-23011e66.js";import{_ as G}from"./SelectInput-0991ec75.js";import{_ as H}from"./TextInput-e7617f40.js";import J from"./Create-ee2d0acd.js";import K from"./Edit-58539c41.js";import Q from"./Delete-cbd636cf.js";import R from"./DeleteBulk-dc3714d8.js";import W from"./Permission-e19dd05b.js";import{C as b}from"./index-bb6df94d.js";import{_ as X}from"./Checkbox-18750094.js";import"./Toast-4bcc22a4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SwitchLocale-7387de9a.js";import"./ApplicationLogo-4112a66e.js";import"./DialogModal-e3283a51.js";import"./Modal-5a8e7de4.js";import"./InputError-7d2e0a70.js";import"./InputLabel-66e40b0d.js";import"./PrimaryButton-c742a781.js";import"./SecondaryButton-2d29c420.js";import"./ActionButton-6169d80e.js";import"./ConfirmationModal-bd3927a5.js";import"./DangerButton-da502ee8.js";const Y={class:"py-6"},Z={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},ee={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},te={class:"flex shrink-0 rounded overflow-hidden"},se={class:"flex justify-end items-center gap-2"},le={class:"flex space-x-2"},ae={class:"p-4 text-left"},re=e("th",{class:"p-4 text-center"},"#",-1),oe={class:"flex justify-between items-center"},ie={class:"flex justify-between items-center"},ne={class:"p-4 text-left"},de={class:"flex justify-between items-center"},ce=e("th",{class:"p-4 text-center sr-only"},"Action",-1),pe={class:"whitespace-nowrap px-4 py-2"},me=["value"],ue={class:"whitespace-nowrap px-4 py-2 text-center"},he={class:"whitespace-nowrap px-4 py-2"},_e={class:"flex items-center"},fe={class:"mt-2 shrink-0"},be=["src","alt"],ge={class:"mt-2 shrink-0"},ke={class:"truncate ml-3"},ve={class:"whitespace-nowrap truncate px-4 py-2"},we={class:"whitespace-nowrap px-4 py-2"},ye={key:0},xe={key:1},$e={class:"whitespace-nowrap px-4 py-2"},Ie={class:"whitespace-nowrap flex justify-end px-4 py-2"},Se={class:"flex w-fit rounded overflow-hidden"},Ze={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(g){const r=g,{_:$,debounce:I,pickBy:S}=M,t=V({params:{search:r.filters.search,field:r.filters.field,order:r.filters.order,perPage:r.perPage},selectedId:[],multipleSelect:!1,user:null}),h=l=>{t.params.field=l,t.params.order=t.params.order==="asc"?"desc":"asc"};O(()=>$.cloneDeep(t.params),I(()=>{let l=S(t.params);B.get(route("user.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=l=>{var a;l.target.checked===!1?t.selectedId=[]:(a=r.users)==null||a.data.forEach(_=>{t.selectedId.push(_.id)})},j=()=>{var l;((l=r.users)==null?void 0:l.data.length)==t.selectedId.length?t.multipleSelect=!0:t.multipleSelect=!1};return(l,a)=>{const _=D("tooltip");return c(),x(T,{title:r.title},{title:d(()=>[e("span",null,i(r.title),1)]),breadcrumb:d(()=>[o(q)]),default:d(()=>[e("div",Y,[e("div",Z,[e("div",ee,[o(L,null,{"table-action":d(()=>[e("div",te,[n(o(J,{title:r.title,roles:r.roles},null,8,["title","roles"]),[[p,l.can(["user create"])]]),n(o(R,{selectedId:t.selectedId,title:r.title,onClose:a[0]||(a[0]=s=>(t.selectedId=[],t.multipleSelect=!1))},null,8,["selectedId","title"]),[[p,t.selectedId.length!=0&&l.can(["user delete"])]])]),e("div",se,[e("div",le,[o(G,{class:"h-9 text-sm",modelValue:t.params.perPage,"onUpdate:modelValue":a[1]||(a[1]=s=>t.params.perPage=s),dataSet:l.$page.props.app.perpage},null,8,["modelValue","dataSet"])]),o(H,{modelValue:t.params.search,"onUpdate:modelValue":a[2]||(a[2]=s=>t.params.search=s),type:"search",class:"block h-9",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])])]),"table-head":d(()=>[e("tr",null,[e("th",ae,[o(X,{checked:t.multipleSelect,"onUpdate:checked":a[3]||(a[3]=s=>t.multipleSelect=s),onChange:C},null,8,["checked"])]),re,e("th",{class:"p-4 cursor-pointer",onClick:a[4]||(a[4]=s=>h("name"))},[e("div",oe,[e("span",null,i(l.lang().label.name),1),o(m(b),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:a[5]||(a[5]=s=>h("email"))},[e("div",ie,[e("span",null,i(l.lang().label.email),1),o(m(b),{class:"w-4 h-4"})])]),e("th",ne,i(l.lang().label.role),1),e("th",{class:"p-4 cursor-pointer",onClick:a[6]||(a[6]=s=>h("created_at"))},[e("div",de,[e("span",null,i(l.lang().label.created),1),o(m(b),{class:"w-4 h-4"})])]),ce])]),"table-body":d(()=>[(c(!0),u(E,null,P(g.users.data,(s,k)=>{var v,w,y;return c(),u("tr",{key:k,class:"border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20"},[e("td",pe,[n(e("input",{class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:j,value:s.id,"onUpdate:modelValue":a[7]||(a[7]=f=>t.selectedId=f)},null,40,me),[[U,t.selectedId]])]),e("td",ue,i(++k),1),e("td",he,[e("div",_e,[n(e("div",fe,[e("img",{src:s.profile_photo_url,alt:s.name,class:"rounded h-8 w-8 object-cover"},null,8,be)],512),[[p,!s.profile_photo_path]]),n(e("div",ge,[e("span",{class:"block rounded w-8 h-8 bg-cover bg-no-repeat bg-center",style:N("background-image: url('"+s.profile_photo_url+"');")},null,4)],512),[[p,s.profile_photo_path]]),e("p",ke,i(s.name),1),s.email_verified_at?n((c(),x(m(F),{key:0,class:"w-4 h-auto text-blue-500 ml-1 shrink-0"},null,512)),[[_,"Verified at "+s.email_verified_at]]):A("",!0)])]),e("td",ve,i(s.email),1),e("td",we,[(v=s.roles[0])!=null&&v.name?(c(),u("p",ye,[o(W,{permissions:(w=s.roles[0])==null?void 0:w.permissions,title:(y=s.roles[0])==null?void 0:y.name},null,8,["permissions","title"])])):(c(),u("p",xe,i(l.lang().label.not_selected),1))]),e("td",$e,i(s.created_at),1),e("td",Ie,[e("div",Se,[n(o(K,{title:r.title,user:t.user,onOpen:f=>t.user=s,roles:r.roles},null,8,["title","user","onOpen","roles"]),[[p,l.can(["user update"])]]),n(o(Q,{title:r.title,user:t.user,onOpen:f=>t.user=s,roles:r.roles},null,8,["title","user","onOpen","roles"]),[[p,l.can(["user delete"])]])])])])}),128))]),"table-pagination":d(()=>[o(z,{links:r.users,filters:t.params},null,8,["links","filters"])]),_:1})])])])]),_:1},8,["title"])}}};export{Ze as default};
