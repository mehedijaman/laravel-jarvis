import{o,d as c,b as a,u as l,Z as h,a as e,w as n,t as s,s as d,c as u,e as r,F as m,g as f}from"./app-4aad6063.js";import{A as g}from"./ApplicationLogo-8b97767a.js";import{_ as p,a as x}from"./SwitchLocale-0fa88c9e.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={class:"relative flex justify-center items-center min-h-screen bg-dots-darker bg-center bg-slate-100 dark:bg-dots-lighter dark:bg-slate-900 selection:bg-primary selection:text-white text-slate-900 dark:text-white"},_={class:"max-w-7xl mx-auto p-6 lg:p-8"},k={class:"mt-16"},v={class:"grid grid-cols-1 scale-100 p-6 bg-white dark:bg-slate-800/50 dark:bg-gradient-to-bl from-slate-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded shadow-2xl shadow-slate-500/20 dark:shadow-none motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-primary max-w-xl"},w={class:"flex items-center justify-between"},y={class:"block text-xl font-semibold truncate text-slate-500 dark:text-slate-100"},V={class:"flex justify-between items-center gap-1"},B={target:"_blank",href:"https://github.com/erikwibowo/Laravel-Jarvis.git",class:"block mt-6 text-xl font-semibold text-primary"},$={class:"mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed"},j={key:0,class:"my-4 text-left"},L={class:"flex flex-col md:flex-row items-center mt-8 justify-between gap-2"},N={class:"ml-4 text-center text-sm text-slate-500 dark:text-slate-400 sm:text-right sm:ml-0"},F={class:"text-center text-sm text-slate-500 dark:text-slate-400 sm:text-left"},S={class:"flex items-center gap-4"},W={class:"text-slate-600 dark:text-slate-400"},A=e("span",{class:"text-rose-500"},"♥️",-1),C=e("a",{class:"text-primary font-semibold",target:"_blank",href:"https://erikwibowo.com"},"Erik Wibowo",-1),J={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup(i){return(t,D)=>(o(),c(m,null,[a(l(h),{title:t.lang().label.welcome},null,8,["title"]),e("div",b,[e("div",_,[e("div",k,[e("div",v,[e("div",w,[a(l(d),{href:"/",class:"flex justify-items-start items-center space-x-2"},{default:n(()=>[a(g,{class:"w-10 h-auto"}),e("p",y,s(t.$page.props.app.setting.name),1)]),_:1}),e("div",V,[a(p),a(x)])]),e("div",null,[e("a",B,s(t.lang().label.documentation),1),e("p",$,s(t.lang().label.documentation_long),1),i.canLogin?(o(),c("div",j,[t.$page.props.auth.user?(o(),u(l(d),{key:0,href:t.route("dashboard"),class:"font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded focus:outline-primary"},{default:n(()=>[r(s(t.lang().label.dashboard),1)]),_:1},8,["href"])):(o(),c(m,{key:1},[a(l(d),{href:t.route("login"),class:"font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded focus:outline-primary"},{default:n(()=>[r(s(t.lang().label.login),1)]),_:1},8,["href"]),i.canRegister?(o(),u(l(d),{key:0,href:t.route("register"),class:"ml-4 font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded focus:outline-primary"},{default:n(()=>[r(s(t.lang().label.register),1)]),_:1},8,["href"])):f("",!0)],64))])):f("",!0)])])]),e("div",L,[e("div",N," Laravel v"+s(i.laravelVersion)+" (PHP v"+s(i.phpVersion)+") ",1),e("div",F,[e("div",S,[e("p",W,[r(s(t.$page.props.app.setting.name+" v."+t.$page.props.app.version)+" © "+s(new Date().getFullYear())+". "+s(t.lang().build_with)+" ",1),A,r(" "+s(t.lang().label.by)+" ",1),C])])])])])])],64))}};export{J as default};
