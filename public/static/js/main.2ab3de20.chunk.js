(this.webpackJsonpams=this.webpackJsonpams||[]).push([[0],{183:function(e,t,c){},545:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(51),n=c.n(r),i=(c(183),c(26)),l=c(21),o=c(7),j=c.n(o),d=c(61),b=c.n(d),u=c(558),h=c.p+"static/media/logo.49e95c77.png",O=c(2),x=function(e){var t=e.styles;return Object(O.jsx)("div",{className:t.header,children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)("div",{className:t.miniCircle,children:Object(O.jsx)("img",{src:h,alt:"LBAN"})}),Object(O.jsx)("h5",{children:"Lotus Beta Analytics Nigeria Limited"})]})})},m=c(566),p=c(569),f=c(561),v=c(562),g=function(e){var t=e.history,c=s.a.useRef(null),a=s.a.useCallback((function(){var e=c.current.getScreenshot().substring(23);localStorage.setItem("media1",e),t.push("/verify")}),[c,t]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(x,{styles:j.a}),Object(O.jsxs)("div",{className:j.a.form,children:[Object(O.jsx)("div",{className:"".concat(j.a.formContainer),children:Object(O.jsx)(i.b,{to:"/enroll",children:Object(O.jsx)(m.a,{colorScheme:"teal",children:"Go Back"})})}),Object(O.jsxs)("form",{onSubmit:a,children:[Object(O.jsxs)("div",{className:"".concat(j.a.formContainer),children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h3",{children:"Take a Picture"})}),Object(O.jsxs)(u.a,{children:[Object(O.jsxs)(p.a,{status:"warning",children:[Object(O.jsx)(p.c,{}),"Make sure your face is visible"]}),Object(O.jsxs)(p.a,{status:"info",children:[Object(O.jsx)(p.c,{}),"Take off your Face Mask"]}),Object(O.jsxs)(p.a,{status:"error",children:[Object(O.jsx)(p.c,{}),"Do not take Picture in a dark place"]})]}),Object(O.jsx)(f.a,{}),Object(O.jsx)(u.a,{children:Object(O.jsx)(b.a,{audio:!1,height:400,ref:c,screenshotFormat:"image/jpeg",width:400,videoConstraints:{width:400,height:400,facingMode:"user"}})})]}),Object(O.jsx)(u.a,{children:Object(O.jsx)(v.a,{style:{width:"50%"},children:Object(O.jsx)(m.a,{type:"submit",colorScheme:"teal",value:"Next",isFullWidth:!0,children:"Next"})})})]})]})]})})},y=c(9),N=c(568),S=c(567),C=c(19),_=c(27),k=c.n(_),E=c(96),F=c(97),R=c.n(F),w="USER_REGISTER_REQUEST",T="USER_REGISTER_SUCCESS",I="USER_REGISTER_FAIL",U="USER_REGISTER_RESET",L="USER_CLOCKIN_REQUEST",B="USER_CLOCKIN_SUCCESS",G="USER_CLOCKIN_FAIL",A="USER_CLOCKIN_RESET",D="USER_CLOCKOUT_REQUEST",M="USER_CLOCKOUT_SUCCESS",K="USER_CLOCKOUT_FAIL",P="USER_CLOCKOUT_RESET",W=function(e){var t=e.history,c=Object(a.useState)(""),r=Object(y.a)(c,2),n=r[0],l=r[1],o=Object(a.useState)(""),d=Object(y.a)(o,2),h=d[0],p=d[1],f=Object(a.useState)(""),g=Object(y.a)(f,2),_=g[0],F=g[1],w=Object(a.useState)(""),T=Object(y.a)(w,2),I=T[0],U=T[1],A=Object(a.useState)(""),D=Object(y.a)(A,2),M=D[0],K=D[1],P=Object(a.useState)(""),W=Object(y.a)(P,2),q=W[0],H=W[1],J=Object(a.useState)(!1),Q=Object(y.a)(J,2),z=Q[0],V=Q[1],Z=s.a.useRef(null),X=s.a.useCallback((function(){var e=Z.current.getScreenshot();K(e.substring(23)),V(!0),H(e)}),[Z]),Y=Object(C.b)(),$=Object(C.c)((function(e){return e.userClockin})),ee=$.loading,te=$.error;$.success&&t.push("/success"),te&&t.push("/error");return Object(a.useEffect)((function(){navigator.geolocation?(p("Locating..."),navigator.geolocation.getCurrentPosition((function(e){p(null),F(e.coords.latitude),U(e.coords.longitude)}),(function(){p("Unable to retrieve your location")}))):p("Geolocation is not supported by your browser")}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(x,{styles:j.a}),h&&Object(O.jsx)("div",{className:"alert alert-info",children:h}),Object(O.jsxs)("div",{className:j.a.form,children:[Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)(m.a,{colorScheme:"teal",children:"Go Back"})})}),!z&&Object(O.jsxs)("form",{onSubmit:X,children:[Object(O.jsxs)("div",{className:"".concat(j.a.formContainer),children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h3",{children:"Take a Picture"})}),Object(O.jsx)(u.a,{children:Object(O.jsx)(b.a,{audio:!1,height:400,ref:Z,screenshotFormat:"image/jpeg",width:400,videoConstraints:{width:400,height:400,facingMode:"user"}})})]}),Object(O.jsx)(u.a,{children:Object(O.jsx)(v.a,{style:{width:"50%"},children:Object(O.jsx)(m.a,{type:"submit",colorScheme:"teal",value:"Next",isFullWidth:!0,children:"Take Picture"})})})]}),ee?Object(O.jsx)(u.a,{children:Object(O.jsx)(N.a,{isIndeterminate:!0,color:"green.300"})}):z&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("img",{src:q,alt:"User",width:"300",height:"300"})}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_||I?Y(function(e,t,c,a){return function(){var s=Object(E.a)(k.a.mark((function s(r){var n,i;return k.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r({type:L}),s.prev=1,s.next=4,R.a.post("https://vmsapi.lotusbetaanalytics.com/api/Attendance/clockin",{identity:e,latitude:t,media1:c,longitude:a});case 4:n=s.sent,i=n.data,r({type:B,payload:i}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(1),r({type:G,payload:s.t0.response&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message});case 12:case"end":return s.stop()}}),s,null,[[1,9]])})));return function(e){return s.apply(this,arguments)}}()}(n,_,M,I)):p("Geolocation is not supported by your browser")},children:[Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(S.a,{type:"email",className:"form-control",onChange:function(e){return l(e.target.value)},placeholder:"Email Address",value:n})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)(m.a,{type:"submit",colorScheme:"teal",value:"Next",isFullWidth:!0,style:{padding:"2rem"},children:"Clockin"})})})]})]})]})]})})},q=c(164),H=c.n(q),J=function(){return Object(O.jsx)("div",{style:{width:"100%",height:"100vh",position:"absolute"},children:Object(O.jsx)(H.a,{height:window.outerHeight,params:{particles:{number:{value:150,density:{enable:!0}},color:{value:["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]},size:{value:8,random:!0},move:{direction:"bottom",out_mode:"out"},line_linked:{enable:!1}},interactivity:{events:{onclick:{enable:!0}},modes:{remove:{particles_nb:10}}}}})})},Q=c(62),z=function(e){var t=e.history,c=Object(C.b)(),s=Object(C.c)((function(e){return e.userClockin})).error;return Object(a.useEffect)((function(){setTimeout((function(){c({type:A}),c({type:U}),t.push("/")}),5e3)}),[t,c]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(J,{}),Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(x,{styles:j.a}),Object(O.jsx)("div",{className:j.a.form,children:Object(O.jsxs)("div",{className:j.a.center,children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:s})})}),Object(O.jsx)("div",{className:"".concat(j.a.circle," ").concat(j.a.error),children:Object(O.jsx)(u.a,{children:Object(O.jsx)(Q.b,{})})})]})})]})]})},V=function(e){var t=e.history,c=Object(C.b)(),s=Object(C.c)((function(e){return e.userClockin})).clockin;return Object(a.useEffect)((function(){setTimeout((function(){c({type:A}),t.push("/")}),5e3)}),[t,c]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(J,{}),Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(x,{styles:j.a}),Object(O.jsx)("div",{className:j.a.form,children:Object(O.jsxs)("div",{className:j.a.center,children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:s})})}),Object(O.jsx)("div",{className:"".concat(j.a.circle," ").concat(j.a.green),children:Object(O.jsx)(u.a,{children:Object(O.jsx)(Q.a,{})})})]})})]})]})},Z=function(e){var t=e.history,c=Object(a.useState)(""),s=Object(y.a)(c,2),r=s[0],n=s[1],l=Object(C.b)(),o=Object(C.c)((function(e){return e.userClockout})),d=o.loading,b=o.error;return o.success&&t.push("/clockoutsuccess"),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(x,{styles:j.a}),d?Object(O.jsx)(u.a,{children:Object(O.jsx)(N.a,{isIndeterminate:!0,color:"green.300"})}):Object(O.jsxs)("div",{className:j.a.form,children:[Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)(m.a,{colorScheme:"teal",children:"Go Back"})})}),b&&Object(O.jsx)(p.a,{colorScheme:"red",children:b}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(function(e){return function(){var t=Object(E.a)(k.a.mark((function t(c){var a,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:D}),t.prev=1,t.next=4,R.a.post("https://vmsapi.lotusbetaanalytics.com/api/Attendance/clockout",{identity:e});case 4:a=t.sent,s=a.data,c({type:M,payload:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),c({type:K,payload:t.t0.response&&t.t0.response.data.error?t.t0.response.data.error:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(r))},children:[Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(S.a,{type:"email",className:"form-control",onChange:function(e){return n(e.target.value)},placeholder:"Email Address",value:r})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)("div",{className:"col-md-3 float-end",children:Object(O.jsx)(m.a,{type:"submit",colorScheme:"teal",value:"Next",isFullWidth:!0,children:"ClockOut"})})})]})]})]})})},X=function(e){var t=e.history,c=Object(C.b)(),s=Object(C.c)((function(e){return e.userClockout})).clockout;return Object(a.useEffect)((function(){setTimeout((function(){c({type:P}),t.push("/")}),5e3)}),[t,c]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(J,{}),Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(x,{styles:j.a}),Object(O.jsx)("div",{className:j.a.form,children:Object(O.jsxs)("div",{className:j.a.center,children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:s})})}),Object(O.jsx)("div",{className:"".concat(j.a.circle," ").concat(j.a.green),children:Object(O.jsx)(u.a,{children:Object(O.jsx)(Q.a,{})})})]})})]})]})},Y=function(e){var t=e.history,c=Object(a.useState)(""),s=Object(y.a)(c,2),r=s[0],n=s[1],l=Object(a.useState)(""),o=Object(y.a)(l,2),d=o[0],b=o[1],u=Object(a.useState)(""),h=Object(y.a)(u,2),p=h[0],f=h[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(x,{styles:j.a}),Object(O.jsxs)("div",{className:j.a.form,children:[Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)(m.a,{colorScheme:"teal",children:"Go Back"})})}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),localStorage.setItem("firstName",r),localStorage.setItem("lastName",d),localStorage.setItem("email",p),t.push("/capture")},children:[Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(S.a,{type:"text",className:"form-control",onChange:function(e){return n(e.target.value)},placeholder:"First Name",style:{padding:"2rem"}})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(S.a,{type:"text",className:"form-control",onChange:function(e){return b(e.target.value)},placeholder:"Last Name",style:{padding:"2rem"}})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)(S.a,{type:"text",className:"form-control",onChange:function(e){return f(e.target.value)},placeholder:"Email Address",style:{padding:"2rem"}})}),Object(O.jsx)("div",{className:j.a.formContainer,children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)(m.a,{type:"submit",colorScheme:"teal",value:"Next",isFullWidth:!0,style:{padding:"2rem"},children:"Next"})})})]})]})]})})},$=c(98),ee=function(){var e=new Date,t=(new Date).toUTCString().slice(0,16),c=e.getHours()+":"+e.getMinutes(),s=Object(C.b)();return Object(a.useEffect)((function(){s({type:P}),s({type:U})}),[s]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(J,{}),Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(x,{styles:j.a}),Object(O.jsxs)("div",{className:j.a.center,children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h1",{children:Object(O.jsx)("b",{children:c})})}),Object(O.jsx)(u.a,{children:Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:t})})}),Object(O.jsxs)("div",{className:j.a.circleGrid,children:[Object(O.jsx)(i.b,{to:"/enroll",children:Object(O.jsxs)("div",{className:"".concat(j.a.circle," ").concat(j.a.green),children:[Object(O.jsx)(u.a,{children:Object(O.jsx)($.b,{})}),Object(O.jsx)("h3",{children:"Enrollment"})]})}),Object(O.jsx)(i.b,{to:"/clockin",children:Object(O.jsxs)("div",{className:"".concat(j.a.circle," ").concat(j.a.blue),children:[Object(O.jsx)(u.a,{children:Object(O.jsx)($.c,{})}),Object(O.jsx)("h3",{children:"Clockin"})]})}),Object(O.jsx)(i.b,{to:"/clockout",children:Object(O.jsxs)("div",{className:"".concat(j.a.circle," ").concat(j.a.red),children:[Object(O.jsx)(u.a,{children:Object(O.jsx)($.a,{})}),Object(O.jsx)("h3",{children:"Clockout"})]})})]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:j.a.header,children:Object(O.jsx)(u.a,{children:Object(O.jsx)("h5",{children:"\xa9 Lotus Beta Analytics"})})})]})]})},te=c(564),ce=function(e){var t=e.history,c=Object(te.a)(),a=Object(C.b)(),r=Object(C.c)((function(e){return e.userRegistration})),n=r.loading,l=r.error,o=r.success,d=s.a.useRef(null),h=s.a.useCallback((function(){var e=d.current.getScreenshot(),t=localStorage.getItem("firstName"),c=localStorage.getItem("lastName"),s=localStorage.getItem("email"),r=localStorage.getItem("media1");localStorage.setItem("media2",e);var n=localStorage.getItem("media2").substring(23);a(function(e,t,c,a,s){return function(){var r=Object(E.a)(k.a.mark((function r(n){var i,l;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n({type:w}),r.prev=1,r.next=4,R.a.post("https://vmsapi.lotusbetaanalytics.com/api/Attendance/register",{firstName:e,lastName:t,email:c,media1:a,media2:s});case 4:i=r.sent,l=i.data,n({type:T,payload:l}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),n({type:I,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}(t,c,s,r,n))}),[d,a]);return o&&(t.push("/success"),c({title:"Training takes 5-10 Mins, you can only clockin after sucessful training",status:"success",isClosable:!0})),l&&c({title:l,status:"error",isClosable:!0}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:j.a.app,children:[Object(O.jsx)(x,{styles:j.a}),Object(O.jsxs)("div",{className:j.a.form,children:[Object(O.jsx)("div",{className:"".concat(j.a.formContainer),children:Object(O.jsx)(i.b,{to:"/capture",children:Object(O.jsx)(m.a,{colorScheme:"teal",children:"Go Back"})})}),n?Object(O.jsx)("div",{}):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{onSubmit:h,children:[Object(O.jsxs)("div",{className:"".concat(j.a.formContainer," text-center"),children:[Object(O.jsx)(u.a,{children:Object(O.jsx)("h3",{children:"Take another Picture"})}),Object(O.jsxs)(u.a,{children:[Object(O.jsxs)(p.a,{status:"warning",children:[Object(O.jsx)(p.c,{}),"Make sure your face is visible"]}),Object(O.jsxs)(p.a,{status:"info",children:[Object(O.jsx)(p.c,{}),"Take off your Face Mask"]}),Object(O.jsxs)(p.a,{status:"error",children:[Object(O.jsx)(p.c,{}),"Do not take Picture in a dark place"]})]}),Object(O.jsx)(f.a,{}),Object(O.jsx)(u.a,{children:Object(O.jsx)(b.a,{audio:!1,height:400,ref:d,screenshotFormat:"image/jpeg",width:400,videoConstraints:{width:400,height:400,facingMode:"user"}})})]}),Object(O.jsx)(u.a,{children:Object(O.jsx)(v.a,{style:{width:"50%"},children:Object(O.jsx)(m.a,{type:"submit",colorScheme:"teal",value:"Next",isFullWidth:!0,children:"Enrol"})})})]})})]})]}),Object(O.jsxs)("div",{className:j.a.tab,children:[Object(O.jsx)(i.b,{to:"/capture",children:Object(O.jsx)("div",{className:j.a.square,children:"Capture Screen"})}),Object(O.jsx)(i.b,{to:"/clockout",children:Object(O.jsx)("div",{className:j.a.square,children:"Clockout"})})]})]})};var ae=function(){return Object(O.jsx)(i.a,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,component:ee}),Object(O.jsx)(l.a,{path:"/enroll",exact:!0,component:Y}),Object(O.jsx)(l.a,{path:"/capture",exact:!0,component:g}),Object(O.jsx)(l.a,{path:"/verify",exact:!0,component:ce}),Object(O.jsx)(l.a,{path:"/success",exact:!0,component:V}),Object(O.jsx)(l.a,{path:"/error",exact:!0,component:z}),Object(O.jsx)(l.a,{path:"/clockin",exact:!0,component:W}),Object(O.jsx)(l.a,{path:"/clockout",exact:!0,component:Z}),Object(O.jsx)(l.a,{path:"/clockoutsuccess",exact:!0,component:X})]})})},se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,570)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),r(e),n(e)}))},re=c(565),ne=c(72),ie=c(167),le=c(168),oe=Object(ne.combineReducers)({userRegistration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case T:return{loading:!1,register:t.payload,success:!0};case I:return{loading:!1,error:t.payload};case U:return{};default:return e}},userClockin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{loading:!0};case B:return{loading:!1,clockin:t.payload.response,success:!0};case G:return{loading:!1,error:t.payload};case A:return{};default:return e}},userClockout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return{loading:!0};case M:return{loading:!1,success:!0,clockout:t.payload.response};case K:return{loading:!1,error:t.payload};case P:return{};default:return e}}}),je=[ie.a],de=Object(ne.createStore)(oe,{},Object(le.composeWithDevTools)(ne.applyMiddleware.apply(void 0,je)));n.a.render(Object(O.jsx)(C.a,{store:de,children:Object(O.jsx)(re.a,{children:Object(O.jsx)(ae,{})})}),document.getElementById("root")),se()},7:function(e,t,c){e.exports={app:"styles_app__1LNKg",header:"styles_header__2qSeF",miniCircle:"styles_miniCircle__32B7c",center:"styles_center__3asL7",circleGrid:"styles_circleGrid__3TWZR",circle:"styles_circle__3wW1U",blue:"styles_blue__5MR_V",green:"styles_green__1paFa",red:"styles_red__392DB",error:"styles_error__3IHTi",form:"styles_form__1dqCA",formContainer:"styles_formContainer__3_KHJ"}}},[[545,1,2]]]);
//# sourceMappingURL=main.2ab3de20.chunk.js.map