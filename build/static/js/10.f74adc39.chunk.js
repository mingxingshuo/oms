(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[10],{465:function(e,a,t){"use strict";t.d(a,"d",(function(){return r})),t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return c})),t.d(a,"e",(function(){return m})),t.d(a,"c",(function(){return o}));var n=t(76),r=function(e){return n.a.get("/order/find",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},l=function(e){return n.a.post("/order/create",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},c=function(e){return n.a.get("/order/confirm",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},m=function(e){return n.a.post("/order/OrderState",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},o=function(e){return n.a.get("/order/OrderSearch",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))}},616:function(e,a,t){},633:function(e,a,t){"use strict";t.r(a);var n=t(152),r=t(39),l=t.n(r),c=t(64),m=t(158),o=t(0),s=t.n(o),u=t(409),i=t(216),d=t(411),E=t(80),p=t(31),f=t(632),b=t(410),h=t(613),g=t(629),v=t(45),I=t(637),y=t(636),j=t(464),O=t.n(j),q=t(465),N=t(628),w=[{key:"name",dataIndex:"name",title:"\u8d27\u7269\u540d\u79f0",align:"center"},{key:"count",dataIndex:"count",title:"\u8d27\u7269\u6570\u91cf",align:"center"}],Y=function(e){var a=e.cargo,t=Object(o.useState)([]),n=Object(m.a)(t,2),r=n[0],l=n[1];return Object(o.useEffect)((function(){l(a)})),s.a.createElement(N.a,{locale:{emptyText:"\u6682\u65e0\u8d27\u54c1\u4fe1\u606f\uff0c\u8bf7\u5148\u6dfb\u52a0"},className:"mb20",size:"small",bordered:!0,rowKey:function(e,a){return a},columns:w,dataSource:r,pagination:!1})};t(616);function _(e,a){for(var t=[],n=e;n<a;n++)t.push(n);return t}function k(e){return e&&e<O()().startOf("day")}function D(){return{disabledHours:function(){return _(0,24).splice(0,8).concat(_(0,24).splice(-2,2))}}}a.default=function(e){var a=s.a.createRef(),t=Object(o.useState)(""),r=Object(m.a)(t,2),j=r[0],N=r[1],w=Object(o.useState)([]),_=Object(m.a)(w,2),M=_[0],S=_[1],x=function(){a.current.resetFields()};Object(o.useEffect)((function(){N(function(){var e=Math.ceil(999*Math.random());return e=(Array(4).join(0)+e).slice(-4),"GQ"+O()(Date.now()).format("YYYYMMDD")+Date.now()+e}())}),[]);return s.a.createElement("div",{className:"add-order"},s.a.createElement("div",{className:"container"},s.a.createElement(d.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:9}},wrapperCol:{xs:{span:24},sm:{span:15},offset:0}},{ref:a,onFinish:function(e){e.orderid=j,e.Cargo=M,e.AddedService={value:e.value,value1:e.value1},e.sendstarttime=O()(e.sendstarttime).format("YYYY-MM-DD HH:mm:ss"),u.a.confirm({title:"\u786e\u5b9a\u6dfb\u52a0\u4e00\u4e2a\u65b0\u8ba2\u5355\u5417\uff1f",onOk:function(){var a=Object(c.a)(l.a.mark((function a(){var t,n,r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(q.b)(e);case 2:t=a.sent,n=t.code,r=t.msg,1===n?(x(),i.a.success(r)):i.a.error(r);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()})},initialValues:{isAdded:!1}}),s.a.createElement(E.a,{gutter:24},s.a.createElement(p.a,{span:24},s.a.createElement(f.a,{bordered:!0,layout:"vertical"},s.a.createElement(f.a.Item,{label:s.a.createElement("h2",null,"\u8d27\u54c1\u4fe1\u606f")},s.a.createElement(E.a,{gutter:24},s.a.createElement(p.a,{span:24,offset:1,className:"mb20"},s.a.createElement("p",{className:"cargo-tips"},s.a.createElement(I.a,{twoToneColor:"ff5566",className:"mr5 ml10"}),"\u5c0f\u63d0\u793a: \u8d27\u54c1\u4fe1\u606f\u4ee5\u4e0b\u65b9\u8868\u683c\u4e2d\u7684\u6570\u636e\u4e3a\u51c6\uff0c\u672a\u6dfb\u52a0\u5230\u8868\u683c\u4e2d\u7684\u6570\u636e\u65e0\u6548"))),s.a.createElement(E.a,{gutter:22,className:"mb_20"},s.a.createElement(p.a,{span:24},s.a.createElement(E.a,{gutter:24},s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{label:"\u8ba2\u5355\u53f7"},j)))),s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{label:"\u8d27\u54c1\u540d\u79f0",name:"name",required:!0,hiderequiredmark:"true"},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u8d27\u54c1\u540d\u79f0"}))),s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"count",label:"\u8d27\u54c1\u6570\u91cf"},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u8d27\u54c1\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a1\u4ef6"}))),s.a.createElement(p.a,{span:4},s.a.createElement(y.a,{className:"plus-cargo cursor",onClick:function(){var e=a.current.getFieldsValue(),t=e.name,r=e.count;t?(!r&&(r=1),S([].concat(Object(n.a)(M),[{name:t,count:r}])),a.current.setFieldsValue({name:"",count:null})):i.a.error("\u8d27\u7269\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a")}})),s.a.createElement(p.a,{span:24},s.a.createElement(E.a,{gutter:24},s.a.createElement(p.a,{span:16,offset:1},s.a.createElement(Y,{cargo:M})))))))),s.a.createElement(p.a,{span:24},s.a.createElement(f.a,{bordered:!0,layout:"vertical"},s.a.createElement(f.a.Item,{label:s.a.createElement("h2",null,"\u5bc4\u4ef6\u4eba\u4fe1\u606f")},s.a.createElement(E.a,{gutter:24,className:"mb_20"},s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"j_company",label:"\u5bc4\u4ef6\u4eba\u516c\u53f8\u540d\u79f0",required:!0},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc4\u4ef6\u4eba\u516c\u53f8\u540d\u79f0"}))),s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"j_contact",label:"\u5bc4\u4ef6\u4eba\u59d3\u540d",required:!0},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc4\u4ef6\u4eba\u59d3\u540d"}))),s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"j_tel",label:"\u5bc4\u4ef6\u4eba\u8054\u7cfb\u7535\u8bdd",required:!0},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc4\u4ef6\u4eba\u8054\u7cfb\u7535\u8bdd"}))),s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"j_address",label:"\u5bc4\u4ef6\u4eba\u8be6\u7ec6\u5730\u5740",required:!0},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc4\u4ef6\u4eba\u8be6\u7ec6\u5730\u5740"}))))))),s.a.createElement(p.a,{span:24},s.a.createElement(f.a,{bordered:!0,layout:"vertical"},s.a.createElement(f.a.Item,{label:s.a.createElement("h2",null,"\u6536\u4ef6\u4eba\u4fe1\u606f")},s.a.createElement(E.a,{gutter:24,className:"mb_20"},s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"d_company",label:"\u6536\u4ef6\u4eba\u516c\u53f8\u540d\u79f0",required:!0},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u6536\u4ef6\u4eba\u516c\u53f8\u540d\u79f0"}))),s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"d_contact",label:"\u6536\u4ef6\u4eba\u59d3\u540d",required:!0},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u6536\u4ef6\u4eba\u59d3\u540d"}))),s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"d_tel",label:"\u6536\u4ef6\u4eba\u8054\u7cfb\u7535\u8bdd",required:!0},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u6536\u4ef6\u4eba\u8054\u7cfb\u7535\u8bdd"}))),s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"d_address",label:"\u6536\u4ef6\u4eba\u8be6\u7ec6\u5730\u5740",required:!0},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u6536\u4ef6\u4eba\u8be6\u7ec6\u5730\u5740"}))))))),s.a.createElement(p.a,{span:24},s.a.createElement(f.a,{bordered:!0,layout:"vertical"},s.a.createElement(f.a.Item,{label:s.a.createElement("h2",null,"\u589e\u503c\u670d\u52a1")},s.a.createElement(E.a,{gutter:24,className:"mb_20"},s.a.createElement(p.a,{span:24},s.a.createElement(E.a,{gutter:24},s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"isAdded",label:"\u4ee3\u6536\u8d27\u6b3e\u670d\u52a1",required:!0,valuePropName:"checked"},s.a.createElement(h.a,null))))),s.a.createElement(d.a.Item,{noStyle:!0,shouldUpdate:function(e,a){return e.isAdded!==a.isAdded}},(function(e){return(0,e.getFieldValue)("isAdded")?s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"value",label:"\u4ee3\u6536\u8d27\u6b3e\u91d1\u989d",required:!0},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u9700\u8981\u4ee3\u6536\u7684\u8d27\u6b3e\u91d1\u989d"}))),s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"value1",label:"\u4ee3\u6536\u8d27\u6b3e\u5361\u53f7",required:!0},s.a.createElement(b.a,{placeholder:"\u8bf7\u8f93\u5165\u4ee3\u6536\u8d27\u6b3e\u5361\u53f7"})))):null})))))),s.a.createElement(p.a,{span:24},s.a.createElement(f.a,{bordered:!0,layout:"vertical"},s.a.createElement(f.a.Item,{label:s.a.createElement("h2",null,"\u5176\u4ed6\u4fe1\u606f")},s.a.createElement(p.a,{span:8},s.a.createElement(d.a.Item,{name:"sendstarttime",label:"\u4e0a\u95e8\u53d6\u4ef6\u65f6\u95f4",required:!0},s.a.createElement(g.a,{placeholder:"\u8bf7\u8f93\u5165\u4e0a\u95e8\u53d6\u4ef6\u65f6\u95f4",disabledDate:k,disabledTime:D,format:"YYYY-MM-DD HH:mm:ss",showTime:{defaultValue:O()("09:00:00","HH:mm:ss")},showToday:!1}))))))),s.a.createElement(d.a.Item,{className:"btn-wrapper",colon:!1,wrapperCol:{offset:10}},s.a.createElement(v.a,{htmlType:"submit",type:"primary"},"\u521b\u5efa\u8ba2\u5355"),s.a.createElement(v.a,{className:"ml20",onClick:x,type:"ghost"},"\u6e05\u7a7a")))))}}}]);