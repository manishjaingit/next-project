module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/components/Common/PageHeader.js":
/*!*********************************************!*\
  !*** ./src/components/Common/PageHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class PageHeader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let {
      pageTitle,
      breadcrumbTextOne,
      breadcrumbTextTwo,
      breadcrumbUrl
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "page-title-area page-title-bg2"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "page-title-content"
    }, __jsx("h2", null, pageTitle), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: breadcrumbUrl
    }, __jsx("a", null, breadcrumbTextOne))), __jsx("li", null, breadcrumbTextTwo)))))), __jsx("div", {
      className: "shape-img2"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/shape2.svg */ "./src/images/shape/shape2.svg"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img3"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/shape3.svg */ "./src/images/shape/shape3.svg"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img4"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/shape4.png */ "./src/images/shape/shape4.png"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img5"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/shape5.png */ "./src/images/shape/shape5.png"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img7"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/shape7.png */ "./src/images/shape/shape7.png"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img8"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/shape8.png */ "./src/images/shape/shape8.png"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img9"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/shape9.png */ "./src/images/shape/shape9.png"),
      alt: "image"
    })), __jsx("div", {
      className: "shape-img10"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/shape/shape10.png */ "./src/images/shape/shape10.png"),
      alt: "image"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ }),

/***/ "./src/components/Layout/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let currentYear = new Date().getFullYear();
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      className: "footer-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Contact Info"), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx("i", {
      className: "flaticon-phone-call"
    }), __jsx("span", null, "Mon to Fri : 10:00AM - 06:00PM"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "+123 54214 578 52"))), __jsx("li", null, __jsx("i", {
      className: "flaticon-email"
    }), __jsx("span", null, "Do You Have a Question?"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "example@crm.city"))), __jsx("li", null, __jsx("i", {
      className: "flaticon-social-media"
    }), __jsx("span", null, "Socials Network"), __jsx("ul", {
      className: "social"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-facebook-f"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-linkedin"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "fab fa-youtube"
    }))))))))), __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget pl-5"
    }, __jsx("h3", null, "Quick Links"), __jsx("ul", {
      className: "footer-quick-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, "Home"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about2"
    }, __jsx("a", null, "About"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog"
    }, __jsx("a", null, "Blog"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Contact"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Agency"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Digital"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Support"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shop"
    }, __jsx("a", null, "Shop"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Agency"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Digital"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Support"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shop"
    }, __jsx("a", {
      href: "#"
    }, "Shop"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Digital"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/conatct"
    }, __jsx("a", null, "Support")))))), __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3"
    }, __jsx("div", {
      className: "single-footer-widget pl-5"
    }, __jsx("h3", null, "Instagram"), __jsx("ul", {
      className: "footer-instagram-post"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram-image/insta-img1.jpg */ "./src/images/instagram-image/insta-img1.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram-image/insta-img2.jpg */ "./src/images/instagram-image/insta-img2.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram-image/insta-img3.jpg */ "./src/images/instagram-image/insta-img3.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram-image/insta-img4.jpg */ "./src/images/instagram-image/insta-img4.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram-image/insta-img5.jpg */ "./src/images/instagram-image/insta-img5.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram-image/insta-img6.jpg */ "./src/images/instagram-image/insta-img6.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram-image/insta-img7.jpg */ "./src/images/instagram-image/insta-img7.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram-image/insta-img8.jpg */ "./src/images/instagram-image/insta-img8.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram-image/insta-img1.jpg */ "./src/images/instagram-image/insta-img1.jpg"),
      alt: "image"
    })))))))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-sm-6 col-md-6"
    }, __jsx("p", null, "Copyright @", currentYear, " CRM-City. All rights reserved")), __jsx("div", {
      className: "col-lg-6 col-sm-6 col-md-6"
    }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/terms-and-conditions"
    }, __jsx("a", null, "Terms & Conditions"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/privacy-policy"
    }, __jsx("a", null, "Privacy Policy"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Layout/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./src/utils/ActiveLink.js");
/* harmony import */ var _SidebarModal_SidebarModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SidebarModal/SidebarModal */ "./src/components/SidebarModal/SidebarModal.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      sidebarModal: false
    });

    _defineProperty(this, "toggleModal", () => {
      this.setState({
        sidebarModal: !this.state.sidebarModal
      });
    });

    _defineProperty(this, "state", {
      searchForm: false
    });

    _defineProperty(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false,
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      products
    } = this.props;
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      id: "navbar",
      className: "navbar-area"
    }, __jsx("div", {
      className: "adani-nav"
    }, __jsx("div", {
      className: "container"
    }, __jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/"
    }, __jsx("a", {
      className: "navbar-brand"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/logo.png */ "./src/images/logo.png"),
      alt: "logo"
    }))), __jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, __jsx("span", {
      className: "icon-bar top-bar"
    }), __jsx("span", {
      className: "icon-bar middle-bar"
    }), __jsx("span", {
      className: "icon-bar bottom-bar"
    })), __jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, __jsx("ul", {
      className: "navbar-nav"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/about"
    }, __jsx("a", {
      className: "nav-link"
    }, "About Us"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/services",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Services"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/projects"
    }, __jsx("a", {
      className: "nav-link"
    }, "Projects"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/blog"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Pages ", __jsx("i", {
      className: "fas fa-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/team",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Team"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/features",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Features"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/pricing",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Pricing"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/partner",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Partner"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/login",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Login"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/signup",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Signup"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/faq",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "FAQ"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/error",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "404 Error Page"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/contact",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Contact")))), __jsx("div", {
      className: "others-options"
    }, __jsx("div", {
      className: "option-item"
    }, __jsx("i", {
      onClick: this.handleSearchForm,
      className: "search-btn flaticon-search",
      style: {
        display: this.state.searchForm ? 'none' : 'block'
      }
    }), __jsx("i", {
      onClick: this.handleSearchForm,
      className: `close-btn flaticon-close ${this.state.searchForm ? 'active' : ''}`
    }), __jsx("div", {
      className: "search-overlay search-popup",
      style: {
        display: this.state.searchForm ? 'block' : 'none'
      }
    }, __jsx("div", {
      className: "search-box"
    }, __jsx("form", {
      className: "search-form"
    }, __jsx("input", {
      className: "search-input",
      name: "search",
      placeholder: "Search",
      type: "text"
    }), __jsx("button", {
      className: "search-button",
      type: "submit"
    }, __jsx("i", {
      className: "fas fa-search"
    })))))), __jsx("div", {
      className: "burger-menu",
      onClick: this.toggleModal
    }, __jsx("span", null), __jsx("span", null), __jsx("span", null)))))))), __jsx(_SidebarModal_SidebarModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: this.toggleModal,
      active: this.state.sidebarModal ? 'active' : ''
    }));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Navbar)); // export default Navbar;

