/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisibleControls; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class VisibleControls {
  constructor(triggers, visibleClass, enableElements) {
    _defineProperty(this, "_openElements", void 0);

    _defineProperty(this, "_visibleClass", void 0);

    _defineProperty(this, "_visibleElements", void 0);

    _defineProperty(this, "_currentVisibleElements", void 0);

    _defineProperty(this, "_visibles", void 0);

    this._openElements = triggers;
    this._visibles = new Map();
    this._visibleClass = visibleClass;
    this._visibleElements = enableElements;
    this._currentVisibleElements = [];
    this._openVisible = this._openVisible.bind(this);
    this._clearVisibles = this._clearVisibles.bind(this);

    this._setVisibleMethods();
  }

  _clearVisibles() {
    this._currentVisibleElements.forEach(visible => this._removeVisibleClass(visible));

    this._currentVisibleElements = [];
  }

  _setVisibleMethods() {
    this._visibleElements.forEach((visible, index) => {
      this._visibles.set(this._openElements[index], visible);
    });
  }

  _removeVisibleClass(element) {
    element.classList.remove(this._visibleClass);
  }

  _openVisible(visible) {
    visible.forEach(element => element.classList.add(this._visibleClass));

    this._currentVisibleElements.push(...visible);
  }

}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_control_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_control_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_control_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promo_control_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_js__ = __webpack_require__(6);






if (__WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getModal()) {
  const modalControl = new __WEBPACK_IMPORTED_MODULE_0__modal_control_js__["a" /* ModalControls */](__WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getModalTriggers(), __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getModalVisibleClass(), __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getModalParentClass(), __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getModalCloseButtons(), __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getModalClass());
}

if (__WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getService()) {
  const serviceControl = new __WEBPACK_IMPORTED_MODULE_1__service_control_js__["a" /* ServiceControl */](__WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getServiceTriggers(), __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getServiceVisibleClass(), __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getServiceParentClass());
}

if (__WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getHeader()) {
  const headerControl = new __WEBPACK_IMPORTED_MODULE_2__header_control_js__["a" /* HeaderControl */](__WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getHeaderTrigger(), __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getHeaderVisibleClass(), __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getHeaderParentClass());
}

