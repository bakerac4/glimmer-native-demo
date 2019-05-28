module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../../nativescript-glimmer/dist/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NativescriptGlimmer; });
/* harmony import */ var _glimmer_opcode_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/opcode-compiler/dist/modules/es2017/index.js");
/* harmony import */ var _glimmer_program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@glimmer/program/dist/modules/es2017/index.js");
/* harmony import */ var _glimmer_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@glimmer/runtime/dist/modules/es2017/index.js");
/* harmony import */ var _glimmer_tracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@glimmer/tracking/dist/modules/es2017/index.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_dom_nodes_DocumentNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/DocumentNode.js");
/* harmony import */ var _lib_dom_nodes_ElementNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/ElementNode.js");
/* harmony import */ var _lib_dom_setup_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/setup-registry.js");
/* harmony import */ var _lib_glimmer_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/context.js");
/* harmony import */ var _lib_glimmer_setup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/setup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolverDelegate", function() { return _lib_glimmer_context__WEBPACK_IMPORTED_MODULE_8__["ResolverDelegate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerElements", function() { return _lib_dom_setup_registry__WEBPACK_IMPORTED_MODULE_7__["registerElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentNode", function() { return _lib_dom_nodes_DocumentNode__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementNode", function() { return _lib_dom_nodes_ElementNode__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _lib_glimmer_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/resolver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resolver", function() { return _lib_glimmer_resolver__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _lib_glimmer_native_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/native-component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeComponent", function() { return _lib_glimmer_native_component__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _lib_glimmer_native_capabilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/native-capabilities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeCapabilities", function() { return _lib_glimmer_native_capabilities__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _lib_glimmer_native_modifier_manager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/native-modifier-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeModifier", function() { return _lib_glimmer_native_modifier_manager__WEBPACK_IMPORTED_MODULE_13__["NativeModifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NativeModifierDefinitionState", function() { return _lib_glimmer_native_modifier_manager__WEBPACK_IMPORTED_MODULE_13__["NativeModifierDefinitionState"]; });

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










// import { setPropertyDidChange } from '@glimmer/component';
//Exports








Object(_glimmer_tracking__WEBPACK_IMPORTED_MODULE_3__["setPropertyDidChange"])(() => {
    NativescriptGlimmer.scheduleRerender();
});
class NativescriptGlimmer {
    constructor(str, resolverDelegate, resolver) {
        Object(_lib_dom_setup_registry__WEBPACK_IMPORTED_MODULE_7__["registerElements"])();
        Object(_lib_glimmer_setup__WEBPACK_IMPORTED_MODULE_9__["default"])(resolverDelegate, resolver);
        NativescriptGlimmer.resolver = resolver;
        const document = new _lib_dom_nodes_DocumentNode__WEBPACK_IMPORTED_MODULE_5__["default"]();
        NativescriptGlimmer.document = document;
        this.rootFrame = new _lib_dom_nodes_ElementNode__WEBPACK_IMPORTED_MODULE_6__["default"]('frame');
        // //setup a frame so we always have somewhere to hang our css
        this.rootFrame.setAttribute("id", "app-root-frame");
        NativescriptGlimmer.document.appendChild(this.rootFrame);
        const context = Object(_glimmer_opcode_compiler__WEBPACK_IMPORTED_MODULE_0__["Context"])(_lib_glimmer_context__WEBPACK_IMPORTED_MODULE_8__["default"]);
        NativescriptGlimmer.context = context;
        console.log('Context Created');
        this.main = _lib_glimmer_context__WEBPACK_IMPORTED_MODULE_8__["default"].lookupComponent(str).compilable.compile(NativescriptGlimmer.context);
        console.log('Main Created');
        this.artifacts = Object(_glimmer_program__WEBPACK_IMPORTED_MODULE_1__["artifacts"])(NativescriptGlimmer.context);
        console.log('Artifacts Created');
        // @ts-ignore: Unreachable code error
        NativescriptGlimmer.aotRuntime = Object(_glimmer_runtime__WEBPACK_IMPORTED_MODULE_2__["AotRuntime"])(NativescriptGlimmer.document, this.artifacts, resolver);
        console.log('aotRuntime Created');
        this.cursor = { element: this.rootFrame, nextSibling: null };
        NativescriptGlimmer.rootFrame = this.rootFrame;
    }
    static scheduleRerender() {
        if (this._scheduled || !this._rendered)
            return;
        this._rendering = true;
        this._scheduled = true;
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            this._scheduled = false;
            yield this._rerender();
            this._rendering = false;
        }), 0);
    }
    static _rerender() {
        return __awaiter(this, void 0, void 0, function* () {
            let { env } = this;
            console.log('In re-render');
            try {
                this.aotRuntime.env.begin();
                yield NativescriptGlimmer.result.rerender();
                this.aotRuntime.env.commit();
                this._rendered = true;
                // this._didRender();
            }
            catch (err) {
                // this._didError(err);
            }
        });
    }
    // renderComponent() {
    //     let iterator = renderAot(this.aotRuntime, this.main, this.cursor);
    //     this.iterator = iterator;
    //     console.log('Iterator Created');
    //     try {
    //         const result = renderSync(this.aotRuntime.env, iterator);
    //         console.log('Render Sync');
    //         NativescriptGlimmer.result = result;
    //         NativescriptGlimmer._rendered = true;
    //     } catch(error) {
    //         console.log(`Error in initial render: ${error}`);
    //     }
    //     // This is super hacky and likely needs to be abstracted away.
    //     rootFrame.nativeView.navigate({
    //         create: () => {
    //             return rootFrame.firstElement().nativeView
    //         }
    //     });
    // }
    render() {
        const rootFrame = this.rootFrame;
        return new Promise((resolve, reject) => {
            //wait for launch
            Object(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["on"])(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["launchEvent"], () => {
                let iterator = Object(_glimmer_runtime__WEBPACK_IMPORTED_MODULE_2__["renderAot"])(NativescriptGlimmer.aotRuntime, this.main, this.cursor);
                this.iterator = iterator;
                console.log('Iterator Created');
                try {
                    const result = Object(_glimmer_runtime__WEBPACK_IMPORTED_MODULE_2__["renderSync"])(NativescriptGlimmer.aotRuntime.env, iterator);
                    console.log('Render Sync');
                    NativescriptGlimmer.result = result;
                    NativescriptGlimmer._rendered = true;
                }
                catch (error) {
                    console.log(`Error in initial render: ${error}`);
                }
                // This is super hacky and likely needs to be abstracted away.
                rootFrame.nativeView.navigate({
                    create: () => {
                        return rootFrame.firstElement().nativeView;
                    }
                });
            });
            try {
                Object(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["run"])({
                    create() {
                        return rootFrame.nativeView;
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
}
NativescriptGlimmer._scheduled = false;
NativescriptGlimmer._rendered = false;
NativescriptGlimmer._rendering = false;


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/dom/element-registry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeElementName", function() { return normalizeElementName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerElement", function() { return registerElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementMap", function() { return getElementMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewClass", function() { return getViewClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewMeta", function() { return getViewMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKnownView", function() { return isKnownView; });
const elementMap = {};
const dashRegExp = /-/g;
const defaultViewMeta = {
    skipAddToDom: false,
    isUnaryTag: false,
    tagNamespace: '',
    canBeLeftOpenTag: false,
    component: null
};
function normalizeElementName(elementName) {
    console.log(`Normalize Element name ${elementName}`);
    return `${elementName.replace(dashRegExp, '').toLowerCase()}`;
}
function registerElement(elementName, resolver, meta = null) {
    const normalizedName = normalizeElementName(elementName);
    meta = Object.assign({}, defaultViewMeta, meta);
    if (elementMap[normalizedName]) {
        throw new Error(`Element for ${elementName} already registered.`);
    }
    const entry = {
        resolver: resolver,
        meta: meta
    };
    elementMap[normalizedName] = entry;
}
function getElementMap() {
    return elementMap;
}
function getViewClass(elementName) {
    const normalizedName = normalizeElementName(elementName);
    const entry = elementMap[normalizedName];
    if (!entry) {
        throw new TypeError(`No known component for element ${elementName}.`);
    }
    try {
        return entry.resolver();
    }
    catch (e) {
        throw new TypeError(`Could not load view for: ${elementName}. ${e}`);
    }
}
function getViewMeta(elementName) {
    const normalizedName = normalizeElementName(elementName);
    let meta = defaultViewMeta;
    const entry = elementMap[normalizedName];
    if (entry && entry.meta) {
        meta = entry.meta;
    }
    return meta;
}
function isKnownView(elementName) {
    return elementMap[normalizeElementName(elementName)];
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/dom/nodes/CommentNode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentNode; });
/* harmony import */ var _ElementNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/ElementNode.js");

class CommentNode extends _ElementNode__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(text) {
        super('comment');
        this.nodeType = 8;
        this.text = text;
        console.log(`created ${this}`);
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/dom/nodes/DocumentNode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocumentNode; });
/* harmony import */ var _CommentNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/CommentNode.js");
/* harmony import */ var _ElementNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/ElementNode.js");
/* harmony import */ var _TextNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/TextNode.js");
/* harmony import */ var _ViewNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/ViewNode.js");




function* elementIterator(el) {
    yield el;
    for (let child of el.childNodes) {
        yield* elementIterator(child);
    }
}
class DocumentNode extends _ViewNode__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor() {
        super();
        this.tagName = "docNode";
        this.nodeType = 9;
        //this.documentElement = new ElementNode('document')
        this.head = new _ElementNode__WEBPACK_IMPORTED_MODULE_1__["default"]('head');
        this.appendChild(this.head);
        /*// make static methods accessible via this
        this.createComment = DocumentNode.createComment
        this.createElement = DocumentNode.createElement
        this.createElementNS = DocumentNode.createElementNS
        this.createTextNode = DocumentNode.createTextNode*/
        console.log(`created ${this}`);
    }
    createComment(text) {
        return new _CommentNode__WEBPACK_IMPORTED_MODULE_0__["default"](text);
    }
    createElement(tagName) {
        return new _ElementNode__WEBPACK_IMPORTED_MODULE_1__["default"](tagName);
    }
    createElementNS(namespace, tagName) {
        return this.createElement(tagName);
    }
    createTextNode(text) {
        return new _TextNode__WEBPACK_IMPORTED_MODULE_2__["default"](text);
    }
    getElementById(id) {
        for (let el of elementIterator(this)) {
            if (el.nodeType === 1 && (el).id === id)
                return el;
        }
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/dom/nodes/ElementNode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ElementNode; });
/* harmony import */ var _ViewNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/ViewNode.js");
/* harmony import */ var _element_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/element-registry.js");


function camelize(kebab) {
    return kebab.replace(/[\-]+(\w)/g, (m, l) => l.toUpperCase());
}
const EVENT_ATTRIBUTES = Object.freeze([
    'tap'
]);
class ElementNode extends _ViewNode__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(tagName) {
        super();
        this.nodeType = 1;
        this.tagName = tagName;
        //there are some special elements that don't exist natively
        const viewClass = Object(_element_registry__WEBPACK_IMPORTED_MODULE_1__["getViewClass"])(tagName);
        if (viewClass) {
            this._nativeView = new viewClass();
            this._nativeView.__GlimmerNativeElement__ = this;
            console.log(`${this} has view class`);
            EVENT_ATTRIBUTES.forEach(event => {
                console.log(`Checking for atttribute ${event}`);
                let attribute = this.getAttribute(event);
                console.log(`Attribute ${event}: ${attribute}`);
                // console.log(`Native view attribute ${event}: ${this._nativeView.getAttribute(event)}`);
                if (attribute) {
                    this.addEventListener(event, attribute);
                }
            });
        }
        console.log(`created ${this} ${this._nativeView}`);
        let setStyle = (value) => {
            this.setAttribute('style', value);
        };
        let getStyle = () => {
            return this.getAttribute('style');
        };
        this.style = {
            setProperty: (propertyName, value, priority) => {
                this.setStyle(camelize(propertyName), value);
            },
            removeProperty: (propertyName) => {
                this.setStyle(camelize(propertyName), null);
            },
            get cssText() {
                console.log("got css text");
                return getStyle();
            },
            set cssText(value) {
                console.log("set css text");
                setStyle(value);
            }
        };
    }
    setAttribute(key, value) {
        console.log(`setAttribute: ${key} - ${value}`);
        if (key.startsWith('on:')) {
            key = key.substr(3);
            this.addEventListener(key, value);
        }
        else {
            super.setAttribute(key, value);
        }
    }
    appendChild(childNode) {
        super.appendChild(childNode);
        if (childNode.nodeType === 3) {
            this.setText((childNode).text);
        }
        if (childNode.nodeType === 7) {
            (childNode).setOnNode(this);
        }
    }
    insertBefore(childNode, referenceNode) {
        super.insertBefore(childNode, referenceNode);
        if (childNode.nodeType === 3) {
            this.setText((childNode).text);
        }
        if (childNode.nodeType === 7) {
            (childNode).setOnNode(this);
        }
    }
    removeChild(childNode) {
        super.removeChild(childNode);
        if (childNode.nodeType === 3) {
            this.setText('');
        }
        if (childNode.nodeType === 7) {
            (childNode).clearOnNode(this);
        }
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/dom/nodes/TextNode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextNode; });
/* harmony import */ var _ViewNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/ViewNode.js");

class TextNode extends _ViewNode__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(text) {
        super();
        this.nodeType = 3;
        this.text = text;
        this._meta = {
            skipAddToDom: true
        };
        console.log(`created ${this}`);
    }
    setText(text) {
        this.text = text;
        this.parentNode.setText(text);
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/dom/nodes/ViewNode.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewNode; });
/* harmony import */ var _element_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/element-registry.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/utils.js");
/* harmony import */ var tns_core_modules_utils_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/utils/types.js");
/* harmony import */ var tns_core_modules_utils_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__);




const XML_ATTRIBUTES = Object.freeze([
    'tap',
    'style',
    'rows',
    'columns',
    'fontAttributes'
]);
class ViewNode {
    constructor() {
        this.nodeType = null;
        this._tagName = null;
        this.parentNode = null;
        this.childNodes = [];
        this.prevSibling = null;
        this.nextSibling = null;
        this._ownerDocument = null;
        this._nativeView = null;
        this._meta = null;
    }
    hasAttribute() {
        return false;
    }
    removeAttribute() {
        return false;
    }
    /* istanbul ignore next */
    toString() {
        return `${this.constructor.name}(${this.tagName})`;
    }
    set tagName(name) {
        this._tagName = Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["normalizeElementName"])(name);
    }
    get tagName() {
        return this._tagName;
    }
    get firstChild() {
        return this.childNodes.length ? this.childNodes[0] : null;
    }
    get lastChild() {
        return this.childNodes.length ? this.childNodes[this.childNodes.length - 1] : null;
    }
    get nativeView() {
        return this._nativeView;
    }
    set nativeView(view) {
        if (this._nativeView) {
            throw new Error(`Can't override native view.`);
        }
        this._nativeView = view;
    }
    get meta() {
        if (this._meta) {
            return this._meta;
        }
        return (this._meta = Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["getViewMeta"])(this.tagName));
    }
    /* istanbul ignore next */
    get ownerDocument() {
        if (this._ownerDocument) {
            return this._ownerDocument;
        }
        let el = this;
        while (el != null && el.nodeType !== 9) {
            el = el.parentNode;
        }
        return (this._ownerDocument = el);
    }
    getAttribute(key) {
        return (this.nativeView)[key];
    }
    /* istanbul ignore next */
    setAttribute(key, value) {
        const nv = this.nativeView;
        if (!nv)
            return;
        // normalize key
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__["isAndroid"] && key.startsWith('android:')) {
            key = key.substr(8);
        }
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__["isIOS"] && key.startsWith('ios:')) {
            key = key.substr(4);
        }
        // try to fix case
        let lowerkey = key.toLowerCase();
        for (let realKey in nv) {
            if (lowerkey == realKey.toLowerCase()) {
                key = realKey;
                break;
            }
        }
        console.log(`setAttr ${this} ${key} ${value}`);
        try {
            if (XML_ATTRIBUTES.indexOf(key) !== -1) {
                nv[key] = value;
            }
            else {
                // detect expandable attrs for boolean values
                // See https://vuejs.org/v2/guide/components-props.html#Passing-a-Boolean
                if (Object(tns_core_modules_utils_types__WEBPACK_IMPORTED_MODULE_2__["isBoolean"])(nv[key]) && value === '') {
                    value = true;
                }
                else {
                    nv[key] = value;
                }
            }
        }
        catch (e) {
            // ignore but log
            console.warn(`set attribute threw an error, attr:${key} on ${this._tagName}: ${e.message}`);
        }
    }
    /* istanbul ignore next */
    setStyle(property, value) {
        console.log(`setStyle ${this} ${property} ${value}`);
        if (!(value = value.trim()).length) {
            return;
        }
        if (property.endsWith('Align')) {
            // NativeScript uses Alignment instead of Align, this ensures that text-align works
            property += 'ment';
        }
        (this.nativeView.style)[property] = value;
    }
    /* istanbul ignore next */
    setText(text) {
        console.log(`setText ${this} ${text}`);
        if (this.nodeType === 3) {
            this.parentNode.setText(text);
        }
        else {
            this.setAttribute('text', text);
        }
    }
    /* istanbul ignore next */
    addEventListener(event, handler) {
        console.log(`add event listener ${this} ${event}`);
        this.nativeView.on(event, handler);
    }
    /* istanbul ignore next */
    removeEventListener(event, handler) {
        console.log(`remove event listener ${this} ${event}`);
        this.nativeView.off(event, handler);
    }
    dispatchEvent(event) {
        if (this.nativeView) {
            //nativescript uses the EventName while dom uses Type
            console.log(`In dispatch event: ${event}`);
            event.eventName = event.type;
            console.log(`event name: ${event.eventName}`);
            this.nativeView.notify(event);
        }
    }
    insertBefore(childNode, referenceNode) {
        console.log(`insert before ${this} ${childNode} ${referenceNode}`);
        if (!childNode) {
            throw new Error(`Can't insert child.`);
        }
        // in some rare cases insertBefore is called with a null referenceNode
        // this makes sure that it get's appended as the last child
        if (!referenceNode) {
            return this.appendChild(childNode);
        }
        if (referenceNode.parentNode !== this) {
            throw new Error(`Can't insert child, because the reference node has a different parent.`);
        }
        if (childNode.parentNode && childNode.parentNode !== this) {
            throw new Error(`Can't insert child, because it already has a different parent.`);
        }
        if (childNode.parentNode === this) {
            // we don't need to throw an error here, because it is a valid case
            // for example when switching the order of elements in the tree
            // fixes #127 - see for more details
            // fixes #240
            // throw new Error(`Can't insert child, because it is already a child.`)
        }
        let index = this.childNodes.indexOf(referenceNode);
        childNode.parentNode = this;
        childNode.nextSibling = referenceNode;
        childNode.prevSibling = this.childNodes[index - 1];
        referenceNode.prevSibling = childNode;
        this.childNodes.splice(index, 0, childNode);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["insertChild"])(this, childNode, index);
    }
    appendChild(childNode) {
        console.log(`append child ${this} ${childNode}`);
        if (!childNode) {
            throw new Error(`Can't append child.`);
        }
        if (childNode.parentNode && childNode.parentNode !== this) {
            throw new Error(`Can't append child, because it already has a different parent.`);
        }
        if (childNode.parentNode === this) {
            // we don't need to throw an error here, because it is a valid case
            // for example when switching the order of elements in the tree
            // fixes #127 - see for more details
            // fixes #240
            // throw new Error(`Can't append child, because it is already a child.`)
        }
        childNode.parentNode = this;
        if (this.lastChild) {
            childNode.prevSibling = this.lastChild;
            this.lastChild.nextSibling = childNode;
        }
        this.childNodes.push(childNode);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["insertChild"])(this, childNode, this.childNodes.length - 1);
    }
    removeChild(childNode) {
        console.log(`remove child ${this} ${childNode}`);
        if (!childNode) {
            throw new Error(`Can't remove child.`);
        }
        if (!childNode.parentNode) {
            throw new Error(`Can't remove child, because it has no parent.`);
        }
        if (childNode.parentNode !== this) {
            throw new Error(`Can't remove child, because it has a different parent.`);
        }
        childNode.parentNode = null;
        if (childNode.prevSibling) {
            childNode.prevSibling.nextSibling = childNode.nextSibling;
        }
        if (childNode.nextSibling) {
            childNode.nextSibling.prevSibling = childNode.prevSibling;
        }
        // reset the prevSibling and nextSibling. If not, a keep-alived component will
        // still have a filled nextSibling attribute so vue will not
        // insert the node again to the parent. See #220
        childNode.prevSibling = null;
        childNode.nextSibling = null;
        this.childNodes = this.childNodes.filter(node => node !== childNode);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["removeChild"])(this, childNode);
    }
    firstElement() {
        for (var child of this.childNodes) {
            if (child.nodeType == 1) {
                return child;
            }
        }
        return null;
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/dom/setup-registry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerElements", function() { return registerElements; });
/* harmony import */ var _element_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/element-registry.js");
// Largely taken from the Vue implimentation

function registerElements() {
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('head', () => null, {
        insertChild(parentNode, childNode, atIndex) {
        },
    });
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('Frame', () => __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js").Frame, {
        insertChild(parentNode, childNode, atIndex) {
            //dont bother
        }
    });
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('div', () => __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js").Frame, {
        insertChild(parentNode, childNode, atIndex) {
            //dont bother
            parentNode.appendChild(childNode);
        }
    });
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('Page', () => __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js").Page);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('StackLayout', () => __webpack_require__("../node_modules/tns-core-modules/ui/layouts/stack-layout/stack-layout.js").StackLayout);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('Label', () => __webpack_require__("../node_modules/tns-core-modules/ui/label/label.js").Label);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('ActionBar', () => __webpack_require__("../node_modules/tns-core-modules/ui/action-bar/action-bar.js").ActionBar);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('ActionItem', () => __webpack_require__("../node_modules/tns-core-modules/ui/action-bar/action-bar.js").ActionItem);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('GridLayout', () => __webpack_require__("../node_modules/tns-core-modules/ui/layouts/grid-layout/grid-layout.js").GridLayout);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('ScrollView', () => __webpack_require__("../node_modules/tns-core-modules/ui/scroll-view/scroll-view.js").ScrollView);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('ListView', () => __webpack_require__("../node_modules/tns-core-modules/ui/list-view/list-view.js").ListView);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('NavigationButton', () => __webpack_require__("../node_modules/tns-core-modules/ui/action-bar/action-bar.js").NavigationButton);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('TabView', () => __webpack_require__("../node_modules/tns-core-modules/ui/tab-view/tab-view.js").TabView);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('TabViewItem', () => __webpack_require__("../node_modules/tns-core-modules/ui/tab-view/tab-view.js").TabViewItem);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('DatePicker', () => __webpack_require__("../node_modules/tns-core-modules/ui/date-picker/date-picker.js").DatePicker);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('AbsoluteLayout', () => __webpack_require__("../node_modules/tns-core-modules/ui/layouts/absolute-layout/absolute-layout.js").AbsoluteLayout);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('ActivityIndicator', () => __webpack_require__("../node_modules/tns-core-modules/ui/activity-indicator/activity-indicator.js").ActivityIndicator);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('Border', () => __webpack_require__("../node_modules/tns-core-modules/ui/border/border.js").Border);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('Button', () => __webpack_require__("../node_modules/tns-core-modules/ui/button/button.js").Button);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('WebView', () => __webpack_require__("../node_modules/tns-core-modules/ui/web-view/web-view.js").WebView);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('WrapLayout', () => __webpack_require__("../node_modules/tns-core-modules/ui/layouts/wrap-layout/wrap-layout.js").WrapLayout);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('FormattedString', () => __webpack_require__("../node_modules/tns-core-modules/text/formatted-string.js").FormattedString);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('Span', () => __webpack_require__("../node_modules/tns-core-modules/text/span.js").Span);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('TextView', () => __webpack_require__("../node_modules/tns-core-modules/ui/text-view/text-view.js").TextView);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('p', () => __webpack_require__("../node_modules/tns-core-modules/ui/text-view/text-view.js").TextView);
    Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["registerElement"])('Comment', () => __webpack_require__("../node_modules/tns-core-modules/ui/placeholder/placeholder.js").Placeholder);
    // registerElement('Frame', () => new FrameElement())
    // registerElement('Page', () => new PageElement())
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/dom/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isView", function() { return isView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLayout", function() { return isLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isContentView", function() { return isContentView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertChild", function() { return insertChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return removeChild; });
/* harmony import */ var tns_core_modules_ui_layouts_layout_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/ui/layouts/layout-base.js");
/* harmony import */ var tns_core_modules_ui_layouts_layout_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_layouts_layout_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_content_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/content-view/content-view.js");
/* harmony import */ var tns_core_modules_ui_content_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_content_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/core/view/view.js");
/* harmony import */ var tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_2__);