/***/ }),

/***/ "./src/components/SidebarModal/SidebarModal.js":
/*!*****************************************************!*\
  !*** ./src/components/SidebarModal/SidebarModal.js ***!
  \*****************************************************/
/*! exports provided: SidebarModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModal", function() { return SidebarModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SidebarModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: `sidebar-modal ${this.props.active}`
    }, __jsx("div", {
      className: "sidebar-modal-inner"
    }, __jsx("div", {
      className: "sidebar-about-area"
    }, __jsx("div", {
      className: "title"
    }, __jsx("h2", null, "About Us"), __jsx("p", null, "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration."))), __jsx("div", {
      className: "sidebar-instagram-feed"
    }, __jsx("h2", null, "Instagram"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/blog-image1.jpg */ "./src/images/blog-image/blog-image1.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/blog-image2.jpg */ "./src/images/blog-image/blog-image2.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/blog-image3.jpg */ "./src/images/blog-image/blog-image3.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/blog-image4.jpg */ "./src/images/blog-image/blog-image4.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/blog-image5.jpg */ "./src/images/blog-image/blog-image5.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/blog-image6.jpg */ "./src/images/blog-image/blog-image6.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/blog-image7.jpg */ "./src/images/blog-image/blog-image7.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-image/blog-image8.jpg */ "./src/images/blog-image/blog-image8.jpg"),
      alt: "image"
    })))))), __jsx("div", {
      className: "sidebar-contact-area"
    }, __jsx("div", {
      className: "contact-info"
    }, __jsx("div", {
      className: "contact-info-content"
    }, __jsx("h2", null, __jsx("span", {
      className: "main-color"
    }, "+088 130 629 8615"), __jsx("span", {
      className: "or"
    }, "OR"), __jsx("span", null, "example@crm.city")), __jsx("ul", {
      className: "social"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-youtube"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-facebook-f"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-linkedin-in"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })))))))), __jsx("span", {
      onClick: this.closeModal,
      className: "close-btn sidebar-modal-close-btn"
    }, __jsx("i", {
      className: "flaticon-close"
    })))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (SidebarModal);

/***/ }),

