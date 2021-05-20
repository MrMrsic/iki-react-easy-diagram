(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[542],{

/***/ 6875:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Example; }
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ./src/pages/examples/_exampleWrapper.jsx
var _exampleWrapper = __webpack_require__(1713);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index.js + 11 modules
var CodeBlock = __webpack_require__(1642);
// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx + 1 modules
var _diagramContainer = __webpack_require__(1353);
;// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_configureUserInteractionDiagram.tsx
/* harmony default export */ var _configureUserInteractionDiagram = ("import React from 'react';\nimport {\n  createNode,\n  Diagram,\n  INodeVisualComponentProps,\n  IUserInteraction,\n  useRootStore,\n} from 'react-easy-diagram';\nimport { observer } from 'mobx-react-lite';\n\nexport default () => (\n  <Diagram\n    initState={{\n      nodes: [\n        {\n          id: 'Node 1',\n          label: 'Node with drag disabled',\n          position: [450, 50],\n          componentType: 'input_output_vertical',\n          isDragEnabled: false, // specifying this property in the element overrides diagram settings\n        },\n        {\n          id: 'Node 2',\n          label: 'Node with selection disabled',\n          position: [450, -100],\n          componentType: 'output_vertical',\n          isSelectionEnabled: false,\n        },\n        {\n          id: 'Node 3',\n          label: 'Node that use default diagram settings',\n          position: [450, 200],\n          componentType: 'input_vertical',\n        },\n        {\n          id: 'Node 4',\n          label: 'Node with disabled port',\n          position: [100, 200],\n          componentType: 'disabled_port',\n        },\n        {\n          id: 'Node 5',\n          label: 'Node with drag enabled (overrides diagram settings)',\n          position: [100, 120],\n          isDragEnabled: true,\n        },\n        {\n          id: 'Configurator',\n          position: [100, -100],\n          componentType: 'config',\n          isSelectionEnabled: false,\n        },\n      ],\n      links: [\n        {\n          source: { nodeId: 'Node 1', portId: 'output' },\n          target: { nodeId: 'Node 3', portId: 'input' },\n        },\n        {\n          source: { nodeId: 'Node 1', portId: 'input' },\n          target: { nodeId: 'Node 2', portId: 'output' },\n          isSelectionEnabled: false,\n        },\n      ],\n    }}\n    settings={{\n      nodes: {\n        components: {\n          config: Configurator,\n          disabled_port: createNode({\n            ports: [{ id: 'port', position: 'right-center', isConnectionEnabled: false }],\n          })\n        },\n      },\n    }}\n  />\n);\n\nconst Configurator = observer<INodeVisualComponentProps>(({ draggableRef }) => {\n  const { diagramSettings } = useRootStore();\n\n  return (\n    <div className='react_fast_diagram_Node_Default' ref={draggableRef}>\n      <div>\n        <b>Diagram user interaction configuration</b>\n      </div>\n      <div style={{ width: '100%', textAlign: 'left', marginTop: '10px' }}>\n        <UserInteractionCheckbox userInteractionPropertyName='diagramZoom' />\n        <UserInteractionCheckbox userInteractionPropertyName='diagramPan' />\n        <UserInteractionCheckbox userInteractionPropertyName='nodeDrag' />\n        <UserInteractionCheckbox userInteractionPropertyName='portConnection' />\n        <UserInteractionCheckbox userInteractionPropertyName='nodeSelection' />\n        <UserInteractionCheckbox userInteractionPropertyName='linkSelection' />\n      </div>\n    </div>\n  );\n});\n\nconst UserInteractionCheckbox = observer<{\n  userInteractionPropertyName: keyof IUserInteraction;\n}>(({ userInteractionPropertyName }) => {\n  const { diagramSettings } = useRootStore();\n\n  return (\n    <div>\n      <input\n        name={userInteractionPropertyName}\n        type='checkbox'\n        checked={diagramSettings.userInteraction[userInteractionPropertyName]}\n        onChange={(event) =>\n          (diagramSettings.userInteraction[userInteractionPropertyName] = event.target.checked)\n        }\n      />\n      <label\n        htmlFor={userInteractionPropertyName}\n        style={{ paddingLeft: '10px' }}\n      >\n        {userInteractionPropertyName}\n      </label>\n    </div>\n  );\n});\n");
// EXTERNAL MODULE: ../lib/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(4714);
// EXTERNAL MODULE: ../node_modules/mobx-react-lite/es/index.js + 17 modules
var es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./src/pages/examples/_configureUserInteractionDiagram.tsx
/* harmony default export */ var examples_configureUserInteractionDiagram = (function(){return/*#__PURE__*/react.createElement(index_esm.Diagram,{initState:{nodes:[{id:'Node 1',label:'Node with drag disabled',position:[450,50],componentType:'input_output_vertical',isDragEnabled:false// specifying this property in the element overrides diagram settings
},{id:'Node 2',label:'Node with selection disabled',position:[450,-100],componentType:'output_vertical',isSelectionEnabled:false},{id:'Node 3',label:'Node that use default diagram settings',position:[450,200],componentType:'input_vertical'},{id:'Node 4',label:'Node with disabled port',position:[100,200],componentType:'disabled_port'},{id:'Node 5',label:'Node with drag enabled (overrides diagram settings)',position:[100,120],isDragEnabled:true},{id:'Configurator',position:[100,-100],componentType:'config',isSelectionEnabled:false}],links:[{source:{nodeId:'Node 1',portId:'output'},target:{nodeId:'Node 3',portId:'input'}},{source:{nodeId:'Node 1',portId:'input'},target:{nodeId:'Node 2',portId:'output'},isSelectionEnabled:false}]},settings:{nodes:{components:{config:Configurator,disabled_port:(0,index_esm.createNode)({ports:[{id:'port',position:'right-center',isConnectionEnabled:false}]})}}}});});var Configurator=(0,es/* observer */.Pi)(function(_ref){var draggableRef=_ref.draggableRef;var _useRootStore=(0,index_esm.useRootStore)(),diagramSettings=_useRootStore.diagramSettings;return/*#__PURE__*/react.createElement("div",{className:"react_fast_diagram_Node_Default",ref:draggableRef},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("b",null,"Diagram user interaction configuration")),/*#__PURE__*/react.createElement("div",{style:{width:'100%',textAlign:'left',marginTop:'10px'}},/*#__PURE__*/react.createElement(UserInteractionCheckbox,{userInteractionPropertyName:"diagramZoom"}),/*#__PURE__*/react.createElement(UserInteractionCheckbox,{userInteractionPropertyName:"diagramPan"}),/*#__PURE__*/react.createElement(UserInteractionCheckbox,{userInteractionPropertyName:"nodeDrag"}),/*#__PURE__*/react.createElement(UserInteractionCheckbox,{userInteractionPropertyName:"portConnection"}),/*#__PURE__*/react.createElement(UserInteractionCheckbox,{userInteractionPropertyName:"nodeSelection"}),/*#__PURE__*/react.createElement(UserInteractionCheckbox,{userInteractionPropertyName:"linkSelection"})));});var UserInteractionCheckbox=(0,es/* observer */.Pi)(function(_ref2){var userInteractionPropertyName=_ref2.userInteractionPropertyName;var _useRootStore2=(0,index_esm.useRootStore)(),diagramSettings=_useRootStore2.diagramSettings;return/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("input",{name:userInteractionPropertyName,type:"checkbox",checked:diagramSettings.userInteraction[userInteractionPropertyName],onChange:function onChange(event){return diagramSettings.userInteraction[userInteractionPropertyName]=event.target.checked;}}),/*#__PURE__*/react.createElement("label",{htmlFor:userInteractionPropertyName,style:{paddingLeft:'10px'}},userInteractionPropertyName));});
;// CONCATENATED MODULE: ./src/pages/examples/configureUserInteraction.jsx
function Example(){return/*#__PURE__*/react.createElement(_exampleWrapper/* ExampleWrapper */.U,{title:"Configure user interaction"},/*#__PURE__*/react.createElement(_diagramContainer/* DiagramContainer */.G,null,/*#__PURE__*/react.createElement(examples_configureUserInteractionDiagram,null)),/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,{className:"language-jsx"},_configureUserInteractionDiagram));}

/***/ })

}]);