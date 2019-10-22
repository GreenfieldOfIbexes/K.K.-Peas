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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/harryshapiro/hrnyc/K.K.-Peas/src/index.js: Identifier 'store' has already been declared (7:7)\\n\\n\\u001b[0m \\u001b[90m  5 | \\u001b[39m\\u001b[36mimport\\u001b[39m newMainProduct from \\u001b[32m\\\"./actions/newMainProduct\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m\\u001b[36mimport\\u001b[39m { \\u001b[33mProvider\\u001b[39m } from \\u001b[32m\\\"react-redux\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 | \\u001b[39m\\u001b[36mimport\\u001b[39m store from \\u001b[32m\\\"./store.js\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39mstore\\u001b[33m.\\u001b[39mdispatch(newMainProduct(\\u001b[35m1\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:6420:17)\\n    at ScopeHandler.checkRedeclarationInScope (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:3776:12)\\n    at ScopeHandler.declareName (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:3742:12)\\n    at Object.checkLVal (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:8159:22)\\n    at Object.parseImportSpecifierLocal (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:11364:10)\\n    at Object.maybeParseDefaultImportSpecifier (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:11370:12)\\n    at Object.parseImport (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:11341:31)\\n    at Object.parseStatementContent (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:10107:27)\\n    at Object.parseStatement (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:10009:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:10585:25)\\n    at Object.parseBlockBody (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:10572:10)\\n    at Object.parseTopLevel (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:9940:10)\\n    at Object.parse (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:11447:17)\\n    at parse (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/parser/lib/index.js:11483:38)\\n    at parser (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)\\n    at normalizeFile (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/core/lib/transformation/normalize-file.js:102:11)\\n    at runSync (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/harryshapiro/hrnyc/K.K.-Peas/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });