(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[33,12],{963:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return f})),r.d(t,"contentToBlob",(function(){return x})),r.d(t,"fetchResources",(function(){return p})),r.d(t,"getSiblingOfSameType",(function(){return w})),r.d(t,"getSiblingOfSameTypeI",(function(){return S})),r.d(t,"removeAllResources",(function(){return y})),r.d(t,"removeResource",(function(){return b})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return j}));var n=r(10),a=r.n(n),o=r(32),s=r(21),i=r(4),c=r(23),u=r(11),l=r(81);function p(e){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(a.a.mark((function e(t){var r,n,o,s,c,l,p,d,f,h,b,v,y=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y.length>1&&void 0!==y[1]?y[1]:{},n=y.length>2?y[2]:void 0,e.next=4,t.load(n);case 4:return o=Object(u.x)(t.itemUrl,"resources"),s=r.start,c=void 0===s?1:s,l=r.num,p=void 0===l?10:l,d=r.sortOrder,f=void 0===d?"asc":d,h=r.sortField,b={query:{start:c,num:p,sortOrder:f,sortField:void 0===h?"created":h},signal:Object(i.g)(n,"signal")},e.next=16,t.portal._request(o,b);case 16:return v=e.sent,e.abrupt("return",{total:v.total,nextStart:v.nextStart,resources:v.resources.map((function(e){var r=e.created,n=e.size,a=e.resource;return{created:new Date(r),size:n,resource:t.resourceFromPath(a)}}))});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t,r,n){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(a.a.mark((function e(t,r,n,s){var l,p,d,f,h,b,v;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new c.a("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");case 2:return e.next=4,t.portalItem.load(s);case 4:return l=Object(u.x)(t.portalItem.userItemUrl,"add"===r?"addResources":"updateResources"),p=O(t.path),d=Object(o.a)(p,2),f=d[0],h=d[1],e.next=11,x(n);case 11:return b=e.sent,v=new FormData,f&&"."!==f&&v.append("resourcesPrefix",f),v.append("fileName",h),v.append("file",b,h),v.append("f","json"),Object(i.i)(s)&&s.access&&v.append("access",s.access),e.next=20,t.portalItem.portal._request(l,{method:"post",body:v,signal:Object(i.g)(s,"signal")});case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t,r){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(a.a.mark((function e(t,r,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new c.a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,t.load(n);case 4:return o=Object(u.x)(t.userItemUrl,"removeResources"),e.next=7,t.portal._request(o,{method:"post",query:{resource:r.path},signal:Object(i.g)(n,"signal")});case 7:r.portalItem=null;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load(r);case 2:return n=Object(u.x)(t.userItemUrl,"removeResources"),e.abrupt("return",t.portal._request(n,{method:"post",query:{deleteAll:!0},signal:Object(i.g)(r,"signal")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){var t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function j(e){var t=function(e){var t=Object(u.n)(e);return Object(i.h)(t)?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),r=Object(o.a)(t,2),n=r[0],a=r[1],s=O(n),c=Object(o.a)(s,2);return[c[0],c[1],a]}function x(e){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof Blob)){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,Object(l.default)(t.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){if(!e.hasPath())return null;var r=j(e.path),n=Object(o.a)(r,3),a=n[0],s=n[2];return e.portalItem.resourceFromPath(Object(u.x)(a,t+s))}function S(e,t){if(!e.hasPath())return null;var r=j(e.path),n=Object(o.a)(r,3),a=n[0],s=n[2];return e.portalItem.resourceFromPath(Object(u.x)(a,t+s))}},970:function(e,t,r){"use strict";function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,"a",(function(){return n}))},977:function(e,t,r){"use strict";r.d(t,"a",(function(){return C}));var n=r(9),a=r(12),o=r(10),s=r.n(o),i=r(21),c=r(2),u=r(3),l=r(5),p=r(6),d=r(0),f=(r(13),r(4)),h=r(14),b=(r(15),r(1)),v=r(62),y=r(8),m=r(47),O=r(23),j=r(11),x=r(19),g=(r(20),r(16)),w=r(44),S=r(61),k=r(81),I=r(124),R=r(383),_=r(970);function N(e){e&&e.writtenProperties&&e.writtenProperties.forEach((function(e){var t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&Object(_.a)(t)&&t.updateOrigin(e.propName,e.newOrigin)}))}var P=r(384),T=r(233),U=r(277),A=r(963);function E(e,t,r){return F.apply(this,arguments)}function F(){return(F=Object(i.a)(s.a.mark((function e(t,r,n){var o,i,c,u,l,p,d,f,h,b,v,y,m,j,w,S,k;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.resources){e.next=2;break}return e.abrupt("return");case 2:o=r.portalItem===t.portalItem?new Set(t.paths):new Set,t.paths.length=0,t.portalItem=r.portalItem,i=new Set(r.resources.toKeep.map((function(e){return e.resource.path}))),c=new Set,u=[],i.forEach((function(e){o.delete(e),t.paths.push(e)})),l=Object(a.a)(r.resources.toUpdate);try{for(l.s();!(p=l.n()).done;)d=p.value,o.delete(d.resource.path),i.has(d.resource.path)||c.has(d.resource.path)?(f=d.resource,h=d.content,b=d.finish,v=d.error,y=Object(A.getSiblingOfSameTypeI)(f,Object(x.a)()),t.paths.push(y.path),u.push(q({resource:y,content:h,finish:b,error:v},n))):(t.paths.push(d.resource.path),u.push(L(d,n)),c.add(d.resource.path))}catch(s){l.e(s)}finally{l.f()}m=Object(a.a)(r.resources.toAdd);try{for(m.s();!(j=m.n()).done;)w=j.value,u.push(q(w,n)),t.paths.push(w.resource.path)}catch(s){m.e(s)}finally{m.f()}if(o.forEach((function(e){var t=r.portalItem.resourceFromPath(e);u.push(t.portalItem.removeResource(t).catch((function(){})))})),0!==u.length){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,Object(g.j)(u);case 14:if(S=e.sent,Object(g.w)(n),!((k=S.filter((function(e){return"error"in e})).map((function(e){return e.error}))).length>0)){e.next=19;break}throw new O.a("save:resources","Failed to save one or more resources",{errors:k});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){return K.apply(this,arguments)}function K(){return(K=Object(i.a)(s.a.mark((function e(t,r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(t.resource.portalItem.addResource(t.resource,t.content,r));case 2:if(!0===(n=e.sent).ok){e.next=5;break}throw t.error&&t.error(n.error),n.error;case 5:t.finish&&t.finish(t.resource);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(s.a.mark((function e(t,r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(t.resource.update(t.content,r));case 2:if(!0===(n=e.sent).ok){e.next=5;break}throw t.error(n.error),n.error;case 5:t.finish(t.resource);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=r(787),J=h.a.getLogger("esri.layers.mixins.SceneService"),C=function(e){var t=function(e){Object(l.a)(o,e);var t=Object(p.a)(o);function o(){var e;return Object(c.a)(this,o),(e=t.apply(this,arguments)).spatialReference=null,e.fullExtent=null,e.heightModelInfo=null,e.minScale=0,e.maxScale=0,e.version={major:Number.NaN,minor:Number.NaN,versionString:""},e.copyright=null,e.sublayerTitleMode="item-title",e.title=null,e.layerId=null,e._debouncedSaveOperations=Object(g.i)(function(){var t=Object(i.a)(s.a.mark((function t(r,n,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r,t.next=0===t.t0?3:1===t.t0?4:5;break;case 3:return t.abrupt("return",e._save(n));case 4:return t.abrupt("return",e._saveAs(a,n));case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()),e}return Object(u.a)(o,[{key:"readSpatialReference",value:function(e,t){return this._readSpatialReference(t)}},{key:"_readSpatialReference",value:function(e){if(null!=e.spatialReference)return w.a.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,n=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=n?new w.a(n):null}},{key:"readFullExtent",value:function(e,t){var r=t.store,n=this._readSpatialReference(t);return null==n||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some((function(e){return e<D}))?null:new S.a({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:n})}},{key:"readVersion",value:function(e,t){var r=t.store,n=null!=r.version?r.version.toString():"",a={major:Number.NaN,minor:Number.NaN,versionString:n},o=n.split(".");return o.length>=2&&(a.major=parseInt(o[0],10),a.minor=parseInt(o[1],10)),a}},{key:"readTitlePortalItem",value:function(e){return"item-title"!==this.sublayerTitleMode?void 0:e}},{key:"readTitleService",value:function(e,t){var r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(P.h)(this.url,t.name);var n=t.name;if(!n&&this.url){var a=Object(P.e)(this.url);Object(f.i)(a)&&(n=a.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(n=r+" - "+n),Object(P.a)(n)}},{key:"url",set:function(e){var t=Object(P.g)(this,e,J);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}},{key:"writeUrl",value:function(e,t,r,n){Object(P.i)(this,e,"layers",t,n)}},{key:"parsedUrl",get:function(){var e=this._get("url");if(!e)return null;var t=Object(j.I)(e);return null!=this.layerId&&Object(P.b)(t.path)&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}},{key:"_verifyRootNodeAndUpdateExtent",value:function(){var e=Object(i.a)(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=12;break}return e.prev=1,e.t0=this,e.t1=t,e.next=6,this._fetchRootPage(t,r);case 6:return e.t2=e.sent,e.abrupt("return",e.t0._updateExtentFromRootPage.call(e.t0,e.t1,e.t2));case 10:e.prev=10,e.t3=e.catch(1);case 12:return e.t4=this,e.next=15,this._fetchRootNode(r);case 15:return e.t5=e.sent,e.abrupt("return",e.t4._updateExtentFromRootNode.call(e.t4,e.t5));case 17:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_fetchRootPage",value:function(){var e=Object(i.a)(s.a.mark((function e(t,r){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",Object(g.t)());case 2:return n=Math.floor(t.rootIndex/t.nodesPerPage),a="".concat(this.parsedUrl.path,"/nodepages/").concat(n),e.next=5,Object(k.default)(a,{responseType:"json",signal:r});case 5:return e.abrupt("return",e.sent.data);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_updateExtentFromRootPage",value:function(e,t){if(null==t||null==t.nodes)throw new O.a("sceneservice:invalid-node-page","Inavlid node page.");var r=t.nodes[e.rootIndex%e.nodesPerPage];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new O.a("sceneservice:invalid-node-page","Inavlid node page.");if(!(r.obb.center[0]<D)){var n=r.obb.halfSize,a=r.obb.center[2],o=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);this.fullExtent.zmin=a-o,this.fullExtent.zmax=a+o}}},{key:"_updateExtentFromRootNode",value:function(e){if(null!=e&&null!=this.fullExtent&&!this.fullExtent.hasZ&&Array.isArray(e.mbs)&&4===e.mbs.length&&!(e.mbs[0]<D)){var t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}}},{key:"_fetchRootNode",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.rootNode){e.next=2;break}return e.abrupt("return");case 2:return r=Object(j.x)(this.parsedUrl.path,this.rootNode),e.prev=3,e.next=6,Object(k.default)(r,{query:{f:"json"},responseType:"json",signal:t});case 6:return e.abrupt("return",e.sent.data);case 9:throw e.prev=9,e.t0=e.catch(3),new O.a("sceneservice:root-node-missing","Root node missing.",{error:e.t0,url:r});case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=this.layerId||!/SceneServer\/*$/i.test(this.url)){e.next=5;break}return e.next=3,this._fetchFirstLayerId(t);case 3:null!=(r=e.sent)&&(this.layerId=r);case 5:return e.abrupt("return",this._fetchServiceLayer(t));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchFirstLayerId",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.default)(this.url,{query:{f:"json"},responseType:"json",signal:t});case 2:if(!((r=e.sent).data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)){e.next=5;break}return e.abrupt("return",r.data.layers[0].id);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchServiceLayer",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.default)(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:t});case 2:(r=e.sent).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),n=r.data,this.read(n,{origin:"service",url:this.parsedUrl}),this.validateLayer(n);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_ensureLoadBeforeSave",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(e.t0="beforeSave"in this&&"function"==typeof this.beforeSave,!e.t0){e.next=6;break}return e.next=6,this.beforeSave();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){}},{key:"_updateTypeKeywords",value:function(e,t,r){e.typeKeywords||(e.typeKeywords=[]);var n,o=t.getTypeKeywords(),s=Object(a.a)(o);try{for(s.s();!(n=s.n()).done;){var i=n.value;e.typeKeywords.push(i)}}catch(c){s.e(c)}finally{s.f()}e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((function(e,t,r){return r.indexOf(e)===t})),1===r&&(e.typeKeywords=e.typeKeywords.filter((function(e){return"Hosted Service"!==e}))))}},{key:"_saveAs",value:function(){var e=Object(i.a)(s.a.mark((function e(t,r){var a,o,i,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(n.a)(Object(n.a)({},G),r),o=R.default.from(t),e.t0=o,e.t0){e.next=7;break}return J.error("_saveAs(): requires a portal item parameter"),e.next=7,Object(g.t)(new O.a("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"));case 7:return o.id&&((o=o.clone()).id=null),i=o.portal||I.a.getDefault(),e.next=11,this._ensureLoadBeforeSave();case 11:return o.type=V,o.portal=i,c={origin:"portal-item",url:null,messages:[],portal:i,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},u={layers:[this.write(null,c)]},e.next=16,Object(g.b)(c.resources.pendingOperations);case 16:return e.next=18,this._validateAgainstJSONSchema(u,c,a);case 18:return o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,a,1),e.next=23,i._signIn();case 23:return e.next=25,i.user.addItem({item:o,folder:a&&a.folder,data:u});case 25:return e.next=27,E(this.resourceReferences,c,null);case 27:return this.portalItem=o,N(c),c.portalItem=o,e.abrupt("return",o);case 31:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_save",value:function(){var e=Object(i.a)(s.a.mark((function e(t){var r,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(n.a)(Object(n.a)({},G),t),e.t0=this.portalItem,e.t0){e.next=6;break}return J.error("_save(): requires the .portalItem property to be set"),e.next=6,Object(g.t)(new O.a("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"));case 6:if(e.t1=this.portalItem.type!==V,!e.t1){e.next=11;break}return J.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+V),e.next=11,Object(g.t)(new O.a("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(V,'"')));case 11:return e.next=13,this._ensureLoadBeforeSave();case 13:return a={origin:"portal-item",url:this.portalItem.itemUrl&&Object(j.I)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||I.a.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,a)]},e.next=16,Object(g.b)(a.resources.pendingOperations);case 16:return e.next=18,this._validateAgainstJSONSchema(o,a,r);case 18:return this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,r,0),e.next=23,this.portalItem.update({data:o});case 23:return e.next=25,E(this.resourceReferences,a,null);case 25:return N(a),e.abrupt("return",this.portalItem);case 27:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_validateAgainstJSONSchema",value:function(){var e=Object(i.a)(s.a.mark((function e(t,n,a){var o,i,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.messages.filter((function(e){return"error"===e.type})).map((function(e){return new O.a(e.name,e.message,e.details)})),a&&a.validationOptions.ignoreUnsupported&&(o=o.filter((function(e){return"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name}))),!a.validationOptions.enabled&&!B){e.next=10;break}return e.next=4,r.e(205).then(r.bind(null,1295));case 4:if(!((i=e.sent.validate(t,a.portalItemLayerType)).length>0)){e.next=10;break}if(c="Layer item did not validate:\n".concat(i.join("\n")),J.error("_validateAgainstJSONSchema(): ".concat(c)),"throw"!==a.validationOptions.failPolicy){e.next=10;break}throw u=i.map((function(e){return new O.a("sceneservice:schema-validation",e)})).concat(o),new O.a("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:u});case 10:if(!(o.length>0)){e.next=12;break}throw new O.a("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o});case 12:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()}]),o}(e);return Object(d.a)([Object(b.b)({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],t.prototype,"id",void 0),Object(d.a)([Object(b.b)({type:w.a})],t.prototype,"spatialReference",void 0),Object(d.a)([Object(v.a)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(d.a)([Object(b.b)({type:S.a})],t.prototype,"fullExtent",void 0),Object(d.a)([Object(v.a)("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(d.a)([Object(b.b)({readOnly:!0,type:T.a})],t.prototype,"heightModelInfo",void 0),Object(d.a)([Object(b.b)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(d.a)([Object(b.b)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(d.a)([Object(b.b)({readOnly:!0})],t.prototype,"version",void 0),Object(d.a)([Object(v.a)("version",["store.version"])],t.prototype,"readVersion",null),Object(d.a)([Object(b.b)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(d.a)([Object(b.b)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(d.a)([Object(b.b)({type:String})],t.prototype,"title",void 0),Object(d.a)([Object(v.a)("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(d.a)([Object(v.a)("service","title",["name"])],t.prototype,"readTitleService",null),Object(d.a)([Object(b.b)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(d.a)([Object(b.b)(z.j)],t.prototype,"url",null),Object(d.a)([Object(m.a)("url")],t.prototype,"writeUrl",null),Object(d.a)([Object(b.b)({dependsOn:["layerId"]})],t.prototype,"parsedUrl",null),Object(d.a)([Object(b.b)({readOnly:!0})],t.prototype,"store",void 0),Object(d.a)([Object(b.b)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(d.a)([Object(y.a)("esri.layers.mixins.SceneService")],t),t},D=-1e38,B=!1,V="Scene Service",G={getTypeKeywords:function(){return[]},portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}}}]);
//# sourceMappingURL=33.2a5808f9.chunk.js.map