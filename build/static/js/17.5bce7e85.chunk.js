(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[17],{657:function(e,a,r){"use strict";r.r(a);var t=r(36),n=r.n(t),l=r(62),c=r(82),s=r(0),o=r.n(s),m=r(521),i=r(419),u=r(216),p=r(420),d=r(421),g=r(47),E=r(155),f=m.a.Option;a.default=function(e){var a=Object(s.useState)(""),r=Object(c.a)(a,2),t=r[0],v=r[1],h=o.a.createRef(),b=function(){h.current.resetFields()};return Object(s.useEffect)((function(){var e=localStorage.getItem("role");v(e)}),[]),o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement(p.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:8}}},{ref:h,onFinish:function(e){e.power=e.power?1:0,i.a.confirm({title:"\u786e\u5b9a\u521b\u5efa\u4e00\u4e2a\u65b0\u8d26\u6237\u5417\uff1f",onOk:function(){var a=Object(l.a)(n.a.mark((function a(){var r,t,l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(E.a)(e);case 2:r=a.sent,t=r.code,l=r.msg,1===t?(b(),u.a.success(l)):u.a.error(l);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()})},initialValues:{power:!1}}),o.a.createElement(p.a.Item,{name:"username",label:"\u7528\u6237\u540d",validateTrigger:["onBlur","onChange"],rules:[{validator:function(e,a){return a?/[\u4E00-\u9FA5]/g.test(a)?Promise.reject("\u4e0d\u80fd\u8f93\u5165\u6c49\u5b57!"):Promise.resolve():Promise.reject("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a")},validateTrigger:"onBlur"}],required:!0},o.a.createElement(d.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})),o.a.createElement(p.a.Item,{name:"nickName",label:"\u6635\u79f0"},o.a.createElement(d.a,{placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0"})),o.a.createElement(p.a.Item,{name:"password",label:"\u5bc6\u7801",validateTrigger:["onBlur","onChange"],rules:[{required:!0,message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a",validateTrigger:"onBlur"},{min:9,max:16,message:"\u5bc6\u7801\u957f\u5ea6\u57289~16\u4f4d\u4e4b\u95f4",validateTrigger:["onBlur","onChange"]}]},o.a.createElement(d.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})),o.a.createElement(p.a.Item,{name:"remarks",label:"\u5907\u6ce8",rules:[{required:!0,message:"\u5907\u6ce8\u4e0d\u80fd\u4e3a\u7a7a"}]},o.a.createElement(d.a,{placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8"})),o.a.createElement(p.a.Item,{label:"\u7ba1\u7406\u5458\u6743\u9650",name:"role",required:!0},o.a.createElement(m.a,{placeholder:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458\u6743\u9650"},"\u540e\u53f0\u7ba1\u7406\u5458\u8d26\u53f7"===t&&o.a.createElement(f,{value:0},"\u516c\u53f8/\u56e2\u961f"),"\u4e3b\u8d26\u53f7"===t&&o.a.createElement(f,{value:1},"\u7ba1\u7406"),"\u7ba1\u7406\u8d26\u53f7"===t&&o.a.createElement(f,{value:2},"\u9500\u552e"))),o.a.createElement(p.a.Item,{colon:!1,wrapperCol:{offset:8}},o.a.createElement(g.a,{htmlType:"submit",type:"primary"},"\u6dfb\u52a0\u7528\u6237"),o.a.createElement(g.a,{className:"ml20",onClick:b,type:"ghost"},"\u6e05\u7a7a")))))}}}]);