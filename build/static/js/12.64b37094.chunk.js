(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[12],{470:function(e,t,n){"use strict";var a=n(158),r=n(153),c=n(475),s=n(0),i=n.n(s),o=n(656);t.a=function(e){var t=e.total,n=e.changePage,u=e.pagination,l=Object(c.a)(e,["total","changePage","pagination"]),d=Object(s.useState)(1),f=Object(r.a)(d,2),h=f[0],m=f[1],p={current:h,total:t,showTotal:function(e){return"\u5171 ".concat(e," \u6761")},showQuickJumper:!0,position:["bottomCenter"],onChange:function(e){m(e),n(e),sessionStorage.setItem("orderPageNum",e)}};return i.a.createElement(o.a,Object.assign({pagination:Object(a.a)({},p,{},u)},l))}},475:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},654:function(e,t,n){"use strict";n.r(t);var a=n(39),r=n.n(a),c=n(62),s=n(23),i=n(24),o=n(26),u=n(25),l=n(0),d=n.n(l),f=n(422),h=n(216),m=n(419),p=n(46),g=n(155),v=n(470),k=f.a.Search,b=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={userList:[],searchValue:"",updateRemarksIndex:-1},e.searchUser=Object(c.a)(r.a.mark((function t(){var n,a,c,s,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchValue,t.next=3,Object(g.c)({username:n,page:1});case 3:a=t.sent,c=a.code,s=a.data,i=a.msg,1===c?(e.setState({userList:s,searchValue:""}),h.a.success(i)):(h.a.error(i),e.getUserList());case 8:case"end":return t.stop()}}),t)}))),e.getUserList=Object(c.a)(r.a.mark((function t(){var n,a,c,s,i,o=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:1,t.next=3,Object(g.c)({page:n});case 3:a=t.sent,c=a.code,s=a.data,i=a.total,1===c&&e.setState({userList:s,total:i});case 8:case"end":return t.stop()}}),t)}))),e.changePage=function(t){e.getUserList(t)},e.handleChangeSearchValue=function(t){e.setState({searchValue:t.target.value})},e}return Object(i.a)(n,[{key:"changePower",value:function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=n?1:0,e.next=3,Object(g.e)({power:n,id:t});case 3:a=e.sent,c=a.code,s=a.msg,1===c?(h.a.success(s),this.getUserList()):h.a.error(s);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateUserInfo",value:function(e,t){var n=this;m.a.confirm({title:"\u786e\u5b9a\u4fdd\u5b58\u4fee\u6539\u5417\uff1f",onOk:function(){var a=Object(c.a)(r.a.mark((function a(){var c,s,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(g.e)({id:e,remarks:t});case 2:c=a.sent,s=c.code,i=c.msg,1===s?(h.a.success(i),n.setState({updateRemarksIndex:-1}),n.getUserList()):h.a.error(i);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()})}},{key:"deleteUser",value:function(e){var t=this;m.a.confirm({title:"\u786e\u5b9a\u5220\u9664\u8fd9\u4e2a\u8d26\u6237\u5417\uff1f",onOk:function(){var n=Object(c.a)(r.a.mark((function n(){var a,c,s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.b)({_id:e});case 2:a=n.sent,c=a.code,s=a.msg,1===c?(h.a.success(s),t.getUserList()):h.a.error(s);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()})}},{key:"componentDidMount",value:function(){this.getUserList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.userList,a=t.total,r=t.searchValue,c=t.updateRemarksIndex,s=[{key:"username",dataIndex:"username",title:"\u8d26\u6237\u540d",align:"center"},{key:"nickName",dataIndex:"nickName",title:"\u6635\u79f0",align:"center"},{key:"remarks",dataIndex:"remarks",title:"\u516c\u53f8\u540d\u79f0/\u5907\u6ce8",align:"center",width:300,render:function(t,n,a){return c!==a?t:d.a.createElement(f.a.Search,{enterButton:"\u4fdd\u5b58",onSearch:function(t){return e.updateUserInfo(n._id,t)}})}},{key:"role",dataIndex:"role",title:"\u6743\u9650",align:"center",render:function(e){return 0===e?"\u8d85\u7ea7\u7ba1\u7406\u5458":1===e?"\u4e00\u7ea7\u4ee3\u7406":"\u4e8c\u7ea7\u4ee3\u7406"}},{title:"Action",key:"action",align:"center",render:function(t,n,a){return d.a.createElement(d.a.Fragment,null,d.a.createElement(p.a,{type:"link",size:"small",className:"mr5",onClick:function(){return e.setState({updateRemarksIndex:a})}},"\u4fee\u6539\u5907\u6ce8"),d.a.createElement(p.a,{type:"link",size:"small",onClick:function(){return e.deleteUser(n._id)},danger:!0},"\u5220\u9664"))}}];return d.a.createElement("div",null,d.a.createElement("div",{className:"container"},d.a.createElement(k,{onChange:this.handleChangeSearchValue,value:r,style:{width:300,marginBottom:20},placeholder:"\u8bf7\u8f93\u5165\u8d26\u6237\u540d",enterButton:"\u67e5\u8be2",onSearch:this.searchUser}),d.a.createElement(v.a,{bordered:!0,rowKey:function(e){return e._id},size:"small",dataSource:n,columns:s,total:a,changePage:this.changePage})))}}]),n}(l.Component);t.default=b}}]);