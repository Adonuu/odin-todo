/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#navBar {
    grid-area: navBar;
    background-color: darkolivegreen;
    color: white;
}

#content {
    grid-area: content;
    width: 100%;
    height: 100%;
}

#header {
    padding: 10px 10px;
    grid-area: header;
    background-color: darkslategray;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
    color: white;
}

#createTodo {
    width: 150px;
}

body {
    padding: 0;
    margin: 0;
    display: grid;
    height: 100vh;
    grid-template-areas:
        "navBar header" 
        "navBar content";
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 10fr;
}

#navBar {
    padding: 10px;
}

#project {
    border-bottom: 1px solid white;
}

#projectSection {
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
}

.projectListItem {
    height: 1.5rem;
    font-size: 1.25rem;
    padding-left: 10px;
    border-radius: 10px;
}

.projectListItem:hover {
    background-color: darkslategray;
}

button {
    border-radius: 10px;
    border-style: none;
}

h2 {
    margin: 0;
}

#projectTodos {
    padding: 10px;
}

.todo {
    display: flex;
    flex-flow: column nowrap;
    background-color: darkred;
    width: 12rem;
    height: 17rem;
    padding: 10px;
    color: white;
}

.todoDetail {
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
    height: 90%;
}

.todoTitle {
    text-align: center;
    font-size: 1.25rem;
}

.complete {
    background-color: darkgreen;
}

dialog {
    border-style: none;
    border-radius: 10px;
    background-color: darkolivegreen;
    color: white;
}

form {
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
}

form > * {
    border-style: none;
    padding: 10px;
    border-radius: 10px;
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,+BAA+B;IAC/B,aAAa;IACb,qBAAqB;IACrB,8BAA8B;IAC9B,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,aAAa;IACb,aAAa;IACb;;wBAEoB;IACpB,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB","sourcesContent":["#navBar {\r\n    grid-area: navBar;\r\n    background-color: darkolivegreen;\r\n    color: white;\r\n}\r\n\r\n#content {\r\n    grid-area: content;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#header {\r\n    padding: 10px 10px;\r\n    grid-area: header;\r\n    background-color: darkslategray;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    color: white;\r\n}\r\n\r\n#createTodo {\r\n    width: 150px;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    display: grid;\r\n    height: 100vh;\r\n    grid-template-areas:\r\n        \"navBar header\" \r\n        \"navBar content\";\r\n    grid-template-columns: 1fr 5fr;\r\n    grid-template-rows: 1fr 10fr;\r\n}\r\n\r\n#navBar {\r\n    padding: 10px;\r\n}\r\n\r\n#project {\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n#projectSection {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    gap: 10px;\r\n}\r\n\r\n.projectListItem {\r\n    height: 1.5rem;\r\n    font-size: 1.25rem;\r\n    padding-left: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.projectListItem:hover {\r\n    background-color: darkslategray;\r\n}\r\n\r\nbutton {\r\n    border-radius: 10px;\r\n    border-style: none;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\n#projectTodos {\r\n    padding: 10px;\r\n}\r\n\r\n.todo {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    background-color: darkred;\r\n    width: 12rem;\r\n    height: 17rem;\r\n    padding: 10px;\r\n    color: white;\r\n}\r\n\r\n.todoDetail {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    gap: 10px;\r\n    height: 90%;\r\n}\r\n\r\n.todoTitle {\r\n    text-align: center;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.complete {\r\n    background-color: darkgreen;\r\n}\r\n\r\ndialog {\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    background-color: darkolivegreen;\r\n    color: white;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    gap: 10px;\r\n}\r\n\r\nform > * {\r\n    border-style: none;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DomRender.js":
/*!**************************!*\
  !*** ./src/DomRender.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProject: () => (/* binding */ renderProject),
/* harmony export */   renderProjectList: () => (/* binding */ renderProjectList)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _eventEmitter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventEmitter.js */ "./src/eventEmitter.js");





const projectDisplay = document.querySelector('#projectTodos');
const projectListDisplay = document.querySelector('#projectList');

function renderProject(project) {
    projectDisplay.innerHTML= '';
    project.getTodoList().forEach((val) => {
        projectDisplay.appendChild(renderToDo(val, project));;
    });
}

function renderToDo(todo, project) {
    let baseDiv = document.createElement('div');
    baseDiv.classList.add('todo');
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('todoTitle');
    titleDiv.innerHTML = todo.getTitle();
    baseDiv.appendChild(titleDiv);
    let details = createToDoDetails(todo, project);
    baseDiv.appendChild(details);
    baseDiv = displayToDoDetails(baseDiv, details);
    if (todo.getComplete() === true) {
        baseDiv.classList.add('complete');
    }
    return baseDiv;
}

