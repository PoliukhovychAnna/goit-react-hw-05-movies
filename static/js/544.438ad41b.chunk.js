"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{9544:function(n,t,r){r.r(t);var e=r(9439),a=r(2791),c=r(4635),i=r(7013),u=r(184);t.default=function(){var n=(0,a.useState)([]),t=(0,e.Z)(n,2),r=t[0],o=t[1],s=(0,a.useState)(null),p=(0,e.Z)(s,2),f=p[0],d=p[1],l=(0,a.useRef)();return(0,a.useEffect)((function(){l.current&&l.current.abort(),l.current=new AbortController,(0,c.Df)(l.current.signal).then((function(n){o(n.results),d(null)})).catch((function(n){"ERR_CANCELED"!==n.code&&d(n.message)}))}),[f]),(0,u.jsxs)(i.W2,{children:[(0,u.jsx)(i.X6,{children:"Trending movies today "}),(0,u.jsx)(i.OM,{children:r.map((function(n){return(0,u.jsx)(i.HC,{children:(0,u.jsxs)(i.Fg,{to:"movies/".concat(n.id),children:[(0,u.jsx)(i.Ei,{src:null!==n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://moviemill.com/template_1/img/default-movie-portrait.jpg",alt:n.title,width:200}),(0,u.jsx)(i.rS,{children:n.title})]})},n.id)}))})]})}},7013:function(n,t,r){r.d(t,{Ei:function(){return w},Fg:function(){return x},HC:function(){return g},OM:function(){return h},W2:function(){return l},X6:function(){return m},rS:function(){return v}});var e,a,c,i,u,o,s,p=r(168),f=r(6444),d=r(1087),l=f.ZP.div(e||(e=(0,p.Z)(["\n  padding: 15px;\n"]))),m=f.ZP.h1(a||(a=(0,p.Z)(["\n  font-size: 28px;\n  font-weight: 800;\n  color: #9933ff;\n  text-align: center;\n  margin-bottom: 35px;\n"]))),h=f.ZP.ul(c||(c=(0,p.Z)(["\n  padding: 0;\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 70px;\n  row-gap: 50px;\n"]))),g=f.ZP.li(i||(i=(0,p.Z)(["\n  background-color: #ccccff;\n  width: 210px;\n  border-radius: 5px;\n"]))),x=(0,f.ZP)(d.rU)(u||(u=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  color: black;\n"]))),v=f.ZP.p(o||(o=(0,p.Z)(["\n  padding: 4px;\n  font-size: 18px;\n  font-weight: 500;\n  width: 200px;\n  justify-content: center;\n  text-align: center;\n"]))),w=f.ZP.img(s||(s=(0,p.Z)(["\n  width: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n"])))},4635:function(n,t,r){r.d(t,{Df:function(){return s},M1:function(){return f},TP:function(){return p},WO:function(){return l},tx:function(){return d}});var e=r(5861),a=r(7757),c=r.n(a),i=r(1243),u="c4ae0d1c8ef3d257c8b5fa435eb44c06",o="https://api.themoviedb.org/3/",s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"trending/movie/day"),{signal:t,params:{api_key:u}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,i.Z.get("".concat(o,"movie/").concat(e),{signal:r,params:{api_key:u}});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,i.Z.get("".concat(o,"movie/").concat(e,"/credits"),{signal:r,params:{api_key:u}});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,i.Z.get("".concat(o,"movie/").concat(e,"/reviews"),{signal:r,params:{api_key:u}});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"search/movie?query=").concat(t,"&language=en-US&page=1"),{signal:r,params:{api_key:u}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.438ad41b.chunk.js.map