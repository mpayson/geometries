(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[3],{1020:function(e,t,a){"use strict";var i,r=a(2),n=a(3),s=a(5),o=a(6),l=a(0),c=(a(13),a(14),a(15),a(1)),u=a(8),p=a(47),b=a(23),y=(a(11),a(19),a(20),a(878)),h=i=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).axis=null,i.type="rotation",i.rotationType="geographic",i.valueExpressionTitle=null,i}return Object(n.a)(a,[{key:"cache",get:function(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}},{key:"writeValueExpressionTitleWebScene",value:function(e,t,a,i){if(i&&i.messages){var r="visualVariables[".concat(this.index,"]");i.messages.push(new b.a("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:r+".valueExpressionTitle",context:i}))}}},{key:"clone",value:function(){return new i({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})}}]),a}(y.a);Object(l.a)([Object(c.b)({readOnly:!0,dependsOn:["valueExpression"]})],h.prototype,"cache",null),Object(l.a)([Object(c.b)({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],h.prototype,"axis",void 0),Object(l.a)([Object(c.b)({type:["rotation"],json:{type:["rotationInfo"]}})],h.prototype,"type",void 0),Object(l.a)([Object(c.b)({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],h.prototype,"rotationType",void 0),Object(l.a)([Object(c.b)({type:String,json:{write:!0}})],h.prototype,"valueExpressionTitle",void 0),Object(l.a)([Object(p.a)("web-scene","valueExpressionTitle")],h.prototype,"writeValueExpressionTitleWebScene",null);var j=h=i=Object(l.a)([Object(u.a)("esri.renderers.visualVariables.RotationVariable")],h);t.a=j},1078:function(e,t,a){"use strict";var i=a(2),r=a(5),n=a(6),s=a(0),o=(a(13),a(14),a(15),a(1)),l=a(8),c=(a(11),a(19),a(20),function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).type=null,r}return a}(a(28).a));Object(s.a)([Object(o.b)({readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0);var u=c=Object(s.a)([Object(l.a)("esri.tasks.support.ColorRamp")],c);t.a=u},1079:function(e,t,a){"use strict";var i,r=a(2),n=a(3),s=a(5),o=a(6),l=a(0),c=(a(13),a(24)),u=(a(14),a(15),a(1)),p=a(8),b=(a(11),a(19),a(20),a(1078)),y=a(1113),h=i=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).colorRamps=null,i.type="multipart",i}return Object(n.a)(a,[{key:"clone",value:function(){return new i({colorRamps:Object(c.a)(this.colorRamps)})}}]),a}(b.a);Object(l.a)([Object(u.b)({type:[y.a],json:{write:!0}})],h.prototype,"colorRamps",void 0),Object(l.a)([Object(u.b)({type:["multipart"]})],h.prototype,"type",void 0);var j=h=i=Object(l.a)([Object(p.a)("esri.tasks.support.MultipartColorRamp")],h);t.a=j},1113:function(e,t,a){"use strict";var i,r=a(2),n=a(3),s=a(5),o=a(6),l=a(0),c=(a(13),a(24)),u=(a(14),a(15)),p=a(1),b=a(42),y=a(8),h=(a(11),a(19),a(20),a(52)),j=a(1078),v=i=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).algorithm=null,i.fromColor=null,i.toColor=null,i.type="algorithmic",i}return Object(n.a)(a,[{key:"clone",value:function(){return new i({fromColor:Object(c.a)(this.fromColor),toColor:Object(c.a)(this.toColor),algorithm:this.algorithm})}}]),a}(j.a);Object(l.a)([Object(b.a)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],v.prototype,"algorithm",void 0),Object(l.a)([Object(p.b)({type:h.a,json:{type:[u.a],write:!0}})],v.prototype,"fromColor",void 0),Object(l.a)([Object(p.b)({type:h.a,json:{type:[u.a],write:!0}})],v.prototype,"toColor",void 0),Object(l.a)([Object(p.b)({type:["algorithmic"]})],v.prototype,"type",void 0);var d=v=i=Object(l.a)([Object(y.a)("esri.tasks.support.AlgorithmicColorRamp")],v);t.a=d},813:function(e,t,a){"use strict";var i,r=a(10),n=a.n(r),s=a(21),o=a(2),l=a(3),c=a(5),u=a(6),p=a(0),b=(a(13),a(14),a(15)),y=a(1),h=a(50),j=a(8),v=(a(11),a(19),a(20),a(28)),d=a(24),O=a(62),f=i=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).minValue=0,i.maxValue=0,i}return Object(l.a)(a,[{key:"clone",value:function(){return new i({minValue:this.minValue,maxValue:this.maxValue})}}]),a}(v.a);Object(p.a)([Object(y.b)({type:Number,json:{write:!0}})],f.prototype,"minValue",void 0),Object(p.a)([Object(y.b)({type:Number,json:{write:!0}})],f.prototype,"maxValue",void 0);var m,g=f=i=Object(p.a)([Object(j.a)("esri.renderer.support.AuthoringInfoClassBreakInfo")],f),w=m=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).field="",i.normalizationField="",i.label="",i.classBreakInfos=[],i}return Object(l.a)(a,[{key:"clone",value:function(){return new m({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:Object(d.a)(this.classBreakInfos)})}}]),a}(v.a);Object(p.a)([Object(y.b)({type:String,json:{write:!0}})],w.prototype,"field",void 0),Object(p.a)([Object(y.b)({type:String,json:{write:!0}})],w.prototype,"normalizationField",void 0),Object(p.a)([Object(y.b)({type:String,json:{write:!0}})],w.prototype,"label",void 0),Object(p.a)([Object(y.b)({type:[g],json:{write:!0}})],w.prototype,"classBreakInfos",void 0);var V,k=w=m=Object(p.a)([Object(j.a)("esri.renderers.support.AuthoringInfoFieldInfo")],w),x=a(41),S=a(72),T=new h.a({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),_=new h.a({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),z={key:function(e){return"number"==typeof e?"number":"string"},typeMap:{number:Number,string:String},base:null},F=["high-to-low","above-and-below","centered-on","extremes"],E=Object(x.a)(new Set(["high-to-low","above-and-below","centered-on","extremes","90-10","above","below","high-to-low","above-and-below","90-10","above","below"])),I=["seconds","minutes","hours","days","months","years"],C=V=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).endTime=null,i.field=null,i.maxSliderValue=null,i.minSliderValue=null,i.startTime=null,i.type=null,i.units=null,i}return Object(l.a)(a,[{key:"castEndTime",value:function(e){return"string"==typeof e||"number"==typeof e?e:null}},{key:"castStartTime",value:function(e){return"string"==typeof e||"number"==typeof e?e:null}},{key:"style",get:function(){return"color"===this.type?this._get("style"):null},set:function(e){this._set("style",e)}},{key:"theme",get:function(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null},set:function(e){this._set("theme",e)}},{key:"clone",value:function(){return new V({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}}]),a}(v.a);Object(p.a)([Object(y.b)({types:z,json:{write:!0}})],C.prototype,"endTime",void 0),Object(p.a)([Object(S.a)("endTime")],C.prototype,"castEndTime",null),Object(p.a)([Object(y.b)({type:String,json:{write:!0}})],C.prototype,"field",void 0),Object(p.a)([Object(y.b)({type:Number,json:{write:!0}})],C.prototype,"maxSliderValue",void 0),Object(p.a)([Object(y.b)({type:Number,json:{write:!0}})],C.prototype,"minSliderValue",void 0),Object(p.a)([Object(y.b)({types:z,json:{write:!0}})],C.prototype,"startTime",void 0),Object(p.a)([Object(S.a)("startTime")],C.prototype,"castStartTime",null),Object(p.a)([Object(y.b)({type:T.apiValues,value:null,dependsOn:["type"],json:{type:T.jsonValues,read:T.read,write:T.write}})],C.prototype,"style",null),Object(p.a)([Object(y.b)({type:E,value:null,dependsOn:["type"],json:{type:E,origins:{"web-scene":{type:F,write:{writer:function(e,t){F.indexOf(e)>-1&&(t.theme=e)}}}},write:!0}})],C.prototype,"theme",null),Object(p.a)([Object(y.b)({type:_.apiValues,json:{type:_.jsonValues,read:_.read,write:_.write}})],C.prototype,"type",void 0),Object(p.a)([Object(y.b)({type:I,json:{type:I,write:!0}})],C.prototype,"units",void 0);var R,A=C=V=Object(p.a)([Object(j.a)("esri.renderers.support.AuthoringInfoVisualVariable")],C),N=a(956),D=new h.a({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),M=new h.a({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),q=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"],H=R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).colorRamp=null,i.lengthUnit=null,i.maxSliderValue=null,i.minSliderValue=null,i.visualVariables=null,i}return Object(l.a)(a,[{key:"classificationMethod",get:function(){var e=this._get("classificationMethod"),t=this.type;return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e},set:function(e){this._set("classificationMethod",e)}},{key:"readColorRamp",value:function(e){if(e)return Object(N.a)(e)}},{key:"fields",get:function(){return this.type&&"predominance"!==this.type?null:this._get("fields")},set:function(e){this._set("fields",e)}},{key:"field1",get:function(){return this.type&&"relationship"!==this.type?null:this._get("field1")},set:function(e){this._set("field1",e)}},{key:"field2",get:function(){return this.type&&"relationship"!==this.type?null:this._get("field2")},set:function(e){this._set("field2",e)}},{key:"focus",get:function(){return this.type&&"relationship"!==this.type?null:this._get("focus")},set:function(e){this._set("focus",e)}},{key:"numClasses",get:function(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")},set:function(e){this._set("numClasses",e)}},{key:"statistics",get:function(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null},set:function(e){this._set("statistics",e)}},{key:"standardDeviationInterval",get:function(){var e=this.type;return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")},set:function(e){this._set("standardDeviationInterval",e)}},{key:"type",get:function(){return this._get("type")},set:function(e){var t=e;"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}},{key:"univariateSymbolStyle",get:function(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("univariateSymbolStyle"):null},set:function(e){this._set("univariateSymbolStyle",e)}},{key:"univariateTheme",get:function(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null},set:function(e){this._set("univariateTheme",e)}},{key:"clone",value:function(){return new R({classificationMethod:this.classificationMethod,colorRamp:Object(d.a)(this.colorRamp),fields:this.fields&&this.fields.slice(0),field1:Object(d.a)(this.field1),field2:Object(d.a)(this.field2),focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map((function(e){return e.clone()})),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme})}}]),a}(v.a);Object(p.a)([Object(y.b)({type:D.apiValues,value:null,dependsOn:["type"],json:{type:D.jsonValues,read:D.read,write:D.write,origins:{"web-document":{default:"manual",type:D.jsonValues,read:D.read,write:D.write}}}})],H.prototype,"classificationMethod",null),Object(p.a)([Object(y.b)({types:N.b,json:{write:!0}})],H.prototype,"colorRamp",void 0),Object(p.a)([Object(O.a)("colorRamp")],H.prototype,"readColorRamp",null),Object(p.a)([Object(y.b)({type:[String],value:null,dependsOn:["type"],json:{write:!0}})],H.prototype,"fields",null),Object(p.a)([Object(y.b)({type:k,value:null,dependsOn:["type"],json:{write:!0}})],H.prototype,"field1",null),Object(p.a)([Object(y.b)({type:k,value:null,dependsOn:["type"],json:{write:!0}})],H.prototype,"field2",null),Object(p.a)([Object(y.b)({type:["HH","HL","LH","LL"],value:null,dependsOn:["type"],json:{write:!0}})],H.prototype,"focus",null),Object(p.a)([Object(y.b)({type:Number,value:null,dependsOn:["type"],json:{type:b.a,write:!0}})],H.prototype,"numClasses",null),Object(p.a)([Object(y.b)({type:q,json:{type:q,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],H.prototype,"lengthUnit",void 0),Object(p.a)([Object(y.b)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],H.prototype,"maxSliderValue",void 0),Object(p.a)([Object(y.b)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],H.prototype,"minSliderValue",void 0),Object(p.a)([Object(y.b)({type:Object,value:null,dependsOn:["type","univariateTheme"],json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],H.prototype,"statistics",null),Object(p.a)([Object(y.b)({type:[.25,.33,.5,1],value:null,dependsOn:["classificationMethod","type"],json:{type:[.25,.33,.5,1],write:!0}})],H.prototype,"standardDeviationInterval",null),Object(p.a)([Object(y.b)({type:M.apiValues,value:null,json:{type:M.jsonValues,read:M.read,write:M.write}})],H.prototype,"type",null),Object(p.a)([Object(y.b)({type:[A],json:{write:!0}})],H.prototype,"visualVariables",void 0),Object(p.a)([Object(y.b)({type:["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"],value:null,dependsOn:["type","univariateTheme"],json:{write:!0,origins:{"web-scene":{write:!1}}}})],H.prototype,"univariateSymbolStyle",null),Object(p.a)([Object(y.b)({type:["high-to-low","above-and-below","above","below","90-10"],value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],H.prototype,"univariateTheme",null);var L=H=R=Object(p.a)([Object(j.a)("esri.renderers.support.AuthoringInfo")],H),B=new h.a({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary"},{ignoreUnknown:!0}),J=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).authoringInfo=null,i.type=null,i}return Object(l.a)(a,[{key:"getRequiredFields",value:function(){var e=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.collectRequiredFields){e.next=2;break}return e.abrupt("return",[]);case 2:return a=new Set,e.next=5,this.collectRequiredFields(a,t);case 5:return e.abrupt("return",Array.from(a).sort());case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSymbol",value:function(e,t){}},{key:"getSymbolAsync",value:function(){var e=Object(s.a)(n.a.mark((function e(t,a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getSymbols",value:function(){return[]}},{key:"getAttributeHash",value:function(){return JSON.stringify(this)}},{key:"getMeshHash",value:function(){return JSON.stringify(this)}}]),a}(v.a);Object(p.a)([Object(y.b)({type:L,json:{write:!0}})],J.prototype,"authoringInfo",void 0),Object(p.a)([Object(y.b)({type:B.apiValues,readOnly:!0,json:{type:B.jsonValues,read:!1,write:{writer:B.write,ignoreOrigin:!0}}})],J.prototype,"type",void 0);var U=J=Object(p.a)([Object(j.a)("esri.renderers.Renderer")],J);t.a=U},909:function(e,t,a){"use strict";a.d(t,"a",(function(){return G}));var i,r=a(10),n=a.n(r),s=a(21),o=a(12),l=a(2),c=a(3),u=a(5),p=a(6),b=a(0),y=(a(13),a(14)),h=a(15),j=a(1),v=a(62),d=a(8),O=a(47),f=(a(11),a(19),a(20),a(157)),m=a(878),g=a(60),w=a(55),V=a(28),k=a(52),x=i=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).color=null,i.label=null,i.value=null,i}return Object(c.a)(a,[{key:"writeValue",value:function(e,t,a){t[a]=null==e?0:e}},{key:"clone",value:function(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}}]),a}(V.a);Object(b.a)([Object(j.b)({type:k.a,json:{type:[h.a],write:!0}})],x.prototype,"color",void 0),Object(b.a)([Object(j.b)({type:String,json:{write:!0}})],x.prototype,"label",void 0),Object(b.a)([Object(j.b)({type:Number,json:{write:{allowNull:!0}}})],x.prototype,"value",void 0),Object(b.a)([Object(O.a)("value")],x.prototype,"writeValue",null);var S,T=x=i=Object(b.a)([Object(d.a)("esri.renderers.visualVariables.support.ColorStop")],x),_=S=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).type="color",i.normalizationField=null,i}return Object(c.a)(a,[{key:"cache",get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}},{key:"stops",set:function(e){e&&Array.isArray(e)&&(e=e.filter((function(e){return!!e}))).sort((function(e,t){return e.value-t.value})),this._set("stops",e)}},{key:"clone",value:function(){return new S({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((function(e){return e.clone()})),legendOptions:this.legendOptions&&this.legendOptions.clone()})}},{key:"getAttributeHash",value:function(){return"".concat(Object(g.a)(Object(w.a)(a.prototype),"getAttributeHash",this).call(this),"-").concat(this.normalizationField)}},{key:"_interpolateData",value:function(){return this.stops&&this.stops.map((function(e){return e.value||0}))}}]),a}(m.a);Object(b.a)([Object(j.b)({readOnly:!0,dependsOn:["valueExpression","stops"]})],_.prototype,"cache",null),Object(b.a)([Object(j.b)({type:["color"],json:{type:["colorInfo"]}})],_.prototype,"type",void 0),Object(b.a)([Object(j.b)({type:String,json:{write:!0}})],_.prototype,"normalizationField",void 0),Object(b.a)([Object(j.b)({type:[T],json:{write:!0}})],_.prototype,"stops",null);var z,F=_=S=Object(b.a)([Object(d.a)("esri.renderers.visualVariables.ColorVariable")],_),E=a(246),I=z=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).label=null,i.opacity=null,i.value=null,i}return Object(c.a)(a,[{key:"readOpacity",value:function(e,t){return Object(E.b)(t.transparency)}},{key:"writeOpacity",value:function(e,t,a){t[a]=Object(E.a)(e)}},{key:"clone",value:function(){return new z({label:this.label,opacity:this.opacity,value:this.value})}}]),a}(V.a);Object(b.a)([Object(j.b)({type:String,json:{write:!0}})],I.prototype,"label",void 0),Object(b.a)([Object(j.b)({type:Number,json:{type:h.a,write:{target:"transparency"}}})],I.prototype,"opacity",void 0),Object(b.a)([Object(v.a)("opacity",["transparency"])],I.prototype,"readOpacity",null),Object(b.a)([Object(O.a)("opacity")],I.prototype,"writeOpacity",null),Object(b.a)([Object(j.b)({type:Number,json:{write:!0}})],I.prototype,"value",void 0);var C,R=I=z=Object(b.a)([Object(d.a)("esri.renderers.visualVariables.support.OpacityStop")],I),A=C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).type="opacity",i.normalizationField=null,i}return Object(c.a)(a,[{key:"cache",get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}},{key:"stops",set:function(e){e&&Array.isArray(e)&&(e=e.filter((function(e){return!!e}))).sort((function(e,t){return e.value-t.value})),this._set("stops",e)}},{key:"clone",value:function(){return new C({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((function(e){return e.clone()})),legendOptions:this.legendOptions&&this.legendOptions.clone()})}},{key:"getAttributeHash",value:function(){return"".concat(Object(g.a)(Object(w.a)(a.prototype),"getAttributeHash",this).call(this),"-").concat(this.normalizationField)}},{key:"_interpolateData",value:function(){return this.stops&&this.stops.map((function(e){return e.value||0}))}}]),a}(m.a);Object(b.a)([Object(j.b)({readOnly:!0,dependsOn:["valueExpression","stops"]})],A.prototype,"cache",null),Object(b.a)([Object(j.b)({type:["opacity"],json:{type:["transparencyInfo"]}})],A.prototype,"type",void 0),Object(b.a)([Object(j.b)({type:String,json:{write:!0}})],A.prototype,"normalizationField",void 0),Object(b.a)([Object(j.b)({type:[R],json:{write:!0}})],A.prototype,"stops",null);var N=A=C=Object(b.a)([Object(d.a)("esri.renderers.visualVariables.OpacityVariable")],A),D=a(1020),M=a(885),q=a(50),H=a(175),L=a(33),B=y.a.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),J={color:F,size:M.a,opacity:N,rotation:D.a},U=new q.a({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),W=/^\[([^\]]+)\]$/i,P=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.apply(this,arguments)).colorVariables=null,e.opacityVariables=null,e.rotationVariables=null,e.sizeVariables=null,e}return Object(c.a)(a,[{key:"visualVariables",set:function(e){if(this._resetVariables(),(e=e&&e.filter((function(e){return!!e})))&&e.length){var t,a=Object(o.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;switch(i.type){case"color":this.colorVariables.push(i);break;case"opacity":this.opacityVariables.push(i);break;case"rotation":this.rotationVariables.push(i);break;case"size":this.sizeVariables.push(i)}}}catch(n){a.e(n)}finally{a.f()}this.sizeVariables.length&&this.sizeVariables.some((function(e){return!!e.target}))&&e.sort((function(e,t){return e.target===t.target?0:e.target?1:-1}));for(var r=0;r<e.length;r++)e[r].index=r;this._set("visualVariables",e)}else this._set("visualVariables",e)}},{key:"readVariables",value:function(e,t,a){var i=t.rotationExpression,r=t.rotationType,n=i&&i.match(W),s=n&&n[1];if(s&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:r,field:s})),e)return e.map((function(e){var t=U.read(e.type),i=J[t];i||(B.warn("Unknown variable type: ".concat(t)),a&&a.messages&&a.messages.push(new H.a("visual-variable:unsupported","visualVariable of type '".concat(t,"' is not supported"),{definition:e,context:a})));var r=new i;return r.read(e,a),r}))}},{key:"writeVariables",value:function(e,t){var a,i=[],r=Object(o.a)(e);try{for(r.s();!(a=r.n()).done;){var n=a.value.toJSON(t);n&&i.push(n)}}catch(s){r.e(s)}finally{r.f()}return i}},{key:"_resetVariables",value:function(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}}]),a}(L.a);Object(b.a)([Object(j.b)()],P.prototype,"visualVariables",null);var Q=P=Object(b.a)([Object(d.a)("esri.renderers.visualVariables.VisualVariableFactory")],P),$={base:m.a,key:"type",typeMap:{opacity:N,color:F,rotation:D.a,size:M.a}},G=function(e){var t=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.apply(this,arguments))._vvFactory=new Q,e}return Object(c.a)(a,[{key:"visualVariables",set:function(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)}},{key:"readVisualVariables",value:function(e,t,a){return this._vvFactory.readVariables(e,t,a)}},{key:"writeVisualVariables",value:function(e,t,a,i){t[a]=this._vvFactory.writeVariables(e,i)}},{key:"arcadeRequiredForVisualVariables",get:function(){if(!this.visualVariables)return!1;var e,t=Object(o.a)(this.visualVariables);try{for(t.s();!(e=t.n()).done;){if(e.value.arcadeRequired)return!0}}catch(a){t.e(a)}finally{t.f()}return!1}},{key:"hasVisualVariables",value:function(e,t){return e?!!this.getVisualVariablesForType(e,t):!!(this.getVisualVariablesForType("size",t)||this.getVisualVariablesForType("color",t)||this.getVisualVariablesForType("opacity",t)||this.getVisualVariablesForType("rotation",t))}},{key:"getVisualVariablesForType",value:function(e,t){var a=this.visualVariables;if(a){var i=a.filter((function(a){return a.type===e&&("string"==typeof t?a.target===t:!1!==t||!a.target)}));return i&&0===i.length?void 0:i}}},{key:"collectVVRequiredFields",value:function(){var e=Object(s.a)(n.a.mark((function e(t,a){var i,r,s,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[],this.visualVariables&&(i=i.concat(this.visualVariables)),r=Object(o.a)(i),e.prev=3,r.s();case 5:if((s=r.n()).done){e.next=17;break}if(l=s.value,e.t0=l,!e.t0){e.next=15;break}if(l.field&&Object(f.d)(t,a,l.field),l.normalizationField&&Object(f.d)(t,a,l.normalizationField),e.t1=l.valueExpression,!e.t1){e.next=15;break}return e.next=15,Object(f.a)(t,a,l.valueExpression);case 15:e.next=5;break;case 17:e.next=22;break;case 19:e.prev=19,e.t2=e.catch(3),r.e(e.t2);case 22:return e.prev=22,r.f(),e.finish(22);case 25:case"end":return e.stop()}}),e,this,[[3,19,22,25]])})));return function(t,a){return e.apply(this,arguments)}}()}]),a}(e);return Object(b.a)([Object(j.b)({types:[$],value:null,json:{write:!0}})],t.prototype,"visualVariables",null),Object(b.a)([Object(v.a)("visualVariables",["visualVariables","rotationType","rotationExpression"])],t.prototype,"readVisualVariables",null),Object(b.a)([Object(O.a)("visualVariables")],t.prototype,"writeVisualVariables",null),t=Object(b.a)([Object(d.a)("esri.renderers.mixins.VisualVariablesMixin")],t)}},956:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var i=a(1078),r=a(1113),n=a(1079),s={key:"type",base:i.a,typeMap:{algorithmic:r.a,multipart:n.a}};function o(e){return e&&e.type?"algorithmic"===e.type?r.a.fromJSON(e):"multipart"===e.type?n.a.fromJSON(e):null:null}}}]);
//# sourceMappingURL=3.c82645c7.chunk.js.map