if (__WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getPromo()) {
  const promoControl = new __WEBPACK_IMPORTED_MODULE_3__promo_control_js__["a" /* PromoControl */](__WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getPromoTriggers(), __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getPromoVisibleClass(), __WEBPACK_IMPORTED_MODULE_4__constants_js__["a" /* Constants */].getPromoParentElements());
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalControls; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visible_control_js__ = __webpack_require__(0);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ModalControls extends __WEBPACK_IMPORTED_MODULE_0__visible_control_js__["a" /* VisibleControls */] {
  constructor(triggers, visibleClass, enableElements, closeButtons, modalClass) {
    super(...arguments);

    _defineProperty(this, "_closeButtons", void 0);

    _defineProperty(this, "_modalClass", void 0);

    this._closeButtons = closeButtons;
    this._modalClass = modalClass;
    this._keyHandler = this._keyHandler.bind(this);
    document.addEventListener('click', this._openVisible);
    document.addEventListener('keydown', this._keyHandler);

    this._setHandlers(this._closeButtons, this._clearVisibles);
  }

  _closeCurrentVisible(target) {
    if (this._currentVisibleElements.length > 0 && !target.closest(this._modalClass)) {
      super._clearVisibles();
    }
  }

  _keyHandler(e) {
    if (e.key === 'Escape' && this._currentVisibleElements.length > 0) {
      super._clearVisibles();
    }
  }

  _openVisible(e) {
    const target = e.target;

    const modal = this._visibles.get(target);

    this._closeCurrentVisible(target);

    if (!modal) {
      return;
    }

    super._openVisible([modal]);
  }

  _setHandlers(elements, handler) {
    elements.forEach(element => element.addEventListener('click', handler));
  }

}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visible_control_js__ = __webpack_require__(0);


class ServiceControl extends __WEBPACK_IMPORTED_MODULE_0__visible_control_js__["a" /* VisibleControls */] {
  constructor(triggers, visibleClass, parentClass) {
    super(...arguments);
    document.addEventListener('click', this._openVisible);
    this._currentVisibleElements = [this._openElements[0].parentElement, document.querySelector('div.enabled')];
  }

  _openVisible(e) {
    const target = e.target;

    const visible = this._visibles.get(target);

    if (!visible) {
      return;
    }

    super._clearVisibles();

    super._openVisible([visible, target.parentElement]);
  }

}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visible_control_js__ = __webpack_require__(0);


class HeaderControl extends __WEBPACK_IMPORTED_MODULE_0__visible_control_js__["a" /* VisibleControls */] {
  constructor(triggers, visibleClass, parentClass) {
    super(...arguments);
    document.addEventListener('click', this._openVisible);
  }

  _openVisible(e) {
    const visible = this._visibles.get(e.target);

    if (!visible) {
      return;
    }

    if (this._currentVisibleElements.length > 0) {
      super._clearVisibles();

      return;
    }

    super._openVisible([...this._visibles.values()]);
  }

}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visible_control_js__ = __webpack_require__(0);
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _timer = /*#__PURE__*/new WeakMap();

var _timeout = /*#__PURE__*/new WeakMap();

class PromoControl extends __WEBPACK_IMPORTED_MODULE_0__visible_control_js__["a" /* VisibleControls */] {
  constructor(triggers, visibleClass, parentClass) {
    super(...arguments);

    _classPrivateFieldInitSpec(this, _timer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _timeout, {
      writable: true,
      value: void 0
    });

    document.addEventListener('click', this._openVisible);
    this._changeElements = this._changeElements.bind(this);

    _classPrivateFieldSet(this, _timer, null);

    _classPrivateFieldSet(this, _timeout, 3500);

    this._currentVisibleElements = [this._visibleElements[0], this._openElements[0]];

    this._onStart();
  }

  _changeElements() {
    const currentVisibleButton = this._currentVisibleElements.filter(item => item.classList.contains('promo__carousel-button'))[0];

    let currentIndex = this._openElements.indexOf(currentVisibleButton);

    if (currentIndex >= this._openElements.length - 1) {
      currentIndex = -1;
    }

    const nextElements = [this._openElements[currentIndex + 1], this._visibleElements[currentIndex + 1]];

    super._clearVisibles();

    super._openVisible(nextElements);
  }

  _onStart() {
    _classPrivateFieldSet(this, _timer, setInterval(this._changeElements, _classPrivateFieldGet(this, _timeout)));
  }

  _openVisible(e) {
    const target = e.target;

    const visible = this._visibles.get(target);

    clearInterval(_classPrivateFieldGet(this, _timer));

    _classPrivateFieldSet(this, _timer, null);

    if (!visible) {
      return;
    }

    super._clearVisibles();

    super._openVisible([visible, target]);

    this._onStart();
  }

}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
class Constants {
  static getModal() {
    return document.querySelector('.modal');
  }

  static getModalTriggers() {
    return [document.querySelector('.contacts__map-image'), document.querySelector('.contacts__send-message-button')];
  }

  static getModalVisibleClass() {
    return 'modal--visible';
  }

  static getModalParentClass() {
    return [...document.querySelectorAll('.modal')];
  }

  static getModalCloseButtons() {
    return [...document.querySelectorAll('.modal__close-button')];
  }

  static getModalClass() {
    return '.modal';
  }

  static getService() {
    return document.querySelector('.service');
  }

  static getServiceTriggers() {
    return [...document.querySelectorAll('.service__button')];
  }

  static getServiceVisibleClass() {
    return 'enabled';
  }

  static getServiceParentClass() {
    return [...document.querySelectorAll('.service__wrapper')];
  }

  static getHeader() {
    return document.querySelector('.page-header');
  }

  static getHeaderTrigger() {
    return [document.querySelector('.page-header__catalog-button')];
  }

  static getHeaderVisibleClass() {
    return 'enabled';
  }

  static getHeaderParentClass() {
    return [document.querySelector('.page-header__wrapper'), document.querySelector('.catalog__list')];
  }

  static getPromo() {
    return document.querySelector('.promo');
  }

  static getPromoTriggers() {
    return [...document.querySelectorAll('.promo__carousel-button')];
  }

  static getPromoVisibleClass() {
    return 'selected';
  }

  static getPromoParentElements() {
    return [...document.querySelectorAll('.promo__carousel-item')];
  }

}



/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map