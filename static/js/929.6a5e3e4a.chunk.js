"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[929],{2929:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n,a,c=t(5861),s=t(9439),i=t(4687),o=t.n(i),u=t(2791),l=t(7689),p=t(1087),d=t(8565),v=t(168),h=t(5706).Z.img(n||(n=(0,v.Z)(["\n    width: 200px;\n    heigth: 200px;\n"]))),f=t(966),x=t(8789),m=t(184),g=(0,x.ZP)(p.rU)(a||(a=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),w=function(e){var r=e.to,t=e.children;return(0,m.jsx)(g,{to:r,children:t})},j=function(){var e,r,t,n,a=(0,l.TH)(),i=null!==(e=null===(r=a.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/goit-react-hw-05-movies",v=(0,u.useState)([]),x=(0,s.Z)(v,2),g=x[0],j=x[1],k=(0,u.useState)(!1),Z=(0,s.Z)(k,2),b=Z[0],y=Z[1],_=(0,l.UO)().id;(0,u.useEffect)((function(){var e=function(){var e=(0,c.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,(0,d.PJ)(_);case 4:r=e.sent,j(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error fetching movie details:",e.t0);case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]);var U="https://image.tmdb.org/t/p/w500/".concat(g.poster_path);return(0,m.jsxs)("div",{children:[b&&(0,m.jsx)(f.a,{}),(0,m.jsxs)("div",{children:[(0,m.jsx)(w,{to:i,children:"Go back"}),(0,m.jsx)("aside",{children:(0,m.jsx)(h,{src:U,alt:g.title})}),(0,m.jsx)("h2",{children:g.title}),(0,m.jsxs)("p",{children:["User scrore: ",Math.round(10*g.vote_average),"%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:g.overview}),(0,m.jsx)("h4",{children:"Genres"}),g.genres&&g.genres.map((function(e){return(0,m.jsx)("p",{children:e.name},e.id)}))]},_),(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(p.rU,{to:"cast",state:{from:null===(t=a.state)||void 0===t?void 0:t.from},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(p.rU,{to:"reviews",state:{from:null===(n=a.state)||void 0===n?void 0:n.from},children:"Reviews"})})]}),(0,m.jsx)(l.j3,{})]})]})}},8565:function(e,r,t){t.d(r,{EF:function(){return u},PJ:function(){return l},VN:function(){return o},X1:function(){return p},oc:function(){return d}});var n=t(5861),a=t(4687),c=t.n(a),s=t(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="0899cb23c3aa3793d7d2c78c362ea8dc",o=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/all/day",{params:{api_key:i}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie",{params:{api_key:i,query:r}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r),{params:{api_key:i}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits"),{params:{api_key:i}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews"),{params:{api_key:i}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=929.6a5e3e4a.chunk.js.map