function createToDoDetails(todo, project) {
    let detailDiv = document.createElement('div');
    detailDiv.style.display = 'none';
    detailDiv.classList.add('todoDetail');
    let priorityDiv = createToDoPropertyDisplay('Priority', todo.getPriority(), todo.getTitle().replace(/\s/g, ''));
    detailDiv.appendChild(priorityDiv);
    let dateDiv = createToDoPropertyDisplay('Due Date', todo.getDueDate(), todo.getTitle().replace(/\s/g, ''), "date");
    detailDiv.appendChild(dateDiv);
    let descriptionDiv = createToDoPropertyDisplay('Description', todo.getDescription(), todo.getTitle().replace(/\s/g, ''));
    detailDiv.appendChild(descriptionDiv);
    let completeDiv = createToDoPropertyDisplay('Complete', todo.getComplete(), todo.getTitle().replace(/\s/g, ''), "checkbox");
    detailDiv.appendChild(completeDiv);
    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', (event) => editButtonOnClick(event.target, project));
    detailDiv.appendChild(editButton);
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', (event) => deleteButtonOnClick(event.target, project));
    detailDiv.appendChild(deleteButton);
    return detailDiv;
}

function displayToDoDetails(todoDiv, detailDiv) {
    todoDiv.firstChild.addEventListener('click', () => {
        if (detailDiv.style.display === 'none') {
            detailDiv.style.display = 'flex';
        } else {
            detailDiv.style.display = 'none';
        }
    });
    return todoDiv;
}

function createToDoPropertyDisplay(property, value, name, inputType) {
    let baseDiv = document.createElement('div');
    baseDiv.id = name + property.replace(/\s/g, '');
    baseDiv.classList.add('propertyDisplay');
    let descriptionDiv = document.createElement('div');
    descriptionDiv.innerHTML = property + ':';
    let valueDiv = document.createElement('input');
    if (inputType === "checkbox")
    {
        valueDiv.type = "checkbox";
        valueDiv.checked = value;
    }
    else if (inputType === "date") {
        valueDiv.type = "date";
        valueDiv.value = value;
    } else {
        valueDiv.value = value;
    }
    valueDiv.disabled = true;
    baseDiv.appendChild(descriptionDiv);
    baseDiv.appendChild(valueDiv);
    return baseDiv;

}

function editButtonOnClick(event, project) {
    if (event.innerHTML === 'Edit') {
        event.innerHTML = 'Save';
        let children = event.parentElement.children;
        // skip over last child since it is a button
        for (let i = 0; i < children.length - 1; i++ ) {
            let child = children[i];
            child.lastChild.disabled = false;
        }
    } else {
        event.innerHTML = 'Edit';
        // grab current info from input boxes
        // get to do name for help identifying input boxes
        let todoName = event.parentElement.parentElement.firstChild.innerHTML;
        let todoNameNoSpaces = event.parentElement.parentElement.firstChild.innerHTML.replace(/\s/g, '');
        let priority = document.querySelector('#' + todoNameNoSpaces + 'Priority');
        let dueDate = document.querySelector('#' + todoNameNoSpaces + 'DueDate');
        let description = document.querySelector('#' + todoNameNoSpaces + 'Description');
        let complete = document.querySelector('#' + todoNameNoSpaces + 'Complete');
        // grab todo note
        let todo = project.getToDo(todoName);
        // modify todo with new values
        todo.setPriority(priority.lastChild.value);
        todo.setDueDate(dueDate.lastChild.value);
        todo.setDescription(description.lastChild.value);
        todo.setComplete(complete.lastChild.checked);
        if (todo.getComplete() === true) {
            event.parentElement.parentElement.parentElement.firstChild.classList.add('complete');
        } else {
            event.parentElement.parentElement.parentElement.firstChild.classList.remove('complete');
        }
        // disable the inputs
        let children = event.parentElement.children;
        for (let i = 0; i < children.length - 1; i++ ) {
            let child = children[i];
            child.lastChild.disabled = true;
        }
        // save to todo
        project.saveToDo(todo);

        // send event to index.js to save projects
        const saveEvent = new CustomEvent('saveProject', project);
        _eventEmitter_js__WEBPACK_IMPORTED_MODULE_3__["default"].dispatchEvent(saveEvent);
    }
}

function deleteButtonOnClick(event, project) {
    let todoName = event.parentElement.parentElement.firstChild.innerHTML;
    let todo = project.getToDo(todoName);
    project.removeToDo(todo);
    renderProject(project);
    // send event to index.js to save projects
    const saveEvent = new CustomEvent('saveProject', project);
    _eventEmitter_js__WEBPACK_IMPORTED_MODULE_3__["default"].dispatchEvent(saveEvent);
}

function renderProjectList(projects) {
    projectListDisplay.innerHTML = '';
    projects.forEach((val) => {
        let div = document.createElement('div');
        div.innerHTML = val.getTitle();
        div.classList.add('projectListItem');
        projectListDisplay.appendChild(div);
        div.addEventListener('click', (event) => {
            projectDisplay.innerHTML = '';
            document.querySelector('#projectSection').setAttribute('currentProject', (0,___WEBPACK_IMPORTED_MODULE_1__.getProject)(event.target.innerHTML).getTitle());
            renderProject((0,___WEBPACK_IMPORTED_MODULE_1__.getProject)(event.target.innerHTML));
        });
    })
}



/***/ }),

/***/ "./src/eventEmitter.js":
/*!*****************************!*\
  !*** ./src/eventEmitter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const eventEmmiter = new EventTarget();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventEmmiter);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProject: () => (/* binding */ getProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _DomRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomRender */ "./src/DomRender.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _eventEmitter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventEmitter.js */ "./src/eventEmitter.js");







