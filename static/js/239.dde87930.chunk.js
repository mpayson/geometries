(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[239],{759:function(e,t,n){"use strict";n.r(t),n.d(t,"calcite_sortable_list",(function(){return s}));var i=n(196),r=n(1118),s=function(){function e(e){var t=this;Object(i.k)(this,e),this.calciteListOrderChange=Object(i.e)(this,"calciteListOrderChange",7),this.handleSelector="calcite-handle",this.disabled=!1,this.loading=!1,this.handleActivated=!1,this.items=[],this.observer=new MutationObserver((function(){t.cleanUpDragAndDrop(),t.items=Array.from(t.el.children),t.setUpDragAndDrop()}))}return e.prototype.connectedCallback=function(){this.items=Array.from(this.el.children),this.setUpDragAndDrop(),this.beginObserving()},e.prototype.disconnectedCallback=function(){this.observer.disconnect(),this.cleanUpDragAndDrop()},e.prototype.calciteHandleNudgeHandler=function(e){var t,n=this.items.find((function(t){return t.contains(e.detail.handle)||e.composedPath().includes(t)})),i=this.items.length-1,r=this.items.indexOf(n),s=!1;switch(e.detail.direction){case"up":e.preventDefault(),0===r?s=!0:t=r-1;break;case"down":e.preventDefault(),r===i?t=0:r===i-1?s=!0:t=r+2;break;default:return}this.observer.disconnect(),s?n.parentElement.appendChild(n):n.parentElement.insertBefore(n,this.items[t]),this.items=Array.from(this.el.children),e.detail.handle.activated=!0,e.detail.handle.setFocus(),this.beginObserving()},e.prototype.setUpDragAndDrop=function(){var e=this;this.sortable=r.a.create(this.el,{handle:this.handleSelector,onUpdate:function(){e.items=Array.from(e.el.children),e.calciteListOrderChange.emit()},onStart:function(){e.observer.disconnect()},onEnd:function(){e.beginObserving()}})},e.prototype.cleanUpDragAndDrop=function(){this.sortable.destroy(),this.sortable=null},e.prototype.beginObserving=function(){this.observer.observe(this.el,{childList:!0,subtree:!0})},e.prototype.render=function(){return Object(i.i)(i.b,null,Object(i.i)("slot",null))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.h)(this)},enumerable:!1,configurable:!0}),e}()}}]);
//# sourceMappingURL=239.dde87930.chunk.js.map