function isView(view) {
    return view instanceof tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_2__["View"];
}
function isLayout(view) {
    return view instanceof tns_core_modules_ui_layouts_layout_base__WEBPACK_IMPORTED_MODULE_0__["LayoutBase"];
}
function isContentView(view) {
    return view instanceof tns_core_modules_ui_content_view__WEBPACK_IMPORTED_MODULE_1__["ContentView"];
}
function insertChild(parentNode, childNode, atIndex = -1) {
    if (!parentNode) {
        return;
    }
    if (parentNode.meta && typeof parentNode.meta.insertChild === 'function') {
        return parentNode.meta.insertChild(parentNode, childNode, atIndex);
    }
    if (!parentNode.nativeView || !childNode.nativeView) {
        return;
    }
    const parentView = parentNode.nativeView;
    const childView = childNode.nativeView;
    /*if (parentView instanceof LayoutBase) {
      if (childView.parent === parentView) {
        let index = parentView.getChildIndex(childView)
        if (index !== -1) {
          parentView.removeChild(childView)
        }
      }
      if (atIndex !== -1) {
        parentView.insertChild(childView, atIndex)
      } else {
        parentView.addChild(childView)
      }
    } else if (parentView instanceof ContentView) {
      if (childNode.nodeType === 8) {
        parentView._addView(childView, atIndex)
      } else {
        parentView.content = childView
      }
    } else */
    if (parentView && (parentView)._addChildFromBuilder) {
        (parentView)._addChildFromBuilder(childNode._nativeView.constructor.name, childView);
    }
    else {
        throw new Error("Parent can't contain children: " + parentNode + ", " + childNode);
    }
}
function removeChild(parentNode, childNode) {
    if (!parentNode) {
        return;
    }
    if (parentNode.meta && typeof parentNode.meta.removeChild === 'function') {
        return parentNode.meta.removeChild(parentNode, childNode);
    }
    if (!childNode.nativeView || !childNode.nativeView) {
        return;
    }
    const parentView = parentNode.nativeView;
    const childView = childNode.nativeView;
    if (parentView instanceof tns_core_modules_ui_layouts_layout_base__WEBPACK_IMPORTED_MODULE_0__["LayoutBase"]) {
        parentView.removeChild(childView);
    }
    else if (parentView instanceof tns_core_modules_ui_content_view__WEBPACK_IMPORTED_MODULE_1__["ContentView"]) {
        if (parentView.content === childView) {
            parentView.content = null;
        }
        if (childNode.nodeType === 8) {
            parentView._removeView(childView);
        }
    }
    else if (isView(parentView)) {
        parentView._removeView(childView);
    }
    else {
        // throw new Error("Unknown parent type: " + parent);
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/components/link-to/component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkTo; });
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/component/dist/modules/es2017/index.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/navigation.js");


class LinkTo extends _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onClick() {
        const target = this.__owner__.args.target;
        Object(_navigation__WEBPACK_IMPORTED_MODULE_1__["navigate"])(target);
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/context.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compilable", function() { return Compilable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolverDelegate", function() { return ResolverDelegate; });
/* harmony import */ var _glimmer_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/compiler/dist/modules/es2017/index.js");
/* harmony import */ var _glimmer_opcode_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@glimmer/opcode-compiler/dist/modules/es2017/index.js");
/* harmony import */ var _glimmer_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@glimmer/util/dist/modules/es2017/index.js");



// /**
//  * Ideally we precompile all the templates through a
//  * through a plugin at build time. This is done just
//  * for demo purposes.
//  */
function Compilable(source) {
    console.log('In Compilable: ' + source);
    const precompiled = Object(_glimmer_compiler__WEBPACK_IMPORTED_MODULE_0__["precompile"])(source);
    console.log('Precompiled');
    const component = Object(_glimmer_opcode_compiler__WEBPACK_IMPORTED_MODULE_1__["Component"])(precompiled);
    console.log(`Compiled Component: ${component}`);
    return component;
}
class ResolverDelegate {
    registerComponent(name, handle, source, capabilities) {
        console.log(`addComponent: ${name}`);
        ResolverDelegate.components[name] = {
            source: _glimmer_util__WEBPACK_IMPORTED_MODULE_2__["strip"] `${source}`,
            handle,
            capabilities
        };
        console.log(`ResolverDelegate Components ${ResolverDelegate.components}`);
    }
    registerHelper(name, handle) {
        ResolverDelegate.helpers[name] = handle;
        console.log(ResolverDelegate.helpers);
    }
    registerModifier(name, handle) {
        ResolverDelegate.modifiers[name] = handle;
    }
    static lookupComponent(name) {
        console.log(`lookupComponent: ${name}`);
        let component = ResolverDelegate.components[name];
        if (component === null) {
            return null;
        }
        console.log(`component found: ${component}`);
        //source should now be compiled
        let { handle, source, capabilities } = component;
        return {
            handle,
            source,
            compilable: Object(_glimmer_opcode_compiler__WEBPACK_IMPORTED_MODULE_1__["Component"])(source),
            capabilities
        };
    }
    static lookupModifier(name) {
        if (name in ResolverDelegate.modifiers) {
            return ResolverDelegate.modifiers[name];
        }
    }
    static lookupHelper(name) {
        console.log('in lookup helper');
        if (name in ResolverDelegate.helpers) {
            return ResolverDelegate.helpers[name];
        }
    }
}
ResolverDelegate.components = {};
ResolverDelegate.helpers = {};
ResolverDelegate.modifiers = {};
;
/* harmony default export */ __webpack_exports__["default"] = ({
    lookupComponent: ResolverDelegate.lookupComponent,
    lookupHelper: ResolverDelegate.lookupHelper,
    lookupModifier: ResolverDelegate.lookupModifier
});


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/helpers/action.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/component/dist/modules/es2017/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function (_args, vm) {
    console.log(`in action`);
    let componentRef = vm.getSelf();
    console.log(`componentRef: ${componentRef}`);
    let args = _args.capture();
    let actionFunc = args.positional.at(0).value();
    console.log(actionFunc);
    // if (typeof actionFunc !== 'function') {
    //   throwNoActionError(actionFunc, args.positional.at(0));
    // }
    return new _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["UpdatableReference"](function action(...invokedArgs) {
        console.log(`in updatable reference`);
        let curriedArgs = args.positional.value();
        console.log(`in updatable reference: ${curriedArgs}`);
        // Consume the action function that was already captured above.
        curriedArgs.shift();
        curriedArgs.push(...invokedArgs);
        // Invoke the function with the component as the context, the curried
        // arguments passed to `{{action}}`, and the arguments the bound function
        // was invoked with.
        actionFunc.apply(componentRef && componentRef.value(), curriedArgs);
    });
});
;


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/modifiers/on.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onModifier; });
class onModifier {
    didInsertElement(element, _params, _hash) {
        element.addEventListener(_params[0], _params[1]);
        this.element = element;
        this.eventName = _params[0];
        this.callback = _params[1];
        console.log(`Modifier Did Insert Element: ${_params}`);
        // this.addEventListener(..._params);
    }
    didUpdate(element, _params, _hash) {
        element.removeEventListener(_params[0], _params[1]);
        console.log(`Modifier Did Update Element: ${_params}`);
    }
    willDestroyElement() {
        this.element.removeEventListeners(this.eventName, this.callback);
        console.log(`Modifier Will Destroy Element`);
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/native-capabilities.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const CAPABILITIES = {
    attributeHook: true,
    createArgs: true,
    createCaller: false,
    createInstance: true,
    dynamicLayout: false,
    dynamicScope: false,
    dynamicTag: true,
    elementHook: true,
    prepareArgs: false,
    updateHook: true,
    wrapped: false,
};
/* harmony default export */ __webpack_exports__["default"] = (CAPABILITIES);


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/native-component-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounds", function() { return Bounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentStateBucket", function() { return ComponentStateBucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NativeComponentManager; });
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/component/dist/modules/es2017/index.js");
/* harmony import */ var _glimmer_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@glimmer/reference/dist/modules/es2017/index.js");


const EMPTY_SELF = new _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["RootReference"](null);
const NOOP_DESTROYABLE = { destroy() { } };
const DESTROYING = Symbol('destroying');
const DESTROYED = Symbol('destroyed');
class Bounds {
    constructor(__bounds) {
    }
    get firstNode() {
        return this._bounds.firstNode();
    }
    get lastNode() {
        return this._bounds.lastNode();
    }
}
class ComponentStateBucket {
    constructor(definition, args) {
        let { ComponentClass, name } = definition;
        this.args = args;
        if (ComponentClass) {
            if (ComponentClass.class !== undefined) {
                ComponentClass = ComponentClass.class;
            }
            this.component = new ComponentClass({
                args: this.namedArgsSnapshot(),
                debugName: name
            });
        }
    }
    get tag() {
        return this.args.tag;
    }
    namedArgsSnapshot() {
        let snapshot = this.args.named.value();
        return Object.freeze(snapshot);
    }
}
class NativeComponentManager {
    getCapabilities(state) {
        return state.capabilities;
    }
    prepareArgs() {
        return null;
    }
    getAotStaticLayout({ name, handle, symbolTable }, resolver) {
        if (handle && symbolTable) {
            return {
                handle,
                symbolTable,
            };
        }
        throw new Error('unimplemented getAotStaticLayout');
    }
    create(environment, definition, args, _dynamicScope, _caller, _hasDefaultBlock) {
        if (definition.ComponentClass) {
            return new ComponentStateBucket(definition, args.capture());
        }
    }
    getSelf(bucket) {
        if (bucket) {
            return new _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["RootReference"](bucket.component);
        }
        return EMPTY_SELF;
    }
    didCreateElement() { }
    didRenderLayout(bucket, bounds) {
        if (!bucket) {
            return;
        }
        bucket.component.bounds = new Bounds(bounds);
    }
    didCreate(bucket) {
        console.log('in did created component manager');
        if (!bucket) {
            return;
        }
        console.log('in did created component manager - about to call didInsertElement');
        bucket.component.didInsertElement();
    }
    getTag(bucket) {
        if (!bucket) {
            return _glimmer_reference__WEBPACK_IMPORTED_MODULE_1__["CONSTANT_TAG"];
        }
        return bucket.tag;
    }
    update(bucket) {
        if (!bucket) {
            return;
        }
        bucket.component.args = bucket.namedArgsSnapshot();
    }
    didUpdateLayout() { }
    didUpdate() { }
    getDestructor(bucket) {
        if (!bucket) {
            return NOOP_DESTROYABLE;
        }
        return {
            destroy() {
                bucket.component[DESTROYING] = true;
                bucket.component.willDestroy();
                bucket.component[DESTROYED] = true;
            },
        };
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/native-component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlimmerComponent", function() { return GlimmerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NativeComponent; });
/* harmony import */ var _glimmer_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/reference/dist/modules/es2017/index.js");
/* harmony import */ var _glimmer_tracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@glimmer/tracking/dist/modules/es2017/index.js");
var _a, _b, _c, _d;


const DESTROYING = Symbol('destroying');
const DESTROYED = Symbol('destroyed');
class GlimmerComponent {
    /**
    * Constructs a new component and assigns itself the passed properties. You
    * should not construct new components yourself. Instead, Glimmer will
    * instantiate new components automatically as it renders.
    *
    * @param owner
    * @param args
    */
    constructor(owner, args) {
        this[_a] = false;
        this[_b] = false;
        this.args = args;
    }
    get isDestroying() {
        return this[DESTROYING];
    }
    get isDestroyed() {
        return this[DESTROYED];
    }
    /**
    * Called before the component has been removed from the DOM.
    */
    willDestroy() { }
}
_a = DESTROYING, _b = DESTROYED;
class NativeComponent extends GlimmerComponent {
    constructor() {
        super(...arguments);
        this[_c] = false;
        this[_d] = false;
        // constructor() {
        //   this.dirtinessTag = UpdatableDirtyableTag.create();
        //   this.parentView = null;
        //   this.title = 'Hi';
        // }
        // create(_a) {
        //   var args = _a.attrs;
        //   var c = new this({ attrs: args });
        //   for (var _i = 0, _b = keys(args); _i < _b.length; _i++) {
        //       var key = _b[_i];
        //       c[key] = args[key];
        //   }
        //   return c;
        // }
        // recompute() { }
        // destroy() { }
        // didInitAttrs() { }
        // didReceiveAttrs() { }
        // willInsertElement() { }
        // willUpdate() { }
        // willRender() { }
        // didInsertElement() { }
        // didUpdate() { }
        // didRender() { }
    }
    get args() {
        Object(_glimmer_tracking__WEBPACK_IMPORTED_MODULE_1__["trackedGet"])(this, 'args');
        return this.__args__;
    }
    set args(args) {
        this.__args__ = args;
        Object(_glimmer_tracking__WEBPACK_IMPORTED_MODULE_1__["metaFor"])(this)
            .updatableTagFor('args')
            .inner.update(_glimmer_reference__WEBPACK_IMPORTED_MODULE_0__["CURRENT_TAG"]);
    }
    get element() {
        let { bounds } = this;
        // assert(bounds && bounds.firstNode === bounds.lastNode, `The 'element' property can only be accessed on components that contain a single root element in their template. Try using 'bounds' instead to access the first and last nodes.`);
        return bounds.firstNode;
    }
    get isDestroying() {
        return this[DESTROYING];
    }
    get isDestroyed() {
        return this[DESTROYED];
    }
    willDestroy() { }
    didInsertElement() { }
    didUupdate() { }
}
_c = DESTROYING, _d = DESTROYED;


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/native-modifier-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeModifier", function() { return NativeModifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeModifierDefinitionState", function() { return NativeModifierDefinitionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeModifierManager", function() { return NativeModifierManager; });
class NativeModifier {
    constructor(element, state, args, dom) {
        this.element = element;
        this.state = state;
        this.args = args;
        this.dom = dom;
    }
}
class NativeModifierDefinitionState {
    constructor(Klass) {
        if (Klass) {
            this.instance = new Klass();
        }
    }
}
class NativeModifierManager {
    constructor() {
        this.installedElements = [];
        this.updatedElements = [];
        this.destroyedModifiers = [];
    }
    create(element, state, args, _dynamicScope, dom) {
        return new NativeModifier(element, state, args.capture(), dom);
    }
    getTag({ args: { tag } }) {
        return tag;
    }
    install({ element, args, dom, state }) {
        this.installedElements.push(element);
        let firstParam = args.positional.at(0);
        let param = firstParam !== undefined && firstParam.value();
        dom.setAttribute(element, 'data-modifier', `installed - ${param}`);
        if (state.instance && state.instance.didInsertElement) {
            state.instance.element = element;
            state.instance.didInsertElement(element, args.positional.value(), args.named.value());
        }
        return;
    }
    update({ element, args, dom, state }) {
        this.updatedElements.push(element);
        let firstParam = args.positional.at(0);
        let param = firstParam !== undefined && firstParam.value();
        dom.setAttribute(element, 'data-modifier', `updated - ${param}`);
        if (state.instance && state.instance.didUpdate) {
            state.instance.didUpdate(element, args.positional.value(), args.named.value());
        }
        return;
    }
    getDestructor(modifier) {
        return {
            destroy: () => {
                this.destroyedModifiers.push(modifier);
                let { element, dom, state } = modifier;
                if (state.instance && state.instance.willDestroyElement) {
                    state.instance.willDestroyElement(element);
                }
                dom.removeAttribute(element, 'data-modifier');
            },
        };
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* harmony import */ var _glimmer_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/runtime/dist/modules/es2017/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../nativescript-glimmer/dist/index.js");
/* harmony import */ var _dom_nodes_ElementNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/ElementNode.js");
/* harmony import */ var _glimmer_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/context.js");




// import FrameElement from "../dom//nodes/FrameElement";
// import { createElement, logger as log } from "./basicdom";
// import PageElement from "./native/PageElement";
// import NativeElementNode from "./native/NativeElementNode";
// export type FrameSpec = Frame | FrameElement | string
// export type PageSpec = typeof GlimmerComponent;
// export interface NavigationOptions {
//     page: PageSpec;
//     props?: any;
//     frame?: FrameSpec;
//     animated?: boolean;
//     backstackVisible?: boolean;
//     clearHistory?: boolean;
//     transition?: NavigationTransition;
//     transitionAndroid?: NavigationTransition;
//     transitioniOS?: NavigationTransition;
// }
// function resolveFrame(frameSpec?: FrameSpec): Frame {
//     let targetFrame: Frame;
//     if (!frameSpec) targetFrame = topmost();
//     if (frameSpec instanceof FrameElement) targetFrame = frameSpec.nativeView as Frame;
//     if (frameSpec instanceof Frame) targetFrame = frameSpec;
//     if (typeof frameSpec == "string") {
//         targetFrame = getFrameById(frameSpec)
//         if (!targetFrame) console.log(`Navigate could not find frame with id ${frameSpec}`)
//     }
//     return targetFrame;
// }
// interface ComponentInstanceInfo { element: ElementNode, pageInstance: GlimmerComponent }
// function resolveComponentElement(pageSpec: PageSpec, props?: any): ComponentInstanceInfo {
//     let dummy = createElement('fragment');
//     let pageInstance = new pageSpec({ target: dummy, props: props });
//     let element = dummy.firstElement() as NativeElementNode;
//     return { element, pageInstance }
// }
function navigate(name) {
    let GlimmerNative = ___WEBPACK_IMPORTED_MODULE_1__["default"];
    // let targetFrame = resolveFrame();
    // const document = new DocumentNode();
    const newFrame = new _dom_nodes_ElementNode__WEBPACK_IMPORTED_MODULE_2__["default"]('frame');
    // //setup a frame so we always have somewhere to hang our css
    newFrame.setAttribute("id", name);
    GlimmerNative.document.appendChild(newFrame);
    // const context = Context(GlimmerResolverDelegate);
    // const programArtifacts = artifacts(context);
    // const aotRuntime = AotRuntime(document as any, programArtifacts, GlimmerNative.resolver);
    // if (!targetFrame) {
    //     throw new Error("navigate requires frame option to be a native Frame, a FrameElement, a frame Id, or null")
    // }
    const component = _glimmer_context__WEBPACK_IMPORTED_MODULE_3__["default"].lookupComponent(name).compilable.compile(GlimmerNative.context);
    let cursor = { element: newFrame, nextSibling: null };
    const iterator = Object(_glimmer_runtime__WEBPACK_IMPORTED_MODULE_0__["renderAot"])(GlimmerNative.aotRuntime, component, cursor);
    try {
        console.log('About to render new result');
        const result = Object(_glimmer_runtime__WEBPACK_IMPORTED_MODULE_0__["renderSync"])(GlimmerNative.aotRuntime.env, iterator);
        ___WEBPACK_IMPORTED_MODULE_1__["default"].result = result;
        ___WEBPACK_IMPORTED_MODULE_1__["default"]._rendered = true;
        GlimmerNative.rootFrame.nativeView.navigate({
            create: () => {
                return newFrame.firstElement().nativeView;
            }
        });
        console.log('New page rendered');
    }
    catch (error) {
        console.log(`Error in initial render: ${error}`);
    }
    // if (!(element instanceof PageElement))
    //     throw new Error("navigage requires a svelte component with a page element at the root")
    // let nativePage = element.nativeView;
    // const handler = (args: NavigatedData) => {
    //     if (args.isBackNavigation) {
    //         nativePage.off('navigatedFrom', handler)
    //         pageInstance.$destroy()
    //     }
    // }
    // nativePage.on('navigatedFrom', handler)
    // targetFrame.navigate({
    //     create: () => nativePage
    // });
    return null;
}
// export interface BackNavigationOptions {
//     frame?: FrameSpec;
//     to?: PageElement;
// }
// export function goBack(options: BackNavigationOptions = {}) {
//     let targetFrame = resolveFrame(options.frame);
//     if (!targetFrame) {
//         throw new Error("goback requires frame option to be a native Frame, a FrameElement, a frame Id, or null")
//     }
//     let backStackEntry: BackstackEntry = null;
//     if (options.to) {
//         backStackEntry = targetFrame.backStack.find(e => e.resolvedPage === options.to.nativeView);
//         if (!backStackEntry) {
//             throw new Error("Couldn't find the destination page in the frames backstack")
//         }
//     }
//     return targetFrame.goBack(backStackEntry);
// }
// export interface ShowModalOptions {
//     page: PageSpec
//     props?: any
//     android?: { cancelable: boolean }
//     ios?: { presentationStyle: any }
//     animated?: boolean
//     fullscreen?: boolean
//     stretched: boolean
// }
// const modalStack: ComponentInstanceInfo[] = []
// export function showModal<T>(modalOptions: ShowModalOptions): Promise<T> {
//     let { page, props = {}, ...options } = modalOptions;
//     //Get this before any potential new frames are created by component below
//     let modalLauncher = topmost().currentPage;
//     let componentInstanceInfo = resolveComponentElement(page, props);
//     let modalView: ViewBase = componentInstanceInfo.element.nativeView;
//     return new Promise((resolve, reject) => {
//         let resolved = false;
//         const closeCallback = (result: T) => {
//             if (resolved) return;
//             resolved = true;
//             try {
//                 componentInstanceInfo.pageInstance.$destroy(); //don't let an exception in destroy kill the promise callback
//             } finally {
//                 resolve(result);
//             }
//         }
//         modalStack.push(componentInstanceInfo);
//         modalLauncher.showModal(modalView, { ...options, context: {}, closeCallback })
//     });
// }
// export function closeModal(result: any): void {
//     let modalPageInstanceInfo = modalStack.pop();
//     modalPageInstanceInfo.element.nativeView.closeModal(result);
// }


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/resolver.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resolver; });
/* harmony import */ var _glimmer_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/runtime/dist/modules/es2017/index.js");
/* harmony import */ var _native_modifier_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/native-modifier-manager.js");
/* harmony import */ var _native_component_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/native-component-manager.js");
/* harmony import */ var _native_capabilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/native-capabilities.js");
/* harmony import */ var _glimmer_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@glimmer/util/dist/modules/es2017/index.js");





class NativeComponentDefinition {
    constructor(name, manager, ComponentClass, handle) {
        this.name = name;
        this.manager = manager;
        this.ComponentClass = ComponentClass;
        this.handle = handle;
        this.state = {
            name,
            capabilities: _native_capabilities__WEBPACK_IMPORTED_MODULE_3__["default"],
            ComponentClass,
            handle
        };
    }
    toJSON() {
        return { GlimmerDebug: `<component-definition name="${this.name}">` };
    }
}
class Resolver {
    constructor() {
        this.table = [];
        this.managers = {};
    }
    resolve(handle) {
        console.log('in resolver resolve');
        let value = this.table[handle];
        return (value);
    }
    managerFor(managerId = 'main') {
        let manager = this.managers[managerId];
        if (manager) {
            return manager;
        }
        manager = new _native_component_manager__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.managers[managerId] = manager;
        return manager;
    }
    getInvocation(locator) {
        throw new Error('unimplemented getInvocation');
    }
    lookupComponent(name, referrer) {
        let definition = null;
        this.table.forEach((component) => {
            if (component.name === name) {
                definition = component;
            }
        });
        return definition;
    }
    lookupPartial(name, referrer) {
        throw Object(_glimmer_util__WEBPACK_IMPORTED_MODULE_4__["unreachable"])();
    }
    registerComponent(name, ComponentClass) {
        const handle = this.table.length;
        let manager = this.managerFor();
        const definition = new NativeComponentDefinition(name, manager, ComponentClass, handle);
        // const definition = (this.resolveComponentDefinition(ComponentClass as Factory<unknown>) as any);
        // definition.state.handle = handle;
        this.table.push(definition);
        return handle;
    }
    registerTemplateOnlyComponent() {
        const handle = this.table.length;
        this.table.push(_glimmer_runtime__WEBPACK_IMPORTED_MODULE_0__["TEMPLATE_ONLY_COMPONENT"]);
        return handle;
    }
    registerHelper(helper) {
        const handle = this.table.length;
        this.table.push(helper);
        return handle;
    }
    registerModifier(ModifierClass) {
        const handle = this.table.length;
        let state = new _native_modifier_manager__WEBPACK_IMPORTED_MODULE_1__["NativeModifierDefinitionState"](ModifierClass);
        let manager = new _native_modifier_manager__WEBPACK_IMPORTED_MODULE_1__["NativeModifierManager"]();
        this.table.push({
            state,
            manager
        });
        return handle;
    }
}


/***/ }),

/***/ "../../nativescript-glimmer/dist/lib/glimmer/setup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupGlimmer; });
/* harmony import */ var _glimmer_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/compiler/dist/modules/es2017/index.js");
/* harmony import */ var _components_link_to_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/components/link-to/component.js");
/* harmony import */ var _helpers_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/helpers/action.js");
/* harmony import */ var _modifiers_on__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../nativescript-glimmer/dist/lib/glimmer/modifiers/on.js");




// const precompile = require('@glimmer/compiler').precompile;
function setupGlimmer(resolverDelegate, resolver) {
    const actionHandle = resolver.registerHelper(_helpers_action__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const onModifierHandle = resolver.registerModifier(_modifiers_on__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const linkToHandle = resolver.registerComponent('LinkTo', _components_link_to_component__WEBPACK_IMPORTED_MODULE_1__["default"]);
    resolverDelegate.registerHelper('action', actionHandle);
    resolverDelegate.registerModifier('on', onModifierHandle);
    // const LinkToTemplate = readFileSync('./components/link-to/template.hbs');
    resolverDelegate.registerComponent('LinkTo', linkToHandle, Object(_glimmer_compiler__WEBPACK_IMPORTED_MODULE_0__["precompile"])(`<button text={{@text}} class="btn link-to" {{on "tap" (action this.onClick)}}></button>`), {
        attributeHook: true,
        createArgs: true,
        createCaller: false,
        createInstance: true,
        dynamicLayout: false,
        dynamicScope: false,
        dynamicTag: true,
        elementHook: true,
        prepareArgs: false,
        updateHook: true,
        wrapped: false
    });
}


/***/ }),

/***/ "../src/ui/components sync recursive ^\\.\\/.*\\/component\\.ts$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Dashboard/component.ts": "../src/ui/components/Dashboard/component.ts",
	"./Demo/component.ts": "../src/ui/components/Demo/component.ts",
	"./Home/component.ts": "../src/ui/components/Home/component.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../src/ui/components sync recursive ^\\.\\/.*\\/component\\.ts$";

/***/ }),

