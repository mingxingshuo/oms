(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[5],{117:function(e,t,n){e.exports=n(171)},123:function(e,t,n){},16:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(81),o=n.n(c),l=n(172),i={width:"100%",textAlign:"center",background:"rgba(241, 244, 245, .7)",position:"absolute",padding:"200px 0",top:0,left:0,zIndex:1},u=function(e){return r.a.createElement("div",{style:i},r.a.createElement(l.a,{spinning:e.spinning}))};t.a=function(e,t){return o()({loader:e,loading:function(){return t||r.a.createElement(u,null)}})}},171:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),l=(n(122),n(123),n(34)),i=n(11),u=n(52),s=n(13),m=n(87),d=n(16),b=Object(d.a)((function(){return Promise.all([n.e(0),n.e(4),n.e(8),n.e(15)]).then(n.bind(null,657))})),p=Object(d.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(14)]).then(n.bind(null,661))})),f=Object(d.a)((function(){return n.e(20).then(n.bind(null,658))})),E=Object(d.a)((function(){return n.e(16).then(n.bind(null,659))})),g=Object(d.a)((function(){return n.e(19).then(n.bind(null,660))}));function h(){var e=Object(i.g)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)("user"),s=Object(l.a)(u,2),m=s[0],d=s[1];return Object(a.useEffect)((function(){e.pathname.indexOf("order/list")>-1&&sessionStorage.clear()}),[e]),Object(a.useEffect)((function(){var e=localStorage.getItem("userInfo"),t=localStorage.getItem("menuList");if(e&&Date.now()-+new Date(JSON.parse(e).loginAt)<864e5&&t){var n=JSON.parse(t)[0].keyIndex,a=Object.keys(JSON.parse(e)).length>0;o(a),d(n)}}),[]),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login",render:function(){return c?r.a.createElement(i.a,{to:window.location.search?decodeURIComponent(window.location.search.split("=")[1]):"/"}):r.a.createElement(b,null)}}),r.a.createElement(i.b,{path:"/",render:function(){return r.a.createElement(p,{content:r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/user",component:f}),r.a.createElement(i.b,{path:"/sales",component:E}),r.a.createElement(i.b,{path:"/setting",component:g}),c?r.a.createElement(i.a,{to:"/"+m}):r.a.createElement(i.a,{to:"/login?redirect="+encodeURIComponent(window.location.pathname)}))})}}))}var O=function(){return r.a.createElement(s.b,{locale:m.a},r.a.createElement(u.a,{basename:"/admin"},r.a.createElement(h,null)))};o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[117,6,7]]]);