(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(3),c=a.n(n),s=a(4),i=a(5),b=a(8),r=a(7),l=a(1),o=a.n(l),d=(a(13),a(6)),u=a.n(d),j=(a(14),a(0)),h=function(t){var e,a=t.tabs,n=t.selectedTabId,c=t.changeTab;return Object(j.jsxs)("article",{children:[Object(j.jsx)("ul",{className:"tabs",children:a.map((function(t){var e=t.id,a=t.title;return Object(j.jsx)("li",{className:u()("tabs__item",{tabs__item_active:n===e}),children:Object(j.jsx)("button",{type:"button",className:"tabs__button",onClick:function(){n!==e&&c(t)},children:a})},e)}))}),Object(j.jsx)("p",{className:"content",children:null===(e=a.find((function(t){return t.id===n})))||void 0===e?void 0:e.content})]})},m=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],p=function(t){Object(b.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:m[0]},t.changeTab=function(e){t.setState({selectedTab:e})},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"App__title",children:"Selected tab is ".concat(this.state.selectedTab.title)}),Object(j.jsx)("div",{children:Object(j.jsx)(h,{tabs:m,selectedTabId:t.id,changeTab:this.changeTab})})]})}}]),a}(o.a.Component);c.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bd465100.chunk.js.map