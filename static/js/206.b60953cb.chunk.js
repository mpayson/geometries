(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[206],{1184:function(e,r,t){"use strict";t.r(r),t.d(r,"create",(function(){return l})),t.d(r,"projectGeometry",(function(){return f}));var n=t(10),a=t.n(n),i=t(21),u=t(91),c=t(23),o=t(124),s=t(332);function l(){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(a.a.mark((function e(){var r,n,i,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.length>0&&void 0!==s[0]?s[0]:null,n=s.length>1?s[1]:void 0,!u.a.geometryServiceUrl){e.next=9;break}return e.next=6,t.e(19).then(t.bind(null,1123));case 6:return e.t0=e.sent.default,e.t1={url:u.a.geometryServiceUrl},e.abrupt("return",new e.t0(e.t1));case 9:if(r){e.next=11;break}throw new c.a("internal:geometry-service-url-not-configured");case 11:return i="portal"in r?r.portal||o.a.getDefault():r,e.next=14,i.load({signal:n});case 14:if(!(i.helperServices&&i.helperServices.geometry&&i.helperServices.geometry.url)){e.next=21;break}return e.next=18,t.e(19).then(t.bind(null,1123));case 18:return e.t2=e.sent.default,e.t3={url:i.helperServices.geometry.url},e.abrupt("return",new e.t2(e.t3));case 21:throw new c.a("internal:geometry-service-url-not-configured");case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,r){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(a.a.mark((function e(r,t){var n,i,u,o,p,f=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>2&&void 0!==f[2]?f[2]:null,i=f.length>3?f[3]:void 0,e.next=4,l(n,i);case 4:return u=e.sent,(o=new s.a).geometries=[r],o.outSpatialReference=t,e.next=9,u.project(o,{signal:i});case 9:if(!(p=e.sent)||!Array.isArray(p)||1!==p.length){e.next=12;break}return e.abrupt("return",p[0]);case 12:throw new c.a("internal:geometry-service-projection-failed");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=206.b60953cb.chunk.js.map