(this["webpackJsonphealth-app"]=this["webpackJsonphealth-app"]||[]).push([[0],{100:function(e,t,a){e.exports={root:"face_root__1mqud",logo:"face_logo__3M8TB",button:"face_button__3TgUX"}},103:function(e,t,a){e.exports={cart:"chatPage_cart__3Q0DN",userMessage:"chatPage_userMessage__1jqEn","mockchat-reply-pop":"chatPage_mockchat-reply-pop__2jw-r",botMessage:"chatPage_botMessage__31IUI"}},133:function(e,t,a){e.exports={settingsPage:"settingsPage_settingsPage__29_6q",settingsPage__header:"settingsPage_settingsPage__header__33c8Q",settingsPage__body:"settingsPage_settingsPage__body__RGJwj",settingsPage__actions:"settingsPage_settingsPage__actions__237dR"}},166:function(e,t,a){e.exports={root:"itemsMenu_root__3YySt",root__item:"itemsMenu_root__item__29As9"}},167:function(e,t,a){e.exports={root:"settingsList_root__1EiJK",header:"settingsList_header__3iOsZ"}},249:function(e,t,a){e.exports={pulse:"pulseBall_pulse__2Wv8T",animate:"pulseBall_animate__13K8b"}},253:function(e,t,a){e.exports={root:"mainPage_root__2QXY8"}},268:function(e,t,a){e.exports={root:"signUpPage_root__1dRWu"}},309:function(e,t,a){e.exports=a(532)},314:function(e,t,a){},337:function(e,t,a){},532:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(15),o=a.n(c),i=(a(314),a(38)),s=a(30),l=a(23),u=a(121);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m,g=a(40),d=a(270),p=a(247),E=a(195),h=a(24),b=a(20);!function(e){e.INITIALIZED_SUCCESS="@@APP/INITIALIZED_SUCCESS",e.SHOW_MESSAGE="@@APP/SHOW_MESSAGE",e.DELETE_MESSAGE="@@APP/DELETE_MESSAGE",e.SET_GLOBAL_LOADER="@@APP/SET_GLOBAL_LOADER",e.SET_HAVE_USER_DATA="@@APP/SET_HAVE_USER_DATA"}(m||(m={}));var f,_=Object(b.createAction)(m.INITIALIZED_SUCCESS)(),v=Object(b.createAction)(m.SET_HAVE_USER_DATA)(),O=Object(b.createCustomAction)(m.SHOW_MESSAGE,(function(e){return{message:e}})),S=Object(b.createAction)(m.DELETE_MESSAGE)(),j=Object(b.createCustomAction)(m.SET_GLOBAL_LOADER,(function(e){return{status:e}})),y={isInitialized:!1,haveUserData:!1,message:"",globalLoader:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(b.getType)(_):return Object(h.a)(Object(h.a)({},e),{},{isInitialized:!0});case Object(b.getType)(O):return Object(h.a)(Object(h.a)({},e),{},{message:t.message});case Object(b.getType)(S):return Object(h.a)(Object(h.a)({},e),{},{message:""});case Object(b.getType)(j):return Object(h.a)(Object(h.a)({},e),{},{globalLoader:t.status});case Object(b.getType)(v):return Object(h.a)(Object(h.a)({},e),{},{haveUserData:!0});default:return e}};!function(e){e.SET_USER_DATA="@@SIGN_UP/SET_USER_DATA"}(f||(f={}));var P,x=Object(b.createCustomAction)(f.SET_USER_DATA,(function(e){return{data:e}})),T={userData:{name:"",sex:"",weight:0,height:0,age:0}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(b.getType)(x):return Object(h.a)(Object(h.a)({},e),{},{userData:t.data});default:return e}},w=a(132);!function(e){e.SEND_MESSAGE="@@CHAT/SEND_MESSAGE",e.PUT_MESSAGE_TO_STORE="@@CHAT/PUT_MESSAGE_TO_STORE",e.SET_TYPING="@@CHAT/SET_TYPING"}(P||(P={}));var N=Object(b.createCustomAction)(P.SEND_MESSAGE,(function(e){return{message:e}})),D=Object(b.createCustomAction)(P.PUT_MESSAGE_TO_STORE,(function(e){return{messageData:e}})),C=Object(b.createCustomAction)(P.SET_TYPING,(function(e){return{status:e}})),I={messages:[],typing:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(b.getType)(D):return Object(h.a)(Object(h.a)({},e),{},{messages:[].concat(Object(w.a)(e.messages),[t.messageData])});case Object(b.getType)(C):return Object(h.a)(Object(h.a)({},e),{},{typing:t.status});default:return e}},M=a(61),L=a.n(M),G=a(44),B=a(248),R=a.n(B).a.create({baseURL:"http://84.201.133.59:5555/"}),W=function(e){return R.post("model",{question_raw:[e]})},H=L.a.mark(z),V=L.a.mark(K);function z(e){var t;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(G.d)(C(!0));case 3:return a.next=5,Object(G.d)(D({message:[e.message],date:new Date,from:"user"}));case 5:return a.next=7,Object(G.b)(W,e.message);case 7:return t=a.sent,a.next=10,Object(G.d)(D({message:""===t.data[0][0]?["\u041f\u0440\u043e\u0448\u0443 \u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f, \u043d\u043e \u044f \u0432\u0430\u0441 \u043d\u0435 \u043f\u043e\u043d\u044f\u043b. \u041d\u0435 \u043f\u043e\u0439\u0442\u0438 \u043b\u0438 \u0432\u0430\u043c \u043d\u0430 \u0445\u0443\u0439 \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438))))"]:t.data[0],date:new Date,from:"bot"}));case 10:console.log(t),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),console.log(a.t0);case 16:return a.prev=16,a.next=19,Object(G.d)(C(!1));case 19:return a.finish(16);case 20:case"end":return a.stop()}}),H,null,[[0,13,16,20]])}function K(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.e)(P.SEND_MESSAGE,z);case 2:case"end":return e.stop()}}),V)}var Z=L.a.mark(Y);function Y(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.c)(K)]);case 2:case"end":return e.stop()}}),Z)}var $=function(e,t){var a=Object(p.composeWithDevTools)({}),n=Object(d.a)(),r=Object(g.createStore)(function(e){return Object(g.combineReducers)({app:A,signUp:k,chat:U,router:Object(i.b)(e)})}(e),t,a(Object(g.applyMiddleware)(Object(E.a)(e),n)));return n.run(Y),r},q=(a(337),a(18)),J=a(28),X=a(32),F=a(567),Q=a(170),ee=a(249),te=a.n(ee),ae=function(){return r.a.createElement("div",{className:te.a.pulse})},ne=a(100),re=a.n(ne),ce=function(e){var t=e.onLogoClick;return r.a.createElement("div",{className:re.a.root},r.a.createElement(ae,null),r.a.createElement("div",{className:re.a.logo},t?r.a.createElement(Q.a,{onClick:t,className:re.a.button},r.a.createElement("img",{src:"logoTest.png",alt:"logo"})):r.a.createElement("img",{className:re.a.image,src:"logoTest.png",alt:"logo"})))},oe=a(253),ie=a.n(oe),se=a(565),le=a(254),ue=a.n(le),me=a(255),ge=a.n(me),de=a(256),pe=a.n(de),Ee=a(257),he=a.n(Ee),be=a(258),fe=a.n(be),_e=a(259),ve=a.n(_e),Oe=a(566),Se=a(166),je=a.n(Se),ye=[{id:1,name:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0438\u0442\u0430\u043d\u0438\u0435",icon:r.a.createElement(ue.a,null)},{id:2,name:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439",icon:r.a.createElement(ge.a,null)},{id:3,name:"\u0418\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u0435\u043f\u0440\u0435\u0441\u0441\u0438\u0438",icon:r.a.createElement(pe.a,null)},{id:4,name:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043f\u0443\u043b\u044c\u0441\u0430",icon:r.a.createElement(he.a,null)},{id:5,name:"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u043d\u0430",icon:r.a.createElement(fe.a,null)},{id:6,name:"\u0421\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0417\u041e\u0416",icon:r.a.createElement(ve.a,null)}],Ae=function(e){var t=e.push;return r.a.createElement("div",{className:je.a.root},r.a.createElement(se.a,{container:!0,spacing:3},ye.map((function(e){return r.a.createElement(se.a,{item:!0,xs:12,sm:12,md:6,lg:4,xl:3,key:e.id},r.a.createElement(Oe.a,{variant:"text",startIcon:e.icon,color:"default",className:je.a.root__item,onClick:function(){return t("/healthApp/Settings")}},e.name))}))))},Pe={push:J.e},xe=Object(l.c)(null,Pe)(Ae),Te=function(e){var t=e.push,a=Object(n.useState)(!1),c=Object(X.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){setTimeout((function(){return i(!0)}),1e3)}),[]),r.a.createElement("div",{className:ie.a.root},r.a.createElement(ce,{onLogoClick:function(){return t("chat")}}),r.a.createElement(F.a,{direction:"up",in:o,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",null,r.a.createElement(xe,null))))},ke={push:J.e},we=Object(l.c)(null,ke)(Te),Ne=a(54),De=a(568),Ce=a(574),Ie=a(575),Ue=a(41),Me=a.n(Ue),Le=a(129),Ge=a.n(Le),Be=a(570),Re=a(569),We=a(571),He=a(572),Ve=a(573),ze=a(5),Ke=a(583),Ze=Me()((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{height:"auto",borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}})),Ye=function(e){var t=e.checked,a=e.onChange,n=e.name,c=e.inputProps,o=e.edge,i=Ze();return r.a.createElement(Ke.a,{focusVisibleClassName:i.focusVisible,disableRipple:!0,classes:{root:i.root,switchBase:i.switchBase,thumb:i.thumb,track:i.track,checked:i.checked},checked:t,onChange:a,name:n,edge:o,inputProps:c})},$e=a(167),qe=a.n($e),Je=[{id:0,name:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0447\u0430\u0441\u043e\u0432 \u0441\u043d\u0430",value:!1},{id:1,name:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043f\u0443\u043b\u044c\u0441\u0430",value:!1},{id:2,name:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0430\u0440\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u044f",value:!1},{id:3,name:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u044b \u0442\u0435\u043b\u0430",value:!1},{id:5,name:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0440\u0430\u0446\u0438\u043e\u043d\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u044f",value:!1},{id:6,name:"\u0415\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0432\u0435\u0441\u0430",value:!1},{id:7,name:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439",value:!1},{id:8,name:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u044d\u043c\u043e\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f",value:!1}],Xe=Me()((function(){return{root:{fontSize:"1.5rem"}}})),Fe=function(e){var t=e.name,a=e.push,n=r.a.useState([]),c=Object(X.a)(n,2),o=c[0],i=c[1],s=Xe();return r.a.createElement(Re.a,{subheader:r.a.createElement(Be.a,{className:Object(ze.a)(s.root,qe.a.header)},t),className:qe.a.root},Je.map((function(e){return r.a.createElement(We.a,{key:e.id},r.a.createElement(He.a,{id:"switch-list-label-".concat(e.id),primary:e.name,onClick:function(){return a("/Settings/Info")},style:{cursor:"pointer"}}),r.a.createElement(Ve.a,null,r.a.createElement(Ye,{edge:"end",onChange:(t=e.id,function(){var e=o.indexOf(t),a=Object(w.a)(o);-1===e?a.push(t):a.splice(e,1),i(a)}),checked:-1!==o.indexOf(e.id),inputProps:{"aria-labelledby":"switch-list-label-".concat(e.id)}})));var t})))},Qe=a(133),et=a.n(Qe),tt=Me()((function(e){return{root:Object(Ne.a)({width:"600px"},e.breakpoints.down("sm"),{boxShadow:"none"})}})),at=function(e){var t=e.goBack,a=e.push,n=tt();return r.a.createElement("div",{className:et.a.settingsPage},r.a.createElement("div",{className:et.a.settingsPage__header},r.a.createElement(De.a,{"aria-label":"back",onClick:t},r.a.createElement(Ge.a,{fontSize:"large"}))),r.a.createElement("div",{className:et.a.settingsPage__body},r.a.createElement(Ce.a,{className:n.root,variant:"elevation"},r.a.createElement(Ie.a,null,r.a.createElement(Fe,{push:a,name:"\u0418\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u044f"})))))},nt={goBack:J.c,push:J.e},rt=Object(l.c)(null,nt)(at),ct=a(135),ot=a(71),it=a.n(ot),st=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],lt=a(50),ut=function(e){var t=e.data;return r.a.createElement(lt.d,{width:350,height:200,data:t,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(lt.f,{dataKey:"name"}),r.a.createElement(lt.g,null),r.a.createElement(lt.a,{strokeDasharray:"3 3"}),r.a.createElement(lt.e,null),r.a.createElement(lt.b,null),r.a.createElement(lt.c,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),r.a.createElement(lt.c,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"}))},mt=Me()((function(e){return{root:Object(Ne.a)({},e.breakpoints.down("sm"),{boxShadow:"none"})}})),gt=function(e){var t=e.goBack,a=mt();return r.a.createElement("div",{className:it.a.settingsInfoPage},r.a.createElement("div",{className:it.a.header},r.a.createElement(De.a,{"aria-label":"back",onClick:t},r.a.createElement(Ge.a,{fontSize:"large"}))),r.a.createElement("div",{className:it.a.body},r.a.createElement(Ce.a,{className:a.root,variant:"elevation"},r.a.createElement(Ie.a,{className:it.a.body__content},r.a.createElement(ct.a,{variant:"h5"},"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0447\u0430\u0441\u043e\u0432 \u0441\u043d\u0430"),r.a.createElement("div",{className:it.a.settingsInfoPage__text},r.a.createElement(ct.a,{variant:"subtitle1"},"\u0414\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0447\u0430\u0441\u043e\u0432 \u0441\u043d\u0430 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 24 \u0447\u0430\u0441\u043e\u0432.")),r.a.createElement("div",{className:it.a.settingsInfoPage__chart},r.a.createElement(ut,{data:st}))))))},dt={goBack:J.c},pt=Object(l.c)(null,dt)(gt),Et=a(576),ht=a(577),bt=a(578),ft=a(582),_t=a(268),vt=a.n(_t),Ot=Object(Et.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),St=[{value:"\u041c\u0443\u0436\u0441\u043a\u043e\u0439",label:"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"},{value:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439",label:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"},{value:"\u0414\u0440\u0443\u0433\u043e\u0439",label:"\u0414\u0440\u0443\u0433\u043e\u0439"}],jt=function(e){var t=e.setUserData,a=e.push,c=e.setHaveUserData,o=Ot(),i=Object(n.useState)(""),s=Object(X.a)(i,2),l=s[0],u=s[1],m=r.a.useState("\u041c\u0443\u0436\u0441\u043a\u043e\u0439"),g=Object(X.a)(m,2),d=g[0],p=g[1],E=Object(n.useState)(0),h=Object(X.a)(E,2),b=h[0],f=h[1],_=Object(n.useState)(0),v=Object(X.a)(_,2),O=v[0],S=v[1],j=Object(n.useState)(0),y=Object(X.a)(j,2),A=y[0],P=y[1],x=Object(n.useState)(!0),T=Object(X.a)(x,2),k=T[0],w=T[1];Object(n.useEffect)((function(){setTimeout((function(){return w(!1)}),1500)}),[]);return r.a.createElement("div",{className:vt.a.root},k?r.a.createElement(ce,null):r.a.createElement(ht.a,{component:"main",maxWidth:"xs"},r.a.createElement(bt.a,null),r.a.createElement("div",{className:o.paper},r.a.createElement(ct.a,{component:"h1",variant:"h5",style:{textAlign:"center"}},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435:"),r.a.createElement("form",{className:o.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),l.length>0&&d.length>0&&O>0&&b>0&&A>0?(t({name:l,sex:d,weight:b,height:O,age:A}),c(),a("/healthApp/main")):alert("\u0414\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u043e\u043b\u044f")}},r.a.createElement(se.a,{container:!0,spacing:2},r.a.createElement(se.a,{item:!0,xs:12},r.a.createElement(ft.a,{value:l,onChange:function(e){u(e.target.value.toString())},autoComplete:"fname",name:"Name",variant:"outlined",fullWidth:!0,id:"name",label:"\u0418\u043c\u044f",color:"secondary",autoFocus:!0})),r.a.createElement(se.a,{item:!0,xs:12},r.a.createElement(ft.a,{id:"outlined-select-sex-native",select:!0,label:"\u041f\u043e\u043b",value:d,onChange:function(e){p(e.target.value)},SelectProps:{native:!0},variant:"outlined",fullWidth:!0,name:"sex"},St.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))),r.a.createElement(se.a,{item:!0,xs:12},r.a.createElement(ft.a,{value:0===b?"":b,onChange:function(e){var t=e.target.value.length>0?parseInt(e.target.value,10):0;f(t)},variant:"outlined",fullWidth:!0,id:"weight",label:"\u0412\u0435\u0441",name:"weight",autoComplete:"weight",color:"secondary",type:"number"})),r.a.createElement(se.a,{item:!0,xs:12},r.a.createElement(ft.a,{value:0===O?"":O,onChange:function(e){var t=e.target.value.length>0?parseInt(e.target.value,10):0;S(t)},variant:"outlined",fullWidth:!0,id:"height",label:"\u0420\u043e\u0441\u0442",name:"height",autoComplete:"height",color:"secondary",type:"number"})),r.a.createElement(se.a,{item:!0,xs:12},r.a.createElement(ft.a,{value:0===A?"":A,onChange:function(e){var t=e.target.value.length>0?parseInt(e.target.value,10):0;P(t)},variant:"outlined",fullWidth:!0,id:"age",label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",name:"age",autoComplete:"age",color:"secondary",type:"number"}))),r.a.createElement(Oe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:o.submit},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c")))))},yt={setHaveUserData:v,setUserData:x,push:J.e},At=Object(l.c)(null,yt)(jt),Pt=a(579),xt=a(581),Tt=a(537),kt=a(580),wt=a(584),Nt=a(269),Dt=a.n(Nt),Ct=Object(Et.a)((function(e){return Object(Pt.a)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}})})),It=function(e){var t=e.onButtonClick,a=Ct(),c=Object(n.useState)(""),o=Object(X.a)(c,2),i=o[0],s=o[1];return r.a.createElement(Tt.a,{component:"form",className:a.root},r.a.createElement(wt.a,{onChange:function(e){s(e.target.value)},value:i,multiline:!0,rows:2,className:a.input,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",inputProps:{"aria-label":"send message"},onKeyDown:function(e){e.ctrlKey&&13===e.keyCode&&(t(i),s(""))}}),r.a.createElement(kt.a,{className:a.divider,orientation:"vertical"}),r.a.createElement(De.a,{onClick:function(){t(i),s("")},color:"primary",className:a.iconButton,"aria-label":"directions"},r.a.createElement(Dt.a,null)))},Ut=a(103),Mt=a.n(Ut),Lt=Me()((function(e){return Object(Pt.a)({root:Object(Ne.a)({height:"70vh",width:"60vw",display:"flex",flexDirection:"column",justifyContent:"space-between"},e.breakpoints.down("sm"),{height:"99%",width:"99%",border:"none"}),bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}})})),Gt=function(e){var t=e.messages,a=e.sendMessage,c=e.typing,o=e.userData,i=e.recordMessage,s=Lt();Object(n.useEffect)((function(){setTimeout((function(){return i({message:["\u041f\u0440\u0438\u0432\u0435\u0442, ".concat(o.name,"!!!")],date:new Date,from:"bot"})}),300)}),[]);return r.a.createElement(Ce.a,{className:s.root,variant:"outlined"},r.a.createElement(Ie.a,{className:Mt.a.cart},c&&r.a.createElement("div",{className:Mt.a.botMessage},"\u0411\u043e\u0442 \u0434\u0443\u043c\u0430\u0435\u0442"),t.map((function(e){return"user"===e.from?r.a.createElement("div",{key:e.date.toString(),className:Mt.a.userMessage},e.message):r.a.createElement("div",{key:e.date.toString(),className:Mt.a.botMessage},e.message)})).reverse()),r.a.createElement(xt.a,null,r.a.createElement(It,{onButtonClick:function(e){e.length>0?a(e):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435")}})))},Bt={sendMessage:N,recordMessage:D},Rt=Object(l.c)((function(e){return{messages:e.chat.messages,userData:e.signUp.userData,typing:e.chat.typing}}),Bt)(Gt),Wt=Object(l.c)((function(e){return{haveUserData:e.app.haveUserData,location:e.router.location}}))((function(e){var t=e.Page,a=e.haveUserData,n=e.location;return a?r.a.createElement(t,null):r.a.createElement(q.a,{to:{pathname:"/healthApp/",state:{from:n.pathname}}})})),Ht=function(){return r.a.createElement(q.d,null,r.a.createElement(q.b,{path:"/healthApp",exact:!0,component:At}),r.a.createElement(q.b,{path:"/healthApp/main",component:function(){return r.a.createElement(Wt,{Page:we})}}),r.a.createElement(q.b,{path:"/healthApp/chat",component:function(){return r.a.createElement(Wt,{Page:Rt})}}),r.a.createElement(q.b,{path:"/healthApp/Settings",exact:!0,component:function(){return r.a.createElement(Wt,{Page:rt})}}),r.a.createElement(q.b,{path:"healthApp/Settings/Info",exact:!0,component:function(){return r.a.createElement(Wt,{Page:pt})}}))};var Vt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ht,null))},zt=Object(s.a)(),Kt=$(zt,window.INITIAL_REDUX_STATE);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(l.a,{store:Kt},r.a.createElement(i.a,{history:zt},r.a.createElement(Vt,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports={settingsInfoPage:"settingInfoPage_settingsInfoPage__1hgUG",header:"settingInfoPage_header__uUvZj",body:"settingInfoPage_body__2r79g",body__content:"settingInfoPage_body__content__CFZfz",body__text:"settingInfoPage_body__text__24a5u"}}},[[309,1,2]]]);
//# sourceMappingURL=main.b5244cdf.chunk.js.map