(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[214],{1185:function(t,e,a){"use strict";a.r(e);var i=a(10),n=a.n(i),r=a(21),s=a(2),u=a(3),c=a(5),o=a(6),h=a(0),p=(a(13),a(14)),d=(a(15),a(1)),y=a(8),f=(a(11),a(19),a(20),a(16)),b=a(316),l=a(829),v=a(955),m=a(830),g=a(1012),O=p.a.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D"),j=function(t){Object(c.a)(a,t);var e=Object(o.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"hitTest",value:function(){return null}},{key:"update",value:function(t){this.strategy.update(t).catch((function(t){Object(f.n)(t)||O.error(t)})),this.notifyChange("updating")}},{key:"attach",value:function(){this._bitmapContainer=new v.a,this.container.addChild(this._bitmapContainer),this.strategy=new g.a({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}},{key:"detach",value:function(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"fetchBitmapData",value:function(t,e,a){return this.layer.fetchImage(t,e,a,{timestamp:this.refreshTimestamp})}},{key:"doRefresh",value:function(){var t=Object(r.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.requestUpdate();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}}]),a}(Object(b.a)(Object(m.a)(l.a)));Object(h.a)([Object(d.b)()],j.prototype,"strategy",void 0),Object(h.a)([Object(d.b)({dependsOn:["strategy.updating"]})],j.prototype,"updating",void 0);var k=j=Object(h.a)([Object(y.a)("esri.views.2d.layers.BaseDynamicLayerView2D")],j);e.default=k}}]);
//# sourceMappingURL=214.f7b27730.chunk.js.map