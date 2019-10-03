(window["webpackJsonpfuse-react-app"]=window["webpackJsonpfuse-react-app"]||[]).push([[98],{2324:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),o=a.n(r),i=a(912),c=a(883),l=a(862),s=a(13),d=a(7),u=a(2169),m=(a(1396),a(1397),a(1398)),p=a.n(m),b=a(66),g=a.n(b),f=a(3),v=a(168),h=a(42),y=a.n(h),E="[CALENDAR APP] GET EVENTS",w="[CALENDAR APP] OPEN NEW EVENT DIALOG",O="[CALENDAR APP] CLOSE NEW EVENT DIALOG",j="[CALENDAR APP] OPEN EDIT EVENT DIALOG",P="[CALENDAR APP] CLOSE EDIT EVENT DIALOG",x="[CALENDAR APP] ADD EVENT",k="[CALENDAR APP] UPDATE EVENT",D="[CALENDAR APP] REMOVE EVENT";function A(){var e=y.a.get("/api/calendar-app/events");return function(t){return e.then(function(e){return t({type:E,payload:e.data})})}}function N(e){return{type:w,data:e}}function I(e){return function(t,a){return y.a.post("/api/calendar-app/update-event",{event:e}).then(function(e){return Promise.all([t({type:k})]).then(function(){return t(A())})})}}var C=a(46);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S={entities:[],eventDialog:{type:"new",props:{open:!1},data:null}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var a=t.payload.map(function(e){return L({},e,{start:new Date(e.start),end:new Date(e.end)})});return L({},e,{entities:a});case w:return L({},e,{eventDialog:{type:"new",props:{open:!0},data:L({},t.data)}});case O:return L({},e,{eventDialog:{type:"new",props:{open:!1},data:null}});case j:return L({},e,{eventDialog:{type:"edit",props:{open:!0},data:L({},t.data,{start:new Date(t.data.start),end:new Date(t.data.end)})}});case P:return L({},e,{eventDialog:{type:"edit",props:{open:!1},data:null}});default:return e}},M=Object(C.d)({events:F}),z=a(911),R=a(908),_=a(893),V=a(122),W=a(986),B=a(889),G=a(887),H=a(906),J=a(992),U=a(892),q=a(462),X=a(171),Y=a(128);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Z={id:X.a.generateGUID(),title:"",allDay:!0,start:new Date,end:new Date,desc:""};var $=function(e){var t=Object(d.b)(),a=Object(d.c)(function(e){return e.calendarApp.events.eventDialog}),n=Object(Y.b)(Z),i=n.form,l=n.handleChange,s=n.setForm,u=g()(i.start).format(g.a.HTML5_FMT.DATETIME_LOCAL_SECONDS),m=g()(i.end).format(g.a.HTML5_FMT.DATETIME_LOCAL_SECONDS),p=Object(r.useCallback)(function(){"edit"===a.type&&a.data&&s(Q({},a.data)),"new"===a.type&&s(Q({},Z,{},a.data,{id:X.a.generateGUID()}))},[a.data,a.type,s]);function b(){"edit"===a.type?t({type:P}):t({type:O})}function f(){return i.title.length>0}return Object(r.useEffect)(function(){a.props.open&&p()},[a.props.open,p]),o.a.createElement(z.a,Object.assign({},a.props,{onClose:b,fullWidth:!0,maxWidth:"xs",component:"form"}),o.a.createElement(R.a,{position:"static"},o.a.createElement(_.a,{className:"flex w-full"},o.a.createElement(V.a,{variant:"subtitle1",color:"inherit"},"new"===a.type?"New Event":"Edit Event"))),o.a.createElement("form",{noValidate:!0,onSubmit:function(e){var n;e.preventDefault(),"new"===a.type?t((n=i,function(e,t){return y.a.post("/api/calendar-app/add-event",{newEvent:n}).then(function(t){return Promise.all([e({type:x})]).then(function(){return e(A())})})})):t(I(i)),b()}},o.a.createElement(W.a,{classes:{root:"p-16 pb-0 sm:p-24 sm:pb-0"}},o.a.createElement(B.a,{id:"title",label:"Title",className:"mt-8 mb-16",InputLabelProps:{shrink:!0},inputProps:{max:m},name:"title",value:i.title,onChange:l,variant:"outlined",autoFocus:!0,required:!0,fullWidth:!0}),o.a.createElement(G.a,{className:"mt-8 mb-16",label:"All Day",control:o.a.createElement(H.a,{checked:i.allDay,id:"allDay",name:"allDay",onChange:l})}),o.a.createElement(B.a,{id:"start",name:"start",label:"Start",type:"datetime-local",className:"mt-8 mb-16",InputLabelProps:{shrink:!0},inputProps:{max:m},value:u,onChange:l,variant:"outlined",fullWidth:!0}),o.a.createElement(B.a,{id:"end",name:"end",label:"End",type:"datetime-local",className:"mt-8 mb-16",InputLabelProps:{shrink:!0},inputProps:{min:u},value:m,onChange:l,variant:"outlined",fullWidth:!0}),o.a.createElement(B.a,{className:"mt-8 mb-16",id:"desc",label:"Description",type:"text",name:"desc",value:i.desc,onChange:l,multiline:!0,rows:5,variant:"outlined",fullWidth:!0})),"new"===a.type?o.a.createElement(J.a,{className:"justify-between pl-8 sm:pl-16"},o.a.createElement(U.a,{variant:"contained",color:"primary",type:"submit",disabled:!f()},"Add")):o.a.createElement(J.a,{className:"justify-between pl-8 sm:pl-16"},o.a.createElement(U.a,{variant:"contained",color:"primary",type:"submit",disabled:!f()}," Save"),o.a.createElement(q.a,{onClick:function(){var e;t((e=i.id,function(t,a){return y.a.post("/api/calendar-app/remove-event",{eventId:e}).then(function(e){return Promise.all([t({type:D})]).then(function(){return t(A())})})})),b()}},o.a.createElement(c.a,null,"delete")))))},ee=a(23),te=a(22),ae=a(29),ne=a(30),re=a(31),oe=a(888),ie=a(9),ce=a(924),le=a(1414),se=a.n(le),de=a(1177),ue=a(316),me={month:{title:"Month",icon:"view_module"},week:{title:"Week",icon:"view_week"},work_week:{title:"Work week",icon:"view_array"},day:{title:"Day",icon:"view_day"},agenda:{title:"Agenda",icon:"view_agenda"}},pe=function(e){function t(){return Object(ee.a)(this,t),Object(ae.a)(this,Object(ne.a)(t).apply(this,arguments))}return Object(re.a)(t,e),Object(te.a)(t,[{key:"viewButtons",value:function(){var e=this,t=this.props.views,a=this.props.view;if(t.length>1)return t.map(function(t){return o.a.createElement(oe.a,{title:me[t].title,key:t},o.a.createElement("div",null,o.a.createElement(s.d,{animation:"transition.expandIn",delay:500},o.a.createElement(q.a,{"aria-label":t,onClick:function(){return e.props.onView(t)},disabled:a===t},o.a.createElement(c.a,null,me[t].icon)))))})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.mainThemeDark,n=e.label,r=e.date;return o.a.createElement(ce.a,{theme:a},o.a.createElement("div",{className:Object(f.a)(t.root,"flex h-200 min-h-200 relative",g()(r).format("MMM"))},o.a.createElement("div",{className:"flex flex-1 flex-col p-12 justify-between z-10 container"},o.a.createElement("div",{className:"flex flex-col items-center justify-between sm:flex-row"},o.a.createElement("div",{className:"flex items-center my-16 sm:mb-0"},o.a.createElement(s.d,{animation:"transition.expandIn",delay:300},o.a.createElement(c.a,{className:"text-32 mx-12"},"today")),o.a.createElement(s.d,{animation:"transition.slideLeftIn",delay:300},o.a.createElement(V.a,{variant:"h6"},"Calendar"))),o.a.createElement("div",{className:"flex items-center"},o.a.createElement(oe.a,{title:"Today"},o.a.createElement("div",null,o.a.createElement(s.d,{animation:"transition.expandIn",delay:500},o.a.createElement(q.a,{"aria-label":"today",onClick:this.navigate.bind(null,de.navigate.TODAY)},o.a.createElement(c.a,null,"today"))))),this.viewButtons())),o.a.createElement(s.d,{delay:500},o.a.createElement("div",{className:"flex items-center justify-center"},o.a.createElement(oe.a,{title:"Previous"},o.a.createElement(q.a,{"aria-label":"Previous",onClick:this.navigate.bind(null,de.navigate.PREVIOUS)},o.a.createElement(c.a,null,"chevron_left"))),o.a.createElement(V.a,{variant:"h6"},n),o.a.createElement(oe.a,{title:"Next"},o.a.createElement(q.a,{"aria-label":"Next",onClick:this.navigate.bind(null,de.navigate.NEXT)},o.a.createElement(c.a,null,"chevron_right"))))))))}}]),t}(se.a);var be=Object(ue.a)(function(e){return{mainThemeDark:e.fuse.settings.mainThemeDark}})(Object(ie.a)(function(e){return{root:{backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:"#FAFAFA",color:"#FFFFFF",backgroundSize:"cover",backgroundPosition:"0 50%",backgroundRepeat:"no-repeat","&:before":{content:"''",position:"absolute",top:0,right:0,bottom:0,left:0,zIndex:1,background:"rgba(0, 0, 0, 0.45)"},"&.Jan":{backgroundImage:"url('/assets/images/calendar/winter.jpg')",backgroundPosition:"0 85%"},"&.Feb":{backgroundImage:"url('/assets/images/calendar/winter.jpg')",backgroundPosition:"0 85%"},"&.Mar":{backgroundImage:"url('/assets/images/calendar/spring.jpg')",backgroundPosition:"0 40%"},"&.Apr":{backgroundImage:"url('/assets/images/calendar/spring.jpg')",backgroundPosition:"0 40%"},"&.May":{backgroundImage:"url('/assets/images/calendar/spring.jpg')",backgroundPosition:"0 40%"},"&.Jun":{backgroundImage:"url('/assets/images/calendar/summer.jpg')",backgroundPosition:"0 80%"},"&.Jul":{backgroundImage:"url('/assets/images/calendar/summer.jpg')",backgroundPosition:"0 80%"},"&.Aug":{backgroundImage:"url('/assets/images/calendar/summer.jpg')",backgroundPosition:"0 80%"},"&.Sep":{backgroundImage:"url('/assets/images/calendar/autumn.jpg')",backgroundPosition:"0 40%"},"&.Oct":{backgroundImage:"url('/assets/images/calendar/autumn.jpg')",backgroundPosition:"0 40%"},"&.Nov":{backgroundImage:"url('/assets/images/calendar/autumn.jpg')",backgroundPosition:"0 40%"},"&.Dec":{backgroundImage:"url('/assets/images/calendar/winter.jpg')",backgroundPosition:"0 85%"}}}},{withTheme:!0})(pe)),ge=a(17);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var he=Object(u.c)(g.a),ye=p()(u.a),Ee=Object.keys(u.b).map(function(e){return u.b[e]}),we=Object(l.a)(function(e){return{root:{"& .rbc-header":{padding:"12px 6px",fontWeight:600,fontSize:14},"& .rbc-label":{padding:"8px 6px"},"& .rbc-today":{backgroundColor:"transparent"},"& .rbc-header.rbc-today, & .rbc-month-view .rbc-day-bg.rbc-today":{borderBottom:"2px solid "+e.palette.secondary.main+"!important"},"& .rbc-month-view, & .rbc-time-view, & .rbc-agenda-view":ve(Object(n.a)({padding:24},e.breakpoints.down("sm"),{padding:16}),e.mixins.border(0)),"& .rbc-agenda-view table":ve({},e.mixins.border(1),{"& thead > tr > th":ve({},e.mixins.borderBottom(0)),"& tbody > tr > td":{padding:"12px 6px","& + td":ve({},e.mixins.borderLeft(1))}}),"& .rbc-time-view":{"& .rbc-time-header":ve({},e.mixins.border(1)),"& .rbc-time-content":ve({flex:"0 1 auto"},e.mixins.border(1))},"& .rbc-month-view":{"& > .rbc-row":ve({},e.mixins.border(1)),"& .rbc-month-row":ve({},e.mixins.border(1),{borderWidth:"0 1px 1px 1px!important",minHeight:128}),"& .rbc-header + .rbc-header":ve({},e.mixins.borderLeft(1)),"& .rbc-header":ve({},e.mixins.borderBottom(0)),"& .rbc-day-bg + .rbc-day-bg":ve({},e.mixins.borderLeft(1))},"& .rbc-day-slot .rbc-time-slot":ve({},e.mixins.borderTop(1),{opacity:.5}),"& .rbc-time-header > .rbc-row > * + *":ve({},e.mixins.borderLeft(1)),"& .rbc-time-content > * + * > *":ve({},e.mixins.borderLeft(1)),"& .rbc-day-bg + .rbc-day-bg":ve({},e.mixins.borderLeft(1)),"& .rbc-time-header > .rbc-row:first-child":ve({},e.mixins.borderBottom(1)),"& .rbc-timeslot-group":ve({minHeight:64},e.mixins.borderBottom(1)),"& .rbc-date-cell":{padding:8,fontSize:16,fontWeight:400,opacity:.5,"& > a":{color:"inherit"}},"& .rbc-event":{borderRadius:4,padding:"4px 8px",backgroundColor:e.palette.primary.dark,color:e.palette.primary.contrastText,boxShadow:e.shadows[0],transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,position:"relative","&:hover":{boxShadow:e.shadows[2]}},"& .rbc-row-segment":{padding:"0 4px 4px 4px"},"& .rbc-off-range-bg":{backgroundColor:"light"===e.palette.type?"rgba(0,0,0,0.03)":"rgba(0,0,0,0.16)"},"& .rbc-show-more":{color:e.palette.secondary.main,background:"transparent"},"& .rbc-addons-dnd .rbc-addons-dnd-resizable-month-event":{position:"static"},"& .rbc-addons-dnd .rbc-addons-dnd-resizable-month-event .rbc-addons-dnd-resize-month-event-anchor:first-child":{left:0,top:0,bottom:0,height:"auto"},"& .rbc-addons-dnd .rbc-addons-dnd-resizable-month-event .rbc-addons-dnd-resize-month-event-anchor:last-child":{right:0,top:0,bottom:0,height:"auto"}},addButton:{position:"absolute",right:12,top:172,zIndex:99}}});t.default=Object(v.a)("calendarApp",M)(function(e){var t=Object(d.b)(),a=Object(d.c)(function(e){return e.calendarApp.events.entities}),n=we(e),l=Object(r.useRef)(null);return Object(r.useEffect)(function(){t(A())},[t]),o.a.createElement("div",{className:Object(f.a)(n.root,"flex flex-col flex-auto relative")},o.a.createElement("div",{ref:l}),o.a.createElement(ye,{className:"flex flex-1 container",selectable:!0,localizer:he,events:a,onEventDrop:function(e){var a=e.event,n=e.start,r=e.end;t(I(ve({},a,{start:n,end:r})))},resizable:!0,onEventResize:function(e){var a=e.event,n=e.start,r=e.end;delete a.type,t(I(ve({},a,{start:n,end:r})))},defaultView:u.b.MONTH,defaultDate:new Date(2018,3,1),startAccessor:"start",endAccessor:"end",views:Ee,step:60,showMultiDayTimes:!0,components:{toolbar:function(e){return l.current?ge.createPortal(o.a.createElement(be,e),l.current):null}},onSelectEvent:function(e){t({type:j,data:e})},onSelectSlot:function(e){return t(N({start:e.start.toLocaleString(),end:e.end.toLocaleString()}))}}),o.a.createElement(s.d,{animation:"transition.expandIn",delay:500},o.a.createElement(i.a,{color:"secondary","aria-label":"add",className:n.addButton,onClick:function(){return t(N({start:new Date,end:new Date}))}},o.a.createElement(c.a,null,"add"))),o.a.createElement($,null))})}}]);