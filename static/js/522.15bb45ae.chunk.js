"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[522],{854:function(e,r,n){n.d(r,{a:function(){return c}});var t=n(3924),a=n(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.Ll,{color:"#1a5c72",height:80,width:80,wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})})}},1522:function(e,r,n){n.r(r),n.d(r,{Reviews:function(){return h},default:function(){return d}});var t=n(3728),a="Reviews_rating__S3tDM",c=n(854),u=n(5861),i=n(885),s=n(7757),o=n.n(s),p=n(2791),f=n(8282),v=n(6871),l=n(184),h=function(){var e=function(){var e=(0,v.UO)().movieId,r=(0,p.useState)({}),n=(0,i.Z)(r,2),t=n[0],a=n[1],c=(0,p.useState)(null),s=(0,i.Z)(c,2),l=s[0],h=s[1],d=(0,p.useState)(!1),x=(0,i.Z)(d,2),w=x[0],m=x[1];return(0,p.useEffect)((function(){function r(){return(r=(0,u.Z)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,f.tx)(e);case 3:n=r.sent,a(n.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),h(r.t0);case 10:return r.prev=10,m(!1),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})))).apply(this,arguments)}m(!0),function(){r.apply(this,arguments)}()}),[e]),{reviews:t,error:l,loading:w}}(),r=e.reviews,n=e.error,s=e.loading;return(0,l.jsxs)(l.Fragment,{children:[n&&(0,l.jsx)("p",{children:"There are no reviews available"}),s&&(0,l.jsx)(c.a,{}),(0,l.jsx)("div",{children:r.length>0?(0,l.jsx)("ul",{children:r.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h5",{children:[e.author,e.author_details.rating?(0,l.jsxs)("span",{className:a,children:[(0,l.jsx)(t.CvE,{size:17})," ",e.author_details.rating]}):null]}),(0,l.jsx)("p",{children:e.content})]},e.id)}))}):(0,l.jsx)("p",{children:"There are no reviews available"})})]})},d=h},8282:function(e,r,n){n.d(r,{Ph:function(){return d},TP:function(){return v},tx:function(){return h},vw:function(){return f},zv:function(){return l}});var t=n(5861),a=n(7757),c=n.n(a),u=n(4569),i=n.n(u),s=n(2007),o=n.n(s);i().defaults.baseURL="https://api.themoviedb.org/3";var p="c3dfb97c4e42ba6803ce4a8859444b9b",f=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("trending/all/day?api_key=".concat(p));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(r,"?api_key=").concat(p));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(r,"/credits?api_key=").concat(p));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(r,"/reviews?api_key=").concat(p));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("search/movie?api_key=".concat(p,"&query=").concat(r));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();v.propTypes={movieId:o().string},l.propTypes={movieId:o().string},h.propTypes={movieId:o().string},d.propTypes={movieId:o().string}}}]);
//# sourceMappingURL=522.15bb45ae.chunk.js.map