(this["webpackJsonp@react-easy-diagram/demo"]=this["webpackJsonp@react-easy-diagram/demo"]||[]).push([[0],{58:function(t,e,n){},59:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var o=n(11),r=n(0),i=n.n(r),a=n(9),s=n.n(a),c=(n(58),n(59),n(101)),l=n(33),u=n(8),f=n(103),d=function(){return(d=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},h=function(t){var e=t.diagramOffset,n=t.diagramZoom,o=t.settings;return o=null!==o&&void 0!==o?o:m,i.a.createElement("div",{className:"react_fast_diagram_Background_Default",style:{backgroundColor:o.color,backgroundImage:o.imageCreator(100*n,100*n),backgroundPosition:e[0]+"px "+e[1]+"px"}})},m={imageCreator:function(t,e){return"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"},color:"#ececec"},p=function(t){var e=Object(r.useState)(0),n=(e[0],e[1]),o=Object(r.useState)((function(){return{value:t,facade:{get current(){return o.value},set current(t){o.value!==t&&(o.value=t,n((function(t){return t+1})))}}}}))[0];return o.facade},v=Object(c.a)((function(t){var e=t.link,n=p(null);return i.a.createElement("g",null,i.a.createElement(e.componentDefinition.component,{draggableRef:n,path:e.path,entity:e,settings:e.componentDefinition.settings}))})),g=Object(c.a)((function(t){var e=t.linksStore;return i.a.createElement("svg",null,Object.values(e.links).map((function(t){return i.a.createElement(v,{key:t.id,link:t})})),e.linkCreation.link&&i.a.createElement(v,{key:e.linkCreation.link.id,link:e.linkCreation.link}))}));function b(t,e,n,o){return Object(r.useMemo)((function(){return{onDrag:function(o){var r=o.pinching,i=o.delta;if(t.current&&!r){var a=n?n():1;e.setOffset([e.offset[0]+i[0]/a,e.offset[1]+i[1]/a])}},onDragStart:function(e){var n=e.event;o&&o(n)||(t.current=!0)},onDragEnd:function(){return t.current=!1}}}),[t,e,n,o])}var _="react_fast_diagram_disabled_user_select";function y(t,e){Object(r.useEffect)((function(){if(t&&e&&!e.classList.contains(_))return e.classList.add(_),function(){e.classList.remove(_)}}),[t,e])}var S=Object(c.a)((function(t){var e=t.node,n=function(t,e){var n,o,i=ht().diagramState,a=p(!1),s=Object(r.useRef)(null),c=b(a,t,(function(){return i.zoom}),(function(t){return function(t,e){if("composedPath"in t)for(var n=t.composedPath(),o=0;o<n.length;o++){var r=n[o];if("classList"in r&&r.classList.contains(e))return!0}return!1}(t,"react_fast_diagram_PortWrapper")}));return Object(l.a)(c,{domTarget:s,eventOptions:{passive:!1},enabled:e}),y(a.current,null===(o=null===(n=s.current)||void 0===n?void 0:n.ownerDocument)||void 0===o?void 0:o.body),{active:a.current,userInteractionElemRef:s}}(e).userInteractionElemRef;return i.a.createElement("div",{id:e.id,className:"react_fast_diagram_NodeWrapper",style:{left:e.offset[0],top:e.offset[1]},ref:e.ref},i.a.createElement(e.componentDefinition.component,{draggableRef:n,entity:e,settings:e.componentDefinition.settings}))})),O=Object(c.a)((function(t){var e=t.nodesStore;return i.a.createElement("div",null,Object.values(e.nodes).map((function(t){return i.a.createElement(S,{key:t.id,node:t})})))})),z=function(t,e){var n="translate("+t[0]+"px, "+t[1]+"px)";return e?n+" "+("scale("+e+")"):n},j=function(t){return[Math.round(t[0]),Math.round(t[1])]},C=function(t,e){return[t[0]+e[0],t[1]+e[1]]},k=function(t,e){return[t[0]-e[0],t[1]-e[1]]},x=function(t,e){return[t[0]*e,t[1]*e]};function w(t,e){return Math.min(Math.max(t,e[0]),e[1])}var I=function(t){var e,n,o=ht().diagramState,i=p(!1),a=Object(r.useCallback)((function(t){return t.target!==o.diagramInnerRef.current}),[o.diagramInnerRef]),s=b(i,o,void 0,a),c=function(t,e,n,o){var i=Object(r.useRef)({distance:0,origin:[0,0]});return Object(r.useMemo)((function(){return{onPinch:function(o){var r=o.da[0],a=o.origin;if(e.current&&t.current){var s=k(a,i.current.origin),c=t.current.getBoundingClientRect(),l=k(a,[c.left,c.top]);n.tranlsateAndZoomInto(s,l,r/i.current.distance),i.current={distance:r,origin:a}}},onPinchStart:function(t){var n=t.da[0],r=t.origin,a=t.event;o&&o(a)||(i.current={distance:n,origin:r},e.current=!0)},onPinchEnd:function(){return e.current=!1}}}),[t,e,n,o])}(o.diagramInnerRef,i,o,a),u=function(t,e,n){return Object(r.useMemo)((function(){return{onWheel:function(e){var o=e.direction,r=(o[0],o[1]),i=e.event,a=i.clientX,s=i.clientY;if(t.current){var c=t.current.getBoundingClientRect(),l=k([a,s],[c.left,c.top]),u=.9;r<0&&(u=1/u),n.tranlsateAndZoomInto([0,0],l,u)}}}}),[t,e,n])}(o.diagramInnerRef,i,o);return Object(l.a)(d(d(d({},s),c),u),{domTarget:o.diagramInnerRef,eventOptions:{passive:!1},enabled:t}),y(i.current,null===(n=null===(e=o.diagramInnerRef.current)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.body),{transform:o.transformString,active:i.current}},E=Object(c.a)((function(){var t=ht(),e=t.diagramSettings,n=t.diagramApi;return e.miniControlComponentState.component&&i.a.createElement(e.miniControlComponentState.component,{diagramApi:n,settings:e.miniControlComponentState.settings})})),P=Object(c.a)((function(t){var e=ht(),n=I().transform;return i.a.createElement("div",{ref:e.diagramState.diagramInnerRef,style:d({},t.diagramStyles),className:"react_fast_diagram_DiagramInner"},i.a.createElement(mt,null),i.a.createElement("div",{className:"react_fast_diagram_DiagramInner_DraggablePart",style:{transform:n}},i.a.createElement(g,{linksStore:e.linksStore}),i.a.createElement(O,{nodesStore:e.nodesStore})),i.a.createElement(E,null))}));P.displayName="InnerDiagram";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".react_fast_diagram_DiagramInner {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  position: relative;\n  overflow: hidden;\n  touch-action: none;\n}\n\n.react_fast_diagram_DiagramInner * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.react_fast_diagram_DiagramInner_DraggablePart {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: visible;\n  transform-origin: 0px 0px;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  /* useGestures hook use targetTouches instead of simply touches, \n  so we should set this property to Movable, otherwise if user put \n  one finger above Movable and another above DiagramInner, the hook \n  will not trigger pinch gesture */\n  pointer-events: none; \n}\n\n.react_fast_diagram_DiagramInner_DraggablePart > * {\n  overflow: visible;\n}\n\n.react_fast_diagram_NodeWrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; \n  height: -webkit-fit-content; \n  height: -moz-fit-content; \n  height: fit-content;\n  pointer-events: auto; \n  -webkit-user-select: none; \n     -moz-user-select: none; \n      -ms-user-select: none; \n          user-select: none;\n}\n\n.react_fast_diagram_Node_Default {\n  min-width: 100px;\n  min-height: 100px;\n  background-color: white;\n  border: 2px solid WhiteSmoke;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n}\n\n.react_fast_diagram_PortContainer_Default {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.react_fast_diagram_PortContainer_Default_Horizontal > * {\n  margin: 0 5px;\n}\n\n.react_fast_diagram_PortContainer_Default_Vertical > * {\n  margin: 5px 0;\n}\n\n.react_fast_diagram_PortContainer_Default_Horizontal {\n  flex-direction: row;\n  width: 100%;\n}\n\n.react_fast_diagram_PortContainer_Default_Vertical {\n  flex-direction: column;\n  height: 100%;\n}\n\n.react_fast_diagram_Node_Default > * {\n  text-align: center;\n  margin: auto;\n}\n\n.react_fast_diagram_disabled_user_select {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.react_fast_diagram_Port_Default {\n  height: 25px;\n  width: 25px;\n  border-color: wheat;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.react_fast_diagram_BackgroundWrapper {\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n}\n\n.react_fast_diagram_Background_Default {\n  height: 100%;\n  width: 100%;\n}\n\n.react_fast_diagram_Minicontrol_Default {\n  position: absolute;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n.react_fast_diagram_Minicontrol_Default_Btn {\n  background-color: white;\n  border: 1px solid rgb(209, 209, 209);\n  letter-spacing: normal;\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-weight: bold;\n}\n\n.react_fast_diagram_Minicontrol_Default_Btn > * {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n@media (hover: hover) {\n  .react_fast_diagram_Minicontrol_Default_Btn:hover {\n    background-color: rgb(228, 228, 228);\n    border: 1px solid rgb(209, 209, 209)\n  }\n}\n\n/* Containers with gap between items */\n\n.react_fast_diagram_flex_gap {\n  --gap: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.react_fast_diagram_flex_gap_y {\n  flex-direction: column;\n  height: 100%;\n}\n\n.react_fast_diagram_flex_gap_y > * {\n  margin: var(--gap) 0 0 0;\n}\n\n.react_fast_diagram_flex_gap_y > :first-child {\n  margin: 0;\n}\n\n.react_fast_diagram_flex_gap_x {\n  flex-direction: row;\n  width: 100%;\n}\n\n.react_fast_diagram_flex_gap_x > * {\n  margin: 0 0 0 var(--gap);\n}\n\n.react_fast_diagram_flex_gap_x > :first-child {\n  margin: 0;\n}\n\n/* Containers with gap between items */");var D=function(t){var e=this;this.addNode=function(t){e.rootStore.nodesStore.addNode(t)},this.reinitState=function(t,n){e.rootStore.nodesStore.fromJson(t),e.rootStore.linksStore.fromJson(n)},this.reinitSettings=function(t){e.rootStore.diagramSettings.fromJson(t.diagram),e.rootStore.nodesSettings.fromJson(t.nodes),e.rootStore.linksSettings.fromJson(t.links),e.rootStore.portsSettings.fromJson(t.ports)},this.zoomIn=function(){return e.rootStore.diagramState.zoomIntoCenter(1.25)},this.zoomOut=function(){return e.rootStore.diagramState.zoomIntoCenter(.8)},this.recalculatePortPosition=function(){},this.rootStore=t};function T(t,e,n,o,r){if(!t||!e)return"";t=j(t),e=j(e);var i,a,s=t[0]+", "+t[1],c=e[0]+", "+e[1],l=r.tweakDirectionFactorBasedOnDistance((i=t,a=e,Math.sqrt(Math.pow(i[0]-a[0],2)+Math.pow(i[1]-a[1],2))),r.directionFactor);function u(t,e){switch(e&&r.portTypeToLinkDirectionMapping[e]){case"left":return t[0]-l+", "+t[1];case"up":return t[0]+", "+(t[1]-l);case"right":return t[0]+l+", "+t[1];case"down":return t[0]+", "+(t[1]+l);default:return t[0]+", "+t[1]}}return n||o?"M "+s+" C "+u(t,n)+" "+u(e,o)+", "+c:"M "+s+" Q "+e[0]+", "+t[1]+", "+c}var N={portTypeToLinkDirectionMapping:{left:"left",right:"right",top:"up",bottom:"down"},directionFactor:60,tweakDirectionFactorBasedOnDistance:function(t,e){return t<100?e*(t/100):e}};function R(t){return function(e,n,o,r){return T(e,n,o,r,t?d(d({},N),t):N)}}var J=function(){function t(t){var e=this;this.offsetRelativeToParent=function(t){if(e.current){for(var n=e.current,o=0,r=0;t!==n&&n;)o+=n.offsetLeft,r+=n.offsetTop,n=n.parentElement;return[o,r]}return null},this.currentInternal=t,Object(u.c)(this)}return Object.defineProperty(t.prototype,"current",{get:function(){return this.currentInternal},set:function(t){this.currentInternal=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"realSize",{get:function(){return this.current?[this.current.clientWidth,this.current.clientHeight]:null},enumerable:!1,configurable:!0}),t}(),M=function(){function t(t){var e=this;this.offset=[0,0],this.zoom=1,this.setOffset=function(t){e.offset=t},this.setZoom=function(t){e.zoom=w(t,e.rootStore.diagramSettings.scaleInterval)},this.setTransformation=function(t,n){e.setOffset(t),e.setZoom(n)},this.zoomInto=function(t,n){var o=w(e.zoom*n,e.rootStore.diagramSettings.scaleInterval),r=x(k(t,e.offset),o/e.zoom);e.setTransformation(k(t,r),o)},this.translate=function(t){e.setOffset(C(e.offset,t))},this.tranlsateAndZoomInto=function(t,n,o){e.translate(t),e.zoomInto(n,o)},this.zoomIntoCenter=function(t){var n=e.diagramInnerRef.realSize;n&&e.rootStore.diagramState.zoomInto(x(n,.5),t)},this.diagramInnerRef=new J(null),Object(u.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"transformString",{get:function(){return z(this.offset,this.zoom)},enumerable:!1,configurable:!0}),t}(),B=function(){function t(t){var e=this;this.position=null,this.nodeId=null,this.portId=null,this.fromJson=function(t){var n;"position"in t?(e.position=t.position,e.nodeId=null,e.portId=null):(e.position=null,e.nodeId=t.nodeId,e.portId=null!==(n=t.portId)&&void 0!==n?n:null)},Object(u.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"port",{get:function(){if(this.nodeId&&this.portId){var t=this.rootStore.nodesStore.nodes[this.nodeId];if(null===t||void 0===t?void 0:t.ports)return t.ports[this.portId]}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"point",{get:function(){var t;if(this.nodeId){var e=this.rootStore.nodesStore.nodes[this.nodeId];if(this.portId){var n=e.ports[this.portId];if(n&&n.offsetRelativeToNode&&n.realSize)return[e.offset[0]+n.offsetRelativeToNode[0]+n.realSize[0]/2,e.offset[1]+n.offsetRelativeToNode[1]+n.realSize[1]/2]}return e.realSize?[e.offset[0]+e.realSize[0]/2,e.offset[1]+e.realSize[1]/2]:e.offset}return null!==(t=this.position)&&void 0!==t?t:[0,0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasOnlyPosition",{get:function(){return!!this.position&&!this.nodeId},enumerable:!1,configurable:!0}),t}(),V=function(){function t(t){var e=this;this.defaultType=L,this.fromJson=function(t){var n;e.defaultType=null!==(n=null===t||void 0===t?void 0:t.defaultNodeType)&&void 0!==n?n:L,(null===t||void 0===t?void 0:t.components)?e.components=e.createComponentCollection(t.components):e.components=d({},e.defaultComponents)},this.getComponent=function(t){var n,o=null!==t&&void 0!==t?t:e.defaultType;return null!==(n=e.components[o])&&void 0!==n?n:e.components[e.defaultType]},this.defaultComponents=this.createComponentCollection(t),this.components=d({},this.defaultComponents),Object(u.c)(this)}return t.prototype.createComponentCollection=function(t){var e={};return Object.entries(t).forEach((function(t){var n=t[0],o=t[1];e[n]=new at(o)})),e},t}(),L="default",H=function(){function t(t,e){var n=this;void 0===e&&(e=Object(f.a)()),this.componentType=L,this.segments=[],this.extra=null,this.fromJson=function(t){var e;n.componentType=null!==(e=t.componentType)&&void 0!==e?e:L,n.source.fromJson(t.source),n.target.fromJson(t.target),n.segments=t.segments,n.extra=t.extra},this.id=e,this.source=new B(t),this.target=new B(t),Object(u.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"path",{get:function(){var t,e;return{svgPath:this.rootStore.linksSettings.pathConstructor(this.source.point,this.target.point,null===(t=this.source.port)||void 0===t?void 0:t.type,null===(e=this.target.port)||void 0===e?void 0:e.type),source:this.source.point,target:this.target.point}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"componentDefinition",{get:function(){return this.rootStore.linksSettings.visualComponents.getComponent(this.componentType)},enumerable:!1,configurable:!0}),t.prototype.setSource=function(t){this.source.fromJson(t)},t.prototype.setTarget=function(t){this.target.fromJson(t)},t}(),W=function(){function t(t){this.link=null,this.targetPortCandidate=null,Object(u.c)(this,{link:u.d,targetPortCandidate:u.d}),this.rootStore=t}return t.prototype.startLinking=function(t,e){this.link=new H(this.rootStore),this.link.setSource({nodeId:t.nodeId,portId:t.id}),this.link.setTarget({position:t.offsetRelativeToNode&&t.node&&e?C(C(t.offsetRelativeToNode,t.node.offset),e):this.link.source.point})},t.prototype.setTargetPortCandidate=function(t){var e;(null===(e=this.link)||void 0===e?void 0:e.source)&&"portId"in this.link.source&&this.link.source.nodeId!==t.nodeId&&(this.targetPortCandidate=t)},t.prototype.resetTargetPortCandidateIfSame=function(t){this.targetPortCandidate===t&&(this.targetPortCandidate=null)},t.prototype.stopLinking=function(){this.targetPortCandidate&&this.link&&(this.link.setTarget({nodeId:this.targetPortCandidate.nodeId,portId:this.targetPortCandidate.id}),this.rootStore.linksStore.addLink(this.link)),this.targetPortCandidate=null,this.link=null},t}(),A=function(t){var e,n=null!==(e=t.settings)&&void 0!==e?e:Z,o=t.path,r=o.svgPath,a=o.target;return i.a.createElement("g",null,i.a.createElement("path",{ref:t.draggableRef,d:r,stroke:n.color,strokeWidth:n.strokeWidth,fill:"none"}),t.entity.target.hasOnlyPosition&&i.a.createElement("circle",{cx:a[0],cy:a[1],r:n.cirleRadius,fill:"orange"}))},Z={color:"LightBlue",strokeWidth:3,cirleRadius:3};function F(t){var e=d(d({},Z),t||{});return{component:A,settings:e}}var X=function(){var t,e=this;this.pathConstructor=Y,this.visualComponents=new V(((t={})[L]=A,t)),this.fromJson=function(t){var n;e.visualComponents.fromJson(t),e.pathConstructor=null!==(n=null===t||void 0===t?void 0:t.pathConstructor)&&void 0!==n?n:Y},Object(u.c)(this)},Y=R(),G=function(t){var e=this;this.links={},this.fromJson=function(t){e.links={},t&&t.forEach((function(t){var n=new H(e.rootStore,t.id);n.fromJson(t),e.links[n.id]=n}))},this.addLinkFromJson=function(t){var n,o=null!==(n=t.id)&&void 0!==n?n:Object(f.a)();e.links[o]||(e.links[o]=new H(e.rootStore,o)),e.links[o].fromJson(t)},this.addLink=function(t){e.links[t.id]=t},this.linkCreation=new W(t),Object(u.c)(this),this.rootStore=t},q=function(t){var e=t.entity,n=t.settings,o=t.draggableRef,r=ht().portsSettings;return i.a.createElement("div",{ref:o,className:"react_fast_diagram_Node_Default",style:null===n||void 0===n?void 0:n.style},i.a.createElement("span",null,e.id),Q(r,e.ports,"left","left"),Q(r,e.ports,"top","top"),Q(r,e.ports,"right","right"),Q(r,e.ports,"bottom","bottom"))};function Q(t,e,n,o){var r=Object.values(e).filter((function(t){return t.type===n})),a=t.portsContainerVisualComponents.getComponent("left"===o||"right"===o?"vertical":"horizontal");return r&&i.a.createElement("div",{style:{position:"absolute",left:"left"===o?0:void 0,top:"left"===o||"right"===o||"top"===o?0:void 0,right:"right"===o?0:void 0,bottom:"bottom"===o?0:void 0,height:"left"===o||"right"===o?"100%":void 0,width:"top"===o||"bottom"===o?"100%":void 0}},i.a.createElement(a.component,{entity:r,settings:a.settings}))}var K=function(){var t,e=this;this.visualComponents=new V(((t={})[L]=q,t)),this.fromJson=function(t){e.visualComponents.fromJson(t)},Object(u.c)(this)},U=function(){function t(t,e,n){var o=this;void 0===e&&(e=Object(f.a)()),void 0===n&&(n=Object(f.a)()),this.id="",this.nodeId="",this.label="",this.type="",this.dragging=!1,this.hovered=!1,this.fromJson=function(t){var e;o.type=null!==(e=t.type)&&void 0!==e?e:L,o.label=t.label},this.id=e,this.nodeId=n,this.ref=new J(null),Object(u.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"node",{get:function(){return this.rootStore.nodesStore.nodes[this.nodeId]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"offsetRelativeToNode",{get:function(){var t;return(null===(t=this.node)||void 0===t?void 0:t.ref.current)?this.ref.offsetRelativeToParent(this.node.ref.current):null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"realSize",{get:function(){return this.ref.realSize},enumerable:!1,configurable:!0}),t}(),$=function(){function t(t,e){var n=this;void 0===e&&(e=Object(f.a)()),this.id="",this.offset=[0,0],this.ports={},this.componentType=L,this.extra=null,this.setOffset=function(t){n.offset=t},this.fromJson=function(t){var e;n.offset=t.position,n.componentType=null!==(e=t.componentType)&&void 0!==e?e:L,n.extra=t.extra,n.ports={},t.ports&&Object.keys(t.ports).length>0&&Object.entries(t.ports).forEach((function(t){var e=t[0],o=t[1],r=new U(n.rootStore,e,n.id);r.fromJson(o),n.ports[e]=r}))},this.id=e,this.ref=new J(null),Object(u.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"transformString",{get:function(){return z(this.offset)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"componentDefinition",{get:function(){return this.rootStore.nodesSettings.visualComponents.getComponent(this.componentType)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"realSize",{get:function(){return this.ref.realSize},enumerable:!1,configurable:!0}),t}(),tt=function(t){var e=this;this.nodes={},this.fromJson=function(t){e.nodes={},t&&t.forEach((function(t){var n=new $(e.rootStore,t.id);n.fromJson(t),e.nodes[n.id]=n}))},this.addNode=function(t){var n,o=null!==(n=t.id)&&void 0!==n?n:Object(f.a)();e.nodes[o]||(e.nodes[o]=new $(e.rootStore,o)),e.nodes[o].fromJson(t)},Object(u.c)(this),this.rootStore=t},et=Object(c.a)((function(t){var e=t.port,n=function(t,e){var n,o,i=ht(),a=i.linksStore.linkCreation,s=i.diagramState,c=(p(!1),Object(r.useRef)(null));return Object(l.a)({onDrag:function(e){var n=e.pinching,o=e.delta;if(t.dragging&&!n&&a.link){var r=s.zoom;a.link.setTarget({position:[a.link.target.point[0]+o[0]/r,a.link.target.point[1]+o[1]/r]})}},onDragStart:function(e){var n,o=e.event;o.target.releasePointerCapture(o.pointerId),t.dragging=!0,"offsetX"in o&&"offsetY"in o&&(n=[o.offsetX,o.offsetY]),a.startLinking(t,n)},onDragEnd:function(){t.dragging=!1,a.stopLinking()},onPointerEnter:function(){t.hovered=!0,a.setTargetPortCandidate(t)},onPointerLeave:function(){t.hovered=!1,a.resetTargetPortCandidateIfSame(t)}},{domTarget:c,eventOptions:{passive:!1},enabled:e}),y(t.dragging,null===(o=null===(n=c.current)||void 0===n?void 0:n.ownerDocument)||void 0===o?void 0:o.body),{active:t.dragging,userInteractionElemRef:c}}(e).userInteractionElemRef;return i.a.createElement("div",{ref:{set current(t){n.current=t,e.ref.current=t}},id:e.nodeId+":"+e.id,className:"react_fast_diagram_PortWrapper"},i.a.createElement("div",{style:{width:10,height:10,backgroundColor:e.dragging||e.hovered?"#f84949":"#6eb7ff"}}))})),nt=function(t){var e=t.entity,n=t.settings,o=d(d({},rt),n),r="react_fast_diagram_flex_gap ";return"horizontal"===o.direction?r+="react_fast_diagram_flex_gap_x":r+="react_fast_diagram_flex_gap_y",i.a.createElement("div",{className:r,style:{"--gap":o.gapBetweenPorts}},Object.values(e).map((function(t){return i.a.createElement(et,{key:t.id,port:t})})))};function ot(t){return{component:nt,settings:d(d({},rt),t)}}var rt={direction:"horizontal",gapBetweenPorts:"8px"},it=function(){var t=this;this.portsContainerVisualComponents=new V({horizontal:ot({direction:"horizontal"}),vertical:ot({direction:"vertical"})}),this.fromJson=function(e){t.portsContainerVisualComponents.fromJson(null===e||void 0===e?void 0:e.portsContainerComponents)},Object(u.c)(this)},at=function(){function t(t){this.settings={},this.fromJson(t),Object(u.c)(this)}return t.prototype.fromJson=function(t){var e;"component"in t?(this.component=Object(c.a)(t.component),this.settings=null!==(e=t.settings)&&void 0!==e?e:{}):(this.component=Object(c.a)(t),this.settings={})},t}(),st=function(){function t(t){this._innerComponent=new at(t),this._defaultComponent=this._innerComponent,Object(u.c)(this)}return Object.defineProperty(t.prototype,"component",{get:function(){return this._innerComponent.component},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"settings",{get:function(){return this._innerComponent.settings},enumerable:!1,configurable:!0}),t.prototype.fromJson=function(t){this._innerComponent=t?new at(t):this._defaultComponent},t}(),ct=function(){function t(){this.scaleInterval=lt,this.backgroundComponentState=new st(function(t){var e=d(d({},m),t||{});return{component:h,settings:e}}()),this.miniControlComponentState=new st(bt()),Object(u.c)(this)}return t.prototype.fromJson=function(t){var e;this.backgroundComponentState.fromJson(null===t||void 0===t?void 0:t.backgroundComponent),this.miniControlComponentState.fromJson(null===t||void 0===t?void 0:t.miniControlComponent),this.scaleInterval=null!==(e=null===t||void 0===t?void 0:t.scaleInterval)&&void 0!==e?e:lt},t}(),lt=[.1,3],ut=function(){this.diagramState=new M(this),this.nodesStore=new tt(this),this.linksStore=new G(this),this.diagramSettings=new ct,this.nodesSettings=new K,this.linksSettings=new X,this.portsSettings=new it,this.diagramApi=new D(this)},ft=i.a.createContext(null),dt=function(t){var e=Object(r.useMemo)((function(){var e,n,o,r,i=new ut;return i.diagramApi.reinitState(null!==(n=null===(e=t.initState)||void 0===e?void 0:e.nodes)&&void 0!==n?n:[],null!==(r=null===(o=t.initState)||void 0===o?void 0:o.links)&&void 0!==r?r:[]),t.settings&&i.diagramApi.reinitSettings(t.settings),i}),[]);return Object(r.useEffect)((function(){t.apiRef&&(t.apiRef.current=e.diagramApi)}),[e,t.apiRef]),i.a.createElement(ft.Provider,{value:e},i.a.createElement(P,null))};dt.displayName="Diagram";var ht=function(){return Object(r.useContext)(ft)},mt=Object(c.a)((function(){var t=ht(),e=t.diagramSettings,n=t.diagramState;return i.a.createElement("div",{className:"react_fast_diagram_BackgroundWrapper"},i.a.createElement(e.backgroundComponentState.component,{diagramOffset:n.offset,diagramZoom:n.zoom,settings:e.backgroundComponentState.settings}))})),pt=function(t){var e=t.diagramApi,n=t.settings;return n=null!==n&&void 0!==n?n:_t,i.a.createElement("div",{className:"react_fast_diagram_Minicontrol_Default",style:d(d({},vt(n)),null===n||void 0===n?void 0:n.containerStyle)},n.buttons.zoomIn&&i.a.createElement(gt,{size:n.buttonsSize,onClick:e.zoomIn,children:"+"}),n.buttons.zoomOut&&i.a.createElement(gt,{size:n.buttonsSize,onClick:e.zoomOut,children:"-"}))};function vt(t){return{top:"left-top"==t.position||"right-top"==t.position?t.parentOffset:void 0,right:"right-bottom"==t.position||"right-top"==t.position?t.parentOffset:void 0,bottom:"left-bottom"==t.position||"right-bottom"==t.position?t.parentOffset:void 0,left:"left-top"==t.position||"left-bottom"==t.position?t.parentOffset:void 0}}var gt=function(t){return i.a.createElement("div",{onClick:t.onClick,className:"react_fast_diagram_Minicontrol_Default_Btn",style:{width:t.size+"px",height:t.size+"px"}},i.a.createElement("span",null,t.children))},bt=function(t){var e=d(d({},_t),t||{});return{component:pt,settings:e}},_t={position:"left-bottom",containerStyle:{},buttonsSize:30,buttons:{zoomIn:!0,zoomOut:!0},parentOffset:20},yt=n(93),St=n(100),Ot=n(34),zt=n(104),jt=n(95),Ct=n(102),kt=n(98),xt=n(99),wt=Object(yt.a)((function(){return{form:{display:"flex",flexDirection:"column",margin:"-8px 0","& > *":{margin:"8px 0"}},visibilityBtn:{borderRadius:"25px",minWidth:"24px",padding:"8px 8px",backgroundColor:"white"},header:{marginBottom:"15px",display:"flex",alignItems:"center",margin:"0 -14px","& > *":{margin:"0 14px"}}}})),It=function(t){var e=wt(),n=Object(r.useState)(10),i=Object(Ot.a)(n,2),a=i[0],s=i[1],c=Object(r.useState)(10),l=Object(Ot.a)(c,2),u=l[0],f=l[1],d=Object(r.useState)(!1),h=Object(Ot.a)(d,2),m=h[0],p=h[1];return m?Object(o.jsx)(St.a,{padding:3,clone:!0,children:Object(o.jsxs)(jt.a,{children:[Object(o.jsxs)("div",{className:e.header,children:[Object(o.jsx)(Ct.a,{className:e.visibilityBtn,variant:"outlined","aria-label":"control-panel",onClick:function(){return p(!1)},children:Object(o.jsx)(zt.a,{})}),Object(o.jsx)(kt.a,{variant:"h5",children:"Control Panel"})]}),Object(o.jsxs)("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),t.reinitState){var n=function(t,e){for(var n=[],o=[],r=function(t,e){return"node_".concat(t,"_").concat(e)},i=0;i<t;i++)for(var a=0;a<e;a++)n.push({id:r(i,a),position:[120*i,120*a],ports:{left:{type:"left"},top:{type:"top"},right:{type:"right"},bottom:{type:"bottom"}}}),i-1>=0&&o.push({source:{nodeId:r(i-1,a),portId:"right"},target:{nodeId:r(i,a),portId:"left"}}),a-1>=0&&o.push({source:{nodeId:r(i,a-1),portId:"bottom"},target:{nodeId:r(i,a),portId:"top"}});return{nodes:n,links:o}}(a,u);t.reinitState(n.nodes,n.links)}},children:[Object(o.jsx)(xt.a,{id:"rows",value:a,type:"number",label:"Rows",variant:"outlined",onChange:function(t){return s(parseInt(t.target.value))}}),Object(o.jsx)(xt.a,{id:"columns",value:u,type:"number",label:"Columns",variant:"outlined",onChange:function(t){return f(parseInt(t.target.value))}}),Object(o.jsx)(Ct.a,{variant:"contained",type:"submit",children:"Generate new Diagram"})]})]})}):Object(o.jsx)(Ct.a,{variant:"outlined",className:e.visibilityBtn,"aria-label":"control-panel",onClick:function(){return p(!0)},children:Object(o.jsx)(zt.a,{})})},Et=Object(yt.a)((function(){return{diagram:{position:"fixed",top:0,bottom:0,right:0,left:0},controlPanel:{position:"absolute",top:"20px",left:"20px"}}})),Pt=function(){var t,e=Et(),n=function(t,e){var n=p(null);return Object(r.useMemo)((function(){return{Diagram:function(){return i.a.createElement(dt,{apiRef:n,initState:t,settings:e})},apiRef:n}}),[])}(Dt,{links:{components:{default:F(),attention:F({color:"red"})},pathConstructor:R()},diagram:{miniControlComponent:bt({buttonsSize:30,position:"left-bottom"})}}),a=n.Diagram,s=n.apiRef;return Object(o.jsxs)(St.a,{className:e.diagram,children:[Object(o.jsx)(a,{}),Object(o.jsx)(St.a,{className:e.controlPanel,children:Object(o.jsx)(It,{reinitState:null===(t=s.current)||void 0===t?void 0:t.reinitState})})]})},Dt={nodes:[{id:"Node 1",position:[300,300],ports:{output_1:{type:"bottom"}}},{id:"Node 2",position:[520,400],ports:{input_1:{type:"top"},input_2:{type:"top"},output_1:{type:"right"},output_2:{type:"right"},output_3:{type:"right"}}},{id:"Node 3",position:[520,200],ports:{input_1:{type:"top"},output_1:{type:"bottom"},output_2:{type:"bottom"}}}],links:[{source:{nodeId:"Node 2"},target:{nodeId:"Node 1"},componentType:"attention"}]};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(Pt,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.bf964075.chunk.js.map