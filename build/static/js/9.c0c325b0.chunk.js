(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[9],{458:function(e,t,n){"use strict";var r=n(0),a=n(477),o=n(1),c=n.n(o),l=n(460),u=n(461),i=n(31),s=n(459),f=n(478);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},b=function(e,t){var n,o=r.useContext(s.b),l=r.useContext(i.b),u=l.getPrefixCls,b=l.direction,v=r.useRef(),y=Object(f.a)(t,v),h=e.prefixCls,g=e.className,E=e.children,x=e.style,O=p(e,["prefixCls","className","children","style"]),w=u("radio",h),C=m({},O);o&&(C.name=o.name,C.onChange=function(t){e.onChange&&e.onChange(t),(null===o||void 0===o?void 0:o.onChange)&&o.onChange(t)},C.checked=e.value===o.value,C.disabled=e.disabled||o.disabled);var k=c()(g,(d(n={},"".concat(w,"-wrapper"),!0),d(n,"".concat(w,"-wrapper-checked"),C.checked),d(n,"".concat(w,"-wrapper-disabled"),C.disabled),d(n,"".concat(w,"-wrapper-rtl"),"rtl"===b),n));return r.createElement("label",{className:k,style:x,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(a.a,m({},C,{prefixCls:w,ref:y})),void 0!==E?r.createElement("span",null,E):null)},v=r.forwardRef(b);v.displayName="Radio",v.Group=l.a,v.Button=u.a,v.defaultProps={type:"radio"},t.a=v},459:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=r.createContext(null),o=a.Provider;t.b=a},460:function(e,t,n){"use strict";var r=n(0),a=n(1),o=n.n(a),c=n(458),l=n(31),u=n(29),i=n(459);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(e){var t,n=r.useContext(l.b),a=n.getPrefixCls,d=n.direction,m=r.useContext(u.b);void 0!==e.value?t=e.value:void 0!==e.defaultValue&&(t=e.defaultValue);var p=f(r.useState(t),2),b=p[0],v=p[1],y=f(r.useState(e.value),2),h=y[0],g=y[1];r.useEffect((function(){g(e.value),void 0===e.value&&h===e.value||v(e.value)}),[e.value]);return r.createElement(i.a,{value:{onChange:function(t){var n=b,r=t.target.value;"value"in e||v(r);var a=e.onChange;a&&r!==n&&a(t)},value:b,disabled:e.disabled,name:e.name}},function(){var t,n=e.prefixCls,l=e.className,u=void 0===l?"":l,i=e.options,f=e.buttonStyle,p=e.disabled,v=e.children,y=e.size,h=e.style,g=e.id,E=e.onMouseEnter,x=e.onMouseLeave,O=a("radio",n),w="".concat(O,"-group"),C=v;i&&i.length>0&&(C=i.map((function(e){return"string"===typeof e?r.createElement(c.a,{key:e,prefixCls:O,disabled:p,value:e,checked:b===e},e):r.createElement(c.a,{key:"radio-group-value-options-".concat(e.value),prefixCls:O,disabled:e.disabled||p,value:e.value,checked:b===e.value,style:e.style},e.label)})));var k=y||m,j=o()(w,"".concat(w,"-").concat(f),(s(t={},"".concat(w,"-").concat(k),k),s(t,"".concat(w,"-rtl"),"rtl"===d),t),u);return r.createElement("div",{className:j,style:h,onMouseEnter:E,onMouseLeave:x,id:g},C)}())};m.defaultProps={buttonStyle:"outline"},t.a=r.memo(m)},461:function(e,t,n){"use strict";var r=n(0),a=n(458),o=n(31),c=n(459);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},i=function(e,t){var n=r.useContext(c.b),i=r.useContext(o.b).getPrefixCls,s=e.prefixCls,f=u(e,["prefixCls"]),d=i("radio-button",s);return n&&(f.checked=e.value===n.value,f.disabled=e.disabled||n.disabled),r.createElement(a.a,l({prefixCls:d},f,{type:"radio",ref:t}))};t.a=r.forwardRef(i)},471:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(63),a=function(e){return r.a.get("/customer",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},o=function(e){return r.a.post("/customer",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},c=function(e){return r.a.put("/customer",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},l=function(e){return r.a.delete("/customer",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))}},477:function(e,t,n){"use strict";var r=n(498),a=n.n(r),o=n(30),c=n.n(o),l=n(110),u=n.n(l),i=n(111),s=n.n(i),f=n(112),d=n.n(f),m=n(0),p=n.n(m),b=n(1),v=n.n(b),y=function(e){function t(n){u()(this,t);var r=s()(this,e.call(this,n));r.handleChange=function(e){var t=r.props,n=t.disabled,a=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:c()({},r.props,{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in n?n.checked:n.defaultChecked;return r.state={checked:a},r}return d()(t,e),t.getDerivedStateFromProps=function(e,t){return"checked"in e?c()({},t,{checked:e.checked}):null},t.prototype.focus=function(){this.input.focus()},t.prototype.blur=function(){this.input.blur()},t.prototype.render=function(){var e,t=this.props,n=t.prefixCls,r=t.className,o=t.style,l=t.name,u=t.id,i=t.type,s=t.disabled,f=t.readOnly,d=t.tabIndex,m=t.onClick,b=t.onFocus,y=t.onBlur,h=t.autoFocus,g=t.value,E=t.required,x=a()(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value","required"]),O=Object.keys(x).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=x[t]),e}),{}),w=this.state.checked,C=v()(n,r,((e={})[n+"-checked"]=w,e[n+"-disabled"]=s,e));return p.a.createElement("span",{className:C,style:o},p.a.createElement("input",c()({name:l,id:u,type:i,required:E,readOnly:f,disabled:s,tabIndex:d,className:n+"-input",checked:!!w,onClick:m,onFocus:b,onBlur:y,onChange:this.handleChange,autoFocus:h,ref:this.saveInput,value:g},O)),p.a.createElement("span",{className:n+"-inner"}))},t}(m.Component);y.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},t.a=y},478:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){"function"===typeof e?e(t):"object"===r(e)&&e&&"current"in e&&(e.current=t)}function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){a(t,e)}))}}n.d(t,"a",(function(){return o}))},498:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},499:function(e,t,n){"use strict";var r=n(458),a=n(460),o=n(461);r.a.Button=o.a,r.a.Group=a.a,t.default=r.a},505:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(63),a=function(e){return r.a.get("/wechat",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},o=function(e){return r.a.post("/wechat",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},c=function(e){return r.a.put("/wechat",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},l=function(e){return r.a.put("/wechat/setUser",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))},u=function(e){return r.a.delete("/wechat",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return console.log(e)}))}},547:function(e,t,n){"use strict";var r=n(0),a=n(1),o=n.n(a),c=n(43),l=n(94),u=n(9),i=n(31);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return void 0!==e&&null!==e}var d=function(e){var t,n=e.itemPrefixCls,a=e.component,c=e.span,l=e.className,u=e.style,i=e.bordered,d=e.label,m=e.content,p=e.colon,b=a;return i?r.createElement(b,{className:o()((t={},s(t,"".concat(n,"-item-label"),f(d)),s(t,"".concat(n,"-item-content"),f(m)),t),l),style:u,colSpan:c},f(d)?d:m):r.createElement(b,{className:o()("".concat(n,"-item"),l),style:u,colSpan:c},d&&r.createElement("span",{className:o()("".concat(n,"-item-label"),s({},"".concat(n,"-item-no-colon"),!p))},d),m&&r.createElement("span",{className:o()("".concat(n,"-item-content"))},m))};function m(e,t,n){var a=t.colon,o=t.prefixCls,c=t.bordered,l=n.component,u=n.type,i=n.showLabel,s=n.showContent;return e.map((function(e,t){var n=e.props,f=n.label,m=n.children,p=n.prefixCls,b=void 0===p?o:p,v=n.className,y=n.style,h=n.span,g=void 0===h?1:h,E=e.key;return"string"===typeof l?r.createElement(d,{key:"".concat(u,"-").concat(E||t),className:v,style:y,span:g,colon:a,component:l,itemPrefixCls:b,bordered:c,label:i?f:null,content:s?m:null}):[r.createElement(d,{key:"label-".concat(E||t),className:v,style:y,span:1,colon:a,component:l[0],itemPrefixCls:b,bordered:c,label:f}),r.createElement(d,{key:"content-".concat(E||t),className:v,style:y,span:2*g-1,component:l[1],itemPrefixCls:b,bordered:c,content:m})]}))}var p=function(e){var t=e.prefixCls,n=e.vertical,a=e.row,o=e.index,c=e.bordered;return n?r.createElement(r.Fragment,null,r.createElement("tr",{key:"label-".concat(o),className:"".concat(t,"-row")},m(a,e,{component:"th",type:"label",showLabel:!0})),r.createElement("tr",{key:"content-".concat(o),className:"".concat(t,"-row")},m(a,e,{component:"td",type:"content",showContent:!0}))):r.createElement("tr",{key:o,className:"".concat(t,"-row")},m(a,e,{component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0}))},b=function(e){return e.children},v=n(8);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var x={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function O(e,t,n){var r=e;return(void 0===t||t>n)&&(r=Object(v.a)(e,{span:n}),Object(u.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),r}function w(e){var t,n=e.prefixCls,a=e.title,u=e.column,s=void 0===u?x:u,f=e.colon,d=void 0===f||f,m=e.bordered,b=e.layout,v=e.children,g=e.className,w=e.style,C=e.size,k=r.useContext(i.b),j=k.getPrefixCls,S=k.direction,P=j("descriptions",n),N=h(r.useState({}),2),I=N[0],A=N[1],F=function(e,t){if("number"===typeof e)return e;if("object"===E(e))for(var n=0;n<l.b.length;n++){var r=l.b[n];if(t[r]&&void 0!==e[r])return e[r]||x[r]}return 3}(s,I);r.useEffect((function(){var e=l.a.subscribe((function(e){"object"===E(s)&&A(e)}));return function(){l.a.unsubscribe(e)}}),[]);var q=function(e,t){var n=Object(c.a)(e).filter((function(e){return e})),r=[],a=[],o=t;return n.forEach((function(e,c){var l,u=null===(l=e.props)||void 0===l?void 0:l.span,i=u||1;if(c===n.length-1)return a.push(O(e,u,o)),void r.push(a);i<o?(o-=i,a.push(e)):(a.push(O(e,i,o)),r.push(a),o=t,a=[])})),r}(v,F);return r.createElement("div",{className:o()(P,g,(t={},y(t,"".concat(P,"-").concat(C),C&&"default"!==C),y(t,"".concat(P,"-bordered"),!!m),y(t,"".concat(P,"-rtl"),"rtl"===S),t)),style:w},a&&r.createElement("div",{className:"".concat(P,"-title")},a),r.createElement("div",{className:"".concat(P,"-view")},r.createElement("table",null,r.createElement("tbody",null,q.map((function(e,t){return r.createElement(p,{key:t,index:t,colon:d,prefixCls:P,vertical:"vertical"===b,bordered:m,row:e})}))))))}w.Item=b;t.a=w},688:function(e,t,n){},698:function(e,t,n){"use strict";n.r(t);var r=n(49),a=n.n(r),o=n(170),c=n(70),l=n(88),u=n(0),i=n.n(u),s=n(47),f=n(546),d=n(436),m=n(137),p=n(437),b=n(87),v=n(42),y=n(547),h=n(439),g=n(499),E=n(37),x=n(471),O=n(505),w=(n(688),f.a.Option);t.default=Object(s.g)((function(e){var t=i.a.createRef(),n=e.location,r=e.history,s=Object(u.useState)(""),C=Object(l.a)(s,2),k=C[0],j=C[1],S=Object(u.useState)([]),P=Object(l.a)(S,2),N=P[0],I=P[1],A=function(){t.current.resetFields(),j("")},F=function(){A(),r.goBack()},q=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)();case 2:t=e.sent,n=t.code,o=t.data,1===n&&o.length?I(o):(m.a.warning("\u5f53\u524d\u8d26\u53f7\u8fd8\u6ca1\u6709\u5206\u914d\u5fae\u4fe1\u53f7\uff0c\u8bf7\u5148\u8054\u7cfb\u7ba1\u7406\u5458\u4e3a\u60a8\u5206\u914d\u5fae\u4fe1\u53f7"),r.goBack());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){var e=n.query,a=n.pathname;e?(j(e._id),t.current.setFieldsValue(Object(o.a)({},e))):a.indexOf("/edit")>-1&&r.push("./add"),q()}),[]),i.a.createElement("div",{className:"add-order"},i.a.createElement("div",{className:"container"},i.a.createElement(p.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:10},offset:1}},{ref:t,onFinish:function(e){e.userWxname=N.filter((function(t){return t._id===e.userWxId}))[0].remarks,d.a.confirm({title:k?"\u786e\u5b9a\u4fdd\u5b58\u4fee\u6539\u5417\uff1f":"\u786e\u5b9a\u6dfb\u52a0\u4e00\u4e2a\u5ba2\u6237\u5417\uff1f",onOk:function(){var t=Object(c.a)(a.a.mark((function t(){var n,r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(k){t.next=6;break}return t.next=3,Object(x.a)(Object(o.a)({},e));case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,Object(x.c)(Object(o.a)({},e,{id:k}));case 8:t.t0=t.sent;case 9:n=t.t0,r=n.code,c=n.msg,1===r?(m.a.success(c),F()):m.a.error(c);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()})},scrollToFirstError:!0,initialValues:{sex:1}}),i.a.createElement(b.a,{gutter:24},i.a.createElement(v.a,{span:24},i.a.createElement(y.a,{bordered:!0,layout:"vertical",column:2},i.a.createElement(y.a.Item,{label:i.a.createElement("h2",null,"\u5ba2\u6237\u57fa\u672c\u4fe1\u606f")},i.a.createElement(p.a.Item,{name:"d_contact",label:"\u5ba2\u6237\u59d3\u540d",rules:[{required:!0,message:"\u5ba2\u6237\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a"}]},i.a.createElement(h.a,{placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237\u59d3\u540d"})),i.a.createElement(p.a.Item,{name:"wxId",label:"\u5fae\u4fe1id",rules:[{required:!0,message:"\u5fae\u4fe1id\u4e0d\u80fd\u4e3a\u7a7a"}]},i.a.createElement(h.a,{placeholder:"\u8bf7\u8f93\u5165\u5fae\u4fe1id"})),i.a.createElement(p.a.Item,{name:"sex",label:"\u6027\u522b",required:!0},i.a.createElement(g.default.Group,null,i.a.createElement(g.default,{value:1},"\u7537"),i.a.createElement(g.default,{value:2},"\u5973"))),i.a.createElement(p.a.Item,{name:"wxName",label:"\u5fae\u4fe1\u6635\u79f0",rules:[{required:!0,message:"\u5fae\u4fe1\u6635\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]},i.a.createElement(h.a,{placeholder:"\u8bf7\u8f93\u5165\u5fae\u4fe1\u6635\u79f0"})),i.a.createElement(p.a.Item,{name:"userWxId",label:"\u6240\u5c5e\u5fae\u4fe1",wrapperCol:{xs:{span:24},sm:{span:6},offset:1},rules:[{required:!0,message:"\u8be5\u9879\u4e3a\u5fc5\u9009\u9879"}]},i.a.createElement(f.a,{placeholder:"\u8bf7\u9009\u62e9\u6240\u5c5e\u5fae\u4fe1"},N.map((function(e){return i.a.createElement(w,{key:e._id,value:e._id},e.remarks)})))),i.a.createElement(p.a.Item,{name:"d_tel",label:"\u5ba2\u6237\u8054\u7cfb\u7535\u8bdd",rules:[{required:!0,message:"\u5ba2\u6237\u8054\u7cfb\u7535\u8bdd\u4e0d\u80fd\u4e3a\u7a7a"}]},i.a.createElement(h.a,{placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237\u8054\u7cfb\u7535\u8bdd"})),i.a.createElement(p.a.Item,{name:"d_address",label:"\u5ba2\u6237\u8be6\u7ec6\u5730\u5740",rules:[{required:!0,message:"\u5ba2\u6237\u8be6\u7ec6\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a"}]},i.a.createElement(h.a.TextArea,{autoSize:{minRows:3,maxRows:5},placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237\u8be6\u7ec6\u5730\u5740"})),i.a.createElement(p.a.Item,{name:"remark",label:"\u5907\u6ce8",rules:[{required:!0,message:"\u5907\u6ce8\u4e0d\u80fd\u4e3a\u7a7a"}]},i.a.createElement(h.a.TextArea,{autoSize:{minRows:3,maxRows:5},placeholder:"\u8bf7\u8f93\u5165\u5907\u6ce8"})))))),i.a.createElement(p.a.Item,{className:"btn-wrapper",colon:!1,wrapperCol:{offset:8}},i.a.createElement(E.a,{htmlType:"submit",type:"primary"},k?"\u4fdd\u5b58\u4fee\u6539":"\u6dfb\u52a0\u5ba2\u6237"),!k&&i.a.createElement(E.a,{className:"ml20",onClick:A,type:"ghost"},"\u6e05\u7a7a"),i.a.createElement(E.a,{className:"ml20",onClick:F,danger:!0},"\u53d6\u6d88")))))}))}}]);