/***/ "./src/components/TermsAndConditions/TermsAndConditionsContent.js":
/*!************************************************************************!*\
  !*** ./src/components/TermsAndConditions/TermsAndConditionsContent.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class TermsAndConditionsContent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "main-content ptb-80"
    }, __jsx("div", {
      className: "container"
    }, __jsx("h3", null, "What is Lorem Ipsum?"), __jsx("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), __jsx("h3", null, "Why do we use it?"), __jsx("p", null, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), __jsx("h3", null, "Where does it come from?"), __jsx("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."), __jsx("p", null, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids."), __jsx("h3", null, "Where can I get some?"), __jsx("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."), __jsx("p", null, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TermsAndConditionsContent);

/***/ }),

/***/ "./src/images/blog-image/blog-image1.jpg":
/*!***********************************************!*\
  !*** ./src/images/blog-image/blog-image1.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/images/blog-image/blog-image2.jpg":
/*!***********************************************!*\
  !*** ./src/images/blog-image/blog-image2.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/images/blog-image/blog-image3.jpg":
/*!***********************************************!*\
  !*** ./src/images/blog-image/blog-image3.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/images/blog-image/blog-image4.jpg":
/*!***********************************************!*\
  !*** ./src/images/blog-image/blog-image4.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/images/blog-image/blog-image5.jpg":
/*!***********************************************!*\
  !*** ./src/images/blog-image/blog-image5.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/images/blog-image/blog-image6.jpg":
/*!***********************************************!*\
  !*** ./src/images/blog-image/blog-image6.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/images/blog-image/blog-image7.jpg":
/*!***********************************************!*\
  !*** ./src/images/blog-image/blog-image7.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/images/blog-image/blog-image8.jpg":
/*!***********************************************!*\
  !*** ./src/images/blog-image/blog-image8.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/images/instagram-image/insta-img1.jpg":
/*!***************************************************!*\
  !*** ./src/images/instagram-image/insta-img1.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta-img1-7b4e20964a1707e2841f2c33b1d16549.jpg";

/***/ }),

/***/ "./src/images/instagram-image/insta-img2.jpg":
/*!***************************************************!*\
  !*** ./src/images/instagram-image/insta-img2.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta-img2-4af8679a191573268d3d3b7e92d838b5.jpg";

/***/ }),

/***/ "./src/images/instagram-image/insta-img3.jpg":
/*!***************************************************!*\
  !*** ./src/images/instagram-image/insta-img3.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta-img3-ab02115b29b1ef52664e2a87857e1ad6.jpg";

/***/ }),

/***/ "./src/images/instagram-image/insta-img4.jpg":
/*!***************************************************!*\
  !*** ./src/images/instagram-image/insta-img4.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta-img4-e342ed49c7cbef1f3e514767870c92e8.jpg";

/***/ }),

/***/ "./src/images/instagram-image/insta-img5.jpg":
/*!***************************************************!*\
  !*** ./src/images/instagram-image/insta-img5.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta-img5-7a9b28eaa9ac5387cc46ca3a7950c09b.jpg";

/***/ }),

