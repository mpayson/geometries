(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[159],{1213:function(n,t,e){"use strict";e.r(t),e.d(t,"registerFunctions",(function(){return s}));var r=e(16),c=e(822),u=e(1071),i=e(709);function a(n,t,e,a,s,f){if(1===a.length){if(Object(c.B)(a[0]))return Object(r.u)(Object(u.a)(n,a[0],Object(c.c)(a[1],-1)));if(Object(c.I)(a[0]))return Object(r.u)(Object(u.a)(n,a[0].toArray(),Object(c.c)(a[1],-1)))}else if(2===a.length){if(Object(c.B)(a[0]))return Object(r.u)(Object(u.a)(n,a[0],Object(c.c)(a[1],-1)));if(Object(c.I)(a[0]))return Object(r.u)(Object(u.a)(n,a[0].toArray(),Object(c.c)(a[1],-1)));if(Object(c.T)(a[0]))return a[0].load().then((function(e){return o(i.WhereClause.create(a[1],e.getFieldsIndex()),f,s).then((function(e){return a[0].calculateStatistic(n,e,Object(c.c)(a[2],1e3),t.abortSignal)}))}))}else if(3===a.length&&Object(c.T)(a[0]))return a[0].load().then((function(e){return o(i.WhereClause.create(a[1],e.getFieldsIndex()),f,s).then((function(e){return a[0].calculateStatistic(n,e,Object(c.c)(a[2],1e3),t.abortSignal)}))}));return Object(r.u)(Object(u.a)(n,a,-1))}function o(n,t,e){try{var c=n.getVariables();if(c.length>0){for(var u=[],i=0;i<c.length;i++){var a={name:c[i]};u.push(t.evaluateIdentifier(e,a))}return Object(r.b)(u).then((function(t){for(var e={},r=0;r<c.length;r++)e[c[r]]=t[r];return n.parameters=e,n}))}return Object(r.u)(n)}catch(o){return Object(r.t)(o)}}function s(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("stdev",e,0,c,t,n)}))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("variance",e,0,c,t,n)}))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("mean",e,0,c,t,n)}))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("mean",e,0,c,t,n)}))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("sum",e,0,c,t,n)}))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("min",e,0,c,t,n)}))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,c){return a("max",e,0,c,t,n)}))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(Object(c.J)(e,1,1),Object(c.T)(e[0]))return e[0].count(n.abortSignal);if(Object(c.B)(e[0])||Object(c.v)(e[0]))return e[0].length;if(Object(c.I)(e[0]))return e[0].length();throw new Error("Invalid Parameters for Count")}))})}}}]);
//# sourceMappingURL=159.cd65fadd.chunk.js.map