(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[230],{1303:function(t,e,a){"use strict";a.r(e);var i=a(32),r=a(12),s=a(3),n=a(5),c=a(6),h=a(2),o=a(0),l=(a(13),a(4)),p=(a(14),a(15),a(1)),u=a(8),v=(a(11),a(19),a(20),a(37)),f=a(103),y=a(230),d=a(82),b=a(90),g=(a(77),a(76)),_=a(110),G=a(150),m=a(118),k=a(75),O=a(56),j=a(30),w=a(107),S=a(399),x=a(368),R=a(143);function M(t){var e,a=0,i=0,r=t.length,s=t[i];for(i=0;i<r-1;i++)a+=((e=t[i+1])[0]-s[0])*(e[1]+s[1]),s=e;return a>=0}function I(t,e,a,i){var s,n=[],c=Object(r.a)(t);try{for(c.s();!(s=c.n()).done;){var h=s.value,o=h.slice(0);n.push(o);var l=e*(h[0]-i.x)-a*(h[1]-i.y)+i.x,p=a*(h[0]-i.x)+e*(h[1]-i.y)+i.y;o[0]=l,o[1]=p}}catch(u){c.e(u)}finally{c.f()}return n}var C=function(t,e,a){var i,s,n=t.spatialReference,c=e*Math.PI/180,h=Math.cos(c),o=Math.sin(c);if("xmin"in t&&(a=null!=(i=a)?i:t.center,t=new d.a({spatialReference:n,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){var l;a=null!=(l=a)?l:t.extent.center;var p,u=[],f=Object(r.a)(t.paths);try{for(f.s();!(p=f.n()).done;){var y=p.value;u.push(I(y,h,o,a))}}catch(x){f.e(x)}finally{f.f()}return new b.a({spatialReference:n,paths:u})}if("rings"in t){var g;a=null!=(g=a)?g:t.extent.center;var _,G=[],m=Object(r.a)(t.rings);try{for(m.s();!(_=m.n()).done;){var k=_.value,O=M(k),j=I(k,h,o,a);M(j)!==O&&j.reverse(),G.push(j)}}catch(x){m.e(x)}finally{m.f()}return new d.a({spatialReference:n,rings:G})}if("x"in t){var w;a=null!=(w=a)?w:t;var S=new v.a({x:h*(t.x-a.x)-o*(t.y-a.y)+a.x,y:o*(t.x-a.x)+h*(t.y-a.y)+a.y,spatialReference:n});return null!=t.z&&(S.z=t.z),null!=t.m&&(S.m=t.m),S}return"points"in t?(a=null!=(s=a)?s:t.extent.center,new R.a({points:I(t.points,h,o,a),spatialReference:n})):null},E=a(1105),z=a(1117),L=function t(e,a,i,r){Object(h.a)(this,t),this.graphics=e,this.mover=a,this.dx=i,this.dy=r,this.type="move-start"},B=function t(e,a,i,r){Object(h.a)(this,t),this.graphics=e,this.mover=a,this.dx=i,this.dy=r,this.type="move"},Y=function t(e,a,i,r){Object(h.a)(this,t),this.graphics=e,this.mover=a,this.dx=i,this.dy=r,this.type="move-stop"},N=function t(e,a,i){Object(h.a)(this,t),this.graphics=e,this.mover=a,this.angle=i,this.type="rotate-start"},A=function t(e,a,i){Object(h.a)(this,t),this.graphics=e,this.mover=a,this.angle=i,this.type="rotate"},X=function t(e,a,i){Object(h.a)(this,t),this.graphics=e,this.mover=a,this.angle=i,this.type="rotate-stop"},P=function t(e,a,i,r){Object(h.a)(this,t),this.graphics=e,this.mover=a,this.xScale=i,this.yScale=r,this.type="scale-start"},T=function t(e,a,i,r){Object(h.a)(this,t),this.graphics=e,this.mover=a,this.xScale=i,this.yScale=r,this.type="scale"},D=function t(e,a,i,r){Object(h.a)(this,t),this.graphics=e,this.mover=a,this.xScale=i,this.yScale=r,this.type="scale-stop"},V=z.a.transformGraphics,H={centerIndicator:new m.a({style:"cross",size:V.center.size,color:V.center.color}),fill:{default:new G.a({color:V.fill.color,outline:{color:V.fill.outlineColor,join:"round",width:1}}),active:new G.a({color:V.fill.stagedColor,outline:{color:V.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new m.a({style:"square",size:V.vertex.size,color:V.vertex.color,outline:{color:V.vertex.outlineColor,width:1}}),hover:new m.a({style:"square",size:V.vertex.hoverSize,color:V.vertex.hoverColor,outline:{color:V.vertex.hoverOutlineColor,width:1}})},rotator:{default:new m.a({style:"circle",size:V.vertex.size,color:V.vertex.color,outline:{color:V.vertex.outlineColor,width:1}}),hover:new m.a({style:"circle",size:V.vertex.hoverSize,color:V.vertex.hoverColor,outline:{color:V.vertex.hoverOutlineColor,width:1}})},rotatorLine:new _.a({color:V.line.color,width:1})},U=function(t){Object(n.a)(a,t);var e=Object(c.a)(a);function a(t){var s;return Object(h.a)(this,a),(s=e.call(this,t))._activeHandleGraphic=null,s._graphicAttributes={esriSketchTool:"box"},s._handles=new O.a,s._mover=null,s._rotateGraphicOffset=20,s._angleOfRotation=0,s._rotateLineGraphic=null,s._startInfo=null,s._totalDx=0,s._totalDy=0,s._xScale=1,s._yScale=1,s.type="box",s.callbacks={onMoveStart:function(){},onMove:function(){},onMoveStop:function(){},onScaleStart:function(){},onScale:function(){},onScaleStop:function(){},onRotateStart:function(){},onRotate:function(){},onRotateStop:function(){},onGraphicClick:function(){}},s.centerGraphic=null,s.backgroundGraphic=null,s.enableMovement=!0,s.enableRotation=!0,s.enableScaling=!0,s.graphics=[],s.handleGraphics=[],s.layer=null,s.preserveAspectRatio=!1,s.rotateGraphic=null,s.showCenterGraphic=!0,s.view=null,s._getBounds=function(){var t=Object(w.g)();return function(e,a){e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;var s,n=Object(r.a)(a);try{for(n.s();!(s=n.n()).done;){var c=s.value;if(c){var h=void 0,o=void 0,l=void 0,p=void 0;if("point"===c.type)h=l=c.x,o=p=c.y;else if("multipoint"===c.type){var u=Object(f.b)(c),v=Object(y.d)(t,[u]),d=Object(i.a)(v,4);h=d[0],o=d[1],l=d[2],p=d[3]}else if("extent"===c.type){var b=[c.xmin,c.ymin,c.xmax,c.ymax];h=b[0],o=b[1],l=b[2],p=b[3]}else{var g=Object(f.b)(c),_=Object(y.d)(t,g),G=Object(i.a)(_,4);h=G[0],o=G[1],l=G[2],p=G[3]}e[0]=Math.min(h,e[0]),e[1]=Math.min(o,e[1]),e[2]=Math.max(l,e[2]),e[3]=Math.max(p,e[3])}}}catch(m){n.e(m)}finally{n.f()}return e}}(),s}return Object(s.a)(a,[{key:"initialize",value:function(){var t=this;this._setup(),this._handles.add([Object(j.j)(this,"view.ready",(function(){var e=t.layer,a=t.view;Object(x.a)(a,e)})),Object(j.c)(this,"preserveAspectRatio",(function(){t._activeHandleGraphic&&(t._scaleGraphic(t._activeHandleGraphic),t._updateGraphics())})),Object(j.c)(this,"view.scale",(function(){t._updateRotateGraphic(),t._updateRotateLineGraphic()})),Object(j.c)(this,"graphics",(function(){return t.refresh()})),Object(j.c)(this,"layer",(function(e,a){a&&t._resetGraphics(a),t.refresh()}))])}},{key:"destroy",value:function(){this._reset(),this._handles&&(this._handles.removeAll(),this._handles=null)}},{key:"state",get:function(){var t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}},{key:"symbols",set:function(t){var e=t||{},a=e.centerIndicator,i=void 0===a?H.centerIndicator:a,r=e.fill,s=void 0===r?H.fill:r,n=e.handles,c=void 0===n?H.handles:n,h=e.rotator,o=void 0===h?H.rotator:h,l=e.rotatorLine,p=void 0===l?H.rotatorLine:l;this._set("symbols",{centerIndicator:i,fill:s,handles:c,rotator:o,rotatorLine:p})}},{key:"isUIGraphic",value:function(t){var e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.includes(t)}},{key:"move",value:function(t,e){if(this._mover&&this.graphics.length){var a,i=Object(r.a)(this.graphics);try{for(i.s();!(a=i.n()).done;){var s=a.value,n=s.geometry,c=Object(S.a)(n,t,e,this.view);s.geometry=c}}catch(h){i.e(h)}finally{i.f()}this.refresh(),this._emitMoveStopEvent(t,e,null)}}},{key:"scale",value:function(t,e){if(this._mover&&this.graphics.length){var a,i=Object(r.a)(this.graphics);try{for(i.s();!(a=i.n()).done;){var s=a.value,n=s.geometry,c=Object(S.e)(n,t,e);s.geometry=c}}catch(h){i.e(h)}finally{i.f()}this.refresh(),this._emitScaleStopEvent(t,e,null)}}},{key:"rotate",value:function(t,e){if(this._mover&&this.graphics.length){if(!e){var a=this.handleGraphics[1].geometry.x,i=this.handleGraphics[3].geometry.y;e=new v.a(a,i,this.view.spatialReference)}var s,n=Object(r.a)(this.graphics);try{for(n.s();!(s=n.n()).done;){var c=s.value,h=c.geometry,o=C(h,t,e);c.geometry=o}}catch(l){n.e(l)}finally{n.f()}this.refresh(),this._emitRotateStopEvent(t,null)}}},{key:"refresh",value:function(){this._reset(),this._setup()}},{key:"reset",value:function(){this.graphics=[]}},{key:"_setup",value:function(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())}},{key:"_reset",value:function(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}},{key:"_resetGraphicStateVars",value:function(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}},{key:"_resetGraphics",value:function(t){var e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));var a,i=Object(r.a)(this.handleGraphics);try{for(i.s();!(a=i.n()).done;){a.value.destroy()}}catch(s){i.e(s)}finally{i.f()}this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)}},{key:"_setupMover",value:function(){var t=this,e=[].concat(this.handleGraphics);this.enableMovement&&(e=e.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&e.push(this.rotateGraphic),this.showCenterGraphic&&e.push(this.centerGraphic),this._mover=new E.default({enableMoveAllGraphics:!1,view:this.view,graphics:e,callbacks:{onGraphicClick:function(e){return t._onGraphicClickCallback(e)},onGraphicMoveStart:function(e){return t._onGraphicMoveStartCallback(e)},onGraphicMove:function(e){return t._onGraphicMoveCallback(e)},onGraphicMoveStop:function(e){return t._onGraphicMoveStopCallback(e)},onGraphicPointerOver:function(e){return t._onGraphicPointerOverCallback(e)},onGraphicPointerOut:function(e){return t._onGraphicPointerOutCallback(e)}}})}},{key:"_getStartInfo",value:function(t){var e=this._getBoxBounds(Object(w.g)()),a=Object(i.a)(e,4),r=a[0],s=a[1],n=a[2],c=a[3],h=Math.abs(n-r),o=Math.abs(c-s),l=(n+r)/2,p=(c+s)/2,u=t.geometry;return{width:h,height:o,centerX:l,centerY:p,startX:u.x,startY:u.y,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}},{key:"_getGraphicInfos",value:function(){var t=this;return this.graphics.map((function(e){return t._getGraphicInfo(e)}))}},{key:"_getGraphicInfo",value:function(t){var e=t.geometry,a=this._getBounds(Object(w.g)(),[e]),r=Object(i.a)(a,4),s=r[0],n=r[1],c=r[2],h=r[3];return{width:Math.abs(c-s),height:Math.abs(h-n),centerX:(c+s)/2,centerY:(h+n)/2,geometry:e}}},{key:"_onGraphicClickCallback",value:function(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}},{key:"_onGraphicMoveStartCallback",value:function(t){var e=this._angleOfRotation,a=this._xScale,i=this._yScale,r=this.backgroundGraphic,s=this.handleGraphics,n=this.rotateGraphic,c=this.symbols,h=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),r.symbol=c.fill.active,this._startInfo=this._getStartInfo(h),h===n?(this.view.cursor="grabbing",this._emitRotateStartEvent(e,h)):s.includes(h)?(this._activeHandleGraphic=h,this._emitScaleStartEvent(a,i,h)):this._emitMoveStartEvent(t.dx,t.dy,h)}},{key:"_onGraphicMoveCallback",value:function(t){var e=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(e))this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._angleOfRotation,e);else{var a=t.dx,i=t.dy;this._totalDx+=a,this._totalDy+=i,this._moveGraphic(e,a,i),this._emitMoveEvent(a,i,e)}}},{key:"_onGraphicMoveStopCallback",value:function(t){var e=t.graphic;if(this._startInfo){var a=this._angleOfRotation,i=this._totalDx,r=this._totalDy,s=this._xScale,n=this._yScale,c=this.backgroundGraphic,h=this.handleGraphics,o=this.rotateGraphic,l=this.symbols;this._updateGraphics(),this._showGraphicsAfterUpdate(),c.symbol=l.fill.default,e===o?(this.view.cursor="pointer",this._emitRotateStopEvent(a,e)):h.includes(e)?this._emitScaleStopEvent(s,n,e):this._emitMoveStopEvent(i,r,e),this._resetGraphicStateVars()}else this.refresh()}},{key:"_onGraphicPointerOverCallback",value:function(t){var e=this.backgroundGraphic,a=this.handleGraphics,i=this.graphics,r=this.rotateGraphic,s=this.symbols,n=this.view,c=t.graphic;if(c===r)return r.symbol=s.rotator.hover,void(n.cursor="pointer");if(i.includes(c)||c===e)n.cursor="move";else if(a.includes(c)){t.graphic.symbol=s.handles.hover;var h,o=n.rotation,l=t.index;switch(l<8&&(o>=0&&o<45?l%=8:l=o>=45&&o<90?(l+1)%8:o>=90&&o<135?(l+2)%8:o>=135&&o<180?(l+3)%8:o>=180&&o<225?(l+4)%8:o>=225&&o<270?(l+5)%8:o>=270&&o<315?(l+6)%8:(l+7)%8),l){case 0:h="nwse-resize";break;case 1:h="ns-resize";break;case 2:h="nesw-resize";break;case 3:h="ew-resize";break;case 4:h="nwse-resize";break;case 5:h="ns-resize";break;case 6:h="nesw-resize";break;case 7:h="ew-resize";break;default:h="pointer"}n.cursor=h}else n.cursor="pointer"}},{key:"_onGraphicPointerOutCallback",value:function(t){var e=this.handleGraphics,a=this.rotateGraphic,i=this.symbols,r=this.view;t.graphic===a?a.symbol=i.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=i.handles.default),r.cursor="default"}},{key:"_scaleGraphic",value:function(t){var e=this._startInfo,a=this.handleGraphics,i=this.preserveAspectRatio,s=this.view,n=e.centerX,c=e.centerY,h=e.startX,o=e.startY,l=s.state,p=l.resolution,u=l.transform,f=a.indexOf(t);1!==f&&5!==f||this._updateX(t,n),3!==f&&7!==f||this._updateY(t,c);var y=t.geometry,d=y.x,b=y.y,g=u[0]*d+u[2]*b+u[4],_=u[1]*d+u[3]*b+u[5],G=e.graphicInfos.map((function(t){return t.geometry}));if(i){var m=u[0]*n+u[2]*c+u[4],k=u[1]*n+u[3]*c+u[5],O=u[0]*h+u[2]*o+u[4],j=u[1]*h+u[3]*o+u[5];this._xScale=this._yScale=Object(S.c)(m,k,O,j,g,_);var w,x=Object(r.a)(G);try{for(x.s();!(w=x.n()).done;){var R=w.value,M=G.indexOf(R);this.graphics[M].geometry=Object(S.e)(R,this._xScale,this._yScale,[n,c])}}catch(W){x.e(W)}finally{x.f()}this._updateBackgroundGraphic()}else{var I=e.width,C=e.height,E=d-h,z=o-b;if(1===f||5===f?E=0:3!==f&&7!==f||(z=0),0===E&&0===z)return;var L=I+(h>n?E:-1*E),B=C+(o<c?z:-1*z),Y=n+E/2,N=c+z/2;this._xScale=L/I||1,this._yScale=B/C||1,1===f||5===f?this._xScale=1:3!==f&&7!==f||(this._yScale=1);var A=(Y-n)/p,X=(N-c)/p,P=Object(S.e)(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=Object(S.a)(P,A,X,s,!0);var T,D=this._getGraphicInfo(this.backgroundGraphic),V=D.centerX,H=D.centerY,U=(V-n)/p,F=-1*(H-c)/p,q=Object(r.a)(G);try{for(q.s();!(T=q.n()).done;){var J=T.value,K=G.indexOf(J),Q=Object(S.e)(J,this._xScale,this._yScale,[n,c]);this.graphics[K].geometry=Object(S.a)(Q,U,F,s,!0)}}catch(W){q.e(W)}finally{q.f()}this.centerGraphic.geometry=new v.a(V,H,s.spatialReference)}}},{key:"_rotateGraphic",value:function(t){var e=this._startInfo,a=e.centerX,i=e.centerY,s=e.startX,n=e.startY,c=e.box,h=e.rotate,o=t.geometry,l=o.x,p=o.y,u=new v.a(a,i,this.view.spatialReference);this._angleOfRotation=Object(S.b)(a,i,s,n,l,p);var f,y=this._startInfo.graphicInfos.map((function(t){return t.geometry})),d=Object(r.a)(y);try{for(d.s();!(f=d.n()).done;){var b=f.value,g=y.indexOf(b),_=C(b,this._angleOfRotation,u);this.graphics[g].geometry=_}}catch(G){d.e(G)}finally{d.f()}this.backgroundGraphic.geometry=C(c,this._angleOfRotation,u),this.rotateGraphic.geometry=C(h,this._angleOfRotation,u)}},{key:"_moveGraphic",value:function(t,e,a){if(this.graphics.includes(t)){var i=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=Object(S.a)(i,e,a,this.view);var s,n=Object(r.a)(this.graphics);try{for(n.s();!(s=n.n()).done;){var c=s.value;c!==t&&(c.geometry=Object(S.a)(c.geometry,e,a,this.view))}}catch(u){n.e(u)}finally{n.f()}}else if(t===this.centerGraphic){var h=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=Object(S.a)(h,e,a,this.view)}if(t===this.backgroundGraphic||t===this.centerGraphic){var o,l=Object(r.a)(this.graphics);try{for(l.s();!(o=l.n()).done;){var p=o.value;p.geometry=Object(S.a)(p.geometry,e,a,this.view)}}catch(u){l.e(u)}finally{l.f()}}}},{key:"_setupGraphics",value:function(){var t=this._graphicAttributes,e=this.symbols;this._set("centerGraphic",new k.a(null,e.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new k.a(null,e.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new k.a(null,e.rotatorLine,t),this._set("rotateGraphic",new k.a(null,e.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(var a=0;a<8;a++)this.handleGraphics.push(new k.a(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)}},{key:"_updateGraphics",value:function(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}},{key:"_hideGraphicsBeforeUpdate",value:function(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((function(t){return t.visible=!1}))}},{key:"_showGraphicsAfterUpdate",value:function(){this.enableRotation&&(this._rotateLineGraphic.visible=!0,this.rotateGraphic.visible=!0),this.showCenterGraphic&&(this.centerGraphic.visible=!0),this.enableScaling&&this.handleGraphics.forEach((function(t){return t.visible=!0}))}},{key:"_updateHandleGraphics",value:function(){var t=this,e=this._getCoordinates(!0);this.handleGraphics.forEach((function(a,r){var s=Object(i.a)(e[r],2),n=s[0],c=s[1];t._updateXY(a,n,c)}))}},{key:"_updateBackgroundGraphic",value:function(){var t=this._getCoordinates();this.backgroundGraphic.geometry=new d.a({rings:t,spatialReference:this.view.spatialReference})}},{key:"_updateCenterGraphic",value:function(){var t=this._getBoxBounds(Object(w.g)()),e=Object(i.a)(t,4),a=e[0],r=e[1],s=(e[2]+a)/2,n=(e[3]+r)/2;this.centerGraphic.geometry=new v.a(s,n,this.view.spatialReference)}},{key:"_updateRotateGraphic",value:function(){if(this.handleGraphics.length){var t=this.handleGraphics[1].geometry,e=t.x,a=t.y+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new v.a(e,a,this.view.spatialReference)}}},{key:"_updateRotateLineGraphic",value:function(){if(this.handleGraphics.length&&this.rotateGraphic&&this.rotateGraphic.geometry){var t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new b.a({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}}},{key:"_updateXY",value:function(t,e,a){t.geometry=new v.a(e,a,this.view.spatialReference)}},{key:"_updateX",value:function(t,e){var a=t.geometry.y;t.geometry=new v.a(e,a,this.view.spatialReference)}},{key:"_updateY",value:function(t,e){var a=t.geometry.x;t.geometry=new v.a(a,e,this.view.spatialReference)}},{key:"_hasExtentGraphic",value:function(){return this.graphics.some((function(t){return t&&Object(l.i)(t.geometry)&&"extent"===t.geometry.type}))}},{key:"_getBoxBounds",value:function(t){var e=this.graphics.map((function(t){return t.geometry}));return this._getBounds(t,e)}},{key:"_getCoordinates",value:function(t){var e=this._getBoxBounds(Object(w.g)()),a=Object(i.a)(e,4),r=a[0],s=a[1],n=a[2],c=a[3];if(t){var h=(r+n)/2,o=(c+s)/2;return[[r,c],[h,c],[n,c],[n,o],[n,s],[h,s],[r,s],[r,o]]}return[[r,c],[n,c],[n,s],[r,s]]}},{key:"_emitMoveStartEvent",value:function(t,e,a){var i=new L(this.graphics,a,t,e);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}},{key:"_emitMoveEvent",value:function(t,e,a){var i=new B(this.graphics,a,t,e);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}},{key:"_emitMoveStopEvent",value:function(t,e,a){var i=new Y(this.graphics,a,t,e);this.emit("move-stop",i),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(i)}},{key:"_emitRotateStartEvent",value:function(t,e){var a=new N(this.graphics,e,t);this.emit("rotate-start",a),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(a)}},{key:"_emitRotateEvent",value:function(t,e){var a=new A(this.graphics,e,t);this.emit("rotate",a),this.callbacks.onRotate&&this.callbacks.onRotate(a)}},{key:"_emitRotateStopEvent",value:function(t,e){var a=new X(this.graphics,e,t);this.emit("rotate-stop",a),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(a)}},{key:"_emitScaleStartEvent",value:function(t,e,a){var i=new P(this.graphics,a,t,e);this.emit("scale-start",i),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(i)}},{key:"_emitScaleEvent",value:function(t,e,a){var i=new T(this.graphics,a,t,e);this.emit("scale",i),this.callbacks.onScale&&this.callbacks.onScale(i)}},{key:"_emitScaleStopEvent",value:function(t,e,a){var i=new D(this.graphics,a,t,e);this.emit("scale-stop",i),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(i)}}]),a}(g.a.EventedAccessor);Object(o.a)([Object(p.b)()],U.prototype,"_rotateLineGraphic",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],U.prototype,"type",void 0),Object(o.a)([Object(p.b)()],U.prototype,"callbacks",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],U.prototype,"centerGraphic",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],U.prototype,"backgroundGraphic",void 0),Object(o.a)([Object(p.b)()],U.prototype,"enableMovement",void 0),Object(o.a)([Object(p.b)()],U.prototype,"enableRotation",void 0),Object(o.a)([Object(p.b)()],U.prototype,"enableScaling",void 0),Object(o.a)([Object(p.b)()],U.prototype,"graphics",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],U.prototype,"handleGraphics",void 0),Object(o.a)([Object(p.b)()],U.prototype,"layer",void 0),Object(o.a)([Object(p.b)()],U.prototype,"preserveAspectRatio",void 0),Object(o.a)([Object(p.b)({readOnly:!0})],U.prototype,"rotateGraphic",void 0),Object(o.a)([Object(p.b)()],U.prototype,"showCenterGraphic",void 0),Object(o.a)([Object(p.b)({dependsOn:["view.ready","graphics.length","layer"],readOnly:!0})],U.prototype,"state",null),Object(o.a)([Object(p.b)({value:H})],U.prototype,"symbols",null),Object(o.a)([Object(p.b)()],U.prototype,"view",void 0);var F=U=Object(o.a)([Object(u.a)("esri.views.draw.support.Box")],U);e.default=F}}]);
//# sourceMappingURL=230.3027b7fd.chunk.js.map