/***/ "./src/images/instagram-image/insta-img6.jpg":
/*!***************************************************!*\
  !*** ./src/images/instagram-image/insta-img6.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta-img6-3af23656f075642e3f5a0f96eb88a885.jpg";

/***/ }),

/***/ "./src/images/instagram-image/insta-img7.jpg":
/*!***************************************************!*\
  !*** ./src/images/instagram-image/insta-img7.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta-img7-3ab007c13458680b6076878295e09ec0.jpg";

/***/ }),

/***/ "./src/images/instagram-image/insta-img8.jpg":
/*!***************************************************!*\
  !*** ./src/images/instagram-image/insta-img8.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta-img8-7b4e20964a1707e2841f2c33b1d16549.jpg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/shape/shape10.png":
/*!**************************************!*\
  !*** ./src/images/shape/shape10.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUZFRDkxOEVDRkFCMTFFOTg3MEZCQzAwQURCMTA1MEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUZFRDkxOERDRkFCMTFFOTg3MEZCQzAwQURCMTA1MEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1ZWI4ZmZhLWQ4MzctNjE0Ni1hZjg4LWFmYjU5NDgzYTQyYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7FL9NdAAAAi0lEQVR42mJkgAJphXpxIOUCxGpAzA3EX4H4FhDvefqg8SVIzf///xkYoYr1gFQUELMwYII/QLwMqOkSSAMT1GRcihmg4lFQdQxMUGfgUoysyQWmQY2BOKAG08BNpAZumIavRGr4CtNwi0gNt2Aa9kCDDh/4A1XHwASNlGV4NMHiARx5jKTGNECAAQCHmTEL8KnfYwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/shape/shape2.svg":
/*!*************************************!*\
  !*** ./src/images/shape/shape2.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIxMDAlIiB4Mj0iNTAlIiB5Mj0iLTQ5Ljg5MSUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBFOTJCIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0NDRkZBOCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoMTMyIDgxLjYyNyAxNjYuMTY0KSIgZD0iTTIgMzIzbDEwLjU5OCAxM0wyMyAzMjN6IiBzdHJva2U9InVybCgjYSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjY1OSIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/images/shape/shape3.svg":
/*!*************************************!*\
  !*** ./src/images/shape/shape3.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmb250LXNpemU6IDI1cHg7CiAgICAgICAgZmlsbDogIzI3ZWFjODsKICAgICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlOwogICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDx0ZXh0IGlkPSJfIiBkYXRhLW5hbWU9IisiIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40MzcsIDEuNDM0LCAtMS40MzcsIDEuNDM0LCAtMC44MzIsIDIzLjA2NikiPjx0c3BhbiB4PSIwIj4rPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/images/shape/shape4.png":
/*!*************************************!*\
  !*** ./src/images/shape/shape4.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjFBMTIwODNDRkFCMTFFOUE5RjdDRUZCOTc4RDMzQ0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjFBMTIwODJDRkFCMTFFOUE5RjdDRUZCOTc4RDMzQ0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1ZWI4ZmZhLWQ4MzctNjE0Ni1hZjg4LWFmYjU5NDgzYTQyYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ycCA1AAAA+ElEQVR42qSTvQ7BYBSGv3YRYiQGJG5AwtBZuRBxA0azmI1uQFxI6dxBEzcgwSCMQiziOcmpdEBbTvL0JO37nu/nnFomFtXG2CY50IIa5OEGewghOGwnj0hvxYwV0gDKIIIdXKAIdZDCJ5hT4Pgyq3EIOfDBQ3CNFS6QetCBO8ykgKVbHUEJFrzcmA+Btknqwxmm0Rllq/43o4R+91XviLmtZ/RMuvBU3xJzVS4nfsaE1a96mTVb23Ex2UL0eVv7WMxoFv1NzAfpo7YjMVQnfd+Lea0D0E25alf1oTwCnRxX+2gS+uyqPng3YStYppqwv2f717/qKcAAAANl1ADqJKUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/images/shape/shape5.png":
/*!*************************************!*\
  !*** ./src/images/shape/shape5.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTA2NjJDRTJDRkFCMTFFOTkxRDhENjk4NzU3Q0E0NTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTA2NjJDRTFDRkFCMTFFOTkxRDhENjk4NzU3Q0E0NTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1ZWI4ZmZhLWQ4MzctNjE0Ni1hZjg4LWFmYjU5NDgzYTQyYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7n29L9AAABJUlEQVR42qyUsUoDURBF304WrNzCFCJYJWWK9Kn3HwRBsEgpFn6IhVhaCIKQf9h6+xRbJlUgWMQiVgElnoGrhCfortmBwyve3LvDvJlNQxTr88uEYwBD6EP2dQUzmEKVPT9ud3VJZHLKcQYn8A5zWOm6Cz1IYQkTzBY/jDDxKi7gAwooSdxEHzrgGEEOHXgip/o2UiVX8AYPXL6EX4L8Y44xHMK9V5aoJzdwBHd/mURm1/AKt6bGek+KuiYeyi2kHZhexxtbhuZRSjs0PfE8bmzNqjZ62b5pTlbh/+HazEJLYZrY7h4erl2bxr6nYWsU0vi0z0y7k2pim8ZI2qkbVdqdXEMWGgxkLm1l2uKJdmdcx2xnRTpa3m27S9vqb2TfH9unAAMAznd8GeFGdb8AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/images/shape/shape7.png":
/*!*************************************!*\
  !*** ./src/images/shape/shape7.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABdCAYAAABTl8MxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjk4RkEyRkZDRkM1MTFFOUJFMzhBOEY1RjAxMkIxMjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjk4RkEyRkVDRkM1MTFFOUJFMzhBOEY1RjAxMkIxMjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4MDFFNDFEQ0ZDMjExRTlBOTE4Q0Y1MUEyOUIxMTgzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4MDFFNDFFQ0ZDMjExRTlBOTE4Q0Y1MUEyOUIxMTgzIi8+IDwvcmRmOkRlc2Ny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"

/***/ }),