// read data from local storage
let projects = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.readStorage)();

// render project list on startup
(0,_DomRender__WEBPACK_IMPORTED_MODULE_2__.renderProjectList)(projects);

// html elements
const createProjectButton = document.querySelector('#createProjectButton');
const createProjectDialog = document.querySelector('#createProjectDialog');
const closeCreateProjectDialog = document.querySelector('#closeCreateProjectDialog');
const createProjectForm = document.querySelector('#createProjectForm');
const createTodoButton = document.querySelector('#createTodo');
const createTodoDialog = document.querySelector('#createTodoDialog');
const closeCreateTodoDialog = document.querySelector('#closeCreateTodoDialog');
const createTodoForm = document.querySelector('#createTodoForm');
const projectSection = document.querySelector('#projectSection');


// show create project dialog when createProjectButton is pressed
createProjectButton.addEventListener('click', () => {
    createProjectDialog.showModal();
});

// close create project dialog when closeCreateProjectDialog is pressed
closeCreateProjectDialog.addEventListener('click', (e) => {
    createProjectDialog.close();
});

// when create project form is submitted add project to projects list
createProjectForm.addEventListener('submit', (e) => {
    let projectTitle = e.target.querySelector('#projectTitleInput').value;
    let projectToAdd = new _project__WEBPACK_IMPORTED_MODULE_0__.project(projectTitle);
    addProjectToProjects(projectToAdd);
    (0,_DomRender__WEBPACK_IMPORTED_MODULE_2__.renderProjectList)(projects);
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveStorage)(projects);
});

// show create todo dialog when createTodoButton is pressed
createTodoButton.addEventListener('click', () => {
    createTodoDialog.showModal();
});

// close create todo dialog when the closeToDoDialog is pressed
closeCreateTodoDialog.addEventListener('click', () => {
    createTodoDialog.close();
});

// when create todo form is submitted add todo to the project
createTodoForm.addEventListener('submit', (e) => {
    // get current project
    let currentProject = getProject(projectSection.getAttribute('currentProject'));
    console.log(currentProject);
    // get information from form
    let todoTitle = e.target.querySelector('#todoTitleInput').value;
    let todoPriority = e.target.querySelector('#todoPriorityInput').value;
    let todoDueDate = e.target.querySelector('#todoDueDateInput').value;
    let todoDescription = e.target.querySelector('#todoDescriptionInput').value;
    // create new todo
    let todoToAdd = new _todo__WEBPACK_IMPORTED_MODULE_1__.todo(todoTitle, todoDescription, todoDueDate, todoPriority);
    // add todo to project
    currentProject.addToDo(todoToAdd);
    // re-render project display
    (0,_DomRender__WEBPACK_IMPORTED_MODULE_2__.renderProject)(currentProject);
    // re-write data to local storage
   (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveStorage)(projects);
});

// function used to return the right project to DomRender.js when rendering the content on click of each project in the project list
function getProject(projectTitle) {
    let returnValue;
    projects.forEach((val) => {
        if (val.getTitle() === projectTitle) {
            returnValue = val;
        }
    });
    return returnValue;
}

function addProjectToProjects(project) {
    // check to see if there is already a project that exists
    let duplicateProject = false;
    projects.forEach((val) => {
        if (val.getTitle === project.getTitle()) {
            duplicateProject = true;
        }
    });
    if (duplicateProject) {
        // throw error
    } else {
        // add project to list
        projects.push(project);
    }
}

// listen to event from DomRender
_eventEmitter_js__WEBPACK_IMPORTED_MODULE_5__["default"].addEventListener('saveProject', (event) => {
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveStorage)(projects);
});

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project)
/* harmony export */ });
class project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getTodoList() {
        return this.todoList;
    }

    addToDo(todo) {
        this.todoList.push(todo);
    }

    removeToDo(todo) {
        this.todoList.forEach((val, i) => {
            if (val.getTitle() === todo.getTitle()) {
                this.todoList.splice(i, 1);
            }
        });
    }

    getToDo(todoTitle) {
        let returnValue;
        this.todoList.forEach((val) => {
            if (val.getTitle() === todoTitle) {
                returnValue =  val;
            }
        });
        return returnValue;
    }

    saveToDo(todo) {
        this.removeToDo(todo);
        this.addToDo(todo);
    }
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readStorage: () => (/* binding */ readStorage),
/* harmony export */   saveStorage: () => (/* binding */ saveStorage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



function readStorage() {
    // grab projects form local storage if it is there
    let projects = JSON.parse(localStorage.getItem('obsinotionProjectStorage'));
    // if there is nothing in the local storage make an empty array
    if (projects === null) {
        projects = [];
    }
    // loop through and set each projects prototype to a project type
    projects.forEach((val) => {
        val.__proto__ = new _project__WEBPACK_IMPORTED_MODULE_0__.project();
        val.getTodoList().forEach((note) => {
            note.__proto__ = new _todo__WEBPACK_IMPORTED_MODULE_1__.todo();
        });
    });

    return projects;
}

function saveStorage(projects) {
    localStorage.setItem('obsinotionProjectStorage', JSON.stringify(projects));
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todo: () => (/* binding */ todo)
/* harmony export */ });
class todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDueDate(date) {
        this.dueDate = date;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    setComplete(value) {
        this.complete = value;
    }

