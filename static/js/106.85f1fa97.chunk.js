(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[106],{1011:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(12),i=n(2),a=n(3),s=n(4),u=n(14),o=n(23),l=n(74),d=n(107),c=n(357),f=n(131),h=n(13),p=n(856),v={minX:0,minY:0,maxX:0,maxY:0},y=function(){function e(){var t=this;Object(i.a)(this,e),this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=Object(p.a)(9,Object(h.a)("csp-restrictions")?function(e){return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(t._indexInvalid){var e=new Array(t._idByBounds.size),n=0;t._idByBounds.forEach((function(t,r){e[n++]=r})),t._indexInvalid=!1,t._index.clear(),t._index.load(e)}else t._boundsToLoad.length&&(t._index.load(t._boundsToLoad.filter((function(e){return t._idByBounds.has(e)}))),t._boundsToLoad.length=0)}}return Object(a.a)(e,[{key:"clear",value:function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}},{key:"delete",value:function(e){var t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}},{key:"forEachInBounds",value:function(e,t){this._loadIndex();var n,i=Object(r.a)(function(e,t){return v.minX=t[0],v.minY=t[1],v.maxX=t[2],v.maxY=t[3],e.search(v)}(this._index,e));try{for(i.s();!(n=i.n()).done;){var a=n.value;t(this._idByBounds.get(a))}}catch(s){i.e(s)}finally{i.f()}}},{key:"get",value:function(e){return this._boundsById.get(e)}},{key:"has",value:function(e){return this._boundsById.has(e)}},{key:"invalidateIndex",value:function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}},{key:"set",value:function(e,t){if(!this._indexInvalid){var n=this._boundsById.get(e);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}]),e}(),g=n(201),m=n(142),b=n(888),x={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new g.a(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return e.centroid||(e.centroid=Object(b.a)(new m.a,e.geometry,t.hasZ,t.hasM)),e.centroid}},_=function(){function e(t){Object(i.a)(this,e),this.geometryInfo=t,this._boundsStore=new y,this._featuresById=new Map,this._markedIds=new Set,this.events=new l.a,this.featureAdapter=x}return Object(a.a)(e,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){var e=this;if(!this.numFeatures)return null;var t=Object(d.g)(d.a);return this._featuresById.forEach((function(n){var r=e._boundsStore.get(n.objectId);r&&(t[0]=Math.min(r[0],t[0]),t[1]=Math.min(r[1],t[1]),t[2]=Math.max(r[2],t[2]),t[3]=Math.max(r[3],t[3]))})),t}},{key:"storeStatistics",get:function(){var e=0;return this._featuresById.forEach((function(t){t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}},{key:"add",value:function(e){this._add(e),this._emitChanged()}},{key:"addMany",value:function(e){var t,n=Object(r.a)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._add(i)}}catch(a){n.e(a)}finally{n.f()}this._emitChanged()}},{key:"clear",value:function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}},{key:"removeById",value:function(e){var t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}},{key:"removeManyById",value:function(e){this._boundsStore.invalidateIndex();var t,n=Object(r.a)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value,a=this._featuresById.get(i);a&&this._remove(a)}}catch(s){n.e(s)}finally{n.f()}this._emitChanged()}},{key:"forEachBounds",value:function(e,t,n){var i,a=Object(r.a)(e);try{for(a.s();!(i=a.n()).done;){var s=i.value,u=this._boundsStore.get(s.objectId);u&&t(Object(f.k)(n,u))}}catch(o){a.e(o)}finally{a.f()}}},{key:"getFeature",value:function(e){return this._featuresById.get(e)}},{key:"has",value:function(e){return this._featuresById.has(e)}},{key:"forEach",value:function(e){this._featuresById.forEach((function(t){return e(t)}))}},{key:"forEachInBounds",value:function(e,t){var n=this;this._boundsStore.forEachInBounds(e,(function(e){t(n._featuresById.get(e))}))}},{key:"startMarkingUsedFeatures",value:function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}},{key:"sweep",value:function(){var e=this,t=!1;this._featuresById.forEach((function(n,r){e._markedIds.has(r)||(t=!0,e._remove(n))})),this._markedIds.clear(),t&&this._emitChanged()}},{key:"_emitChanged",value:function(){this.events.emit("changed",void 0)}},{key:"_add",value:function(e){if(e){var t=e.objectId;if(null!=t){var n,r=this._featuresById.get(t);if(this._markedIds.add(t),r?(e.displayId=r.displayId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(s.i)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=Object(c.r)(n||Object(d.g)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,n),this._featuresById.set(t,e)}else u.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new o.a("featurestore:invalid-feature","feature id is missing",{feature:e}))}}},{key:"_remove",value:function(e){return Object(s.i)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}]),e}()},1015:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(9),i=n(32),a=n(108),s=n(93),u={ar:[".",","],bs:[",","."],ca:[",","."],cs:[",","\xa0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xa0"],fi:[",","\xa0"],fr:[",","\u202f"],"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xa0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xa0"],lv:[",","\xa0"],mk:[",","."],nb:[",","\xa0"],nl:[",","."],pl:[",","\xa0"],pt:[",","."],"pt-pt":[",","\xa0"],ro:[",","."],ru:[",","\xa0"],sk:[",","\xa0"],sl:[",","."],sr:[",","."],sv:[",","\xa0"],th:[".",","],tr:[",","."],uk:[",","\xa0"],vi:[",","."],zh:[".",","]};function o(e){e||(e=Object(s.b)());var t=e in u;if(!t){var n=e.split("-");n.length>1&&n[0]in u&&(e=n[0],t=!0),t||(e="en")}var r=Object(i.a)(u[e],3),a=r[0],o=r[1],l=r[2];return{decimal:a,group:o,pattern:void 0===l?"#,##0.###":l}}function l(e,t){var n=o((t=Object(r.a)({},t)).locale);t.customs=n;var i=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){var r=(n=n||{}).customs.group,i=n.customs.decimal,a=t.split(";"),s=a[0];if(-1!==(t=a[e<0?1:0]||"-"+s).indexOf("%"))e*=100;else if(-1!==t.indexOf("\u2030"))e*=1e3;else{if(-1!==t.indexOf("\xa4"))throw new Error("currency notation not supported");if(-1!==t.indexOf("E"))throw new Error("exponential notation not supported")}var u=d,o=s.match(u);if(!o)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(u,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);var r=t.split("."),i="string"==typeof n.places&&n.places.indexOf(","),a=n.places;i?a=n.places.substring(i+1):a>=0||(a=(r[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(a))));var s=String(Math.abs(e)).split("."),u=s[1]||"";if(r[1]||n.places){i&&(n.places=n.places.substring(0,i));var o=void 0!==n.places?n.places:r[1]&&r[1].lastIndexOf("0")+1;o>u.length&&(s[1]=u.padEnd(Number(o),"0")),a<u.length&&(s[1]=u.substr(0,Number(a)))}else s[1]&&s.pop();var l=r[0].replace(",",""),d=l.indexOf("0");-1!==d&&((d=l.length-d)>s[0].length&&(s[0]=s[0].padStart(d,"0")),-1===l.indexOf("#")&&(s[0]=s[0].substr(s[0].length-d)));var c,f,h=r[0].lastIndexOf(",");if(-1!==h){c=r[0].length-h-1;var p=r[0].substr(0,h);-1!==(h=p.lastIndexOf(","))&&(f=p.length-h-1)}for(var v=[],y=s[0];y;){var g=y.length-c;v.push(g>0?y.substr(g):y),y=g>0?y.slice(0,g):"",f&&(c=f,f=void 0)}return s[0]=v.reverse().join(n.group||","),s.join(n.decimal||".")}(e,o[0],{decimal:i,group:r,places:n.places,round:n.round}))}(e,i,t)}var d=/[#0,]*[#0](?:\.0*#*)?/;function c(e){var t=o((e=e||{}).locale),n=e.pattern||t.pattern,r=t.group,i=t.decimal,s=1;if(-1!==n.indexOf("%"))s/=100;else if(-1!==n.indexOf("\u2030"))s/=1e3;else if(-1!==n.indexOf("\xa4"))throw new Error("currency notation not supported");var u=n.split(";");return 1===u.length&&u.push("-"+u[0]),{regexp:p(u,(function(t){return(t="(?:"+Object(a.a)(t,".")+")").replace(d,(function(t){var n={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:i,exponent:!1},a=t.split("."),u=e.places;1===a.length&&1!==s&&(a[1]="###"),1===a.length||0===u?n.fractional=!1:(void 0===u&&(u=e.pattern?a[1].lastIndexOf("0")+1:1/0),u&&null==e.fractional&&(n.fractional=!0),!e.places&&u<a[1].length&&(u+=","+a[1].length),n.places=u);var o=a[0].split(",");return o.length>1&&(n.groupSize=o.pop().length,o.length>1&&(n.groupSize2=o.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);var t=h(e),n=p(e.fractional,(function(t){var n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0),r=t+n;return n&&(r="(?:(?:"+r+")|(?:"+n+"))"),r+p(e.exponent,(function(t){return t?"([eE]"+h({signed:e.eSigned})+")":""}))}(n)+")"}))}),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:i,factor:s}}function f(e,t){var n=c(t),r=new RegExp("^"+n.regexp+"$").exec(e);if(!r)return NaN;var i=r[1];if(!r[1]){if(!r[2])return NaN;i=r[2],n.factor*=-1}return i=i.replace(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(i)*n.factor}function h(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",p(e.signed,(function(e){return e?"[-+]":""}),!0)+p(e.separator,(function(t){if(!t)return"(?:\\d+)";" "===(t=Object(a.a)(t))?t="\\s":"\xa0"===t&&(t="\\s\\xa0");var n=e.groupSize,r=e.groupSize2;if(r){var i="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*["+t+"]\\d{"+n+"})";return n-r>0?"(?:"+i+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":i}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}var p=function(e,t,n){if(!(e instanceof Array))return t(e);for(var r=[],i=0;i<e.length;i++)r.push(t(e[i]));return v(r.join("|"),n)},v=function(e,t){return"("+(t?"?:":"")+e+")"}},1309:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J})),n.d(t,"csvLatitudeFieldNames",(function(){return A})),n.d(t,"csvLongitudeFieldNames",(function(){return Y}));var r=n(12),i=n(10),a=n.n(i),s=n(32),u=n(21),o=n(3),l=n(2),d=n(13),c=n(24),f=n(23),h=n(11),p=n(16),v=n(46),y=n(44),g=n(53),m=(n(75),n(81)),b=n(136),x=n(1015),_=n(201),I=n(142),k=n(790),F=n(913),O=n(881),j=n(967),w=n(1011),N=n(1046),T=a.a.mark(M),B=a.a.mark(L),E=/^\s*"([\S\s]*)"\s*$/,S=/""/g,D=[","," ",";","|","\t"];function C(e,t){for(var n={},r=e.length,i=0;i<r;i++)n[e[i]]=t[i];return n}function M(e,t,n){var r,i,s;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=0;case 1:if(!(r<=e.length)){a.next=10;break}if(i=e.indexOf(t,r),s=e.substring(r,i>-1?i:void 0),r+=s.length+1,a.t0=n&&!s.trim(),a.t0){a.next=8;break}return a.next=8,s;case 8:a.next=1;break;case 10:case"end":return a.stop()}}),T)}function q(e){var t=e.includes("\r\n")?"\r\n":"\n";return M(e,t,!0)}function L(e,t,n){var r,i,s,u,o,l,d,c,f,h;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r="",i="",s=0,u=[];case 1:if(o=e.next(),l=o.value,!o.done){a.next=4;break}return a.abrupt("return");case 4:d=M(l,n,!1);case 5:if(c=d.next(),f=c.value,!c.done){a.next=8;break}return a.abrupt("break",24);case 8:if(r+=i+f,i="",(s+=R(f))%2!=0){a.next=21;break}if(!(s>0)){a.next=17;break}if(h=E.exec(r)){a.next=14;break}return u=[],r="",s=0,a.abrupt("continue",31);case 14:u.push(h[1].replace(S,'"')),a.next=18;break;case 17:u.push(r);case 18:r="",s=0,a.next=22;break;case 21:i=n;case 22:a.next=5;break;case 24:if(0!==s){a.next=30;break}return a.next=27,C(t,u);case 27:u=[],a.next=31;break;case 30:i="\n";case 31:a.next=1;break;case 33:case"end":return a.stop()}}),B)}function R(e){var t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}var V=Object(j.c)("esriGeometryPoint"),z=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],A=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],Y=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],G=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,P=["csv"],Z=[0,0],Q=function e(t,n){Object(l.a)(this,e),this.x=t,this.y=n},X=function(){var e=Object(x.a)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),r=e.factor;return function(i){var a=t.exec(i);if(e.factor=r,!a)return NaN;var s=a[1];if(!a[1]){if(!a[2])return NaN;s=a[2],e.factor*=-1}return+(s=s.replace(n,"").replace(e.decimal,"."))*e.factor}}(),$="isInteger"in Number?Number.isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},J=function(){function e(){Object(l.a)(this,e),this._fieldsIndex=null,this._queryEngine=null}return Object(o.a)(e,[{key:"destroy",value:function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null}},{key:"load",value:function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,i,u,o,l,d,c,f=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},e.next=3,Object(p.b)([this._fetch(t.url,n),this._checkProjection(n&&t.parsing&&t.parsing.spatialReference)]);case 3:return r=e.sent,i=Object(s.a)(r,1),u=i[0],o=this._parse(u,t),this._queryEngine=this._createQueryEngine(u,o),o.layerDefinition.extent=this._queryEngine.fullExtent,o.layerDefinition.timeInfo&&(l=this._queryEngine.timeExtent,d=l.start,c=l.end,o.layerDefinition.timeInfo.timeExtent=[d,c]),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new f.a("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=Object(u.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=Object(u.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=Object(u.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=Object(u.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetch",value:function(){var e=Object(u.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new f.a("csv-source:invalid-source","url not defined");case 2:return r=Object(h.I)(t),e.next=5,Object(m.default)(r.path,{query:r.query,responseType:"text",signal:n.signal});case 5:return e.abrupt("return",e.sent.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_parse",value:function(e,t){var n=t.parsing||{},i={columnDelimiter:n.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},a=q(e),s=a.next().value;if(!s)throw new f.a("csv","CSV is empty",{csv:e});if(s=s.trim(),!n.columnDelimiter){var u=function(e){var t,n=e.trim(),i=0,a="",s=Object(r.a)(D);try{for(s.s();!(t=s.n()).done;){var u=t.value,o=n.split(u).length;o>i&&(i=o,a=u)}}catch(l){s.e(l)}finally{s.f()}return""===a?null:a}(s);if(!u)throw new f.a("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");i.columnDelimiter=u}var o=s.split(i.columnDelimiter),l=i.layerDefinition={name:Object(h.k)(t.url,P)||"csv",drawingInfo:V,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){var d=this._inferLocationInfo(o);if(!n.longitudeField&&!d.longitudeFieldName||!n.latitudeField&&!d.latitudeFieldName)throw new f.a("csv","Unable to identify latitudeField and/or longitudeField from CSV");i.locationInfo={longitudeFieldName:n.longitudeField||d.longitudeFieldName,latitudeFieldName:n.latitudeField||d.latitudeFieldName}}var p=this._inferFields(a,i.columnDelimiter,o,i.locationInfo);if(n.fields&&n.fields.length){var v,y=new Map,g=Object(r.a)(n.fields);try{for(g.s();!(v=g.n()).done;){var m=v.value;y.set(m.name.toLowerCase(),m)}}catch(B){g.e(B)}finally{g.f()}var b,x=Object(r.a)(p);try{for(x.s();!(b=x.n()).done;){var _=b.value,I=y.get(_.name.toLowerCase());if(I){var F=_.name;Object(c.d)(_,I),_.name=F}}}catch(B){x.e(B)}finally{x.f()}}if(l.fields=p,!l.fields.some((function(e){return"esriFieldTypeOID"===e.type&&(l.objectIdField=e.name,!0)}))){var O={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};l.objectIdField=O.name,l.fields.unshift(O)}if(this._fieldsIndex=new k.a(l.fields),l.timeInfo){var j=l.timeInfo;if(j.startTimeField){var w=this._fieldsIndex.get(j.startTimeField);w?(j.startTimeField=w.name,w.type="esriFieldTypeDate"):j.startTimeField=null}if(j.endTimeField){var N=this._fieldsIndex.get(j.endTimeField);N?(j.endTimeField=N.name,N.type="esriFieldTypeDate"):j.endTimeField=null}if(j.trackIdField){var T=this._fieldsIndex.get(j.trackIdField);j.trackIdField=T?T.name:null}j.startTimeField||j.endTimeField||(l.timeInfo=null)}return i}},{key:"_inferLocationInfo",value:function(e){var t=null,n=null,r=function(t){return e.find((function(e){return e.toLowerCase()===t}))};return Y.some((function(e){return!!(t=r(e))})),A.some((function(e){return!!(n=r(e))})),{longitudeFieldName:t,latitudeFieldName:n}}},{key:"_inferFields",value:function(e,t,n,i){var a=this,s=[],u=L(e,n,t),o=[];e:for(;o.length<10;){var l=u.next(),d=l.value;if(l.done)break e;o.push(d)}var c,f=Object(r.a)(n);try{var h=function(){var e=c.value;if(e===i.longitudeFieldName||e===i.latitudeFieldName)s.push({name:e,type:"esriFieldTypeDouble",alias:e});else{var t=o.map((function(t){return t[e]})),n=a._inferFieldType(t),r={name:e,type:null,alias:e};switch(n){case"integer":r.type="esriFieldTypeInteger";break;case"double":r.type="esriFieldTypeDouble";break;case"date":r.type="esriFieldTypeDate",r.length=36;break;default:r.type="esriFieldTypeString",r.length=255}s.push(r)}};for(f.s();!(c=f.n()).done;)h()}catch(p){f.e(p)}finally{f.f()}return s}},{key:"_inferFieldType",value:function(e){var t=this;if(!e.length)return"string";var n=/[^+-.,0-9]/;return e.map((function(e){var r=!1;if(""!==e){if(n.test(e))r=!0;else{var i=X(e);if(!isNaN(i))return/[.,]/.test(e)||!$(i)||i>214783647||i<-214783648?"double":"integer";if(-1===e.indexOf("E"))r=!0;else{if(i=Number(e),!isNaN(i))return"double";if(-1===e.indexOf(","))r=!0;else{if(e=e.replace(",","."),i=Number(e),!isNaN(i))return"double";r=!0}}}if(r){if(!/^[-]?\d*[.,]?\d*$/.test(e)){var a=new Date(e);return t._isValidDate(a,e)?"date":"string"}return"string"}return"string"}})).reduce((function(e,t){return void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0}))}},{key:"_isValidDate",value:function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var n=!0;if(Object(d.a)("chrome")&&/\d+\W*$/.test(t)){var r=t.match(/[a-zA-Z]{2,}/);if(r){for(var i=!1,a=0;!i&&a<=r.length;)i=!G.test(r[a]),a++;n=!i}}return n}},{key:"_createQueryEngine",value:function(e,t){var n,i=t.locationInfo,a=i.latitudeFieldName,u=i.longitudeFieldName,o=t.layerDefinition,l=o.objectIdField,d=o.fields,c=o.extent,f=o.timeInfo,h=[],p=[],m=new Set,x=new Set,k=[],O=Object(r.a)(d);try{for(O.s();!(n=O.n()).done;){var j=n.value,T=j.name,B=j.type;"esriFieldTypeDate"===B?m.add(T):z.indexOf(B)>-1&&x.add(T),T!==l&&k.push(T)}}catch(se){O.e(se)}finally{O.f()}var E=0,S=q(e);S.next();var D=L(S,k,t.columnDelimiter);e:for(;;){var C=D.next(),M=C.value;if(C.done)break e;var R=this._parseCoordinateValue(M[a]),V=this._parseCoordinateValue(M[u]);if(null!=V&&null!=R&&!isNaN(R)&&!isNaN(V)){for(var A in M[a]=R,M[u]=V,M)if(A!==a&&A!==u)if(m.has(A)){var Y=new Date(M[A]);M[A]=this._isValidDate(Y,M[A])?Y.getTime():null}else if(x.has(A)){var G=X(M[A]);isNaN(G)?M[A]=null:M[A]=G}M[l]=E,E++,h.push(new Q(V,R)),p.push(M)}}if(!Object(v.c)({wkid:4326},c.spatialReference))if(Object(v.m)(c.spatialReference)){var P,$=Object(r.a)(h);try{for($.s();!(P=$.n()).done;){var J=P.value,U=Object(g.c)(J.x,J.y,Z),W=Object(s.a)(U,2);J.x=W[0],J.y=W[1]}}catch(se){$.e(se)}finally{$.f()}}else h=Object(b.j)(F.a,h,y.a.WGS84,c.spatialReference,null);for(var H=new w.a({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),K=new N.a({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:f,objectIdField:l,spatialReference:c.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:H}),ee=[],te=0;te<h.length;te++){var ne=h[te],re=ne.x,ie=ne.y,ae=p[te];ae[l]=te+1,ee.push(new _.a(new I.a([],[re,ie]),ae,null,ae[l]))}return H.addMany(ee),K}},{key:"_parseCoordinateValue",value:function(e){if(null==e||""===e)return null;var t=X(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}},{key:"_checkProjection",value:function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(O.a)(v.a,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new f.a("csv-layer","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=106.85f1fa97.chunk.js.map