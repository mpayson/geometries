self.webpackChunkRemoteClient([199],{408:function(e,t,r){"use strict";r.r(t);var o=r(18),a=(r(7),r(3),r(4),r(20)),p=r(19),i=(r(24),r(34),r(35),r(56)),n=r(57),b=(r(59),r(97)),s=r(126),c=r(331);let l=class extends c.default{constructor(...e){super(...e),this.portalItem=null,this.isReference=null,this.subDomains=["a","b","c"],this.fullExtent=new n.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,i.a.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};Object(o.a)([Object(a.b)({type:b.default,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],l.prototype,"portalItem",void 0),Object(o.a)([Object(a.b)({type:Boolean,json:{read:!1,write:!1}})],l.prototype,"isReference",void 0),Object(o.a)([Object(a.b)({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],l.prototype,"refreshInterval",null),Object(o.a)([Object(a.b)({type:s.a,json:{write:!1}})],l.prototype,"tileInfo",void 0),Object(o.a)([Object(a.b)({type:["show","hide"]})],l.prototype,"listMode",void 0),Object(o.a)([Object(a.b)({readOnly:!0,json:{read:!1,write:!1}})],l.prototype,"subDomains",void 0),Object(o.a)([Object(a.b)({readOnly:!0,json:{read:!1,write:!1}})],l.prototype,"fullExtent",void 0),Object(o.a)([Object(a.b)({readOnly:!0,json:{read:!1,write:!1}})],l.prototype,"urlTemplate",void 0),Object(o.a)([Object(a.b)({type:["OpenStreetMap"]})],l.prototype,"operationalLayerType",void 0),Object(o.a)([Object(a.b)({json:{read:!1}})],l.prototype,"type",void 0),Object(o.a)([Object(a.b)({json:{read:!1,write:!1}})],l.prototype,"copyright",void 0),Object(o.a)([Object(a.b)({json:{read:!1,write:!1}})],l.prototype,"wmtsInfo",void 0),l=Object(o.a)([Object(p.a)("esri.layers.OpenStreetMapLayer")],l);var j=l;t.default=j}});