    getComplete() {
        return this.complete;
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxtQ0FBbUMsMEJBQTBCLHlDQUF5QyxxQkFBcUIsS0FBSyxrQkFBa0IsMkJBQTJCLG9CQUFvQixxQkFBcUIsS0FBSyxpQkFBaUIsMkJBQTJCLDBCQUEwQix3Q0FBd0Msc0JBQXNCLDhCQUE4Qix1Q0FBdUMsOEJBQThCLHFCQUFxQixLQUFLLHFCQUFxQixxQkFBcUIsS0FBSyxjQUFjLG1CQUFtQixrQkFBa0Isc0JBQXNCLHNCQUFzQix5RkFBeUYsdUNBQXVDLHFDQUFxQyxLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyxrQkFBa0IsdUNBQXVDLEtBQUsseUJBQXlCLHNCQUFzQixpQ0FBaUMsa0JBQWtCLEtBQUssMEJBQTBCLHVCQUF1QiwyQkFBMkIsMkJBQTJCLDRCQUE0QixLQUFLLGdDQUFnQyx3Q0FBd0MsS0FBSyxnQkFBZ0IsNEJBQTRCLDJCQUEyQixLQUFLLFlBQVksa0JBQWtCLEtBQUssdUJBQXVCLHNCQUFzQixLQUFLLGVBQWUsc0JBQXNCLGlDQUFpQyxrQ0FBa0MscUJBQXFCLHNCQUFzQixzQkFBc0IscUJBQXFCLEtBQUsscUJBQXFCLHNCQUFzQixpQ0FBaUMsa0JBQWtCLG9CQUFvQixLQUFLLG9CQUFvQiwyQkFBMkIsMkJBQTJCLEtBQUssbUJBQW1CLG9DQUFvQyxLQUFLLGdCQUFnQiwyQkFBMkIsNEJBQTRCLHlDQUF5QyxxQkFBcUIsS0FBSyxjQUFjLHNCQUFzQixpQ0FBaUMsa0JBQWtCLEtBQUssa0JBQWtCLDJCQUEyQixzQkFBc0IsNEJBQTRCLEtBQUssbUJBQW1CO0FBQ3RtRztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy9IMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiOEI7QUFDQztBQUNLO0FBQ1M7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFZO0FBQ2hCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUYsNkNBQVU7QUFDL0YsMEJBQTBCLDZDQUFVO0FBQ3BDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEtBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUztBQUNOO0FBQ2lDO0FBQ1Y7QUFDaEM7QUFDd0I7QUFDN0M7QUFDQTtBQUNBLGVBQWUscURBQVc7QUFDMUI7QUFDQTtBQUNBLDZEQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2Q0FBTztBQUNsQztBQUNBLElBQUksNkRBQWlCO0FBQ3JCLElBQUkscURBQVc7QUFDZixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWE7QUFDakI7QUFDQSxHQUFHLHFEQUFXO0FBQ2QsQ0FBQztBQUNEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBWTtBQUNaLElBQUkscURBQVc7QUFDZixDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3hHTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q29DO0FBQ047QUFDOUI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkNBQU87QUFDbkM7QUFDQSxpQ0FBaUMsdUNBQUk7QUFDckMsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvRG9tUmVuZGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI25hdkJhciB7XHJcbiAgICBncmlkLWFyZWE6IG5hdkJhcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvbGl2ZWdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jY3JlYXRlVG9kbyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcIm5hdkJhciBoZWFkZXJcIiBcclxuICAgICAgICBcIm5hdkJhciBjb250ZW50XCI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xyXG59XHJcblxyXG4jbmF2QmFyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNwcm9qZWN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuI3Byb2plY3RTZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0TGlzdEl0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdExpc3RJdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNwcm9qZWN0VG9kb3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRvZG8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgICBoZWlnaHQ6IDE3cmVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvZG9EZXRhaWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4udG9kb1RpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG5cclxuLmNvbXBsZXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcclxufVxyXG5cclxuZGlhbG9nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5mb3JtID4gKiB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYjs7d0JBRW9CO0lBQ3BCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI25hdkJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2QmFyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZVRvZG8ge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICBcXFwibmF2QmFyIGhlYWRlclxcXCIgXFxyXFxuICAgICAgICBcXFwibmF2QmFyIGNvbnRlbnRcXFwiO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxyXFxufVxcclxcblxcclxcbiNuYXZCYXIge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RTZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdEl0ZW0ge1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdEl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdFRvZG9zIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxyXFxuICAgIHdpZHRoOiAxMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxN3JlbTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb0RldGFpbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9UaXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxyXFxufVxcclxcblxcclxcbmRpYWxvZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29saXZlZ3JlZW47XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gKiB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xyXG5pbXBvcnQgeyBnZXRQcm9qZWN0IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IGV2ZW50RW1taXRlciBmcm9tIFwiLi9ldmVudEVtaXR0ZXIuanNcIjtcclxuXHJcbmNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUb2RvcycpO1xyXG5jb25zdCBwcm9qZWN0TGlzdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHByb2plY3REaXNwbGF5LmlubmVySFRNTD0gJyc7XHJcbiAgICBwcm9qZWN0LmdldFRvZG9MaXN0KCkuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocmVuZGVyVG9Ebyh2YWwsIHByb2plY3QpKTs7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVG9Ebyh0b2RvLCBwcm9qZWN0KSB7XHJcbiAgICBsZXQgYmFzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFzZURpdi5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZScpO1xyXG4gICAgdGl0bGVEaXYuaW5uZXJIVE1MID0gdG9kby5nZXRUaXRsZSgpO1xyXG4gICAgYmFzZURpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgICBsZXQgZGV0YWlscyA9IGNyZWF0ZVRvRG9EZXRhaWxzKHRvZG8sIHByb2plY3QpO1xyXG4gICAgYmFzZURpdi5hcHBlbmRDaGlsZChkZXRhaWxzKTtcclxuICAgIGJhc2VEaXYgPSBkaXNwbGF5VG9Eb0RldGFpbHMoYmFzZURpdiwgZGV0YWlscyk7XHJcbiAgICBpZiAodG9kby5nZXRDb21wbGV0ZSgpID09PSB0cnVlKSB7XHJcbiAgICAgICAgYmFzZURpdi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJhc2VEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvRG9EZXRhaWxzKHRvZG8sIHByb2plY3QpIHtcclxuICAgIGxldCBkZXRhaWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRldGFpbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZGV0YWlsRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXRhaWwnKTtcclxuICAgIGxldCBwcmlvcml0eURpdiA9IGNyZWF0ZVRvRG9Qcm9wZXJ0eURpc3BsYXkoJ1ByaW9yaXR5JywgdG9kby5nZXRQcmlvcml0eSgpLCB0b2RvLmdldFRpdGxlKCkucmVwbGFjZSgvXFxzL2csICcnKSk7XHJcbiAgICBkZXRhaWxEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xyXG4gICAgbGV0IGRhdGVEaXYgPSBjcmVhdGVUb0RvUHJvcGVydHlEaXNwbGF5KCdEdWUgRGF0ZScsIHRvZG8uZ2V0RHVlRGF0ZSgpLCB0b2RvLmdldFRpdGxlKCkucmVwbGFjZSgvXFxzL2csICcnKSwgXCJkYXRlXCIpO1xyXG4gICAgZGV0YWlsRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uRGl2ID0gY3JlYXRlVG9Eb1Byb3BlcnR5RGlzcGxheSgnRGVzY3JpcHRpb24nLCB0b2RvLmdldERlc2NyaXB0aW9uKCksIHRvZG8uZ2V0VGl0bGUoKS5yZXBsYWNlKC9cXHMvZywgJycpKTtcclxuICAgIGRldGFpbERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XHJcbiAgICBsZXQgY29tcGxldGVEaXYgPSBjcmVhdGVUb0RvUHJvcGVydHlEaXNwbGF5KCdDb21wbGV0ZScsIHRvZG8uZ2V0Q29tcGxldGUoKSwgdG9kby5nZXRUaXRsZSgpLnJlcGxhY2UoL1xccy9nLCAnJyksIFwiY2hlY2tib3hcIik7XHJcbiAgICBkZXRhaWxEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVEaXYpO1xyXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gJ0VkaXQnO1xyXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gZWRpdEJ1dHRvbk9uQ2xpY2soZXZlbnQudGFyZ2V0LCBwcm9qZWN0KSk7XHJcbiAgICBkZXRhaWxEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJ0RlbGV0ZSc7XHJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IGRlbGV0ZUJ1dHRvbk9uQ2xpY2soZXZlbnQudGFyZ2V0LCBwcm9qZWN0KSk7XHJcbiAgICBkZXRhaWxEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgIHJldHVybiBkZXRhaWxEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb0RvRGV0YWlscyh0b2RvRGl2LCBkZXRhaWxEaXYpIHtcclxuICAgIHRvZG9EaXYuZmlyc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoZGV0YWlsRGl2LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICBkZXRhaWxEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZXRhaWxEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b2RvRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb0RvUHJvcGVydHlEaXNwbGF5KHByb3BlcnR5LCB2YWx1ZSwgbmFtZSwgaW5wdXRUeXBlKSB7XHJcbiAgICBsZXQgYmFzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFzZURpdi5pZCA9IG5hbWUgKyBwcm9wZXJ0eS5yZXBsYWNlKC9cXHMvZywgJycpO1xyXG4gICAgYmFzZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9wZXJ0eURpc3BsYXknKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuaW5uZXJIVE1MID0gcHJvcGVydHkgKyAnOic7XHJcbiAgICBsZXQgdmFsdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaWYgKGlucHV0VHlwZSA9PT0gXCJjaGVja2JveFwiKVxyXG4gICAge1xyXG4gICAgICAgIHZhbHVlRGl2LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgdmFsdWVEaXYuY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaW5wdXRUeXBlID09PSBcImRhdGVcIikge1xyXG4gICAgICAgIHZhbHVlRGl2LnR5cGUgPSBcImRhdGVcIjtcclxuICAgICAgICB2YWx1ZURpdi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZURpdi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdmFsdWVEaXYuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgYmFzZURpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XHJcbiAgICBiYXNlRGl2LmFwcGVuZENoaWxkKHZhbHVlRGl2KTtcclxuICAgIHJldHVybiBiYXNlRGl2O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdEJ1dHRvbk9uQ2xpY2soZXZlbnQsIHByb2plY3QpIHtcclxuICAgIGlmIChldmVudC5pbm5lckhUTUwgPT09ICdFZGl0Jykge1xyXG4gICAgICAgIGV2ZW50LmlubmVySFRNTCA9ICdTYXZlJztcclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBldmVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgICAgIC8vIHNraXAgb3ZlciBsYXN0IGNoaWxkIHNpbmNlIGl0IGlzIGEgYnV0dG9uXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGggLSAxOyBpKysgKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBjaGlsZC5sYXN0Q2hpbGQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LmlubmVySFRNTCA9ICdFZGl0JztcclxuICAgICAgICAvLyBncmFiIGN1cnJlbnQgaW5mbyBmcm9tIGlucHV0IGJveGVzXHJcbiAgICAgICAgLy8gZ2V0IHRvIGRvIG5hbWUgZm9yIGhlbHAgaWRlbnRpZnlpbmcgaW5wdXQgYm94ZXNcclxuICAgICAgICBsZXQgdG9kb05hbWUgPSBldmVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lckhUTUw7XHJcbiAgICAgICAgbGV0IHRvZG9OYW1lTm9TcGFjZXMgPSBldmVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lckhUTUwucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRvZG9OYW1lTm9TcGFjZXMgKyAnUHJpb3JpdHknKTtcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdG9kb05hbWVOb1NwYWNlcyArICdEdWVEYXRlJyk7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0b2RvTmFtZU5vU3BhY2VzICsgJ0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0b2RvTmFtZU5vU3BhY2VzICsgJ0NvbXBsZXRlJyk7XHJcbiAgICAgICAgLy8gZ3JhYiB0b2RvIG5vdGVcclxuICAgICAgICBsZXQgdG9kbyA9IHByb2plY3QuZ2V0VG9Ebyh0b2RvTmFtZSk7XHJcbiAgICAgICAgLy8gbW9kaWZ5IHRvZG8gd2l0aCBuZXcgdmFsdWVzXHJcbiAgICAgICAgdG9kby5zZXRQcmlvcml0eShwcmlvcml0eS5sYXN0Q2hpbGQudmFsdWUpO1xyXG4gICAgICAgIHRvZG8uc2V0RHVlRGF0ZShkdWVEYXRlLmxhc3RDaGlsZC52YWx1ZSk7XHJcbiAgICAgICAgdG9kby5zZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbi5sYXN0Q2hpbGQudmFsdWUpO1xyXG4gICAgICAgIHRvZG8uc2V0Q29tcGxldGUoY29tcGxldGUubGFzdENoaWxkLmNoZWNrZWQpO1xyXG4gICAgICAgIGlmICh0b2RvLmdldENvbXBsZXRlKCkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgZXZlbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZGlzYWJsZSB0aGUgaW5wdXRzXHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gZXZlbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkrKyApIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGNoaWxkLmxhc3RDaGlsZC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNhdmUgdG8gdG9kb1xyXG4gICAgICAgIHByb2plY3Quc2F2ZVRvRG8odG9kbyk7XHJcblxyXG4gICAgICAgIC8vIHNlbmQgZXZlbnQgdG8gaW5kZXguanMgdG8gc2F2ZSBwcm9qZWN0c1xyXG4gICAgICAgIGNvbnN0IHNhdmVFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2F2ZVByb2plY3QnLCBwcm9qZWN0KTtcclxuICAgICAgICBldmVudEVtbWl0ZXIuZGlzcGF0Y2hFdmVudChzYXZlRXZlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVCdXR0b25PbkNsaWNrKGV2ZW50LCBwcm9qZWN0KSB7XHJcbiAgICBsZXQgdG9kb05hbWUgPSBldmVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5pbm5lckhUTUw7XHJcbiAgICBsZXQgdG9kbyA9IHByb2plY3QuZ2V0VG9Ebyh0b2RvTmFtZSk7XHJcbiAgICBwcm9qZWN0LnJlbW92ZVRvRG8odG9kbyk7XHJcbiAgICByZW5kZXJQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgLy8gc2VuZCBldmVudCB0byBpbmRleC5qcyB0byBzYXZlIHByb2plY3RzXHJcbiAgICBjb25zdCBzYXZlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3NhdmVQcm9qZWN0JywgcHJvamVjdCk7XHJcbiAgICBldmVudEVtbWl0ZXIuZGlzcGF0Y2hFdmVudChzYXZlRXZlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdExpc3QocHJvamVjdHMpIHtcclxuICAgIHByb2plY3RMaXN0RGlzcGxheS5pbm5lckhUTUwgPSAnJztcclxuICAgIHByb2plY3RzLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gdmFsLmdldFRpdGxlKCk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaXN0SXRlbScpO1xyXG4gICAgICAgIHByb2plY3RMaXN0RGlzcGxheS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0RGlzcGxheS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RTZWN0aW9uJykuc2V0QXR0cmlidXRlKCdjdXJyZW50UHJvamVjdCcsIGdldFByb2plY3QoZXZlbnQudGFyZ2V0LmlubmVySFRNTCkuZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgICAgIHJlbmRlclByb2plY3QoZ2V0UHJvamVjdChldmVudC50YXJnZXQuaW5uZXJIVE1MKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG4iLCJjb25zdCBldmVudEVtbWl0ZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRFbW1pdGVyOyIsImltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IHRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3QsIHJlbmRlclByb2plY3RMaXN0IH0gZnJvbSBcIi4vRG9tUmVuZGVyXCI7XHJcbmltcG9ydCB7IHJlYWRTdG9yYWdlLCBzYXZlU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IGV2ZW50RW1taXRlciBmcm9tIFwiLi9ldmVudEVtaXR0ZXIuanNcIjtcclxuXHJcbi8vIHJlYWQgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxubGV0IHByb2plY3RzID0gcmVhZFN0b3JhZ2UoKTtcclxuXHJcbi8vIHJlbmRlciBwcm9qZWN0IGxpc3Qgb24gc3RhcnR1cFxyXG5yZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0cyk7XHJcblxyXG4vLyBodG1sIGVsZW1lbnRzXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdEJ1dHRvbicpO1xyXG5jb25zdCBjcmVhdGVQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3REaWFsb2cnKTtcclxuY29uc3QgY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlQ3JlYXRlUHJvamVjdERpYWxvZycpO1xyXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0Rm9ybScpO1xyXG5jb25zdCBjcmVhdGVUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVRvZG8nKTtcclxuY29uc3QgY3JlYXRlVG9kb0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVUb2RvRGlhbG9nJyk7XHJcbmNvbnN0IGNsb3NlQ3JlYXRlVG9kb0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUNyZWF0ZVRvZG9EaWFsb2cnKTtcclxuY29uc3QgY3JlYXRlVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlVG9kb0Zvcm0nKTtcclxuY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFNlY3Rpb24nKTtcclxuXHJcblxyXG4vLyBzaG93IGNyZWF0ZSBwcm9qZWN0IGRpYWxvZyB3aGVuIGNyZWF0ZVByb2plY3RCdXR0b24gaXMgcHJlc3NlZFxyXG5jcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY3JlYXRlUHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcclxufSk7XHJcblxyXG4vLyBjbG9zZSBjcmVhdGUgcHJvamVjdCBkaWFsb2cgd2hlbiBjbG9zZUNyZWF0ZVByb2plY3REaWFsb2cgaXMgcHJlc3NlZFxyXG5jbG9zZUNyZWF0ZVByb2plY3REaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY3JlYXRlUHJvamVjdERpYWxvZy5jbG9zZSgpO1xyXG59KTtcclxuXHJcbi8vIHdoZW4gY3JlYXRlIHByb2plY3QgZm9ybSBpcyBzdWJtaXR0ZWQgYWRkIHByb2plY3QgdG8gcHJvamVjdHMgbGlzdFxyXG5jcmVhdGVQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGVJbnB1dCcpLnZhbHVlO1xyXG4gICAgbGV0IHByb2plY3RUb0FkZCA9IG5ldyBwcm9qZWN0KHByb2plY3RUaXRsZSk7XHJcbiAgICBhZGRQcm9qZWN0VG9Qcm9qZWN0cyhwcm9qZWN0VG9BZGQpO1xyXG4gICAgcmVuZGVyUHJvamVjdExpc3QocHJvamVjdHMpO1xyXG4gICAgc2F2ZVN0b3JhZ2UocHJvamVjdHMpO1xyXG59KTtcclxuXHJcbi8vIHNob3cgY3JlYXRlIHRvZG8gZGlhbG9nIHdoZW4gY3JlYXRlVG9kb0J1dHRvbiBpcyBwcmVzc2VkXHJcbmNyZWF0ZVRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjcmVhdGVUb2RvRGlhbG9nLnNob3dNb2RhbCgpO1xyXG59KTtcclxuXHJcbi8vIGNsb3NlIGNyZWF0ZSB0b2RvIGRpYWxvZyB3aGVuIHRoZSBjbG9zZVRvRG9EaWFsb2cgaXMgcHJlc3NlZFxyXG5jbG9zZUNyZWF0ZVRvZG9EaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjcmVhdGVUb2RvRGlhbG9nLmNsb3NlKCk7XHJcbn0pO1xyXG5cclxuLy8gd2hlbiBjcmVhdGUgdG9kbyBmb3JtIGlzIHN1Ym1pdHRlZCBhZGQgdG9kbyB0byB0aGUgcHJvamVjdFxyXG5jcmVhdGVUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgLy8gZ2V0IGN1cnJlbnQgcHJvamVjdFxyXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0U2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2N1cnJlbnRQcm9qZWN0JykpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgLy8gZ2V0IGluZm9ybWF0aW9uIGZyb20gZm9ybVxyXG4gICAgbGV0IHRvZG9UaXRsZSA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvVGl0bGVJbnB1dCcpLnZhbHVlO1xyXG4gICAgbGV0IHRvZG9Qcmlvcml0eSA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvUHJpb3JpdHlJbnB1dCcpLnZhbHVlO1xyXG4gICAgbGV0IHRvZG9EdWVEYXRlID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcignI3RvZG9EdWVEYXRlSW5wdXQnKS52YWx1ZTtcclxuICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjdG9kb0Rlc2NyaXB0aW9uSW5wdXQnKS52YWx1ZTtcclxuICAgIC8vIGNyZWF0ZSBuZXcgdG9kb1xyXG4gICAgbGV0IHRvZG9Ub0FkZCA9IG5ldyB0b2RvKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5KTtcclxuICAgIC8vIGFkZCB0b2RvIHRvIHByb2plY3RcclxuICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRvRG8odG9kb1RvQWRkKTtcclxuICAgIC8vIHJlLXJlbmRlciBwcm9qZWN0IGRpc3BsYXlcclxuICAgIHJlbmRlclByb2plY3QoY3VycmVudFByb2plY3QpO1xyXG4gICAgLy8gcmUtd3JpdGUgZGF0YSB0byBsb2NhbCBzdG9yYWdlXHJcbiAgIHNhdmVTdG9yYWdlKHByb2plY3RzKTtcclxufSk7XHJcblxyXG4vLyBmdW5jdGlvbiB1c2VkIHRvIHJldHVybiB0aGUgcmlnaHQgcHJvamVjdCB0byBEb21SZW5kZXIuanMgd2hlbiByZW5kZXJpbmcgdGhlIGNvbnRlbnQgb24gY2xpY2sgb2YgZWFjaCBwcm9qZWN0IGluIHRoZSBwcm9qZWN0IGxpc3RcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdFRpdGxlKSB7XHJcbiAgICBsZXQgcmV0dXJuVmFsdWU7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICBpZiAodmFsLmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZSkge1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdFRvUHJvamVjdHMocHJvamVjdCkge1xyXG4gICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBwcm9qZWN0IHRoYXQgZXhpc3RzXHJcbiAgICBsZXQgZHVwbGljYXRlUHJvamVjdCA9IGZhbHNlO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbC5nZXRUaXRsZSA9PT0gcHJvamVjdC5nZXRUaXRsZSgpKSB7XHJcbiAgICAgICAgICAgIGR1cGxpY2F0ZVByb2plY3QgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGR1cGxpY2F0ZVByb2plY3QpIHtcclxuICAgICAgICAvLyB0aHJvdyBlcnJvclxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBhZGQgcHJvamVjdCB0byBsaXN0XHJcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gbGlzdGVuIHRvIGV2ZW50IGZyb20gRG9tUmVuZGVyXHJcbmV2ZW50RW1taXRlci5hZGRFdmVudExpc3RlbmVyKCdzYXZlUHJvamVjdCcsIChldmVudCkgPT4ge1xyXG4gICAgc2F2ZVN0b3JhZ2UocHJvamVjdHMpO1xyXG59KTsiLCJleHBvcnQgY2xhc3MgcHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnRvZG9MaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9kb0xpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9Ebyh0b2RvKSB7XHJcbiAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRvRG8odG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3QuZm9yRWFjaCgodmFsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWwuZ2V0VGl0bGUoKSA9PT0gdG9kby5nZXRUaXRsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9MaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvRG8odG9kb1RpdGxlKSB7XHJcbiAgICAgICAgbGV0IHJldHVyblZhbHVlO1xyXG4gICAgICAgIHRoaXMudG9kb0xpc3QuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWwuZ2V0VGl0bGUoKSA9PT0gdG9kb1RpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9ICB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVRvRG8odG9kbykge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlVG9Ebyh0b2RvKTtcclxuICAgICAgICB0aGlzLmFkZFRvRG8odG9kbyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgdG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkU3RvcmFnZSgpIHtcclxuICAgIC8vIGdyYWIgcHJvamVjdHMgZm9ybSBsb2NhbCBzdG9yYWdlIGlmIGl0IGlzIHRoZXJlXHJcbiAgICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvYnNpbm90aW9uUHJvamVjdFN0b3JhZ2UnKSk7XHJcbiAgICAvLyBpZiB0aGVyZSBpcyBub3RoaW5nIGluIHRoZSBsb2NhbCBzdG9yYWdlIG1ha2UgYW4gZW1wdHkgYXJyYXlcclxuICAgIGlmIChwcm9qZWN0cyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHByb2plY3RzID0gW107XHJcbiAgICB9XHJcbiAgICAvLyBsb29wIHRocm91Z2ggYW5kIHNldCBlYWNoIHByb2plY3RzIHByb3RvdHlwZSB0byBhIHByb2plY3QgdHlwZVxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgdmFsLl9fcHJvdG9fXyA9IG5ldyBwcm9qZWN0KCk7XHJcbiAgICAgICAgdmFsLmdldFRvZG9MaXN0KCkuZm9yRWFjaCgobm90ZSkgPT4ge1xyXG4gICAgICAgICAgICBub3RlLl9fcHJvdG9fXyA9IG5ldyB0b2RvKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3RvcmFnZShwcm9qZWN0cykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29ic2lub3Rpb25Qcm9qZWN0U3RvcmFnZScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbn0iLCJleHBvcnQgY2xhc3MgdG9kbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldER1ZURhdGUoZGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29tcGxldGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGU7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==