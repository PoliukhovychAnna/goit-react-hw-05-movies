"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[650],{650:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var t=n(861),a=n(439),u=n(757),c=n.n(u),o=n(791),s=n(689),i=n(87),p=n(635),f=n(705),l=n(184),v=function(e){var r,n=e.onQueryChange,t=(0,i.lr)(),u=(0,a.Z)(t,2),c=u[0],s=u[1],p=null!==(r=c.get("searchQuery"))&&void 0!==r?r:"";(0,o.useEffect)((function(){p&&n(p)}),[p,n]);return(0,l.jsx)(f.J9,{initialValues:{query:""},onSubmit:function(e,r){var n=e.query;s(""!==n?{searchQuery:n}:{}),r.resetForm()},children:(0,l.jsxs)(f.l0,{children:[(0,l.jsx)(f.gN,{name:"query",type:"text",placeholder:"Movie name",required:!0}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})},d=function(){var e=(0,o.useState)(null),r=(0,a.Z)(e,2),n=r[0],u=r[1],f=(0,o.useState)(""),d=(0,a.Z)(f,2),h=d[0],m=d[1],x=(0,o.useState)(null),g=(0,a.Z)(x,2),y=g[0],k=g[1],b=(0,o.useRef)(),w=(0,s.TH)();console.log(h),(0,o.useEffect)((function(){if(""!==h){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.current&&b.current.abort(),b.current=new AbortController,e.prev=2,k(null),e.next=6,(0,p.WO)(h,b.current.signal);case 6:if(0!==(r=e.sent).length){e.next=9;break}return e.abrupt("return","Sorry, no movies for your query...");case 9:u(r),k(null),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),"ERR_CANCELED"!==e.t0.code&&k(e.t0.message);case 16:return e.prev=16,e.finish(16);case 18:case"end":return e.stop()}}),e,null,[[2,13,16,18]])})));return function(){return e.apply(this,arguments)}}();e()}}),[h]);return console.log(n),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{onQueryChange:function(e){e!==h&&(m(e),k(null))}}),y&&(0,l.jsx)("p",{children:y}),n&&(0,l.jsx)("ul",{children:n.results.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:(r=e.id,"/movies"===w.pathname?"".concat(r):"movies/".concat(r)),state:{from:w},children:e.title})},e.id);var r}))})]})}},635:function(e,r,n){n.d(r,{Df:function(){return i},M1:function(){return f},TP:function(){return p},WO:function(){return v},tx:function(){return l}});var t=n(861),a=n(757),u=n.n(a),c=n(243),o="c4ae0d1c8ef3d257c8b5fa435eb44c06",s="https://api.themoviedb.org/3/",i=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"trending/movie/day"),{signal:r,params:{api_key:o}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.movieId,e.next=3,c.Z.get("".concat(s,"movie/").concat(n),{params:{api_key:o}});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(r,n){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.movieId,e.next=3,c.Z.get("".concat(s,"movie/").concat(t,"/credits"),{signal:n,params:{api_key:o}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(r,n){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.movieId,e.next=3,c.Z.get("".concat(s,"movie/").concat(t,"/reviews"),{signal:n,params:{api_key:o}});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(u().mark((function e(r,n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"search/movie?query=").concat(r,"&language=en-US&page=1"),{signal:n,params:{api_key:o}});case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=650.bfb945db.chunk.js.map