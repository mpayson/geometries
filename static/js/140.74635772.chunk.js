(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[140],{713:function(e,r,n){"use strict";n.r(r),n.d(r,"fromUrl",(function(){return f}));var t=n(9),a=n(10),u=n.n(a),c=n(21),s=n(4),i=n(23),o=n(81),l=n(384),p=n(942);function f(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(u.a.mark((function e(r){var a,o,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,function(){var e=Object(c.a)(u.a.mark((function e(r){var n,t,a,o,f,b,d,v,x,w,m,O;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(l.e)(r),!Object(s.h)(n)){e.next=3;break}throw new i.a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 3:t=n.serverType,a=n.sublayer,f={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},e.t0=t,e.next="MapServer"===e.t0?8:"ImageServer"===e.t0?10:"SceneServer"===e.t0?12:14;break;case 8:return o=null!=a?"FeatureLayer":function(){var e=Object(c.a)(u.a.mark((function e(r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(r);case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()(r).then((function(e){return e?"TileLayer":"MapImageLayer"})),e.abrupt("break",15);case 10:return o=h(r).then((function(e){var r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"})),e.abrupt("break",15);case 12:return o=h(n.url.path).then((function(e){var r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var n=e.layers[0].layerType;if(null!=r[n])return r[n]}return"SceneLayer"})),e.abrupt("break",15);case 14:o=f[t];case 15:return b={FeatureLayer:!0,SceneLayer:!0},v={parsedUrl:n,Constructor:null,layerOrTableId:(d="FeatureServer"===t)?a:null,sublayerIds:null,tableIds:null},e.next=20,o;case 20:if(x=e.sent,!b[x]||null!=a){e.next=27;break}return e.next=24,function(){var e=Object(c.a)(u.a.mark((function e(r,n){var t,a,s,i,o,l,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!1,"FeatureServer"!==n){e.next=8;break}return e.next=4,function(){var e=Object(c.a)(u.a.mark((function e(r){var n,t,a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(r);case 2:if((a=(a=e.sent)||{}).layers=(null==(n=a.layers)?void 0:n.filter(y))||[],c={serviceJSON:a},!(a.currentVersion<10.5)){e.next=7;break}return e.abrupt("return",c);case 7:return e.next=9,h(r+"/layers");case 9:return s=e.sent,e.abrupt("return",(c.layersJSON={layers:(null==s||null==(t=s.layers)?void 0:t.filter(y))||[],tables:(null==s?void 0:s.tables)||[]},c));case 11:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()(r);case 4:o=e.sent,i=!!o.layersJSON,s=o.layersJSON||o.serviceJSON,e.next=11;break;case 8:return e.next=10,h(r);case 10:s=e.sent;case 11:return l=null==(t=s)?void 0:t.layers,p=null==(a=s)?void 0:a.tables,e.abrupt("return",{layerIds:(null==l?void 0:l.map((function(e){return e.id})).reverse())||[],tableIds:(null==p?void 0:p.map((function(e){return e.id})).reverse())||[],layerInfos:i?l:[],tableInfos:i?p:[]});case 13:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()(r,t);case 24:w=e.sent,d&&(v.sublayerInfos=w.layerInfos,v.tableInfos=w.tableInfos),1!==w.layerIds.length+w.tableIds.length?(v.sublayerIds=w.layerIds,v.tableIds=w.tableIds):d&&(v.layerOrTableId=null!=(m=w.layerIds[0])?m:w.tableIds[0],v.sourceJSON=null!=(O=w.layerInfos[0])?O:w.tableInfos[0]);case 27:return e.next=29,function(){var e=Object(c.a)(u.a.mark((function e(r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.a[r])());case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()(x);case 29:return v.Constructor=e.sent,e.abrupt("return",v);case 31:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()(r.url);case 2:if(a=e.sent,o=Object(t.a)(Object(t.a)({},r.properties),{},{url:r.url}),a.sublayerIds){e.next=6;break}return e.abrupt("return",(null!=a.layerOrTableId&&(o.layerId=a.layerOrTableId,o.sourceJSON=a.sourceJSON),new a.Constructor(o)));case 6:return e.next=9,n.e(28).then(n.bind(null,1e3));case 9:return e.t0=e.sent.default,e.t1={title:a.parsedUrl.title},f=new e.t0(e.t1),e.abrupt("return",(function(e,r,n){function a(e,a){var u=Object(t.a)(Object(t.a)({},n),{},{layerId:e,sublayerTitleMode:"service-name"});return Object(s.i)(a)&&(u.sourceJSON=a),new r.Constructor(u)}r.sublayerIds.forEach((function(n){var t=a(n,d(r.sublayerInfos,n));e.add(t)})),r.tableIds.forEach((function(n){var t=a(n,d(r.tableInfos,n));e.tables.add(t)}))}(f,a,o),f));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,r){return e?e.find((function(e){return e.id===r})):null}function y(e){return!e.type||"Feature Layer"===e.type}function h(e){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(u.a.mark((function e(r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.default)(r,{responseType:"json",query:{f:"json"}});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},942:function(e,r,n){"use strict";n.d(r,"a",(function(){return c}));var t=n(10),a=n.n(t),u=n(21),c={BingMapsLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(86).then(n.bind(null,1050));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),BuildingSceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(4),n.e(6),n.e(53)]).then(n.bind(null,1040));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),CSVLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(4),n.e(6),n.e(55)]).then(n.bind(null,1051));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ElevationLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4),n.e(27)]).then(n.bind(null,1048));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),FeatureLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(4),n.e(6),n.e(59)]).then(n.bind(null,826));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GroupLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(28).then(n.bind(null,1e3));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),GeoRSSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(77).then(n.bind(null,1023));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(4),n.e(10),n.e(52)]).then(n.bind(null,1042));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ImageryTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(10),n.e(23),n.e(56)]).then(n.bind(null,1041));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),IntegratedMeshLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4),n.e(33),n.e(138)]).then(n.bind(null,1047));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),KMLLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(6),n.e(71)]).then(n.bind(null,1052));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapImageLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(4),n.e(6),n.e(61)]).then(n.bind(null,1001));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),MapNotesLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(4),n.e(6),n.e(57)]).then(n.bind(null,1026));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),OpenStreetMapLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(16),n.e(202)]).then(n.bind(null,1027));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),PointCloudLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4),n.e(33),n.e(30),n.e(92)]).then(n.bind(null,1043));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),RouteLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(4),n.e(6),n.e(58)]).then(n.bind(null,1028));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),SceneLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(4),n.e(6),n.e(54)]).then(n.bind(null,1053));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),StreamLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(4),n.e(6),n.e(64)]).then(n.bind(null,1054));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),TileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(3),n.e(5),n.e(4),n.e(6),n.e(62)]).then(n.bind(null,1029));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnknownLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(104).then(n.bind(null,1030));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),UnsupportedLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(105).then(n.bind(null,1031));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),VectorTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4),n.e(18),n.e(73)]).then(n.bind(null,1044));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WebTileLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(16).then(n.bind(null,972));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(69).then(n.bind(null,1055));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),WMTSLayer:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(16),n.e(203)]).then(n.bind(null,1045));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=140.74635772.chunk.js.map