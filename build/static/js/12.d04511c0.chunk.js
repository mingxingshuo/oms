(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[12],{440:function(e,t,n){"use strict";var r=n(154),a=n(82),c=n(444),i=n(0),o=n.n(i),l=n(662);t.a=function(e){var t=e.total,n=e.changePage,u=e.pagination,d=Object(c.a)(e,["total","changePage","pagination"]),s=Object(i.useState)(1),f=Object(a.a)(s,2),m=f[0],h=f[1],g={current:m,total:t,showTotal:function(e){return"\u5171 ".concat(e," \u6761")},showQuickJumper:!0,position:["bottomCenter"],onChange:function(e){h(e),n(e),sessionStorage.setItem("orderPageNum",e)}};return o.a.createElement(l.a,Object.assign({pagination:Object(r.a)({},g,{},u)},d))}},452:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return u}));var r=n(71),a=function(e){return r.a.get("/order/find",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},c=function(e){return r.a.post("/order/create",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},i=function(e){return r.a.get("/order/submit",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},o=function(e){return r.a.get("/order/confirm",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},l=function(e){return r.a.get("/order/route",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},u=function(e){return r.a.get("/order/findOne",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))}},627:function(e,t,n){},658:function(e,t,n){"use strict";n.r(t);var r=n(36),a=n.n(r),c=n(62),i=n(43),o=n(44),l=n(46),u=n(45),d=n(0),s=n.n(d),f=n(25),m=n(421),h=n(665),g=n(664),p=n(216),v=n(419),y=n(160),w=n(47),k=n(666),x=n(675),O=n(674),b=n(673),j=n(438),E=n.n(j),I=(n(460),n(440)),_=n(452),C=(n(627),m.a.Search),S=h.a.Step,P=g.a.Text;E.a.locale("zh-cn");var D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={orderList:[],total:0,visible:!1,deliveryInfo:[]},e.queryDeliveryStatus=function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.e)({tracking_number:n,tracking_type:2});case 2:r=t.sent,c=r.code,i=r.msg,o=r.data,1===c?(e.setState({deliveryInfo:o.reverse()}),e.showDrawer()):p.a.error(i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.findByCondition=function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.c)({orderid:n});case 2:r=t.sent,c=r.code,i=r.msg,o=r.data,1===c?(p.a.success(i),e.setState({orderList:o,total:1})):p.a.error(i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getOrderList=Object(c.a)(a.a.mark((function t(){var n,r,c,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=sessionStorage.getItem("orderPageNum")||1,t.next=3,Object(_.d)({page:n});case 3:r=t.sent,c=r.code,i=r.data,o=r.count,1===c&&e.setState({orderList:i,total:o});case 8:case"end":return t.stop()}}),t)}))),e.changePage=function(){e.getOrderList()},e.submitOrder=function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v.a.confirm({title:"\u4e0b\u5355\u540e\uff0c\u60a8\u7684\u8ba2\u5355\u5c06\u4f1a\u53d1\u9001\u5230\u987a\u4e30\u540e\u53f0\uff0c\u786e\u5b9a\u7ee7\u7eed\u64cd\u4f5c\u5417\uff1f",style:{top:"30%"},onOk:function(){var t=Object(c.a)(a.a.mark((function t(){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.f)({orderid:n});case 2:r=t.sent,c=r.code,i=r.msg,1===c?(p.a.success("\u4e0b\u5355\u6210\u529f"),e.getOrderList()):p.a.error(i||"\u90e8\u5206\u5b57\u6bb5\u683c\u5f0f\u4e0e\u987a\u4e30\u540e\u53f0\u5b57\u6bb5\u683c\u5f0f\u4e0d\u5339\u914d\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u4eba\u5458");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),onCancel:function(){p.a.warning("\u5df2\u53d6\u6d88\u64cd\u4f5c")}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.changeOrderState=function(e){v.a.confirm({title:s.a.createElement("h3",{className:"order-modal-title"},s.a.createElement(x.a,{className:"mr10"}),"\u63d0\u793a\uff1a"),content:s.a.createElement("p",{className:"order-modal-content"},"\u53d6\u6d88\u8ba2\u5355\u540e\uff0c\u8be5\u8ba2\u5355\u5c06\u4e0d\u518d\u663e\u793a\u5728\u60a8\u7684\u5217\u8868\u4e2d\uff0c\u5e76\u4e14\u987a\u4e30\u4e5f\u4e0d\u518d\u63a5\u5355\uff0c\u786e\u8ba4\u7ee7\u7eed\u64cd\u4f5c\u5417\uff1f"),style:{top:"30%"},onOk:function(){var t=Object(c.a)(a.a.mark((function t(){var n,r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.orderid,t.next=3,Object(_.a)({orderid:n,dealtype:2});case 3:r=t.sent,c=r.code,i=r.msg,1===c?p.a.success("\u72b6\u6001\u4fee\u6539\u6210\u529f"):p.a.error(i);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),onCancel:function(){p.a.warning("\u5df2\u53d6\u6d88\u64cd\u4f5c")}})},e.showDrawer=function(){e.setState({visible:!0})},e.onClose=function(){e.setState({visible:!1})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getOrderList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.orderList,r=t.total,a=t.deliveryInfo,c=[{key:"orderid",dataIndex:"orderid",title:"\u8ba2\u5355\u53f7",align:"center",fixed:"left",width:150,render:function(e,t){return s.a.createElement(P,{copyable:{text:"\u5730\u5740\uff1a".concat(t.d_address," | \n                                    \r\n\u59d3\u540d\uff1a").concat(t.d_contact," | \n                                    \r\n\u7535\u8bdd\uff1a").concat(t.d_tel," | \n                                    \r\n\u4e0b\u5355\uff1a").concat(t.Cargo.map((function(e){return"".concat(e.count,"-").concat(e.name," ")})).join(",")).concat(N(t.AddedService)?" | ":"","\n                                    ").concat(N(t.AddedService))}},s.a.createElement(y.a,{title:"\u590d\u5236\u8ba2\u5355\u4fe1\u606f"},e))}},{key:"mailno",dataIndex:"mailno",title:"\u987a\u4e30\u8fd0\u5355\u53f7",width:150,align:"center",fixed:"left",render:function(e){return e||"\u4e0b\u5355\u540e\u5373\u53ef\u751f\u6210\u8fd0\u5355\u53f7"}},{key:"dealtype",dataIndex:"dealtype",title:"\u8ba2\u5355\u72b6\u6001",width:80,align:"center",fixed:"left",render:function(e){return s.a.createElement("div",{className:"order-status"},s.a.createElement("span",{className:0===e?"info":1===e?"complete":"cancel"},0===e?"\u672a\u4e0b\u5355":1===e?"\u5df2\u4e0b\u5355":"\u5df2\u53d6\u6d88"))}},{title:"\u7269\u54c1\u4fe1\u606f",children:[{key:"name",dataIndex:"Cargo",title:"\u8d27\u54c1\u540d\u79f0",align:"center",width:100,render:function(e){return e&&e.length?s.a.createElement("ul",{className:"cargo-list"},e.map((function(e,t){return s.a.createElement("li",{key:e.name+t},e.name)}))):{children:"\u6682\u65e0\u8d27\u54c1\u4fe1\u606f",props:{colSpan:2}}}},{key:"count",dataIndex:"Cargo",title:"\u8d27\u54c1\u6570\u91cf",align:"center",width:100,render:function(e){return e&&e.length?s.a.createElement("ul",{className:"cargo-list"},e.map((function(e,t){return s.a.createElement("li",{key:e.count+""+t},e.count)}))):{props:{colSpan:0}}}}]},{title:"\u5bc4\u4ef6\u4eba\u4fe1\u606f",children:[{key:"j_company",dataIndex:"j_company",title:"\u5bc4\u4ef6\u4eba\u516c\u53f8\u540d\u79f0",width:100,align:"center"},{key:"j_contact",dataIndex:"j_contact",title:"\u5bc4\u4ef6\u4eba\u59d3\u540d",width:80,align:"center"},{key:"j_tel",dataIndex:"j_tel",title:"\u5bc4\u4ef6\u4eba\u8054\u7cfb\u7535\u8bdd",width:110,align:"center"},{key:"j_address",dataIndex:"j_address",title:"\u5bc4\u4ef6\u4eba\u8be6\u7ec6\u5730\u5740",align:"center",width:150}]},{title:"\u6536\u4ef6\u4eba\u4fe1\u606f",children:[{key:"d_company",dataIndex:"d_company",title:"\u6536\u4ef6\u4eba\u516c\u53f8\u540d\u79f0",width:100,align:"center"},{key:"d_contact",dataIndex:"d_contact",title:"\u6536\u4ef6\u4eba\u59d3\u540d",width:80,align:"center"},{key:"d_tel",dataIndex:"d_tel",title:"\u6536\u4ef6\u4eba\u8054\u7cfb\u7535\u8bdd",width:110,align:"center"},{key:"d_address",dataIndex:"d_address",title:"\u6536\u4ef6\u4eba\u8be6\u7ec6\u5730\u5740",align:"center",width:150}]},{title:"\u589e\u503c\u670d\u52a1",children:[{key:"AddedService",dataIndex:"AddedService",title:"\u662f\u5426\u4ee3\u6536\u8d27\u6b3e",align:"center",width:80,render:function(e){return e.filter((function(e){return"COD"===e.name})).length?s.a.createElement(O.a,{twoToneColor:"#52c41a"}):s.a.createElement(b.a,null)}},{key:"value",dataIndex:"AddedService",title:"\u4ee3\u6536\u8d27\u6b3e\u91d1\u989d",align:"center",width:80,render:function(e){return e.filter((function(e){return"COD"===e.name})).length?e.filter((function(e){return"COD"===e.name}))[0].value:"\u2014\u2014"}},{key:"value1",dataIndex:"AddedService",title:"\u4ee3\u6536\u8d27\u6b3e\u5361\u53f7",align:"center",width:150,render:function(e){return e.filter((function(e){return"COD"===e.name})).length?e.filter((function(e){return"COD"===e.name}))[0].value1:"\u2014\u2014"}}]},{title:"\u8ba2\u5355\u65f6\u95f4",children:[{key:"createAt",dataIndex:"createAt",title:"\u4e0b\u5355\u65f6\u95f4",align:"center",width:120,render:function(e){return E()(e).format("llll")}},{key:"updateAt",dataIndex:"updateAt",title:"\u6700\u8fd1\u4e00\u6b21\u4fee\u6539",align:"center",width:120,render:function(e){return E()(e).format("llll")}},{key:"sendstarttime",dataIndex:"sendstarttime",title:"\u4e0a\u95e8\u53d6\u4ef6\u65f6\u95f4",align:"center",width:120,render:function(e){return E()(e).format("llll")}}]},{key:"action",dataIndex:"action",title:"\u64cd\u4f5c",width:120,align:"center",fixed:"right",render:function(t,n){return s.a.createElement(s.a.Fragment,null,n.mailno?s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{type:"link",onClick:function(){return e.queryDeliveryStatus(n.orderid)}},"\u67e5\u8be2\u7269\u6d41\u72b6\u6001"),s.a.createElement(w.a,{type:"link",onClick:function(){return e.changeOrderState(n)},danger:!0},"\u53d6\u6d88\u8ba2\u5355")):s.a.createElement(w.a,{type:"primary",ghost:!0,shape:"round",size:"small",onClick:function(){return e.submitOrder(n.orderid)}},"\u7acb\u5373\u4e0b\u5355"))}}],i={width:360};return s.a.createElement("div",{className:"order-list"},s.a.createElement("div",{className:"container"},s.a.createElement(I.a,{rowKey:function(e){return e._id},dataSource:n,columns:c,total:r,size:"small",bordered:!0,scroll:{x:"max-content",y:400,scrollToFirstRowOnChange:!0},changePage:this.changePage,title:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(C,{style:i,placeholder:"\u8bf7\u8f93\u5165\u8ba2\u5355\u53f7",enterButton:"\u67e5\u8be2",onSearch:e.findByCondition}),s.a.createElement(w.a,{className:"fr",type:"link"},s.a.createElement(f.b,{to:"./create"},"\u521b\u5efa\u8ba2\u5355")))}})),s.a.createElement(k.a,{placement:"left",closable:!1,onClose:this.onClose,visible:this.state.visible},s.a.createElement(h.a,{progressDot:!0,current:a.length,direction:"vertical",size:"small"},a.map((function(e){return s.a.createElement(S,{key:e.accept_time,title:e.accept_address,description:e.accept_time+e.remark})})))))}}]),n}(d.Component);function N(e){var t=e.filter((function(e){return"COD"===e.name}));return e.length&&t.length?t.length?"\r\n\u4ee3\u6536\u91d1\u989d\uff1a".concat(t[0].value):void 0:""}t.default=D}}]);