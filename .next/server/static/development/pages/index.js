module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PostCard.tsx":
/*!*********************************!*\
  !*** ./components/PostCard.tsx ***!
  \*********************************/
/*! exports provided: PostCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCard", function() { return PostCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fecha */ "fecha");
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fecha__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/john/src/blog/components/PostCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PostCard = props => {
  const post = props.post;
  return __jsx("a", {
    className: 'postcard',
    href: `/${post.path}`,
    style: {
      textDecoration: 'inherit',
      color: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      height: '400px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      overflow: 'hidden',
      borderRadius: '2px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%' // marginBottom:48

    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, post.thumbnailPhoto && __jsx("div", {
    style: {
      background: `url(${post.thumbnailPhoto}) no-repeat center center`,
      backgroundSize: 'cover',
      width: '100%',
      flex: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      // padding: '15px 10px',
      display: 'flex',
      flexDirection: 'column'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("p", {
    style: {
      fontSize: 14,
      opacity: '0.6',
      marginBottom: 8,
      marginTop: 24
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, post.author, " | ", post.datePublished ? Object(fecha__WEBPACK_IMPORTED_MODULE_1__["format"])(new Date(post.datePublished), 'MMMM Do, YYYY') : ''), post.title && __jsx("h2", {
    className: "card-title",
    style: {
      margin: '0px 0px 6px 0px',
      padding: '0',
      fontSize: '27px',
      fontWeight: 600
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, post.title), post.subtitle && __jsx("p", {
    className: "card-subtitle",
    style: {
      margin: '0px',
      padding: '0px',
      fontSize: '20px',
      color: '#111',
      opacity: '0.8',
      fontFamily: 'Georgia'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, post.subtitle), __jsx("div", {
    className: "blog-arrow",
    style: {
      textAlign: 'right',
      marginTop: 6,
      fontSize: 24
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "\u2192"), __jsx("div", {
    style: {
      flex: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, " "))));
};

/***/ }),

/***/ "./loader.ts":
/*!*******************!*\
  !*** ./loader.ts ***!
  \*******************/
/*! exports provided: loadMarkdownFile, mdToPost, loadMarkdownFiles, loadPost, loadBlogPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMarkdownFile", function() { return loadMarkdownFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdToPost", function() { return mdToPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMarkdownFiles", function() { return loadMarkdownFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPost", function() { return loadPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBlogPosts", function() { return loadBlogPosts; });
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glob */ "glob");
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(glob__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);


const loadMarkdownFile = async path => {
  const mdFile = await __webpack_require__("./md lazy recursive ^\\.\\/.*$")(`./${path}`);
  return {
    path,
    contents: mdFile.default
  };
};
const mdToPost = file => {
  const metadata = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(file.contents);
  const post = {
    path: file.path.replace(".md", ""),
    title: metadata.data.title || null,
    subtitle: metadata.data.subtitle || null,
    datePublished: metadata.data.datePublished || null,
    tags: metadata.data.tags || null,
    author: metadata.data.author || null,
    authorTitle: metadata.data.authorTitle || null,
    authorPhoto: metadata.data.authorPhoto || null,
    bannerPhoto: metadata.data.bannerPhoto || null,
    thumbnailPhoto: metadata.data.thumbnailPhoto || null,
    content: metadata.content
  };
  if (!post.title) throw new Error(`Missing: title.`);
  if (!post.content) throw new Error(`Missing: content.`);
  return post;
};
const loadMarkdownFiles = async path => {
  const blogPaths = glob__WEBPACK_IMPORTED_MODULE_0___default.a.sync(`./md/${path}`);
  const postDataList = await Promise.all(blogPaths.map(async blogPath => {
    const mdPath = blogPath.slice(blogPath.indexOf(`md/`) + 3);
    const mdContents = await loadMarkdownFile(`${mdPath}`);
    return mdToPost(mdContents);
  }));
  postDataList.sort((a, b) => {
    if (a.datePublished && b.datePublished) {
      return a.datePublished - b.datePublished;
    } else if (!a.datePublished && !b.datePublished) {
      return 0;
    } else if (!a.datePublished) {
      return -1;
    } else if (!b.datePublished) {
      return 1;
    }

    throw new Error("Shouldn't be reachable");
  });
  postDataList.reverse();
  return postDataList;
};
const loadPost = async path => {
  const file = await loadMarkdownFile(path);
  return mdToPost(file);
};
const loadBlogPosts = async () => {
  return await loadMarkdownFiles(`blog/*.md`);
};

/***/ }),

/***/ "./md lazy recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./md lazy ^\.\/.*$ namespace object ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blog/collabwest-acquisition.md": [
		"./md/blog/collabwest-acquisition.md",
		0
	],
	"./blog/founder-guide-design.md": [
		"./md/blog/founder-guide-design.md",
		1
	],
	"./blog/is-web-dead.md": [
		"./md/blog/is-web-dead.md",
		2
	],
	"./blog/pinterest-guide.md": [
		"./md/blog/pinterest-guide.md",
		3
	],
	"./blog/rename-plato-aesthetic.md": [
		"./md/blog/rename-plato-aesthetic.md",
		4
	],
	"./blog/seed-funding.md": [
		"./md/blog/seed-funding.md",
		5
	],
	"./blog/stories.md": [
		"./md/blog/stories.md",
		6
	],
	"./index.md": [
		"./md/index.md",
		7
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./md lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader */ "./loader.ts");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.tsx");
var _jsxFileName = "/Users/john/src/blog/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Aesthetic Blog"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "@useaesthetic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@useaesthetic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: "The Aesthetic Blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:description",
    content: "Learnings from the forefront of design automation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: "https://blog.aesthetic.com/aesthetic-mark.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://blog.aesthetic.com/aesthetic-mark.png",
    key: "ogimage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: "Aesthetic Blog",
    key: "ogsitename",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "The Aesthetic Blog",
    key: "ogtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Learnings from the forefront of design automation",
    key: "ogdesc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "container blog-wrap",
    style: {
      marginBottom: '140px',
      maxWidth: '600px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("h1", {
    style: {
      textAlign: 'left',
      marginBottom: 16,
      color: 'rgba(0, 0, 0, 0.3)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Blog"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, props.posts.map((post, j) => {
    // return (
    //   <>
    //   <a href={post.path} target="_blank">
    //     {post.title}
    //   </a>
    //   </>
    // );
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["PostCard"], {
      post: post,
      key: j,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 20
      }
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
const getStaticProps = async () => {
  const posts = await Object(_loader__WEBPACK_IMPORTED_MODULE_2__["loadBlogPosts"])();
  return {
    props: {
      posts
    }
  };
};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/john/src/blog/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "fecha":
/*!************************!*\
  !*** external "fecha" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fecha");

/***/ }),

/***/ "glob":
/*!***********************!*\
  !*** external "glob" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map