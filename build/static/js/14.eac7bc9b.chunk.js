(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[14],{453:function(e,t,n){"use strict";var a=n(170),r=n(88),c=n(452),i=n(0),o=n.n(i),l=n(707);t.a=function(e){var t=e.total,n=e.changePage,u=e.pagination,s=e.keyWord,d=void 0===s?"order":s,m=Object(c.a)(e,["total","changePage","pagination","keyWord"]),f=Object(i.useState)(1),p=Object(r.a)(f,2),h=p[0],y=p[1],g={current:h,total:t,showTotal:function(e){return"\u5171 ".concat(e," \u6761")},showQuickJumper:!0,position:["bottomCenter"],onChange:function(e){y(e),n(e),sessionStorage.setItem(d+"PageNum",e)}};return o.a.createElement(l.a,Object.assign({pagination:u&&Object(a.a)({},g,{},u)},m))}},503:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return s}));var a=n(63),r=function(e){return a.a.get("/order/find",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},c=function(e){return a.a.post("/order/create",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},i=function(e){return a.a.get("/order/submit",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},o=function(e){return a.a.get("/order/confirm",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},l=function(e){return a.a.get("/order/route",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},u=function(e){return a.a.get("/order/findOne",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},s=function(e){return a.a.get("/order/review",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))}},675:function(e,t,n){},714:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n.n(a),c=n(70),i=n(88),o=n(0),l=n.n(o),u=n(47),s=n(439),d=n(712),m=n(710),f=n(175),p=n(37),h=n(137),y=n(436),g=n(713),v=n(721),b=n(720),k=n(719),O=n(455),E=n.n(O),j=(n(462),n(453)),w=n(170),x=n(549),I=n(724),C=n(452),_=n(709),P=function(e){var t=e.type,n=void 0===t?"view":t,a=e.src,r=Object(C.a)(e,["type","src"]);return"view"===n?l.a.createElement("img",{src:a,alt:""}):l.a.createElement(_.a,Object.assign({name:"imageFile",showUploadList:!1},r),a?l.a.createElement("img",{src:a,alt:""}):l.a.createElement(p.a,null,"\u4e0a\u4f20\u4ed8\u6b3e\u622a\u56fe"))},S=n(63),N=(n(669),{orderid:"",sum:0,info:[{type:"\u652f\u4ed8\u5b9d\u6536\u6b3e",money:0,url:""},{type:"\u5fae\u4fe1\u6536\u6b3e",money:0,url:""},{type:"\u94f6\u884c\u5361\u6536\u6b3e",money:0,url:""},{type:"\u4ee3\u6536\u6536\u6b3e",money:0,url:""},{type:"\u5df2\u7ed3\u5b58\u6536\u6b3e",money:0,url:""},{type:"\u540e\u7f6e\u6536\u6b3e",money:0,url:""}]}),z=["\u4ee3\u6536\u6536\u6b3e","\u5df2\u7ed3\u5b58\u6536\u6b3e","\u540e\u7f6e\u6536\u6b3e"],A=function(e){var t=Object(o.useState)(!1),n=Object(i.a)(t,2),a=n[0],u=n[1],s=Object(o.useState)(!1),d=Object(i.a)(s,2),m=d[0],f=d[1],g=Object(o.useState)(Object(w.a)({},N)),v=Object(i.a)(g,2),b=v[0],k=v[1],O=e.payInfo,E=e.setPayInfo,j=O.info,C=O.sum,_=function(){u(!1),E({})},A=function(e){for(var t=e.info,n=e.sum,a=0,r=!1,c="",i=0;i<t.length;i++){var o=t[i],l=o.money,u=o.url,s=o.type,d=-1===z.indexOf(s);a+=l,l>0&&d&&!u&&!r&&(r=!0,c=s)}return a!==n?{checkOk:!1,msg:"\u4ed8\u6b3e\u8be6\u60c5\u4e2d\u4e2a\u6b3e\u9879\u7684\u548c\u5e94\u7b49\u4e8e\u603b\u91d1\u989d"}:r?{msg:c+"\u7f3a\u5c11\u622a\u56fe",checkOk:!1}:{checkOk:!0}},D=function(){f(!1)},F=l.a.createElement(x.a,{bordered:!0,column:1,size:"small"},l.a.createElement(x.a.Item,{label:"\u4ed8\u6b3e\u603b\u91d1\u989d"},C||"\u6682\u65e0\u4ed8\u6b3e\u4fe1\u606f\uff0c\u8bf7\u4fee\u6539\u5b8c\u5584\u4ed8\u6b3e\u4fe1\u606f"),l.a.createElement(x.a.Item,{label:"\u4ed8\u6b3e\u660e\u7ec6"},j&&j.length?l.a.createElement(x.a,{bordered:!0,size:"small",className:"pay-info-detail",column:5},j.map((function(e){var t=e.type,n=e.money,a=e.url;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a.Item,{label:t,span:2},n),l.a.createElement(x.a.Item,{span:3},l.a.createElement(P,{action:"http://n.nyzda.top/pay/upload",type:"update",src:a})))}))):C?l.a.createElement(x.a,{bordered:!0,size:"small",className:"pay-info-detail",column:5},l.a.createElement(x.a.Item,{label:"\u4ee3\u6536\u8d27\u6b3e",span:2},C)):null)),T=l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{bordered:!0,column:1,size:"small"},l.a.createElement(x.a.Item,{label:"\u4ed8\u6b3e\u603b\u91d1\u989d"},l.a.createElement(I.a,{step:.01,min:0,value:b.sum,onChange:function(e){k(Object(w.a)({},b,{sum:e}))}})),l.a.createElement(x.a.Item,{label:l.a.createElement("div",null,l.a.createElement("span",null,"\u4ed8\u6b3e\u660e\u7ec6"),l.a.createElement("p",{className:"tips"},"\u63d0\u793a\uff1a\u6536\u6b3e\u91d1\u989d\u8bbe\u7f6e\u4e3a0\u65f6\uff0c\u4f1a\u6e05\u7a7a\u4ed8\u6b3e\u622a\u56fe"))},l.a.createElement(x.a,{bordered:!0,size:"small",className:"pay-info-detail",column:5},b.info.map((function(e,t){var n=e.type,a=e.url,r=e.money;return l.a.createElement(o.Fragment,{key:t},l.a.createElement(x.a.Item,{label:n,span:2},l.a.createElement(I.a,{step:.01,min:0,value:r,onChange:function(e){return function(e,t){var n=b.info.filter((function(e){return e.type===t}))[0];n.money=e,0===e&&(n.url=""),k(Object(w.a)({},b))}(e,n)}})),l.a.createElement(x.a.Item,{span:3},-1===z.indexOf(n)?l.a.createElement(P,{action:"http://n.nyzda.top/pay/upload",type:"update",src:a,onChange:function(e){return function(e,t){"done"===e.status&&(b.info.filter((function(e){return e.type===t}))[0].url="http://n.nyzda.top/uploads/"+e.response.image_url,k(Object(w.a)({},b)))}(e.file,n)}}):"\u65e0"))}))))));return Object(o.useEffect)((function(){u(!0)}),[]),l.a.createElement(y.a,{title:"\u4ed8\u6b3e\u4fe1\u606f",visible:a,onCancel:_,width:640,style:{top:30},className:"pay-info-modal",footer:m?l.a.createElement("div",null,l.a.createElement(p.a,{type:"primary",ghost:!0,onClick:D},"\u53d6\u6d88"),l.a.createElement(p.a,{type:"primary",onClick:function(){var e=A(b);e.checkOk?y.a.confirm({title:"\u662f\u5426\u4fdd\u5b58\u4fee\u6539",onOk:function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=Object(w.a)({},b),S.a.put("/pay",r).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}));case 2:t=e.sent,n=t.code,a=t.msg,c=t.data,1===n?(h.a.success(a),E(c),D()):h.a.error(a);case 7:case"end":return e.stop()}var r}),e)})));return function(){return e.apply(this,arguments)}}(),onCancel:function(){h.a.warning("\u5df2\u53d6\u6d88\u64cd\u4f5c")}}):h.a.warning(e.msg)}},"\u4fdd\u5b58")):l.a.createElement("div",null,l.a.createElement(p.a,{type:"primary",ghost:!0,onClick:function(){k(Object(w.a)({},b,{},O)),f(!0)}},"\u4fee\u6539"),l.a.createElement(p.a,{type:"primary",onClick:_},"\u786e\u5b9a"))},m?T:F)},D=n(503),F=(n(675),s.a.Search),T=d.a.Step,B=m.a.Text;E.a.locale("zh-cn");function J(e){var t=e.filter((function(e){return"COD"===e.name}));return e.length&&t.length?t.length?"\r\n\u4ee3\u6536\u91d1\u989d\uff1a".concat(t[0].value):void 0:""}t.default=Object(u.g)((function(e){var t=e.location,n=e.history,a=Object(o.useState)("\u4e3b\u8d26\u53f7"),u=Object(i.a)(a,2),s=u[0],m=u[1],O=Object(o.useState)({}),w=Object(i.a)(O,2),x=w[0],I=w[1],C=Object(o.useState)([]),_=Object(i.a)(C,2),P=_[0],N=_[1],z=Object(o.useState)(0),R=Object(i.a)(z,2),W=R[0],q=R[1],K=Object(o.useState)([]),L=Object(i.a)(K,2),Q=L[0],U=L[1],G=Object(o.useState)(!1),H=Object(i.a)(G,2),M=H[0],V=H[1],X=[{key:"orderid",dataIndex:"orderid",title:"\u8ba2\u5355\u53f7",align:"center",fixed:"left",width:150,render:function(e,t){return l.a.createElement(B,{copyable:{text:"\u5730\u5740\uff1a".concat(t.d_address," | \n                                    \r\n\u59d3\u540d\uff1a").concat(t.d_contact," | \n                                    \r\n\u7535\u8bdd\uff1a").concat(t.d_tel," | \n                                    \r\n\u4e0b\u5355\uff1a").concat(t.Cargo.map((function(e){return"".concat(e.count,"-").concat(e.name," ")})).join(",")).concat(J(t.AddedService)?" | ":"","\n                                    ").concat(J(t.AddedService))}},l.a.createElement(f.a,{title:"\u590d\u5236\u8ba2\u5355\u4fe1\u606f"},e))}},{key:"mailno",dataIndex:"mailno",title:"\u987a\u4e30\u8fd0\u5355\u53f7",width:90,align:"center",fixed:"left",render:function(e){return e||"\u4e0b\u5355\u540e\u5373\u53ef\u751f\u6210\u8fd0\u5355\u53f7"}},{key:"dealtype",dataIndex:"dealtype",title:"\u8ba2\u5355\u72b6\u6001",width:80,align:"center",render:function(e){return l.a.createElement("div",{className:"order-status"},l.a.createElement("span",{className:0===e?"info":1===e?"complete":"cancel"},0===e?"\u672a\u4e0b\u5355":1===e?"\u5df2\u4e0b\u5355":"\u5df2\u53d6\u6d88"))}},{title:"\u7269\u54c1\u4fe1\u606f",children:[{key:"name",dataIndex:"Cargo",title:"\u8d27\u54c1\u540d\u79f0",align:"center",width:100,render:function(e){return e&&e.length?l.a.createElement("ul",{className:"cargo-list"},e.map((function(e,t){return l.a.createElement("li",{key:e.name+t},e.name)}))):{children:"\u6682\u65e0\u8d27\u54c1\u4fe1\u606f",props:{colSpan:2}}}},{key:"count",dataIndex:"Cargo",title:"\u8d27\u54c1\u6570\u91cf",align:"center",width:100,render:function(e){return e&&e.length?l.a.createElement("ul",{className:"cargo-list"},e.map((function(e,t){return l.a.createElement("li",{key:e.count+""+t},e.count)}))):{props:{colSpan:0}}}}]},{title:"\u5bc4\u4ef6\u4eba\u4fe1\u606f",children:[{key:"j_company",dataIndex:"j_company",title:"\u5bc4\u4ef6\u4eba\u516c\u53f8\u540d\u79f0",width:100,align:"center"},{key:"j_contact",dataIndex:"j_contact",title:"\u5bc4\u4ef6\u4eba\u59d3\u540d",width:80,align:"center"},{key:"j_tel",dataIndex:"j_tel",title:"\u5bc4\u4ef6\u4eba\u8054\u7cfb\u7535\u8bdd",width:110,align:"center"},{key:"j_address",dataIndex:"j_address",title:"\u5bc4\u4ef6\u4eba\u8be6\u7ec6\u5730\u5740",align:"center",width:150}]},{title:"\u6536\u4ef6\u4eba\u4fe1\u606f",children:[{key:"d_company",dataIndex:"d_company",title:"\u6536\u4ef6\u4eba\u516c\u53f8\u540d\u79f0",width:100,align:"center"},{key:"d_contact",dataIndex:"d_contact",title:"\u6536\u4ef6\u4eba\u59d3\u540d",width:80,align:"center"},{key:"d_tel",dataIndex:"d_tel",title:"\u6536\u4ef6\u4eba\u8054\u7cfb\u7535\u8bdd",width:110,align:"center"},{key:"d_address",dataIndex:"d_address",title:"\u6536\u4ef6\u4eba\u8be6\u7ec6\u5730\u5740",align:"center",width:150}]},{title:"\u589e\u503c\u670d\u52a1",children:[{key:"AddedService",dataIndex:"AddedService",title:"\u662f\u5426\u4ee3\u6536\u8d27\u6b3e",align:"center",width:80,render:function(e){return e.filter((function(e){return"COD"===e.name})).length?l.a.createElement(v.a,{twoToneColor:"#52c41a"}):l.a.createElement(b.a,null)}},{key:"value",dataIndex:"AddedService",title:"\u4ee3\u6536\u8d27\u6b3e\u91d1\u989d",align:"center",width:80,render:function(e){return e.filter((function(e){return"COD"===e.name})).length?e.filter((function(e){return"COD"===e.name}))[0].value:"\u2014\u2014"}},{key:"value1",dataIndex:"AddedService",title:"\u4ee3\u6536\u8d27\u6b3e\u5361\u53f7",align:"center",width:150,render:function(e){return e.filter((function(e){return"COD"===e.name})).length?e.filter((function(e){return"COD"===e.name}))[0].value1:"\u2014\u2014"}}]},{title:"\u8ba2\u5355\u65f6\u95f4",children:[{key:"createAt",dataIndex:"createAt",title:"\u4e0b\u5355\u65f6\u95f4",align:"center",width:120,render:function(e){return E()(e).format("llll")}},{key:"updateAt",dataIndex:"updateAt",title:"\u6700\u8fd1\u4e00\u6b21\u4fee\u6539",align:"center",width:120,render:function(e){return E()(e).format("llll")}},{key:"sendstarttime",dataIndex:"sendstarttime",title:"\u4e0a\u95e8\u53d6\u4ef6\u65f6\u95f4",align:"center",width:120,render:function(e){return E()(e).format("llll")}}]},{key:"pay",dataIndex:"orderid",title:"\u4ed8\u6b3e\u4fe1\u606f",align:"center",width:80,fixed:"right",render:function(e){return l.a.createElement(p.a,{type:"link",onClick:function(){return te(e)}},"\u67e5\u770b")}},{key:"action",dataIndex:"action",title:"\u64cd\u4f5c",className:"\u4e3b\u8d26\u53f7"===s?"hide":"",width:"\u4e3b\u8d26\u53f7"===s?0:100,fixed:"right",align:"center",render:function(e,t){return Y(t)}}],Y=function(e){var t;return"\u7ba1\u7406\u8d26\u53f7"===s&&(t=e.isReview?"\u5ba1\u6838\u901a\u8fc7":l.a.createElement(p.a,{type:"link",onClick:function(){return ee(e.orderid)}},"\u5ba1\u6838")),"\u9500\u552e\u8d26\u53f7"===s&&(t=e.mailno?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{type:"link",onClick:function(){return $(e.orderid)}},"\u5b9e\u65f6\u7269\u6d41"),l.a.createElement(p.a,{type:"link",onClick:function(){return re(e)},danger:!0},"\u53d6\u6d88\u8ba2\u5355")):e.isReview?"\u5df2\u4e0b\u5355":"\u7b49\u5f85\u5ba1\u6838"),t},Z={width:360},$=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.f)({tracking_number:t,tracking_type:2});case 2:n=e.sent,a=n.code,c=n.msg,i=n.data,1===a?(U(i.reverse()),V(!0)):h.a.error(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.a.confirm({title:"\u901a\u8fc7\u5ba1\u6838\uff1f",onOk:function(){var e=Object(c.a)(r.a.mark((function e(){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)({orderid:t});case 2:n=e.sent,a=n.code,c=n.msg,1===a?(h.a.success(c),ae()):h.a.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onCancel:function(){h.a.warning("\u5df2\u53d6\u6d88\u64cd\u4f5c")}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r={orderid:t},S.a.get("/pay",r).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}));case 2:n=e.sent,a=n.code,c=n.msg,i=n.data,1===a?(h.a.success(c),I(i)):I({orderid:t});case 7:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)({orderid:t});case 2:n=e.sent,a=n.code,c=n.msg,i=n.data,1===a?(h.a.success(c),N(i),q(1)):h.a.error(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c,i,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=sessionStorage.getItem("orderPageNum")||1,e.next=3,Object(D.e)({page:a,customerId:t});case 3:c=e.sent,i=c.code,o=c.data,l=c.count,1===i?(N(o),q(l)):t&&1!==i&&n.goBack();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(e){y.a.confirm({title:l.a.createElement("h3",{className:"order-modal-title"},l.a.createElement(k.a,{className:"mr10"}),"\u63d0\u793a\uff1a"),content:l.a.createElement("p",{className:"order-modal-content"},"\u53d6\u6d88\u8ba2\u5355\u540e\uff0c\u8be5\u8ba2\u5355\u5c06\u4e0d\u518d\u663e\u793a\u5728\u60a8\u7684\u5217\u8868\u4e2d\uff0c\u5e76\u4e14\u987a\u4e30\u4e5f\u4e0d\u518d\u63a5\u5355\uff0c\u786e\u8ba4\u7ee7\u7eed\u64cd\u4f5c\u5417\uff1f"),style:{top:"30%"},onOk:function(){var t=Object(c.a)(r.a.mark((function t(){var n,a,c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.orderid,t.next=3,Object(D.b)({orderid:n,dealtype:2});case 3:a=t.sent,c=a.code,i=a.msg,1===c?h.a.success("\u72b6\u6001\u4fee\u6539\u6210\u529f"):h.a.error(i);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),onCancel:function(){h.a.warning("\u5df2\u53d6\u6d88\u64cd\u4f5c")}})};return Object(o.useEffect)((function(){var e=localStorage.getItem("role"),a=t.query,r=t.pathname,c=a?a.customerId:"";r.indexOf("/customer/order/list")>-1&&!a?n.goBack():(m(e),ae(c))}),[]),l.a.createElement("div",{className:"order-list"},l.a.createElement("div",{className:"container"},l.a.createElement(j.a,{rowKey:function(e){return e._id},dataSource:P,columns:X,total:W,size:"small",bordered:!0,scroll:{x:"max-content",y:400,scrollToFirstRowOnChange:!0},changePage:ae,title:function(){return l.a.createElement(F,{style:Z,placeholder:"\u8bf7\u8f93\u5165\u8ba2\u5355\u53f7",enterButton:"\u67e5\u8be2",onSearch:ne})}})),M&&l.a.createElement(g.a,{placement:"left",closable:!1,onClose:V(!1),visible:M},l.a.createElement(d.a,{progressDot:!0,current:Q.length,direction:"vertical",size:"small"},Q.map((function(e){return l.a.createElement(T,{key:e.accept_time,title:e.accept_address,description:e.accept_time+e.remark})})))),x.orderid&&l.a.createElement(A,{payInfo:x,setPayInfo:I}))}))}}]);