"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[760],{854:function(t,n,r){r.d(n,{a:function(){return c}});var e=r(3924),a=r(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.Ll,{color:"#1a5c72",height:80,width:80,wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})})}},1760:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e=r(854),a=r(5861),c=r(885),i=r(7757),u=r.n(i),s=r(2791),o=r(6871),p=r(8282),f=r(184),v=function(){var t=function(){var t=(0,o.UO)().movieId,n=(0,s.useState)({}),r=(0,c.Z)(n,2),e=r[0],i=r[1],f=(0,s.useState)(null),v=(0,c.Z)(f,2),h=v[0],d=v[1],l=(0,s.useState)(!1),m=(0,c.Z)(l,2),x=m[0],g=m[1];return(0,s.useEffect)((function(){function n(){return(n=(0,a.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.zv)(t);case 3:r=n.sent,i(r.cast),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),d(n.t0),console.log(n.t0);case 11:return n.prev=11,g(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,7,11,14]])})))).apply(this,arguments)}g(!0),function(){n.apply(this,arguments)}()}),[t]),{error:h,cast:e,loading:x}}(),n=t.cast,r=t.error,i=t.loading;return(0,f.jsxs)(f.Fragment,{children:[r&&(0,f.jsx)("p",{children:"There is no info about cast of this movie"}),i&&(0,f.jsx)(e.a,{}),(0,f.jsx)("div",{children:n.length>0?(0,f.jsx)("ul",{children:n.slice(0,10).map((function(t){return(0,f.jsx)("li",{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{width:200,src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:t.name}),(0,f.jsx)("p",{children:t.name})]})},t.id)}))}):(0,f.jsx)("p",{children:"There is no info about cast of this movie"})})]})}},8282:function(t,n,r){r.d(n,{Ph:function(){return l},TP:function(){return v},tx:function(){return d},vw:function(){return f},zv:function(){return h}});var e=r(5861),a=r(7757),c=r.n(a),i=r(4569),u=r.n(i),s=r(2007),o=r.n(s);u().defaults.baseURL="https://api.themoviedb.org/3";var p="c3dfb97c4e42ba6803ce4a8859444b9b",f=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("trending/all/day?api_key=".concat(p));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(n,"?api_key=").concat(p));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(n,"/credits?api_key=").concat(p));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(n,"/reviews?api_key=").concat(p));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("search/movie?api_key=".concat(p,"&query=").concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();v.propTypes={movieId:o().string},h.propTypes={movieId:o().string},d.propTypes={movieId:o().string},l.propTypes={movieId:o().string}}}]);
//# sourceMappingURL=760.3fe30d2c.chunk.js.map