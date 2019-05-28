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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
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
// export function registerNativeElement(elementName: string, resolver: () => typeof View, meta: ComponentMeta = null) {
//     registerElement(elementName, () => new NativeNode(elementName, resolver(), meta));
// }
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
function createElement(elementName) {
    const normalizedName = normalizeElementName(elementName);
    const elementDefinition = elementMap[normalizedName];
    if (!elementDefinition) {
        throw new TypeError(`No known component for element ${elementName}.`);
    }
    return elementDefinition.resolver();
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
/* harmony import */ var _element_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/element-registry.js");
/* harmony import */ var _ViewNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/nodes/ViewNode.js");


function camelize(kebab) {
    return kebab.replace(/[\-]+(\w)/g, (m, l) => l.toUpperCase());
}
const EVENT_ATTRIBUTES = Object.freeze([
    'tap'
]);
class ElementNode extends _ViewNode__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(tagName) {
        super();
        this.nodeType = 1;
        this.tagName = tagName;
        //there are some special elements that don't exist natively
        const viewClass = Object(_element_registry__WEBPACK_IMPORTED_MODULE_0__["getViewClass"])(tagName);
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
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_utils_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/utils/types.js");
/* harmony import */ var tns_core_modules_utils_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/element-registry.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../nativescript-glimmer/dist/lib/dom/utils.js");




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
        this._tagName = Object(_element_registry__WEBPACK_IMPORTED_MODULE_2__["normalizeElementName"])(name);
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
        return (this._meta = Object(_element_registry__WEBPACK_IMPORTED_MODULE_2__["getViewMeta"])(this.tagName));
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
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__["isAndroid"] && key.startsWith('android:')) {
            key = key.substr(8);
        }
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__["isIOS"] && key.startsWith('ios:')) {
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
                if (Object(tns_core_modules_utils_types__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(nv[key]) && value === '') {
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
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["insertChild"])(this, childNode, index);
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
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["insertChild"])(this, childNode, this.childNodes.length - 1);
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
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["removeChild"])(this, childNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2RvbS9lbGVtZW50LXJlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2RvbS9ub2Rlcy9Db21tZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9kb20vbm9kZXMvRG9jdW1lbnROb2RlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2RvbS9ub2Rlcy9FbGVtZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9kb20vbm9kZXMvVGV4dE5vZGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZGFtYmFrZXIvRGV2ZWxvcG1lbnQvR2xpbW1lciBOYXRpdmUvbmF0aXZlc2NyaXB0LWdsaW1tZXIvZGlzdC9saWIvZG9tL25vZGVzL1ZpZXdOb2RlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2RvbS9zZXR1cC1yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9kb20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZGFtYmFrZXIvRGV2ZWxvcG1lbnQvR2xpbW1lciBOYXRpdmUvbmF0aXZlc2NyaXB0LWdsaW1tZXIvZGlzdC9saWIvZ2xpbW1lci9jb21wb25lbnRzL2xpbmstdG8vY29tcG9uZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2dsaW1tZXIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9nbGltbWVyL2hlbHBlcnMvYWN0aW9uLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2dsaW1tZXIvbW9kaWZpZXJzL29uLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRhbWJha2VyL0RldmVsb3BtZW50L0dsaW1tZXIgTmF0aXZlL25hdGl2ZXNjcmlwdC1nbGltbWVyL2Rpc3QvbGliL2dsaW1tZXIvbmF0aXZlLWNhcGFiaWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9nbGltbWVyL25hdGl2ZS1jb21wb25lbnQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9nbGltbWVyL25hdGl2ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZGFtYmFrZXIvRGV2ZWxvcG1lbnQvR2xpbW1lciBOYXRpdmUvbmF0aXZlc2NyaXB0LWdsaW1tZXIvZGlzdC9saWIvZ2xpbW1lci9uYXRpdmUtbW9kaWZpZXItbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9nbGltbWVyL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZGFtYmFrZXIvRGV2ZWxvcG1lbnQvR2xpbW1lciBOYXRpdmUvbmF0aXZlc2NyaXB0LWdsaW1tZXIvZGlzdC9saWIvZ2xpbW1lci9yZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkYW1iYWtlci9EZXZlbG9wbWVudC9HbGltbWVyIE5hdGl2ZS9uYXRpdmVzY3JpcHQtZ2xpbW1lci9kaXN0L2xpYi9nbGltbWVyL3NldHVwLmpzIiwid2VicGFjazovLy8uLi9zcmMvdWkvY29tcG9uZW50cyBzeW5jIF5cXC5cXC8uKlxcL2NvbXBvbmVudFxcLnRzJCIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2NvbXBvbmVudHMvRGFzaGJvYXJkL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2NvbXBvbmVudHMvRGVtby9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9jb21wb25lbnRzL0hvbWUvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vLy4gc3luYyAocm9vdHxwYWdlKVxcLih4bWx8Y3NzfGpzfHRzfHNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQGdsaW1tZXIvb3Bjb2RlLWNvbXBpbGVyJztcbmltcG9ydCB7IGFydGlmYWN0cyB9IGZyb20gJ0BnbGltbWVyL3Byb2dyYW0nO1xuaW1wb3J0IHsgQW90UnVudGltZSwgcmVuZGVyQW90LCByZW5kZXJTeW5jIH0gZnJvbSAnQGdsaW1tZXIvcnVudGltZSc7XG5pbXBvcnQgeyBzZXRQcm9wZXJ0eURpZENoYW5nZSB9IGZyb20gJ0BnbGltbWVyL3RyYWNraW5nJztcbmltcG9ydCB7IGxhdW5jaEV2ZW50LCBvbiwgcnVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgRG9jdW1lbnROb2RlIGZyb20gJy4vbGliL2RvbS9ub2Rlcy9Eb2N1bWVudE5vZGUnO1xuaW1wb3J0IEVsZW1lbnROb2RlIGZyb20gJy4vbGliL2RvbS9ub2Rlcy9FbGVtZW50Tm9kZSc7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnRzIH0gZnJvbSAnLi9saWIvZG9tL3NldHVwLXJlZ2lzdHJ5JztcbmltcG9ydCBHbGltbWVyUmVzb2x2ZXJEZWxlZ2F0ZSBmcm9tICcuL2xpYi9nbGltbWVyL2NvbnRleHQnO1xuaW1wb3J0IHNldHVwR2xpbW1lciBmcm9tICcuL2xpYi9nbGltbWVyL3NldHVwJztcbi8vIGltcG9ydCB7IHNldFByb3BlcnR5RGlkQ2hhbmdlIH0gZnJvbSAnQGdsaW1tZXIvY29tcG9uZW50Jztcbi8vRXhwb3J0c1xuZXhwb3J0IHsgUmVzb2x2ZXJEZWxlZ2F0ZSB9IGZyb20gJy4vbGliL2dsaW1tZXIvY29udGV4dCc7XG5leHBvcnQgeyByZWdpc3RlckVsZW1lbnRzIH0gZnJvbSAnLi9saWIvZG9tL3NldHVwLXJlZ2lzdHJ5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG9jdW1lbnROb2RlIH0gZnJvbSAnLi9saWIvZG9tL25vZGVzL0RvY3VtZW50Tm9kZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVsZW1lbnROb2RlIH0gZnJvbSAnLi9saWIvZG9tL25vZGVzL0VsZW1lbnROb2RlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVzb2x2ZXIgfSBmcm9tICcuL2xpYi9nbGltbWVyL3Jlc29sdmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF0aXZlQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvZ2xpbW1lci9uYXRpdmUtY29tcG9uZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF0aXZlQ2FwYWJpbGl0aWVzIH0gZnJvbSAnLi9saWIvZ2xpbW1lci9uYXRpdmUtY2FwYWJpbGl0aWVzJztcbmV4cG9ydCB7IE5hdGl2ZU1vZGlmaWVyLCBOYXRpdmVNb2RpZmllckRlZmluaXRpb25TdGF0ZSB9IGZyb20gJy4vbGliL2dsaW1tZXIvbmF0aXZlLW1vZGlmaWVyLW1hbmFnZXInO1xuc2V0UHJvcGVydHlEaWRDaGFuZ2UoKCkgPT4ge1xuICAgIE5hdGl2ZXNjcmlwdEdsaW1tZXIuc2NoZWR1bGVSZXJlbmRlcigpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXRpdmVzY3JpcHRHbGltbWVyIHtcbiAgICBjb25zdHJ1Y3RvcihzdHIsIHJlc29sdmVyRGVsZWdhdGUsIHJlc29sdmVyKSB7XG4gICAgICAgIHJlZ2lzdGVyRWxlbWVudHMoKTtcbiAgICAgICAgc2V0dXBHbGltbWVyKHJlc29sdmVyRGVsZWdhdGUsIHJlc29sdmVyKTtcbiAgICAgICAgTmF0aXZlc2NyaXB0R2xpbW1lci5yZXNvbHZlciA9IHJlc29sdmVyO1xuICAgICAgICBjb25zdCBkb2N1bWVudCA9IG5ldyBEb2N1bWVudE5vZGUoKTtcbiAgICAgICAgTmF0aXZlc2NyaXB0R2xpbW1lci5kb2N1bWVudCA9IGRvY3VtZW50O1xuICAgICAgICB0aGlzLnJvb3RGcmFtZSA9IG5ldyBFbGVtZW50Tm9kZSgnZnJhbWUnKTtcbiAgICAgICAgLy8gLy9zZXR1cCBhIGZyYW1lIHNvIHdlIGFsd2F5cyBoYXZlIHNvbWV3aGVyZSB0byBoYW5nIG91ciBjc3NcbiAgICAgICAgdGhpcy5yb290RnJhbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhcHAtcm9vdC1mcmFtZVwiKTtcbiAgICAgICAgTmF0aXZlc2NyaXB0R2xpbW1lci5kb2N1bWVudC5hcHBlbmRDaGlsZCh0aGlzLnJvb3RGcmFtZSk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBDb250ZXh0KEdsaW1tZXJSZXNvbHZlckRlbGVnYXRlKTtcbiAgICAgICAgTmF0aXZlc2NyaXB0R2xpbW1lci5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbnRleHQgQ3JlYXRlZCcpO1xuICAgICAgICB0aGlzLm1haW4gPSBHbGltbWVyUmVzb2x2ZXJEZWxlZ2F0ZS5sb29rdXBDb21wb25lbnQoc3RyKS5jb21waWxhYmxlLmNvbXBpbGUoTmF0aXZlc2NyaXB0R2xpbW1lci5jb250ZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2coJ01haW4gQ3JlYXRlZCcpO1xuICAgICAgICB0aGlzLmFydGlmYWN0cyA9IGFydGlmYWN0cyhOYXRpdmVzY3JpcHRHbGltbWVyLmNvbnRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZygnQXJ0aWZhY3RzIENyZWF0ZWQnKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogVW5yZWFjaGFibGUgY29kZSBlcnJvclxuICAgICAgICBOYXRpdmVzY3JpcHRHbGltbWVyLmFvdFJ1bnRpbWUgPSBBb3RSdW50aW1lKE5hdGl2ZXNjcmlwdEdsaW1tZXIuZG9jdW1lbnQsIHRoaXMuYXJ0aWZhY3RzLCByZXNvbHZlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhb3RSdW50aW1lIENyZWF0ZWQnKTtcbiAgICAgICAgdGhpcy5jdXJzb3IgPSB7IGVsZW1lbnQ6IHRoaXMucm9vdEZyYW1lLCBuZXh0U2libGluZzogbnVsbCB9O1xuICAgICAgICBOYXRpdmVzY3JpcHRHbGltbWVyLnJvb3RGcmFtZSA9IHRoaXMucm9vdEZyYW1lO1xuICAgIH1cbiAgICBzdGF0aWMgc2NoZWR1bGVSZXJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NjaGVkdWxlZCB8fCAhdGhpcy5fcmVuZGVyZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX3JlbmRlcmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLl9yZXJlbmRlcigpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyaW5nID0gZmFsc2U7XG4gICAgICAgIH0pLCAwKTtcbiAgICB9XG4gICAgc3RhdGljIF9yZXJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB7IGVudiB9ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbiByZS1yZW5kZXInKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hb3RSdW50aW1lLmVudi5iZWdpbigpO1xuICAgICAgICAgICAgICAgIHlpZWxkIE5hdGl2ZXNjcmlwdEdsaW1tZXIucmVzdWx0LnJlcmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hb3RSdW50aW1lLmVudi5jb21taXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fZGlkUmVuZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fZGlkRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHJlbmRlckNvbXBvbmVudCgpIHtcbiAgICAvLyAgICAgbGV0IGl0ZXJhdG9yID0gcmVuZGVyQW90KHRoaXMuYW90UnVudGltZSwgdGhpcy5tYWluLCB0aGlzLmN1cnNvcik7XG4gICAgLy8gICAgIHRoaXMuaXRlcmF0b3IgPSBpdGVyYXRvcjtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ0l0ZXJhdG9yIENyZWF0ZWQnKTtcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlbmRlclN5bmModGhpcy5hb3RSdW50aW1lLmVudiwgaXRlcmF0b3IpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ1JlbmRlciBTeW5jJyk7XG4gICAgLy8gICAgICAgICBOYXRpdmVzY3JpcHRHbGltbWVyLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAvLyAgICAgICAgIE5hdGl2ZXNjcmlwdEdsaW1tZXIuX3JlbmRlcmVkID0gdHJ1ZTtcbiAgICAvLyAgICAgfSBjYXRjaChlcnJvcikge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGluIGluaXRpYWwgcmVuZGVyOiAke2Vycm9yfWApO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC8vIFRoaXMgaXMgc3VwZXIgaGFja3kgYW5kIGxpa2VseSBuZWVkcyB0byBiZSBhYnN0cmFjdGVkIGF3YXkuXG4gICAgLy8gICAgIHJvb3RGcmFtZS5uYXRpdmVWaWV3Lm5hdmlnYXRlKHtcbiAgICAvLyAgICAgICAgIGNyZWF0ZTogKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiByb290RnJhbWUuZmlyc3RFbGVtZW50KCkubmF0aXZlVmlld1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCByb290RnJhbWUgPSB0aGlzLnJvb3RGcmFtZTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vd2FpdCBmb3IgbGF1bmNoXG4gICAgICAgICAgICBvbihsYXVuY2hFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVyYXRvciA9IHJlbmRlckFvdChOYXRpdmVzY3JpcHRHbGltbWVyLmFvdFJ1bnRpbWUsIHRoaXMubWFpbiwgdGhpcy5jdXJzb3IpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IgPSBpdGVyYXRvcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSXRlcmF0b3IgQ3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlbmRlclN5bmMoTmF0aXZlc2NyaXB0R2xpbW1lci5hb3RSdW50aW1lLmVudiwgaXRlcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVuZGVyIFN5bmMnKTtcbiAgICAgICAgICAgICAgICAgICAgTmF0aXZlc2NyaXB0R2xpbW1lci5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIE5hdGl2ZXNjcmlwdEdsaW1tZXIuX3JlbmRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBpbiBpbml0aWFsIHJlbmRlcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBzdXBlciBoYWNreSBhbmQgbGlrZWx5IG5lZWRzIHRvIGJlIGFic3RyYWN0ZWQgYXdheS5cbiAgICAgICAgICAgICAgICByb290RnJhbWUubmF0aXZlVmlldy5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RGcmFtZS5maXJzdEVsZW1lbnQoKS5uYXRpdmVWaWV3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcnVuKHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RGcmFtZS5uYXRpdmVWaWV3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuTmF0aXZlc2NyaXB0R2xpbW1lci5fc2NoZWR1bGVkID0gZmFsc2U7XG5OYXRpdmVzY3JpcHRHbGltbWVyLl9yZW5kZXJlZCA9IGZhbHNlO1xuTmF0aXZlc2NyaXB0R2xpbW1lci5fcmVuZGVyaW5nID0gZmFsc2U7XG4iLCJjb25zdCBlbGVtZW50TWFwID0ge307XG5jb25zdCBkYXNoUmVnRXhwID0gLy0vZztcbmNvbnN0IGRlZmF1bHRWaWV3TWV0YSA9IHtcbiAgICBza2lwQWRkVG9Eb206IGZhbHNlLFxuICAgIGlzVW5hcnlUYWc6IGZhbHNlLFxuICAgIHRhZ05hbWVzcGFjZTogJycsXG4gICAgY2FuQmVMZWZ0T3BlblRhZzogZmFsc2UsXG4gICAgY29tcG9uZW50OiBudWxsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUVsZW1lbnROYW1lKGVsZW1lbnROYW1lKSB7XG4gICAgY29uc29sZS5sb2coYE5vcm1hbGl6ZSBFbGVtZW50IG5hbWUgJHtlbGVtZW50TmFtZX1gKTtcbiAgICByZXR1cm4gYCR7ZWxlbWVudE5hbWUucmVwbGFjZShkYXNoUmVnRXhwLCAnJykudG9Mb3dlckNhc2UoKX1gO1xufVxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTmF0aXZlRWxlbWVudChlbGVtZW50TmFtZTogc3RyaW5nLCByZXNvbHZlcjogKCkgPT4gdHlwZW9mIFZpZXcsIG1ldGE6IENvbXBvbmVudE1ldGEgPSBudWxsKSB7XG4vLyAgICAgcmVnaXN0ZXJFbGVtZW50KGVsZW1lbnROYW1lLCAoKSA9PiBuZXcgTmF0aXZlTm9kZShlbGVtZW50TmFtZSwgcmVzb2x2ZXIoKSwgbWV0YSkpO1xuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRWxlbWVudChlbGVtZW50TmFtZSwgcmVzb2x2ZXIsIG1ldGEgPSBudWxsKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVFbGVtZW50TmFtZShlbGVtZW50TmFtZSk7XG4gICAgbWV0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRWaWV3TWV0YSwgbWV0YSk7XG4gICAgaWYgKGVsZW1lbnRNYXBbbm9ybWFsaXplZE5hbWVdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRWxlbWVudCBmb3IgJHtlbGVtZW50TmFtZX0gYWxyZWFkeSByZWdpc3RlcmVkLmApO1xuICAgIH1cbiAgICBjb25zdCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZXI6IHJlc29sdmVyLFxuICAgICAgICBtZXRhOiBtZXRhXG4gICAgfTtcbiAgICBlbGVtZW50TWFwW25vcm1hbGl6ZWROYW1lXSA9IGVudHJ5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRNYXAoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRNYXA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld0NsYXNzKGVsZW1lbnROYW1lKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVFbGVtZW50TmFtZShlbGVtZW50TmFtZSk7XG4gICAgY29uc3QgZW50cnkgPSBlbGVtZW50TWFwW25vcm1hbGl6ZWROYW1lXTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIGtub3duIGNvbXBvbmVudCBmb3IgZWxlbWVudCAke2VsZW1lbnROYW1lfS5gKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGVudHJ5LnJlc29sdmVyKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYENvdWxkIG5vdCBsb2FkIHZpZXcgZm9yOiAke2VsZW1lbnROYW1lfS4gJHtlfWApO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3TWV0YShlbGVtZW50TmFtZSkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWROYW1lID0gbm9ybWFsaXplRWxlbWVudE5hbWUoZWxlbWVudE5hbWUpO1xuICAgIGxldCBtZXRhID0gZGVmYXVsdFZpZXdNZXRhO1xuICAgIGNvbnN0IGVudHJ5ID0gZWxlbWVudE1hcFtub3JtYWxpemVkTmFtZV07XG4gICAgaWYgKGVudHJ5ICYmIGVudHJ5Lm1ldGEpIHtcbiAgICAgICAgbWV0YSA9IGVudHJ5Lm1ldGE7XG4gICAgfVxuICAgIHJldHVybiBtZXRhO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzS25vd25WaWV3KGVsZW1lbnROYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRNYXBbbm9ybWFsaXplRWxlbWVudE5hbWUoZWxlbWVudE5hbWUpXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVFbGVtZW50TmFtZShlbGVtZW50TmFtZSk7XG4gICAgY29uc3QgZWxlbWVudERlZmluaXRpb24gPSBlbGVtZW50TWFwW25vcm1hbGl6ZWROYW1lXTtcbiAgICBpZiAoIWVsZW1lbnREZWZpbml0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIGtub3duIGNvbXBvbmVudCBmb3IgZWxlbWVudCAke2VsZW1lbnROYW1lfS5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnREZWZpbml0aW9uLnJlc29sdmVyKCk7XG59XG4iLCJpbXBvcnQgRWxlbWVudE5vZGUgZnJvbSAnLi9FbGVtZW50Tm9kZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50Tm9kZSBleHRlbmRzIEVsZW1lbnROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgICAgIHN1cGVyKCdjb21tZW50Jyk7XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSA4O1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICBjb25zb2xlLmxvZyhgY3JlYXRlZCAke3RoaXN9YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbW1lbnROb2RlIGZyb20gJy4vQ29tbWVudE5vZGUnO1xuaW1wb3J0IEVsZW1lbnROb2RlIGZyb20gJy4vRWxlbWVudE5vZGUnO1xuaW1wb3J0IFRleHROb2RlIGZyb20gJy4vVGV4dE5vZGUnO1xuaW1wb3J0IFZpZXdOb2RlIGZyb20gJy4vVmlld05vZGUnO1xuZnVuY3Rpb24qIGVsZW1lbnRJdGVyYXRvcihlbCkge1xuICAgIHlpZWxkIGVsO1xuICAgIGZvciAobGV0IGNoaWxkIG9mIGVsLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgeWllbGQqIGVsZW1lbnRJdGVyYXRvcihjaGlsZCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnROb2RlIGV4dGVuZHMgVmlld05vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRhZ05hbWUgPSBcImRvY05vZGVcIjtcbiAgICAgICAgdGhpcy5ub2RlVHlwZSA9IDk7XG4gICAgICAgIC8vdGhpcy5kb2N1bWVudEVsZW1lbnQgPSBuZXcgRWxlbWVudE5vZGUoJ2RvY3VtZW50JylcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3IEVsZW1lbnROb2RlKCdoZWFkJyk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5oZWFkKTtcbiAgICAgICAgLyovLyBtYWtlIHN0YXRpYyBtZXRob2RzIGFjY2Vzc2libGUgdmlhIHRoaXNcbiAgICAgICAgdGhpcy5jcmVhdGVDb21tZW50ID0gRG9jdW1lbnROb2RlLmNyZWF0ZUNvbW1lbnRcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50ID0gRG9jdW1lbnROb2RlLmNyZWF0ZUVsZW1lbnRcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50TlMgPSBEb2N1bWVudE5vZGUuY3JlYXRlRWxlbWVudE5TXG4gICAgICAgIHRoaXMuY3JlYXRlVGV4dE5vZGUgPSBEb2N1bWVudE5vZGUuY3JlYXRlVGV4dE5vZGUqL1xuICAgICAgICBjb25zb2xlLmxvZyhgY3JlYXRlZCAke3RoaXN9YCk7XG4gICAgfVxuICAgIGNyZWF0ZUNvbW1lbnQodGV4dCkge1xuICAgICAgICByZXR1cm4gbmV3IENvbW1lbnROb2RlKHRleHQpO1xuICAgIH1cbiAgICBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFbGVtZW50Tm9kZSh0YWdOYW1lKTtcbiAgICB9XG4gICAgY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgdGFnTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIH1cbiAgICBjcmVhdGVUZXh0Tm9kZSh0ZXh0KSB7XG4gICAgICAgIHJldHVybiBuZXcgVGV4dE5vZGUodGV4dCk7XG4gICAgfVxuICAgIGdldEVsZW1lbnRCeUlkKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGVsIG9mIGVsZW1lbnRJdGVyYXRvcih0aGlzKSkge1xuICAgICAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSAxICYmIChlbCkuaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGdldFZpZXdDbGFzcyB9IGZyb20gJy4uL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IFZpZXdOb2RlIGZyb20gJy4vVmlld05vZGUnO1xuZnVuY3Rpb24gY2FtZWxpemUoa2ViYWIpIHtcbiAgICByZXR1cm4ga2ViYWIucmVwbGFjZSgvW1xcLV0rKFxcdykvZywgKG0sIGwpID0+IGwudG9VcHBlckNhc2UoKSk7XG59XG5jb25zdCBFVkVOVF9BVFRSSUJVVEVTID0gT2JqZWN0LmZyZWV6ZShbXG4gICAgJ3RhcCdcbl0pO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudE5vZGUgZXh0ZW5kcyBWaWV3Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodGFnTmFtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5vZGVUeXBlID0gMTtcbiAgICAgICAgdGhpcy50YWdOYW1lID0gdGFnTmFtZTtcbiAgICAgICAgLy90aGVyZSBhcmUgc29tZSBzcGVjaWFsIGVsZW1lbnRzIHRoYXQgZG9uJ3QgZXhpc3QgbmF0aXZlbHlcbiAgICAgICAgY29uc3Qgdmlld0NsYXNzID0gZ2V0Vmlld0NsYXNzKHRhZ05hbWUpO1xuICAgICAgICBpZiAodmlld0NsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9uYXRpdmVWaWV3ID0gbmV3IHZpZXdDbGFzcygpO1xuICAgICAgICAgICAgdGhpcy5fbmF0aXZlVmlldy5fX0dsaW1tZXJOYXRpdmVFbGVtZW50X18gPSB0aGlzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpc30gaGFzIHZpZXcgY2xhc3NgKTtcbiAgICAgICAgICAgIEVWRU5UX0FUVFJJQlVURVMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENoZWNraW5nIGZvciBhdHR0cmlidXRlICR7ZXZlbnR9YCk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQXR0cmlidXRlICR7ZXZlbnR9OiAke2F0dHJpYnV0ZX1gKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgTmF0aXZlIHZpZXcgYXR0cmlidXRlICR7ZXZlbnR9OiAke3RoaXMuX25hdGl2ZVZpZXcuZ2V0QXR0cmlidXRlKGV2ZW50KX1gKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgY3JlYXRlZCAke3RoaXN9ICR7dGhpcy5fbmF0aXZlVmlld31gKTtcbiAgICAgICAgbGV0IHNldFN0eWxlID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBnZXRTdHlsZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgICAgIHNldFByb3BlcnR5OiAocHJvcGVydHlOYW1lLCB2YWx1ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0eWxlKGNhbWVsaXplKHByb3BlcnR5TmFtZSksIHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVQcm9wZXJ0eTogKHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3R5bGUoY2FtZWxpemUocHJvcGVydHlOYW1lKSwgbnVsbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0IGNzc1RleHQoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgY3NzIHRleHRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFN0eWxlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0IGNzc1RleHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNldCBjc3MgdGV4dFwiKTtcbiAgICAgICAgICAgICAgICBzZXRTdHlsZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzZXRBdHRyaWJ1dGU6ICR7a2V5fSAtICR7dmFsdWV9YCk7XG4gICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnb246JykpIHtcbiAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoMyk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwZW5kQ2hpbGQoY2hpbGROb2RlKSB7XG4gICAgICAgIHN1cGVyLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dCgoY2hpbGROb2RlKS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSA3KSB7XG4gICAgICAgICAgICAoY2hpbGROb2RlKS5zZXRPbk5vZGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICAgICAgICBzdXBlci5pbnNlcnRCZWZvcmUoY2hpbGROb2RlLCByZWZlcmVuY2VOb2RlKTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5zZXRUZXh0KChjaGlsZE5vZGUpLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDcpIHtcbiAgICAgICAgICAgIChjaGlsZE5vZGUpLnNldE9uTm9kZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVDaGlsZChjaGlsZE5vZGUpIHtcbiAgICAgICAgc3VwZXIucmVtb3ZlQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5zZXRUZXh0KCcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSA3KSB7XG4gICAgICAgICAgICAoY2hpbGROb2RlKS5jbGVhck9uTm9kZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBWaWV3Tm9kZSBmcm9tICcuL1ZpZXdOb2RlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHROb2RlIGV4dGVuZHMgVmlld05vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ub2RlVHlwZSA9IDM7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuX21ldGEgPSB7XG4gICAgICAgICAgICBza2lwQWRkVG9Eb206IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coYGNyZWF0ZWQgJHt0aGlzfWApO1xuICAgIH1cbiAgICBzZXRUZXh0KHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlLnNldFRleHQodGV4dCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBnZXRWaWV3TWV0YSwgbm9ybWFsaXplRWxlbWVudE5hbWUgfSBmcm9tICcuLi9lbGVtZW50LXJlZ2lzdHJ5JztcbmltcG9ydCB7IGluc2VydENoaWxkLCByZW1vdmVDaGlsZCB9IGZyb20gJy4uL3V0aWxzJztcbmNvbnN0IFhNTF9BVFRSSUJVVEVTID0gT2JqZWN0LmZyZWV6ZShbXG4gICAgJ3RhcCcsXG4gICAgJ3N0eWxlJyxcbiAgICAncm93cycsXG4gICAgJ2NvbHVtbnMnLFxuICAgICdmb250QXR0cmlidXRlcydcbl0pO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld05vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5vZGVUeXBlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdGFnTmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLnByZXZTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuX293bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9uYXRpdmVWaWV3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWV0YSA9IG51bGw7XG4gICAgfVxuICAgIGhhc0F0dHJpYnV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGUoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0oJHt0aGlzLnRhZ05hbWV9KWA7XG4gICAgfVxuICAgIHNldCB0YWdOYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fdGFnTmFtZSA9IG5vcm1hbGl6ZUVsZW1lbnROYW1lKG5hbWUpO1xuICAgIH1cbiAgICBnZXQgdGFnTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhZ05hbWU7XG4gICAgfVxuICAgIGdldCBmaXJzdENoaWxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA/IHRoaXMuY2hpbGROb2Rlc1swXSA6IG51bGw7XG4gICAgfVxuICAgIGdldCBsYXN0Q2hpbGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID8gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXSA6IG51bGw7XG4gICAgfVxuICAgIGdldCBuYXRpdmVWaWV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmF0aXZlVmlldztcbiAgICB9XG4gICAgc2V0IG5hdGl2ZVZpZXcodmlldykge1xuICAgICAgICBpZiAodGhpcy5fbmF0aXZlVmlldykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBvdmVycmlkZSBuYXRpdmUgdmlldy5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9uYXRpdmVWaWV3ID0gdmlldztcbiAgICB9XG4gICAgZ2V0IG1ldGEoKSB7XG4gICAgICAgIGlmICh0aGlzLl9tZXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuX21ldGEgPSBnZXRWaWV3TWV0YSh0aGlzLnRhZ05hbWUpKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBnZXQgb3duZXJEb2N1bWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX293bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vd25lckRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbCA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChlbCAhPSBudWxsICYmIGVsLm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLl9vd25lckRvY3VtZW50ID0gZWwpO1xuICAgIH1cbiAgICBnZXRBdHRyaWJ1dGUoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5uYXRpdmVWaWV3KVtrZXldO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG52ID0gdGhpcy5uYXRpdmVWaWV3O1xuICAgICAgICBpZiAoIW52KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBub3JtYWxpemUga2V5XG4gICAgICAgIGlmIChpc0FuZHJvaWQgJiYga2V5LnN0YXJ0c1dpdGgoJ2FuZHJvaWQ6JykpIHtcbiAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoOCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSU9TICYmIGtleS5zdGFydHNXaXRoKCdpb3M6JykpIHtcbiAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoNCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHJ5IHRvIGZpeCBjYXNlXG4gICAgICAgIGxldCBsb3dlcmtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBmb3IgKGxldCByZWFsS2V5IGluIG52KSB7XG4gICAgICAgICAgICBpZiAobG93ZXJrZXkgPT0gcmVhbEtleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gcmVhbEtleTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgc2V0QXR0ciAke3RoaXN9ICR7a2V5fSAke3ZhbHVlfWApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKFhNTF9BVFRSSUJVVEVTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBudltrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkZXRlY3QgZXhwYW5kYWJsZSBhdHRycyBmb3IgYm9vbGVhbiB2YWx1ZXNcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy1wcm9wcy5odG1sI1Bhc3NpbmctYS1Cb29sZWFuXG4gICAgICAgICAgICAgICAgaWYgKGlzQm9vbGVhbihudltrZXldKSAmJiB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnZba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gaWdub3JlIGJ1dCBsb2dcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0IGF0dHJpYnV0ZSB0aHJldyBhbiBlcnJvciwgYXR0cjoke2tleX0gb24gJHt0aGlzLl90YWdOYW1lfTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBzZXRTdHlsZShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNldFN0eWxlICR7dGhpc30gJHtwcm9wZXJ0eX0gJHt2YWx1ZX1gKTtcbiAgICAgICAgaWYgKCEodmFsdWUgPSB2YWx1ZS50cmltKCkpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wZXJ0eS5lbmRzV2l0aCgnQWxpZ24nKSkge1xuICAgICAgICAgICAgLy8gTmF0aXZlU2NyaXB0IHVzZXMgQWxpZ25tZW50IGluc3RlYWQgb2YgQWxpZ24sIHRoaXMgZW5zdXJlcyB0aGF0IHRleHQtYWxpZ24gd29ya3NcbiAgICAgICAgICAgIHByb3BlcnR5ICs9ICdtZW50JztcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5uYXRpdmVWaWV3LnN0eWxlKVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBzZXRUZXh0KHRleHQpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHNldFRleHQgJHt0aGlzfSAke3RleHR9YCk7XG4gICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuc2V0VGV4dCh0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0ZXh0JywgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBhZGQgZXZlbnQgbGlzdGVuZXIgJHt0aGlzfSAke2V2ZW50fWApO1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXcub24oZXZlbnQsIGhhbmRsZXIpO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHJlbW92ZSBldmVudCBsaXN0ZW5lciAke3RoaXN9ICR7ZXZlbnR9YCk7XG4gICAgICAgIHRoaXMubmF0aXZlVmlldy5vZmYoZXZlbnQsIGhhbmRsZXIpO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZVZpZXcpIHtcbiAgICAgICAgICAgIC8vbmF0aXZlc2NyaXB0IHVzZXMgdGhlIEV2ZW50TmFtZSB3aGlsZSBkb20gdXNlcyBUeXBlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSW4gZGlzcGF0Y2ggZXZlbnQ6ICR7ZXZlbnR9YCk7XG4gICAgICAgICAgICBldmVudC5ldmVudE5hbWUgPSBldmVudC50eXBlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGV2ZW50IG5hbWU6ICR7ZXZlbnQuZXZlbnROYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVWaWV3Lm5vdGlmeShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgaW5zZXJ0IGJlZm9yZSAke3RoaXN9ICR7Y2hpbGROb2RlfSAke3JlZmVyZW5jZU5vZGV9YCk7XG4gICAgICAgIGlmICghY2hpbGROb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGluc2VydCBjaGlsZC5gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbiBzb21lIHJhcmUgY2FzZXMgaW5zZXJ0QmVmb3JlIGlzIGNhbGxlZCB3aXRoIGEgbnVsbCByZWZlcmVuY2VOb2RlXG4gICAgICAgIC8vIHRoaXMgbWFrZXMgc3VyZSB0aGF0IGl0IGdldCdzIGFwcGVuZGVkIGFzIHRoZSBsYXN0IGNoaWxkXG4gICAgICAgIGlmICghcmVmZXJlbmNlTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGluc2VydCBjaGlsZCwgYmVjYXVzZSB0aGUgcmVmZXJlbmNlIG5vZGUgaGFzIGEgZGlmZmVyZW50IHBhcmVudC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLnBhcmVudE5vZGUgJiYgY2hpbGROb2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgaW5zZXJ0IGNoaWxkLCBiZWNhdXNlIGl0IGFscmVhZHkgaGFzIGEgZGlmZmVyZW50IHBhcmVudC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLnBhcmVudE5vZGUgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gdGhyb3cgYW4gZXJyb3IgaGVyZSwgYmVjYXVzZSBpdCBpcyBhIHZhbGlkIGNhc2VcbiAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIHdoZW4gc3dpdGNoaW5nIHRoZSBvcmRlciBvZiBlbGVtZW50cyBpbiB0aGUgdHJlZVxuICAgICAgICAgICAgLy8gZml4ZXMgIzEyNyAtIHNlZSBmb3IgbW9yZSBkZXRhaWxzXG4gICAgICAgICAgICAvLyBmaXhlcyAjMjQwXG4gICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGluc2VydCBjaGlsZCwgYmVjYXVzZSBpdCBpcyBhbHJlYWR5IGEgY2hpbGQuYClcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZlcmVuY2VOb2RlKTtcbiAgICAgICAgY2hpbGROb2RlLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBjaGlsZE5vZGUubmV4dFNpYmxpbmcgPSByZWZlcmVuY2VOb2RlO1xuICAgICAgICBjaGlsZE5vZGUucHJldlNpYmxpbmcgPSB0aGlzLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgcmVmZXJlbmNlTm9kZS5wcmV2U2libGluZyA9IGNoaWxkTm9kZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgY2hpbGROb2RlKTtcbiAgICAgICAgaW5zZXJ0Q2hpbGQodGhpcywgY2hpbGROb2RlLCBpbmRleCk7XG4gICAgfVxuICAgIGFwcGVuZENoaWxkKGNoaWxkTm9kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgYXBwZW5kIGNoaWxkICR7dGhpc30gJHtjaGlsZE5vZGV9YCk7XG4gICAgICAgIGlmICghY2hpbGROb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGFwcGVuZCBjaGlsZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLnBhcmVudE5vZGUgJiYgY2hpbGROb2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgYXBwZW5kIGNoaWxkLCBiZWNhdXNlIGl0IGFscmVhZHkgaGFzIGEgZGlmZmVyZW50IHBhcmVudC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLnBhcmVudE5vZGUgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gdGhyb3cgYW4gZXJyb3IgaGVyZSwgYmVjYXVzZSBpdCBpcyBhIHZhbGlkIGNhc2VcbiAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIHdoZW4gc3dpdGNoaW5nIHRoZSBvcmRlciBvZiBlbGVtZW50cyBpbiB0aGUgdHJlZVxuICAgICAgICAgICAgLy8gZml4ZXMgIzEyNyAtIHNlZSBmb3IgbW9yZSBkZXRhaWxzXG4gICAgICAgICAgICAvLyBmaXhlcyAjMjQwXG4gICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGFwcGVuZCBjaGlsZCwgYmVjYXVzZSBpdCBpcyBhbHJlYWR5IGEgY2hpbGQuYClcbiAgICAgICAgfVxuICAgICAgICBjaGlsZE5vZGUucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgY2hpbGROb2RlLnByZXZTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZE5vZGUpO1xuICAgICAgICBpbnNlcnRDaGlsZCh0aGlzLCBjaGlsZE5vZGUsIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGROb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGByZW1vdmUgY2hpbGQgJHt0aGlzfSAke2NoaWxkTm9kZX1gKTtcbiAgICAgICAgaWYgKCFjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgcmVtb3ZlIGNoaWxkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGROb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgcmVtb3ZlIGNoaWxkLCBiZWNhdXNlIGl0IGhhcyBubyBwYXJlbnQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHJlbW92ZSBjaGlsZCwgYmVjYXVzZSBpdCBoYXMgYSBkaWZmZXJlbnQgcGFyZW50LmApO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkTm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5wcmV2U2libGluZykge1xuICAgICAgICAgICAgY2hpbGROb2RlLnByZXZTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5uZXh0U2libGluZy5wcmV2U2libGluZyA9IGNoaWxkTm9kZS5wcmV2U2libGluZztcbiAgICAgICAgfVxuICAgICAgICAvLyByZXNldCB0aGUgcHJldlNpYmxpbmcgYW5kIG5leHRTaWJsaW5nLiBJZiBub3QsIGEga2VlcC1hbGl2ZWQgY29tcG9uZW50IHdpbGxcbiAgICAgICAgLy8gc3RpbGwgaGF2ZSBhIGZpbGxlZCBuZXh0U2libGluZyBhdHRyaWJ1dGUgc28gdnVlIHdpbGwgbm90XG4gICAgICAgIC8vIGluc2VydCB0aGUgbm9kZSBhZ2FpbiB0byB0aGUgcGFyZW50LiBTZWUgIzIyMFxuICAgICAgICBjaGlsZE5vZGUucHJldlNpYmxpbmcgPSBudWxsO1xuICAgICAgICBjaGlsZE5vZGUubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZSAhPT0gY2hpbGROb2RlKTtcbiAgICAgICAgcmVtb3ZlQ2hpbGQodGhpcywgY2hpbGROb2RlKTtcbiAgICB9XG4gICAgZmlyc3RFbGVtZW50KCkge1xuICAgICAgICBmb3IgKHZhciBjaGlsZCBvZiB0aGlzLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsIi8vIExhcmdlbHkgdGFrZW4gZnJvbSB0aGUgVnVlIGltcGxpbWVudGF0aW9uXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQtcmVnaXN0cnknO1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRWxlbWVudHMoKSB7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdoZWFkJywgKCkgPT4gbnVsbCwge1xuICAgICAgICBpbnNlcnRDaGlsZChwYXJlbnROb2RlLCBjaGlsZE5vZGUsIGF0SW5kZXgpIHtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ0ZyYW1lJywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZScpLkZyYW1lLCB7XG4gICAgICAgIGluc2VydENoaWxkKHBhcmVudE5vZGUsIGNoaWxkTm9kZSwgYXRJbmRleCkge1xuICAgICAgICAgICAgLy9kb250IGJvdGhlclxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdkaXYnLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lJykuRnJhbWUsIHtcbiAgICAgICAgaW5zZXJ0Q2hpbGQocGFyZW50Tm9kZSwgY2hpbGROb2RlLCBhdEluZGV4KSB7XG4gICAgICAgICAgICAvL2RvbnQgYm90aGVyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ1BhZ2UnLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnKS5QYWdlKTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ1N0YWNrTGF5b3V0JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dCcpLlN0YWNrTGF5b3V0KTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ0xhYmVsJywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCcpLkxhYmVsKTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ0FjdGlvbkJhcicsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhcicpLkFjdGlvbkJhcik7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdBY3Rpb25JdGVtJywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyJykuQWN0aW9uSXRlbSk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdHcmlkTGF5b3V0JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0JykuR3JpZExheW91dCk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdTY3JvbGxWaWV3JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlldycpLlNjcm9sbFZpZXcpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnTGlzdFZpZXcnLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtdmlldycpLkxpc3RWaWV3KTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ05hdmlnYXRpb25CdXR0b24nLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXInKS5OYXZpZ2F0aW9uQnV0dG9uKTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ1RhYlZpZXcnLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3JykuVGFiVmlldyk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdUYWJWaWV3SXRlbScsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXcnKS5UYWJWaWV3SXRlbSk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdEYXRlUGlja2VyJywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlcicpLkRhdGVQaWNrZXIpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnQWJzb2x1dGVMYXlvdXQnLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0JykuQWJzb2x1dGVMYXlvdXQpO1xuICAgIHJlZ2lzdGVyRWxlbWVudCgnQWN0aXZpdHlJbmRpY2F0b3InLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvcicpLkFjdGl2aXR5SW5kaWNhdG9yKTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ0JvcmRlcicsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYm9yZGVyJykuQm9yZGVyKTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ0J1dHRvbicsICgpID0+IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uJykuQnV0dG9uKTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ1dlYlZpZXcnLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3JykuV2ViVmlldyk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdXcmFwTGF5b3V0JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3dyYXAtbGF5b3V0JykuV3JhcExheW91dCk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdGb3JtYXR0ZWRTdHJpbmcnLCAoKSA9PiByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZycpLkZvcm1hdHRlZFN0cmluZyk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdTcGFuJywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy90ZXh0L3NwYW4nKS5TcGFuKTtcbiAgICByZWdpc3RlckVsZW1lbnQoJ1RleHRWaWV3JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXcnKS5UZXh0Vmlldyk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdwJywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXcnKS5UZXh0Vmlldyk7XG4gICAgcmVnaXN0ZXJFbGVtZW50KCdDb21tZW50JywgKCkgPT4gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9wbGFjZWhvbGRlcicpLlBsYWNlaG9sZGVyKTtcbiAgICAvLyByZWdpc3RlckVsZW1lbnQoJ0ZyYW1lJywgKCkgPT4gbmV3IEZyYW1lRWxlbWVudCgpKVxuICAgIC8vIHJlZ2lzdGVyRWxlbWVudCgnUGFnZScsICgpID0+IG5ldyBQYWdlRWxlbWVudCgpKVxufVxuIiwiaW1wb3J0IHsgTGF5b3V0QmFzZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZSc7XG5pbXBvcnQgeyBDb250ZW50VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3JztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5leHBvcnQgZnVuY3Rpb24gaXNWaWV3KHZpZXcpIHtcbiAgICByZXR1cm4gdmlldyBpbnN0YW5jZW9mIFZpZXc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNMYXlvdXQodmlldykge1xuICAgIHJldHVybiB2aWV3IGluc3RhbmNlb2YgTGF5b3V0QmFzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbnRlbnRWaWV3KHZpZXcpIHtcbiAgICByZXR1cm4gdmlldyBpbnN0YW5jZW9mIENvbnRlbnRWaWV3O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydENoaWxkKHBhcmVudE5vZGUsIGNoaWxkTm9kZSwgYXRJbmRleCA9IC0xKSB7XG4gICAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmVudE5vZGUubWV0YSAmJiB0eXBlb2YgcGFyZW50Tm9kZS5tZXRhLmluc2VydENoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnROb2RlLm1ldGEuaW5zZXJ0Q2hpbGQocGFyZW50Tm9kZSwgY2hpbGROb2RlLCBhdEluZGV4KTtcbiAgICB9XG4gICAgaWYgKCFwYXJlbnROb2RlLm5hdGl2ZVZpZXcgfHwgIWNoaWxkTm9kZS5uYXRpdmVWaWV3KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50VmlldyA9IHBhcmVudE5vZGUubmF0aXZlVmlldztcbiAgICBjb25zdCBjaGlsZFZpZXcgPSBjaGlsZE5vZGUubmF0aXZlVmlldztcbiAgICAvKmlmIChwYXJlbnRWaWV3IGluc3RhbmNlb2YgTGF5b3V0QmFzZSkge1xuICAgICAgaWYgKGNoaWxkVmlldy5wYXJlbnQgPT09IHBhcmVudFZpZXcpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gcGFyZW50Vmlldy5nZXRDaGlsZEluZGV4KGNoaWxkVmlldylcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHBhcmVudFZpZXcucmVtb3ZlQ2hpbGQoY2hpbGRWaWV3KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYXRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcGFyZW50Vmlldy5pbnNlcnRDaGlsZChjaGlsZFZpZXcsIGF0SW5kZXgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRWaWV3LmFkZENoaWxkKGNoaWxkVmlldylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhcmVudFZpZXcgaW5zdGFuY2VvZiBDb250ZW50Vmlldykge1xuICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICBwYXJlbnRWaWV3Ll9hZGRWaWV3KGNoaWxkVmlldywgYXRJbmRleClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudFZpZXcuY29udGVudCA9IGNoaWxkVmlld1xuICAgICAgfVxuICAgIH0gZWxzZSAqL1xuICAgIGlmIChwYXJlbnRWaWV3ICYmIChwYXJlbnRWaWV3KS5fYWRkQ2hpbGRGcm9tQnVpbGRlcikge1xuICAgICAgICAocGFyZW50VmlldykuX2FkZENoaWxkRnJvbUJ1aWxkZXIoY2hpbGROb2RlLl9uYXRpdmVWaWV3LmNvbnN0cnVjdG9yLm5hbWUsIGNoaWxkVmlldyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJlbnQgY2FuJ3QgY29udGFpbiBjaGlsZHJlbjogXCIgKyBwYXJlbnROb2RlICsgXCIsIFwiICsgY2hpbGROb2RlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGQocGFyZW50Tm9kZSwgY2hpbGROb2RlKSB7XG4gICAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmVudE5vZGUubWV0YSAmJiB0eXBlb2YgcGFyZW50Tm9kZS5tZXRhLnJlbW92ZUNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnROb2RlLm1ldGEucmVtb3ZlQ2hpbGQocGFyZW50Tm9kZSwgY2hpbGROb2RlKTtcbiAgICB9XG4gICAgaWYgKCFjaGlsZE5vZGUubmF0aXZlVmlldyB8fCAhY2hpbGROb2RlLm5hdGl2ZVZpZXcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnRWaWV3ID0gcGFyZW50Tm9kZS5uYXRpdmVWaWV3O1xuICAgIGNvbnN0IGNoaWxkVmlldyA9IGNoaWxkTm9kZS5uYXRpdmVWaWV3O1xuICAgIGlmIChwYXJlbnRWaWV3IGluc3RhbmNlb2YgTGF5b3V0QmFzZSkge1xuICAgICAgICBwYXJlbnRWaWV3LnJlbW92ZUNoaWxkKGNoaWxkVmlldyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmVudFZpZXcgaW5zdGFuY2VvZiBDb250ZW50Vmlldykge1xuICAgICAgICBpZiAocGFyZW50Vmlldy5jb250ZW50ID09PSBjaGlsZFZpZXcpIHtcbiAgICAgICAgICAgIHBhcmVudFZpZXcuY29udGVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgcGFyZW50Vmlldy5fcmVtb3ZlVmlldyhjaGlsZFZpZXcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVmlldyhwYXJlbnRWaWV3KSkge1xuICAgICAgICBwYXJlbnRWaWV3Ll9yZW1vdmVWaWV3KGNoaWxkVmlldyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHBhcmVudCB0eXBlOiBcIiArIHBhcmVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtUbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgb25DbGljaygpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fX293bmVyX18uYXJncy50YXJnZXQ7XG4gICAgICAgIG5hdmlnYXRlKHRhcmdldCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcHJlY29tcGlsZSB9IGZyb20gJ0BnbGltbWVyL2NvbXBpbGVyJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0BnbGltbWVyL29wY29kZS1jb21waWxlcic7XG5pbXBvcnQgeyBzdHJpcCB9IGZyb20gJ0BnbGltbWVyL3V0aWwnO1xuLy8gLyoqXG4vLyAgKiBJZGVhbGx5IHdlIHByZWNvbXBpbGUgYWxsIHRoZSB0ZW1wbGF0ZXMgdGhyb3VnaCBhXG4vLyAgKiB0aHJvdWdoIGEgcGx1Z2luIGF0IGJ1aWxkIHRpbWUuIFRoaXMgaXMgZG9uZSBqdXN0XG4vLyAgKiBmb3IgZGVtbyBwdXJwb3Nlcy5cbi8vICAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGFibGUoc291cmNlKSB7XG4gICAgY29uc29sZS5sb2coJ0luIENvbXBpbGFibGU6ICcgKyBzb3VyY2UpO1xuICAgIGNvbnN0IHByZWNvbXBpbGVkID0gcHJlY29tcGlsZShzb3VyY2UpO1xuICAgIGNvbnNvbGUubG9nKCdQcmVjb21waWxlZCcpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudChwcmVjb21waWxlZCk7XG4gICAgY29uc29sZS5sb2coYENvbXBpbGVkIENvbXBvbmVudDogJHtjb21wb25lbnR9YCk7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmV4cG9ydCBjbGFzcyBSZXNvbHZlckRlbGVnYXRlIHtcbiAgICByZWdpc3RlckNvbXBvbmVudChuYW1lLCBoYW5kbGUsIHNvdXJjZSwgY2FwYWJpbGl0aWVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBhZGRDb21wb25lbnQ6ICR7bmFtZX1gKTtcbiAgICAgICAgUmVzb2x2ZXJEZWxlZ2F0ZS5jb21wb25lbnRzW25hbWVdID0ge1xuICAgICAgICAgICAgc291cmNlOiBzdHJpcCBgJHtzb3VyY2V9YCxcbiAgICAgICAgICAgIGhhbmRsZSxcbiAgICAgICAgICAgIGNhcGFiaWxpdGllc1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVzb2x2ZXJEZWxlZ2F0ZSBDb21wb25lbnRzICR7UmVzb2x2ZXJEZWxlZ2F0ZS5jb21wb25lbnRzfWApO1xuICAgIH1cbiAgICByZWdpc3RlckhlbHBlcihuYW1lLCBoYW5kbGUpIHtcbiAgICAgICAgUmVzb2x2ZXJEZWxlZ2F0ZS5oZWxwZXJzW25hbWVdID0gaGFuZGxlO1xuICAgICAgICBjb25zb2xlLmxvZyhSZXNvbHZlckRlbGVnYXRlLmhlbHBlcnMpO1xuICAgIH1cbiAgICByZWdpc3Rlck1vZGlmaWVyKG5hbWUsIGhhbmRsZSkge1xuICAgICAgICBSZXNvbHZlckRlbGVnYXRlLm1vZGlmaWVyc1tuYW1lXSA9IGhhbmRsZTtcbiAgICB9XG4gICAgc3RhdGljIGxvb2t1cENvbXBvbmVudChuYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBsb29rdXBDb21wb25lbnQ6ICR7bmFtZX1gKTtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IFJlc29sdmVyRGVsZWdhdGUuY29tcG9uZW50c1tuYW1lXTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYGNvbXBvbmVudCBmb3VuZDogJHtjb21wb25lbnR9YCk7XG4gICAgICAgIC8vc291cmNlIHNob3VsZCBub3cgYmUgY29tcGlsZWRcbiAgICAgICAgbGV0IHsgaGFuZGxlLCBzb3VyY2UsIGNhcGFiaWxpdGllcyB9ID0gY29tcG9uZW50O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFuZGxlLFxuICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgY29tcGlsYWJsZTogQ29tcG9uZW50KHNvdXJjZSksXG4gICAgICAgICAgICBjYXBhYmlsaXRpZXNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIGxvb2t1cE1vZGlmaWVyKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgaW4gUmVzb2x2ZXJEZWxlZ2F0ZS5tb2RpZmllcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBSZXNvbHZlckRlbGVnYXRlLm1vZGlmaWVyc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgbG9va3VwSGVscGVyKG5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIGxvb2t1cCBoZWxwZXInKTtcbiAgICAgICAgaWYgKG5hbWUgaW4gUmVzb2x2ZXJEZWxlZ2F0ZS5oZWxwZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVzb2x2ZXJEZWxlZ2F0ZS5oZWxwZXJzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuUmVzb2x2ZXJEZWxlZ2F0ZS5jb21wb25lbnRzID0ge307XG5SZXNvbHZlckRlbGVnYXRlLmhlbHBlcnMgPSB7fTtcblJlc29sdmVyRGVsZWdhdGUubW9kaWZpZXJzID0ge307XG47XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9va3VwQ29tcG9uZW50OiBSZXNvbHZlckRlbGVnYXRlLmxvb2t1cENvbXBvbmVudCxcbiAgICBsb29rdXBIZWxwZXI6IFJlc29sdmVyRGVsZWdhdGUubG9va3VwSGVscGVyLFxuICAgIGxvb2t1cE1vZGlmaWVyOiBSZXNvbHZlckRlbGVnYXRlLmxvb2t1cE1vZGlmaWVyXG59O1xuIiwiaW1wb3J0IHsgVXBkYXRhYmxlUmVmZXJlbmNlIH0gZnJvbSAnQGdsaW1tZXIvY29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChfYXJncywgdm0pIHtcbiAgICBjb25zb2xlLmxvZyhgaW4gYWN0aW9uYCk7XG4gICAgbGV0IGNvbXBvbmVudFJlZiA9IHZtLmdldFNlbGYoKTtcbiAgICBjb25zb2xlLmxvZyhgY29tcG9uZW50UmVmOiAke2NvbXBvbmVudFJlZn1gKTtcbiAgICBsZXQgYXJncyA9IF9hcmdzLmNhcHR1cmUoKTtcbiAgICBsZXQgYWN0aW9uRnVuYyA9IGFyZ3MucG9zaXRpb25hbC5hdCgwKS52YWx1ZSgpO1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbkZ1bmMpO1xuICAgIC8vIGlmICh0eXBlb2YgYWN0aW9uRnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vICAgdGhyb3dOb0FjdGlvbkVycm9yKGFjdGlvbkZ1bmMsIGFyZ3MucG9zaXRpb25hbC5hdCgwKSk7XG4gICAgLy8gfVxuICAgIHJldHVybiBuZXcgVXBkYXRhYmxlUmVmZXJlbmNlKGZ1bmN0aW9uIGFjdGlvbiguLi5pbnZva2VkQXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhgaW4gdXBkYXRhYmxlIHJlZmVyZW5jZWApO1xuICAgICAgICBsZXQgY3VycmllZEFyZ3MgPSBhcmdzLnBvc2l0aW9uYWwudmFsdWUoKTtcbiAgICAgICAgY29uc29sZS5sb2coYGluIHVwZGF0YWJsZSByZWZlcmVuY2U6ICR7Y3VycmllZEFyZ3N9YCk7XG4gICAgICAgIC8vIENvbnN1bWUgdGhlIGFjdGlvbiBmdW5jdGlvbiB0aGF0IHdhcyBhbHJlYWR5IGNhcHR1cmVkIGFib3ZlLlxuICAgICAgICBjdXJyaWVkQXJncy5zaGlmdCgpO1xuICAgICAgICBjdXJyaWVkQXJncy5wdXNoKC4uLmludm9rZWRBcmdzKTtcbiAgICAgICAgLy8gSW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBjb21wb25lbnQgYXMgdGhlIGNvbnRleHQsIHRoZSBjdXJyaWVkXG4gICAgICAgIC8vIGFyZ3VtZW50cyBwYXNzZWQgdG8gYHt7YWN0aW9ufX1gLCBhbmQgdGhlIGFyZ3VtZW50cyB0aGUgYm91bmQgZnVuY3Rpb25cbiAgICAgICAgLy8gd2FzIGludm9rZWQgd2l0aC5cbiAgICAgICAgYWN0aW9uRnVuYy5hcHBseShjb21wb25lbnRSZWYgJiYgY29tcG9uZW50UmVmLnZhbHVlKCksIGN1cnJpZWRBcmdzKTtcbiAgICB9KTtcbn1cbjtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG9uTW9kaWZpZXIge1xuICAgIGRpZEluc2VydEVsZW1lbnQoZWxlbWVudCwgX3BhcmFtcywgX2hhc2gpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKF9wYXJhbXNbMF0sIF9wYXJhbXNbMV0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IF9wYXJhbXNbMF07XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBfcGFyYW1zWzFdO1xuICAgICAgICBjb25zb2xlLmxvZyhgTW9kaWZpZXIgRGlkIEluc2VydCBFbGVtZW50OiAke19wYXJhbXN9YCk7XG4gICAgICAgIC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciguLi5fcGFyYW1zKTtcbiAgICB9XG4gICAgZGlkVXBkYXRlKGVsZW1lbnQsIF9wYXJhbXMsIF9oYXNoKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihfcGFyYW1zWzBdLCBfcGFyYW1zWzFdKTtcbiAgICAgICAgY29uc29sZS5sb2coYE1vZGlmaWVyIERpZCBVcGRhdGUgRWxlbWVudDogJHtfcGFyYW1zfWApO1xuICAgIH1cbiAgICB3aWxsRGVzdHJveUVsZW1lbnQoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVycyh0aGlzLmV2ZW50TmFtZSwgdGhpcy5jYWxsYmFjayk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBNb2RpZmllciBXaWxsIERlc3Ryb3kgRWxlbWVudGApO1xuICAgIH1cbn1cbiIsImNvbnN0IENBUEFCSUxJVElFUyA9IHtcbiAgICBhdHRyaWJ1dGVIb29rOiB0cnVlLFxuICAgIGNyZWF0ZUFyZ3M6IHRydWUsXG4gICAgY3JlYXRlQ2FsbGVyOiBmYWxzZSxcbiAgICBjcmVhdGVJbnN0YW5jZTogdHJ1ZSxcbiAgICBkeW5hbWljTGF5b3V0OiBmYWxzZSxcbiAgICBkeW5hbWljU2NvcGU6IGZhbHNlLFxuICAgIGR5bmFtaWNUYWc6IHRydWUsXG4gICAgZWxlbWVudEhvb2s6IHRydWUsXG4gICAgcHJlcGFyZUFyZ3M6IGZhbHNlLFxuICAgIHVwZGF0ZUhvb2s6IHRydWUsXG4gICAgd3JhcHBlZDogZmFsc2UsXG59O1xuZXhwb3J0IGRlZmF1bHQgQ0FQQUJJTElUSUVTO1xuIiwiaW1wb3J0IHsgUm9vdFJlZmVyZW5jZSB9IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBDT05TVEFOVF9UQUcgfSBmcm9tICdAZ2xpbW1lci9yZWZlcmVuY2UnO1xuY29uc3QgRU1QVFlfU0VMRiA9IG5ldyBSb290UmVmZXJlbmNlKG51bGwpO1xuY29uc3QgTk9PUF9ERVNUUk9ZQUJMRSA9IHsgZGVzdHJveSgpIHsgfSB9O1xuY29uc3QgREVTVFJPWUlORyA9IFN5bWJvbCgnZGVzdHJveWluZycpO1xuY29uc3QgREVTVFJPWUVEID0gU3ltYm9sKCdkZXN0cm95ZWQnKTtcbmV4cG9ydCBjbGFzcyBCb3VuZHMge1xuICAgIGNvbnN0cnVjdG9yKF9fYm91bmRzKSB7XG4gICAgfVxuICAgIGdldCBmaXJzdE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHMuZmlyc3ROb2RlKCk7XG4gICAgfVxuICAgIGdldCBsYXN0Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kcy5sYXN0Tm9kZSgpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRTdGF0ZUJ1Y2tldCB7XG4gICAgY29uc3RydWN0b3IoZGVmaW5pdGlvbiwgYXJncykge1xuICAgICAgICBsZXQgeyBDb21wb25lbnRDbGFzcywgbmFtZSB9ID0gZGVmaW5pdGlvbjtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgICAgaWYgKENvbXBvbmVudENsYXNzKSB7XG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50Q2xhc3MuY2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudENsYXNzID0gQ29tcG9uZW50Q2xhc3MuY2xhc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRDbGFzcyh7XG4gICAgICAgICAgICAgICAgYXJnczogdGhpcy5uYW1lZEFyZ3NTbmFwc2hvdCgpLFxuICAgICAgICAgICAgICAgIGRlYnVnTmFtZTogbmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHRhZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJncy50YWc7XG4gICAgfVxuICAgIG5hbWVkQXJnc1NuYXBzaG90KCkge1xuICAgICAgICBsZXQgc25hcHNob3QgPSB0aGlzLmFyZ3MubmFtZWQudmFsdWUoKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUoc25hcHNob3QpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdGl2ZUNvbXBvbmVudE1hbmFnZXIge1xuICAgIGdldENhcGFiaWxpdGllcyhzdGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUuY2FwYWJpbGl0aWVzO1xuICAgIH1cbiAgICBwcmVwYXJlQXJncygpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGdldEFvdFN0YXRpY0xheW91dCh7IG5hbWUsIGhhbmRsZSwgc3ltYm9sVGFibGUgfSwgcmVzb2x2ZXIpIHtcbiAgICAgICAgaWYgKGhhbmRsZSAmJiBzeW1ib2xUYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUsXG4gICAgICAgICAgICAgICAgc3ltYm9sVGFibGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCBnZXRBb3RTdGF0aWNMYXlvdXQnKTtcbiAgICB9XG4gICAgY3JlYXRlKGVudmlyb25tZW50LCBkZWZpbml0aW9uLCBhcmdzLCBfZHluYW1pY1Njb3BlLCBfY2FsbGVyLCBfaGFzRGVmYXVsdEJsb2NrKSB7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLkNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbXBvbmVudFN0YXRlQnVja2V0KGRlZmluaXRpb24sIGFyZ3MuY2FwdHVyZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRTZWxmKGJ1Y2tldCkge1xuICAgICAgICBpZiAoYnVja2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJvb3RSZWZlcmVuY2UoYnVja2V0LmNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEVNUFRZX1NFTEY7XG4gICAgfVxuICAgIGRpZENyZWF0ZUVsZW1lbnQoKSB7IH1cbiAgICBkaWRSZW5kZXJMYXlvdXQoYnVja2V0LCBib3VuZHMpIHtcbiAgICAgICAgaWYgKCFidWNrZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBidWNrZXQuY29tcG9uZW50LmJvdW5kcyA9IG5ldyBCb3VuZHMoYm91bmRzKTtcbiAgICB9XG4gICAgZGlkQ3JlYXRlKGJ1Y2tldCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gZGlkIGNyZWF0ZWQgY29tcG9uZW50IG1hbmFnZXInKTtcbiAgICAgICAgaWYgKCFidWNrZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnaW4gZGlkIGNyZWF0ZWQgY29tcG9uZW50IG1hbmFnZXIgLSBhYm91dCB0byBjYWxsIGRpZEluc2VydEVsZW1lbnQnKTtcbiAgICAgICAgYnVja2V0LmNvbXBvbmVudC5kaWRJbnNlcnRFbGVtZW50KCk7XG4gICAgfVxuICAgIGdldFRhZyhidWNrZXQpIHtcbiAgICAgICAgaWYgKCFidWNrZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBDT05TVEFOVF9UQUc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1Y2tldC50YWc7XG4gICAgfVxuICAgIHVwZGF0ZShidWNrZXQpIHtcbiAgICAgICAgaWYgKCFidWNrZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBidWNrZXQuY29tcG9uZW50LmFyZ3MgPSBidWNrZXQubmFtZWRBcmdzU25hcHNob3QoKTtcbiAgICB9XG4gICAgZGlkVXBkYXRlTGF5b3V0KCkgeyB9XG4gICAgZGlkVXBkYXRlKCkgeyB9XG4gICAgZ2V0RGVzdHJ1Y3RvcihidWNrZXQpIHtcbiAgICAgICAgaWYgKCFidWNrZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBOT09QX0RFU1RST1lBQkxFO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGJ1Y2tldC5jb21wb25lbnRbREVTVFJPWUlOR10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJ1Y2tldC5jb21wb25lbnQud2lsbERlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBidWNrZXQuY29tcG9uZW50W0RFU1RST1lFRF0gPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJ2YXIgX2EsIF9iLCBfYywgX2Q7XG5pbXBvcnQgeyBDVVJSRU5UX1RBRyB9IGZyb20gJ0BnbGltbWVyL3JlZmVyZW5jZSc7XG5pbXBvcnQgeyBtZXRhRm9yLCB0cmFja2VkR2V0IH0gZnJvbSAnQGdsaW1tZXIvdHJhY2tpbmcnO1xuY29uc3QgREVTVFJPWUlORyA9IFN5bWJvbCgnZGVzdHJveWluZycpO1xuY29uc3QgREVTVFJPWUVEID0gU3ltYm9sKCdkZXN0cm95ZWQnKTtcbmV4cG9ydCBjbGFzcyBHbGltbWVyQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAqIENvbnN0cnVjdHMgYSBuZXcgY29tcG9uZW50IGFuZCBhc3NpZ25zIGl0c2VsZiB0aGUgcGFzc2VkIHByb3BlcnRpZXMuIFlvdVxuICAgICogc2hvdWxkIG5vdCBjb25zdHJ1Y3QgbmV3IGNvbXBvbmVudHMgeW91cnNlbGYuIEluc3RlYWQsIEdsaW1tZXIgd2lsbFxuICAgICogaW5zdGFudGlhdGUgbmV3IGNvbXBvbmVudHMgYXV0b21hdGljYWxseSBhcyBpdCByZW5kZXJzLlxuICAgICpcbiAgICAqIEBwYXJhbSBvd25lclxuICAgICogQHBhcmFtIGFyZ3NcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG93bmVyLCBhcmdzKSB7XG4gICAgICAgIHRoaXNbX2FdID0gZmFsc2U7XG4gICAgICAgIHRoaXNbX2JdID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgfVxuICAgIGdldCBpc0Rlc3Ryb3lpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0RFU1RST1lJTkddO1xuICAgIH1cbiAgICBnZXQgaXNEZXN0cm95ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0RFU1RST1lFRF07XG4gICAgfVxuICAgIC8qKlxuICAgICogQ2FsbGVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NLlxuICAgICovXG4gICAgd2lsbERlc3Ryb3koKSB7IH1cbn1cbl9hID0gREVTVFJPWUlORywgX2IgPSBERVNUUk9ZRUQ7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXRpdmVDb21wb25lbnQgZXh0ZW5kcyBHbGltbWVyQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpc1tfY10gPSBmYWxzZTtcbiAgICAgICAgdGhpc1tfZF0gPSBmYWxzZTtcbiAgICAgICAgLy8gY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vICAgdGhpcy5kaXJ0aW5lc3NUYWcgPSBVcGRhdGFibGVEaXJ0eWFibGVUYWcuY3JlYXRlKCk7XG4gICAgICAgIC8vICAgdGhpcy5wYXJlbnRWaWV3ID0gbnVsbDtcbiAgICAgICAgLy8gICB0aGlzLnRpdGxlID0gJ0hpJztcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjcmVhdGUoX2EpIHtcbiAgICAgICAgLy8gICB2YXIgYXJncyA9IF9hLmF0dHJzO1xuICAgICAgICAvLyAgIHZhciBjID0gbmV3IHRoaXMoeyBhdHRyczogYXJncyB9KTtcbiAgICAgICAgLy8gICBmb3IgKHZhciBfaSA9IDAsIF9iID0ga2V5cyhhcmdzKTsgX2kgPCBfYi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgLy8gICAgICAgdmFyIGtleSA9IF9iW19pXTtcbiAgICAgICAgLy8gICAgICAgY1trZXldID0gYXJnc1trZXldO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gICByZXR1cm4gYztcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZWNvbXB1dGUoKSB7IH1cbiAgICAgICAgLy8gZGVzdHJveSgpIHsgfVxuICAgICAgICAvLyBkaWRJbml0QXR0cnMoKSB7IH1cbiAgICAgICAgLy8gZGlkUmVjZWl2ZUF0dHJzKCkgeyB9XG4gICAgICAgIC8vIHdpbGxJbnNlcnRFbGVtZW50KCkgeyB9XG4gICAgICAgIC8vIHdpbGxVcGRhdGUoKSB7IH1cbiAgICAgICAgLy8gd2lsbFJlbmRlcigpIHsgfVxuICAgICAgICAvLyBkaWRJbnNlcnRFbGVtZW50KCkgeyB9XG4gICAgICAgIC8vIGRpZFVwZGF0ZSgpIHsgfVxuICAgICAgICAvLyBkaWRSZW5kZXIoKSB7IH1cbiAgICB9XG4gICAgZ2V0IGFyZ3MoKSB7XG4gICAgICAgIHRyYWNrZWRHZXQodGhpcywgJ2FyZ3MnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19hcmdzX187XG4gICAgfVxuICAgIHNldCBhcmdzKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5fX2FyZ3NfXyA9IGFyZ3M7XG4gICAgICAgIG1ldGFGb3IodGhpcylcbiAgICAgICAgICAgIC51cGRhdGFibGVUYWdGb3IoJ2FyZ3MnKVxuICAgICAgICAgICAgLmlubmVyLnVwZGF0ZShDVVJSRU5UX1RBRyk7XG4gICAgfVxuICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICBsZXQgeyBib3VuZHMgfSA9IHRoaXM7XG4gICAgICAgIC8vIGFzc2VydChib3VuZHMgJiYgYm91bmRzLmZpcnN0Tm9kZSA9PT0gYm91bmRzLmxhc3ROb2RlLCBgVGhlICdlbGVtZW50JyBwcm9wZXJ0eSBjYW4gb25seSBiZSBhY2Nlc3NlZCBvbiBjb21wb25lbnRzIHRoYXQgY29udGFpbiBhIHNpbmdsZSByb290IGVsZW1lbnQgaW4gdGhlaXIgdGVtcGxhdGUuIFRyeSB1c2luZyAnYm91bmRzJyBpbnN0ZWFkIHRvIGFjY2VzcyB0aGUgZmlyc3QgYW5kIGxhc3Qgbm9kZXMuYCk7XG4gICAgICAgIHJldHVybiBib3VuZHMuZmlyc3ROb2RlO1xuICAgIH1cbiAgICBnZXQgaXNEZXN0cm95aW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tERVNUUk9ZSU5HXTtcbiAgICB9XG4gICAgZ2V0IGlzRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tERVNUUk9ZRURdO1xuICAgIH1cbiAgICB3aWxsRGVzdHJveSgpIHsgfVxuICAgIGRpZEluc2VydEVsZW1lbnQoKSB7IH1cbiAgICBkaWRVdXBkYXRlKCkgeyB9XG59XG5fYyA9IERFU1RST1lJTkcsIF9kID0gREVTVFJPWUVEO1xuIiwiZXhwb3J0IGNsYXNzIE5hdGl2ZU1vZGlmaWVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzdGF0ZSwgYXJncywgZG9tKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgICAgdGhpcy5kb20gPSBkb207XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5hdGl2ZU1vZGlmaWVyRGVmaW5pdGlvblN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcihLbGFzcykge1xuICAgICAgICBpZiAoS2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgS2xhc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOYXRpdmVNb2RpZmllck1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluc3RhbGxlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMudXBkYXRlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuZGVzdHJveWVkTW9kaWZpZXJzID0gW107XG4gICAgfVxuICAgIGNyZWF0ZShlbGVtZW50LCBzdGF0ZSwgYXJncywgX2R5bmFtaWNTY29wZSwgZG9tKSB7XG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlTW9kaWZpZXIoZWxlbWVudCwgc3RhdGUsIGFyZ3MuY2FwdHVyZSgpLCBkb20pO1xuICAgIH1cbiAgICBnZXRUYWcoeyBhcmdzOiB7IHRhZyB9IH0pIHtcbiAgICAgICAgcmV0dXJuIHRhZztcbiAgICB9XG4gICAgaW5zdGFsbCh7IGVsZW1lbnQsIGFyZ3MsIGRvbSwgc3RhdGUgfSkge1xuICAgICAgICB0aGlzLmluc3RhbGxlZEVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIGxldCBmaXJzdFBhcmFtID0gYXJncy5wb3NpdGlvbmFsLmF0KDApO1xuICAgICAgICBsZXQgcGFyYW0gPSBmaXJzdFBhcmFtICE9PSB1bmRlZmluZWQgJiYgZmlyc3RQYXJhbS52YWx1ZSgpO1xuICAgICAgICBkb20uc2V0QXR0cmlidXRlKGVsZW1lbnQsICdkYXRhLW1vZGlmaWVyJywgYGluc3RhbGxlZCAtICR7cGFyYW19YCk7XG4gICAgICAgIGlmIChzdGF0ZS5pbnN0YW5jZSAmJiBzdGF0ZS5pbnN0YW5jZS5kaWRJbnNlcnRFbGVtZW50KSB7XG4gICAgICAgICAgICBzdGF0ZS5pbnN0YW5jZS5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHN0YXRlLmluc3RhbmNlLmRpZEluc2VydEVsZW1lbnQoZWxlbWVudCwgYXJncy5wb3NpdGlvbmFsLnZhbHVlKCksIGFyZ3MubmFtZWQudmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB1cGRhdGUoeyBlbGVtZW50LCBhcmdzLCBkb20sIHN0YXRlIH0pIHtcbiAgICAgICAgdGhpcy51cGRhdGVkRWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgbGV0IGZpcnN0UGFyYW0gPSBhcmdzLnBvc2l0aW9uYWwuYXQoMCk7XG4gICAgICAgIGxldCBwYXJhbSA9IGZpcnN0UGFyYW0gIT09IHVuZGVmaW5lZCAmJiBmaXJzdFBhcmFtLnZhbHVlKCk7XG4gICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoZWxlbWVudCwgJ2RhdGEtbW9kaWZpZXInLCBgdXBkYXRlZCAtICR7cGFyYW19YCk7XG4gICAgICAgIGlmIChzdGF0ZS5pbnN0YW5jZSAmJiBzdGF0ZS5pbnN0YW5jZS5kaWRVcGRhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmluc3RhbmNlLmRpZFVwZGF0ZShlbGVtZW50LCBhcmdzLnBvc2l0aW9uYWwudmFsdWUoKSwgYXJncy5uYW1lZC52YWx1ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGdldERlc3RydWN0b3IobW9kaWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3llZE1vZGlmaWVycy5wdXNoKG1vZGlmaWVyKTtcbiAgICAgICAgICAgICAgICBsZXQgeyBlbGVtZW50LCBkb20sIHN0YXRlIH0gPSBtb2RpZmllcjtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaW5zdGFuY2UgJiYgc3RhdGUuaW5zdGFuY2Uud2lsbERlc3Ryb3lFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmluc3RhbmNlLndpbGxEZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZShlbGVtZW50LCAnZGF0YS1tb2RpZmllcicpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXJBb3QsIHJlbmRlclN5bmMgfSBmcm9tICdAZ2xpbW1lci9ydW50aW1lJztcbmltcG9ydCBOYXRpdmVzY3JpcHRHbGltbWVyIGZyb20gJy4uLy4uJztcbmltcG9ydCBFbGVtZW50Tm9kZSBmcm9tICcuLi9kb20vbm9kZXMvRWxlbWVudE5vZGUnO1xuaW1wb3J0IEdsaW1tZXJSZXNvbHZlckRlbGVnYXRlIGZyb20gJy4uL2dsaW1tZXIvY29udGV4dCc7XG4vLyBpbXBvcnQgRnJhbWVFbGVtZW50IGZyb20gXCIuLi9kb20vL25vZGVzL0ZyYW1lRWxlbWVudFwiO1xuLy8gaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgbG9nZ2VyIGFzIGxvZyB9IGZyb20gXCIuL2Jhc2ljZG9tXCI7XG4vLyBpbXBvcnQgUGFnZUVsZW1lbnQgZnJvbSBcIi4vbmF0aXZlL1BhZ2VFbGVtZW50XCI7XG4vLyBpbXBvcnQgTmF0aXZlRWxlbWVudE5vZGUgZnJvbSBcIi4vbmF0aXZlL05hdGl2ZUVsZW1lbnROb2RlXCI7XG4vLyBleHBvcnQgdHlwZSBGcmFtZVNwZWMgPSBGcmFtZSB8IEZyYW1lRWxlbWVudCB8IHN0cmluZ1xuLy8gZXhwb3J0IHR5cGUgUGFnZVNwZWMgPSB0eXBlb2YgR2xpbW1lckNvbXBvbmVudDtcbi8vIGV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbk9wdGlvbnMge1xuLy8gICAgIHBhZ2U6IFBhZ2VTcGVjO1xuLy8gICAgIHByb3BzPzogYW55O1xuLy8gICAgIGZyYW1lPzogRnJhbWVTcGVjO1xuLy8gICAgIGFuaW1hdGVkPzogYm9vbGVhbjtcbi8vICAgICBiYWNrc3RhY2tWaXNpYmxlPzogYm9vbGVhbjtcbi8vICAgICBjbGVhckhpc3Rvcnk/OiBib29sZWFuO1xuLy8gICAgIHRyYW5zaXRpb24/OiBOYXZpZ2F0aW9uVHJhbnNpdGlvbjtcbi8vICAgICB0cmFuc2l0aW9uQW5kcm9pZD86IE5hdmlnYXRpb25UcmFuc2l0aW9uO1xuLy8gICAgIHRyYW5zaXRpb25pT1M/OiBOYXZpZ2F0aW9uVHJhbnNpdGlvbjtcbi8vIH1cbi8vIGZ1bmN0aW9uIHJlc29sdmVGcmFtZShmcmFtZVNwZWM/OiBGcmFtZVNwZWMpOiBGcmFtZSB7XG4vLyAgICAgbGV0IHRhcmdldEZyYW1lOiBGcmFtZTtcbi8vICAgICBpZiAoIWZyYW1lU3BlYykgdGFyZ2V0RnJhbWUgPSB0b3Btb3N0KCk7XG4vLyAgICAgaWYgKGZyYW1lU3BlYyBpbnN0YW5jZW9mIEZyYW1lRWxlbWVudCkgdGFyZ2V0RnJhbWUgPSBmcmFtZVNwZWMubmF0aXZlVmlldyBhcyBGcmFtZTtcbi8vICAgICBpZiAoZnJhbWVTcGVjIGluc3RhbmNlb2YgRnJhbWUpIHRhcmdldEZyYW1lID0gZnJhbWVTcGVjO1xuLy8gICAgIGlmICh0eXBlb2YgZnJhbWVTcGVjID09IFwic3RyaW5nXCIpIHtcbi8vICAgICAgICAgdGFyZ2V0RnJhbWUgPSBnZXRGcmFtZUJ5SWQoZnJhbWVTcGVjKVxuLy8gICAgICAgICBpZiAoIXRhcmdldEZyYW1lKSBjb25zb2xlLmxvZyhgTmF2aWdhdGUgY291bGQgbm90IGZpbmQgZnJhbWUgd2l0aCBpZCAke2ZyYW1lU3BlY31gKVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gdGFyZ2V0RnJhbWU7XG4vLyB9XG4vLyBpbnRlcmZhY2UgQ29tcG9uZW50SW5zdGFuY2VJbmZvIHsgZWxlbWVudDogRWxlbWVudE5vZGUsIHBhZ2VJbnN0YW5jZTogR2xpbW1lckNvbXBvbmVudCB9XG4vLyBmdW5jdGlvbiByZXNvbHZlQ29tcG9uZW50RWxlbWVudChwYWdlU3BlYzogUGFnZVNwZWMsIHByb3BzPzogYW55KTogQ29tcG9uZW50SW5zdGFuY2VJbmZvIHtcbi8vICAgICBsZXQgZHVtbXkgPSBjcmVhdGVFbGVtZW50KCdmcmFnbWVudCcpO1xuLy8gICAgIGxldCBwYWdlSW5zdGFuY2UgPSBuZXcgcGFnZVNwZWMoeyB0YXJnZXQ6IGR1bW15LCBwcm9wczogcHJvcHMgfSk7XG4vLyAgICAgbGV0IGVsZW1lbnQgPSBkdW1teS5maXJzdEVsZW1lbnQoKSBhcyBOYXRpdmVFbGVtZW50Tm9kZTtcbi8vICAgICByZXR1cm4geyBlbGVtZW50LCBwYWdlSW5zdGFuY2UgfVxuLy8gfVxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlKG5hbWUpIHtcbiAgICBsZXQgR2xpbW1lck5hdGl2ZSA9IE5hdGl2ZXNjcmlwdEdsaW1tZXI7XG4gICAgLy8gbGV0IHRhcmdldEZyYW1lID0gcmVzb2x2ZUZyYW1lKCk7XG4gICAgLy8gY29uc3QgZG9jdW1lbnQgPSBuZXcgRG9jdW1lbnROb2RlKCk7XG4gICAgY29uc3QgbmV3RnJhbWUgPSBuZXcgRWxlbWVudE5vZGUoJ2ZyYW1lJyk7XG4gICAgLy8gLy9zZXR1cCBhIGZyYW1lIHNvIHdlIGFsd2F5cyBoYXZlIHNvbWV3aGVyZSB0byBoYW5nIG91ciBjc3NcbiAgICBuZXdGcmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBuYW1lKTtcbiAgICBHbGltbWVyTmF0aXZlLmRvY3VtZW50LmFwcGVuZENoaWxkKG5ld0ZyYW1lKTtcbiAgICAvLyBjb25zdCBjb250ZXh0ID0gQ29udGV4dChHbGltbWVyUmVzb2x2ZXJEZWxlZ2F0ZSk7XG4gICAgLy8gY29uc3QgcHJvZ3JhbUFydGlmYWN0cyA9IGFydGlmYWN0cyhjb250ZXh0KTtcbiAgICAvLyBjb25zdCBhb3RSdW50aW1lID0gQW90UnVudGltZShkb2N1bWVudCBhcyBhbnksIHByb2dyYW1BcnRpZmFjdHMsIEdsaW1tZXJOYXRpdmUucmVzb2x2ZXIpO1xuICAgIC8vIGlmICghdGFyZ2V0RnJhbWUpIHtcbiAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKFwibmF2aWdhdGUgcmVxdWlyZXMgZnJhbWUgb3B0aW9uIHRvIGJlIGEgbmF0aXZlIEZyYW1lLCBhIEZyYW1lRWxlbWVudCwgYSBmcmFtZSBJZCwgb3IgbnVsbFwiKVxuICAgIC8vIH1cbiAgICBjb25zdCBjb21wb25lbnQgPSBHbGltbWVyUmVzb2x2ZXJEZWxlZ2F0ZS5sb29rdXBDb21wb25lbnQobmFtZSkuY29tcGlsYWJsZS5jb21waWxlKEdsaW1tZXJOYXRpdmUuY29udGV4dCk7XG4gICAgbGV0IGN1cnNvciA9IHsgZWxlbWVudDogbmV3RnJhbWUsIG5leHRTaWJsaW5nOiBudWxsIH07XG4gICAgY29uc3QgaXRlcmF0b3IgPSByZW5kZXJBb3QoR2xpbW1lck5hdGl2ZS5hb3RSdW50aW1lLCBjb21wb25lbnQsIGN1cnNvcik7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Fib3V0IHRvIHJlbmRlciBuZXcgcmVzdWx0Jyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlbmRlclN5bmMoR2xpbW1lck5hdGl2ZS5hb3RSdW50aW1lLmVudiwgaXRlcmF0b3IpO1xuICAgICAgICBOYXRpdmVzY3JpcHRHbGltbWVyLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgTmF0aXZlc2NyaXB0R2xpbW1lci5fcmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICBHbGltbWVyTmF0aXZlLnJvb3RGcmFtZS5uYXRpdmVWaWV3Lm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdGcmFtZS5maXJzdEVsZW1lbnQoKS5uYXRpdmVWaWV3O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ05ldyBwYWdlIHJlbmRlcmVkJyk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgaW4gaW5pdGlhbCByZW5kZXI6ICR7ZXJyb3J9YCk7XG4gICAgfVxuICAgIC8vIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBQYWdlRWxlbWVudCkpXG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIm5hdmlnYWdlIHJlcXVpcmVzIGEgc3ZlbHRlIGNvbXBvbmVudCB3aXRoIGEgcGFnZSBlbGVtZW50IGF0IHRoZSByb290XCIpXG4gICAgLy8gbGV0IG5hdGl2ZVBhZ2UgPSBlbGVtZW50Lm5hdGl2ZVZpZXc7XG4gICAgLy8gY29uc3QgaGFuZGxlciA9IChhcmdzOiBOYXZpZ2F0ZWREYXRhKSA9PiB7XG4gICAgLy8gICAgIGlmIChhcmdzLmlzQmFja05hdmlnYXRpb24pIHtcbiAgICAvLyAgICAgICAgIG5hdGl2ZVBhZ2Uub2ZmKCduYXZpZ2F0ZWRGcm9tJywgaGFuZGxlcilcbiAgICAvLyAgICAgICAgIHBhZ2VJbnN0YW5jZS4kZGVzdHJveSgpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gbmF0aXZlUGFnZS5vbignbmF2aWdhdGVkRnJvbScsIGhhbmRsZXIpXG4gICAgLy8gdGFyZ2V0RnJhbWUubmF2aWdhdGUoe1xuICAgIC8vICAgICBjcmVhdGU6ICgpID0+IG5hdGl2ZVBhZ2VcbiAgICAvLyB9KTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbi8vIGV4cG9ydCBpbnRlcmZhY2UgQmFja05hdmlnYXRpb25PcHRpb25zIHtcbi8vICAgICBmcmFtZT86IEZyYW1lU3BlYztcbi8vICAgICB0bz86IFBhZ2VFbGVtZW50O1xuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdvQmFjayhvcHRpb25zOiBCYWNrTmF2aWdhdGlvbk9wdGlvbnMgPSB7fSkge1xuLy8gICAgIGxldCB0YXJnZXRGcmFtZSA9IHJlc29sdmVGcmFtZShvcHRpb25zLmZyYW1lKTtcbi8vICAgICBpZiAoIXRhcmdldEZyYW1lKSB7XG4vLyAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdvYmFjayByZXF1aXJlcyBmcmFtZSBvcHRpb24gdG8gYmUgYSBuYXRpdmUgRnJhbWUsIGEgRnJhbWVFbGVtZW50LCBhIGZyYW1lIElkLCBvciBudWxsXCIpXG4vLyAgICAgfVxuLy8gICAgIGxldCBiYWNrU3RhY2tFbnRyeTogQmFja3N0YWNrRW50cnkgPSBudWxsO1xuLy8gICAgIGlmIChvcHRpb25zLnRvKSB7XG4vLyAgICAgICAgIGJhY2tTdGFja0VudHJ5ID0gdGFyZ2V0RnJhbWUuYmFja1N0YWNrLmZpbmQoZSA9PiBlLnJlc29sdmVkUGFnZSA9PT0gb3B0aW9ucy50by5uYXRpdmVWaWV3KTtcbi8vICAgICAgICAgaWYgKCFiYWNrU3RhY2tFbnRyeSkge1xuLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCB0aGUgZGVzdGluYXRpb24gcGFnZSBpbiB0aGUgZnJhbWVzIGJhY2tzdGFja1wiKVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB0YXJnZXRGcmFtZS5nb0JhY2soYmFja1N0YWNrRW50cnkpO1xuLy8gfVxuLy8gZXhwb3J0IGludGVyZmFjZSBTaG93TW9kYWxPcHRpb25zIHtcbi8vICAgICBwYWdlOiBQYWdlU3BlY1xuLy8gICAgIHByb3BzPzogYW55XG4vLyAgICAgYW5kcm9pZD86IHsgY2FuY2VsYWJsZTogYm9vbGVhbiB9XG4vLyAgICAgaW9zPzogeyBwcmVzZW50YXRpb25TdHlsZTogYW55IH1cbi8vICAgICBhbmltYXRlZD86IGJvb2xlYW5cbi8vICAgICBmdWxsc2NyZWVuPzogYm9vbGVhblxuLy8gICAgIHN0cmV0Y2hlZDogYm9vbGVhblxuLy8gfVxuLy8gY29uc3QgbW9kYWxTdGFjazogQ29tcG9uZW50SW5zdGFuY2VJbmZvW10gPSBbXVxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbDxUPihtb2RhbE9wdGlvbnM6IFNob3dNb2RhbE9wdGlvbnMpOiBQcm9taXNlPFQ+IHtcbi8vICAgICBsZXQgeyBwYWdlLCBwcm9wcyA9IHt9LCAuLi5vcHRpb25zIH0gPSBtb2RhbE9wdGlvbnM7XG4vLyAgICAgLy9HZXQgdGhpcyBiZWZvcmUgYW55IHBvdGVudGlhbCBuZXcgZnJhbWVzIGFyZSBjcmVhdGVkIGJ5IGNvbXBvbmVudCBiZWxvd1xuLy8gICAgIGxldCBtb2RhbExhdW5jaGVyID0gdG9wbW9zdCgpLmN1cnJlbnRQYWdlO1xuLy8gICAgIGxldCBjb21wb25lbnRJbnN0YW5jZUluZm8gPSByZXNvbHZlQ29tcG9uZW50RWxlbWVudChwYWdlLCBwcm9wcyk7XG4vLyAgICAgbGV0IG1vZGFsVmlldzogVmlld0Jhc2UgPSBjb21wb25lbnRJbnN0YW5jZUluZm8uZWxlbWVudC5uYXRpdmVWaWV3O1xuLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICAgIGxldCByZXNvbHZlZCA9IGZhbHNlO1xuLy8gICAgICAgICBjb25zdCBjbG9zZUNhbGxiYWNrID0gKHJlc3VsdDogVCkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHJlc29sdmVkKSByZXR1cm47XG4vLyAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB0cnkge1xuLy8gICAgICAgICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlSW5mby5wYWdlSW5zdGFuY2UuJGRlc3Ryb3koKTsgLy9kb24ndCBsZXQgYW4gZXhjZXB0aW9uIGluIGRlc3Ryb3kga2lsbCB0aGUgcHJvbWlzZSBjYWxsYmFja1xuLy8gICAgICAgICAgICAgfSBmaW5hbGx5IHtcbi8vICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgbW9kYWxTdGFjay5wdXNoKGNvbXBvbmVudEluc3RhbmNlSW5mbyk7XG4vLyAgICAgICAgIG1vZGFsTGF1bmNoZXIuc2hvd01vZGFsKG1vZGFsVmlldywgeyAuLi5vcHRpb25zLCBjb250ZXh0OiB7fSwgY2xvc2VDYWxsYmFjayB9KVxuLy8gICAgIH0pO1xuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwocmVzdWx0OiBhbnkpOiB2b2lkIHtcbi8vICAgICBsZXQgbW9kYWxQYWdlSW5zdGFuY2VJbmZvID0gbW9kYWxTdGFjay5wb3AoKTtcbi8vICAgICBtb2RhbFBhZ2VJbnN0YW5jZUluZm8uZWxlbWVudC5uYXRpdmVWaWV3LmNsb3NlTW9kYWwocmVzdWx0KTtcbi8vIH1cbiIsImltcG9ydCB7IFRFTVBMQVRFX09OTFlfQ09NUE9ORU5UIH0gZnJvbSAnQGdsaW1tZXIvcnVudGltZSc7XG5pbXBvcnQgeyBOYXRpdmVNb2RpZmllck1hbmFnZXIsIE5hdGl2ZU1vZGlmaWVyRGVmaW5pdGlvblN0YXRlIH0gZnJvbSAnLi9uYXRpdmUtbW9kaWZpZXItbWFuYWdlcic7XG5pbXBvcnQgTmF0aXZlQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL25hdGl2ZS1jb21wb25lbnQtbWFuYWdlcic7XG5pbXBvcnQgQ0FQQUJJTElUSUVTIGZyb20gJy4vbmF0aXZlLWNhcGFiaWxpdGllcyc7XG5pbXBvcnQgeyB1bnJlYWNoYWJsZSB9IGZyb20gJ0BnbGltbWVyL3V0aWwnO1xuY2xhc3MgTmF0aXZlQ29tcG9uZW50RGVmaW5pdGlvbiB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbWFuYWdlciwgQ29tcG9uZW50Q2xhc3MsIGhhbmRsZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgICAgICB0aGlzLkNvbXBvbmVudENsYXNzID0gQ29tcG9uZW50Q2xhc3M7XG4gICAgICAgIHRoaXMuaGFuZGxlID0gaGFuZGxlO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGNhcGFiaWxpdGllczogQ0FQQUJJTElUSUVTLFxuICAgICAgICAgICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgICAgICAgICBoYW5kbGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4geyBHbGltbWVyRGVidWc6IGA8Y29tcG9uZW50LWRlZmluaXRpb24gbmFtZT1cIiR7dGhpcy5uYW1lfVwiPmAgfTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvbHZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFibGUgPSBbXTtcbiAgICAgICAgdGhpcy5tYW5hZ2VycyA9IHt9O1xuICAgIH1cbiAgICByZXNvbHZlKGhhbmRsZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gcmVzb2x2ZXIgcmVzb2x2ZScpO1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnRhYmxlW2hhbmRsZV07XG4gICAgICAgIHJldHVybiAodmFsdWUpO1xuICAgIH1cbiAgICBtYW5hZ2VyRm9yKG1hbmFnZXJJZCA9ICdtYWluJykge1xuICAgICAgICBsZXQgbWFuYWdlciA9IHRoaXMubWFuYWdlcnNbbWFuYWdlcklkXTtcbiAgICAgICAgaWYgKG1hbmFnZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VyO1xuICAgICAgICB9XG4gICAgICAgIG1hbmFnZXIgPSBuZXcgTmF0aXZlQ29tcG9uZW50TWFuYWdlcigpO1xuICAgICAgICB0aGlzLm1hbmFnZXJzW21hbmFnZXJJZF0gPSBtYW5hZ2VyO1xuICAgICAgICByZXR1cm4gbWFuYWdlcjtcbiAgICB9XG4gICAgZ2V0SW52b2NhdGlvbihsb2NhdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCBnZXRJbnZvY2F0aW9uJyk7XG4gICAgfVxuICAgIGxvb2t1cENvbXBvbmVudChuYW1lLCByZWZlcnJlcikge1xuICAgICAgICBsZXQgZGVmaW5pdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudGFibGUuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Lm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uID0gY29tcG9uZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgfVxuICAgIGxvb2t1cFBhcnRpYWwobmFtZSwgcmVmZXJyZXIpIHtcbiAgICAgICAgdGhyb3cgdW5yZWFjaGFibGUoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJDb21wb25lbnQobmFtZSwgQ29tcG9uZW50Q2xhc3MpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlID0gdGhpcy50YWJsZS5sZW5ndGg7XG4gICAgICAgIGxldCBtYW5hZ2VyID0gdGhpcy5tYW5hZ2VyRm9yKCk7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgTmF0aXZlQ29tcG9uZW50RGVmaW5pdGlvbihuYW1lLCBtYW5hZ2VyLCBDb21wb25lbnRDbGFzcywgaGFuZGxlKTtcbiAgICAgICAgLy8gY29uc3QgZGVmaW5pdGlvbiA9ICh0aGlzLnJlc29sdmVDb21wb25lbnREZWZpbml0aW9uKENvbXBvbmVudENsYXNzIGFzIEZhY3Rvcnk8dW5rbm93bj4pIGFzIGFueSk7XG4gICAgICAgIC8vIGRlZmluaXRpb24uc3RhdGUuaGFuZGxlID0gaGFuZGxlO1xuICAgICAgICB0aGlzLnRhYmxlLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICAgIHJldHVybiBoYW5kbGU7XG4gICAgfVxuICAgIHJlZ2lzdGVyVGVtcGxhdGVPbmx5Q29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBoYW5kbGUgPSB0aGlzLnRhYmxlLmxlbmd0aDtcbiAgICAgICAgdGhpcy50YWJsZS5wdXNoKFRFTVBMQVRFX09OTFlfQ09NUE9ORU5UKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICB9XG4gICAgcmVnaXN0ZXJIZWxwZXIoaGVscGVyKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMudGFibGUubGVuZ3RoO1xuICAgICAgICB0aGlzLnRhYmxlLnB1c2goaGVscGVyKTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZTtcbiAgICB9XG4gICAgcmVnaXN0ZXJNb2RpZmllcihNb2RpZmllckNsYXNzKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMudGFibGUubGVuZ3RoO1xuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgTmF0aXZlTW9kaWZpZXJEZWZpbml0aW9uU3RhdGUoTW9kaWZpZXJDbGFzcyk7XG4gICAgICAgIGxldCBtYW5hZ2VyID0gbmV3IE5hdGl2ZU1vZGlmaWVyTWFuYWdlcigpO1xuICAgICAgICB0aGlzLnRhYmxlLnB1c2goe1xuICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICBtYW5hZ2VyXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHByZWNvbXBpbGUgfSBmcm9tICdAZ2xpbW1lci9jb21waWxlcic7XG5pbXBvcnQgTGlua1RvIGZyb20gJy4vY29tcG9uZW50cy9saW5rLXRvL2NvbXBvbmVudCc7XG5pbXBvcnQgYnVpbGRBY3Rpb24gZnJvbSAnLi9oZWxwZXJzL2FjdGlvbic7XG5pbXBvcnQgb25Nb2RpZmllciBmcm9tICcuL21vZGlmaWVycy9vbic7XG4vLyBjb25zdCBwcmVjb21waWxlID0gcmVxdWlyZSgnQGdsaW1tZXIvY29tcGlsZXInKS5wcmVjb21waWxlO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBHbGltbWVyKHJlc29sdmVyRGVsZWdhdGUsIHJlc29sdmVyKSB7XG4gICAgY29uc3QgYWN0aW9uSGFuZGxlID0gcmVzb2x2ZXIucmVnaXN0ZXJIZWxwZXIoYnVpbGRBY3Rpb24pO1xuICAgIGNvbnN0IG9uTW9kaWZpZXJIYW5kbGUgPSByZXNvbHZlci5yZWdpc3Rlck1vZGlmaWVyKG9uTW9kaWZpZXIpO1xuICAgIGNvbnN0IGxpbmtUb0hhbmRsZSA9IHJlc29sdmVyLnJlZ2lzdGVyQ29tcG9uZW50KCdMaW5rVG8nLCBMaW5rVG8pO1xuICAgIHJlc29sdmVyRGVsZWdhdGUucmVnaXN0ZXJIZWxwZXIoJ2FjdGlvbicsIGFjdGlvbkhhbmRsZSk7XG4gICAgcmVzb2x2ZXJEZWxlZ2F0ZS5yZWdpc3Rlck1vZGlmaWVyKCdvbicsIG9uTW9kaWZpZXJIYW5kbGUpO1xuICAgIC8vIGNvbnN0IExpbmtUb1RlbXBsYXRlID0gcmVhZEZpbGVTeW5jKCcuL2NvbXBvbmVudHMvbGluay10by90ZW1wbGF0ZS5oYnMnKTtcbiAgICByZXNvbHZlckRlbGVnYXRlLnJlZ2lzdGVyQ29tcG9uZW50KCdMaW5rVG8nLCBsaW5rVG9IYW5kbGUsIHByZWNvbXBpbGUoYDxidXR0b24gdGV4dD17e0B0ZXh0fX0gY2xhc3M9XCJidG4gbGluay10b1wiIHt7b24gXCJ0YXBcIiAoYWN0aW9uIHRoaXMub25DbGljayl9fT48L2J1dHRvbj5gKSwge1xuICAgICAgICBhdHRyaWJ1dGVIb29rOiB0cnVlLFxuICAgICAgICBjcmVhdGVBcmdzOiB0cnVlLFxuICAgICAgICBjcmVhdGVDYWxsZXI6IGZhbHNlLFxuICAgICAgICBjcmVhdGVJbnN0YW5jZTogdHJ1ZSxcbiAgICAgICAgZHluYW1pY0xheW91dDogZmFsc2UsXG4gICAgICAgIGR5bmFtaWNTY29wZTogZmFsc2UsXG4gICAgICAgIGR5bmFtaWNUYWc6IHRydWUsXG4gICAgICAgIGVsZW1lbnRIb29rOiB0cnVlLFxuICAgICAgICBwcmVwYXJlQXJnczogZmFsc2UsXG4gICAgICAgIHVwZGF0ZUhvb2s6IHRydWUsXG4gICAgICAgIHdyYXBwZWQ6IGZhbHNlXG4gICAgfSk7XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vRGFzaGJvYXJkL2NvbXBvbmVudC50c1wiOiBcIi4uL3NyYy91aS9jb21wb25lbnRzL0Rhc2hib2FyZC9jb21wb25lbnQudHNcIixcblx0XCIuL0RlbW8vY29tcG9uZW50LnRzXCI6IFwiLi4vc3JjL3VpL2NvbXBvbmVudHMvRGVtby9jb21wb25lbnQudHNcIixcblx0XCIuL0hvbWUvY29tcG9uZW50LnRzXCI6IFwiLi4vc3JjL3VpL2NvbXBvbmVudHMvSG9tZS9jb21wb25lbnQudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLi9zcmMvdWkvY29tcG9uZW50cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9jb21wb25lbnRcXFxcLnRzJFwiOyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQGdsaW1tZXIvY29tcG9uZW50JztcbmltcG9ydCB7IHRyYWNrZWQgfSBmcm9tICdAZ2xpbW1lci90cmFja2luZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJXZWxjb21lIHRvIGdsaW1tZXJcIjtcbiAgICAgICAgdGhpcy5idXR0b25UZXh0ID0gXCJDbGljayBNZSFcIjtcbiAgICB9XG4gICAgYnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBuZXh0Jyk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBcIkl2ZSBoZWFyZCBpdCBib3RoIHdheXNcIjtcbiAgICB9XG59XG5fX2RlY29yYXRlKFtcbiAgICB0cmFja2VkXG5dLCBEYXNoYm9hcmQucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJMRTlCUVU4c1UwRkJVeXhOUVVGTkxHOUNRVUZ2UWl4RFFVRkRPMEZCUXpORExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNUVUZCVFN4dFFrRkJiVUlzUTBGQlF6dEJRVVUxUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhuUWtGQmFVSXNVMEZCVVN4VFFVRlRPMGxCUVdoRU96dFJRVVZKTEZWQlFVc3NSMEZCUnl4dlFrRkJiMElzUTBGQlF6dFJRVVUzUWl4bFFVRlZMRWRCUVVjc1YwRkJWeXhEUVVGQk8wbEJUVFZDTEVOQlFVTTdTVUZLUnl4WFFVRlhPMUZCUTFBc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEhkQ1FVRjNRaXhEUVVGRE8wbEJRekZETEVOQlFVTTdRMEZEU2p0QlFWSkhPMGxCUkVNc1QwRkJUenQzUTBGRGNVSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRMjl0Y0c5dVpXNTBJR1p5YjIwZ0owQm5iR2x0YldWeUwyTnZiWEJ2Ym1WdWRDYzdYRzVwYlhCdmNuUWdleUIwY21GamEyVmtJSDBnWm5KdmJTQW5RR2RzYVcxdFpYSXZkSEpoWTJ0cGJtY25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkVZWE5vWW05aGNtUWdaWGgwWlc1a2N5QkRiMjF3YjI1bGJuUWdlMXh1SUNBZ0lFQjBjbUZqYTJWa1hHNGdJQ0FnZEdsMGJHVWdQU0JjSWxkbGJHTnZiV1VnZEc4Z1oyeHBiVzFsY2x3aU8xeHVYRzRnSUNBZ1luVjBkRzl1VkdWNGRDQTlJRndpUTJ4cFkyc2dUV1VoWENKY2JseHVJQ0FnSUdKMWRIUnZia05zYVdOcktDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlnbmFXNGdibVY0ZENjcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ScGRHeGxJRDBnWENKSmRtVWdhR1ZoY21RZ2FYUWdZbTkwYUNCM1lYbHpYQ0k3WEc0Z0lDQWdmVnh1ZlZ4dUlsMTkiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5pbXBvcnQgeyB0cmFja2VkIH0gZnJvbSAnQGdsaW1tZXIvdHJhY2tpbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBcIldlbGNvbWUgdG8gZ2xpbW1lclwiO1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIkNsaWNrIE1lIVwiO1xuICAgIH1cbiAgICBidXR0b25DbGljaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIG5leHQnKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiSXZlIGhlYXJkIGl0IGJvdGggd2F5c1wiO1xuICAgIH1cbn1cbl9fZGVjb3JhdGUoW1xuICAgIHRyYWNrZWRcbl0sIERlbW8ucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJMRTlCUVU4c1UwRkJVeXhOUVVGTkxHOUNRVUZ2UWl4RFFVRkRPMEZCUXpORExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNUVUZCVFN4dFFrRkJiVUlzUTBGQlF6dEJRVVUxUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhYUVVGWkxGTkJRVkVzVTBGQlV6dEpRVUV6UXpzN1VVRkZTU3hWUVVGTExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN1VVRkZOMElzWlVGQlZTeEhRVUZITEZkQlFWY3NRMEZCUVR0SlFVMDFRaXhEUVVGRE8wbEJTa2NzVjBGQlZ6dFJRVU5RTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGRrSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0SlFVTXhReXhEUVVGRE8wTkJRMG83UVVGU1J6dEpRVVJETEU5QlFVODdiVU5CUTNGQ0lpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFTnZiWEJ2Ym1WdWRDQm1jbTl0SUNkQVoyeHBiVzFsY2k5amIyMXdiMjVsYm5Rbk8xeHVhVzF3YjNKMElIc2dkSEpoWTJ0bFpDQjlJR1p5YjIwZ0owQm5iR2x0YldWeUwzUnlZV05yYVc1bkp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1JHVnRieUJsZUhSbGJtUnpJRU52YlhCdmJtVnVkQ0I3WEc0Z0lDQWdRSFJ5WVdOclpXUmNiaUFnSUNCMGFYUnNaU0E5SUZ3aVYyVnNZMjl0WlNCMGJ5Qm5iR2x0YldWeVhDSTdYRzVjYmlBZ0lDQmlkWFIwYjI1VVpYaDBJRDBnWENKRGJHbGpheUJOWlNGY0lseHVYRzRnSUNBZ1luVjBkRzl1UTJ4cFkyc29LU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktDZHBiaUJ1WlhoMEp5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRHbDBiR1VnUFNCY0lrbDJaU0JvWldGeVpDQnBkQ0JpYjNSb0lIZGhlWE5jSWp0Y2JpQWdJQ0I5WEc1OVhHNGlYWDA9IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEU5QlFVOHNVMEZCVXl4TlFVRk5MRzlDUVVGdlFpeERRVUZETzBGQlJUTkRMRTFCUVUwc1EwRkJReXhQUVVGUExGZEJRVmtzVTBGQlVTeFRRVUZUTzBOQlJURkRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRU52YlhCdmJtVnVkQ0JtY205dElDZEFaMnhwYlcxbGNpOWpiMjF3YjI1bGJuUW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkliMjFsSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwSUh0Y2JseHVmVnh1SWwxOSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlIChyb290fHBhZ2UpXFxcXC4oeG1sfGNzc3xqc3x0c3xzY3NzKSRcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJcbiAgICAgICAgICAgIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MtcmVndWxhclwiKSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGhtclVwZGF0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG1yXCIpLmhtclVwZGF0ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2luaXRpYWxIbXJVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgZ2xvYmFsLl9faG1yU3luY0JhY2t1cCA9IGdsb2JhbC5fX29uTGl2ZVN5bmM7XG5cbiAgICAgICAgICAgIGdsb2JhbC5fX29uTGl2ZVN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCA9IGZ1bmN0aW9uKHsgdHlwZSwgcGF0aCB9ID0ge30pIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsLl9faW5pdGlhbEhtclVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5fX2htclN5bmNCYWNrdXAoeyB0eXBlLCBwYXRoIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaG1yVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLl9faW5pdGlhbEhtclVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvKHJvb3R8cGFnZSlcXC4oeG1sfGNzc3xqc3x0c3xzY3NzKSQvKTtcbiAgICAgICAgICAgIGdsb2JhbC5yZWdpc3RlcldlYnBhY2tNb2R1bGVzKGNvbnRleHQpO1xuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIGltcG9ydCBOYXRpdmVzY3JpcHRHbGltbWVyLCB7IFJlc29sdmVyLCBSZXNvbHZlckRlbGVnYXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdsaW1tZXInO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbSc7XG5jb25zdCByZXNvbHZlckRlbGVnYXRlID0gbmV3IFJlc29sdmVyRGVsZWdhdGUoKTtcbmNvbnN0IHJlc29sdmVyID0gbmV3IFJlc29sdmVyKCk7XG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKSB7XG4gICAgbGV0IHRlbXBsYXRlc0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInRlbXBsYXRlcy5qc29uXCIpO1xuICAgIGxldCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNGaWxlLnJlYWRUZXh0U3luYygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBUZW1wbGF0ZXM6ICR7dGVtcGxhdGVzfWApO1xuICAgIEpTT04ucGFyc2UodGVtcGxhdGVzKS5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgICAgcmVzb2x2ZXJEZWxlZ2F0ZS5yZWdpc3RlckNvbXBvbmVudCh0ZW1wbGF0ZS5uYW1lLCB0ZW1wbGF0ZS5oYW5kbGUsIHRlbXBsYXRlLnNvdXJjZSwgdGVtcGxhdGUuY2FwYWJpbGl0aWVzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZENvbXBvbmVudHMoYXBwRm9sZGVyKSB7XG4gICAgbGV0IGNvbXBvbmVudHNGaWxlID0gYXBwRm9sZGVyLmdldEZpbGUoXCJjb21wb25lbnRzLmpzb25cIik7XG4gICAgbGV0IGNvbXBvbmVudHMgPSBjb21wb25lbnRzRmlsZS5yZWFkVGV4dFN5bmMoKTtcbiAgICBjb25zb2xlLmxvZyhgQWJvdXQgdG8gcmVzb2x2ZSByZXF1aXJlYCk7XG4gICAgSlNPTi5wYXJzZShjb21wb25lbnRzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBYm91dCB0byByZXNvbHZlIHJlcXVpcmVgKTtcbiAgICAgICAgY29uc3QgY2xhc3NGaWxlID0gcmVxdWlyZShgLi4vc3JjL3VpL2NvbXBvbmVudHMvJHtjb21wb25lbnQubmFtZX0vY29tcG9uZW50LnRzYCk7XG4gICAgICAgIHJlc29sdmVyLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjbGFzc0ZpbGUuZGVmYXVsdCk7XG4gICAgfSk7XG59XG4vLyBmdW5jdGlvbiByZXF1aXJlQWxsKHIpIHsgci5rZXlzKCkuZm9yRWFjaChyKTsgfVxuLy8gcmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4uL3NyYy91aS9jb21wb25lbnRzLycsIHRydWUsIC9jb21wb25lbnQudHMkLykpO1xudHJ5IHtcbiAgICBsZXQgYXBwRm9sZGVyID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICBhZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKTtcbiAgICBhZGRDb21wb25lbnRzKGFwcEZvbGRlcik7XG4gICAgY29uc3QgYXBwID0gbmV3IE5hdGl2ZXNjcmlwdEdsaW1tZXIoJ0RlbW8nLCByZXNvbHZlckRlbGVnYXRlLCByZXNvbHZlcik7XG4gICAgYXBwLnJlbmRlcigpO1xufVxuY2F0Y2ggKGVycm9ycykge1xuICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEJ3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZWEJ3TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4UlFVRlJMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNUVUZCVFN4elFrRkJjMElzUTBGQlF6dEJRVU4yUml4UFFVRlBMRVZCUVVVc1dVRkJXU3hGUVVGRkxFMUJRVTBzT0VKQlFUaENMRU5CUVVNN1FVRkZOVVFzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxHZENRVUZuUWl4RlFVRkZMRU5CUVVNN1FVRkRhRVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJRenRCUVVWb1F5eHpRa0ZCYzBJc1UwRkJVenRKUVVNelFpeEpRVUZKTEdGQlFXRXNSMEZCUnl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1NVRkRlRVFzU1VGQlNTeFRRVUZUTEVkQlFVY3NZVUZCWVN4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8wbEJRemRETERCRFFVRXdRenRKUVVNeFF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTnlReXhuUWtGQlowSXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03U1VGREwwY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRVQ3hEUVVGRE8wRkJSVVFzZFVKQlFYVkNMRk5CUVZNN1NVRkROVUlzU1VGQlNTeGpRVUZqTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMGxCUXpGRUxFbEJRVWtzVlVGQlZTeEhRVUZITEdOQlFXTXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRenRKUVVNdlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMREJDUVVFd1FpeERRVUZETEVOQlFVTTdTVUZEZUVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3VVVGRGRrTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXd3UWtGQk1FSXNRMEZCUXl4RFFVRkRPMUZCUTNoRExFMUJRVTBzVTBGQlV5eEhRVUZITEU5QlFVOHNRMEZCUXl4M1FrRkJkMElzVTBGQlV5eERRVUZETEVsQlFVa3NaVUZCWlN4RFFVRkRMRU5CUVVNN1VVRkRha1lzVVVGQlVTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJRMnhGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTFBc1EwRkJRenRCUVVWRUxHdEVRVUZyUkR0QlFVTnNSQ3dyUlVGQkswVTdRVUZGTDBVc1NVRkJTU3hEUVVGRE8wbEJRMFFzU1VGQlNTeFRRVUZUTEVkQlFVY3NXVUZCV1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRekZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVONFFpeGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4dFFrRkJiVUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdTVUZEZUVVc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzBGQlEycENMRU5CUVVNN1FVRkJReXhMUVVGTExFTkJRVUVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTjRRaXhEUVVGRElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFNWhkR2wyWlhOamNtbHdkRWRzYVcxdFpYSXNJSHNnVW1WemIyeDJaWElzSUZKbGMyOXNkbVZ5UkdWc1pXZGhkR1VnZlNCbWNtOXRJQ2R1WVhScGRtVnpZM0pwY0hRdFoyeHBiVzFsY2ljN1hHNXBiWEJ2Y25RZ2V5QnJibTkzYmtadmJHUmxjbk1nZlNCbWNtOXRJQ2QwYm5NdFkyOXlaUzF0YjJSMWJHVnpMMlpwYkdVdGMzbHpkR1Z0Snp0Y2JseHVZMjl1YzNRZ2NtVnpiMngyWlhKRVpXeGxaMkYwWlNBOUlHNWxkeUJTWlhOdmJIWmxja1JsYkdWbllYUmxLQ2s3WEc1amIyNXpkQ0J5WlhOdmJIWmxjaUE5SUc1bGR5QlNaWE52YkhabGNpZ3BPMXh1WEc1bWRXNWpkR2x2YmlCaFpHUlVaVzF3YkdGMFpYTW9ZWEJ3Um05c1pHVnlLU0I3WEc0Z0lDQWdiR1YwSUhSbGJYQnNZWFJsYzBacGJHVWdQU0JoY0hCR2IyeGtaWEl1WjJWMFJtbHNaU2hjSW5SbGJYQnNZWFJsY3k1cWMyOXVYQ0lwTzF4dUlDQWdJR3hsZENCMFpXMXdiR0YwWlhNZ1BTQjBaVzF3YkdGMFpYTkdhV3hsTG5KbFlXUlVaWGgwVTNsdVl5Z3BPMXh1SUNBZ0lDOHZJR052Ym5OdmJHVXViRzluS0dCVVpXMXdiR0YwWlhNNklDUjdkR1Z0Y0d4aGRHVnpmV0FwTzF4dUlDQWdJRXBUVDA0dWNHRnljMlVvZEdWdGNHeGhkR1Z6S1M1bWIzSkZZV05vS0hSbGJYQnNZWFJsSUQwK0lIdGNiaUFnSUNBZ0lDQWdjbVZ6YjJ4MlpYSkVaV3hsWjJGMFpTNXlaV2RwYzNSbGNrTnZiWEJ2Ym1WdWRDaDBaVzF3YkdGMFpTNXVZVzFsTENCMFpXMXdiR0YwWlM1b1lXNWtiR1VzSUhSbGJYQnNZWFJsTG5OdmRYSmpaU3dnZEdWdGNHeGhkR1V1WTJGd1lXSnBiR2wwYVdWektUdGNiaUFnSUNCOUtUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1lXUmtRMjl0Y0c5dVpXNTBjeWhoY0hCR2IyeGtaWElwSUh0Y2JpQWdJQ0JzWlhRZ1kyOXRjRzl1Wlc1MGMwWnBiR1VnUFNCaGNIQkdiMnhrWlhJdVoyVjBSbWxzWlNoY0ltTnZiWEJ2Ym1WdWRITXVhbk52Ymx3aUtUdGNiaUFnSUNCc1pYUWdZMjl0Y0c5dVpXNTBjeUE5SUdOdmJYQnZibVZ1ZEhOR2FXeGxMbkpsWVdSVVpYaDBVM2x1WXlncE8xeHVJQ0FnSUdOdmJuTnZiR1V1Ykc5bktHQkJZbTkxZENCMGJ5QnlaWE52YkhabElISmxjWFZwY21WZ0tUdGNiaUFnSUNCS1UwOU9MbkJoY25ObEtHTnZiWEJ2Ym1WdWRITXBMbVp2Y2tWaFkyZ29ZMjl0Y0c5dVpXNTBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29ZRUZpYjNWMElIUnZJSEpsYzI5c2RtVWdjbVZ4ZFdseVpXQXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmpiR0Z6YzBacGJHVWdQU0J5WlhGMWFYSmxLR0F1TGk5emNtTXZkV2t2WTI5dGNHOXVaVzUwY3k4a2UyTnZiWEJ2Ym1WdWRDNXVZVzFsZlM5amIyMXdiMjVsYm5RdWRITmdLVHRjYmlBZ0lDQWdJQ0FnY21WemIyeDJaWEl1Y21WbmFYTjBaWEpEYjIxd2IyNWxiblFvWTI5dGNHOXVaVzUwTG01aGJXVXNJR05zWVhOelJtbHNaUzVrWldaaGRXeDBLVHRjYmlBZ0lDQjlLVHRjYm4xY2JseHVMeThnWm5WdVkzUnBiMjRnY21WeGRXbHlaVUZzYkNoeUtTQjdJSEl1YTJWNWN5Z3BMbVp2Y2tWaFkyZ29jaWs3SUgxY2JpOHZJSEpsY1hWcGNtVkJiR3dvY21WeGRXbHlaUzVqYjI1MFpYaDBLQ2N1TGk5emNtTXZkV2t2WTI5dGNHOXVaVzUwY3k4bkxDQjBjblZsTENBdlkyOXRjRzl1Wlc1MExuUnpKQzhwS1R0Y2JseHVkSEo1SUh0Y2JpQWdJQ0JzWlhRZ1lYQndSbTlzWkdWeUlEMGdhMjV2ZDI1R2IyeGtaWEp6TG1OMWNuSmxiblJCY0hBb0tUdGNiaUFnSUNCaFpHUlVaVzF3YkdGMFpYTW9ZWEJ3Um05c1pHVnlLVHRjYmlBZ0lDQmhaR1JEYjIxd2IyNWxiblJ6S0dGd2NFWnZiR1JsY2lrN1hHNGdJQ0FnWTI5dWMzUWdZWEJ3SUQwZ2JtVjNJRTVoZEdsMlpYTmpjbWx3ZEVkc2FXMXRaWElvSjBSbGJXOG5MQ0J5WlhOdmJIWmxja1JsYkdWbllYUmxMQ0J5WlhOdmJIWmxjaWs3WEc0Z0lDQWdZWEJ3TG5KbGJtUmxjaWdwTzF4dWZTQmpZWFJqYUNobGNuSnZjbk1wSUh0Y2JpQWdJQ0JqYjI1emIyeGxMbXh2WnlobGNuSnZjbk1wTzF4dWZWeHVJbDE5XG4gICAgXG4gICAgICAgIFxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9