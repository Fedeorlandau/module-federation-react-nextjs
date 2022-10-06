"use strict";
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_bootstrap_jsx"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remote_nextjs_remote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remote/nextjs-remote-component */ "webpack/container/remote/remote/nextjs-remote-component");
/* harmony import */ var remote_nextjs_remote_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remote_nextjs_remote_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remote_nextjs_remote_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remote/nextjs-remote-page */ "webpack/container/remote/remote/nextjs-remote-page");
/* harmony import */ var remote_nextjs_remote_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remote_nextjs_remote_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remote_use_app_shell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remote/use-app-shell */ "webpack/container/remote/remote/use-app-shell");
/* harmony import */ var remote_use_app_shell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remote_use_app_shell__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui */ "../ui/dist/index.mjs");






function App() {
  const {
    score,
    addToScore
  } = remote_use_app_shell__WEBPACK_IMPORTED_MODULE_3___default()();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: "#CDF5F6",
      color: "black",
      padding: "30px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, " ", "This is the React App mounted on ", '<div id="root"/>', " - ", score), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ui__WEBPACK_IMPORTED_MODULE_4__.SharedComponent, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => addToScore(1)
  }, "Add to score")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((remote_nextjs_remote_component__WEBPACK_IMPORTED_MODULE_1___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((remote_nextjs_remote_page__WEBPACK_IMPORTED_MODULE_2___default()), null)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/bootstrap.jsx":
/*!***************************!*\
  !*** ./src/bootstrap.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "../node_modules/react-dom/client.js");



const container = document.getElementById('root2');
const anotherContainer = document.getElementById('root');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
const anotherRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(anotherContainer);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], null)); // anotherRoot.render(<App />);

/***/ }),

/***/ "../ui/dist/index.mjs":
/*!****************************!*\
  !*** ../ui/dist/index.mjs ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponent": () => (/* binding */ SharedComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
// index.tsx

var SharedComponent = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    style: { backgroundColor: "#D6CDEA", padding: "5px" },
    children: "SharedComponent"
  });
};



/***/ })

}]);
//# sourceMappingURL=src_bootstrap_jsx.js.map