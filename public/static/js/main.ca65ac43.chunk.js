(this.webpackJsonpams=this.webpackJsonpams||[]).push([[0],{182:function(e,t,c){},544:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(51),n=c.n(r),i=(c(182),c(21)),l=c(20),o=c(7),j=c.n(o),d=c(61),b=c.n(d),u=c(557),h=c.p+"static/media/logo.49e95c77.png",O=c(2),m=function(e){var t=e.styles;return Object(O.jsx)("div",{className:t.header,children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)("div",{className:t.miniCircle,children:Object(O.jsx)("img",{src:h,alt:"LBAN"})}),Object(O.jsx)("h5",{children:"Lotus Beta Analytics Nigeria Limited"})]})})},x=c(558),p=c(565),v=function(e){var t=e.history,c=a.a.useRef(null),s=a.a.useCallback((function(){var e=c.current.getScreenshot().substring(23);localStorage.setItem("media1",e),t.push("/verify")}),[c,t]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(m,{styles:j.a}),Object(O.jsx)("div",{className:j.a.form,children:Object(O.jsxs)("form",{onSubmit:s,children:[Object(O.jsxs)("div",{className:"".concat(j.a.formContainer),children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h3",{children:"Take a Picture"})}),Object(O.jsx)(u.a,{children:Object(O.jsx)(b.a,{audio:!1,height:400,ref:c,screenshotFormat:"image/jpeg",width:400,videoConstraints:{width:400,height:400,facingMode:"user"}})})]}),Object(O.jsx)(u.a,{children:Object(O.jsx)(x.a,{style:{width:"50%"},children:Object(O.jsx)(p.a,{type:"submit",colorScheme:"blue",value:"Next",isFullWidth:!0,children:"Next"})})})]})})]}),Object(O.jsxs)("div",{className:j.a.tab,children:[Object(O.jsx)(i.b,{to:"/enrol",children:Object(O.jsx)("div",{className:j.a.square,children:"Enrol"})}),Object(O.jsx)(i.b,{to:"/clockout",children:Object(O.jsx)("div",{className:j.a.square,children:"Clockout"})})]})]})},f=c(9),g=c(567),y=c(566),N=c(22),C=c(27),S=c.n(C),_=c(95),E=c(96),k=c.n(E),w="USER_REGISTER_REQUEST",R="USER_REGISTER_SUCCESS",F="USER_REGISTER_FAIL",I="USER_REGISTER_RESET",T="USER_CLOCKIN_REQUEST",U="USER_CLOCKIN_SUCCESS",L="USER_CLOCKIN_FAIL",q="USER_CLOCKIN_RESET",A="USER_CLOCKOUT_REQUEST",D="USER_CLOCKOUT_SUCCESS",K="USER_CLOCKOUT_FAIL",P="USER_CLOCKOUT_RESET",B=function(e){var t=e.history,c=Object(s.useState)(""),r=Object(f.a)(c,2),n=r[0],l=r[1],o=Object(s.useState)(""),d=Object(f.a)(o,2),h=d[0],v=d[1],C=Object(s.useState)(""),E=Object(f.a)(C,2),w=E[0],R=E[1],F=Object(s.useState)(""),I=Object(f.a)(F,2),q=I[0],A=I[1],D=Object(s.useState)(""),K=Object(f.a)(D,2),P=K[0],B=K[1],W=Object(s.useState)(""),G=Object(f.a)(W,2),H=G[0],M=G[1],J=Object(s.useState)(!1),Q=Object(f.a)(J,2),z=Q[0],V=Q[1],X=a.a.useRef(null),Y=a.a.useCallback((function(){var e=X.current.getScreenshot();B(e.substring(23)),V(!0),M(e)}),[X]),Z=Object(N.b)(),$=Object(N.c)((function(e){return e.userClockin})),ee=$.loading,te=$.error;$.success&&t.push("/success"),te&&t.push("/error");return Object(s.useEffect)((function(){navigator.geolocation?(v("Locating..."),navigator.geolocation.getCurrentPosition((function(e){v(null),R(e.coords.latitude),A(e.coords.longitude)}),(function(){v("Unable to retrieve your location")}))):v("Geolocation is not supported by your browser")}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(m,{styles:j.a}),h&&Object(O.jsx)("div",{className:"alert alert-info",children:h}),Object(O.jsxs)("div",{className:j.a.form,children:[!z&&Object(O.jsxs)("form",{onSubmit:Y,children:[Object(O.jsxs)("div",{className:"".concat(j.a.formContainer),children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h3",{children:"Take a Picture"})}),Object(O.jsx)(u.a,{children:Object(O.jsx)(b.a,{audio:!1,height:400,ref:X,screenshotFormat:"image/jpeg",width:400,videoConstraints:{width:400,height:400,facingMode:"user"}})})]}),Object(O.jsx)(u.a,{children:Object(O.jsx)(x.a,{style:{width:"50%"},children:Object(O.jsx)(p.a,{type:"submit",colorScheme:"blue",value:"Next",isFullWidth:!0,children:"Take Picture"})})})]}),ee?Object(O.jsx)(u.a,{children:Object(O.jsx)(g.a,{isIndeterminate:!0,color:"green.300"})}):z&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("img",{src:H,alt:"User",width:"300",height:"300"})}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w||q?Z(function(e,t,c,s){return function(){var a=Object(_.a)(S.a.mark((function a(r){var n,i;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:T}),a.prev=1,a.next=4,k.a.post("https://vmsapi.lotusbetaanalytics.com/api/Attendance/clockin",{identity:e,latitude:t,media1:c,longitude:s});case 4:n=a.sent,i=n.data,r({type:U,payload:i}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),r({type:L,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}(n,w,P,q)):v("Geolocation is not supported by your browser")},children:[Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(y.a,{type:"password",className:"form-control",onChange:function(e){return l(e.target.value)},placeholder:"Enter your Pin",value:n})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)(p.a,{type:"submit",colorScheme:"blue",value:"Next",isFullWidth:!0,style:{padding:"2rem"},children:"Clockin"})})})]})]})]})]}),Object(O.jsxs)("div",{className:j.a.tab,children:[Object(O.jsx)(i.b,{to:"/enrol",children:Object(O.jsx)("div",{className:j.a.square,children:"Enrol"})}),Object(O.jsx)(i.b,{to:"/clockout",children:Object(O.jsx)("div",{className:j.a.square,children:"Clockout"})})]})]})},W=c(163),G=c.n(W),H=function(){return Object(O.jsx)("div",{style:{width:"100%",height:"100vh",position:"absolute"},children:Object(O.jsx)(G.a,{height:window.outerHeight,params:{particles:{number:{value:150,density:{enable:!0}},color:{value:["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]},size:{value:8,random:!0},move:{direction:"bottom",out_mode:"out"},line_linked:{enable:!1}},interactivity:{events:{onclick:{enable:!0}},modes:{remove:{particles_nb:10}}}}})})},M=c(62),J=function(e){var t=e.history,c=Object(N.b)(),a=Object(N.c)((function(e){return e.userClockin})).error;return Object(s.useEffect)((function(){setTimeout((function(){c({type:q}),t.push("/")}),5e3)}),[t,c]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H,{}),Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(m,{styles:j.a}),Object(O.jsx)("div",{className:j.a.form,children:Object(O.jsxs)("div",{className:j.a.center,children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:a})})}),Object(O.jsx)("div",{className:"".concat(j.a.circle," ").concat(j.a.error),children:Object(O.jsx)(u.a,{children:Object(O.jsx)(M.b,{})})})]})})]})]})},Q=function(e){var t=e.history,c=Object(N.b)(),a=Object(N.c)((function(e){return e.userClockin})).clockin;return Object(s.useEffect)((function(){setTimeout((function(){c({type:q}),t.push("/")}),5e3)}),[t,c]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H,{}),Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(m,{styles:j.a}),Object(O.jsx)("div",{className:j.a.form,children:Object(O.jsxs)("div",{className:j.a.center,children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:a})})}),Object(O.jsx)("div",{className:j.a.circle,children:Object(O.jsx)(u.a,{children:Object(O.jsx)(M.a,{})})})]})})]})]})},z=c(568),V=function(e){var t=e.history,c=Object(s.useState)(""),a=Object(f.a)(c,2),r=a[0],n=a[1],l=Object(N.b)(),o=Object(N.c)((function(e){return e.userClockout})),d=o.loading,b=o.error;return o.success&&t.push("/clockoutsuccess"),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(m,{styles:j.a}),d?Object(O.jsx)(u.a,{children:Object(O.jsx)(g.a,{isIndeterminate:!0,color:"green.300"})}):Object(O.jsxs)("div",{className:j.a.form,children:[b&&Object(O.jsx)(z.a,{colorScheme:"red",children:b}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(function(e){return function(){var t=Object(_.a)(S.a.mark((function t(c){var s,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:A}),t.prev=1,t.next=4,k.a.post("https://vmsapi.lotusbetaanalytics.com/api/Attendance/clockout",{identity:e});case 4:s=t.sent,a=s.data,c({type:D,payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),c({type:K,payload:t.t0.response&&t.t0.response.data.error?t.t0.response.data.error:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(r))},children:[Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(y.a,{type:"password",className:"form-control",onChange:function(e){return n(e.target.value)},placeholder:"Pin",value:r})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)("div",{className:"col-md-3 float-end",children:Object(O.jsx)(p.a,{type:"submit",colorScheme:"blue",value:"Next",children:"ClockOut"})})})]})]})]}),Object(O.jsxs)("div",{className:j.a.tab,children:[Object(O.jsx)(i.b,{to:"/enrol",children:Object(O.jsx)("div",{className:j.a.square,children:"Enrol"})}),Object(O.jsx)(i.b,{to:"/clockin",children:Object(O.jsx)("div",{className:j.a.square,children:"Clockin"})})]})]})},X=function(e){var t=e.history,c=Object(N.b)(),a=Object(N.c)((function(e){return e.userClockout})).clockout;return Object(s.useEffect)((function(){setTimeout((function(){c({type:P}),t.push("/")}),5e3)}),[t,c]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H,{}),Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(m,{styles:j.a}),Object(O.jsx)("div",{className:j.a.form,children:Object(O.jsxs)("div",{className:j.a.center,children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:a})})}),Object(O.jsx)("div",{className:j.a.circle,children:Object(O.jsx)(u.a,{children:Object(O.jsx)(M.a,{})})})]})})]})]})},Y=function(e){var t=e.history,c=Object(s.useState)(""),a=Object(f.a)(c,2),r=a[0],n=a[1],l=Object(s.useState)(""),o=Object(f.a)(l,2),d=o[0],b=o[1],u=Object(s.useState)(""),h=Object(f.a)(u,2),x=h[0],v=h[1],g=Object(s.useState)(""),N=Object(f.a)(g,2),C=N[0],S=N[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(m,{styles:j.a}),Object(O.jsx)("div",{className:j.a.form,children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),localStorage.setItem("firstName",r),localStorage.setItem("lastName",d),localStorage.setItem("email",x),localStorage.setItem("identity",C),t.push("/capture")},children:[Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(y.a,{type:"text",className:"form-control",onChange:function(e){return n(e.target.value)},placeholder:"First Name",style:{padding:"2rem"}})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(y.a,{type:"text",className:"form-control",onChange:function(e){return b(e.target.value)},placeholder:"Last Name",style:{padding:"2rem"}})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(y.a,{type:"text",className:"form-control",onChange:function(e){return v(e.target.value)},placeholder:"Email Address",style:{padding:"2rem"}})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(y.a,{type:"password",className:"form-control",onChange:function(e){return S(e.target.value)},placeholder:"Pin",style:{padding:"2rem"},maxLength:4})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)(p.a,{type:"submit",colorScheme:"blue",value:"Next",isFullWidth:!0,style:{padding:"2rem"},children:"Next"})})})]})})]}),Object(O.jsxs)("div",{className:j.a.tab,children:[Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("div",{className:j.a.square,children:"Home"})}),Object(O.jsx)(i.b,{to:"/clockout",children:Object(O.jsx)("div",{className:j.a.square,children:"Clockout"})})]})]})},Z=c(164),$=function(){var e=new Date,t=(new Date).toUTCString().slice(0,16),c=e.getHours()+":"+e.getMinutes();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H,{}),Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(m,{styles:j.a}),Object(O.jsxs)("div",{className:j.a.center,children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h1",{children:Object(O.jsx)("b",{children:c})})}),Object(O.jsx)(u.a,{children:Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:t})})}),Object(O.jsx)(i.b,{to:"/clockin",children:Object(O.jsxs)("div",{className:j.a.circle,children:[Object(O.jsx)(u.a,{children:Object(O.jsx)(Z.a,{})}),Object(O.jsx)("h3",{children:"Clockin"})]})})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:j.a.header,children:Object(O.jsx)(u.a,{children:Object(O.jsx)("h5",{children:"\xa9 Lotus Beta Analytics"})})})]}),Object(O.jsxs)("div",{className:j.a.tab,children:[Object(O.jsx)(i.b,{to:"/enrol",children:Object(O.jsx)("div",{className:j.a.square,children:"Enrol"})}),Object(O.jsx)(i.b,{to:"/clockout",children:Object(O.jsx)("div",{className:j.a.square,children:"Clockout"})})]})]})},ee=c(563),te=function(e){var t=e.history,c=Object(ee.a)(),s=Object(N.b)(),r=Object(N.c)((function(e){return e.userRegistration})),n=r.loading,l=r.error,o=r.success,d=a.a.useRef(null),h=a.a.useCallback((function(){var e=d.current.getScreenshot(),t=localStorage.getItem("firstName"),c=localStorage.getItem("lastName"),a=localStorage.getItem("email"),r=localStorage.getItem("identity"),n=localStorage.getItem("media1");localStorage.setItem("media2",e);var i=localStorage.getItem("media2").substring(23);s(function(e,t,c,s,a,r){return function(){var n=Object(_.a)(S.a.mark((function n(i){var l,o;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i({type:w}),n.prev=1,n.next=4,k.a.post("https://vmsapi.lotusbetaanalytics.com/api/Attendance/register",{firstName:e,lastName:t,identity:c,email:s,media1:a,media2:r});case 4:l=n.sent,o=l.data,i({type:R,payload:o}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),i({type:F,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,c,r,a,n,i))}),[d,s]);return o&&t.push("/success"),l&&c({title:l,status:"error",isClosable:!0}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(m,{styles:j.a}),Object(O.jsx)("div",{className:j.a.form,children:n?Object(O.jsx)("div",{}):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{onSubmit:h,children:[Object(O.jsxs)("div",{className:"".concat(j.a.formContainer," text-center"),children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h3",{children:"Take another Picture"})}),Object(O.jsx)(u.a,{children:Object(O.jsx)(b.a,{audio:!1,height:400,ref:d,screenshotFormat:"image/jpeg",width:400,videoConstraints:{width:400,height:400,facingMode:"user"}})})]}),Object(O.jsx)(u.a,{children:Object(O.jsx)(x.a,{style:{width:"50%"},children:Object(O.jsx)(p.a,{type:"submit",colorScheme:"blue",value:"Next",isFullWidth:!0,children:"Enrol"})})})]})})})]}),Object(O.jsxs)("div",{className:j.a.tab,children:[Object(O.jsx)(i.b,{to:"/capture",children:Object(O.jsx)("div",{className:j.a.square,children:"Capture Screen"})}),Object(O.jsx)(i.b,{to:"/clockout",children:Object(O.jsx)("div",{className:j.a.square,children:"Clockout"})})]})]})};var ce=function(){return Object(O.jsx)(i.a,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,component:$}),Object(O.jsx)(l.a,{path:"/enrol",exact:!0,component:Y}),Object(O.jsx)(l.a,{path:"/capture",exact:!0,component:v}),Object(O.jsx)(l.a,{path:"/verify",exact:!0,component:te}),Object(O.jsx)(l.a,{path:"/success",exact:!0,component:Q}),Object(O.jsx)(l.a,{path:"/error",exact:!0,component:J}),Object(O.jsx)(l.a,{path:"/clockin",exact:!0,component:B}),Object(O.jsx)(l.a,{path:"/clockout",exact:!0,component:V}),Object(O.jsx)(l.a,{path:"/clockoutsuccess",exact:!0,component:X})]})})},se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,569)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))},ae=c(564),re=c(70),ne=c(167),ie=c(168),le=Object(re.combineReducers)({userRegistration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case R:return{loading:!1,register:t.payload,success:!0};case F:return{loading:!1,error:t.payload};case I:return{};default:return e}},userClockin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case U:return{loading:!1,clockin:t.payload.response,success:!0};case L:return{loading:!1,error:t.payload};case q:return{};default:return e}},userClockout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loading:!0};case D:return{loading:!1,success:!0,clockout:t.payload.response};case K:return{loading:!1,error:t.payload};case P:return{};default:return e}}}),oe=[ne.a],je=Object(re.createStore)(le,{},Object(ie.composeWithDevTools)(re.applyMiddleware.apply(void 0,oe)));n.a.render(Object(O.jsx)(N.a,{store:je,children:Object(O.jsx)(ae.a,{children:Object(O.jsx)(ce,{})})}),document.getElementById("root")),se()},7:function(e,t,c){e.exports={app:"styles_app__1LNKg",header:"styles_header__2qSeF",miniCircle:"styles_miniCircle__32B7c",center:"styles_center__3asL7",circle:"styles_circle__3wW1U",error:"styles_error__3IHTi",tab:"styles_tab__3hLDA",square:"styles_square__2sN_1",form:"styles_form__1dqCA",formContainer:"styles_formContainer__3_KHJ"}}},[[544,1,2]]]);
//# sourceMappingURL=main.ca65ac43.chunk.js.map