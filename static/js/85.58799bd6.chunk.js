(window["webpackJsonpfuse-react-app"]=window["webpackJsonpfuse-react-app"]||[]).push([[85],{2323:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(912),l=a(883),o=a(13),i=a(7),s=a(168),m=a(14),u=a(122),p=a(894),d=a(470),f=a(462),E=a(317),b=a(42),v=a.n(b),h="[CONTACTS APP] GET USER DATA";function N(){var e=v.a.get("/api/contacts-app/user");return function(t){return e.then(function(e){return t({type:h,payload:e.data})})}}var C="[CONTACTS APP] GET CONTACTS",y="[CONTACTS APP] SET SEARCH TEXT",O="[CONTACTS APP] TOGGLE IN SELECTED CONTACTS",g="[CONTACTS APP] SELECT ALL CONTACTS",T="[CONTACTS APP] DESELECT ALL CONTACTS",A="[CONTACTS APP] OPEN NEW CONTACT DIALOG",j="[CONTACTS APP] CLOSE NEW CONTACT DIALOG",P="[CONTACTS APP] OPEN EDIT CONTACT DIALOG",x="[CONTACTS APP] CLOSE EDIT CONTACT DIALOG",w="[CONTACTS APP] ADD CONTACT",S="[CONTACTS APP] UPDATE CONTACT",k="[CONTACTS APP] REMOVE CONTACT",D="[CONTACTS APP] REMOVE CONTACTS",I="[CONTACTS APP] TOGGLE STARRED CONTACT",L="[CONTACTS APP] SET CONTACTS STARRED ";function W(e){var t=v.a.get("/api/contacts-app/contacts",{params:e});return function(a){return t.then(function(t){return a({type:C,payload:t.data,routeParams:e})})}}function R(e){return function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/remove-contact",{contactId:e}).then(function(e){return Promise.all([t({type:k})]).then(function(){return t(W(n))})})}}var G=a(307),H=a(475),B=a(884),U=a(910),F=a(886);var M=function(e){var t=Object(i.b)(),a=Object(i.c)(function(e){return e.contactsApp.contacts.selectedContactIds}),r=Object(n.useState)(null),o=Object(m.a)(r,2),s=o[0],u=o[1];function p(){u(null)}return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{className:"p-0","aria-owns":s?"selectedContactsMenu":null,"aria-haspopup":"true",onClick:function(e){u(e.currentTarget)}},c.a.createElement(l.a,null,"more_horiz")),c.a.createElement(G.a,{id:"selectedContactsMenu",anchorEl:s,open:Boolean(s),onClose:p},c.a.createElement(H.a,null,c.a.createElement(B.a,{onClick:function(){var e;t((e=a,function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/remove-contacts",{contactIds:e}).then(function(e){return Promise.all([t({type:D}),t({type:T})]).then(function(){return t(W(n))})})})),p()}},c.a.createElement(U.a,{className:"min-w-40"},c.a.createElement(l.a,null,"delete")),c.a.createElement(F.a,{primary:"Remove"})),c.a.createElement(B.a,{onClick:function(){var e;t((e=a,function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/set-contacts-starred",{contactIds:e}).then(function(e){return Promise.all([t({type:L}),t({type:T}),t(N())]).then(function(){return t(W(n))})})})),p()}},c.a.createElement(U.a,{className:"min-w-40"},c.a.createElement(l.a,null,"star")),c.a.createElement(F.a,{primary:"Starred"})),c.a.createElement(B.a,{onClick:function(){var e;t((e=a,function(t,a){var n=a().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/set-contacts-unstarred",{contactIds:e}).then(function(e){return Promise.all([t({type:L}),t({type:T}),t(N())]).then(function(){return t(W(n))})})})),p()}},c.a.createElement(U.a,{className:"min-w-40"},c.a.createElement(l.a,null,"star_border")),c.a.createElement(F.a,{primary:"Unstarred"})))))};var _=function(e){var t=Object(i.b)(),a=Object(i.c)(function(e){return e.contactsApp.contacts.entities}),r=Object(i.c)(function(e){return e.contactsApp.contacts.selectedContactIds}),s=Object(i.c)(function(e){return e.contactsApp.contacts.searchText}),b=Object(i.c)(function(e){return e.contactsApp.user}),h=Object(n.useState)(null),C=Object(m.a)(h,2),y=C[0],A=C[1];return Object(n.useEffect)(function(){a&&A(function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:o.C.filterArrayByString(a,t)}(a,s))},[a,s]),y?0===y.length?c.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},c.a.createElement(u.a,{color:"textSecondary",variant:"h5"},"There are no contacts!")):c.a.createElement(o.d,{animation:"transition.slideUpIn",delay:300},c.a.createElement(E.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:function(e,a,n){return{className:"cursor-pointer",onClick:function(e,n){var c;a&&t((c=a.original,{type:P,data:c}))}}},data:y,columns:[{Header:function(){return c.a.createElement(p.a,{onClick:function(e){e.stopPropagation()},onChange:function(e){e.target.checked?t({type:g}):t({type:T})},checked:r.length===Object.keys(a).length&&r.length>0,indeterminate:r.length!==Object.keys(a).length&&r.length>0})},accessor:"",Cell:function(e){return c.a.createElement(p.a,{onClick:function(e){e.stopPropagation()},checked:r.includes(e.value.id),onChange:function(){return t((a=e.value.id,{type:O,contactId:a}));var a}})},className:"justify-center",sortable:!1,width:64},{Header:function(){return r.length>0&&c.a.createElement(M,null)},accessor:"avatar",Cell:function(e){return c.a.createElement(d.a,{className:"mr-8",alt:e.original.name,src:e.value})},className:"justify-center",width:64,sortable:!1},{Header:"First Name",accessor:"name",filterable:!0,className:"font-bold"},{Header:"Last Name",accessor:"lastName",filterable:!0,className:"font-bold"},{Header:"Company",accessor:"company",filterable:!0},{Header:"Job Title",accessor:"jobTitle",filterable:!0},{Header:"Email",accessor:"email",filterable:!0},{Header:"Phone",accessor:"phone",filterable:!0},{Header:"",width:128,Cell:function(e){return c.a.createElement("div",{className:"flex items-center"},c.a.createElement(f.a,{onClick:function(a){var n;a.stopPropagation(),t((n=e.original.id,function(e,t){var a=t().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/toggle-starred-contact",{contactId:n}).then(function(t){return Promise.all([e({type:I}),e(N())]).then(function(){return e(W(a))})})}))}},b.starred&&b.starred.includes(e.original.id)?c.a.createElement(l.a,null,"star"):c.a.createElement(l.a,null,"star_border")),c.a.createElement(f.a,{onClick:function(a){a.stopPropagation(),t(R(e.original.id))}},c.a.createElement(l.a,null,"delete")))}}],defaultPageSize:10,noDataText:"No contacts found"})):null},J=a(895),q=a(140),z=a(309),V=a(924);var X=function(e){var t=Object(i.b)(),a=Object(i.c)(function(e){return e.contactsApp.contacts.searchText}),n=Object(i.c)(function(e){return e.fuse.settings.mainTheme});return c.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},c.a.createElement("div",{className:"flex flex-shrink items-center sm:w-224"},c.a.createElement(J.a,{lgUp:!0},c.a.createElement(f.a,{onClick:function(t){e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},c.a.createElement(l.a,null,"menu"))),c.a.createElement("div",{className:"flex items-center"},c.a.createElement(o.d,{animation:"transition.expandIn",delay:300},c.a.createElement(l.a,{className:"text-32 mr-12"},"account_box")),c.a.createElement(o.d,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(u.a,{variant:"h6",className:"hidden sm:flex"},"Contacts")))),c.a.createElement("div",{className:"flex flex-1 items-center justify-center pr-8 sm:px-12"},c.a.createElement(V.a,{theme:n},c.a.createElement(o.d,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(q.a,{className:"flex p-4 items-center w-full max-w-512 px-8 py-4",elevation:1},c.a.createElement(l.a,{className:"mr-8",color:"action"},"search"),c.a.createElement(z.a,{placeholder:"Search for anything",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t({type:y,searchText:e.target.value})}}))))))},Y=a(904),K=a(476),Q=a(477),Z=a(862),$=Object(Z.a)(function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText+"!important",pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{marginRight:16}}}});var ee=function(e){var t=Object(i.c)(function(e){return e.contactsApp.user}),a=$(e);return c.a.createElement("div",{className:"p-0 lg:p-24 lg:pr-4"},c.a.createElement(o.d,{animation:"transition.slideLeftIn",delay:200},c.a.createElement(q.a,{className:"rounded-0 shadow-none lg:rounded-8 lg:shadow-1"},c.a.createElement("div",{className:"p-24 flex items-center"},c.a.createElement(d.a,{className:"mr-12",alt:t.name,src:t.avatar}),c.a.createElement(u.a,null,t.name)),c.a.createElement(Y.a,null),c.a.createElement(K.a,null,c.a.createElement(Q.a,{button:!0,component:o.D,to:"/apps/contacts/all",activeClassName:"active",className:a.listItem},c.a.createElement(l.a,{className:"list-item-icon text-16",color:"action"},"people"),c.a.createElement(F.a,{className:"truncate pr-0",primary:"All contacts",disableTypography:!0})),c.a.createElement(Q.a,{button:!0,component:o.D,to:"/apps/contacts/frequent",activeClassName:"active",className:a.listItem},c.a.createElement(l.a,{className:"list-item-icon text-16",color:"action"},"restore"),c.a.createElement(F.a,{className:"truncate pr-0",primary:"Frequently contacted",disableTypography:!0})),c.a.createElement(Q.a,{button:!0,component:o.D,to:"/apps/contacts/starred",activeClassName:"active",className:a.listItem},c.a.createElement(l.a,{className:"list-item-icon text-16",color:"action"},"star"),c.a.createElement(F.a,{className:"truncate pr-0",primary:"Starred contacts",disableTypography:!0}))))))},te=a(4),ae=a(911),ne=a(908),ce=a(893),re=a(986),le=a(889),oe=a(992),ie=a(892),se=a(128),me=a(171);function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach(function(t){Object(te.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var de={id:"",name:"",lastName:"",avatar:"assets/images/avatars/profile.jpg",nickname:"",company:"",jobTitle:"",email:"",phone:"",address:"",birthday:"",notes:""};var fe=function(e){var t=Object(i.b)(),a=Object(i.c)(function(e){return e.contactsApp.contacts.contactDialog}),r=Object(se.b)(de),o=r.form,s=r.handleChange,m=r.setForm,p=Object(n.useCallback)(function(){"edit"===a.type&&a.data&&m(pe({},a.data)),"new"===a.type&&m(pe({},de,{},a.data,{id:me.a.generateGUID()}))},[a.data,a.type,m]);function E(){"edit"===a.type?t({type:x}):t({type:j})}function b(){return o.name.length>0}function h(e){var n,c;e.preventDefault(),"new"===a.type?t((c=o,function(e,t){var a=t().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/add-contact",{newContact:c}).then(function(t){return Promise.all([e({type:w})]).then(function(){return e(W(a))})})})):t((n=o,function(e,t){var a=t().contactsApp.contacts.routeParams;return v.a.post("/api/contacts-app/update-contact",{contact:n}).then(function(t){return Promise.all([e({type:S})]).then(function(){return e(W(a))})})})),E()}return Object(n.useEffect)(function(){a.props.open&&p()},[a.props.open,p]),c.a.createElement(ae.a,Object.assign({classes:{paper:"m-24"}},a.props,{onClose:E,fullWidth:!0,maxWidth:"xs"}),c.a.createElement(ne.a,{position:"static",elevation:1},c.a.createElement(ce.a,{className:"flex w-full"},c.a.createElement(u.a,{variant:"subtitle1",color:"inherit"},"new"===a.type?"New Contact":"Edit Contact")),c.a.createElement("div",{className:"flex flex-col items-center justify-center pb-24"},c.a.createElement(d.a,{className:"w-96 h-96",alt:"contact avatar",src:o.avatar}),"edit"===a.type&&c.a.createElement(u.a,{variant:"h6",color:"inherit",className:"pt-8"},o.name))),c.a.createElement("form",{noValidate:!0,onSubmit:h,className:"flex flex-col overflow-hidden"},c.a.createElement(re.a,{classes:{root:"p-24"}},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"min-w-48 pt-20"},c.a.createElement(l.a,{color:"action"},"account_circle")),c.a.createElement(le.a,{className:"mb-24",label:"Name",autoFocus:!0,id:"name",name:"name",value:o.name,onChange:s,variant:"outlined",required:!0,fullWidth:!0})),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"min-w-48 pt-20"}),c.a.createElement(le.a,{className:"mb-24",label:"Last name",id:"lastName",name:"lastName",value:o.lastName,onChange:s,variant:"outlined",fullWidth:!0})),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"min-w-48 pt-20"},c.a.createElement(l.a,{color:"action"},"star")),c.a.createElement(le.a,{className:"mb-24",label:"Nickname",id:"nickname",name:"nickname",value:o.nickname,onChange:s,variant:"outlined",fullWidth:!0})),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"min-w-48 pt-20"},c.a.createElement(l.a,{color:"action"},"phone")),c.a.createElement(le.a,{className:"mb-24",label:"Phone",id:"phone",name:"phone",value:o.phone,onChange:s,variant:"outlined",fullWidth:!0})),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"min-w-48 pt-20"},c.a.createElement(l.a,{color:"action"},"email")),c.a.createElement(le.a,{className:"mb-24",label:"Email",id:"email",name:"email",value:o.email,onChange:s,variant:"outlined",fullWidth:!0})),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"min-w-48 pt-20"},c.a.createElement(l.a,{color:"action"},"domain")),c.a.createElement(le.a,{className:"mb-24",label:"Company",id:"company",name:"company",value:o.company,onChange:s,variant:"outlined",fullWidth:!0})),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"min-w-48 pt-20"},c.a.createElement(l.a,{color:"action"},"work")),c.a.createElement(le.a,{className:"mb-24",label:"Job title",id:"jobTitle",name:"jobTitle",value:o.jobTitle,onChange:s,variant:"outlined",fullWidth:!0})),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"min-w-48 pt-20"},c.a.createElement(l.a,{color:"action"},"cake")),c.a.createElement(le.a,{className:"mb-24",id:"birthday",label:"Birthday",type:"date",value:o.birthday,onChange:s,InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0})),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"min-w-48 pt-20"},c.a.createElement(l.a,{color:"action"},"home")),c.a.createElement(le.a,{className:"mb-24",label:"Address",id:"address",name:"address",value:o.address,onChange:s,variant:"outlined",fullWidth:!0})),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"min-w-48 pt-20"},c.a.createElement(l.a,{color:"action"},"note")),c.a.createElement(le.a,{className:"mb-24",label:"Notes",id:"notes",name:"notes",value:o.notes,onChange:s,variant:"outlined",multiline:!0,rows:5,fullWidth:!0}))),"new"===a.type?c.a.createElement(oe.a,{className:"justify-between pl-16"},c.a.createElement(ie.a,{variant:"contained",color:"primary",onClick:h,type:"submit",disabled:!b()},"Add")):c.a.createElement(oe.a,{className:"justify-between pl-16"},c.a.createElement(ie.a,{variant:"contained",color:"primary",type:"submit",onClick:h,disabled:!b()},"Save"),c.a.createElement(f.a,{onClick:function(){t(R(o.id)),E()}},c.a.createElement(l.a,null,"delete")))))},Ee=a(46),be=a(10),ve=a(8);function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(a,!0).forEach(function(t){Object(te.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ce={entities:null,searchText:"",selectedContactIds:[],routeParams:{},contactDialog:{type:"new",props:{open:!1},data:null}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Ne({},e,{entities:ve.a.keyBy(t.payload,"id"),routeParams:t.routeParams});case y:return Ne({},e,{searchText:t.searchText});case O:var a=t.contactId,n=Object(be.a)(e.selectedContactIds);return n=void 0!==n.find(function(e){return e===a})?n.filter(function(e){return e!==a}):[].concat(Object(be.a)(n),[a]),Ne({},e,{selectedContactIds:n});case g:var c=Object.keys(e.entities).map(function(t){return e.entities[t]}),r=c.map(function(e){return e.id});return Ne({},e,{selectedContactIds:r});case T:return Ne({},e,{selectedContactIds:[]});case A:return Ne({},e,{contactDialog:{type:"new",props:{open:!0},data:null}});case j:return Ne({},e,{contactDialog:{type:"new",props:{open:!1},data:null}});case P:return Ne({},e,{contactDialog:{type:"edit",props:{open:!0},data:t.data}});case x:return Ne({},e,{contactDialog:{type:"edit",props:{open:!1},data:null}});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload;default:return e}},ge=Object(Ee.d)({contacts:ye,user:Oe}),Te=Object(Z.a)({addButton:{position:"absolute",right:12,bottom:12,zIndex:99}});t.default=Object(s.a)("contactsApp",ge)(function(e){var t=Object(i.b)(),a=Te(e),s=Object(n.useRef)(null);return Object(n.useEffect)(function(){t(W(e.match.params)),t(N())},[t,e.match.params]),Object(n.useEffect)(function(){t(W(e.match.params))},[t,e.match.params]),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.t,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:c.a.createElement(X,{pageLayout:s}),content:c.a.createElement(_,null),leftSidebarContent:c.a.createElement(ee,null),sidebarInner:!0,ref:s,innerScroll:!0}),c.a.createElement(o.d,{animation:"transition.expandIn",delay:300},c.a.createElement(r.a,{color:"primary","aria-label":"add",className:a.addButton,onClick:function(e){return t({type:A})}},c.a.createElement(l.a,null,"person_add"))),c.a.createElement(fe,null))})},986:function(e,t,a){"use strict";var n=a(1),c=a(6),r=a(0),l=a.n(r),o=(a(2),a(3)),i=a(9),s=l.a.forwardRef(function(e,t){var a=e.classes,r=e.className,i=e.dividers,s=void 0!==i&&i,m=Object(c.a)(e,["classes","className","dividers"]);return l.a.createElement("div",Object(n.a)({className:Object(o.a)(a.root,r,s&&a.dividers),ref:t},m))});t.a=Object(i.a)(function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}},{name:"MuiDialogContent"})(s)},992:function(e,t,a){"use strict";var n=a(1),c=a(6),r=a(0),l=a.n(r),o=(a(2),a(3)),i=a(9),s=l.a.forwardRef(function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,i=e.classes,s=e.className,m=Object(c.a)(e,["disableSpacing","classes","className"]);return l.a.createElement("div",Object(n.a)({className:Object(o.a)(i.root,s,!r&&i.spacing),ref:t},m))});t.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiDialogActions"})(s)}}]);