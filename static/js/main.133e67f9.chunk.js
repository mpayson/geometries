(this.webpackJsonpgeometries=this.webpackJsonpgeometries||[]).push([[39],{432:function(e,t){function c(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}c.keys=function(){return[]},c.resolve=c,e.exports=c,c.id=432},484:function(e,t,c){},704:function(e,t,c){var n={"./calcite-accordion_2.entry.js":[716,114],"./calcite-action_5.entry.js":[717,89],"./calcite-alert.entry.js":[718,115],"./calcite-avatar.entry.js":[719,116],"./calcite-block_2.entry.js":[720,88],"./calcite-button.entry.js":[721,142],"./calcite-card.entry.js":[722,117],"./calcite-checkbox.entry.js":[723,118],"./calcite-chip.entry.js":[724,119],"./calcite-color-picker_3.entry.js":[725,90],"./calcite-combobox_3.entry.js":[726,11,83],"./calcite-date-picker_5.entry.js":[727,11,112],"./calcite-dropdown_3.entry.js":[728,11,143],"./calcite-fab.entry.js":[729,144],"./calcite-filter.entry.js":[730,84],"./calcite-flow_2.entry.js":[731,97],"./calcite-graph.entry.js":[732,145],"./calcite-handle.entry.js":[733,234],"./calcite-icon.entry.js":[734,146],"./calcite-inline-editable.entry.js":[735,147],"./calcite-input-message.entry.js":[736,148],"./calcite-input.entry.js":[737,120],"./calcite-label.entry.js":[738,149],"./calcite-link.entry.js":[739,150],"./calcite-loader.entry.js":[740,151],"./calcite-modal.entry.js":[741,121],"./calcite-notice.entry.js":[742,122],"./calcite-option_3.entry.js":[743,152],"./calcite-pagination.entry.js":[744,153],"./calcite-pick-list-group.entry.js":[745,98],"./calcite-pick-list-item.entry.js":[746,99],"./calcite-pick-list.entry.js":[747,81],"./calcite-popover_2.entry.js":[748,11,123],"./calcite-progress.entry.js":[749,235],"./calcite-radio-button-group.entry.js":[750,236],"./calcite-radio-button.entry.js":[751,124],"./calcite-radio-group_2.entry.js":[752,125],"./calcite-radio.entry.js":[753,237],"./calcite-rating.entry.js":[754,126],"./calcite-scrim.entry.js":[755,238],"./calcite-shell-center-row.entry.js":[756,127],"./calcite-shell_2.entry.js":[757,154],"./calcite-slider.entry.js":[758,100],"./calcite-sortable-list.entry.js":[759,38,239],"./calcite-split-button.entry.js":[760,155],"./calcite-stepper_2.entry.js":[761,128],"./calcite-switch.entry.js":[762,129],"./calcite-tab_4.entry.js":[763,101],"./calcite-tile-select-group.entry.js":[764,240],"./calcite-tile-select.entry.js":[765,156],"./calcite-tile.entry.js":[766,241],"./calcite-tip_3.entry.js":[767,113],"./calcite-tooltip_2.entry.js":[768,11,130],"./calcite-tree_2.entry.js":[769,131],"./calcite-value-list-item.entry.js":[770,91],"./calcite-value-list.entry.js":[771,38,82]};function r(e){if(!c.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(c.e)).then((function(){return c(r)}))}r.keys=function(){return Object.keys(n)},r.id=704,e.exports=r},707:function(e,t,c){},708:function(e,t,c){"use strict";c.r(t);var n=c(92),r=c.n(n),i=c(452),l=c.n(i),a=c(32),o=c(355),s=c(457),j=c(260),d=c(461),u=c(458),b=c(459),h=c(44),p=c(136),O=c(778),y=c(777),f=c(240),v=c(354),g=c(75),m=c(82),w=c(37),x=c(9),k=c(302),S=c(60),_=function(e,t,c){var r=Object(n.useRef)(null);Object(n.useEffect)((function(){r.current=c}),[c]),Object(n.useEffect)((function(){var c=(null===t||void 0===t?void 0:t.current)||window;if(c&&c.addEventListener){var n=function(e){return r.current(e)};return c.addEventListener(e,n),function(){c.removeEventListener(e,n)}}}),[e,t])};function E(e){var t=e.children,c=e.onChange,r=Object(k.a)(e,["children","onChange"]),i=Object(n.useRef)(null);return _("calciteRadioButtonGroupChange",i,(function(e){c(e.detail)})),Object(S.jsx)("calcite-radio-button-group",Object(x.a)(Object(x.a)({ref:i},r),{},{children:t}))}function C(e){var t=e.onSelect,c=e.children,r=e.style,i=Object(k.a)(e,["onSelect","children","style"]),l=Object(n.useRef)(null);return _("calciteDropdownSelect",l,(function(e){var c=l.current.selectedItems[0].id;t(c)})),Object(S.jsx)("calcite-dropdown",Object(x.a)(Object(x.a)({style:r,ref:l},i),{},{children:c}))}var N={type:"simple-marker",color:[226,119,40],outline:{color:[255,255,255],width:2}},J={type:"simple-fill",color:[227,139,79,.8],outline:{color:[255,255,255],width:1}};var P=function(e){var t=e.onAddGraphic,c=Object(n.useRef)(),r=Object(n.useState)("esrijson"),i=Object(a.a)(r,2),l=i[0],o=i[1];return Object(S.jsxs)("div",{style:{width:"calc(100% - 1rem)",textAlign:"center",margin:"0.5rem"},children:[Object(S.jsx)("p",{children:"Sketch a graphic to view its properties"}),Object(S.jsx)("p",{children:Object(S.jsx)("b",{children:"OR"})}),Object(S.jsx)("p",{children:"Enter in the geometry below"}),Object(S.jsx)("hr",{}),Object(S.jsx)("br",{}),Object(S.jsxs)("calcite-label",{children:["Format",Object(S.jsxs)(E,{name:"format",onChange:o,children:[Object(S.jsx)("calcite-radio-button",{checked:"esrijson"===l||void 0,value:"esrijson",children:"Esri JSON"}),Object(S.jsx)("calcite-radio-button",{checked:"geojson"===l||void 0,value:"geojson",children:"GeoJSON"}),Object(S.jsx)("calcite-radio-button",{checked:"wkt"===l||void 0,value:"wkt",children:"WKT"})]})]}),Object(S.jsxs)("calcite-label",{children:["Geometry string",Object(S.jsx)("calcite-input",{placeholder:"Enter geometry",type:"textarea",ref:c})]}),Object(S.jsx)("calcite-button",{width:"full",onClick:function(){var e,n,r,i,a=c.current.value;switch("esrijson"===l?(e=JSON.parse(a),n=Object(f.a)(e)):"geojson"===l?(n=JSON.parse(a),e=Object(f.b)(n)):"wkt"===l&&(n=Object(v.b)(a),e=Object(f.b)(n)),n.type){case"Polygon":r=m.a.fromJSON(e),i=J;break;case"Point":r=w.a.fromJSON(e),i=N;break;default:console.log("Unknown type")}var o=new g.a({geometry:r,symbol:i});t(o)},children:"Add to map"})]})},G=c(294),F={polygon:[{label:"Area",fn:function(e){return Object(G.planarArea)(e)}},{label:"Centroid (X)",fn:function(e){return e.centroid.x}},{label:"Centroid (Y)",fn:function(e){return e.centroid.y}}],polyline:[],point:[]},A=[{wkid:4326,label:"WGS84"},{wkid:102100,label:"Web Mercator"},{wkid:8857,label:"Equal Earth Greenwich"},{wkid:54008,label:"World Sinusoidal"},{wkid:54050,label:"World Fuller"}];function L(e){return A.find((function(t){return t.wkid===e})).label}var R=A;c(484);Object(p.g)();var T=new j.a;var D=function(){var e,t=Object(n.useRef)(),c=Object(n.useRef)(),r=Object(n.useState)(),i=Object(a.a)(r,2),l=i[0],j=i[1],g=Object(n.useState)("esrijson"),m=Object(a.a)(g,2),w=m[0],x=m[1],k=Object(n.useState)(4326),_=Object(a.a)(k,2),N=_[0],J=_[1];if(Object(n.useEffect)((function(){var e=new o.a({basemap:"gray-vector",layers:[T]}),n=new s.a({container:t.current,center:[-117,34],zoom:9,map:e}),r=new d.a({content:new u.a({view:n}),expanded:!0,view:n});n.ui.add(r,"top-right"),n.ui.move("zoom","top-right");var i=new b.a({layer:T,creationMode:"update",layout:"vertical",view:n});n.ui.add(i,"top-left");var l=i.on(["create"],(function(e){"complete"===e.state&&j(e.graphic.clone())})),a=i.on(["update"],(function(e){"complete"===e.state&&j(e.graphics[0].clone())}));return c.current=n,function(){l.remove(),a.remove(),c&&c.current&&c.current.destroy()}}),[]),l){var G,A=new h.a({wkid:N}),D=Object(p.h)(l.geometry,A),W=F[D.type].map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:e.label}),Object(S.jsx)("td",{children:e.fn(D)})]},e.label)})),M=D.toJSON();if("esrijson"===w)G=JSON.stringify(M,null,2);else if("geojson"===w){var U=Object(f.a)(M);G=JSON.stringify(U,null,2)}else if("wkt"===w){var I=Object(f.a)(M);G=Object(v.a)(I)}var B=R.map((function(e){return Object(S.jsx)("calcite-dropdown-item",{active:e.id===N||void 0,id:e.wkid,children:e.label},e.wkid)}));e=Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("calcite-block",{heading:"Settings",open:!0,collapsible:!0,children:[Object(S.jsx)("calcite-label",{children:Object(S.jsx)("calcite-button",{scale:"s",width:"full",color:"red",appearance:"outline",onClick:function(e){c.current.graphics.removeAll(),T.removeAll(),j(void 0)},children:"Clear geometries"})}),Object(S.jsxs)("calcite-label",{children:["Projection",Object(S.jsxs)(C,{style:{width:"100%"},onSelect:function(e){return J(parseInt(e))},children:[Object(S.jsx)("calcite-button",{slot:"dropdown-trigger",width:"full",scale:"s",appearance:"outline",children:L(N)}),Object(S.jsx)("calcite-dropdown-group",{children:B})]})]})]}),Object(S.jsxs)("calcite-block",{heading:"Geometry",summary:"String representation",open:!0,collapsible:!0,children:[Object(S.jsxs)(E,{name:"format",onChange:x,children:[Object(S.jsx)("calcite-radio-button",{checked:"esrijson"===w||void 0,value:"esrijson",children:"Esri JSON"}),Object(S.jsx)("calcite-radio-button",{checked:"geojson"===w||void 0,value:"geojson",children:"GeoJSON"}),Object(S.jsx)("calcite-radio-button",{checked:"wkt"===w||void 0,value:"wkt",children:"WKT"})]}),Object(S.jsx)(O.a,{language:"json",style:y.a,customStyle:{marginTop:"2px",overflow:"scroll"},children:G})]}),Object(S.jsx)("calcite-block",{heading:"Properties",summary:"Calculated values",open:!0,collapsible:!0,children:Object(S.jsxs)("table",{style:{width:"100%"},children:[Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Property"}),Object(S.jsx)("th",{children:"Value"})]}),W]})})]})}else e=Object(S.jsx)(P,{onAddGraphic:function(e){c.current.graphics.add(e),j(e)}});return Object(S.jsxs)("calcite-shell",{children:[Object(S.jsxs)("calcite-shell-panel",{slot:"primary-panel",position:"start","width-scale":"m",children:[Object(S.jsx)("calcite-action-bar",{slot:"action-bar",theme:"dark",children:Object(S.jsx)("calcite-action-group",{children:Object(S.jsx)("calcite-action",{text:"Properties",icon:"feature-details",active:!0})})}),Object(S.jsx)("calcite-panel",{heading:"Geometry Properties",headingLevel:"1",widthScale:"l",children:Object(S.jsx)("div",{children:e})})]}),Object(S.jsx)("div",{id:"map",ref:t})]})},W=function(e){e&&e instanceof Function&&c.e(308).then(c.bind(null,1199)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),n(e),r(e),i(e),l(e)}))},M=c(460);c(705),c(706),c(707);Object(M.a)(window),l.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(D,{})}),document.getElementById("root")),W()}},[[708,41,42]]]);
//# sourceMappingURL=main.133e67f9.chunk.js.map