(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[17],{452:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},453:function(e,t,n){"use strict";var r=n(170),a=n(88),c=n(452),o=n(0),u=n.n(o),i=n(699);t.a=function(e){var t=e.total,n=e.changePage,s=e.pagination,l=e.keyWord,f=void 0===l?"order":l,m=Object(c.a)(e,["total","changePage","pagination","keyWord"]),d=Object(o.useState)(1),p=Object(a.a)(d,2),b=p[0],g=p[1],O={current:b,total:t,showTotal:function(e){return"\u5171 ".concat(e," \u6761")},showQuickJumper:!0,position:["bottomCenter"],onChange:function(e){g(e),n(e),sessionStorage.setItem(f+"PageNum",e)}};return u.a.createElement(i.a,Object.assign({pagination:s&&Object(r.a)({},O,{},s)},m))}},502:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return i}));var r=n(63),a=function(e){return r.a.get("/department",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},c=function(e){return r.a.post("/department",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},o=function(e){return r.a.put("/department",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},u=function(e){return console.log(e),r.a.put("/department/setManage",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},i=function(e){return r.a.delete("/department",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))}},694:function(e,t,n){"use strict";n.r(t);var r=n(170),a=n(49),c=n.n(a),o=n(70),u=n(88),i=n(0),s=n.n(i),l=n(39),f=n(439),m=n(546),d=n(137),p=n(436),b=n(37),g=n(453),O=n(171),h=n(502),v=f.a.Search,j=m.a.Option;t.default=function(e){var t=Object(i.useState)([]),n=Object(u.a)(t,2),a=n[0],f=n[1],k=Object(i.useState)(""),y=Object(u.a)(k,2),w=y[0],E=y[1],x=Object(i.useState)(0),S=Object(u.a)(x,2),P=S[0],N=S[1],C=Object(i.useState)([]),I=Object(u.a)(C,2),_=I[0],z=I[1],F=Object(i.useState)(!1),J=Object(u.a)(F,2),W=J[0],K=J[1],T=Object(i.useState)([]),q=Object(u.a)(T,2),A=q[0],B=q[1],M=Object(i.useState)(""),Q=Object(u.a)(M,2),R=Q[0],D=Q[1],G=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)();case 2:t=e.sent,n=t.code,r=t.data,B(1===n?r:[]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n,r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)({username:w,page:1});case 2:t=e.sent,n=t.code,r=t.data,a=t.msg,o=t.total,1===n?(f(r),N(o),E(""),d.a.success(a)):(d.a.error(a),L());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n,r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("userPageNum")||1,e.next=3,Object(O.c)({page:t});case 3:n=e.sent,r=n.code,a=n.data,o=n.total,1===r&&(N(o),f(a));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){K(!1),z([]),D("")},V=[{key:"username",dataIndex:"username",title:"\u8d26\u6237\u540d",align:"center"},{key:"nickName",dataIndex:"nickName",title:"\u6635\u79f0",align:"center"},{key:"departmentName",dataIndex:"departmentName",title:"\u90e8\u95e8",align:"center",render:function(e){return e||"\u65e0"}},{key:"remarks",dataIndex:"remarks",title:"\u5907\u6ce8",align:"center",width:300,render:function(e){return e||"\u65e0"}},{key:"role",dataIndex:"role",title:"\u8d26\u53f7\u7c7b\u578b",align:"center",render:function(e){return 0===e?"\u516c\u53f8":(1===e?"\u7ba1\u7406":"\u9500\u552e")+"\u8d26\u53f7"}},{title:"Action",key:"action",align:"center",render:function(e,t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{type:"link",size:"small",className:"mr5"},s.a.createElement(l.b,{to:{pathname:"./edit",query:{info:Object(r.a)({},t)}}},"\u4fee\u6539")),s.a.createElement(b.a,{type:"link",size:"small",onClick:function(){return e=t._id,void p.a.confirm({title:"\u786e\u5b9a\u5220\u9664\u8fd9\u4e2a\u8d26\u6237\u5417\uff1f",onOk:function(){var t=Object(o.a)(c.a.mark((function t(){var n,r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(O.b)({_id:e});case 2:n=t.sent,r=n.code,a=n.msg,1===r?(d.a.success(a),L()):d.a.error(a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()});var e},danger:!0},"\u5220\u9664"))}}];return Object(i.useEffect)((function(){L()}),[]),s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement(g.a,{bordered:!0,rowKey:function(e){return e._id},size:"small",dataSource:a,columns:V,total:P,changePage:L,keyWord:"user",title:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v,{onChange:function(e){return E(e.target.value)},value:w,style:{width:300},placeholder:"\u8bf7\u8f93\u5165\u8d26\u6237\u540d",enterButton:"\u67e5\u8be2",onSearch:H}),s.a.createElement(b.a,{className:"fr",type:"link"},s.a.createElement(l.b,{to:"./add"},"\u6dfb\u52a0\u7528\u6237")))},rowSelection:{selectedRowKeys:_,getCheckboxProps:function(e){return{disabled:2!==e.role}},onChange:function(e){return z(e)},columnTitle:s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{size:"small",type:"link",onClick:function(){G(),K(!0)}},"\u6279\u91cf\u4fee\u6539"),s.a.createElement("span",null,"(\u53ea\u5141\u8bb8\u5bf9\u9500\u552e\u8d26\u53f7\u8fdb\u884c\u4fee\u6539)"))}})),s.a.createElement(p.a,{title:"\u9009\u62e9\u6240\u5c5e\u90e8\u95e8",visible:W,onOk:function(){var e=A.filter((function(e){return e._id===R}))[0].name;p.a.confirm({title:"\u8bf7\u60a8\u786e\u8ba4\u64cd\u4f5c",onOk:function(){var t=Object(o.a)(c.a.mark((function t(){var n,r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(O.e)({departmentId:R,departmentName:e,_ids:_});case 2:n=t.sent,r=n.code,a=n.msg,1===r?(d.a.success(a),U(),L()):d.a.error(a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()})},onCancel:U},s.a.createElement(m.a,{style:{width:"80%"},value:R,onChange:function(e){return D(e)}},s.a.createElement(j,{value:"",disabled:!0},"\u8bf7\u9009\u62e9\u6240\u5c5e\u90e8\u95e8"),A.map((function(e){return s.a.createElement(j,{key:e._id,value:e._id},e.name)})))))}}}]);