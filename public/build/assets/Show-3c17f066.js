import{_ as p}from"./AppLayout-8af38d3b.js";import c from"./DeleteUserForm-fc5b58f7.js";import l from"./LogoutOtherBrowserSessionsForm-b6cda335.js";import{S as s}from"./SectionBorder-22757c85.js";import u from"./TwoFactorAuthenticationForm-9473f4fd.js";import f from"./UpdatePasswordForm-27488859.js";import d from"./UpdateProfileInformationForm-e9ccb8be.js";import{o as e,c as _,w as n,a as i,t as g,d as r,b as t,g as a,F as h}from"./app-4aad6063.js";import"./Toast-76ee8389.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-c562f47a.js";import"./SwitchLocale-0fa88c9e.js";import"./ApplicationLogo-8b97767a.js";import"./ActionSection-aaf2a67c.js";import"./SectionTitle-659f3eec.js";import"./DangerButton-f09c0e22.js";import"./DialogModal-aaf4c057.js";import"./Modal-246df657.js";import"./InputError-a644ff26.js";import"./SecondaryButton-66f1fe03.js";import"./TextInput-64b9543c.js";import"./ActionMessage-d42d60c4.js";import"./PrimaryButton-7e998bed.js";import"./InputLabel-06d31f6a.js";import"./FormSection-ee0d5ef0.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},Q={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,B)=>(e(),_(p,{title:o.lang().label.profile},{title:n(()=>[i("span",null,g(o.lang().label.profile),1)]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(d,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(f,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1},8,["title"]))}};export{Q as default};
