"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[950],{950:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(439),c=n(791),s=n(689),a=n(861),i=n(757),o=n.n(i),l=n(243),u=function(){var e=(0,a.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.movieId,console.log(n),e.next=4,l.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(n),{params:{api_key:"c4ae0d1c8ef3d257c8b5fa435eb44c06"}});case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=n(184),h=function(){var e=(0,c.useState)({}),t=(0,r.Z)(e,2),n=t[0],a=t[1],i=(0,s.UO)().movieId;return(0,c.useEffect)((function(){u({movieId:i}).then((function(e){a(e)})).catch((function(e){return console.log(e)}))}),[i]),console.log(n),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("h1",{children:[n.title," (",n.release_date&&n.release_date.slice(0,4),")"]}),(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title,width:300}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"User score:"})," ",n.vote_average&&n.vote_average.toFixed(1)]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Overview:"})," ",n.overview]}),(0,d.jsxs)("p",{children:[" ",(0,d.jsx)("b",{children:"Genres:"})]}),(0,d.jsx)("ul",{children:n.genres&&n.genres.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))}),(0,d.jsx)(c.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading page..."}),children:(0,d.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=950.248e536d.chunk.js.map