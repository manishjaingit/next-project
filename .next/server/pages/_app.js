module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/M1s":
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "0W5w":
/***/ (function(module, exports) {



/***/ }),

/***/ "2uuQ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item6-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "3yXv":
/***/ (function(module, exports) {



/***/ }),

/***/ "7WzA":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item3-hover-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8XYx":
/***/ (function(module, exports) {



/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "EvGC":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item2-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "HP2+":
/***/ (function(module, exports) {



/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/assets/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("3yXv");

// EXTERNAL MODULE: ./src/assets/css/fontawesome.min.css
var fontawesome_min = __webpack_require__("NIZ/");

// EXTERNAL MODULE: ./src/assets/css/animate.min.css
var animate_min = __webpack_require__("0W5w");

// EXTERNAL MODULE: ./src/assets/css/flaticon.css
var flaticon = __webpack_require__("xtUe");

// EXTERNAL MODULE: ./src/assets/css/boxicons.min.css
var boxicons_min = __webpack_require__("Md1O");

// EXTERNAL MODULE: ./src/assets/css/style.css
var style = __webpack_require__("ZnJG");

// EXTERNAL MODULE: ./src/assets/css/responsive.css
var responsive = __webpack_require__("8XYx");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// EXTERNAL MODULE: ./node_modules/react-modal-video/scss/modal-video.scss
var modal_video = __webpack_require__("/M1s");

// EXTERNAL MODULE: ./node_modules/react-accessible-accordion/dist/fancy-example.css
var fancy_example = __webpack_require__("QYuT");

// EXTERNAL MODULE: ./node_modules/react-image-lightbox/style.css
var react_image_lightbox_style = __webpack_require__("Y9L4");

// EXTERNAL MODULE: ./node_modules/react-modal-video/css/modal-video.min.css
var modal_video_min = __webpack_require__("HP2+");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: ./src/store/actions/action-types/cart-actions.js
var cart_actions = __webpack_require__("i3aL");

// CONCATENATED MODULE: ./src/store/reducers/cartReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initState = {
  products: [{
    id: 1,
    title: "Novel Bunch",
    price: 455.50,
    image: __webpack_require__("witl"),
    imageHover: __webpack_require__("ZB4x")
  }, {
    id: 2,
    title: "Book Chicks",
    price: 541.50,
    image: __webpack_require__("EvGC"),
    imageHover: __webpack_require__("fP5y")
  }, {
    id: 3,
    title: "Book Divas",
    price: 140.50,
    image: __webpack_require__("eOi3"),
    imageHover: __webpack_require__("7WzA")
  }, {
    id: 4,
    title: "Book Smart",
    price: 600.00,
    image: __webpack_require__("xCKi"),
    imageHover: __webpack_require__("coV/")
  }, {
    id: 5,
    title: "Book Broads",
    price: 655.50,
    image: __webpack_require__("xZcs"),
    imageHover: __webpack_require__("WLyr")
  }, {
    id: 6,
    title: "Page Turners",
    price: 415.00,
    image: __webpack_require__("2uuQ"),
    imageHover: __webpack_require__("oIWD")
  }],
  addedItems: [],
  total: 0,
  shipping: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === cart_actions["d" /* ADD_TO_CART */]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === cart_actions["b" /* ADD_QUANTITY_WITH_NUMBER */]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.price * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === cart_actions["e" /* REMOVE_ITEM */]) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === cart_actions["a" /* ADD_QUANTITY */]) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === cart_actions["g" /* SUB_QUANTITY */]) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === cart_actions["c" /* ADD_SHIPPING */]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === cart_actions["f" /* RESET_CART */]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (initialState = initState) => {
  return Object(external_redux_["createStore"])(cartReducer, initialState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])()));
};
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// CONCATENATED MODULE: ./src/components/Shared/Loader.js
var __jsx = external_react_default.a.createElement;


class Loader_Loader extends external_react_["Component"] {
  render() {
    return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: `preloader ${this.props.loading ? '' : 'preloader-deactivate'}`
    }, __jsx("div", {
      className: "loader"
    }, __jsx("div", {
      className: "shadow"
    }), __jsx("div", {
      className: "box"
    }))));
  }

}

/* harmony default export */ var Shared_Loader = (Loader_Loader);
// CONCATENATED MODULE: ./src/components/Shared/GoTop.js

var GoTop_jsx = external_react_default.a.createElement;

function GoTop_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GoTop_GoTop extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    GoTop_defineProperty(this, "_isMounted", false);

    GoTop_defineProperty(this, "onScrollStep", () => {
      this._isMounted = true;

      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }

      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    });

    GoTop_defineProperty(this, "scrollToTop", () => {
      this._isMounted = true;
      let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
      this.setState({
        intervalId: intervalId
      });
    });

    GoTop_defineProperty(this, "renderGoTopIcon", () => {
      if (this.state.thePosition) {
        return GoTop_jsx("div", {
          className: "go-top",
          onClick: this.scrollToTop
        }, GoTop_jsx("i", {
          className: "fas fa-chevron-up"
        }));
      }
    });

    this.state = {
      intervalId: 0,
      thePosition: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({
          thePosition: true
        });
      } else {
        this.setState({
          thePosition: false
        });
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return GoTop_jsx(external_react_default.a.Fragment, null, this.renderGoTopIcon());
  }

}

/* harmony default export */ var Shared_GoTop = (GoTop_GoTop);
// CONCATENATED MODULE: ./src/pages/_app.js
var _temp;


var _app_jsx = external_react_default.a.createElement;

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(initStore)((_temp = class MyApp extends app_default.a {
  constructor(...args) {
    super(...args);

    _app_defineProperty(this, "state", {
      loading: true
    });
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    };
  } // Preloader


  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({
      loading: false
    }), 2000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(external_next_seo_["DefaultSeo"], {
      title: "CRM City - Next CRM Startups & Business Agency",
      description: "CRM City - Next CRM Startups & Business Agency. CRM Solution to provide your business High end solution",
      openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://crm.city/',
        site_name: 'CRM city - Next CRM Startups & Business Agency'
      }
    }), _app_jsx(external_react_redux_["Provider"], {
      store: store
    }, _app_jsx(Component, pageProps)), _app_jsx(Shared_Loader, {
      loading: this.state.loading
    }), _app_jsx(Shared_GoTop, {
      scrollStepInPx: "50",
      delayInMs: "16.66"
    }));
  }

}, _temp)));

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Md1O":
/***/ (function(module, exports) {



/***/ }),

/***/ "NIZ/":
/***/ (function(module, exports) {



/***/ }),

/***/ "QYuT":
/***/ (function(module, exports) {



/***/ }),

/***/ "WLyr":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item5-hover-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "Y9L4":
/***/ (function(module, exports) {



/***/ }),

/***/ "ZB4x":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item1-hover-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "ZnJG":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "coV/":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item4-hover-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "eOi3":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item3-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "fP5y":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item2-hover-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "i3aL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* unused harmony export ORDER_FORM */
/* unused harmony export CHECKOUT_CHARGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RESET_CART; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "oIWD":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item6-hover-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "witl":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item1-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "xCKi":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item4-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "xZcs":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/item5-22ed5bfc486887d8163d5fa8cbb609a6.jpg";

/***/ }),

/***/ "xtUe":
/***/ (function(module, exports) {



/***/ })

/******/ });