(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[14],{449:function(e,t,a){"use strict";var n=a(163),r=a(159),c=a(60);var s=a(0),i=a.n(s),o=a(661);t.a=function(e){var t=e.total,a=e.changePage,u=e.pagination,l=function(e,t){if(null==e)return{};var a,n,r=Object(c.a)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(e,["total","changePage","pagination"]),d=Object(s.useState)(1),h=Object(r.a)(d,2),m=h[0],p=h[1],f={current:m,total:t,showTotal:function(e){return"\u5171 ".concat(e," \u6761")},showQuickJumper:!0,position:["bottomCenter"],onChange:function(e){p(e),a(e),sessionStorage.setItem("orderPageNum",e)}};return i.a.createElement(o.a,Object.assign({pagination:Object(n.a)({},f,{},u)},l))}},656:function(e,t,a){"use strict";a.r(t);var n=a(41),r=a.n(n),c=a(66),s=a(12),i=a(13),o=a(15),u=a(14),l=a(0),d=a.n(l),h=a(415),m=a(220),p=a(413),f=a(47),g=a(164),v=a(449),k=h.a.Search,b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={userList:[],searchValue:"",updateRemarksIndex:-1},e.searchUser=Object(c.a)(r.a.mark((function t(){var a,n,c,s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.searchValue,t.next=3,Object(g.c)({username:a,page:1});case 3:n=t.sent,c=n.code,s=n.data,i=n.msg,1===c?(e.setState({userList:s,searchValue:""}),m.a.success(i)):(m.a.error(i),e.getUserList());case 8:case"end":return t.stop()}}),t)}))),e.getUserList=Object(c.a)(r.a.mark((function t(){var a,n,c,s,i,o=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.length>0&&void 0!==o[0]?o[0]:1,t.next=3,Object(g.c)({page:a});case 3:n=t.sent,c=n.code,s=n.data,i=n.total,1===c&&e.setState({userList:s,total:i});case 8:case"end":return t.stop()}}),t)}))),e.changePage=function(t){e.getUserList(t)},e.handleChangeSearchValue=function(t){e.setState({searchValue:t.target.value})},e}return Object(i.a)(a,[{key:"changePower",value:function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=a?1:0,e.next=3,Object(g.e)({power:a,id:t});case 3:n=e.sent,c=n.code,s=n.msg,1===c?(m.a.success(s),this.getUserList()):m.a.error(s);case 7:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"updateUserInfo",value:function(e,t){var a=this;p.a.confirm({title:"\u786e\u5b9a\u4fdd\u5b58\u4fee\u6539\u5417\uff1f",onOk:function(){var n=Object(c.a)(r.a.mark((function n(){var c,s,i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.e)({id:e,remarks:t});case 2:c=n.sent,s=c.code,i=c.msg,1===s?(m.a.success(i),a.setState({updateRemarksIndex:-1}),a.getUserList()):m.a.error(i);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()})}},{key:"deleteUser",value:function(e){var t=this;p.a.confirm({title:"\u786e\u5b9a\u5220\u9664\u8fd9\u4e2a\u8d26\u6237\u5417\uff1f",onOk:function(){var a=Object(c.a)(r.a.mark((function a(){var n,c,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(g.b)({_id:e});case 2:n=a.sent,c=n.code,s=n.msg,1===c?(m.a.success(s),t.getUserList()):m.a.error(s);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()})}},{key:"componentDidMount",value:function(){this.getUserList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.userList,n=t.total,r=t.searchValue,c=t.updateRemarksIndex,s=[{key:"username",dataIndex:"username",title:"\u8d26\u6237\u540d",align:"center"},{key:"nickName",dataIndex:"nickName",title:"\u6635\u79f0",align:"center"},{key:"remarks",dataIndex:"remarks",title:"\u516c\u53f8\u540d\u79f0/\u5907\u6ce8",align:"center",width:300,render:function(t,a,n){return c!==n?t:d.a.createElement(h.a.Search,{enterButton:"\u4fdd\u5b58",onSearch:function(t){return e.updateUserInfo(a._id,t)}})}},{key:"role",dataIndex:"role",title:"\u6743\u9650",align:"center",render:function(e){return 0===e?"\u8d85\u7ea7\u7ba1\u7406\u5458":1===e?"\u4e00\u7ea7\u4ee3\u7406":"\u4e8c\u7ea7\u4ee3\u7406"}},{title:"Action",key:"action",align:"center",render:function(t,a,n){return d.a.createElement(d.a.Fragment,null,d.a.createElement(f.a,{type:"link",size:"small",className:"mr5",onClick:function(){return e.setState({updateRemarksIndex:n})}},"\u4fee\u6539\u5907\u6ce8"),d.a.createElement(f.a,{type:"link",size:"small",onClick:function(){return e.deleteUser(a._id)},danger:!0},"\u5220\u9664"))}}];return d.a.createElement("div",null,d.a.createElement("div",{className:"container"},d.a.createElement(k,{onChange:this.handleChangeSearchValue,value:r,style:{width:300,marginBottom:20},placeholder:"\u8bf7\u8f93\u5165\u8d26\u6237\u540d",enterButton:"\u67e5\u8be2",onSearch:this.searchUser}),d.a.createElement(v.a,{bordered:!0,rowKey:function(e){return e._id},size:"small",dataSource:a,columns:s,total:n,changePage:this.changePage})))}}]),a}(l.Component);t.default=b}}]);