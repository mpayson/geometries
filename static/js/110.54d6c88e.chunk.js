(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[110],{1042:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c}));var a=r(12),n=r(51),i=r(39),c=function(){if(!("document"in n.a))return function(){return null};var e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,function(r){t.clearRect(0,0,1,e.height);var n,i=t.createLinearGradient(0,0,0,e.height),c=Object(a.a)(r.colorStops);try{for(c.s();!(n=c.n()).done;){var o=n.value,u=o.ratio,s=o.color;i.addColorStop(Math.max(u,.001),"rgba(".concat(s[0],", ").concat(s[1],", ").concat(s[2],", ").concat(s[3],")"))}}catch(l){c.e(l)}finally{c.f()}return t.fillStyle=i,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}();function o(e,t,r,n){var i,c,o=t.blurRadius,u=t.fieldOffset,l=t.field,f=new Float64Array(r*n),h=s(o),d=Math.round(3*o),p=Number.NEGATIVE_INFINITY,b=function(e,t){return null!=e?"string"==typeof t?function(t){return-1*+t.readAttribute(e)}:function(r){return+r.readAttribute(e)+t}:function(e){return 1}}(l,u),y=new Set,v=Object(a.a)(e);try{for(v.s();!(c=v.n()).done;)for(var O=c.value.getCursor();O.next();){var j=O.getObjectId();if(!y.has(j)){y.add(j);for(var m=O.readLegacyPointGeometry(),g=+b(O),k=m.x-d,w=m.y-d,S=Math.max(0,k),x=Math.max(0,w),T=Math.min(n,m.y+d),M=Math.min(r,m.x+d),U=x;U<T;U++)for(var A=h[U-w],I=S;I<M;I++){var R=h[I-k];(i=f[U*r+I]+=A*R*g)>p&&(p=i)}}}}catch(F){v.e(F)}finally{v.f()}return{matrix:f.buffer,max:p}}function u(e,t,r,a,n,c){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var o=e.getImageData(0,0,t,t);r&&a&&o.data.set(new Uint8ClampedArray(function(e,t,r,a,n){for(var c=new Uint32Array(e*e),o=("buffer"in t?t:new Float64Array(t)),u=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),s=u.length/(n-a),l=0;l<o.length;l++){var f=o[l],h=Math.floor((f-a)*s);c[l]=u[Object(i.c)(h,0,u.length-1)]}return c.buffer}(t,r,a,n,c))),e.putImageData(o,0,0)}function s(e){for(var t=Math.round(3*e),r=2*e*e,a=new Float64Array(2*t+1),n=0;n<=a.length;n++)a[n]=Math.exp(-Math.pow(n-t,2)/r)/Math.sqrt(2*Math.PI)*(e/2);return a}},1106:function(e,t,r){"use strict";var a=r(2),n=r(3),i=r(5),c=r(6),o=r(0),u=(r(13),r(14),r(15),r(1)),s=r(8),l=(r(11),r(19),r(20),function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"initialize",value:function(){}},{key:"destroy",value:function(){}},{key:"supportsTileUpdates",get:function(){return!1}},{key:"spatialReference",get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}}]),r}(r(159).a));Object(o.a)([Object(u.b)({readOnly:!0})],l.prototype,"supportsTileUpdates",null),Object(o.a)([Object(u.b)({constructOnly:!0})],l.prototype,"remoteClient",void 0),Object(o.a)([Object(u.b)({constructOnly:!0})],l.prototype,"service",void 0),Object(o.a)([Object(u.b)({dependsOn:["tileStore.tileScheme.spatialReference"]})],l.prototype,"spatialReference",null),Object(o.a)([Object(u.b)({constructOnly:!0})],l.prototype,"tileInfo",void 0),Object(o.a)([Object(u.b)({constructOnly:!0})],l.prototype,"tileStore",void 0);var f=l=Object(o.a)([Object(s.a)("esri.views.2d.layers.features.processors.BaseProcessor")],l);t.a=f},1284:function(e,t,r){"use strict";r.r(t);var a=r(9),n=r(12),i=r(10),c=r.n(i),o=r(21),u=r(2),s=r(3),l=r(5),f=r(6),h=r(0),d=(r(13),r(4)),p=(r(14),r(15),r(1),r(8)),b=(r(11),r(19),r(20),r(810)),y=r(1042),v=function(e){Object(l.a)(r,e);var t=Object(f.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.apply(this,arguments)).type="heatmap",e._tileKeyToFeatureSets=new Map,e}return Object(s.a)(r,[{key:"initialize",value:function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}},{key:"update",value:function(){var e=Object(o.a)(c.a.mark((function e(t,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("heatmap"===(a=r.schema.processors[0]).type){e.next=3;break}return e.abrupt("return");case 3:Object(b.a)(this._schema,a)&&(t.mesh=!0,this._schema=a);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"onTileUpdate",value:function(e){var t,r=Object(n.a)(e.removed);try{for(r.s();!(t=r.n()).done;){var a=t.value;this._tileKeyToFeatureSets.delete(a.key.id)}}catch(i){r.e(i)}finally{r.f()}}},{key:"onTileData",value:function(){var e=Object(o.a)(c.a.mark((function e(t,r,n){var i,o,u,s,l,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._tileKeyToFeatureSets.has(t.key.id)&&"replace"!==r.type||this._tileKeyToFeatureSets.set(t.key.id,new Map),i=this._tileKeyToFeatureSets.get(t.key.id),Object(d.i)(r.addOrUpdate)&&i.set(r.addOrUpdate.instance,r),o=r.end,i.forEach((function(e){return o=o||e.end})),o){e.next=6;break}return e.abrupt("return");case 6:return u=[],i.forEach((function(e){Object(d.i)(e.addOrUpdate)&&u.push(e.addOrUpdate)})),s=Object(y.a)(u,this._schema.mesh,512,512),l={tileKey:t.key.id,intensityInfo:s},f=[s.matrix],e.abrupt("return",this.remoteClient.invoke("tileRenderer.onTileData",l,Object(a.a)(Object(a.a)({},n),{},{transferList:f})));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"onTileError",value:function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}}]),r}(r(1106).a),O=v=Object(h.a)([Object(p.a)("esri.views.2d.layers.features.processors.HeatmapProcessor")],v);t.default=O}}]);
//# sourceMappingURL=110.54d6c88e.chunk.js.map