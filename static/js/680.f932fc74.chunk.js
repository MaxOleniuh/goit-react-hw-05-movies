"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{680:function(t,e,r){r.r(e);var n=r(9439),a=r(2791),c=r(1087),u=r(8565),o=r(184);e.default=function(t){var e=t.original_title,r=(0,a.useState)([]),s=(0,n.Z)(r,2),i=s[0],p=s[1],l=(0,a.useState)([]),f=(0,n.Z)(l,2),v=f[0],h=f[1];return(0,a.useEffect)((function(){(0,u.VN)().then((function(t){h(!0),p(t)})).catch((function(t){return console.log(t)})).finally(h(!1))}),[v,h]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Trending Today"}),(0,o.jsx)("ul",{children:i.map((function(t){return(0,o.jsx)("li",{title:e,children:(0,o.jsx)(c.rU,{to:"movies/".concat(t.id),children:t.original_title?t.original_title:t.name})},t.id)}))})]})}},8565:function(t,e,r){r.d(e,{EF:function(){return i},PJ:function(){return p},VN:function(){return s},X1:function(){return l},oc:function(){return f}});var n=r(5861),a=r(4687),c=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="0899cb23c3aa3793d7d2c78c362ea8dc",s=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/trending/all/day",{params:{api_key:o}});case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/search/movie",{params:{api_key:o,query:e}});case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e),{params:{api_key:o}});case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:o}});case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:o}});case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.f932fc74.chunk.js.map