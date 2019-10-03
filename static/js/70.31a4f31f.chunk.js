(window["webpackJsonpfuse-react-app"]=window["webpackJsonpfuse-react-app"]||[]).push([[70],{1044:function(e,a,t){"use strict";var n=t(1),o=t(6),i=t(0),c=t.n(i),l=(t(2),t(3)),r=t(9),s=t(122),m=c.a.forwardRef(function(e,a){var t=e.children,i=e.classes,r=e.className,m=e.disableTypography,d=void 0!==m&&m,p=Object(o.a)(e,["children","classes","className","disableTypography"]);return c.a.createElement("div",Object(n.a)({className:Object(l.a)(i.root,r),ref:a},p),d?t:c.a.createElement(s.a,{component:"h2",variant:"h6"},t))});a.a=Object(r.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(m)},1099:function(e,a,t){"use strict";var n=t(1),o=t(0),i=t.n(o),c=(t(2),t(9)),l=t(122),r=i.a.forwardRef(function(e,a){return i.a.createElement(l.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:a},e))});a.a=Object(c.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(r)},2311:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(883),c=t(122),l=t(892),r=t(1044),s=t(986),m=t(1099),d=t(992),p=t(13),g=t(7),u=t(19);a.default=function(e){var a=Object(g.b)();return o.a.createElement(p.t,{header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(i.a,{className:"text-18",color:"action"},"home"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(c.a,{color:"textSecondary"},"Documentation"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(c.a,{color:"textSecondary"},"Fuse Components")),o.a.createElement(c.a,{variant:"h6"},"FuseDialog"))),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(c.a,{className:"mb-16",component:"p"},o.a.createElement("code",null,"FuseDialog")," is a simple dialog trigger for easily showing dialog messages via redux action. It should be located in the theme layouts."),o.a.createElement(c.a,{className:"mt-32 mb-8",variant:"h5"},"Usage"),o.a.createElement(c.a,{className:"mb-16",component:"p"},"You can show dialog anywhere with dispatching the action openDialog, its using Material-UI's dialog so you can pass the props in the object:"),o.a.createElement(p.l,{component:"pre",className:"language-jsx"},'\n                        <Button\n                            onClick={()=> dispatch(Actions.openDialog({\n                                children: (\n                                    <React.Fragment>\n                                        <DialogTitle id="alert-dialog-title">Use Google\'s location service?</DialogTitle>\n                                        <DialogContent>\n                                            <DialogContentText id="alert-dialog-description">\n                                                Let Google help apps determine location. This means sending anonymous location data to\n                                                Google, even when no apps are running.\n                                            </DialogContentText>\n                                        </DialogContent>\n                                        <DialogActions>\n                                            <Button onClick={()=> dispatch(Actions.closeDialog())} color="primary">\n                                                Disagree\n                                            </Button>\n                                            <Button onClick={()=> dispatch(Actions.closeDialog())} color="primary" autoFocus>\n                                                Agree\n                                            </Button>\n                                        </DialogActions>\n                                    </React.Fragment>\n                                     )\n                                 }))}\n                            variant="contained"\n                            color="secondary"\n                        >\n                            Open Dialog\n                        </Button>\n                        '),o.a.createElement(c.a,{className:"mt-32 mb-8",variant:"h5"},"Example"),o.a.createElement(l.a,{onClick:function(){return a(u.h({children:o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{id:"alert-dialog-title"},"Use Google's location service?"),o.a.createElement(s.a,null,o.a.createElement(m.a,{id:"alert-dialog-description"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),o.a.createElement(d.a,null,o.a.createElement(l.a,{onClick:function(){return a(u.b())},color:"primary"},"Disagree"),o.a.createElement(l.a,{onClick:function(){return a(u.b())},color:"primary",autoFocus:!0},"Agree")))}))},variant:"contained",color:"secondary"},"Open Dialog"))})}},986:function(e,a,t){"use strict";var n=t(1),o=t(6),i=t(0),c=t.n(i),l=(t(2),t(3)),r=t(9),s=c.a.forwardRef(function(e,a){var t=e.classes,i=e.className,r=e.dividers,s=void 0!==r&&r,m=Object(o.a)(e,["classes","className","dividers"]);return c.a.createElement("div",Object(n.a)({className:Object(l.a)(t.root,i,s&&t.dividers),ref:a},m))});a.a=Object(r.a)(function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}},{name:"MuiDialogContent"})(s)},992:function(e,a,t){"use strict";var n=t(1),o=t(6),i=t(0),c=t.n(i),l=(t(2),t(3)),r=t(9),s=c.a.forwardRef(function(e,a){var t=e.disableSpacing,i=void 0!==t&&t,r=e.classes,s=e.className,m=Object(o.a)(e,["disableSpacing","classes","className"]);return c.a.createElement("div",Object(n.a)({className:Object(l.a)(r.root,s,!i&&r.spacing),ref:a},m))});a.a=Object(r.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiDialogActions"})(s)}}]);