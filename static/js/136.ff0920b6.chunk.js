(window["webpackJsonpfuse-react-app"]=window["webpackJsonpfuse-react-app"]||[]).push([[136],{2191:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),s=t(907),n=t(914),m=t(122),o=t(889),i=t(892),c=t(129),d=t(862),u=t(13),f=t(128),p=t(3),w=t(28),b=Object(d.a)(function(e){return{root:{background:"radial-gradient("+Object(c.darken)(e.palette.primary.dark,.5)+" 0%, "+e.palette.primary.dark+" 80%)",color:e.palette.primary.contrastText}}});a.default=function(){var e=b(),a=Object(f.b)({name:"",email:"",password:"",passwordConfirm:""}),t=a.form,l=a.handleChange,c=a.resetForm;return r.a.createElement("div",{className:Object(p.a)(e.root,"flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32")},r.a.createElement("div",{className:"flex flex-col items-center justify-center w-full"},r.a.createElement(u.d,{animation:"transition.expandIn"},r.a.createElement(s.a,{className:"w-full max-w-384"},r.a.createElement(n.a,{className:"flex flex-col items-center justify-center p-32"},r.a.createElement("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),r.a.createElement(m.a,{variant:"h6",className:"mt-16 mb-32"},"RESET YOUR PASSWORD"),r.a.createElement("form",{name:"resetForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:function(e){e.preventDefault(),c()}},r.a.createElement(o.a,{className:"mb-16",label:"Email",autoFocus:!0,type:"email",name:"email",value:t.email,onChange:l,variant:"outlined",required:!0,fullWidth:!0}),r.a.createElement(o.a,{className:"mb-16",label:"Password",type:"password",name:"password",value:t.password,onChange:l,variant:"outlined",required:!0,fullWidth:!0}),r.a.createElement(o.a,{className:"mb-16",label:"Password (Confirm)",type:"password",name:"passwordConfirm",value:t.passwordConfirm,onChange:l,variant:"outlined",required:!0,fullWidth:!0}),r.a.createElement(i.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Reset",disabled:!(t.email.length>0&&t.password.length>0&&t.password.length>3&&t.password===t.passwordConfirm),type:"submit"},"RESET MY PASSWORD")),r.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},r.a.createElement(w.a,{className:"font-medium",to:"/pages/auth/login"},"Go back to login")))))))}}}]);