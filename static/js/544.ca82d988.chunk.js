"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{9544:function(n,t,r){r.r(t);var e=r(9439),a=r(2791),c=r(4635),i=r(4378),o=r(7013),u=r(184);t.default=function(){var n=(0,a.useState)([]),t=(0,e.Z)(n,2),r=t[0],s=t[1],p=(0,a.useState)(null),f=(0,e.Z)(p,2),l=f[0],d=f[1],h=(0,a.useState)(!1),x=(0,e.Z)(h,2),m=x[0],g=x[1],v=(0,a.useRef)();return(0,a.useEffect)((function(){v.current&&v.current.abort(),v.current=new AbortController,g(!0),(0,c.Df)(v.current.signal).then((function(n){s(n.results),d(null),g(!1)})).catch((function(n){"ERR_CANCELED"!==n.code&&d(n.message)}))}),[l]),(0,u.jsxs)(o.W2,{children:[m&&(0,u.jsx)(i.a,{}),!m&&(0,u.jsx)(o.X6,{children:"Trending movies today "}),(0,u.jsx)(o.OM,{children:r.map((function(n){return(0,u.jsx)(o.HC,{children:(0,u.jsxs)(o.Fg,{to:"movies/".concat(n.id),children:[(0,u.jsx)(o.Ei,{src:null!==n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://moviemill.com/template_1/img/default-movie-portrait.jpg",alt:n.title,width:200}),(0,u.jsx)(o.rS,{children:n.title})]})},n.id)}))})]})}},7013:function(n,t,r){r.d(t,{Ei:function(){return w},Fg:function(){return g},HC:function(){return m},OM:function(){return x},W2:function(){return d},X6:function(){return h},rS:function(){return v}});var e,a,c,i,o,u,s,p=r(168),f=r(6444),l=r(1087),d=f.ZP.div(e||(e=(0,p.Z)(["\n  padding: 15px;\n"]))),h=f.ZP.h1(a||(a=(0,p.Z)(["\n  font-size: 28px;\n  font-weight: 800;\n  color: #9933ff;\n  text-align: center;\n  margin-bottom: 35px;\n"]))),x=f.ZP.ul(c||(c=(0,p.Z)(["\n  padding: 0;\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 70px;\n  row-gap: 50px;\n"]))),m=f.ZP.li(i||(i=(0,p.Z)(["\n  background-color: #ccccff;\n  width: 210px;\n  height: 414px;\n  border: 2px solid #ccccff;\n  border-radius: 5px;\n  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);\n  background-color: #ccccff;\n  cursor: pointer;\n  &:hover,\n  :focus {\n    box-shadow: 0px 0px 26px 8px hsl(270, 100%, 60%, 0.664);\n    color: hsla(323, 87%, 50%, 0.664);\n  }\n"]))),g=(0,f.ZP)(l.rU)(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  color: black;\n"]))),v=f.ZP.p(u||(u=(0,p.Z)(["\n  padding: 4px;\n  font-size: 18px;\n  font-weight: 500;\n  width: 200px;\n  justify-content: center;\n  text-align: center;\n"]))),w=f.ZP.img(s||(s=(0,p.Z)(["\n  width: 100%;\n  height: 315px;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n"])))},4635:function(n,t,r){r.d(t,{Df:function(){return s},M1:function(){return f},TP:function(){return p},WO:function(){return d},tx:function(){return l}});var e=r(5861),a=r(7757),c=r.n(a),i=r(1243),o="c4ae0d1c8ef3d257c8b5fa435eb44c06",u="https://api.themoviedb.org/3/",s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"trending/movie/day"),{signal:t,params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,i.Z.get("".concat(u,"movie/").concat(e),{signal:r,params:{api_key:o}});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,i.Z.get("".concat(u,"movie/").concat(e,"/credits"),{signal:r,params:{api_key:o}});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,n.next=3,i.Z.get("".concat(u,"movie/").concat(e,"/reviews"),{signal:r,params:{api_key:o}});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"search/movie?query=").concat(t,"&language=en-US&page=1"),{signal:r,params:{api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.ca82d988.chunk.js.map