/***/ "./src/images/shape/shape8.png":
/*!*************************************!*\
  !*** ./src/images/shape/shape8.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTE0RUE5NjhDRkMzMTFFOTg5QzA4NDRGOEFBNDlBQkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTE0RUE5NjdDRkMzMTFFOTg5QzA4NDRGOEFBNDlBQkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1ZWI4ZmZhLWQ4MzctNjE0Ni1hZjg4LWFmYjU5NDgzYTQyYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5T/WebAAAFT0lEQVR42uyby3PjRBDGW5LtxI84tuNNNmQ3BNilIIdAcdgDXDhQXPh7KR4n4AYX2BRUQbHLPsKjNomfsp3Er6E7GsfyWLLlbMuSZXfVlLJrS/b89PU3PaOxBksYX/7UoUMGWwFbXrbyF4/ix27nxJYEDPUzJ4EM4MSVt4lJ19AiCiatQNnw2NevUFXdSCoKoRhSLfY0StzycnTuWSRAIZiUopYsY2YUFhKUVMumopY1Hz8yvxAehWCSNiAFCWme35H86Wv0KREaRSEUXYKwg1kP+F7FZNlgBgYKwaw7qEUPYcYX5gZKqiWrmG5yQcYL+q4vfAGFYNYUteRCqhavinp9M0comoNaUhGrWb9BQ2/PpCgEk1CgkFqMiM96qJ+vXEFJtWwoYNJLOG8ujIFCONuKWgItQrdzGrx3T4fHz/pQa4ogFTUSZLgfYHuIrRg0pExSg48eGNfH+8VAa+GczK4RUJWw6P3oLR10bQgtwBhMnUZAlcMAabegQS49hBMLfrjIq2YeCkU9fMNb2ZVa06CwgVBxopFKaKDjaS9O+/BfWfgB6pkdVA1bP8gCcQcNXE013fbPTVTa3bzV0uvjKZnPGNC66nGb/0jhqWNh1ZewAouDnfF7REp5d0+HT48M+OTQgHd2dUdI11Uz/vfhPvt9Tsr56Y1HQZA+RZ3fymqOKfYA05GOnvIk43wdLp8agArMp/bv8HXuYJtdVYVQKIpSZq/I1zkqVplHy1FFoU9d4aE1b1B3NjVIxHjBEyzG2JRLRiMj3dzTr9vjv2aR16d0Oa0bmbJQ+u35AaNUBzg3seExjqnx8fvWa/UW/1zOXrQypl855peinp8C/H6CdUdz9BEseYgQVpoQxMalgMw6X+fSWI/RtQXfPSBDf2pPPbzfwJYMfazOqs3x59QEp2ZzQwLJOkCApVpuQ78BJR/RVPi8wv01SsEhKP70MwzW9Fujh67q2MwGKpsC1xHNb1CdLv+8TwXFWk9tuaiqZANFhs7oJ5juwo/RtOCboialn3kBcNmx/u71LUPniIs2wK/P+74suYyAQp+ir9+Yh0+VmNKPzjyrCfjlrx58f9z1peTAyDi5CKkqw5J6G9YoJFx8am9rOPLdK842op7XBbyqUutDu+N7bWw4gSKfus9xdaqZaIGt0phs6NUpiiIPI6WUTAHnqJ5yQ1zDmmP03BTFauhOoMpYqfeFtUBntqyO0xoUQWmiZ5GPmRcCzxVQxdabL5gx+3MCRd0iMcdZJr4I6sm/6hqUlZadLhYpcQvYtz93r9M0YCCupd8YKCo8scAiVW1zGbq9kcKSCWffCXGcuC1ysIEi9Xz2ISxynKJ4qvoEUKuwLOhYXY9SQYkVJPgR1XThCkrutTaXGBLtDP4BOdxk1qSFWHpTdknACCmMErZ/7IC8gKLC880Ip1VF9pGOVbdfLHhVVFTCVMA0EMxMF5i4woX11Ofg7wZ4v9RStUGpTFOLp+nYlNfpg+6GHEzDDkWqhX3EXjRQXRuQgVo68/jgaaCC3jvVVNRi+qEWDlBVeRfnsWWx56CWdlikPPVxBRr6kU9lQksZiepBqYVDURR/YNuF2/9YcKCWmjISXS3SUOrpARiqip6WPoLZ16h+k3DqcsPawobnJ4Xyd7qH2HY8nkfG+11UKtbb/BaGUpC2FtOD60uw1tcPHN76EkE9jgqomUczORKd2cARrH2HlYgyRChee7sbgiNQLyM+V2TbMv0ErC3Yg2gjwMYK1LiqaBXwJKpq4lQUxVMYLh+vQE1QFc3L/o6ikXMriuJP6VVVWMXUOuvtKPbrfwEGAFtgxPhWjUiMAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/shape/shape9.png":
/*!*************************************!*\
  !*** ./src/images/shape/shape9.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAuCAYAAACxkOBzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUU1RTZBRkJDRkMzMTFFOThCNzZDMDU1QjdFNDQyMDkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUU1RTZBRkFDRkMzMTFFOThCNzZDMDU1QjdFNDQyMDkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1ZWI4ZmZhLWQ4MzctNjE0Ni1hZjg4LWFmYjU5NDgzYTQyYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vubQ2AAAD+UlEQVR42syZW0hUQRjHZ4+XMMWkvGSFGYZEFt3IhJAosAvRQwZFZVAUFFQQWT1Vz1HSQz0EdsceMiQyLEiki9qL+GDFZkh2Q7ubgZfMdd3+H30LwzCr65xzdveDP7Mzs2fmt3Pmm/lm1iNcsgctvjgkC6BFUB6UBSVztQ/6Dn2EvFDrxsKEwfHa9LgAmYhkHbQeSg3zsRGoEboP6J6IwAJ0IZK90DTDJoahu9BDQAdcgwXoZiSlIar7oE/QL87TdJgFZYb4/kvoIoCHHIcFaBm/etn8UDP0BHqnGyk8l46kGFoLpSjVndAZGdjjAOgGJDuU4g7oKjr6HGYbk5Fsg9ZoRrgi+EM9NkHJy09BcVLxM+g6OvAbtEejvA+ypOJqtFUnlMKJNkw/dI8C+pxH1G/SJp5rQnJFKS5FXxm2YGEroNlSvptBA3beFgM/looSoE12YUuU/E105HNocamG+qV8Mc1ry3AK0DqaLzsUQNudWgZ5N6uXiuKh5aYjO1/JN7uwYzcp+QJT2Fwl73WaFKP7E8kPqSjHFFbeTn1Ko05al/Q50xQ2Wd5K7a4AY5jsZAmmsPI6GifcMytkZgLWJ31OxeoQ7xLsVHmUTWG/KsFQrgtxMbHlSEXfTGE7lfxiF0Y1X/GNt6aw7RwoyzuM01NBjcBeGMHC+/8iaVHmVomDUyCHY4+g9dJabic2qFPyW9DJDAdAKXDZrzg/HXNGjWHxcDfHrkGbBJWjsyk2neqA6lhQg92oi+w2JJ9G6Ux1Gp3ONACl08IRqFAqHoUqMTAjTh1r5iA5CSUqp9R70CN0NBxGEL8MKtOciqvwfL0jZ7BdFT5P1bGEADqkKOwoTwV1u6SIrI0uNNBxv3S3QKfbAmglpHsTNfh+rSOnW4BuR0Kv7hoD0wgfhjLGuczwa36Uendwg08M9u8NAEq3LTs5+5QaB7AfwEn4vJXXSBN/eM2gXxy5kQFoEZKDmk4uAfg3v+Ysvj4q0twH6IKiNp7f7Y7ddQGU5uYJTaRFHZ4DrFdzOZfHms7Thna6AYiC6w98JBoMp3/PBEBz2OuTNNWXAdooXDYrTFC65jkeArQmEqBhwQI0hV99mqa6AaC1IkJmjQNK62E5lK2pbqVFW0TQrDFALfb6uZrqDvb+0ZiAhe2GlmrKKYA5D9BhEWGzQowqXQyv1lT18hI1IKJglgZ0ldDfYP+BzgK0R0TJLAV0ifj/n4BuT6dX3yWiaJYESo50SLNRBNiZ3ogom8Wg2bxEJWq+cwugLSIGzAJoGi/6uoCjDqD1IkYseOZJ19RRPHlHxJAR7DxN+atgUB1rsGqg+x66ANAREWNGsJW8K5F5edEfEjFo/wQYAC0WRQtRnugzAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/pages/terms-and-conditions.js":
/*!*******************************************!*\
  !*** ./src/pages/terms-and-conditions.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./src/components/Layout/Navbar.js");
/* harmony import */ var _components_Common_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/PageHeader */ "./src/components/Common/PageHeader.js");
/* harmony import */ var _components_TermsAndConditions_TermsAndConditionsContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TermsAndConditions/TermsAndConditionsContent */ "./src/components/TermsAndConditions/TermsAndConditionsContent.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout/Footer */ "./src/components/Layout/Footer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class TermsAndConditions extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_Common_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pageTitle: "Terms And Conditions",
      breadcrumbTextOne: "Home",
      breadcrumbUrl: "/",
      breadcrumbTextTwo: "Terms And Conditions"
    }), __jsx(_components_TermsAndConditions_TermsAndConditionsContent__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TermsAndConditions);

/***/ }),

/***/ "./src/utils/ActiveLink.js":
/*!*********************************!*\
  !*** ./src/utils/ActiveLink.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ 3:
/*!*************************************************!*\
  !*** multi ./src/pages/terms-and-conditions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\prxx\DICECRM\Website\src\pages\terms-and-conditions.js */"./src/pages/terms-and-conditions.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=terms-and-conditions.js.map