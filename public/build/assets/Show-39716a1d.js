import{_ as p}from"./AppLayout-a7ce9e5d.js";import c from"./DeleteUserForm-6f9416dc.js";import l from"./LogoutOtherBrowserSessionsForm-1995fd51.js";import{S as r}from"./SectionBorder-55af84ba.js";import u from"./TwoFactorAuthenticationForm-f46b4c4d.js";import f from"./UpdatePasswordForm-e7c730d3.js";import d from"./UpdateProfileInformationForm-48682c0e.js";import{c as _,w as n,o as e,a as i,t as h,d as s,b as t,e as a,F as g}from"./app-140420f6.js";import"./Toast-60ff6e3a.js";import"./index-82d8797f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SwitchDarkMode-53c21fe5.js";import"./SwitchLocale-a0c1591a.js";import"./ApplicationLogo-7f904872.js";import"./ActionSection-8c3b989c.js";import"./SectionTitle-267e7b6e.js";import"./DangerButton-ea8fd6cb.js";import"./DialogModal-960de5e0.js";import"./Modal-b2fb9e2b.js";import"./InputError-ec5e04a0.js";import"./SecondaryButton-92b0cd9d.js";import"./TextInput-7ec62e4f.js";import"./ActionMessage-ad051db0.js";import"./PrimaryButton-33321802.js";import"./InputLabel-4e3ec04e.js";import"./FormSection-2a3eee73.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},R={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,B)=>(e(),_(p,{title:o.lang().label.profile},{title:n(()=>[i("span",null,h(o.lang().label.profile),1)]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),s("div",w,[t(d,{user:o.$page.props.auth.user},null,8,["user"]),t(r)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),s("div",k,[t(f,{class:"mt-10 sm:mt-0"}),t(r)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),s("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(r)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),s(g,{key:3},[t(r),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1},8,["title"]))}};export{R as default};
