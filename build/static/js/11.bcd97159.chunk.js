(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[11],{453:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},454:function(e,t,n){"use strict";var r=n(170),a=n(89),c=n(453),i=n(0),o=n.n(i),s=n(706);t.a=function(e){var t=e.total,n=e.changePage,l=e.pagination,d=void 0===l?{}:l,u=e.keyWord,m=void 0===u?"order":u,f=Object(c.a)(e,["total","changePage","pagination","keyWord"]),h=Object(i.useState)(1),g=Object(a.a)(h,2),_=g[0],p=g[1],y={current:_,total:t,showTotal:function(e){return"\u5171 ".concat(e," \u6761")},showQuickJumper:!0,position:["bottomCenter"],onChange:function(e){console.log(e),sessionStorage.setItem(m+"PageNum",e),p(e),n(e)}};return o.a.createElement(s.a,Object.assign({pagination:!!d&&Object(r.a)({},y,{},d)},f))}},472:function(e,t,n){!function(e){"use strict";e.defineLocale("zh-cn",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",LLLL:"YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,t){return 12===e&&(e=0),"\u51cc\u6668"===t||"\u65e9\u4e0a"===t||"\u4e0a\u5348"===t?e:"\u4e0b\u5348"===t||"\u665a\u4e0a"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,n){var r=100*e+t;return r<600?"\u51cc\u6668":r<900?"\u65e9\u4e0a":r<1130?"\u4e0a\u5348":r<1230?"\u4e2d\u5348":r<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:"[\u4e0b]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4e0a]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u5468)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u5468";default:return e}},relativeTime:{future:"%s\u5185",past:"%s\u524d",s:"\u51e0\u79d2",ss:"%d \u79d2",m:"1 \u5206\u949f",mm:"%d \u5206\u949f",h:"1 \u5c0f\u65f6",hh:"%d \u5c0f\u65f6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4e2a\u6708",MM:"%d \u4e2a\u6708",y:"1 \u5e74",yy:"%d \u5e74"},week:{dow:1,doy:4}})}(n(461))},504:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(63),a=function(e){return r.a.get("/customer",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},c=function(e){return r.a.post("/customer",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},i=function(e){return r.a.put("/customer",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},o=function(e){return r.a.delete("/customer",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))}},695:function(e,t,n){},704:function(e,t,n){"use strict";n.r(t);var r=n(49),a=n.n(r),c=n(71),i=n(170),o=n(89),s=n(0),l=n.n(s),d=n(39),u=n(47),m=n(438),f=n(37),h=n(69),g=n(436),_=n(461),p=n.n(_),y=(n(472),n(454)),w=n(504),k=(n(695),m.a.Search);p.a.locale("zh-cn");t.default=Object(u.g)((function(e){var t=e.location,n=(e.history,"\u4e3b\u8d26\u53f7"===localStorage.getItem("role")),r=Object(s.useState)([]),u=Object(o.a)(r,2),m=u[0],_=u[1],x=Object(s.useState)(0),b=Object(o.a)(x,2),O=b[0],Y=b[1],v=Object(s.useState)(!1),j=Object(o.a)(v,2),I=j[0],E=j[1],L=[{key:"username",dataIndex:"username",title:"\u6240\u5c5e\u9500\u552e\u8d26\u53f7",width:80,align:"center"},{key:"userWxname",dataIndex:"userWxname",title:"\u6240\u5c5e\u9500\u552e\u5fae\u4fe1\u53f7",width:100,align:"center"},{key:"d_contact",dataIndex:"d_contact",title:"\u5ba2\u6237\u59d3\u540d",width:100,align:"center"},{key:"wxName",dataIndex:"wxName",title:"\u5ba2\u6237\u5fae\u4fe1\u6635\u79f0",width:100,align:"center"},{key:"sex",dataIndex:"sex",title:"\u6027\u522b",width:80,align:"center"},{key:"remark",dataIndex:"remark",title:"\u5907\u6ce8",width:110,align:"center"},{key:"createAt",dataIndex:"createAt",title:"\u52a0\u7c89\u65f6\u95f4",align:"center",width:120,render:function(e){return p()(e).format("llll")}},{key:"orderAt",dataIndex:"orderAt",title:"\u6700\u8fd1\u4e00\u6b21\u4e0b\u5355",align:"center",width:120,render:function(e){return p()(e).format("llll")}}],D=[{key:"d_contact",dataIndex:"d_contact",title:"\u59d3\u540d",width:100,fixed:"left",align:"center"},{title:"\u5ba2\u6237\u57fa\u672c\u4fe1\u606f",children:[{key:"wxName",dataIndex:"wxName",title:"\u5fae\u4fe1\u6635\u79f0",width:100,align:"center"},{key:"wxId",dataIndex:"wxId",title:"\u5fae\u4fe1id",width:100,align:"center"},{key:"sex",dataIndex:"sex",title:"\u6027\u522b",width:80,align:"center"},{key:"d_tel",dataIndex:"d_tel",title:"\u8054\u7cfb\u7535\u8bdd",width:110,align:"center"},{key:"d_address",dataIndex:"d_address",title:"\u8be6\u7ec6\u5730\u5740",align:"center",width:150}]},{title:"\u5176\u4ed6\u4fe1\u606f",children:[{key:"username",dataIndex:"username",title:"\u6240\u5c5e\u5fae\u4fe1",width:100,align:"center"},{key:"remark",dataIndex:"remark",title:"\u5907\u6ce8",width:110,align:"center"}]},{key:"infoAction",title:"\u57fa\u672c\u64cd\u4f5c",width:120,align:"center",fixed:"right",render:function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{type:"link"},l.a.createElement(d.b,{to:{pathname:"/admin/sales/customer/edit",query:Object(i.a)({},t)}},"\u7f16\u8f91")),l.a.createElement(f.a,{type:"link",shape:"round",size:"small",onClick:function(){return S(t._id)},danger:!0},"\u5220\u9664"))}},{key:"orderAction",title:"\u8ba2\u5355\u64cd\u4f5c",width:120,align:"center",fixed:"right",render:function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{className:"mb5",type:"primary",shape:"round",size:"small"},l.a.createElement(d.b,{to:{pathname:"/admin/sales/customer/order/create",query:Object(i.a)({},t)}},"\u7acb\u5373\u4e0b\u5355")),l.a.createElement(f.a,{type:"primary",ghost:!0,shape:"round",size:"small"},l.a.createElement(d.b,{to:{pathname:"/admin/sales/customer/order/list",query:{customerId:t._id}}},"\u67e5\u770b\u8ba2\u5355")))}}],P={width:300},M=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,i,o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.getItem("customerPageNum")||1,e.next=3,Object(w.d)({page:n,name:t});case 3:r=e.sent,c=r.code,i=r.msg,o=r.data,s=r.count,1===c?(_(o),Y(s),t&&h.a.success(i)):M();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.a.confirm({title:"\u786e\u5b9a\u5220\u9664\u8fd9\u4e2a\u5ba2\u6237\u5417\uff1f",onOk:function(){var e=Object(c.a)(a.a.mark((function e(){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.b)({id:t});case 2:n=e.sent,r=n.code,c=n.msg,1===r?(h.a.success("\u5220\u9664\u6210\u529f"),M()):h.a.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onCancel:function(){h.a.warning("\u5df2\u53d6\u6d88\u64cd\u4f5c")}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){t.pathname.indexOf("/wechat/customer")>-1&&E(!0),M()}),[]),l.a.createElement("div",{className:"customer-list"},l.a.createElement("div",{className:"container"},l.a.createElement(y.a,{rowKey:function(e){return e._id},dataSource:m,columns:n?L:D,total:O,size:"small",bordered:!0,scroll:{y:400,scrollToFirstRowOnChange:!0},changePage:M,title:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{style:P,placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237\u59d3\u540d/\u6635\u79f0",enterButton:"\u67e5\u8be2",onSearch:M,allowClear:!0}),!I&&l.a.createElement(f.a,{className:"fr",type:"link"},l.a.createElement(d.b,{to:"./add"},"\u6dfb\u52a0\u5ba2\u6237")))}})))}))}}]);