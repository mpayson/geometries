(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[30],{1015:function(e,t,o){"use strict";var r,a=o(2),i=o(3),n=o(5),l=o(6),c=o(0),s=(o(13),o(24)),b=(o(14),o(15),o(1)),p=o(50),u=o(8),j=(o(11),o(19),o(20),o(28)),d=r=function(e){Object(n.a)(o,e);var t=Object(l.a)(o);function o(){var e;return Object(a.a)(this,o),(e=t.apply(this,arguments)).field=null,e.minValue=0,e.maxValue=255,e}return Object(i.a)(o,[{key:"clone",value:function(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}}]),o}(j.a);Object(c.a)([Object(b.b)({type:String,json:{write:!0}})],d.prototype,"field",void 0),Object(c.a)([Object(b.b)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"minValue",void 0),Object(c.a)([Object(b.b)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"maxValue",void 0);var O=d=r=Object(c.a)([Object(u.a)("esri.renderers.support.pointCloud.ColorModulation")],d),y=new p.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"}),f=function(e){Object(n.a)(o,e);var t=Object(l.a)(o);function o(){return Object(a.a)(this,o),t.apply(this,arguments)}return o}(j.a);Object(c.a)([Object(b.b)({type:y.apiValues,readOnly:!0,nonNullable:!0,json:{type:y.jsonValues,read:!1,write:y.write}})],f.prototype,"type",void 0);var v,h=f=Object(c.a)([Object(u.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],f),m=o(42),w=v=function(e){Object(n.a)(o,e);var t=Object(l.a)(o);function o(){var e;return Object(a.a)(this,o),(e=t.apply(this,arguments)).type="fixed-size",e.size=0,e.useRealWorldSymbolSizes=null,e}return Object(i.a)(o,[{key:"clone",value:function(){return new v({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}}]),o}(h);Object(c.a)([Object(m.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],w.prototype,"type",void 0),Object(c.a)([Object(b.b)({type:Number,nonNullable:!0,json:{write:!0}})],w.prototype,"size",void 0),Object(c.a)([Object(b.b)({type:Boolean,json:{write:!0}})],w.prototype,"useRealWorldSymbolSizes",void 0);var T,g=w=v=Object(c.a)([Object(u.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],w),V=T=function(e){Object(n.a)(o,e);var t=Object(l.a)(o);function o(){var e;return Object(a.a)(this,o),(e=t.apply(this,arguments)).type="splat",e.scaleFactor=1,e}return Object(i.a)(o,[{key:"clone",value:function(){return new T({scaleFactor:this.scaleFactor})}}]),o}(h);Object(c.a)([Object(m.a)({pointCloudSplatAlgorithm:"splat"})],V.prototype,"type",void 0),Object(c.a)([Object(b.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],V.prototype,"scaleFactor",void 0);var S={key:"type",base:h,typeMap:{"fixed-size":g,splat:V=T=Object(c.a)([Object(u.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],V)}},C=Object(p.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),k=function(e){Object(n.a)(o,e);var t=Object(l.a)(o);function o(e){var r;return Object(a.a)(this,o),(r=t.call(this,e)).type=void 0,r.pointSizeAlgorithm=null,r.colorModulation=null,r.pointsPerInch=10,r}return Object(i.a)(o,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}},{key:"cloneProperties",value:function(){return{pointSizeAlgorithm:Object(s.a)(this.pointSizeAlgorithm),colorModulation:Object(s.a)(this.colorModulation),pointsPerInch:Object(s.a)(this.pointsPerInch)}}}]),o}(j.a);Object(c.a)([Object(b.b)({type:C.apiValues,readOnly:!0,nonNullable:!0,json:{type:C.jsonValues,read:!1,write:C.write}})],k.prototype,"type",void 0),Object(c.a)([Object(b.b)({types:S,json:{write:!0}})],k.prototype,"pointSizeAlgorithm",void 0),Object(c.a)([Object(b.b)({type:O,json:{write:!0}})],k.prototype,"colorModulation",void 0),Object(c.a)([Object(b.b)({json:{write:!0},nonNullable:!0,type:Number})],k.prototype,"pointsPerInch",void 0),k=Object(c.a)([Object(u.a)("esri.renderers.PointCloudRenderer")],k),(k||(k={})).fieldTransformTypeKebabDict=new p.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var z=k;t.a=z},1134:function(e,t,o){"use strict";var r,a=o(9),i=o(2),n=o(3),l=o(5),c=o(6),s=o(0),b=(o(13),o(24)),p=(o(14),o(15)),u=o(1),j=o(42),d=o(8),O=(o(11),o(19),o(20),o(1015)),y=o(874),f=o(28),v=o(52),h=r=function(e){Object(l.a)(o,e);var t=Object(c.a)(o);function o(){var e;return Object(i.a)(this,o),(e=t.apply(this,arguments)).description=null,e.label=null,e.minValue=0,e.maxValue=0,e.color=null,e}return Object(n.a)(o,[{key:"clone",value:function(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(b.a)(this.color)})}}]),o}(f.a);Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],h.prototype,"description",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(s.a)([Object(u.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),Object(s.a)([Object(u.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),Object(s.a)([Object(u.b)({type:v.a,json:{type:[p.a],write:!0}})],h.prototype,"color",void 0);var m,w=h=r=Object(s.a)([Object(d.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h),T=m=function(e){Object(l.a)(o,e);var t=Object(c.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).type="point-cloud-class-breaks",r.field=null,r.legendOptions=null,r.fieldTransformType=null,r.colorClassBreakInfos=null,r}return Object(n.a)(o,[{key:"clone",value:function(){return new m(Object(a.a)(Object(a.a)({},this.cloneProperties()),{},{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(b.a)(this.colorClassBreakInfos),legendOptions:Object(b.a)(this.legendOptions)}))}}]),o}(O.a);Object(s.a)([Object(j.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],T.prototype,"type",void 0),Object(s.a)([Object(u.b)({json:{write:!0},type:String})],T.prototype,"field",void 0),Object(s.a)([Object(u.b)({type:y.a,json:{write:!0}})],T.prototype,"legendOptions",void 0),Object(s.a)([Object(u.b)({type:O.a.fieldTransformTypeKebabDict.apiValues,json:{type:O.a.fieldTransformTypeKebabDict.jsonValues,read:O.a.fieldTransformTypeKebabDict.read,write:O.a.fieldTransformTypeKebabDict.write}})],T.prototype,"fieldTransformType",void 0),Object(s.a)([Object(u.b)({type:[w],json:{write:!0}})],T.prototype,"colorClassBreakInfos",void 0);var g=T=m=Object(s.a)([Object(d.a)("esri.renderers.PointCloudClassBreaksRenderer")],T);t.a=g},1135:function(e,t,o){"use strict";var r,a=o(9),i=o(2),n=o(3),l=o(5),c=o(6),s=o(0),b=(o(13),o(24)),p=(o(14),o(15)),u=o(1),j=o(42),d=o(8),O=(o(11),o(19),o(20),o(1015)),y=o(874),f=o(28),v=o(52),h=r=function(e){Object(l.a)(o,e);var t=Object(c.a)(o);function o(){var e;return Object(i.a)(this,o),(e=t.apply(this,arguments)).label=null,e.value=0,e.color=null,e}return Object(n.a)(o,[{key:"clone",value:function(){return new r({label:this.label,value:this.value,color:Object(b.a)(this.color)})}}]),o}(f.a);Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(s.a)([Object(u.b)({type:Number,nonNullable:!0,json:{write:!0}})],h.prototype,"value",void 0),Object(s.a)([Object(u.b)({type:v.a,json:{type:[p.a],write:!0}})],h.prototype,"color",void 0);var m,w=h=r=Object(s.a)([Object(d.a)("esri.renderers.support.pointCloud.StopInfo")],h),T=m=function(e){Object(l.a)(o,e);var t=Object(c.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).type="point-cloud-stretch",r.field=null,r.legendOptions=null,r.fieldTransformType=null,r.stops=null,r}return Object(n.a)(o,[{key:"clone",value:function(){return new m(Object(a.a)(Object(a.a)({},this.cloneProperties()),{},{field:Object(b.a)(this.field),fieldTransformType:Object(b.a)(this.fieldTransformType),stops:Object(b.a)(this.stops),legendOptions:Object(b.a)(this.legendOptions)}))}}]),o}(O.a);Object(s.a)([Object(j.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],T.prototype,"type",void 0),Object(s.a)([Object(u.b)({json:{write:!0},type:String})],T.prototype,"field",void 0),Object(s.a)([Object(u.b)({type:y.a,json:{write:!0}})],T.prototype,"legendOptions",void 0),Object(s.a)([Object(u.b)({type:O.a.fieldTransformTypeKebabDict.apiValues,json:{type:O.a.fieldTransformTypeKebabDict.jsonValues,read:O.a.fieldTransformTypeKebabDict.read,write:O.a.fieldTransformTypeKebabDict.write}})],T.prototype,"fieldTransformType",void 0),Object(s.a)([Object(u.b)({type:[w],json:{write:!0}})],T.prototype,"stops",void 0);var g=T=m=Object(s.a)([Object(d.a)("esri.renderers.PointCloudStretchRenderer")],T);t.a=g},1136:function(e,t,o){"use strict";var r,a=o(9),i=o(2),n=o(3),l=o(5),c=o(6),s=o(0),b=(o(13),o(24)),p=(o(14),o(15)),u=o(1),j=o(42),d=o(8),O=(o(11),o(19),o(20),o(1015)),y=o(874),f=o(28),v=o(52),h=r=function(e){Object(l.a)(o,e);var t=Object(c.a)(o);function o(){var e;return Object(i.a)(this,o),(e=t.apply(this,arguments)).description=null,e.label=null,e.values=null,e.color=null,e}return Object(n.a)(o,[{key:"clone",value:function(){return new r({description:this.description,label:this.label,values:Object(b.a)(this.values),color:Object(b.a)(this.color)})}}]),o}(f.a);Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],h.prototype,"description",void 0),Object(s.a)([Object(u.b)({type:String,json:{write:!0}})],h.prototype,"label",void 0),Object(s.a)([Object(u.b)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),Object(s.a)([Object(u.b)({type:v.a,json:{type:[p.a],write:!0}})],h.prototype,"color",void 0);var m,w=h=r=Object(s.a)([Object(d.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h),T=m=function(e){Object(l.a)(o,e);var t=Object(c.a)(o);function o(e){var r;return Object(i.a)(this,o),(r=t.call(this,e)).type="point-cloud-unique-value",r.field=null,r.fieldTransformType=null,r.colorUniqueValueInfos=null,r.legendOptions=null,r}return Object(n.a)(o,[{key:"clone",value:function(){return new m(Object(a.a)(Object(a.a)({},this.cloneProperties()),{},{field:Object(b.a)(this.field),fieldTransformType:Object(b.a)(this.fieldTransformType),colorUniqueValueInfos:Object(b.a)(this.colorUniqueValueInfos),legendOptions:Object(b.a)(this.legendOptions)}))}}]),o}(O.a);Object(s.a)([Object(j.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],T.prototype,"type",void 0),Object(s.a)([Object(u.b)({json:{write:!0},type:String})],T.prototype,"field",void 0),Object(s.a)([Object(u.b)({type:O.a.fieldTransformTypeKebabDict.apiValues,json:{type:O.a.fieldTransformTypeKebabDict.jsonValues,read:O.a.fieldTransformTypeKebabDict.read,write:O.a.fieldTransformTypeKebabDict.write}})],T.prototype,"fieldTransformType",void 0),Object(s.a)([Object(u.b)({type:[w],json:{write:!0}})],T.prototype,"colorUniqueValueInfos",void 0),Object(s.a)([Object(u.b)({type:y.a,json:{write:!0}})],T.prototype,"legendOptions",void 0);var g=T=m=Object(s.a)([Object(d.a)("esri.renderers.PointCloudUniqueValueRenderer")],T);t.a=g},874:function(e,t,o){"use strict";var r,a=o(2),i=o(3),n=o(5),l=o(6),c=o(0),s=(o(13),o(14),o(15),o(1)),b=o(8),p=(o(11),o(19),o(20),o(28)),u=r=function(e){Object(n.a)(o,e);var t=Object(l.a)(o);function o(){var e;return Object(a.a)(this,o),(e=t.apply(this,arguments)).title=null,e}return Object(i.a)(o,[{key:"clone",value:function(){return new r({title:this.title})}}]),o}(p.a);Object(c.a)([Object(s.b)({type:String,json:{write:!0}})],u.prototype,"title",void 0);var j=u=r=Object(c.a)([Object(b.a)("esri.renderers.support.LegendOptions")],u);t.a=j}}]);
//# sourceMappingURL=30.30873107.chunk.js.map