/***/ "../src/ui/components/Dashboard/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/component/dist/modules/es2017/index.js");
/* harmony import */ var _glimmer_tracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@glimmer/tracking/dist/modules/es2017/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class Dashboard extends _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.title = "Welcome to glimmer";
        this.buttonText = "Click Me!";
    }
    buttonClick() {
        console.log('in next');
        this.title = "Ive heard it both ways";
    }
}
__decorate([
    _glimmer_tracking__WEBPACK_IMPORTED_MODULE_1__["tracked"]
], Dashboard.prototype, "title", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxNQUFNLENBQUMsT0FBTyxnQkFBaUIsU0FBUSxTQUFTO0lBQWhEOztRQUVJLFVBQUssR0FBRyxvQkFBb0IsQ0FBQztRQUU3QixlQUFVLEdBQUcsV0FBVyxDQUFBO0lBTTVCLENBQUM7SUFKRyxXQUFXO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDO0lBQzFDLENBQUM7Q0FDSjtBQVJHO0lBREMsT0FBTzt3Q0FDcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5pbXBvcnQgeyB0cmFja2VkIH0gZnJvbSAnQGdsaW1tZXIvdHJhY2tpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEB0cmFja2VkXG4gICAgdGl0bGUgPSBcIldlbGNvbWUgdG8gZ2xpbW1lclwiO1xuXG4gICAgYnV0dG9uVGV4dCA9IFwiQ2xpY2sgTWUhXCJcblxuICAgIGJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gbmV4dCcpO1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJJdmUgaGVhcmQgaXQgYm90aCB3YXlzXCI7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "../src/ui/components/Demo/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/component/dist/modules/es2017/index.js");
/* harmony import */ var _glimmer_tracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@glimmer/tracking/dist/modules/es2017/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class Demo extends _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.title = "Welcome to glimmer";
        this.buttonText = "Click Me!";
    }
    buttonClick() {
        console.log('in next');
        this.title = "Ive heard it both ways";
    }
}
__decorate([
    _glimmer_tracking__WEBPACK_IMPORTED_MODULE_1__["tracked"]
], Demo.prototype, "title", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxNQUFNLENBQUMsT0FBTyxXQUFZLFNBQVEsU0FBUztJQUEzQzs7UUFFSSxVQUFLLEdBQUcsb0JBQW9CLENBQUM7UUFFN0IsZUFBVSxHQUFHLFdBQVcsQ0FBQTtJQU01QixDQUFDO0lBSkcsV0FBVztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUFSRztJQURDLE9BQU87bUNBQ3FCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuaW1wb3J0IHsgdHJhY2tlZCB9IGZyb20gJ0BnbGltbWVyL3RyYWNraW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgQHRyYWNrZWRcbiAgICB0aXRsZSA9IFwiV2VsY29tZSB0byBnbGltbWVyXCI7XG5cbiAgICBidXR0b25UZXh0ID0gXCJDbGljayBNZSFcIlxuXG4gICAgYnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBuZXh0Jyk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBcIkl2ZSBoZWFyZCBpdCBib3RoIHdheXNcIjtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "../src/ui/components/Home/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/component/dist/modules/es2017/index.js");

class Home extends _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxPQUFPLFdBQVksU0FBUSxTQUFTO0NBRTFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxufVxuIl19

/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);

;
    if (false) {}


/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_glimmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../nativescript-glimmer/dist/index.js");
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_1__);

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

