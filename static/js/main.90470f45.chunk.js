(this["webpackJsonpfcp-app"]=this["webpackJsonpfcp-app"]||[]).push([[0],{218:function(e,t,n){},221:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(25),a=n(106),s=n.n(a),i=n(8),o=new a.UnityContext({loaderUrl:"unity/DRONE-HTML.loader.js",dataUrl:"unity/DRONE-HTML.data",frameworkUrl:"unity/DRONE-HTML.framework.js",codeUrl:"unity/DRONE-HTML.wasm"}),j=function(){return Object(i.jsx)(s.a,{style:{width:"100%",height:"100%"},unityContext:o})},b=n(16),l=function(e){return"/fcp-app".concat(e)},d=n(65),u=function(){return Object(i.jsxs)("div",{children:["Dashboard",Object(i.jsx)(d.b,{to:l("/unity"),children:"Go to unity"})]})},O=n(225),p=O.a.SubMenu,h=function(){return Object(i.jsxs)(O.a,{style:{width:256},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"light",children:[Object(i.jsx)(O.a.Item,{children:"Navigation One"},"1"),Object(i.jsx)(O.a.Item,{children:"Navigation Two"},"2"),Object(i.jsxs)(p,{title:"Navigation Two",children:[Object(i.jsx)(O.a.Item,{children:"Option 3"},"3"),Object(i.jsx)(O.a.Item,{children:"Option 4"},"4"),Object(i.jsxs)(p,{title:"Submenu",children:[Object(i.jsx)(O.a.Item,{children:"Option 5"},"5"),Object(i.jsx)(O.a.Item,{children:"Option 6"},"6")]},"sub1-2")]},"sub1"),Object(i.jsxs)(p,{title:"Navigation Three",children:[Object(i.jsx)(O.a.Item,{children:"Option 7"},"7"),Object(i.jsx)(O.a.Item,{children:"Option 8"},"8"),Object(i.jsx)(O.a.Item,{children:"Option 9"},"9"),Object(i.jsx)(O.a.Item,{children:"Option 10"},"10")]},"sub2")]})},x=n(223),m=n(227),f=n(228),w=n(229),_=n(45),v=n.n(_),N=n(226),g=function(){return Object(i.jsxs)("div",{className:v.a.wrapper,children:[Object(i.jsx)("span",{className:v.a.title,children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0411\u041f\u041b\u0410 \u0420\u041e\u0421\u0421\u0415\u0422\u0418"}),Object(i.jsxs)("div",{className:v.a.settings,children:[Object(i.jsx)("div",{className:v.a.button,children:Object(i.jsx)(m.a,{})}),Object(i.jsx)("div",{className:v.a.button,children:Object(i.jsx)(f.a,{})}),Object(i.jsxs)("div",{className:v.a.button,children:[Object(i.jsx)(N.a,{className:v.a.badge,count:25}),Object(i.jsx)(w.a,{})]})]})]})},y=n(74),I=n.n(y),k=n(224),U=function(){return Object(i.jsxs)("div",{className:I.a.wrapper,children:[Object(i.jsx)(k.a,{style:{backgroundColor:"#7265e6",verticalAlign:"middle"},size:64,gap:4,children:"UN"}),Object(i.jsxs)("div",{className:I.a.info,children:[Object(i.jsx)("span",{className:I.a.name,children:"\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432 \u0410\u043b\u0435\u043a\u0441\u0435\u0439"}),Object(i.jsx)("span",{className:I.a.role,children:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0411\u041f\u041b\u0410"})]})]})},T=(n(218),x.a.Header),C=x.a.Sider,D=x.a.Content,E=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(x.a,{style:{width:"100%",height:"100%"},children:[Object(i.jsx)(T,{style:{backgroundColor:"#ffffff"},children:Object(i.jsx)(g,{})}),Object(i.jsxs)(x.a,{children:[Object(i.jsxs)(C,{style:{backgroundColor:"#F0F0F0"},width:256,theme:"light",children:[Object(i.jsx)(U,{}),Object(i.jsx)(h,{})]}),Object(i.jsx)(D,{children:Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{exact:!0,path:l("/"),component:u}),Object(i.jsx)(b.a,{path:l("/unity"),component:j})]})})]})]})})},H=n(55),R=n(73),S=n(27),L=Object(H.b)({name:"user/profile",initialState:{name:"User Name"},reducers:{setName:function(e,t){var n=t.payload;e.name=n}}}),M=(L.actions,L.reducer),F=Object(S.b)({profile:M}),A=Object(S.b)({userReducers:F}),J=function(e,t){return"LOG_OUT"===t.type?A(void 0,t):A(e,t)},K=n(135),z=n(37),G=n.n(z),q=n(64),B=n(133),P=G.a.mark(W),V=G.a.mark(Q);function W(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),P)}function Q(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.d)("user/empty",W);case 2:case"end":return e.stop()}}),V)}var X=G.a.mark(Y);function Y(){var e;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[Q],t.next=3,Object(q.a)(e.map((function(e){return Object(q.c)(G.a.mark((function t(){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(q.b)(e);case 4:return t.abrupt("break",13);case 7:t.prev=7,t.t0=t.catch(1),B.b.error("Error ".concat(JSON.stringify(t.t0))).then(),console.log(t.t0);case 11:t.next=0;break;case 13:case"end":return t.stop()}}),t,null,[[1,7]])})))})));case 3:case"end":return t.stop()}}),X)}var Z=Y,$=n(132),ee=n(72),te=Object(K.a)(),ne=Object(H.a)({reducer:{rootReducer:J},middleware:[te,ee.a]});te.run(Z);Object($.a)(ne),R.c;Object(c.render)(Object(i.jsx)(r.Fragment,{children:Object(i.jsx)(R.a,{store:ne,children:Object(i.jsx)(d.a,{children:Object(i.jsx)(E,{})})})}),document.getElementById("root"))},45:function(e,t,n){e.exports={wrapper:"Topbar_wrapper__toH_3",settings:"Topbar_settings__1VPn3",button:"Topbar_button__3OzKO",badge:"Topbar_badge__3DuuA"}},74:function(e,t,n){e.exports={wrapper:"UserInfo_wrapper__qa8U-",info:"UserInfo_info__33W3C",name:"UserInfo_name__1y1lm",role:"UserInfo_role___Ce0r"}}},[[221,1,2]]]);
//# sourceMappingURL=main.90470f45.chunk.js.map