(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[13],{451:function(e,t,n){"use strict";var a=n(167),r=n(88),c=n(458),i=n(0),o=n.n(i),u=n(699);t.a=function(e){var t=e.total,n=e.changePage,s=e.pagination,l=void 0===s?{}:s,f=e.keyWord,m=Object(c.a)(e,["total","changePage","pagination","keyWord"]),d=Object(i.useState)(1),p=Object(r.a)(d,2),h=p[0],b=p[1],v=sessionStorage.getItem(f+"PageNum"),O={current:v?+v:h,total:t,showTotal:function(e){return"\u5171 ".concat(e," \u6761")},showQuickJumper:!0,position:["bottomCenter"],onChange:function(e){sessionStorage.setItem(f+"PageNum",e),b(e),n(e)}};return o.a.createElement(u.a,Object.assign({pagination:!!l&&Object(a.a)({},O,{},l)},m))}},468:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(62),r=function(e){return a.a.get("/wechat",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},c=function(e){return a.a.post("/wechat",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},i=function(e){return a.a.put("/wechat",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},o=function(e){return a.a.put("/wechat/setUser",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))},u=function(e){return a.a.delete("/wechat",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.resolve(e)}))}},690:function(e,t,n){},705:function(e,t,n){"use strict";n.r(t);var a=n(137),r=n(167),c=n(49),i=n.n(c),o=n(70),u=n(88),s=n(0),l=n.n(s),f=n(32),m=n(549),d=n(434),p=n(221),h=n(38),b=n(478),v=n.n(b),O=(n(501),n(451)),w=n(435),g=n(436),j=function(e){var t=e.submitWechat,n=e.modalVisible,a=e.cancel,c=e.wechatInfo,i=l.a.createRef();return Object(s.useEffect)((function(){c._id?i.current.setFieldsValue(Object(r.a)({},c)):i.current.resetFields()}),[]),l.a.createElement(w.a,{ref:i,labelCol:{span:4},wrapperCol:{span:18,offset:0},onFinish:t},l.a.createElement(d.a,{title:"\u5fae\u4fe1\u53f7\u4fe1\u606f",visible:n,okButtonProps:{htmlType:"submit"},onCancel:a,getContainer:!1},l.a.createElement(w.a.Item,{label:"\u5fae\u4fe1id",name:"wechatId"},l.a.createElement(g.a,{placeholder:"\u8bf7\u8f93\u5165\u5fae\u4fe1id"})),l.a.createElement(w.a.Item,{label:"\u5fae\u4fe1\u6635\u79f0",name:"nickName"},l.a.createElement(g.a,{placeholder:"\u8bf7\u8f93\u5165\u5fae\u4fe1\u6635\u79f0"})),l.a.createElement(w.a.Item,{label:"\u5907\u6ce8",name:"remarks"},l.a.createElement(g.a,{placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8"}))))},k=n(468),x=n(168),y=(n(690),m.a.Option);v.a.locale("zh-cn");t.default=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],b=Object(s.useState)(0),v=Object(u.a)(b,2),w=v[0],g=v[1],E=Object(s.useState)(""),I=Object(u.a)(E,2),C=I[0],P=I[1],S=Object(s.useState)([]),N=Object(u.a)(S,2),_=N[0],F=N[1],W=Object(s.useState)(!1),z=Object(u.a)(W,2),V=z[0],J=z[1],T=Object(s.useState)(!1),K=Object(u.a)(T,2),R=K[0],q=K[1],B=Object(s.useState)({}),D=Object(u.a)(B,2),M=D[0],Q=D[1],U=Object(s.useState)([]),A=Object(u.a)(U,2),G=A[0],H=A[1],L=Object(s.useState)(""),X=Object(u.a)(L,2),Y=X[0],Z=X[1],$=Object(s.useState)(!1),ee=Object(u.a)($,2),te=ee[0],ne=ee[1];Object(s.useEffect)((function(){var e=localStorage.getItem("role").indexOf("\u4e3b\u8d26\u53f7")>-1;ne(e),ae()}),[]);var ae=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=sessionStorage.getItem("wechatPageNum")||1,e.next=3,Object(k.d)({page:t});case 3:n=e.sent,a=n.code,r=n.data,o=n.total,1===a&&(c(r),g(o));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)({role:2});case 2:t=e.sent,n=t.code,a=t.data,H(1===n?a:[]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.confirm({title:C?"\u4f60\u60f3\u8981\u4fee\u6539\u8fd9\u6761\u6570\u636e\u5417\uff1f":"\u60a8\u60f3\u8981\u521b\u5efa\u4e00\u6761\u65b0\u6570\u636e\u5417\uff1f",onOk:function(){var e=Object(o.a)(i.a.mark((function e(){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=6;break}return e.next=3,Object(k.c)(Object(r.a)({},t,{_id:C}));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,Object(k.a)(Object(r.a)({},t));case 8:e.t0=e.sent;case 9:n=e.t0,a=n.code,c=n.msg,1===a?(p.a.success("\u64cd\u4f5c\u6210\u529f"),oe(),ae()):p.a.error(c||"\u90e8\u5206\u5b57\u6bb5\u683c\u5f0f\u4e0e\u987a\u4e30\u540e\u53f0\u5b57\u6bb5\u683c\u5f0f\u4e0d\u5339\u914d\uff0c\u8bf7\u8054\u7cfb\u5f00\u53d1\u4eba\u5458");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onCancel:function(){p.a.warning("\u5df2\u53d6\u6d88\u64cd\u4f5c")}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(t._id),J(!0),Q(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){J(!1),P(""),Q({})},ue=function(){q(!1),F([]),Z("")},se=[{key:"wechatId",dataIndex:"wechatId",title:"\u5fae\u4fe1id",align:"center",width:150},{key:"nickName",dataIndex:"nickName",title:"\u5fae\u4fe1\u6635\u79f0",width:150,align:"center"},{key:"remarks",dataIndex:"remarks",title:"\u5907\u6ce8",width:150,align:"center"},{key:"userName",dataIndex:"userName",title:"\u6240\u5c5e\u9500\u552e",width:150,align:"center",render:function(e){return e||"\u65e0"},filters:[{text:"\u5168\u90e8",value:"all"},{text:"\u65e0\u6240\u5c5e\u9500\u552e",value:"empty"}].concat(Object(a.a)(G.map((function(e){return{text:e.nickName||e.username,value:e._id}})))),filterMultiple:!1,onFilter:function(e,t){return"all"===e||("empty"!==e?t.userId===e:!t.userId)},onFilterDropdownVisibleChange:function(e){e&&re()}},{key:"action",dataIndex:"action",title:"\u64cd\u4f5c",width:120,align:"center",fixed:"right",render:function(e,t){return te?l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{type:"link",size:"small",onClick:function(){return ie(t)}},"\u7f16\u8f91"),l.a.createElement(h.a,{type:"link",size:"small",onClick:function(){return e=t._id,void d.a.confirm({title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u6761\u6570\u636e\u5417\uff1f",onOk:function(){var t=Object(o.a)(i.a.mark((function t(){var n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.b)({_id:e});case 2:n=t.sent,a=n.code,r=n.msg,1===a?(p.a.success(r),ae()):p.a.error(r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),onCancel:function(){p.a.warning("\u5df2\u53d6\u6d88\u64cd\u4f5c")}});var e},danger:!0},"\u5220\u9664")):l.a.createElement(h.a,{type:"link",size:"small"},l.a.createElement(f.b,{to:{pathname:"./customer/list",query:{userWxId:t._id}}},"\u67e5\u770b\u5ba2\u6237"))}}];return l.a.createElement("div",{className:"wechat-list"},l.a.createElement("div",{className:"container"},l.a.createElement(O.a,{rowKey:function(e){return e._id},dataSource:n,columns:se,total:w,size:"small",bordered:!0,changePage:ae,keyWord:"wechat",title:function(){return te?l.a.createElement(h.a,{type:"link",onClick:function(){return J(!0)}},"\u6dfb\u52a0\u5fae\u4fe1\u53f7"):l.a.createElement("strong",null,"\u5fae\u4fe1\u53f7\u5217\u8868")},rowSelection:te&&{selectedRowKeys:_,onChange:function(e){return F(e)},columnTitle:l.a.createElement("a",{className:"text_d",onClick:function(){_.length?(!G.length&&re(),q(!0)):p.a.warning("\u8bf7\u5148\u9009\u62e9\u5fae\u4fe1\u53f7")}},"\u6279\u91cf\u4fee\u6539\u6240\u5c5e\u9500\u552e")}})),V&&l.a.createElement(j,{modalVisible:V,wechatInfo:M,cancel:oe,submitWechat:ce}),l.a.createElement(d.a,{title:"\u9009\u62e9\u6240\u5c5e\u9500\u552e",visible:R,onOk:function(){var e=G.filter((function(e){return e._id===Y}))[0].nickName;d.a.confirm({title:"\u8bf7\u60a8\u786e\u8ba4\u64cd\u4f5c",onOk:function(){var t=Object(o.a)(i.a.mark((function t(){var n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.e)({userId:Y,userName:e,_ids:_});case 2:n=t.sent,a=n.code,r=n.msg,1===a?(p.a.success(r),ue(),ae()):p.a.error(r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),onCancel:function(){p.a.warning("\u64cd\u4f5c\u5df2\u53d6\u6d88")}})},onCancel:ue},l.a.createElement(m.a,{style:{width:"80%"},value:Y,onChange:function(e){return Z(e)}},l.a.createElement(y,{value:"",disabled:!0},"\u8bf7\u9009\u62e9\u9500\u552e"),G.map((function(e){return l.a.createElement(y,{key:e._id,value:e._id},e.nickName)})))))}}}]);