const resolverDelegate = new nativescript_glimmer__WEBPACK_IMPORTED_MODULE_0__["ResolverDelegate"]();
const resolver = new nativescript_glimmer__WEBPACK_IMPORTED_MODULE_0__["Resolver"]();
function addTemplates(appFolder) {
    let templatesFile = appFolder.getFile("templates.json");
    let templates = templatesFile.readTextSync();
    // console.log(`Templates: ${templates}`);
    JSON.parse(templates).forEach(template => {
        resolverDelegate.registerComponent(template.name, template.handle, template.source, template.capabilities);
    });
}
function addComponents(appFolder) {
    let componentsFile = appFolder.getFile("components.json");
    let components = componentsFile.readTextSync();
    console.log(`About to resolve require`);
    JSON.parse(components).forEach(component => {
        console.log(`About to resolve require`);
        const classFile = __webpack_require__("../src/ui/components sync recursive ^\\.\\/.*\\/component\\.ts$")(`./${component.name}/component.ts`);
        resolver.registerComponent(component.name, classFile.default);
    });
}
// function requireAll(r) { r.keys().forEach(r); }
// requireAll(require.context('../src/ui/components/', true, /component.ts$/));
try {
    let appFolder = tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_1__["knownFolders"].currentApp();
    addTemplates(appFolder);
    addComponents(appFolder);
    const app = new nativescript_glimmer__WEBPACK_IMPORTED_MODULE_0__["default"]('Demo', resolverDelegate, resolver);
    app.render();
}
catch (errors) {
    console.log(errors);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sbUJBQW1CLEVBQUUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFNUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDaEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUVoQyxzQkFBc0IsU0FBUztJQUMzQixJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEQsSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLDBDQUEwQztJQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNyQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0csQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsdUJBQXVCLFNBQVM7SUFDNUIsSUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFELElBQUksVUFBVSxHQUFHLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsU0FBUyxDQUFDLElBQUksZUFBZSxDQUFDLENBQUM7UUFDakYsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELGtEQUFrRDtBQUNsRCwrRUFBK0U7QUFFL0UsSUFBSSxDQUFDO0lBQ0QsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFBQyxLQUFLLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdGl2ZXNjcmlwdEdsaW1tZXIsIHsgUmVzb2x2ZXIsIFJlc29sdmVyRGVsZWdhdGUgfSBmcm9tICduYXRpdmVzY3JpcHQtZ2xpbW1lcic7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtJztcblxuY29uc3QgcmVzb2x2ZXJEZWxlZ2F0ZSA9IG5ldyBSZXNvbHZlckRlbGVnYXRlKCk7XG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpO1xuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKSB7XG4gICAgbGV0IHRlbXBsYXRlc0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInRlbXBsYXRlcy5qc29uXCIpO1xuICAgIGxldCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNGaWxlLnJlYWRUZXh0U3luYygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBUZW1wbGF0ZXM6ICR7dGVtcGxhdGVzfWApO1xuICAgIEpTT04ucGFyc2UodGVtcGxhdGVzKS5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgICAgcmVzb2x2ZXJEZWxlZ2F0ZS5yZWdpc3RlckNvbXBvbmVudCh0ZW1wbGF0ZS5uYW1lLCB0ZW1wbGF0ZS5oYW5kbGUsIHRlbXBsYXRlLnNvdXJjZSwgdGVtcGxhdGUuY2FwYWJpbGl0aWVzKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ29tcG9uZW50cyhhcHBGb2xkZXIpIHtcbiAgICBsZXQgY29tcG9uZW50c0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcImNvbXBvbmVudHMuanNvblwiKTtcbiAgICBsZXQgY29tcG9uZW50cyA9IGNvbXBvbmVudHNGaWxlLnJlYWRUZXh0U3luYygpO1xuICAgIGNvbnNvbGUubG9nKGBBYm91dCB0byByZXNvbHZlIHJlcXVpcmVgKTtcbiAgICBKU09OLnBhcnNlKGNvbXBvbmVudHMpLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYEFib3V0IHRvIHJlc29sdmUgcmVxdWlyZWApO1xuICAgICAgICBjb25zdCBjbGFzc0ZpbGUgPSByZXF1aXJlKGAuLi9zcmMvdWkvY29tcG9uZW50cy8ke2NvbXBvbmVudC5uYW1lfS9jb21wb25lbnQudHNgKTtcbiAgICAgICAgcmVzb2x2ZXIucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNsYXNzRmlsZS5kZWZhdWx0KTtcbiAgICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gcmVxdWlyZUFsbChyKSB7IHIua2V5cygpLmZvckVhY2gocik7IH1cbi8vIHJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9zcmMvdWkvY29tcG9uZW50cy8nLCB0cnVlLCAvY29tcG9uZW50LnRzJC8pKTtcblxudHJ5IHtcbiAgICBsZXQgYXBwRm9sZGVyID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICBhZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKTtcbiAgICBhZGRDb21wb25lbnRzKGFwcEZvbGRlcik7XG4gICAgY29uc3QgYXBwID0gbmV3IE5hdGl2ZXNjcmlwdEdsaW1tZXIoJ0RlbW8nLCByZXNvbHZlckRlbGVnYXRlLCByZXNvbHZlcik7XG4gICAgYXBwLnJlbmRlcigpO1xufSBjYXRjaChlcnJvcnMpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xufVxuIl19
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2RvbS9lbGVtZW50LXJlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2RvbS9ub2Rlcy9Db21tZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9kb20vbm9kZXMvRG9jdW1lbnROb2RlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2RvbS9ub2Rlcy9FbGVtZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9kb20vbm9kZXMvVGV4dE5vZGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZGFtYmFrZXIvRGV2ZWxvcG1lbnQvR2xpbW1lciBOYXRpdmUvbmF0aXZlc2NyaXB0LWdsaW1tZXIvZGlzdC9saWIvZG9tL25vZGVzL1ZpZXdOb2RlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2RvbS9zZXR1cC1yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9kb20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZGFtYmFrZXIvRGV2ZWxvcG1lbnQvR2xpbW1lciBOYXRpdmUvbmF0aXZlc2NyaXB0LWdsaW1tZXIvZGlzdC9saWIvZ2xpbW1lci9jb21wb25lbnRzL2xpbmstdG8vY29tcG9uZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2dsaW1tZXIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9nbGltbWVyL2hlbHBlcnMvYWN0aW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2dsaW1tZXIvbW9kaWZpZXJzL29uLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2dsaW1tZXIvbmF0aXZlLWNhcGFiaWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9nbGltbWVyL25hdGl2ZS1jb21wb25lbnQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9nbGltbWVyL25hdGl2ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZGFtYmFrZXIvRGV2ZWxvcG1lbnQvR2xpbW1lciBOYXRpdmUvbmF0aXZlc2NyaXB0LWdsaW1tZXIvZGlzdC9saWIvZ2xpbW1lci9uYXRpdmUtbW9kaWZpZXItbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9nbGltbWVyL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZGFtYmFrZXIvRGV2ZWxvcG1lbnQvR2xpbW1lciBOYXRpdmUvbmF0aXZlc2NyaXB0LWdsaW1tZXIvZGlzdC9saWIvZ2xpbW1lci9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9nbGltbWVyL3NldHVwLmpzIiwid2VicGFjazovLy8uLi9zcmMvdWkvY29tcG9uZW50cyBzeW5jIF5cXC5cXC8uKlxcL2NvbXBvbmVudFxcLnRzJCIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2NvbXBvbmVudHMvRGFzaGJvYXJkL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2NvbXBvbmVudHMvRGVtby9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9jb21wb25lbnRzL0hvbWUvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vLy4gc3luYyAocm9vdHxwYWdlKVxcLih4bWx8Y3NzfGpzfHRzfHNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ21EO0FBQ047QUFDd0I7QUFDWjtBQUNXO0FBQ1o7QUFDRjtBQUNNO0FBQ0E7QUFDYjtBQUMvQyxXQUFXLHVCQUF1QjtBQUNsQztBQUN5RDtBQUNHO0FBQ1c7QUFDRjtBQUNSO0FBQ2U7QUFDTTtBQUNvQjtBQUN0Ryw4RUFBb0I7QUFDcEI7QUFDQSxDQUFDO0FBQ2M7QUFDZjtBQUNBLFFBQVEsZ0ZBQWdCO0FBQ3hCLFFBQVEsa0VBQVk7QUFDcEI7QUFDQSw2QkFBNkIsbUVBQVk7QUFDekM7QUFDQSw2QkFBNkIsa0VBQVc7QUFDeEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdFQUFPLENBQUMsNERBQXVCO0FBQ3ZEO0FBQ0E7QUFDQSxvQkFBb0IsNERBQXVCO0FBQzNDO0FBQ0EseUJBQXlCLGtFQUFTO0FBQ2xDO0FBQ0E7QUFDQSx5Q0FBeUMsbUVBQVU7QUFDbkQ7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLHVEQUF1RCxNQUFNO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1RUFBRSxDQUFDLHdFQUFXO0FBQzFCLCtCQUErQixrRUFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUVBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxNQUFNO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxnQkFBZ0Isd0VBQUc7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsMENBQTBDLFlBQVk7QUFDdEQsY0FBYyxrREFBa0Q7QUFDaEU7QUFDTztBQUNQO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxZQUFZO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsWUFBWSxJQUFJLEVBQUU7QUFDMUU7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTtBQUF3QztBQUN6QiwwQkFBMEIsb0RBQVc7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBOzs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDQTtBQUNOO0FBQ0E7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsMkJBQTJCLGlEQUFRO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBLG1CQUFtQixvREFBVztBQUM5QjtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ2lCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLDBCQUEwQixpREFBUTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNFQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDO0FBQ0EsdURBQXVELE1BQU07QUFDN0Q7QUFDQSx5Q0FBeUMsTUFBTSxJQUFJLFVBQVU7QUFDN0Qsd0RBQXdELE1BQU0sSUFBSSxxQ0FBcUM7QUFDdkc7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsK0JBQStCLEtBQUssR0FBRyxpQkFBaUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLElBQUksS0FBSyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTtBQUFrQztBQUNuQix1QkFBdUIsaURBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0U7QUFDcEI7QUFDSztBQUNJO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0IsR0FBRyxhQUFhO0FBQ3hEO0FBQ0E7QUFDQSx3QkFBd0IsOEVBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUVBQVc7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBUztBQUNyQjtBQUNBO0FBQ0EsWUFBWSwrREFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLLEdBQUcsSUFBSSxHQUFHLE1BQU07QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEVBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELElBQUksTUFBTSxjQUFjLElBQUksVUFBVTtBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLLEdBQUcsU0FBUyxHQUFHLE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLLEdBQUcsS0FBSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsS0FBSyxHQUFHLE1BQU07QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsS0FBSyxHQUFHLE1BQU07QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxLQUFLLEdBQUcsVUFBVSxHQUFHLGNBQWM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBVztBQUNuQjtBQUNBO0FBQ0Esb0NBQW9DLEtBQUssR0FBRyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBVztBQUNuQjtBQUNBO0FBQ0Esb0NBQW9DLEtBQUssR0FBRyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDcFBBO0FBQUE7QUFBQTtBQUFBO0FBQ3FEO0FBQzlDO0FBQ1AsSUFBSSx5RUFBZTtBQUNuQjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsSUFBSSx5RUFBZSxnQkFBZ0IsbUJBQU8sQ0FBQyxvREFBMkI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUkseUVBQWUsY0FBYyxtQkFBTyxDQUFDLG9EQUEyQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHlFQUFlLGVBQWUsbUJBQU8sQ0FBQyxrREFBMEI7QUFDcEUsSUFBSSx5RUFBZSxzQkFBc0IsbUJBQU8sQ0FBQywwRUFBMEM7QUFDM0YsSUFBSSx5RUFBZSxnQkFBZ0IsbUJBQU8sQ0FBQyxvREFBMkI7QUFDdEUsSUFBSSx5RUFBZSxvQkFBb0IsbUJBQU8sQ0FBQyw4REFBZ0M7QUFDL0UsSUFBSSx5RUFBZSxxQkFBcUIsbUJBQU8sQ0FBQyw4REFBZ0M7QUFDaEYsSUFBSSx5RUFBZSxxQkFBcUIsbUJBQU8sQ0FBQyx3RUFBeUM7QUFDekYsSUFBSSx5RUFBZSxxQkFBcUIsbUJBQU8sQ0FBQyxnRUFBaUM7QUFDakYsSUFBSSx5RUFBZSxtQkFBbUIsbUJBQU8sQ0FBQyw0REFBK0I7QUFDN0UsSUFBSSx5RUFBZSwyQkFBMkIsbUJBQU8sQ0FBQyw4REFBZ0M7QUFDdEYsSUFBSSx5RUFBZSxrQkFBa0IsbUJBQU8sQ0FBQywwREFBOEI7QUFDM0UsSUFBSSx5RUFBZSxzQkFBc0IsbUJBQU8sQ0FBQywwREFBOEI7QUFDL0UsSUFBSSx5RUFBZSxxQkFBcUIsbUJBQU8sQ0FBQyxnRUFBaUM7QUFDakYsSUFBSSx5RUFBZSx5QkFBeUIsbUJBQU8sQ0FBQyxnRkFBNkM7QUFDakcsSUFBSSx5RUFBZSw0QkFBNEIsbUJBQU8sQ0FBQyw4RUFBd0M7QUFDL0YsSUFBSSx5RUFBZSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBNEI7QUFDeEUsSUFBSSx5RUFBZSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBNEI7QUFDeEUsSUFBSSx5RUFBZSxrQkFBa0IsbUJBQU8sQ0FBQywwREFBOEI7QUFDM0UsSUFBSSx5RUFBZSxxQkFBcUIsbUJBQU8sQ0FBQyx3RUFBeUM7QUFDekYsSUFBSSx5RUFBZSwwQkFBMEIsbUJBQU8sQ0FBQywyREFBd0M7QUFDN0YsSUFBSSx5RUFBZSxlQUFlLG1CQUFPLENBQUMsK0NBQTRCO0FBQ3RFLElBQUkseUVBQWUsbUJBQW1CLG1CQUFPLENBQUMsNERBQStCO0FBQzdFLElBQUkseUVBQWUsWUFBWSxtQkFBTyxDQUFDLDREQUErQjtBQUN0RSxJQUFJLHlFQUFlLGtCQUFrQixtQkFBTyxDQUFDLGdFQUFpQztBQUM5RTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUU7QUFDTjtBQUNWO0FBQzlDO0FBQ1AsMkJBQTJCLGtFQUFJO0FBQy9CO0FBQ087QUFDUCwyQkFBMkIsa0ZBQVU7QUFDckM7QUFDTztBQUNQLDJCQUEyQiw0RUFBVztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrRkFBVTtBQUN4QztBQUNBO0FBQ0EsbUNBQW1DLDRFQUFXO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNDO0FBQzdCLHFCQUFxQiwwREFBUztBQUM3QztBQUNBO0FBQ0EsUUFBUSw0REFBUTtBQUNoQjtBQUNBOzs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDTTtBQUNmO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esd0JBQXdCLG9FQUFVO0FBQ2xDO0FBQ0Esc0JBQXNCLDBFQUFTO0FBQy9CLHVDQUF1QyxVQUFVO0FBQ2pEO0FBQ0E7QUFDTztBQUNQO0FBQ0EscUNBQXFDLEtBQUs7QUFDMUM7QUFDQSxvQkFBb0IsbURBQUssSUFBSSxPQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCw0QkFBNEI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsVUFBVTtBQUNsRDtBQUNBLGFBQWEsK0JBQStCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwRUFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7QUNyRUY7QUFBQTtBQUF3RDtBQUN6QztBQUNmO0FBQ0E7QUFDQSxpQ0FBaUMsYUFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFrQjtBQUNqQztBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsUUFBUTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxRQUFRO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSwyRUFBWSxFQUFDOzs7Ozs7Ozs7QUNiNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EO0FBQ0Q7QUFDbEQsdUJBQXVCLGdFQUFhO0FBQ3BDLDBCQUEwQixZQUFZLEVBQUU7QUFDeEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdFQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrREFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaUQ7QUFDTztBQUN4RDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGNBQWM7QUFDN0MsOENBQThDLGdCQUFnQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QiwyQkFBMkI7QUFDM0IsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyx5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxRQUFRLG9FQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBTztBQUNmO0FBQ0EsMEJBQTBCLDhEQUFXO0FBQ3JDO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDbEI7QUFDQTs7Ozs7Ozs7O0FDdEZBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRLE1BQU0sRUFBRTtBQUM1QjtBQUNBO0FBQ0EsYUFBYSw0QkFBNEI7QUFDekM7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLE1BQU07QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0QkFBNEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLE1BQU07QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7QUFDakI7QUFDVztBQUNNO0FBQ3pEO0FBQ0EsV0FBVywrQkFBK0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsVUFBVTtBQUM1RjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLHdDQUF3Qyw4QkFBOEI7QUFDdEU7QUFDQSxlQUFlO0FBQ2Y7QUFDTztBQUNQLHdCQUF3Qix5Q0FBbUI7QUFDM0M7QUFDQTtBQUNBLHlCQUF5Qiw4REFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQXVCO0FBQzdDLGtCQUFrQjtBQUNsQixxQkFBcUIsa0VBQVM7QUFDOUI7QUFDQTtBQUNBLHVCQUF1QixtRUFBVTtBQUNqQyxRQUFRLHlDQUFtQjtBQUMzQixRQUFRLHlDQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsTUFBTTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakUsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHdCQUF3QixpQkFBaUI7QUFDeEYsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNzQztBQUNqQztBQUNmO0FBQ0w7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0REFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUE4QyxVQUFVO0FBQ3hFO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUVBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlFQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3RUFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNGQUE2QjtBQUNyRCwwQkFBMEIsOEVBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3JGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDSztBQUNUO0FBQ0g7QUFDeEM7QUFDZTtBQUNmLGlEQUFpRCx1REFBVztBQUM1RCx1REFBdUQscURBQVU7QUFDakUsOERBQThELHFFQUFNO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxvRUFBVSxpQkFBaUIsT0FBTyx1QkFBdUIsZ0NBQWdDO0FBQ3hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0Y7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQzJDO0FBQ0M7QUFDN0Isd0JBQXdCLDBEQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFPO0FBQ1g7QUFDQSwyQ0FBMkMsK2hDOzs7Ozs7OztBQ3RCM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDMkM7QUFDQztBQUM3QixtQkFBbUIsMERBQVM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQU87QUFDWDtBQUNBLDJDQUEyQyx1aEM7Ozs7Ozs7O0FDdEIzQztBQUFBO0FBQUE7QUFBMkM7QUFDNUIsbUJBQW1CLDBEQUFTO0FBQzNDO0FBQ0EsMkNBQTJDLG1aOzs7Ozs7O0FDSDNDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBLGlGOzs7Ozs7O0FDUkEsMkJBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTOztBQUV2QjtBQUNBLFFBQVEsS0FBVSxFQUFFLEVBS2Y7Ozs7Ozs7Ozs7Ozs7O0FDVEwsWUFBWSxtQkFBTyxDQUFDLDBFQUF1RDs7O0FBRzNFLFlBQVksS0FBVSxFQUFFLEVBc0JmOztBQUVULDRCQUE0Qiw0RUFBaUU7QUFDN0Y7O0FBRUEsUUFBUSxtQkFBTyxDQUFDLHlEQUFzQztBQUN0RCxRQUErRjtBQUNuQztBQUM1RCw2QkFBNkIscUVBQWdCO0FBQzdDLHFCQUFxQiw2REFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVGQUFRLEdBQXNCLEVBQUUsZUFBZSxjQUFjLENBQUM7QUFDeEY7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQSxvQkFBb0IseUVBQVk7QUFDaEM7QUFDQTtBQUNBLG9CQUFvQiw0REFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICdAZ2xpbW1lci9vcGNvZGUtY29tcGlsZXInO1xuaW1wb3J0IHsgYXJ0aWZhY3RzIH0gZnJvbSAnQGdsaW1tZXIvcHJvZ3JhbSc7XG5pbXBvcnQgeyBBb3RSdW50aW1lLCByZW5kZXJBb3QsIHJlbmRlclN5bmMgfSBmcm9tICdAZ2xpbW1lci9ydW50aW1lJztcbmltcG9ydCB7IHNldFByb3BlcnR5RGlkQ2hhbmdlIH0gZnJvbSAnQGdsaW1tZXIvdHJhY2tpbmcnO1xuaW1wb3J0IHsgbGF1bmNoRXZlbnQsIG9uLCBydW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcbmltcG9ydCBEb2N1bWVudE5vZGUgZnJvbSAnLi9saWIvZG9tL25vZGVzL0RvY3VtZW50Tm9kZSc7XG5pbXBvcnQgRWxlbWVudE5vZGUgZnJvbSAnLi9saWIvZG9tL25vZGVzL0VsZW1lbnROb2RlJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudHMgfSBmcm9tICcuL2xpYi9kb20vc2V0dXAtcmVnaXN0cnknO1xuaW1wb3J0IEdsaW1tZXJSZXNvbHZlckRlbGVnYXRlIGZyb20gJy4vbGliL2dsaW1tZXIvY29udGV4dCc7XG5pbXBvcnQgc2V0dXBHbGltbWVyIGZyb20gJy4vbGliL2dsaW1tZXIvc2V0dXAnO1xuLy8gaW1wb3J0IHsgc2V0UHJvcGVydHlEaWRDaGFuZ2UgfSBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuLy9FeHBvcnRzXG5leHBvcnQgeyBSZXNvbHZlckRlbGVnYXRlIH0gZnJvbSAnLi9saWIvZ2xpbW1lci9jb250ZXh0JztcbmV4cG9ydCB7IHJlZ2lzdGVyRWxlbWVudHMgfSBmcm9tICcuL2xpYi9kb20vc2V0dXAtcmVnaXN0cnknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb2N1bWVudE5vZGUgfSBmcm9tICcuL2xpYi9kb20vbm9kZXMvRG9jdW1lbnROb2RlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWxlbWVudE5vZGUgfSBmcm9tICcuL2xpYi9kb20vbm9kZXMvRWxlbWVudE5vZGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXNvbHZlciB9IGZyb20gJy4vbGliL2dsaW1tZXIvcmVzb2x2ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXRpdmVDb21wb25lbnQgfSBmcm9tICcuL2xpYi9nbGltbWVyL25hdGl2ZS1jb21wb25lbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXRpdmVDYXBhYmlsaXRpZXMgfSBmcm9tICcuL2xpYi9nbGltbWVyL25hdGl2ZS1jYXBhYmlsaXRpZXMnO1xuZXhwb3J0IHsgTmF0aXZlTW9kaWZpZXIsIE5hdGl2ZU1vZGlmaWVyRGVmaW5pdGlvblN0YXRlIH0gZnJvbSAnLi9saWIvZ2xpbW1lci9uYXRpdmUtbW9kaWZpZXItbWFuYWdlcic7XG5zZXRQcm9wZXJ0eURpZENoYW5nZSgoKSA9PiB7XG4gICAgTmF0aXZlc2NyaXB0R2xpbW1lci5zY2hlZHVsZVJlcmVuZGVyKCk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdGl2ZXNjcmlwdEdsaW1tZXIge1xuICAgIGNvbnN0cnVjdG9yKHN0ciwgcmVzb2x2ZXJEZWxlZ2F0ZSwgcmVzb2x2ZXIpIHtcbiAgICAgICAgcmVnaXN0ZXJFbGVtZW50cygpO1xuICAgICAgICBzZXR1cEdsaW1tZXIocmVzb2x2ZXJEZWxlZ2F0ZSwgcmVzb2x2ZXIpO1xuICAgICAgICBOYXRpdmVzY3JpcHRHbGltbWVyLnJlc29sdmVyID0gcmVzb2x2ZXI7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0gbmV3IERvY3VtZW50Tm9kZSgpO1xuICAgICAgICBOYXRpdmVzY3JpcHRHbGltbWVyLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgICAgIHRoaXMucm9vdEZyYW1lID0gbmV3IEVsZW1lbnROb2RlKCdmcmFtZScpO1xuICAgICAgICAvLyAvL3NldHVwIGEgZnJhbWUgc28gd2UgYWx3YXlzIGhhdmUgc29tZXdoZXJlIHRvIGhhbmcgb3VyIGNzc1xuICAgICAgICB0aGlzLnJvb3RGcmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFwcC1yb290LWZyYW1lXCIpO1xuICAgICAgICBOYXRpdmVzY3JpcHRHbGltbWVyLmRvY3VtZW50LmFwcGVuZENoaWxkKHRoaXMucm9vdEZyYW1lKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IENvbnRleHQoR2xpbW1lclJlc29sdmVyRGVsZWdhdGUpO1xuICAgICAgICBOYXRpdmVzY3JpcHRHbGltbWVyLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBjb25zb2xlLmxvZygnQ29udGV4dCBDcmVhdGVkJyk7XG4gICAgICAgIHRoaXMubWFpbiA9IEdsaW1tZXJSZXNvbHZlckRlbGVnYXRlLmxvb2t1cENvbXBvbmVudChzdHIpLmNvbXBpbGFibGUuY29tcGlsZShOYXRpdmVzY3JpcHRHbGltbWVyLmNvbnRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZygnTWFpbiBDcmVhdGVkJyk7XG4gICAgICAgIHRoaXMuYXJ0aWZhY3RzID0gYXJ0aWZhY3RzKE5hdGl2ZXNjcmlwdEdsaW1tZXIuY29udGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBcnRpZmFjdHMgQ3JlYXRlZCcpO1xuICAgICAgICAvLyBAdHMtaWdub3JlOiBVbnJlYWNoYWJsZSBjb2RlIGVycm9yXG4gICAgICAgIE5hdGl2ZXNjcmlwdEdsaW1tZXIuYW90UnVudGltZSA9IEFvdFJ1bnRpbWUoTmF0aXZlc2NyaXB0R2xpbW1lci5kb2N1bWVudCwgdGhpcy5hcnRpZmFjdHMsIHJlc29sdmVyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FvdFJ1bnRpbWUgQ3JlYXRlZCcpO1xuICAgICAgICB0aGlzLmN1cnNvciA9IHsgZWxlbWVudDogdGhpcy5yb290RnJhbWUsIG5leHRTaWJsaW5nOiBudWxsIH07XG4gICAgICAgIE5hdGl2ZXNjcmlwdEdsaW1tZXIucm9vdEZyYW1lID0gdGhpcy5yb290RnJhbWU7XG4gICAgfVxuICAgIHN0YXRpYyBzY2hlZHVsZVJlcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5fc2NoZWR1bGVkIHx8ICF0aGlzLl9yZW5kZXJlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5fcmVuZGVyaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuX3JlcmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgfSksIDApO1xuICAgIH1cbiAgICBzdGF0aWMgX3JlcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHsgZW52IH0gPSB0aGlzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0luIHJlLXJlbmRlcicpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFvdFJ1bnRpbWUuZW52LmJlZ2luKCk7XG4gICAgICAgICAgICAgICAgeWllbGQgTmF0aXZlc2NyaXB0R2xpbW1lci5yZXN1bHQucmVyZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFvdFJ1bnRpbWUuZW52LmNvbW1pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9kaWRSZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9kaWRFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gcmVuZGVyQ29tcG9uZW50KCkge1xuICAgIC8vICAgICBsZXQgaXRlcmF0b3IgPSByZW5kZXJBb3QodGhpcy5hb3RSdW50aW1lLCB0aGlzLm1haW4sIHRoaXMuY3Vyc29yKTtcbiAgICAvLyAgICAgdGhpcy5pdGVyYXRvciA9IGl0ZXJhdG9yO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnSXRlcmF0b3IgQ3JlYXRlZCcpO1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVuZGVyU3luYyh0aGlzLmFvdFJ1bnRpbWUuZW52LCBpdGVyYXRvcik7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnUmVuZGVyIFN5bmMnKTtcbiAgICAvLyAgICAgICAgIE5hdGl2ZXNjcmlwdEdsaW1tZXIucmVzdWx0ID0gcmVzdWx0O1xuICAgIC8vICAgICAgICAgTmF0aXZlc2NyaXB0R2xpbW1lci5fcmVuZGVyZWQgPSB0cnVlO1xuICAgIC8vICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgaW4gaW5pdGlhbCByZW5kZXI6ICR7ZXJyb3J9YCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLy8gVGhpcyBpcyBzdXBlciBoYWNreSBhbmQgbGlrZWx5IG5lZWRzIHRvIGJlIGFic3RyYWN0ZWQgYXdheS5cbiAgICAvLyAgICAgcm9vdEZyYW1lLm5hdGl2ZVZpZXcubmF2aWdhdGUoe1xuICAgIC8vICAgICAgICAgY3JlYXRlOiAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHJvb3RGcmFtZS5maXJzdEVsZW1lbnQoKS5uYXRpdmVWaWV3XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHJvb3RGcmFtZSA9IHRoaXMucm9vdEZyYW1lO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy93YWl0IGZvciBsYXVuY2hcbiAgICAgICAgICAgIG9uKGxhdW5jaEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZXJhdG9yID0gcmVuZGVyQW90KE5hdGl2ZXNjcmlwdEdsaW1tZXIuYW90UnVudGltZSwgdGhpcy5tYWluLCB0aGlzLmN1cnNvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRvciA9IGl0ZXJhdG9yO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJdGVyYXRvciBDcmVhdGVkJyk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVuZGVyU3luYyhOYXRpdmVzY3JpcHRHbGltbWVyLmFvdFJ1bnRpbWUuZW52LCBpdGVyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW5kZXIgU3luYycpO1xuICAgICAgICAgICAgICAgICAgICBOYXRpdmVzY3JpcHRHbGltbWVyLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgTmF0aXZlc2NyaXB0R2xpbW1lci5fcmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGluIGluaXRpYWwgcmVuZGVyOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHN1cGVyIGhhY2t5IGFuZCBsaWtlbHkgbmVlZHMgdG8gYmUgYWJzdHJhY3RlZCBhd2F5LlxuICAgICAgICAgICAgICAgIHJvb3RGcmFtZS5uYXRpdmVWaWV3Lm5hdmlnYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdEZyYW1lLmZpcnN0RWxlbWVudCgpLm5hdGl2ZVZpZXc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBydW4oe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdEZyYW1lLm5hdGl2ZVZpZXc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5OYXRpdmVzY3JpcHRHbGltbWVyLl9zY2hlZHVsZWQgPSBmYWxzZTtcbk5hdGl2ZXNjcmlwdEdsaW1tZXIuX3JlbmRlcmVkID0gZmFsc2U7XG5OYXRpdmVzY3JpcHRHbGltbWVyLl9yZW5kZXJpbmcgPSBmYWxzZTtcbiIsImNvbnN0IGVsZW1lbnRNYXAgPSB7fTtcbmNvbnN0IGRhc2hSZWdFeHAgPSAvLS9nO1xuY29uc3QgZGVmYXVsdFZpZXdNZXRhID0ge1xuICAgIHNraXBBZGRUb0RvbTogZmFsc2UsXG4gICAgaXNVbmFyeVRhZzogZmFsc2UsXG4gICAgdGFnTmFtZXNwYWNlOiAnJyxcbiAgICBjYW5CZUxlZnRPcGVuVGFnOiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGxcbn07XG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRWxlbWVudE5hbWUoZWxlbWVudE5hbWUpIHtcbiAgICBjb25zb2xlLmxvZyhgTm9ybWFsaXplIEVsZW1lbnQgbmFtZSAke2VsZW1lbnROYW1lfWApO1xuICAgIHJldHVybiBgJHtlbGVtZW50TmFtZS5yZXBsYWNlKGRhc2hSZWdFeHAsICcnKS50b0xvd2VyQ2FzZSgpfWA7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJFbGVtZW50KGVsZW1lbnROYW1lLCByZXNvbHZlciwgbWV0YSA9IG51bGwpIHtcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZUVsZW1lbnROYW1lKGVsZW1lbnROYW1lKTtcbiAgICBtZXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFZpZXdNZXRhLCBtZXRhKTtcbiAgICBpZiAoZWxlbWVudE1hcFtub3JtYWxpemVkTmFtZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IGZvciAke2VsZW1lbnROYW1lfSBhbHJlYWR5IHJlZ2lzdGVyZWQuYCk7XG4gICAgfVxuICAgIGNvbnN0IGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlcjogcmVzb2x2ZXIsXG4gICAgICAgIG1ldGE6IG1ldGFcbiAgICB9O1xuICAgIGVsZW1lbnRNYXBbbm9ybWFsaXplZE5hbWVdID0gZW50cnk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudE1hcCgpIHtcbiAgICByZXR1cm4gZWxlbWVudE1hcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3Q2xhc3MoZWxlbWVudE5hbWUpIHtcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZUVsZW1lbnROYW1lKGVsZW1lbnROYW1lKTtcbiAgICBjb25zdCBlbnRyeSA9IGVsZW1lbnRNYXBbbm9ybWFsaXplZE5hbWVdO1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8ga25vd24gY29tcG9uZW50IGZvciBlbGVtZW50ICR7ZWxlbWVudE5hbWV9LmApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZW50cnkucmVzb2x2ZXIoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgQ291bGQgbm90IGxvYWQgdmlldyBmb3I6ICR7ZWxlbWVudE5hbWV9LiAke2V9YCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdNZXRhKGVsZW1lbnROYW1lKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVFbGVtZW50TmFtZShlbGVtZW50TmFtZSk7XG4gICAgbGV0IG1ldGEgPSBkZWZhdWx0Vmlld01ldGE7XG4gICAgY29uc3QgZW50cnkgPSBlbGVtZW50TWFwW25vcm1hbGl6ZWROYW1lXTtcbiAgICBpZiAoZW50cnkgJiYgZW50cnkubWV0YSkge1xuICAgICAgICBtZXRhID0gZW50cnkubWV0YTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNLbm93blZpZXcoZWxlbWVudE5hbWUpIHtcbiAgICByZXR1cm4gZWxlbWVudE1hcFtub3JtYWxpemVFbGVtZW50TmFtZShlbGVtZW50TmFtZSldO1xufVxuIiwiaW1wb3J0IEVsZW1lbnROb2RlIGZyb20gJy4vRWxlbWVudE5vZGUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudE5vZGUgZXh0ZW5kcyBFbGVtZW50Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICBzdXBlcignY29tbWVudCcpO1xuICAgICAgICB0aGlzLm5vZGVUeXBlID0gODtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgY29uc29sZS5sb2coYGNyZWF0ZWQgJHt0aGlzfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21tZW50Tm9kZSBmcm9tICcuL0NvbW1lbnROb2RlJztcbmltcG9ydCBFbGVtZW50Tm9kZSBmcm9tICcuL0VsZW1lbnROb2RlJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL1RleHROb2RlJztcbmltcG9ydCBWaWV3Tm9kZSBmcm9tICcuL1ZpZXdOb2RlJztcbmZ1bmN0aW9uKiBlbGVtZW50SXRlcmF0b3IoZWwpIHtcbiAgICB5aWVsZCBlbDtcbiAgICBmb3IgKGxldCBjaGlsZCBvZiBlbC5jaGlsZE5vZGVzKSB7XG4gICAgICAgIHlpZWxkKiBlbGVtZW50SXRlcmF0b3IoY2hpbGQpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIFZpZXdOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50YWdOYW1lID0gXCJkb2NOb2RlXCI7XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSA5O1xuICAgICAgICAvL3RoaXMuZG9jdW1lbnRFbGVtZW50ID0gbmV3IEVsZW1lbnROb2RlKCdkb2N1bWVudCcpXG4gICAgICAgIHRoaXMuaGVhZCA9IG5ldyBFbGVtZW50Tm9kZSgnaGVhZCcpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuaGVhZCk7XG4gICAgICAgIC8qLy8gbWFrZSBzdGF0aWMgbWV0aG9kcyBhY2Nlc3NpYmxlIHZpYSB0aGlzXG4gICAgICAgIHRoaXMuY3JlYXRlQ29tbWVudCA9IERvY3VtZW50Tm9kZS5jcmVhdGVDb21tZW50XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCA9IERvY3VtZW50Tm9kZS5jcmVhdGVFbGVtZW50XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudE5TID0gRG9jdW1lbnROb2RlLmNyZWF0ZUVsZW1lbnROU1xuICAgICAgICB0aGlzLmNyZWF0ZVRleHROb2RlID0gRG9jdW1lbnROb2RlLmNyZWF0ZVRleHROb2RlKi9cbiAgICAgICAgY29uc29sZS5sb2coYGNyZWF0ZWQgJHt0aGlzfWApO1xuICAgIH1cbiAgICBjcmVhdGVDb21tZW50KHRleHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb21tZW50Tm9kZSh0ZXh0KTtcbiAgICB9XG4gICAgY3JlYXRlRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgRWxlbWVudE5vZGUodGFnTmFtZSk7XG4gICAgfVxuICAgIGNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsIHRhZ05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICB9XG4gICAgY3JlYXRlVGV4dE5vZGUodGV4dCkge1xuICAgICAgICByZXR1cm4gbmV3IFRleHROb2RlKHRleHQpO1xuICAgIH1cbiAgICBnZXRFbGVtZW50QnlJZChpZCkge1xuICAgICAgICBmb3IgKGxldCBlbCBvZiBlbGVtZW50SXRlcmF0b3IodGhpcykpIHtcbiAgICAgICAgICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSAmJiAoZWwpLmlkID09PSBpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgVmlld05vZGUgZnJvbSAnLi9WaWV3Tm9kZSc7XG5pbXBvcnQgeyBnZXRWaWV3Q2xhc3MgfSBmcm9tICcuLi9lbGVtZW50LXJlZ2lzdHJ5JztcbmZ1bmN0aW9uIGNhbWVsaXplKGtlYmFiKSB7XG4gICAgcmV0dXJuIGtlYmFiLnJlcGxhY2UoL1tcXC1dKyhcXHcpL2csIChtLCBsKSA9PiBsLnRvVXBwZXJDYXNlKCkpO1xufVxuY29uc3QgRVZFTlRfQVRUUklCVVRFUyA9IE9iamVjdC5mcmVlemUoW1xuICAgICd0YXAnXG5dKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnROb2RlIGV4dGVuZHMgVmlld05vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRhZ05hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ub2RlVHlwZSA9IDE7XG4gICAgICAgIHRoaXMudGFnTmFtZSA9IHRhZ05hbWU7XG4gICAgICAgIC8vdGhlcmUgYXJlIHNvbWUgc3BlY2lhbCBlbGVtZW50cyB0aGF0IGRvbid0IGV4aXN0IG5hdGl2ZWx5XG4gICAgICAgIGNvbnN0IHZpZXdDbGFzcyA9IGdldFZpZXdDbGFzcyh0YWdOYW1lKTtcbiAgICAgICAgaWYgKHZpZXdDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fbmF0aXZlVmlldyA9IG5ldyB2aWV3Q2xhc3MoKTtcbiAgICAgICAgICAgIHRoaXMuX25hdGl2ZVZpZXcuX19HbGltbWVyTmF0aXZlRWxlbWVudF9fID0gdGhpcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXN9IGhhcyB2aWV3IGNsYXNzYCk7XG4gICAgICAgICAgICBFVkVOVF9BVFRSSUJVVEVTLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDaGVja2luZyBmb3IgYXR0dHJpYnV0ZSAke2V2ZW50fWApO1xuICAgICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSB0aGlzLmdldEF0dHJpYnV0ZShldmVudCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEF0dHJpYnV0ZSAke2V2ZW50fTogJHthdHRyaWJ1dGV9YCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYE5hdGl2ZSB2aWV3IGF0dHJpYnV0ZSAke2V2ZW50fTogJHt0aGlzLl9uYXRpdmVWaWV3LmdldEF0dHJpYnV0ZShldmVudCl9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYGNyZWF0ZWQgJHt0aGlzfSAke3RoaXMuX25hdGl2ZVZpZXd9YCk7XG4gICAgICAgIGxldCBzZXRTdHlsZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZ2V0U3R5bGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgICAgICBzZXRQcm9wZXJ0eTogKHByb3BlcnR5TmFtZSwgdmFsdWUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdHlsZShjYW1lbGl6ZShwcm9wZXJ0eU5hbWUpLCB2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlUHJvcGVydHk6IChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0eWxlKGNhbWVsaXplKHByb3BlcnR5TmFtZSksIG51bGwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldCBjc3NUZXh0KCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ290IGNzcyB0ZXh0XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRTdHlsZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCBjc3NUZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXQgY3NzIHRleHRcIik7XG4gICAgICAgICAgICAgICAgc2V0U3R5bGUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBzZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgc2V0QXR0cmlidXRlOiAke2tleX0gLSAke3ZhbHVlfWApO1xuICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ29uOicpKSB7XG4gICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyKDMpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZENoaWxkKGNoaWxkTm9kZSkge1xuICAgICAgICBzdXBlci5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRleHQoKGNoaWxkTm9kZSkudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gNykge1xuICAgICAgICAgICAgKGNoaWxkTm9kZSkuc2V0T25Ob2RlKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluc2VydEJlZm9yZShjaGlsZE5vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgICAgICAgc3VwZXIuaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgcmVmZXJlbmNlTm9kZSk7XG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dCgoY2hpbGROb2RlKS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSA3KSB7XG4gICAgICAgICAgICAoY2hpbGROb2RlKS5zZXRPbk5vZGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGROb2RlKSB7XG4gICAgICAgIHN1cGVyLnJlbW92ZUNoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dCgnJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gNykge1xuICAgICAgICAgICAgKGNoaWxkTm9kZSkuY2xlYXJPbk5vZGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgVmlld05vZGUgZnJvbSAnLi9WaWV3Tm9kZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Tm9kZSBleHRlbmRzIFZpZXdOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSAzO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLl9tZXRhID0ge1xuICAgICAgICAgICAgc2tpcEFkZFRvRG9tOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKGBjcmVhdGVkICR7dGhpc31gKTtcbiAgICB9XG4gICAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZS5zZXRUZXh0KHRleHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGdldFZpZXdNZXRhLCBub3JtYWxpemVFbGVtZW50TmFtZSB9IGZyb20gJy4uL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgaW5zZXJ0Q2hpbGQsIHJlbW92ZUNoaWxkIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5jb25zdCBYTUxfQVRUUklCVVRFUyA9IE9iamVjdC5mcmVlemUoW1xuICAgICd0YXAnLFxuICAgICdzdHlsZScsXG4gICAgJ3Jvd3MnLFxuICAgICdjb2x1bW5zJyxcbiAgICAnZm9udEF0dHJpYnV0ZXMnXG5dKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ub2RlVHlwZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3RhZ05hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcmV2U2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLl9vd25lckRvY3VtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbmF0aXZlVmlldyA9IG51bGw7XG4gICAgICAgIHRoaXMuX21ldGEgPSBudWxsO1xuICAgIH1cbiAgICBoYXNBdHRyaWJ1dGUoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmVtb3ZlQXR0cmlidXRlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9KCR7dGhpcy50YWdOYW1lfSlgO1xuICAgIH1cbiAgICBzZXQgdGFnTmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMuX3RhZ05hbWUgPSBub3JtYWxpemVFbGVtZW50TmFtZShuYW1lKTtcbiAgICB9XG4gICAgZ2V0IHRhZ05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YWdOYW1lO1xuICAgIH1cbiAgICBnZXQgZmlyc3RDaGlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPyB0aGlzLmNoaWxkTm9kZXNbMF0gOiBudWxsO1xuICAgIH1cbiAgICBnZXQgbGFzdENoaWxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA/IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV0gOiBudWxsO1xuICAgIH1cbiAgICBnZXQgbmF0aXZlVmlldygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZVZpZXc7XG4gICAgfVxuICAgIHNldCBuYXRpdmVWaWV3KHZpZXcpIHtcbiAgICAgICAgaWYgKHRoaXMuX25hdGl2ZVZpZXcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3Qgb3ZlcnJpZGUgbmF0aXZlIHZpZXcuYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbmF0aXZlVmlldyA9IHZpZXc7XG4gICAgfVxuICAgIGdldCBtZXRhKCkge1xuICAgICAgICBpZiAodGhpcy5fbWV0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21ldGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLl9tZXRhID0gZ2V0Vmlld01ldGEodGhpcy50YWdOYW1lKSk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgZ2V0IG93bmVyRG9jdW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3duZXJEb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWwgPSB0aGlzO1xuICAgICAgICB3aGlsZSAoZWwgIT0gbnVsbCAmJiBlbC5ub2RlVHlwZSAhPT0gOSkge1xuICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5fb3duZXJEb2N1bWVudCA9IGVsKTtcbiAgICB9XG4gICAgZ2V0QXR0cmlidXRlKGtleSkge1xuICAgICAgICByZXR1cm4gKHRoaXMubmF0aXZlVmlldylba2V5XTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBzZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBudiA9IHRoaXMubmF0aXZlVmlldztcbiAgICAgICAgaWYgKCFudilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gbm9ybWFsaXplIGtleVxuICAgICAgICBpZiAoaXNBbmRyb2lkICYmIGtleS5zdGFydHNXaXRoKCdhbmRyb2lkOicpKSB7XG4gICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyKDgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0lPUyAmJiBrZXkuc3RhcnRzV2l0aCgnaW9zOicpKSB7XG4gICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyKDQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRyeSB0byBmaXggY2FzZVxuICAgICAgICBsZXQgbG93ZXJrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZm9yIChsZXQgcmVhbEtleSBpbiBudikge1xuICAgICAgICAgICAgaWYgKGxvd2Vya2V5ID09IHJlYWxLZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIGtleSA9IHJlYWxLZXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYHNldEF0dHIgJHt0aGlzfSAke2tleX0gJHt2YWx1ZX1gKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChYTUxfQVRUUklCVVRFUy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbnZba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZGV0ZWN0IGV4cGFuZGFibGUgYXR0cnMgZm9yIGJvb2xlYW4gdmFsdWVzXG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMtcHJvcHMuaHRtbCNQYXNzaW5nLWEtQm9vbGVhblxuICAgICAgICAgICAgICAgIGlmIChpc0Jvb2xlYW4obnZba2V5XSkgJiYgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG52W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBidXQgbG9nXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldCBhdHRyaWJ1dGUgdGhyZXcgYW4gZXJyb3IsIGF0dHI6JHtrZXl9IG9uICR7dGhpcy5fdGFnTmFtZX06ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgc2V0U3R5bGUocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzZXRTdHlsZSAke3RoaXN9ICR7cHJvcGVydHl9ICR7dmFsdWV9YCk7XG4gICAgICAgIGlmICghKHZhbHVlID0gdmFsdWUudHJpbSgpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHkuZW5kc1dpdGgoJ0FsaWduJykpIHtcbiAgICAgICAgICAgIC8vIE5hdGl2ZVNjcmlwdCB1c2VzIEFsaWdubWVudCBpbnN0ZWFkIG9mIEFsaWduLCB0aGlzIGVuc3VyZXMgdGhhdCB0ZXh0LWFsaWduIHdvcmtzXG4gICAgICAgICAgICBwcm9wZXJ0eSArPSAnbWVudCc7XG4gICAgICAgIH1cbiAgICAgICAgKHRoaXMubmF0aXZlVmlldy5zdHlsZSlbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzZXRUZXh0ICR7dGhpc30gJHt0ZXh0fWApO1xuICAgICAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnNldFRleHQodGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGV4dCcsIHRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgYWRkIGV2ZW50IGxpc3RlbmVyICR7dGhpc30gJHtldmVudH1gKTtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3Lm9uKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGByZW1vdmUgZXZlbnQgbGlzdGVuZXIgJHt0aGlzfSAke2V2ZW50fWApO1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXcub2ZmKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVWaWV3KSB7XG4gICAgICAgICAgICAvL25hdGl2ZXNjcmlwdCB1c2VzIHRoZSBFdmVudE5hbWUgd2hpbGUgZG9tIHVzZXMgVHlwZVxuICAgICAgICAgICAgY29uc29sZS5sb2coYEluIGRpc3BhdGNoIGV2ZW50OiAke2V2ZW50fWApO1xuICAgICAgICAgICAgZXZlbnQuZXZlbnROYW1lID0gZXZlbnQudHlwZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBldmVudCBuYW1lOiAke2V2ZW50LmV2ZW50TmFtZX1gKTtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5ub3RpZnkoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluc2VydEJlZm9yZShjaGlsZE5vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGluc2VydCBiZWZvcmUgJHt0aGlzfSAke2NoaWxkTm9kZX0gJHtyZWZlcmVuY2VOb2RlfWApO1xuICAgICAgICBpZiAoIWNoaWxkTm9kZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBpbnNlcnQgY2hpbGQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW4gc29tZSByYXJlIGNhc2VzIGluc2VydEJlZm9yZSBpcyBjYWxsZWQgd2l0aCBhIG51bGwgcmVmZXJlbmNlTm9kZVxuICAgICAgICAvLyB0aGlzIG1ha2VzIHN1cmUgdGhhdCBpdCBnZXQncyBhcHBlbmRlZCBhcyB0aGUgbGFzdCBjaGlsZFxuICAgICAgICBpZiAoIXJlZmVyZW5jZU5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBpbnNlcnQgY2hpbGQsIGJlY2F1c2UgdGhlIHJlZmVyZW5jZSBub2RlIGhhcyBhIGRpZmZlcmVudCBwYXJlbnQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZS5wYXJlbnROb2RlICYmIGNoaWxkTm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGluc2VydCBjaGlsZCwgYmVjYXVzZSBpdCBhbHJlYWR5IGhhcyBhIGRpZmZlcmVudCBwYXJlbnQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZS5wYXJlbnROb2RlID09PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIHRocm93IGFuIGVycm9yIGhlcmUsIGJlY2F1c2UgaXQgaXMgYSB2YWxpZCBjYXNlXG4gICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSB3aGVuIHN3aXRjaGluZyB0aGUgb3JkZXIgb2YgZWxlbWVudHMgaW4gdGhlIHRyZWVcbiAgICAgICAgICAgIC8vIGZpeGVzICMxMjcgLSBzZWUgZm9yIG1vcmUgZGV0YWlsc1xuICAgICAgICAgICAgLy8gZml4ZXMgIzI0MFxuICAgICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBpbnNlcnQgY2hpbGQsIGJlY2F1c2UgaXQgaXMgYWxyZWFkeSBhIGNoaWxkLmApXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmZXJlbmNlTm9kZSk7XG4gICAgICAgIGNoaWxkTm9kZS5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgY2hpbGROb2RlLm5leHRTaWJsaW5nID0gcmVmZXJlbmNlTm9kZTtcbiAgICAgICAgY2hpbGROb2RlLnByZXZTaWJsaW5nID0gdGhpcy5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgIHJlZmVyZW5jZU5vZGUucHJldlNpYmxpbmcgPSBjaGlsZE5vZGU7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkTm9kZSk7XG4gICAgICAgIGluc2VydENoaWxkKHRoaXMsIGNoaWxkTm9kZSwgaW5kZXgpO1xuICAgIH1cbiAgICBhcHBlbmRDaGlsZChjaGlsZE5vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGFwcGVuZCBjaGlsZCAke3RoaXN9ICR7Y2hpbGROb2RlfWApO1xuICAgICAgICBpZiAoIWNoaWxkTm9kZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBhcHBlbmQgY2hpbGQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZS5wYXJlbnROb2RlICYmIGNoaWxkTm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGFwcGVuZCBjaGlsZCwgYmVjYXVzZSBpdCBhbHJlYWR5IGhhcyBhIGRpZmZlcmVudCBwYXJlbnQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZS5wYXJlbnROb2RlID09PSB0aGlzKSB7XG4gICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIHRocm93IGFuIGVycm9yIGhlcmUsIGJlY2F1c2UgaXQgaXMgYSB2YWxpZCBjYXNlXG4gICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSB3aGVuIHN3aXRjaGluZyB0aGUgb3JkZXIgb2YgZWxlbWVudHMgaW4gdGhlIHRyZWVcbiAgICAgICAgICAgIC8vIGZpeGVzICMxMjcgLSBzZWUgZm9yIG1vcmUgZGV0YWlsc1xuICAgICAgICAgICAgLy8gZml4ZXMgIzI0MFxuICAgICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBhcHBlbmQgY2hpbGQsIGJlY2F1c2UgaXQgaXMgYWxyZWFkeSBhIGNoaWxkLmApXG4gICAgICAgIH1cbiAgICAgICAgY2hpbGROb2RlLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5wcmV2U2libGluZyA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGROb2RlKTtcbiAgICAgICAgaW5zZXJ0Q2hpbGQodGhpcywgY2hpbGROb2RlLCB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJlbW92ZUNoaWxkKGNoaWxkTm9kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZlIGNoaWxkICR7dGhpc30gJHtjaGlsZE5vZGV9YCk7XG4gICAgICAgIGlmICghY2hpbGROb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHJlbW92ZSBjaGlsZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoaWxkTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHJlbW92ZSBjaGlsZCwgYmVjYXVzZSBpdCBoYXMgbm8gcGFyZW50LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCByZW1vdmUgY2hpbGQsIGJlY2F1c2UgaXQgaGFzIGEgZGlmZmVyZW50IHBhcmVudC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZE5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChjaGlsZE5vZGUucHJldlNpYmxpbmcpIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5wcmV2U2libGluZy5uZXh0U2libGluZyA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUubmV4dFNpYmxpbmcucHJldlNpYmxpbmcgPSBjaGlsZE5vZGUucHJldlNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVzZXQgdGhlIHByZXZTaWJsaW5nIGFuZCBuZXh0U2libGluZy4gSWYgbm90LCBhIGtlZXAtYWxpdmVkIGNvbXBvbmVudCB3aWxsXG4gICAgICAgIC8vIHN0aWxsIGhhdmUgYSBmaWxsZWQgbmV4dFNpYmxpbmcgYXR0cmlidXRlIHNvIHZ1ZSB3aWxsIG5vdFxuICAgICAgICAvLyBpbnNlcnQgdGhlIG5vZGUgYWdhaW4gdG8gdGhlIHBhcmVudC4gU2VlICMyMjBcbiAgICAgICAgY2hpbGROb2RlLnByZXZTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgY2hpbGROb2RlLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLmZpbHRlcihub2RlID0+IG5vZGUgIT09IGNoaWxkTm9kZSk7XG4gICAgICAgIHJlbW92ZUNoaWxkKHRoaXMsIGNoaWxkTm9kZSk7XG4gICAgfVxuICAgIGZpcnN0RWxlbWVudCgpIHtcbiAgICAgICAgZm9yICh2YXIgY2hpbGQgb2YgdGhpcy5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCIvLyBMYXJnZWx5IHRha2VuIGZyb20gdGhlIFZ1ZSBpbXBsaW1lbnRhdGlvblxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50LXJlZ2lzdHJ5JztcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVsZW1lbnRzKCkge1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnaGVhZCcsICgpID0+IG51bGwsIHtcbiAgICAgICAgaW5zZXJ0Q2hpbGQocGFyZW50Tm9kZSwgY2hpbGROb2RlLCBhdEluZGV4KSB7XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdGcmFtZScsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUnKS5GcmFtZSwge1xuICAgICAgICBpbnNlcnRDaGlsZChwYXJlbnROb2RlLCBjaGlsZE5vZGUsIGF0SW5kZXgpIHtcbiAgICAgICAgICAgIC8vZG9udCBib3RoZXJcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnZGl2JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZScpLkZyYW1lLCB7XG4gICAgICAgIGluc2VydENoaWxkKHBhcmVudE5vZGUsIGNoaWxkTm9kZSwgYXRJbmRleCkge1xuICAgICAgICAgICAgLy9kb250IGJvdGhlclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdQYWdlJywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJykuUGFnZSk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdTdGFja0xheW91dCcsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnKS5TdGFja0xheW91dCk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdMYWJlbCcsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnKS5MYWJlbCk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdBY3Rpb25CYXInLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXInKS5BY3Rpb25CYXIpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnQWN0aW9uSXRlbScsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhcicpLkFjdGlvbkl0ZW0pO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnR3JpZExheW91dCcsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dCcpLkdyaWRMYXlvdXQpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnU2Nyb2xsVmlldycsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnKS5TY3JvbGxWaWV3KTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ0xpc3RWaWV3JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcnKS5MaXN0Vmlldyk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdOYXZpZ2F0aW9uQnV0dG9uJywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyJykuTmF2aWdhdGlvbkJ1dHRvbik7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdUYWJWaWV3JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlldycpLlRhYlZpZXcpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnVGFiVmlld0l0ZW0nLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3JykuVGFiVmlld0l0ZW0pO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnRGF0ZVBpY2tlcicsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXInKS5EYXRlUGlja2VyKTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ0Fic29sdXRlTGF5b3V0JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dCcpLkFic29sdXRlTGF5b3V0KTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ0FjdGl2aXR5SW5kaWNhdG9yJywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3InKS5BY3Rpdml0eUluZGljYXRvcik7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdCb3JkZXInLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlcicpLkJvcmRlcik7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdCdXR0b24nLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvbicpLkJ1dHRvbik7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdXZWJWaWV3JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlldycpLldlYlZpZXcpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnV3JhcExheW91dCcsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy93cmFwLWxheW91dCcpLldyYXBMYXlvdXQpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnRm9ybWF0dGVkU3RyaW5nJywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmcnKS5Gb3JtYXR0ZWRTdHJpbmcpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnU3BhbicsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdGV4dC9zcGFuJykuU3Bhbik7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdUZXh0VmlldycsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC12aWV3JykuVGV4dFZpZXcpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgncCcsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC12aWV3JykuVGV4dFZpZXcpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnQ29tbWVudCcsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGxhY2Vob2xkZXInKS5QbGFjZWhvbGRlcik7XG4gICAgLy8gcmVnaXN0ZXJFbGVtZW50KCdGcmFtZScsICgpID0+IG5ldyBGcmFtZUVsZW1lbnQoKSlcbiAgICAvLyByZWdpc3RlckVsZW1lbnQoJ1BhZ2UnLCAoKSA9PiBuZXcgUGFnZUVsZW1lbnQoKSlcbn1cbiIsImltcG9ydCB7IExheW91dEJhc2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvbGF5b3V0LWJhc2UnO1xuaW1wb3J0IHsgQ29udGVudFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvbnRlbnQtdmlldyc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmlldyh2aWV3KSB7XG4gICAgcmV0dXJuIHZpZXcgaW5zdGFuY2VvZiBWaWV3O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTGF5b3V0KHZpZXcpIHtcbiAgICByZXR1cm4gdmlldyBpbnN0YW5jZW9mIExheW91dEJhc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDb250ZW50Vmlldyh2aWV3KSB7XG4gICAgcmV0dXJuIHZpZXcgaW5zdGFuY2VvZiBDb250ZW50Vmlldztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRDaGlsZChwYXJlbnROb2RlLCBjaGlsZE5vZGUsIGF0SW5kZXggPSAtMSkge1xuICAgIGlmICghcGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJlbnROb2RlLm1ldGEgJiYgdHlwZW9mIHBhcmVudE5vZGUubWV0YS5pbnNlcnRDaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gcGFyZW50Tm9kZS5tZXRhLmluc2VydENoaWxkKHBhcmVudE5vZGUsIGNoaWxkTm9kZSwgYXRJbmRleCk7XG4gICAgfVxuICAgIGlmICghcGFyZW50Tm9kZS5uYXRpdmVWaWV3IHx8ICFjaGlsZE5vZGUubmF0aXZlVmlldykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudFZpZXcgPSBwYXJlbnROb2RlLm5hdGl2ZVZpZXc7XG4gICAgY29uc3QgY2hpbGRWaWV3ID0gY2hpbGROb2RlLm5hdGl2ZVZpZXc7XG4gICAgLyppZiAocGFyZW50VmlldyBpbnN0YW5jZW9mIExheW91dEJhc2UpIHtcbiAgICAgIGlmIChjaGlsZFZpZXcucGFyZW50ID09PSBwYXJlbnRWaWV3KSB7XG4gICAgICAgIGxldCBpbmRleCA9IHBhcmVudFZpZXcuZ2V0Q2hpbGRJbmRleChjaGlsZFZpZXcpXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBwYXJlbnRWaWV3LnJlbW92ZUNoaWxkKGNoaWxkVmlldylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGF0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHBhcmVudFZpZXcuaW5zZXJ0Q2hpbGQoY2hpbGRWaWV3LCBhdEluZGV4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Vmlldy5hZGRDaGlsZChjaGlsZFZpZXcpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYXJlbnRWaWV3IGluc3RhbmNlb2YgQ29udGVudFZpZXcpIHtcbiAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgcGFyZW50Vmlldy5fYWRkVmlldyhjaGlsZFZpZXcsIGF0SW5kZXgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRWaWV3LmNvbnRlbnQgPSBjaGlsZFZpZXdcbiAgICAgIH1cbiAgICB9IGVsc2UgKi9cbiAgICBpZiAocGFyZW50VmlldyAmJiAocGFyZW50VmlldykuX2FkZENoaWxkRnJvbUJ1aWxkZXIpIHtcbiAgICAgICAgKHBhcmVudFZpZXcpLl9hZGRDaGlsZEZyb21CdWlsZGVyKGNoaWxkTm9kZS5fbmF0aXZlVmlldy5jb25zdHJ1Y3Rvci5uYW1lLCBjaGlsZFZpZXcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGNhbid0IGNvbnRhaW4gY2hpbGRyZW46IFwiICsgcGFyZW50Tm9kZSArIFwiLCBcIiArIGNoaWxkTm9kZSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKHBhcmVudE5vZGUsIGNoaWxkTm9kZSkge1xuICAgIGlmICghcGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJlbnROb2RlLm1ldGEgJiYgdHlwZW9mIHBhcmVudE5vZGUubWV0YS5yZW1vdmVDaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gcGFyZW50Tm9kZS5tZXRhLnJlbW92ZUNoaWxkKHBhcmVudE5vZGUsIGNoaWxkTm9kZSk7XG4gICAgfVxuICAgIGlmICghY2hpbGROb2RlLm5hdGl2ZVZpZXcgfHwgIWNoaWxkTm9kZS5uYXRpdmVWaWV3KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50VmlldyA9IHBhcmVudE5vZGUubmF0aXZlVmlldztcbiAgICBjb25zdCBjaGlsZFZpZXcgPSBjaGlsZE5vZGUubmF0aXZlVmlldztcbiAgICBpZiAocGFyZW50VmlldyBpbnN0YW5jZW9mIExheW91dEJhc2UpIHtcbiAgICAgICAgcGFyZW50Vmlldy5yZW1vdmVDaGlsZChjaGlsZFZpZXcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJlbnRWaWV3IGluc3RhbmNlb2YgQ29udGVudFZpZXcpIHtcbiAgICAgICAgaWYgKHBhcmVudFZpZXcuY29udGVudCA9PT0gY2hpbGRWaWV3KSB7XG4gICAgICAgICAgICBwYXJlbnRWaWV3LmNvbnRlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgIHBhcmVudFZpZXcuX3JlbW92ZVZpZXcoY2hpbGRWaWV3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZpZXcocGFyZW50VmlldykpIHtcbiAgICAgICAgcGFyZW50Vmlldy5fcmVtb3ZlVmlldyhjaGlsZFZpZXcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBwYXJlbnQgdHlwZTogXCIgKyBwYXJlbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnQGdsaW1tZXIvY29tcG9uZW50JztcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnLi4vLi4vbmF2aWdhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rVG8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX19vd25lcl9fLmFyZ3MudGFyZ2V0O1xuICAgICAgICBuYXZpZ2F0ZSh0YXJnZXQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHByZWNvbXBpbGUgfSBmcm9tICdAZ2xpbW1lci9jb21waWxlcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAZ2xpbW1lci9vcGNvZGUtY29tcGlsZXInO1xuaW1wb3J0IHsgc3RyaXAgfSBmcm9tICdAZ2xpbW1lci91dGlsJztcbi8vIC8qKlxuLy8gICogSWRlYWxseSB3ZSBwcmVjb21waWxlIGFsbCB0aGUgdGVtcGxhdGVzIHRocm91Z2ggYVxuLy8gICogdGhyb3VnaCBhIHBsdWdpbiBhdCBidWlsZCB0aW1lLiBUaGlzIGlzIGRvbmUganVzdFxuLy8gICogZm9yIGRlbW8gcHVycG9zZXMuXG4vLyAgKi9cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhYmxlKHNvdXJjZSkge1xuICAgIGNvbnNvbGUubG9nKCdJbiBDb21waWxhYmxlOiAnICsgc291cmNlKTtcbiAgICBjb25zdCBwcmVjb21waWxlZCA9IHByZWNvbXBpbGUoc291cmNlKTtcbiAgICBjb25zb2xlLmxvZygnUHJlY29tcGlsZWQnKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBDb21wb25lbnQocHJlY29tcGlsZWQpO1xuICAgIGNvbnNvbGUubG9nKGBDb21waWxlZCBDb21wb25lbnQ6ICR7Y29tcG9uZW50fWApO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5leHBvcnQgY2xhc3MgUmVzb2x2ZXJEZWxlZ2F0ZSB7XG4gICAgcmVnaXN0ZXJDb21wb25lbnQobmFtZSwgaGFuZGxlLCBzb3VyY2UsIGNhcGFiaWxpdGllcykge1xuICAgICAgICBjb25zb2xlLmxvZyhgYWRkQ29tcG9uZW50OiAke25hbWV9YCk7XG4gICAgICAgIFJlc29sdmVyRGVsZWdhdGUuY29tcG9uZW50c1tuYW1lXSA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogc3RyaXAgYCR7c291cmNlfWAsXG4gICAgICAgICAgICBoYW5kbGUsXG4gICAgICAgICAgICBjYXBhYmlsaXRpZXNcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coYFJlc29sdmVyRGVsZWdhdGUgQ29tcG9uZW50cyAke1Jlc29sdmVyRGVsZWdhdGUuY29tcG9uZW50c31gKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJIZWxwZXIobmFtZSwgaGFuZGxlKSB7XG4gICAgICAgIFJlc29sdmVyRGVsZWdhdGUuaGVscGVyc1tuYW1lXSA9IGhhbmRsZTtcbiAgICAgICAgY29uc29sZS5sb2coUmVzb2x2ZXJEZWxlZ2F0ZS5oZWxwZXJzKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJNb2RpZmllcihuYW1lLCBoYW5kbGUpIHtcbiAgICAgICAgUmVzb2x2ZXJEZWxlZ2F0ZS5tb2RpZmllcnNbbmFtZV0gPSBoYW5kbGU7XG4gICAgfVxuICAgIHN0YXRpYyBsb29rdXBDb21wb25lbnQobmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgbG9va3VwQ29tcG9uZW50OiAke25hbWV9YCk7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBSZXNvbHZlckRlbGVnYXRlLmNvbXBvbmVudHNbbmFtZV07XG4gICAgICAgIGlmIChjb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBjb21wb25lbnQgZm91bmQ6ICR7Y29tcG9uZW50fWApO1xuICAgICAgICAvL3NvdXJjZSBzaG91bGQgbm93IGJlIGNvbXBpbGVkXG4gICAgICAgIGxldCB7IGhhbmRsZSwgc291cmNlLCBjYXBhYmlsaXRpZXMgfSA9IGNvbXBvbmVudDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhbmRsZSxcbiAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgIGNvbXBpbGFibGU6IENvbXBvbmVudChzb3VyY2UpLFxuICAgICAgICAgICAgY2FwYWJpbGl0aWVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBsb29rdXBNb2RpZmllcihuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lIGluIFJlc29sdmVyRGVsZWdhdGUubW9kaWZpZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVzb2x2ZXJEZWxlZ2F0ZS5tb2RpZmllcnNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGxvb2t1cEhlbHBlcihuYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBsb29rdXAgaGVscGVyJyk7XG4gICAgICAgIGlmIChuYW1lIGluIFJlc29sdmVyRGVsZWdhdGUuaGVscGVycykge1xuICAgICAgICAgICAgcmV0dXJuIFJlc29sdmVyRGVsZWdhdGUuaGVscGVyc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblJlc29sdmVyRGVsZWdhdGUuY29tcG9uZW50cyA9IHt9O1xuUmVzb2x2ZXJEZWxlZ2F0ZS5oZWxwZXJzID0ge307XG5SZXNvbHZlckRlbGVnYXRlLm1vZGlmaWVycyA9IHt9O1xuO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvb2t1cENvbXBvbmVudDogUmVzb2x2ZXJEZWxlZ2F0ZS5sb29rdXBDb21wb25lbnQsXG4gICAgbG9va3VwSGVscGVyOiBSZXNvbHZlckRlbGVnYXRlLmxvb2t1cEhlbHBlcixcbiAgICBsb29rdXBNb2RpZmllcjogUmVzb2x2ZXJEZWxlZ2F0ZS5sb29rdXBNb2RpZmllclxufTtcbiIsImltcG9ydCB7IFVwZGF0YWJsZVJlZmVyZW5jZSB9IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoX2FyZ3MsIHZtKSB7XG4gICAgY29uc29sZS5sb2coYGluIGFjdGlvbmApO1xuICAgIGxldCBjb21wb25lbnRSZWYgPSB2bS5nZXRTZWxmKCk7XG4gICAgY29uc29sZS5sb2coYGNvbXBvbmVudFJlZjogJHtjb21wb25lbnRSZWZ9YCk7XG4gICAgbGV0IGFyZ3MgPSBfYXJncy5jYXB0dXJlKCk7XG4gICAgbGV0IGFjdGlvbkZ1bmMgPSBhcmdzLnBvc2l0aW9uYWwuYXQoMCkudmFsdWUoKTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb25GdW5jKTtcbiAgICAvLyBpZiAodHlwZW9mIGFjdGlvbkZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyAgIHRocm93Tm9BY3Rpb25FcnJvcihhY3Rpb25GdW5jLCBhcmdzLnBvc2l0aW9uYWwuYXQoMCkpO1xuICAgIC8vIH1cbiAgICByZXR1cm4gbmV3IFVwZGF0YWJsZVJlZmVyZW5jZShmdW5jdGlvbiBhY3Rpb24oLi4uaW52b2tlZEFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGluIHVwZGF0YWJsZSByZWZlcmVuY2VgKTtcbiAgICAgICAgbGV0IGN1cnJpZWRBcmdzID0gYXJncy5wb3NpdGlvbmFsLnZhbHVlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBpbiB1cGRhdGFibGUgcmVmZXJlbmNlOiAke2N1cnJpZWRBcmdzfWApO1xuICAgICAgICAvLyBDb25zdW1lIHRoZSBhY3Rpb24gZnVuY3Rpb24gdGhhdCB3YXMgYWxyZWFkeSBjYXB0dXJlZCBhYm92ZS5cbiAgICAgICAgY3VycmllZEFyZ3Muc2hpZnQoKTtcbiAgICAgICAgY3VycmllZEFyZ3MucHVzaCguLi5pbnZva2VkQXJncyk7XG4gICAgICAgIC8vIEludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgY29tcG9uZW50IGFzIHRoZSBjb250ZXh0LCB0aGUgY3VycmllZFxuICAgICAgICAvLyBhcmd1bWVudHMgcGFzc2VkIHRvIGB7e2FjdGlvbn19YCwgYW5kIHRoZSBhcmd1bWVudHMgdGhlIGJvdW5kIGZ1bmN0aW9uXG4gICAgICAgIC8vIHdhcyBpbnZva2VkIHdpdGguXG4gICAgICAgIGFjdGlvbkZ1bmMuYXBwbHkoY29tcG9uZW50UmVmICYmIGNvbXBvbmVudFJlZi52YWx1ZSgpLCBjdXJyaWVkQXJncyk7XG4gICAgfSk7XG59XG47XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBvbk1vZGlmaWVyIHtcbiAgICBkaWRJbnNlcnRFbGVtZW50KGVsZW1lbnQsIF9wYXJhbXMsIF9oYXNoKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihfcGFyYW1zWzBdLCBfcGFyYW1zWzFdKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSBfcGFyYW1zWzBdO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gX3BhcmFtc1sxXTtcbiAgICAgICAgY29uc29sZS5sb2coYE1vZGlmaWVyIERpZCBJbnNlcnQgRWxlbWVudDogJHtfcGFyYW1zfWApO1xuICAgICAgICAvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoLi4uX3BhcmFtcyk7XG4gICAgfVxuICAgIGRpZFVwZGF0ZShlbGVtZW50LCBfcGFyYW1zLCBfaGFzaCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoX3BhcmFtc1swXSwgX3BhcmFtc1sxXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBNb2RpZmllciBEaWQgVXBkYXRlIEVsZW1lbnQ6ICR7X3BhcmFtc31gKTtcbiAgICB9XG4gICAgd2lsbERlc3Ryb3lFbGVtZW50KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5ldmVudE5hbWUsIHRoaXMuY2FsbGJhY2spO1xuICAgICAgICBjb25zb2xlLmxvZyhgTW9kaWZpZXIgV2lsbCBEZXN0cm95IEVsZW1lbnRgKTtcbiAgICB9XG59XG4iLCJjb25zdCBDQVBBQklMSVRJRVMgPSB7XG4gICAgYXR0cmlidXRlSG9vazogdHJ1ZSxcbiAgICBjcmVhdGVBcmdzOiB0cnVlLFxuICAgIGNyZWF0ZUNhbGxlcjogZmFsc2UsXG4gICAgY3JlYXRlSW5zdGFuY2U6IHRydWUsXG4gICAgZHluYW1pY0xheW91dDogZmFsc2UsXG4gICAgZHluYW1pY1Njb3BlOiBmYWxzZSxcbiAgICBkeW5hbWljVGFnOiB0cnVlLFxuICAgIGVsZW1lbnRIb29rOiB0cnVlLFxuICAgIHByZXBhcmVBcmdzOiBmYWxzZSxcbiAgICB1cGRhdGVIb29rOiB0cnVlLFxuICAgIHdyYXBwZWQ6IGZhbHNlLFxufTtcbmV4cG9ydCBkZWZhdWx0IENBUEFCSUxJVElFUztcbiIsImltcG9ydCB7IFJvb3RSZWZlcmVuY2UgfSBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ09OU1RBTlRfVEFHIH0gZnJvbSAnQGdsaW1tZXIvcmVmZXJlbmNlJztcbmNvbnN0IEVNUFRZX1NFTEYgPSBuZXcgUm9vdFJlZmVyZW5jZShudWxsKTtcbmNvbnN0IE5PT1BfREVTVFJPWUFCTEUgPSB7IGRlc3Ryb3koKSB7IH0gfTtcbmNvbnN0IERFU1RST1lJTkcgPSBTeW1ib2woJ2Rlc3Ryb3lpbmcnKTtcbmNvbnN0IERFU1RST1lFRCA9IFN5bWJvbCgnZGVzdHJveWVkJyk7XG5leHBvcnQgY2xhc3MgQm91bmRzIHtcbiAgICBjb25zdHJ1Y3RvcihfX2JvdW5kcykge1xuICAgIH1cbiAgICBnZXQgZmlyc3ROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRzLmZpcnN0Tm9kZSgpO1xuICAgIH1cbiAgICBnZXQgbGFzdE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHMubGFzdE5vZGUoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29tcG9uZW50U3RhdGVCdWNrZXQge1xuICAgIGNvbnN0cnVjdG9yKGRlZmluaXRpb24sIGFyZ3MpIHtcbiAgICAgICAgbGV0IHsgQ29tcG9uZW50Q2xhc3MsIG5hbWUgfSA9IGRlZmluaXRpb247XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIGlmIChDb21wb25lbnRDbGFzcykge1xuICAgICAgICAgICAgaWYgKENvbXBvbmVudENsYXNzLmNsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnRDbGFzcyA9IENvbXBvbmVudENsYXNzLmNsYXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQgPSBuZXcgQ29tcG9uZW50Q2xhc3Moe1xuICAgICAgICAgICAgICAgIGFyZ3M6IHRoaXMubmFtZWRBcmdzU25hcHNob3QoKSxcbiAgICAgICAgICAgICAgICBkZWJ1Z05hbWU6IG5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB0YWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyZ3MudGFnO1xuICAgIH1cbiAgICBuYW1lZEFyZ3NTbmFwc2hvdCgpIHtcbiAgICAgICAgbGV0IHNuYXBzaG90ID0gdGhpcy5hcmdzLm5hbWVkLnZhbHVlKCk7XG4gICAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKHNuYXBzaG90KTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXRpdmVDb21wb25lbnRNYW5hZ2VyIHtcbiAgICBnZXRDYXBhYmlsaXRpZXMoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmNhcGFiaWxpdGllcztcbiAgICB9XG4gICAgcHJlcGFyZUFyZ3MoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBnZXRBb3RTdGF0aWNMYXlvdXQoeyBuYW1lLCBoYW5kbGUsIHN5bWJvbFRhYmxlIH0sIHJlc29sdmVyKSB7XG4gICAgICAgIGlmIChoYW5kbGUgJiYgc3ltYm9sVGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlLFxuICAgICAgICAgICAgICAgIHN5bWJvbFRhYmxlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuaW1wbGVtZW50ZWQgZ2V0QW90U3RhdGljTGF5b3V0Jyk7XG4gICAgfVxuICAgIGNyZWF0ZShlbnZpcm9ubWVudCwgZGVmaW5pdGlvbiwgYXJncywgX2R5bmFtaWNTY29wZSwgX2NhbGxlciwgX2hhc0RlZmF1bHRCbG9jaykge1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi5Db21wb25lbnRDbGFzcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wb25lbnRTdGF0ZUJ1Y2tldChkZWZpbml0aW9uLCBhcmdzLmNhcHR1cmUoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0U2VsZihidWNrZXQpIHtcbiAgICAgICAgaWYgKGJ1Y2tldCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSb290UmVmZXJlbmNlKGJ1Y2tldC5jb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFTVBUWV9TRUxGO1xuICAgIH1cbiAgICBkaWRDcmVhdGVFbGVtZW50KCkgeyB9XG4gICAgZGlkUmVuZGVyTGF5b3V0KGJ1Y2tldCwgYm91bmRzKSB7XG4gICAgICAgIGlmICghYnVja2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnVja2V0LmNvbXBvbmVudC5ib3VuZHMgPSBuZXcgQm91bmRzKGJvdW5kcyk7XG4gICAgfVxuICAgIGRpZENyZWF0ZShidWNrZXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIGRpZCBjcmVhdGVkIGNvbXBvbmVudCBtYW5hZ2VyJyk7XG4gICAgICAgIGlmICghYnVja2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2luIGRpZCBjcmVhdGVkIGNvbXBvbmVudCBtYW5hZ2VyIC0gYWJvdXQgdG8gY2FsbCBkaWRJbnNlcnRFbGVtZW50Jyk7XG4gICAgICAgIGJ1Y2tldC5jb21wb25lbnQuZGlkSW5zZXJ0RWxlbWVudCgpO1xuICAgIH1cbiAgICBnZXRUYWcoYnVja2V0KSB7XG4gICAgICAgIGlmICghYnVja2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ09OU1RBTlRfVEFHO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWNrZXQudGFnO1xuICAgIH1cbiAgICB1cGRhdGUoYnVja2V0KSB7XG4gICAgICAgIGlmICghYnVja2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnVja2V0LmNvbXBvbmVudC5hcmdzID0gYnVja2V0Lm5hbWVkQXJnc1NuYXBzaG90KCk7XG4gICAgfVxuICAgIGRpZFVwZGF0ZUxheW91dCgpIHsgfVxuICAgIGRpZFVwZGF0ZSgpIHsgfVxuICAgIGdldERlc3RydWN0b3IoYnVja2V0KSB7XG4gICAgICAgIGlmICghYnVja2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gTk9PUF9ERVNUUk9ZQUJMRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBidWNrZXQuY29tcG9uZW50W0RFU1RST1lJTkddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBidWNrZXQuY29tcG9uZW50LndpbGxEZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgYnVja2V0LmNvbXBvbmVudFtERVNUUk9ZRURdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwidmFyIF9hLCBfYiwgX2MsIF9kO1xuaW1wb3J0IHsgQ1VSUkVOVF9UQUcgfSBmcm9tICdAZ2xpbW1lci9yZWZlcmVuY2UnO1xuaW1wb3J0IHsgbWV0YUZvciwgdHJhY2tlZEdldCB9IGZyb20gJ0BnbGltbWVyL3RyYWNraW5nJztcbmNvbnN0IERFU1RST1lJTkcgPSBTeW1ib2woJ2Rlc3Ryb3lpbmcnKTtcbmNvbnN0IERFU1RST1lFRCA9IFN5bWJvbCgnZGVzdHJveWVkJyk7XG5leHBvcnQgY2xhc3MgR2xpbW1lckNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgKiBDb25zdHJ1Y3RzIGEgbmV3IGNvbXBvbmVudCBhbmQgYXNzaWducyBpdHNlbGYgdGhlIHBhc3NlZCBwcm9wZXJ0aWVzLiBZb3VcbiAgICAqIHNob3VsZCBub3QgY29uc3RydWN0IG5ldyBjb21wb25lbnRzIHlvdXJzZWxmLiBJbnN0ZWFkLCBHbGltbWVyIHdpbGxcbiAgICAqIGluc3RhbnRpYXRlIG5ldyBjb21wb25lbnRzIGF1dG9tYXRpY2FsbHkgYXMgaXQgcmVuZGVycy5cbiAgICAqXG4gICAgKiBAcGFyYW0gb3duZXJcbiAgICAqIEBwYXJhbSBhcmdzXG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihvd25lciwgYXJncykge1xuICAgICAgICB0aGlzW19hXSA9IGZhbHNlO1xuICAgICAgICB0aGlzW19iXSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIH1cbiAgICBnZXQgaXNEZXN0cm95aW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tERVNUUk9ZSU5HXTtcbiAgICB9XG4gICAgZ2V0IGlzRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tERVNUUk9ZRURdO1xuICAgIH1cbiAgICAvKipcbiAgICAqIENhbGxlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICAqL1xuICAgIHdpbGxEZXN0cm95KCkgeyB9XG59XG5fYSA9IERFU1RST1lJTkcsIF9iID0gREVTVFJPWUVEO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF0aXZlQ29tcG9uZW50IGV4dGVuZHMgR2xpbW1lckNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXNbX2NdID0gZmFsc2U7XG4gICAgICAgIHRoaXNbX2RdID0gZmFsc2U7XG4gICAgICAgIC8vIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyAgIHRoaXMuZGlydGluZXNzVGFnID0gVXBkYXRhYmxlRGlydHlhYmxlVGFnLmNyZWF0ZSgpO1xuICAgICAgICAvLyAgIHRoaXMucGFyZW50VmlldyA9IG51bGw7XG4gICAgICAgIC8vICAgdGhpcy50aXRsZSA9ICdIaSc7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY3JlYXRlKF9hKSB7XG4gICAgICAgIC8vICAgdmFyIGFyZ3MgPSBfYS5hdHRycztcbiAgICAgICAgLy8gICB2YXIgYyA9IG5ldyB0aGlzKHsgYXR0cnM6IGFyZ3MgfSk7XG4gICAgICAgIC8vICAgZm9yICh2YXIgX2kgPSAwLCBfYiA9IGtleXMoYXJncyk7IF9pIDwgX2IubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIC8vICAgICAgIHZhciBrZXkgPSBfYltfaV07XG4gICAgICAgIC8vICAgICAgIGNba2V5XSA9IGFyZ3Nba2V5XTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vICAgcmV0dXJuIGM7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmVjb21wdXRlKCkgeyB9XG4gICAgICAgIC8vIGRlc3Ryb3koKSB7IH1cbiAgICAgICAgLy8gZGlkSW5pdEF0dHJzKCkgeyB9XG4gICAgICAgIC8vIGRpZFJlY2VpdmVBdHRycygpIHsgfVxuICAgICAgICAvLyB3aWxsSW5zZXJ0RWxlbWVudCgpIHsgfVxuICAgICAgICAvLyB3aWxsVXBkYXRlKCkgeyB9XG4gICAgICAgIC8vIHdpbGxSZW5kZXIoKSB7IH1cbiAgICAgICAgLy8gZGlkSW5zZXJ0RWxlbWVudCgpIHsgfVxuICAgICAgICAvLyBkaWRVcGRhdGUoKSB7IH1cbiAgICAgICAgLy8gZGlkUmVuZGVyKCkgeyB9XG4gICAgfVxuICAgIGdldCBhcmdzKCkge1xuICAgICAgICB0cmFja2VkR2V0KHRoaXMsICdhcmdzJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fYXJnc19fO1xuICAgIH1cbiAgICBzZXQgYXJncyhhcmdzKSB7XG4gICAgICAgIHRoaXMuX19hcmdzX18gPSBhcmdzO1xuICAgICAgICBtZXRhRm9yKHRoaXMpXG4gICAgICAgICAgICAudXBkYXRhYmxlVGFnRm9yKCdhcmdzJylcbiAgICAgICAgICAgIC5pbm5lci51cGRhdGUoQ1VSUkVOVF9UQUcpO1xuICAgIH1cbiAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgbGV0IHsgYm91bmRzIH0gPSB0aGlzO1xuICAgICAgICAvLyBhc3NlcnQoYm91bmRzICYmIGJvdW5kcy5maXJzdE5vZGUgPT09IGJvdW5kcy5sYXN0Tm9kZSwgYFRoZSAnZWxlbWVudCcgcHJvcGVydHkgY2FuIG9ubHkgYmUgYWNjZXNzZWQgb24gY29tcG9uZW50cyB0aGF0IGNvbnRhaW4gYSBzaW5nbGUgcm9vdCBlbGVtZW50IGluIHRoZWlyIHRlbXBsYXRlLiBUcnkgdXNpbmcgJ2JvdW5kcycgaW5zdGVhZCB0byBhY2Nlc3MgdGhlIGZpcnN0IGFuZCBsYXN0IG5vZGVzLmApO1xuICAgICAgICByZXR1cm4gYm91bmRzLmZpcnN0Tm9kZTtcbiAgICB9XG4gICAgZ2V0IGlzRGVzdHJveWluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbREVTVFJPWUlOR107XG4gICAgfVxuICAgIGdldCBpc0Rlc3Ryb3llZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbREVTVFJPWUVEXTtcbiAgICB9XG4gICAgd2lsbERlc3Ryb3koKSB7IH1cbiAgICBkaWRJbnNlcnRFbGVtZW50KCkgeyB9XG4gICAgZGlkVXVwZGF0ZSgpIHsgfVxufVxuX2MgPSBERVNUUk9ZSU5HLCBfZCA9IERFU1RST1lFRDtcbiIsImV4cG9ydCBjbGFzcyBOYXRpdmVNb2RpZmllciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgc3RhdGUsIGFyZ3MsIGRvbSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMuZG9tID0gZG9tO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOYXRpdmVNb2RpZmllckRlZmluaXRpb25TdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoS2xhc3MpIHtcbiAgICAgICAgaWYgKEtsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEtsYXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTmF0aXZlTW9kaWZpZXJNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbnN0YWxsZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnVwZGF0ZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZE1vZGlmaWVycyA9IFtdO1xuICAgIH1cbiAgICBjcmVhdGUoZWxlbWVudCwgc3RhdGUsIGFyZ3MsIF9keW5hbWljU2NvcGUsIGRvbSkge1xuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZU1vZGlmaWVyKGVsZW1lbnQsIHN0YXRlLCBhcmdzLmNhcHR1cmUoKSwgZG9tKTtcbiAgICB9XG4gICAgZ2V0VGFnKHsgYXJnczogeyB0YWcgfSB9KSB7XG4gICAgICAgIHJldHVybiB0YWc7XG4gICAgfVxuICAgIGluc3RhbGwoeyBlbGVtZW50LCBhcmdzLCBkb20sIHN0YXRlIH0pIHtcbiAgICAgICAgdGhpcy5pbnN0YWxsZWRFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICBsZXQgZmlyc3RQYXJhbSA9IGFyZ3MucG9zaXRpb25hbC5hdCgwKTtcbiAgICAgICAgbGV0IHBhcmFtID0gZmlyc3RQYXJhbSAhPT0gdW5kZWZpbmVkICYmIGZpcnN0UGFyYW0udmFsdWUoKTtcbiAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShlbGVtZW50LCAnZGF0YS1tb2RpZmllcicsIGBpbnN0YWxsZWQgLSAke3BhcmFtfWApO1xuICAgICAgICBpZiAoc3RhdGUuaW5zdGFuY2UgJiYgc3RhdGUuaW5zdGFuY2UuZGlkSW5zZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgc3RhdGUuaW5zdGFuY2UuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBzdGF0ZS5pbnN0YW5jZS5kaWRJbnNlcnRFbGVtZW50KGVsZW1lbnQsIGFyZ3MucG9zaXRpb25hbC52YWx1ZSgpLCBhcmdzLm5hbWVkLnZhbHVlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXBkYXRlKHsgZWxlbWVudCwgYXJncywgZG9tLCBzdGF0ZSB9KSB7XG4gICAgICAgIHRoaXMudXBkYXRlZEVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIGxldCBmaXJzdFBhcmFtID0gYXJncy5wb3NpdGlvbmFsLmF0KDApO1xuICAgICAgICBsZXQgcGFyYW0gPSBmaXJzdFBhcmFtICE9PSB1bmRlZmluZWQgJiYgZmlyc3RQYXJhbS52YWx1ZSgpO1xuICAgICAgICBkb20uc2V0QXR0cmlidXRlKGVsZW1lbnQsICdkYXRhLW1vZGlmaWVyJywgYHVwZGF0ZWQgLSAke3BhcmFtfWApO1xuICAgICAgICBpZiAoc3RhdGUuaW5zdGFuY2UgJiYgc3RhdGUuaW5zdGFuY2UuZGlkVXBkYXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5pbnN0YW5jZS5kaWRVcGRhdGUoZWxlbWVudCwgYXJncy5wb3NpdGlvbmFsLnZhbHVlKCksIGFyZ3MubmFtZWQudmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnZXREZXN0cnVjdG9yKG1vZGlmaWVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWRNb2RpZmllcnMucHVzaChtb2RpZmllcik7XG4gICAgICAgICAgICAgICAgbGV0IHsgZWxlbWVudCwgZG9tLCBzdGF0ZSB9ID0gbW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmluc3RhbmNlICYmIHN0YXRlLmluc3RhbmNlLndpbGxEZXN0cm95RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5pbnN0YW5jZS53aWxsRGVzdHJveUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoZWxlbWVudCwgJ2RhdGEtbW9kaWZpZXInKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyQW90LCByZW5kZXJTeW5jIH0gZnJvbSAnQGdsaW1tZXIvcnVudGltZSc7XG5pbXBvcnQgTmF0aXZlc2NyaXB0R2xpbW1lciBmcm9tICcuLi8uLic7XG5pbXBvcnQgRWxlbWVudE5vZGUgZnJvbSAnLi4vZG9tL25vZGVzL0VsZW1lbnROb2RlJztcbmltcG9ydCBHbGltbWVyUmVzb2x2ZXJEZWxlZ2F0ZSBmcm9tICcuLi9nbGltbWVyL2NvbnRleHQnO1xuLy8gaW1wb3J0IEZyYW1lRWxlbWVudCBmcm9tIFwiLi4vZG9tLy9ub2Rlcy9GcmFtZUVsZW1lbnRcIjtcbi8vIGltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGxvZ2dlciBhcyBsb2cgfSBmcm9tIFwiLi9iYXNpY2RvbVwiO1xuLy8gaW1wb3J0IFBhZ2VFbGVtZW50IGZyb20gXCIuL25hdGl2ZS9QYWdlRWxlbWVudFwiO1xuLy8gaW1wb3J0IE5hdGl2ZUVsZW1lbnROb2RlIGZyb20gXCIuL25hdGl2ZS9OYXRpdmVFbGVtZW50Tm9kZVwiO1xuLy8gZXhwb3J0IHR5cGUgRnJhbWVTcGVjID0gRnJhbWUgfCBGcmFtZUVsZW1lbnQgfCBzdHJpbmdcbi8vIGV4cG9ydCB0eXBlIFBhZ2VTcGVjID0gdHlwZW9mIEdsaW1tZXJDb21wb25lbnQ7XG4vLyBleHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25PcHRpb25zIHtcbi8vICAgICBwYWdlOiBQYWdlU3BlYztcbi8vICAgICBwcm9wcz86IGFueTtcbi8vICAgICBmcmFtZT86IEZyYW1lU3BlYztcbi8vICAgICBhbmltYXRlZD86IGJvb2xlYW47XG4vLyAgICAgYmFja3N0YWNrVmlzaWJsZT86IGJvb2xlYW47XG4vLyAgICAgY2xlYXJIaXN0b3J5PzogYm9vbGVhbjtcbi8vICAgICB0cmFuc2l0aW9uPzogTmF2aWdhdGlvblRyYW5zaXRpb247XG4vLyAgICAgdHJhbnNpdGlvbkFuZHJvaWQ/OiBOYXZpZ2F0aW9uVHJhbnNpdGlvbjtcbi8vICAgICB0cmFuc2l0aW9uaU9TPzogTmF2aWdhdGlvblRyYW5zaXRpb247XG4vLyB9XG4vLyBmdW5jdGlvbiByZXNvbHZlRnJhbWUoZnJhbWVTcGVjPzogRnJhbWVTcGVjKTogRnJhbWUge1xuLy8gICAgIGxldCB0YXJnZXRGcmFtZTogRnJhbWU7XG4vLyAgICAgaWYgKCFmcmFtZVNwZWMpIHRhcmdldEZyYW1lID0gdG9wbW9zdCgpO1xuLy8gICAgIGlmIChmcmFtZVNwZWMgaW5zdGFuY2VvZiBGcmFtZUVsZW1lbnQpIHRhcmdldEZyYW1lID0gZnJhbWVTcGVjLm5hdGl2ZVZpZXcgYXMgRnJhbWU7XG4vLyAgICAgaWYgKGZyYW1lU3BlYyBpbnN0YW5jZW9mIEZyYW1lKSB0YXJnZXRGcmFtZSA9IGZyYW1lU3BlYztcbi8vICAgICBpZiAodHlwZW9mIGZyYW1lU3BlYyA9PSBcInN0cmluZ1wiKSB7XG4vLyAgICAgICAgIHRhcmdldEZyYW1lID0gZ2V0RnJhbWVCeUlkKGZyYW1lU3BlYylcbi8vICAgICAgICAgaWYgKCF0YXJnZXRGcmFtZSkgY29uc29sZS5sb2coYE5hdmlnYXRlIGNvdWxkIG5vdCBmaW5kIGZyYW1lIHdpdGggaWQgJHtmcmFtZVNwZWN9YClcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHRhcmdldEZyYW1lO1xuLy8gfVxuLy8gaW50ZXJmYWNlIENvbXBvbmVudEluc3RhbmNlSW5mbyB7IGVsZW1lbnQ6IEVsZW1lbnROb2RlLCBwYWdlSW5zdGFuY2U6IEdsaW1tZXJDb21wb25lbnQgfVxuLy8gZnVuY3Rpb24gcmVzb2x2ZUNvbXBvbmVudEVsZW1lbnQocGFnZVNwZWM6IFBhZ2VTcGVjLCBwcm9wcz86IGFueSk6IENvbXBvbmVudEluc3RhbmNlSW5mbyB7XG4vLyAgICAgbGV0IGR1bW15ID0gY3JlYXRlRWxlbWVudCgnZnJhZ21lbnQnKTtcbi8vICAgICBsZXQgcGFnZUluc3RhbmNlID0gbmV3IHBhZ2VTcGVjKHsgdGFyZ2V0OiBkdW1teSwgcHJvcHM6IHByb3BzIH0pO1xuLy8gICAgIGxldCBlbGVtZW50ID0gZHVtbXkuZmlyc3RFbGVtZW50KCkgYXMgTmF0aXZlRWxlbWVudE5vZGU7XG4vLyAgICAgcmV0dXJuIHsgZWxlbWVudCwgcGFnZUluc3RhbmNlIH1cbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZShuYW1lKSB7XG4gICAgbGV0IEdsaW1tZXJOYXRpdmUgPSBOYXRpdmVzY3JpcHRHbGltbWVyO1xuICAgIC8vIGxldCB0YXJnZXRGcmFtZSA9IHJlc29sdmVGcmFtZSgpO1xuICAgIC8vIGNvbnN0IGRvY3VtZW50ID0gbmV3IERvY3VtZW50Tm9kZSgpO1xuICAgIGNvbnN0IG5ld0ZyYW1lID0gbmV3IEVsZW1lbnROb2RlKCdmcmFtZScpO1xuICAgIC8vIC8vc2V0dXAgYSBmcmFtZSBzbyB3ZSBhbHdheXMgaGF2ZSBzb21ld2hlcmUgdG8gaGFuZyBvdXIgY3NzXG4gICAgbmV3RnJhbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgbmFtZSk7XG4gICAgR2xpbW1lck5hdGl2ZS5kb2N1bWVudC5hcHBlbmRDaGlsZChuZXdGcmFtZSk7XG4gICAgLy8gY29uc3QgY29udGV4dCA9IENvbnRleHQoR2xpbW1lclJlc29sdmVyRGVsZWdhdGUpO1xuICAgIC8vIGNvbnN0IHByb2dyYW1BcnRpZmFjdHMgPSBhcnRpZmFjdHMoY29udGV4dCk7XG4gICAgLy8gY29uc3QgYW90UnVudGltZSA9IEFvdFJ1bnRpbWUoZG9jdW1lbnQgYXMgYW55LCBwcm9ncmFtQXJ0aWZhY3RzLCBHbGltbWVyTmF0aXZlLnJlc29sdmVyKTtcbiAgICAvLyBpZiAoIXRhcmdldEZyYW1lKSB7XG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIm5hdmlnYXRlIHJlcXVpcmVzIGZyYW1lIG9wdGlvbiB0byBiZSBhIG5hdGl2ZSBGcmFtZSwgYSBGcmFtZUVsZW1lbnQsIGEgZnJhbWUgSWQsIG9yIG51bGxcIilcbiAgICAvLyB9XG4gICAgY29uc3QgY29tcG9uZW50ID0gR2xpbW1lclJlc29sdmVyRGVsZWdhdGUubG9va3VwQ29tcG9uZW50KG5hbWUpLmNvbXBpbGFibGUuY29tcGlsZShHbGltbWVyTmF0aXZlLmNvbnRleHQpO1xuICAgIGxldCBjdXJzb3IgPSB7IGVsZW1lbnQ6IG5ld0ZyYW1lLCBuZXh0U2libGluZzogbnVsbCB9O1xuICAgIGNvbnN0IGl0ZXJhdG9yID0gcmVuZGVyQW90KEdsaW1tZXJOYXRpdmUuYW90UnVudGltZSwgY29tcG9uZW50LCBjdXJzb3IpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBYm91dCB0byByZW5kZXIgbmV3IHJlc3VsdCcpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSByZW5kZXJTeW5jKEdsaW1tZXJOYXRpdmUuYW90UnVudGltZS5lbnYsIGl0ZXJhdG9yKTtcbiAgICAgICAgTmF0aXZlc2NyaXB0R2xpbW1lci5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIE5hdGl2ZXNjcmlwdEdsaW1tZXIuX3JlbmRlcmVkID0gdHJ1ZTtcbiAgICAgICAgR2xpbW1lck5hdGl2ZS5yb290RnJhbWUubmF0aXZlVmlldy5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBjcmVhdGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3RnJhbWUuZmlyc3RFbGVtZW50KCkubmF0aXZlVmlldztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOZXcgcGFnZSByZW5kZXJlZCcpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGluIGluaXRpYWwgcmVuZGVyOiAke2Vycm9yfWApO1xuICAgIH1cbiAgICAvLyBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgUGFnZUVsZW1lbnQpKVxuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoXCJuYXZpZ2FnZSByZXF1aXJlcyBhIHN2ZWx0ZSBjb21wb25lbnQgd2l0aCBhIHBhZ2UgZWxlbWVudCBhdCB0aGUgcm9vdFwiKVxuICAgIC8vIGxldCBuYXRpdmVQYWdlID0gZWxlbWVudC5uYXRpdmVWaWV3O1xuICAgIC8vIGNvbnN0IGhhbmRsZXIgPSAoYXJnczogTmF2aWdhdGVkRGF0YSkgPT4ge1xuICAgIC8vICAgICBpZiAoYXJncy5pc0JhY2tOYXZpZ2F0aW9uKSB7XG4gICAgLy8gICAgICAgICBuYXRpdmVQYWdlLm9mZignbmF2aWdhdGVkRnJvbScsIGhhbmRsZXIpXG4gICAgLy8gICAgICAgICBwYWdlSW5zdGFuY2UuJGRlc3Ryb3koKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIG5hdGl2ZVBhZ2Uub24oJ25hdmlnYXRlZEZyb20nLCBoYW5kbGVyKVxuICAgIC8vIHRhcmdldEZyYW1lLm5hdmlnYXRlKHtcbiAgICAvLyAgICAgY3JlYXRlOiAoKSA9PiBuYXRpdmVQYWdlXG4gICAgLy8gfSk7XG4gICAgcmV0dXJuIG51bGw7XG59XG4vLyBleHBvcnQgaW50ZXJmYWNlIEJhY2tOYXZpZ2F0aW9uT3B0aW9ucyB7XG4vLyAgICAgZnJhbWU/OiBGcmFtZVNwZWM7XG4vLyAgICAgdG8/OiBQYWdlRWxlbWVudDtcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBnb0JhY2sob3B0aW9uczogQmFja05hdmlnYXRpb25PcHRpb25zID0ge30pIHtcbi8vICAgICBsZXQgdGFyZ2V0RnJhbWUgPSByZXNvbHZlRnJhbWUob3B0aW9ucy5mcmFtZSk7XG4vLyAgICAgaWYgKCF0YXJnZXRGcmFtZSkge1xuLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnb2JhY2sgcmVxdWlyZXMgZnJhbWUgb3B0aW9uIHRvIGJlIGEgbmF0aXZlIEZyYW1lLCBhIEZyYW1lRWxlbWVudCwgYSBmcmFtZSBJZCwgb3IgbnVsbFwiKVxuLy8gICAgIH1cbi8vICAgICBsZXQgYmFja1N0YWNrRW50cnk6IEJhY2tzdGFja0VudHJ5ID0gbnVsbDtcbi8vICAgICBpZiAob3B0aW9ucy50bykge1xuLy8gICAgICAgICBiYWNrU3RhY2tFbnRyeSA9IHRhcmdldEZyYW1lLmJhY2tTdGFjay5maW5kKGUgPT4gZS5yZXNvbHZlZFBhZ2UgPT09IG9wdGlvbnMudG8ubmF0aXZlVmlldyk7XG4vLyAgICAgICAgIGlmICghYmFja1N0YWNrRW50cnkpIHtcbi8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgdGhlIGRlc3RpbmF0aW9uIHBhZ2UgaW4gdGhlIGZyYW1lcyBiYWNrc3RhY2tcIilcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gdGFyZ2V0RnJhbWUuZ29CYWNrKGJhY2tTdGFja0VudHJ5KTtcbi8vIH1cbi8vIGV4cG9ydCBpbnRlcmZhY2UgU2hvd01vZGFsT3B0aW9ucyB7XG4vLyAgICAgcGFnZTogUGFnZVNwZWNcbi8vICAgICBwcm9wcz86IGFueVxuLy8gICAgIGFuZHJvaWQ/OiB7IGNhbmNlbGFibGU6IGJvb2xlYW4gfVxuLy8gICAgIGlvcz86IHsgcHJlc2VudGF0aW9uU3R5bGU6IGFueSB9XG4vLyAgICAgYW5pbWF0ZWQ/OiBib29sZWFuXG4vLyAgICAgZnVsbHNjcmVlbj86IGJvb2xlYW5cbi8vICAgICBzdHJldGNoZWQ6IGJvb2xlYW5cbi8vIH1cbi8vIGNvbnN0IG1vZGFsU3RhY2s6IENvbXBvbmVudEluc3RhbmNlSW5mb1tdID0gW11cbi8vIGV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWw8VD4obW9kYWxPcHRpb25zOiBTaG93TW9kYWxPcHRpb25zKTogUHJvbWlzZTxUPiB7XG4vLyAgICAgbGV0IHsgcGFnZSwgcHJvcHMgPSB7fSwgLi4ub3B0aW9ucyB9ID0gbW9kYWxPcHRpb25zO1xuLy8gICAgIC8vR2V0IHRoaXMgYmVmb3JlIGFueSBwb3RlbnRpYWwgbmV3IGZyYW1lcyBhcmUgY3JlYXRlZCBieSBjb21wb25lbnQgYmVsb3dcbi8vICAgICBsZXQgbW9kYWxMYXVuY2hlciA9IHRvcG1vc3QoKS5jdXJyZW50UGFnZTtcbi8vICAgICBsZXQgY29tcG9uZW50SW5zdGFuY2VJbmZvID0gcmVzb2x2ZUNvbXBvbmVudEVsZW1lbnQocGFnZSwgcHJvcHMpO1xuLy8gICAgIGxldCBtb2RhbFZpZXc6IFZpZXdCYXNlID0gY29tcG9uZW50SW5zdGFuY2VJbmZvLmVsZW1lbnQubmF0aXZlVmlldztcbi8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgICAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcbi8vICAgICAgICAgY29uc3QgY2xvc2VDYWxsYmFjayA9IChyZXN1bHQ6IFQpID0+IHtcbi8vICAgICAgICAgICAgIGlmIChyZXNvbHZlZCkgcmV0dXJuO1xuLy8gICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuLy8gICAgICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgICAgICBjb21wb25lbnRJbnN0YW5jZUluZm8ucGFnZUluc3RhbmNlLiRkZXN0cm95KCk7IC8vZG9uJ3QgbGV0IGFuIGV4Y2VwdGlvbiBpbiBkZXN0cm95IGtpbGwgdGhlIHByb21pc2UgY2FsbGJhY2tcbi8vICAgICAgICAgICAgIH0gZmluYWxseSB7XG4vLyAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIG1vZGFsU3RhY2sucHVzaChjb21wb25lbnRJbnN0YW5jZUluZm8pO1xuLy8gICAgICAgICBtb2RhbExhdW5jaGVyLnNob3dNb2RhbChtb2RhbFZpZXcsIHsgLi4ub3B0aW9ucywgY29udGV4dDoge30sIGNsb3NlQ2FsbGJhY2sgfSlcbi8vICAgICB9KTtcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKHJlc3VsdDogYW55KTogdm9pZCB7XG4vLyAgICAgbGV0IG1vZGFsUGFnZUluc3RhbmNlSW5mbyA9IG1vZGFsU3RhY2sucG9wKCk7XG4vLyAgICAgbW9kYWxQYWdlSW5zdGFuY2VJbmZvLmVsZW1lbnQubmF0aXZlVmlldy5jbG9zZU1vZGFsKHJlc3VsdCk7XG4vLyB9XG4iLCJpbXBvcnQgeyBURU1QTEFURV9PTkxZX0NPTVBPTkVOVCB9IGZyb20gJ0BnbGltbWVyL3J1bnRpbWUnO1xuaW1wb3J0IHsgTmF0aXZlTW9kaWZpZXJNYW5hZ2VyLCBOYXRpdmVNb2RpZmllckRlZmluaXRpb25TdGF0ZSB9IGZyb20gJy4vbmF0aXZlLW1vZGlmaWVyLW1hbmFnZXInO1xuaW1wb3J0IE5hdGl2ZUNvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9uYXRpdmUtY29tcG9uZW50LW1hbmFnZXInO1xuaW1wb3J0IENBUEFCSUxJVElFUyBmcm9tICcuL25hdGl2ZS1jYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHsgdW5yZWFjaGFibGUgfSBmcm9tICdAZ2xpbW1lci91dGlsJztcbmNsYXNzIE5hdGl2ZUNvbXBvbmVudERlZmluaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG1hbmFnZXIsIENvbXBvbmVudENsYXNzLCBoYW5kbGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy5Db21wb25lbnRDbGFzcyA9IENvbXBvbmVudENsYXNzO1xuICAgICAgICB0aGlzLmhhbmRsZSA9IGhhbmRsZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBjYXBhYmlsaXRpZXM6IENBUEFCSUxJVElFUyxcbiAgICAgICAgICAgIENvbXBvbmVudENsYXNzLFxuICAgICAgICAgICAgaGFuZGxlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIHsgR2xpbW1lckRlYnVnOiBgPGNvbXBvbmVudC1kZWZpbml0aW9uIG5hbWU9XCIke3RoaXMubmFtZX1cIj5gIH07XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb2x2ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYmxlID0gW107XG4gICAgICAgIHRoaXMubWFuYWdlcnMgPSB7fTtcbiAgICB9XG4gICAgcmVzb2x2ZShoYW5kbGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIHJlc29sdmVyIHJlc29sdmUnKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy50YWJsZVtoYW5kbGVdO1xuICAgICAgICByZXR1cm4gKHZhbHVlKTtcbiAgICB9XG4gICAgbWFuYWdlckZvcihtYW5hZ2VySWQgPSAnbWFpbicpIHtcbiAgICAgICAgbGV0IG1hbmFnZXIgPSB0aGlzLm1hbmFnZXJzW21hbmFnZXJJZF07XG4gICAgICAgIGlmIChtYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlcjtcbiAgICAgICAgfVxuICAgICAgICBtYW5hZ2VyID0gbmV3IE5hdGl2ZUNvbXBvbmVudE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5tYW5hZ2Vyc1ttYW5hZ2VySWRdID0gbWFuYWdlcjtcbiAgICAgICAgcmV0dXJuIG1hbmFnZXI7XG4gICAgfVxuICAgIGdldEludm9jYXRpb24obG9jYXRvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuaW1wbGVtZW50ZWQgZ2V0SW52b2NhdGlvbicpO1xuICAgIH1cbiAgICBsb29rdXBDb21wb25lbnQobmFtZSwgcmVmZXJyZXIpIHtcbiAgICAgICAgbGV0IGRlZmluaXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnRhYmxlLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgIH1cbiAgICBsb29rdXBQYXJ0aWFsKG5hbWUsIHJlZmVycmVyKSB7XG4gICAgICAgIHRocm93IHVucmVhY2hhYmxlKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KG5hbWUsIENvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMudGFibGUubGVuZ3RoO1xuICAgICAgICBsZXQgbWFuYWdlciA9IHRoaXMubWFuYWdlckZvcigpO1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IE5hdGl2ZUNvbXBvbmVudERlZmluaXRpb24obmFtZSwgbWFuYWdlciwgQ29tcG9uZW50Q2xhc3MsIGhhbmRsZSk7XG4gICAgICAgIC8vIGNvbnN0IGRlZmluaXRpb24gPSAodGhpcy5yZXNvbHZlQ29tcG9uZW50RGVmaW5pdGlvbihDb21wb25lbnRDbGFzcyBhcyBGYWN0b3J5PHVua25vd24+KSBhcyBhbnkpO1xuICAgICAgICAvLyBkZWZpbml0aW9uLnN0YXRlLmhhbmRsZSA9IGhhbmRsZTtcbiAgICAgICAgdGhpcy50YWJsZS5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgIH1cbiAgICByZWdpc3RlclRlbXBsYXRlT25seUNvbXBvbmVudCgpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlID0gdGhpcy50YWJsZS5sZW5ndGg7XG4gICAgICAgIHRoaXMudGFibGUucHVzaChURU1QTEFURV9PTkxZX0NPTVBPTkVOVCk7XG4gICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgfVxuICAgIHJlZ2lzdGVySGVscGVyKGhlbHBlcikge1xuICAgICAgICBjb25zdCBoYW5kbGUgPSB0aGlzLnRhYmxlLmxlbmd0aDtcbiAgICAgICAgdGhpcy50YWJsZS5wdXNoKGhlbHBlcik7XG4gICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgfVxuICAgIHJlZ2lzdGVyTW9kaWZpZXIoTW9kaWZpZXJDbGFzcykge1xuICAgICAgICBjb25zdCBoYW5kbGUgPSB0aGlzLnRhYmxlLmxlbmd0aDtcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IE5hdGl2ZU1vZGlmaWVyRGVmaW5pdGlvblN0YXRlKE1vZGlmaWVyQ2xhc3MpO1xuICAgICAgICBsZXQgbWFuYWdlciA9IG5ldyBOYXRpdmVNb2RpZmllck1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy50YWJsZS5wdXNoKHtcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgbWFuYWdlclxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwcmVjb21waWxlIH0gZnJvbSAnQGdsaW1tZXIvY29tcGlsZXInO1xuaW1wb3J0IExpbmtUbyBmcm9tICcuL2NvbXBvbmVudHMvbGluay10by9jb21wb25lbnQnO1xuaW1wb3J0IGJ1aWxkQWN0aW9uIGZyb20gJy4vaGVscGVycy9hY3Rpb24nO1xuaW1wb3J0IG9uTW9kaWZpZXIgZnJvbSAnLi9tb2RpZmllcnMvb24nO1xuLy8gY29uc3QgcHJlY29tcGlsZSA9IHJlcXVpcmUoJ0BnbGltbWVyL2NvbXBpbGVyJykucHJlY29tcGlsZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwR2xpbW1lcihyZXNvbHZlckRlbGVnYXRlLCByZXNvbHZlcikge1xuICAgIGNvbnN0IGFjdGlvbkhhbmRsZSA9IHJlc29sdmVyLnJlZ2lzdGVySGVscGVyKGJ1aWxkQWN0aW9uKTtcbiAgICBjb25zdCBvbk1vZGlmaWVySGFuZGxlID0gcmVzb2x2ZXIucmVnaXN0ZXJNb2RpZmllcihvbk1vZGlmaWVyKTtcbiAgICBjb25zdCBsaW5rVG9IYW5kbGUgPSByZXNvbHZlci5yZWdpc3RlckNvbXBvbmVudCgnTGlua1RvJywgTGlua1RvKTtcbiAgICByZXNvbHZlckRlbGVnYXRlLnJlZ2lzdGVySGVscGVyKCdhY3Rpb24nLCBhY3Rpb25IYW5kbGUpO1xuICAgIHJlc29sdmVyRGVsZWdhdGUucmVnaXN0ZXJNb2RpZmllcignb24nLCBvbk1vZGlmaWVySGFuZGxlKTtcbiAgICAvLyBjb25zdCBMaW5rVG9UZW1wbGF0ZSA9IHJlYWRGaWxlU3luYygnLi9jb21wb25lbnRzL2xpbmstdG8vdGVtcGxhdGUuaGJzJyk7XG4gICAgcmVzb2x2ZXJEZWxlZ2F0ZS5yZWdpc3RlckNvbXBvbmVudCgnTGlua1RvJywgbGlua1RvSGFuZGxlLCBwcmVjb21waWxlKGA8YnV0dG9uIHRleHQ9e3tAdGV4dH19IGNsYXNzPVwiYnRuIGxpbmstdG9cIiB7e29uIFwidGFwXCIgKGFjdGlvbiB0aGlzLm9uQ2xpY2spfX0+PC9idXR0b24+YCksIHtcbiAgICAgICAgYXR0cmlidXRlSG9vazogdHJ1ZSxcbiAgICAgICAgY3JlYXRlQXJnczogdHJ1ZSxcbiAgICAgICAgY3JlYXRlQ2FsbGVyOiBmYWxzZSxcbiAgICAgICAgY3JlYXRlSW5zdGFuY2U6IHRydWUsXG4gICAgICAgIGR5bmFtaWNMYXlvdXQ6IGZhbHNlLFxuICAgICAgICBkeW5hbWljU2NvcGU6IGZhbHNlLFxuICAgICAgICBkeW5hbWljVGFnOiB0cnVlLFxuICAgICAgICBlbGVtZW50SG9vazogdHJ1ZSxcbiAgICAgICAgcHJlcGFyZUFyZ3M6IGZhbHNlLFxuICAgICAgICB1cGRhdGVIb29rOiB0cnVlLFxuICAgICAgICB3cmFwcGVkOiBmYWxzZVxuICAgIH0pO1xufVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL0Rhc2hib2FyZC9jb21wb25lbnQudHNcIjogXCIuLi9zcmMvdWkvY29tcG9uZW50cy9EYXNoYm9hcmQvY29tcG9uZW50LnRzXCIsXG5cdFwiLi9EZW1vL2NvbXBvbmVudC50c1wiOiBcIi4uL3NyYy91aS9jb21wb25lbnRzL0RlbW8vY29tcG9uZW50LnRzXCIsXG5cdFwiLi9Ib21lL2NvbXBvbmVudC50c1wiOiBcIi4uL3NyYy91aS9jb21wb25lbnRzL0hvbWUvY29tcG9uZW50LnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi4vc3JjL3VpL2NvbXBvbmVudHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvY29tcG9uZW50XFxcXC50cyRcIjsiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5pbXBvcnQgeyB0cmFja2VkIH0gZnJvbSAnQGdsaW1tZXIvdHJhY2tpbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiV2VsY29tZSB0byBnbGltbWVyXCI7XG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiQ2xpY2sgTWUhXCI7XG4gICAgfVxuICAgIGJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gbmV4dCcpO1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJJdmUgaGVhcmQgaXQgYm90aCB3YXlzXCI7XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgdHJhY2tlZFxuXSwgRGFzaGJvYXJkLnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl0Y0c5dVpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCTEU5QlFVOHNVMEZCVXl4TlFVRk5MRzlDUVVGdlFpeERRVUZETzBGQlF6TkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVFVGQlRTeHRRa0ZCYlVJc1EwRkJRenRCUVVVMVF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4blFrRkJhVUlzVTBGQlVTeFRRVUZUTzBsQlFXaEVPenRSUVVWSkxGVkJRVXNzUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRSUVVVM1FpeGxRVUZWTEVkQlFVY3NWMEZCVnl4RFFVRkJPMGxCVFRWQ0xFTkJRVU03U1VGS1J5eFhRVUZYTzFGQlExQXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU4yUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMGxCUXpGRExFTkJRVU03UTBGRFNqdEJRVkpITzBsQlJFTXNUMEZCVHp0M1EwRkRjVUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUTI5dGNHOXVaVzUwSUdaeWIyMGdKMEJuYkdsdGJXVnlMMk52YlhCdmJtVnVkQ2M3WEc1cGJYQnZjblFnZXlCMGNtRmphMlZrSUgwZ1puSnZiU0FuUUdkc2FXMXRaWEl2ZEhKaFkydHBibWNuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJFWVhOb1ltOWhjbVFnWlhoMFpXNWtjeUJEYjIxd2IyNWxiblFnZTF4dUlDQWdJRUIwY21GamEyVmtYRzRnSUNBZ2RHbDBiR1VnUFNCY0lsZGxiR052YldVZ2RHOGdaMnhwYlcxbGNsd2lPMXh1WEc0Z0lDQWdZblYwZEc5dVZHVjRkQ0E5SUZ3aVEyeHBZMnNnVFdVaFhDSmNibHh1SUNBZ0lHSjFkSFJ2YmtOc2FXTnJLQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG14dlp5Z25hVzRnYm1WNGRDY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUnBkR3hsSUQwZ1hDSkpkbVVnYUdWaGNtUWdhWFFnWW05MGFDQjNZWGx6WENJN1hHNGdJQ0FnZlZ4dWZWeHVJbDE5IiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuaW1wb3J0IHsgdHJhY2tlZCB9IGZyb20gJ0BnbGltbWVyL3RyYWNraW5nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJXZWxjb21lIHRvIGdsaW1tZXJcIjtcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJDbGljayBNZSFcIjtcbiAgICB9XG4gICAgYnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBuZXh0Jyk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBcIkl2ZSBoZWFyZCBpdCBib3RoIHdheXNcIjtcbiAgICB9XG59XG5fX2RlY29yYXRlKFtcbiAgICB0cmFja2VkXG5dLCBEZW1vLnByb3RvdHlwZSwgXCJ0aXRsZVwiLCB2b2lkIDApO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl0Y0c5dVpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCTEU5QlFVOHNVMEZCVXl4TlFVRk5MRzlDUVVGdlFpeERRVUZETzBGQlF6TkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVFVGQlRTeHRRa0ZCYlVJc1EwRkJRenRCUVVVMVF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4WFFVRlpMRk5CUVZFc1UwRkJVenRKUVVFelF6czdVVUZGU1N4VlFVRkxMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTTdVVUZGTjBJc1pVRkJWU3hIUVVGSExGZEJRVmNzUTBGQlFUdEpRVTAxUWl4RFFVRkRPMGxCU2tjc1YwRkJWenRSUVVOUUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRka0lzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4M1FrRkJkMElzUTBGQlF6dEpRVU14UXl4RFFVRkRPME5CUTBvN1FVRlNSenRKUVVSRExFOUJRVTg3YlVOQlEzRkNJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRU52YlhCdmJtVnVkQ0JtY205dElDZEFaMnhwYlcxbGNpOWpiMjF3YjI1bGJuUW5PMXh1YVcxd2IzSjBJSHNnZEhKaFkydGxaQ0I5SUdaeWIyMGdKMEJuYkdsdGJXVnlMM1J5WVdOcmFXNW5KenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdSR1Z0YnlCbGVIUmxibVJ6SUVOdmJYQnZibVZ1ZENCN1hHNGdJQ0FnUUhSeVlXTnJaV1JjYmlBZ0lDQjBhWFJzWlNBOUlGd2lWMlZzWTI5dFpTQjBieUJuYkdsdGJXVnlYQ0k3WEc1Y2JpQWdJQ0JpZFhSMGIyNVVaWGgwSUQwZ1hDSkRiR2xqYXlCTlpTRmNJbHh1WEc0Z0lDQWdZblYwZEc5dVEyeHBZMnNvS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LQ2RwYmlCdVpYaDBKeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkR2wwYkdVZ1BTQmNJa2wyWlNCb1pXRnlaQ0JwZENCaWIzUm9JSGRoZVhOY0lqdGNiaUFnSUNCOVhHNTlYRzRpWFgwPSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnQGdsaW1tZXIvY29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl0Y0c5dVpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzVTBGQlV5eE5RVUZOTEc5Q1FVRnZRaXhEUVVGRE8wRkJSVE5ETEUxQlFVMHNRMEZCUXl4UFFVRlBMRmRCUVZrc1UwRkJVU3hUUVVGVE8wTkJSVEZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVOdmJYQnZibVZ1ZENCbWNtOXRJQ2RBWjJ4cGJXMWxjaTlqYjIxd2IyNWxiblFuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJJYjIxbElHVjRkR1Z1WkhNZ1EyOXRjRzl1Wlc1MElIdGNibHh1ZlZ4dUlsMTkiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAocm9vdHxwYWdlKVxcXFwuKHhtbHxjc3N8anN8dHN8c2NzcykkXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19pbml0aWFsSG1yVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2htclN5bmNCYWNrdXAgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbC5fX2luaXRpYWxIbXJVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuX19obXJTeW5jQmFja3VwKHsgdHlwZSwgcGF0aCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGhtclVwZGF0ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5fX2luaXRpYWxIbXJVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyhyb290fHBhZ2UpXFwuKHhtbHxjc3N8anN8dHN8c2NzcykkLyk7XG4gICAgICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbiAgICAgICAgICAgIFxuICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpO1xuICAgICAgICBpbXBvcnQgTmF0aXZlc2NyaXB0R2xpbW1lciwgeyBSZXNvbHZlciwgUmVzb2x2ZXJEZWxlZ2F0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nbGltbWVyJztcbmltcG9ydCB7IGtub3duRm9sZGVycyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0nO1xuY29uc3QgcmVzb2x2ZXJEZWxlZ2F0ZSA9IG5ldyBSZXNvbHZlckRlbGVnYXRlKCk7XG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpO1xuZnVuY3Rpb24gYWRkVGVtcGxhdGVzKGFwcEZvbGRlcikge1xuICAgIGxldCB0ZW1wbGF0ZXNGaWxlID0gYXBwRm9sZGVyLmdldEZpbGUoXCJ0ZW1wbGF0ZXMuanNvblwiKTtcbiAgICBsZXQgdGVtcGxhdGVzID0gdGVtcGxhdGVzRmlsZS5yZWFkVGV4dFN5bmMoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgVGVtcGxhdGVzOiAke3RlbXBsYXRlc31gKTtcbiAgICBKU09OLnBhcnNlKHRlbXBsYXRlcykuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICAgIHJlc29sdmVyRGVsZWdhdGUucmVnaXN0ZXJDb21wb25lbnQodGVtcGxhdGUubmFtZSwgdGVtcGxhdGUuaGFuZGxlLCB0ZW1wbGF0ZS5zb3VyY2UsIHRlbXBsYXRlLmNhcGFiaWxpdGllcyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRDb21wb25lbnRzKGFwcEZvbGRlcikge1xuICAgIGxldCBjb21wb25lbnRzRmlsZSA9IGFwcEZvbGRlci5nZXRGaWxlKFwiY29tcG9uZW50cy5qc29uXCIpO1xuICAgIGxldCBjb21wb25lbnRzID0gY29tcG9uZW50c0ZpbGUucmVhZFRleHRTeW5jKCk7XG4gICAgY29uc29sZS5sb2coYEFib3V0IHRvIHJlc29sdmUgcmVxdWlyZWApO1xuICAgIEpTT04ucGFyc2UoY29tcG9uZW50cykuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgQWJvdXQgdG8gcmVzb2x2ZSByZXF1aXJlYCk7XG4gICAgICAgIGNvbnN0IGNsYXNzRmlsZSA9IHJlcXVpcmUoYC4uL3NyYy91aS9jb21wb25lbnRzLyR7Y29tcG9uZW50Lm5hbWV9L2NvbXBvbmVudC50c2ApO1xuICAgICAgICByZXNvbHZlci5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY2xhc3NGaWxlLmRlZmF1bHQpO1xuICAgIH0pO1xufVxuLy8gZnVuY3Rpb24gcmVxdWlyZUFsbChyKSB7IHIua2V5cygpLmZvckVhY2gocik7IH1cbi8vIHJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9zcmMvdWkvY29tcG9uZW50cy8nLCB0cnVlLCAvY29tcG9uZW50LnRzJC8pKTtcbnRyeSB7XG4gICAgbGV0IGFwcEZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgYWRkVGVtcGxhdGVzKGFwcEZvbGRlcik7XG4gICAgYWRkQ29tcG9uZW50cyhhcHBGb2xkZXIpO1xuICAgIGNvbnN0IGFwcCA9IG5ldyBOYXRpdmVzY3JpcHRHbGltbWVyKCdEZW1vJywgcmVzb2x2ZXJEZWxlZ2F0ZSwgcmVzb2x2ZXIpO1xuICAgIGFwcC5yZW5kZXIoKTtcbn1cbmNhdGNoIChlcnJvcnMpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhCd0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWVhCd0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEU5QlFVOHNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzVFVGQlRTeHpRa0ZCYzBJc1EwRkJRenRCUVVOMlJpeFBRVUZQTEVWQlFVVXNXVUZCV1N4RlFVRkZMRTFCUVUwc09FSkJRVGhDTEVOQlFVTTdRVUZGTlVRc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4SlFVRkpMR2RDUVVGblFpeEZRVUZGTEVOQlFVTTdRVUZEYUVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeFJRVUZSTEVWQlFVVXNRMEZCUXp0QlFVVm9ReXh6UWtGQmMwSXNVMEZCVXp0SlFVTXpRaXhKUVVGSkxHRkJRV0VzUjBGQlJ5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTTdTVUZEZUVRc1NVRkJTU3hUUVVGVExFZEJRVWNzWVVGQllTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMGxCUXpkRExEQkRRVUV3UXp0SlFVTXhReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdFJRVU55UXl4blFrRkJaMElzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRMMGNzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEVUN4RFFVRkRPMEZCUlVRc2RVSkJRWFZDTEZOQlFWTTdTVUZETlVJc1NVRkJTU3hqUVVGakxFZEJRVWNzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVUZETzBsQlF6RkVMRWxCUVVrc1ZVRkJWU3hIUVVGSExHTkJRV01zUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0SlFVTXZReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETERCQ1FVRXdRaXhEUVVGRExFTkJRVU03U1VGRGVFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1VVRkRka01zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl3d1FrRkJNRUlzUTBGQlF5eERRVUZETzFGQlEzaERMRTFCUVUwc1UwRkJVeXhIUVVGSExFOUJRVThzUTBGQlF5eDNRa0ZCZDBJc1UwRkJVeXhEUVVGRExFbEJRVWtzWlVGQlpTeERRVUZETEVOQlFVTTdVVUZEYWtZc1VVRkJVU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTJ4RkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlExQXNRMEZCUXp0QlFVVkVMR3RFUVVGclJEdEJRVU5zUkN3clJVRkJLMFU3UVVGRkwwVXNTVUZCU1N4RFFVRkRPMGxCUTBRc1NVRkJTU3hUUVVGVExFZEJRVWNzV1VGQldTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUXpGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdTVUZEZWtJc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeHRRa0ZCYlVJc1EwRkJReXhOUVVGTkxFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGVFVXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wRkJRMnBDTEVOQlFVTTdRVUZCUXl4TFFVRkxMRU5CUVVFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEySXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU40UWl4RFFVRkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRTVoZEdsMlpYTmpjbWx3ZEVkc2FXMXRaWElzSUhzZ1VtVnpiMngyWlhJc0lGSmxjMjlzZG1WeVJHVnNaV2RoZEdVZ2ZTQm1jbTl0SUNkdVlYUnBkbVZ6WTNKcGNIUXRaMnhwYlcxbGNpYzdYRzVwYlhCdmNuUWdleUJyYm05M2JrWnZiR1JsY25NZ2ZTQm1jbTl0SUNkMGJuTXRZMjl5WlMxdGIyUjFiR1Z6TDJacGJHVXRjM2x6ZEdWdEp6dGNibHh1WTI5dWMzUWdjbVZ6YjJ4MlpYSkVaV3hsWjJGMFpTQTlJRzVsZHlCU1pYTnZiSFpsY2tSbGJHVm5ZWFJsS0NrN1hHNWpiMjV6ZENCeVpYTnZiSFpsY2lBOUlHNWxkeUJTWlhOdmJIWmxjaWdwTzF4dVhHNW1kVzVqZEdsdmJpQmhaR1JVWlcxd2JHRjBaWE1vWVhCd1JtOXNaR1Z5S1NCN1hHNGdJQ0FnYkdWMElIUmxiWEJzWVhSbGMwWnBiR1VnUFNCaGNIQkdiMnhrWlhJdVoyVjBSbWxzWlNoY0luUmxiWEJzWVhSbGN5NXFjMjl1WENJcE8xeHVJQ0FnSUd4bGRDQjBaVzF3YkdGMFpYTWdQU0IwWlcxd2JHRjBaWE5HYVd4bExuSmxZV1JVWlhoMFUzbHVZeWdwTzF4dUlDQWdJQzh2SUdOdmJuTnZiR1V1Ykc5bktHQlVaVzF3YkdGMFpYTTZJQ1I3ZEdWdGNHeGhkR1Z6ZldBcE8xeHVJQ0FnSUVwVFQwNHVjR0Z5YzJVb2RHVnRjR3hoZEdWektTNW1iM0pGWVdOb0tIUmxiWEJzWVhSbElEMCtJSHRjYmlBZ0lDQWdJQ0FnY21WemIyeDJaWEpFWld4bFoyRjBaUzV5WldkcGMzUmxja052YlhCdmJtVnVkQ2gwWlcxd2JHRjBaUzV1WVcxbExDQjBaVzF3YkdGMFpTNW9ZVzVrYkdVc0lIUmxiWEJzWVhSbExuTnZkWEpqWlN3Z2RHVnRjR3hoZEdVdVkyRndZV0pwYkdsMGFXVnpLVHRjYmlBZ0lDQjlLVHRjYm4xY2JseHVablZ1WTNScGIyNGdZV1JrUTI5dGNHOXVaVzUwY3loaGNIQkdiMnhrWlhJcElIdGNiaUFnSUNCc1pYUWdZMjl0Y0c5dVpXNTBjMFpwYkdVZ1BTQmhjSEJHYjJ4a1pYSXVaMlYwUm1sc1pTaGNJbU52YlhCdmJtVnVkSE11YW5OdmJsd2lLVHRjYmlBZ0lDQnNaWFFnWTI5dGNHOXVaVzUwY3lBOUlHTnZiWEJ2Ym1WdWRITkdhV3hsTG5KbFlXUlVaWGgwVTNsdVl5Z3BPMXh1SUNBZ0lHTnZibk52YkdVdWJHOW5LR0JCWW05MWRDQjBieUJ5WlhOdmJIWmxJSEpsY1hWcGNtVmdLVHRjYmlBZ0lDQktVMDlPTG5CaGNuTmxLR052YlhCdmJtVnVkSE1wTG1admNrVmhZMmdvWTI5dGNHOXVaVzUwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvWUVGaWIzVjBJSFJ2SUhKbGMyOXNkbVVnY21WeGRXbHlaV0FwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JqYkdGemMwWnBiR1VnUFNCeVpYRjFhWEpsS0dBdUxpOXpjbU12ZFdrdlkyOXRjRzl1Wlc1MGN5OGtlMk52YlhCdmJtVnVkQzV1WVcxbGZTOWpiMjF3YjI1bGJuUXVkSE5nS1R0Y2JpQWdJQ0FnSUNBZ2NtVnpiMngyWlhJdWNtVm5hWE4wWlhKRGIyMXdiMjVsYm5Rb1kyOXRjRzl1Wlc1MExtNWhiV1VzSUdOc1lYTnpSbWxzWlM1a1pXWmhkV3gwS1R0Y2JpQWdJQ0I5S1R0Y2JuMWNibHh1THk4Z1puVnVZM1JwYjI0Z2NtVnhkV2x5WlVGc2JDaHlLU0I3SUhJdWEyVjVjeWdwTG1admNrVmhZMmdvY2lrN0lIMWNiaTh2SUhKbGNYVnBjbVZCYkd3b2NtVnhkV2x5WlM1amIyNTBaWGgwS0NjdUxpOXpjbU12ZFdrdlkyOXRjRzl1Wlc1MGN5OG5MQ0IwY25WbExDQXZZMjl0Y0c5dVpXNTBMblJ6SkM4cEtUdGNibHh1ZEhKNUlIdGNiaUFnSUNCc1pYUWdZWEJ3Um05c1pHVnlJRDBnYTI1dmQyNUdiMnhrWlhKekxtTjFjbkpsYm5SQmNIQW9LVHRjYmlBZ0lDQmhaR1JVWlcxd2JHRjBaWE1vWVhCd1JtOXNaR1Z5S1R0Y2JpQWdJQ0JoWkdSRGIyMXdiMjVsYm5SektHRndjRVp2YkdSbGNpazdYRzRnSUNBZ1kyOXVjM1FnWVhCd0lEMGdibVYzSUU1aGRHbDJaWE5qY21sd2RFZHNhVzF0WlhJb0owUmxiVzhuTENCeVpYTnZiSFpsY2tSbGJHVm5ZWFJsTENCeVpYTnZiSFpsY2lrN1hHNGdJQ0FnWVhCd0xuSmxibVJsY2lncE8xeHVmU0JqWVhSamFDaGxjbkp2Y25NcElIdGNiaUFnSUNCamIyNXpiMnhsTG14dlp5aGxjbkp2Y25NcE8xeHVmVnh1SWwxOVxuICAgIFxuICAgICAgICBcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==