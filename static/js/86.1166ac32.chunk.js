(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[86],{1050:function(e,t,r){"use strict";r.r(t);var a=r(10),i=r.n(a),n=r(21),o=r(2),s=r(3),c=r(5),l=r(6),u=r(0),y=(r(13),r(4)),b=(r(14),r(15),r(1)),p=r(50),d=r(8),v=r(23),g=(r(11),r(19),r(20),r(16)),O=r(44),f=r(81),h=r(795),j=r(809),S=r(379),m=r(381),w=r(61),M=r(242),L=r(107),I=r(801),k=r(378),T={id:"0/0/0",level:0,row:0,col:0,extent:null},A=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).tileInfo=m.a.create({spatialReference:O.a.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new w.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,O.a.WebMercator),e.spatialReference=O.a.WebMercator,e}return Object(s.a)(r,[{key:"getTileBounds",value:function(e,t,r,a){var i=a||Object(L.g)();return T.level=e,T.row=t,T.col=r,T.extent=i,this.tileInfo.updateTileInfo(T),T.extent=null,i}},{key:"fetchTile",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=a.signal,n=a.timestamp,o=this.getTileUrl(e,t,r),s={responseType:"image",signal:i};return null!=n&&(s.query={_ts:a.timestamp}),Object(f.default)(o,s).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(){throw new v.a("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}}]),r}(Object(S.a)(Object(k.a)(Object(I.a)(M.a))));Object(u.a)([Object(b.b)({type:m.a})],A.prototype,"tileInfo",void 0),Object(u.a)([Object(b.b)({type:["show","hide"]})],A.prototype,"listMode",void 0),Object(u.a)([Object(b.b)({readOnly:!0,value:"base-tile"})],A.prototype,"type",void 0),Object(u.a)([Object(b.b)()],A.prototype,"fullExtent",void 0),Object(u.a)([Object(b.b)()],A.prototype,"spatialReference",void 0);var _=A=Object(u.a)([Object(d.a)("esri.layers.BaseTileLayer")],A),G=new p.a({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),B=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).type="bing-maps",a.tileInfo=new m.a({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:O.a.WebMercator},spatialReference:O.a.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),a.key=null,a.style="road",a.culture="en-US",a.region=null,a.portalUrl=null,a.hasAttributionData=!0,a}return Object(s.a)(r,[{key:"bingMetadata",get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)}},{key:"copyright",get:function(){return Object(y.i)(this.bingMetadata)?this.bingMetadata.copyright:null}},{key:"operationalLayerType",get:function(){return G.toJSON(this.style)}},{key:"bingLogo",get:function(){return Object(y.i)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}},{key:"load",value:function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return t._getMetadata()}))):this.addResolvingPromise(Object(g.t)(new v.a("bingmapslayer:load","Bing layer must have bing key."))),Object(g.u)(this)}},{key:"getTileUrl",value:function(e,t,r){if(!this.loaded||Object(y.h)(this.bingMetadata))return null;var a=this.bingMetadata.resourceSets[0].resources[0],i=a.imageUrlSubdomains[t%a.imageUrlSubdomains.length],n=this._getQuadKey(e,t,r);return a.imageUrl.replace("{subdomain}",i).replace("{quadkey}",n)}},{key:"fetchAttributionData",value:function(){var e=Object(n.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.load().then((function(){return Object(y.h)(t.bingMetadata)?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getMetadata",value:function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return Object(f.default)("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/".concat(t),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(t){var r=t.data;if(200!==r.statusCode)throw new v.a("bingmapslayer:getmetadata",r.statusDescription);if(e.bingMetadata=r,0===e.bingMetadata.resourceSets.length)throw new v.a("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new v.a("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new v.a("bingmapslayer:getmetadata",e.message)}))}},{key:"_getPortalBingKey",value:function(){var e=this;return Object(f.default)(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(t){if(!t.data.bingKey)throw new v.a("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");e.key=t.data.bingKey})).catch((function(e){throw new v.a("bingmapslayer:getportalbingkey",e.message)}))}},{key:"_getQuadKey",value:function(e,t,r){for(var a="",i=e;i>0;i--){var n=0,o=1<<i-1;0!=(r&o)&&(n+=1),0!=(t&o)&&(n+=2),a+=n.toString()}return a}}]),r}(Object(S.a)(Object(j.a)(Object(h.a)(_))));Object(u.a)([Object(b.b)({json:{read:!1,write:!1},value:null})],B.prototype,"bingMetadata",null),Object(u.a)([Object(b.b)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],B.prototype,"type",void 0),Object(u.a)([Object(b.b)({type:m.a})],B.prototype,"tileInfo",void 0),Object(u.a)([Object(b.b)({type:String,readOnly:!0,dependsOn:["bingMetadata"],json:{read:!1,write:!1}})],B.prototype,"copyright",null),Object(u.a)([Object(b.b)({type:String,json:{write:!1,read:!1}})],B.prototype,"key",void 0),Object(u.a)([Object(b.b)({type:G.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:G.read}}})],B.prototype,"style",void 0),Object(u.a)([Object(b.b)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"],dependsOn:["style"]})],B.prototype,"operationalLayerType",null),Object(u.a)([Object(b.b)({type:String,json:{write:!1,read:!1}})],B.prototype,"culture",void 0),Object(u.a)([Object(b.b)({type:String,json:{write:!1,read:!1}})],B.prototype,"region",void 0),Object(u.a)([Object(b.b)({type:String,json:{write:!0,read:!0}})],B.prototype,"portalUrl",void 0),Object(u.a)([Object(b.b)({type:Boolean,json:{write:!1,read:!1}})],B.prototype,"hasAttributionData",void 0),Object(u.a)([Object(b.b)({type:String,readOnly:!0,dependsOn:["bingMetadata"]})],B.prototype,"bingLogo",null);var E=B=Object(u.a)([Object(d.a)("esri.layers.BingMapsLayer")],B);t.default=E},787:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return f})),r.d(t,"g",(function(){return y})),r.d(t,"h",(function(){return g})),r.d(t,"i",(function(){return u})),r.d(t,"j",(function(){return p}));var a=r(9),i=r(98),n=r(119),o=r(377),s=r(246),c=r(303),l=r(387),u={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;Object(i.a)(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,t,r,a){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||Object(o.a)(this,"screenSizePerspectiveEnabled",{},a))&&(t[r]=e)}}}}}},y={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:function(e,t){return!t.disablePopup}},write:{enabled:!0,writer:function(e,t,r){t[r]=!e}}}},b={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},p={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:n.f}}},d={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},v={value:null,type:l.a,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function g(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}var O={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},f=Object(a.a)(Object(a.a)({},O),{},{json:Object(a.a)(Object(a.a)({},O.json),{},{origins:{"web-document":Object(a.a)(Object(a.a)({},O.json.origins["web-document"]),{},{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,t,r){return r&&"service"!==r.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?Object(s.b)(t.layerDefinition.drawingInfo.transparency):void 0:Object(s.b)(t.drawingInfo.transparency)}}})}),h={type:c.a,dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get:function(){var e,t;if(null==(e=this.layer)||!e.timeInfo)return null;var r=null==(t=this.view)?void 0:t.timeExtent,a=this.layer.timeExtent,i=this.layer.useViewTime?r&&a?r.intersection(a):r||a:a;if(!i||i.isEmpty)return i;var n=this.layer.timeOffset,o=n?i.offset(-n.value,n.unit):i,s=this._get("timeExtent");return o.equals(s)?s:o}}},795:function(e,t,r){"use strict";r.d(t,"a",(function(){return M})),r.d(t,"b",(function(){return L}));var a=r(12),i=r(2),n=r(3),o=r(5),s=r(6),c=r(0),l=r(98),u=r(8),y=r(229),b=r(33),p=r(377),d=r(34),v=r(4),g=r(385),O=r(41),f=r(24),h=function(){function e(){Object(i.a)(this,e),this._propertyOriginMap=new Map,this._originStores=new Array(y.a),this._values=new Map}return Object(n.a)(e,[{key:"clone",value:function(t){var r=this,a=new e,i=this._originStores[0];i&&i.forEach((function(e,t){a.set(t,Object(f.a)(e),0)}));for(var n=function(e){var i=r._originStores[e];i&&i.forEach((function(r,i){t&&t.has(i)||a.set(i,Object(f.a)(r),e)}))},o=2;o<y.a;o++)n(o);return a}},{key:"get",value:function(e,t){var r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}},{key:"keys",value:function(e){var t=null==e?this._values:this._originStores[e];return t?Object(O.a)(t.keys()):[]}},{key:"set",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,a=this._originStores[r];if(a||(a=new Map,this._originStores[r]=a),a.set(e,t),!this._values.has(e)||Object(v.c)(this._propertyOriginMap.get(e))<=r){var i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,r=this._originStores[t];if(r){var a=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(var i=t-1;i>=0;i--){var n=this._originStores[i];if(n&&n.has(e)){this._values.set(e,n.get(e)),this._propertyOriginMap.set(e,i);break}}}return a}}},{key:"has",value:function(e,t){var r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}},{key:"revert",value:function(e,t){for(;t>0&&!this.has(e,t);)--t;var r=this._originStores[t],a=r&&r.get(e),i=this._values.get(e);return this._values.set(e,a),this._propertyOriginMap.set(e,t),i!==a}},{key:"originOf",value:function(e){return this._propertyOriginMap.get(e)||0}},{key:"forEach",value:function(e){this._values.forEach(e)}}]),e}(),j=function(e){var t=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];e=t.call.apply(t,[this].concat(n));var s=Object(v.c)(Object(l.a)(Object(d.a)(e))),c=s.metadatas,u=s.store,y=new h;return s.store=y,u.keys().forEach((function(e){y.set(e,u.get(e),0)})),Object.keys(c).forEach((function(e){s.internalGet(e)&&y.set(e,s.internalGet(e),0)})),e}return Object(n.a)(r,[{key:"read",value:function(e,t){Object(g.a)(this,e,t)}},{key:"getAtOrigin",value:function(e,t){var r=S(this),a=Object(y.d)(t);if("string"==typeof e)return r.get(e,a);var i={};return e.forEach((function(e){i[e]=r.get(e,a)})),i}},{key:"originOf",value:function(e){return Object(y.b)(this.originIdOf(e))}},{key:"originIdOf",value:function(e){return S(this).originOf(e)}},{key:"revert",value:function(e,t){var r=S(this),a=Object(y.d)(t),i=Object(l.a)(this);("string"==typeof e?"*"===e?r.keys(a):[e]:e).forEach((function(e){i.propertyInvalidated(e),r.revert(e,a),i.propertyCommitted(e)}))}}]),r}(e);return t=Object(c.a)([Object(u.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function S(e){return Object(l.a)(e).store}var m=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return r}(j(b.a));m=Object(c.a)([Object(u.a)("esri.core.ReadOnlyMultiOriginJSONSupport")],m);function w(e){return Object(l.a)(e).store}var M=function(e){var t=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){Object(i.a)(this,r);for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return t.call.apply(t,[this].concat(a))}return r}(function(e){var t=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){Object(i.a)(this,r);for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return t.call.apply(t,[this].concat(a))}return Object(n.a)(r,[{key:"clear",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return w(this).delete(e,Object(y.d)(t))}},{key:"write",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(p.b)(this,e=e||{},t),e}},{key:"setAtOrigin",value:function(e,t,r){Object(l.a)(this).setAtOrigin(e,t,Object(y.d)(r))}},{key:"removeOrigin",value:function(e){var t,r=w(this),i=Object(y.d)(e),n=r.keys(i),o=Object(a.a)(n);try{for(o.s();!(t=o.n()).done;){var s=t.value;r.originOf(s)===i&&r.set(s,r.get(s,i),6)}}catch(c){o.e(c)}finally{o.f()}}},{key:"updateOrigin",value:function(e,t){for(var r=w(this),a=Object(y.d)(t),i=this.get(e),n=a+1;n<y.a;++n)r.delete(e,n);r.set(e,i,a)}},{key:"toJSON",value:function(e){return this.write({},e)}}]),r}(e);return(t=Object(c.a)([Object(u.a)("esri.core.WriteableMultiOriginJSONSupport")],t)).prototype.toJSON.isDefaultToJSON=!0,t}(j(e)));return t=Object(c.a)([Object(u.a)("esri.core.MultiOriginJSONSupport")],t)},L=function(e){Object(o.a)(r,e);var t=Object(s.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return r}(M(b.a));L=Object(c.a)([Object(u.a)("esri.core.MultiOriginJSONSupport")],L)},801:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(2),i=r(3),n=r(5),o=r(6),s=r(0),c=(r(13),r(14),r(15),r(1)),l=r(8),u=(r(11),r(19),r(20),function(e){var t=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).refreshInterval=0,e}return Object(i.a)(r,[{key:"refresh",value:function(){this.emit("refresh")}}]),r}(e);return Object(s.a)([Object(c.b)({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),t=Object(s.a)([Object(l.a)("esri.layers.mixins.RefreshableLayer")],t)})},809:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(9),i=r(2),n=r(3),o=r(60),s=r(55),c=r(5),l=r(6),u=r(0),y=(r(13),r(14),r(15),r(1)),b=r(8),p=r(47),d=r(23),v=(r(11),r(19),r(20),r(385)),g=r(377),O={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}},f=r(787),h=function(e){var t=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(i.a)(this,r),(e=t.apply(this,arguments)).title=null,e}return Object(n.a)(r,[{key:"writeListMode",value:function(e,t,r,a){(a&&"ground"===a.layerContainerType||e&&Object(g.a)(this,r,{},a))&&(t[r]=e)}},{key:"writeOperationalLayerType",value:function(e,t,r,a){!e||a&&"tables"===a.layerContainerType||(t.layerType=e)}},{key:"writeTitle",value:function(e,t){t.title=e||"Layer"}},{key:"read",value:function(e,t){var a=this;t&&(t.layer=this),Object(v.b)(this,e,(function(t){return Object(o.a)(Object(s.a)(r.prototype),"read",a).call(a,e,t)}),t)}},{key:"write",value:function(e,t){if(t&&t.origin){var i="".concat(t.origin,"/").concat(t.layerContainerType||"operational-layers"),n=O[i],c=n&&n[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===i&&(c=!1),!c)return t.messages&&t.messages.push(new d.a("layer:unsupported","Layers (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' are not supported in the context of '").concat(i,"'"),{layer:this})),null}var l=Object(o.a)(Object(s.a)(r.prototype),"write",this).call(this,e,Object(a.a)(Object(a.a)({},t),{},{layer:this})),u=!!t&&!!t.messages&&!!t.messages.filter((function(e){return e instanceof d.a&&"web-document-write:property-required"===e.name})).length;return!this.url&&u?null:l}},{key:"beforeSave",value:function(){}}]),r}(e);return Object(u.a)([Object(y.b)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),Object(u.a)([Object(y.b)({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"listMode",void 0),Object(u.a)([Object(p.a)("listMode")],t.prototype,"writeListMode",null),Object(u.a)([Object(y.b)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],t.prototype,"operationalLayerType",void 0),Object(u.a)([Object(p.a)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),Object(u.a)([Object(y.b)(f.e)],t.prototype,"opacity",void 0),Object(u.a)([Object(y.b)({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),Object(u.a)([Object(p.a)("title")],t.prototype,"writeTitle",null),Object(u.a)([Object(y.b)({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],t.prototype,"visible",void 0),t=Object(u.a)([Object(b.a)("esri.layers.mixins.OperationalLayer")],t)}}}]);
//# sourceMappingURL=86.1166ac32.chunk.js.map