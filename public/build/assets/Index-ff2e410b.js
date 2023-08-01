import{p as j,y as O,O as B,c as x,w as d,o as c,a as e,t as i,b as o,s as n,x as p,u as m,d as u,g as D,F as P,q as U,z as N,D as z,e as A}from"./app-9542bc3e.js";import{_ as E,C as F}from"./AppLayout-01d85c46.js";import{p as T,_ as q,T as L}from"./TablePagination-5dc037c7.js";import{_ as M}from"./Breadcrumb-9aafe0a2.js";import{_ as G}from"./SelectInput-808bae7f.js";import{_ as H}from"./TextInput-9e4cc489.js";import J from"./Create-4e35e9d6.js";import K from"./Edit-3220d464.js";import Q from"./Delete-ea983738.js";import R from"./Permission-425a173c.js";import{C as b}from"./index-2fec2713.js";import{_ as W}from"./Checkbox-4a52fca2.js";import X from"./DeleteBulk-4f43ccae.js";import"./Toast-62c40bb4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SwitchDarkMode-b31ce9b7.js";import"./SwitchLocale-4df15138.js";import"./ApplicationLogo-6b1aae5a.js";import"./DialogModal-f9253a3d.js";import"./Modal-c178d6bc.js";import"./InputLabel-39c90c96.js";import"./PrimaryButton-0513e303.js";import"./SecondaryButton-e0efb2b1.js";import"./ActionButton-ecfda9cd.js";import"./ConfirmationModal-55453307.js";import"./DangerButton-18fa4dab.js";const Y={class:"py-6"},Z={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},ee={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},te={class:"flex shrink-0 rounded overflow-hidden"},se={class:"flex justify-end items-center gap-2"},le={class:"flex space-x-2"},ae={class:"p-4 text-left"},re=e("th",{class:"p-4 text-center"},"#",-1),oe={class:"flex justify-between items-center"},ie={class:"flex justify-between items-center"},ne={class:"p-4 text-left"},de={class:"flex justify-between items-center"},ce=e("th",{class:"p-4 text-center sr-only"},"Action",-1),pe={class:"whitespace-nowrap px-4 py-2"},me=["value"],ue={class:"whitespace-nowrap px-4 py-2 text-center"},he={class:"whitespace-nowrap px-4 py-2"},_e={class:"flex items-center"},fe={class:"mt-2 shrink-0"},be=["src","alt"],ge={class:"mt-2 shrink-0"},ke={class:"truncate ml-3"},ve={class:"whitespace-nowrap truncate px-4 py-2"},we={class:"whitespace-nowrap px-4 py-2"},ye={key:0},xe={key:1},$e={class:"whitespace-nowrap px-4 py-2"},Ie={class:"whitespace-nowrap flex justify-end px-4 py-2"},Se={class:"flex w-fit rounded overflow-hidden"},Ze={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(g){const r=g,{_:$,debounce:I,pickBy:S}=T,t=j({params:{search:r.filters.search,field:r.filters.field,order:r.filters.order,perPage:r.perPage},selectedId:[],multipleSelect:!1,user:null}),h=l=>{t.params.field=l,t.params.order=t.params.order==="asc"?"desc":"asc"};O(()=>$.cloneDeep(t.params),I(()=>{let l=S(t.params);B.get(route("user.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=l=>{var a;l.target.checked===!1?t.selectedId=[]:(a=r.users)==null||a.data.forEach(_=>{t.selectedId.push(_.id)})},V=()=>{var l;((l=r.users)==null?void 0:l.data.length)==t.selectedId.length?t.multipleSelect=!0:t.multipleSelect=!1};return(l,a)=>{const _=U("tooltip");return c(),x(E,{title:r.title},{title:d(()=>[e("span",null,i(r.title),1)]),breadcrumb:d(()=>[o(M)]),default:d(()=>[e("div",Y,[e("div",Z,[e("div",ee,[o(L,null,{"table-action":d(()=>[e("div",te,[n(o(J,{title:r.title,roles:r.roles},null,8,["title","roles"]),[[p,l.can(["user create"])]]),n(o(X,{selectedId:t.selectedId,title:r.title,onClose:a[0]||(a[0]=s=>(t.selectedId=[],t.multipleSelect=!1))},null,8,["selectedId","title"]),[[p,t.selectedId.length!=0&&l.can(["user delete"])]])]),e("div",se,[e("div",le,[o(G,{class:"h-9 text-sm",modelValue:t.params.perPage,"onUpdate:modelValue":a[1]||(a[1]=s=>t.params.perPage=s),dataSet:l.$page.props.app.perpage},null,8,["modelValue","dataSet"])]),o(H,{modelValue:t.params.search,"onUpdate:modelValue":a[2]||(a[2]=s=>t.params.search=s),type:"search",class:"block h-9",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])])]),"table-head":d(()=>[e("tr",null,[e("th",ae,[o(W,{checked:t.multipleSelect,"onUpdate:checked":a[3]||(a[3]=s=>t.multipleSelect=s),onChange:C},null,8,["checked"])]),re,e("th",{class:"p-4 cursor-pointer",onClick:a[4]||(a[4]=s=>h("name"))},[e("div",oe,[e("span",null,i(l.lang().label.name),1),o(m(b),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:a[5]||(a[5]=s=>h("email"))},[e("div",ie,[e("span",null,i(l.lang().label.email),1),o(m(b),{class:"w-4 h-4"})])]),e("th",ne,i(l.lang().label.role),1),e("th",{class:"p-4 cursor-pointer",onClick:a[6]||(a[6]=s=>h("created_at"))},[e("div",de,[e("span",null,i(l.lang().label.created),1),o(m(b),{class:"w-4 h-4"})])]),ce])]),"table-body":d(()=>[(c(!0),u(P,null,D(g.users.data,(s,k)=>{var v,w,y;return c(),u("tr",{key:k,class:"border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20"},[e("td",pe,[n(e("input",{class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:V,value:s.id,"onUpdate:modelValue":a[7]||(a[7]=f=>t.selectedId=f)},null,40,me),[[N,t.selectedId]])]),e("td",ue,i(++k),1),e("td",he,[e("div",_e,[n(e("div",fe,[e("img",{src:s.profile_photo_url,alt:s.name,class:"rounded h-8 w-8 object-cover"},null,8,be)],512),[[p,!s.profile_photo_path]]),n(e("div",ge,[e("span",{class:"block rounded w-8 h-8 bg-cover bg-no-repeat bg-center",style:z("background-image: url('"+s.profile_photo_url+"');")},null,4)],512),[[p,s.profile_photo_path]]),e("p",ke,i(s.name),1),s.email_verified_at?n((c(),x(m(F),{key:0,class:"w-4 h-auto text-blue-500 ml-1 shrink-0"},null,512)),[[_,"Verified at "+s.email_verified_at]]):A("",!0)])]),e("td",ve,i(s.email),1),e("td",we,[(v=s.roles[0])!=null&&v.name?(c(),u("p",ye,[o(R,{permissions:(w=s.roles[0])==null?void 0:w.permissions,title:(y=s.roles[0])==null?void 0:y.name},null,8,["permissions","title"])])):(c(),u("p",xe,i(l.lang().label.not_selected),1))]),e("td",$e,i(s.created_at),1),e("td",Ie,[e("div",Se,[n(o(K,{title:r.title,user:t.user,onOpen:f=>t.user=s,roles:r.roles},null,8,["title","user","onOpen","roles"]),[[p,l.can(["user update"])]]),n(o(Q,{title:r.title,user:t.user,onOpen:f=>t.user=s,roles:r.roles},null,8,["title","user","onOpen","roles"]),[[p,l.can(["user delete"])]])])])])}),128))]),"table-pagination":d(()=>[o(q,{links:r.users,filters:t.params},null,8,["links","filters"])]),_:1})])])])]),_:1},8,["title"])}}};export{Ze as default};
