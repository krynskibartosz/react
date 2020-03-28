(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts"],{

/***/ "./assets/js/components/LikeButton.jsx":
/*!*********************************************!*\
  !*** ./assets/js/components/LikeButton.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var LikeButton = function LikeButton(prop) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLiked = _useState2[0],
      setIsLiked = _useState2[1];

  var handleClick = function handleClick() {
    return setIsLiked(!isLiked);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", {
    className: "btn btn-link",
    onClick: handleClick
  }, isLiked ? prop.likes + 1 : prop.likes, " \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("i", {
    className: isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"
  }), isLiked ? " Je n'aime plus!" : " J'aime!");
}; // class LikeButton extends React.Component {
//     state = {
//             likes: this.props.likes || 0,
//             isLiked: this.props.isLiked || false
//         };
//     handleClick = () => {
//         const isLiked = this.state.isLiked;
//         const likes = this.state.likes + (isLiked ? -1 : 1);
//         this.setState({ likes, isLiked : !isLiked });
//     }
//     render(){
// return <button className="btn btn-link" onClick={this.handleClick}>
// {/* &nbsp === espace insécable */}
//     {this.state.likes} &nbsp;
//     <i className={this.state.isLiked ? "fas fa-thumbs-up": "far fa-thumbs-up"}></i>
//     {this.state.isLiked ? " Je n'aime plus!" : " J'aime!"}
//         </button>
//     }
//     // render(){
//     //     return React.createElement('button', { className: "btn btn-link", onClick: () => this.handleClick()}, this.state.likes,
//     //     React.createElement('i', { className: this.state.isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}),
//     //     this.state.isLiked? " Je n'aime plus !": " J'aime !");
//     // }
// }


/* harmony default export */ __webpack_exports__["default"] = (LikeButton);

/***/ }),

/***/ "./assets/js/posts.js":
/*!****************************!*\
  !*** ./assets/js/posts.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LikeButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LikeButton */ "./assets/js/components/LikeButton.jsx");





document.querySelectorAll('span.react-like').forEach(function (span) {
  var likes = +span.dataset.likes;
  var isLiked = +span.dataset.isLiked === 1;
  react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_LikeButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    likes: likes,
    isLiked: isLiked
  }), span);
});

/***/ })

},[["./assets/js/posts.js","runtime","vendors~posts"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9MaWtlQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9zdHMuanMiXSwibmFtZXMiOlsiTGlrZUJ1dHRvbiIsInByb3AiLCJ1c2VTdGF0ZSIsImlzTGlrZWQiLCJzZXRJc0xpa2VkIiwiaGFuZGxlQ2xpY2siLCJsaWtlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzcGFuIiwiZGF0YXNldCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLElBQUksRUFBSTtBQUFBLGtCQUNPQyx1REFBUSxDQUFDLEtBQUQsQ0FEZjtBQUFBO0FBQUEsTUFDaEJDLE9BRGdCO0FBQUEsTUFDUEMsVUFETzs7QUFHdkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNRCxVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFoQjtBQUFBLEdBQXBCOztBQUVBLHNCQUNJO0FBQVEsYUFBUyxFQUFDLGNBQWxCO0FBQWlDLFdBQU8sRUFBRUU7QUFBMUMsS0FFS0YsT0FBTyxHQUFHRixJQUFJLENBQUNLLEtBQUwsR0FBYSxDQUFoQixHQUFvQkwsSUFBSSxDQUFDSyxLQUZyQyx3QkFJSTtBQUFHLGFBQVMsRUFBRUgsT0FBTyxHQUFHLGtCQUFILEdBQXVCO0FBQTVDLElBSkosRUFNS0EsT0FBTyxHQUFHLGtCQUFILEdBQXdCLFVBTnBDLENBREo7QUFVSCxDQWZELEMsQ0FpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZUgseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUlBTyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q0MsT0FBN0MsQ0FBcUQsVUFBU0MsSUFBVCxFQUFjO0FBQy9ELE1BQU1KLEtBQUssR0FBRyxDQUFDSSxJQUFJLENBQUNDLE9BQUwsQ0FBYUwsS0FBNUI7QUFDQSxNQUFNSCxPQUFPLEdBQUcsQ0FBQ08sSUFBSSxDQUFDQyxPQUFMLENBQWFSLE9BQWQsS0FBMEIsQ0FBMUM7QUFDQVMsa0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyw4REFBRDtBQUFZLFNBQUssRUFBRVAsS0FBbkI7QUFBMEIsV0FBTyxFQUFFSDtBQUFuQyxJQUFoQixFQUErRE8sSUFBL0Q7QUFDSCxDQUpELEUiLCJmaWxlIjoicG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExpa2VCdXR0b24gPSBwcm9wID0+IHtcbiAgICBjb25zdCBbaXNMaWtlZCwgc2V0SXNMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHNldElzTGlrZWQoIWlzTGlrZWQpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgey8qICZuYnNwOyA9PT0gZXNwYWNlIGluc8OpY2FibGUgKi99XG4gICAgICAgICAgICB7aXNMaWtlZCA/IHByb3AubGlrZXMgKyAxIDogcHJvcC5saWtlc30gJm5ic3A7XG5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aXNMaWtlZCA/IFwiZmFzIGZhLXRodW1icy11cFwiOiBcImZhciBmYS10aHVtYnMtdXBcIn0+PC9pPlxuXG4gICAgICAgICAgICB7aXNMaWtlZCA/IFwiIEplIG4nYWltZSBwbHVzIVwiIDogXCIgSidhaW1lIVwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApXG59XG5cbi8vIGNsYXNzIExpa2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICAgIHN0YXRlID0ge1xuLy8gICAgICAgICAgICAgbGlrZXM6IHRoaXMucHJvcHMubGlrZXMgfHwgMCxcbi8vICAgICAgICAgICAgIGlzTGlrZWQ6IHRoaXMucHJvcHMuaXNMaWtlZCB8fCBmYWxzZVxuLy8gICAgICAgICB9O1xuXG4vLyAgICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGlzTGlrZWQgPSB0aGlzLnN0YXRlLmlzTGlrZWQ7XG4vLyAgICAgICAgIGNvbnN0IGxpa2VzID0gdGhpcy5zdGF0ZS5saWtlcyArIChpc0xpa2VkID8gLTEgOiAxKTtcblxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlrZXMsIGlzTGlrZWQgOiAhaXNMaWtlZCB9KTtcbi8vICAgICB9XG5cbi8vICAgICByZW5kZXIoKXtcbiAgICAgICAgLy8gcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgIC8vIHsvKiAmbmJzcCA9PT0gZXNwYWNlIGluc8OpY2FibGUgKi99XG4gICAgICAgIC8vICAgICB7dGhpcy5zdGF0ZS5saWtlc30gJm5ic3A7XG4gICAgICAgIC8vICAgICA8aSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNMaWtlZCA/IFwiZmFzIGZhLXRodW1icy11cFwiOiBcImZhciBmYS10aHVtYnMtdXBcIn0+PC9pPlxuICAgICAgICAvLyAgICAge3RoaXMuc3RhdGUuaXNMaWtlZCA/IFwiIEplIG4nYWltZSBwbHVzIVwiIDogXCIgSidhaW1lIVwifVxuLy8gICAgICAgICA8L2J1dHRvbj5cbi8vICAgICB9XG4vLyAgICAgLy8gcmVuZGVyKCl7XG4vLyAgICAgLy8gICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IGNsYXNzTmFtZTogXCJidG4gYnRuLWxpbmtcIiwgb25DbGljazogKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfSwgdGhpcy5zdGF0ZS5saWtlcyxcbi8vICAgICAvLyAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHsgY2xhc3NOYW1lOiB0aGlzLnN0YXRlLmlzTGlrZWQgPyBcImZhcyBmYS10aHVtYnMtdXBcIiA6IFwiZmFyIGZhLXRodW1icy11cFwifSksXG4vLyAgICAgLy8gICAgIHRoaXMuc3RhdGUuaXNMaWtlZD8gXCIgSmUgbidhaW1lIHBsdXMgIVwiOiBcIiBKJ2FpbWUgIVwiKTtcbi8vICAgICAvLyB9XG4vLyB9XG5cblxuZXhwb3J0IGRlZmF1bHQgTGlrZUJ1dHRvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgTGlrZUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvTGlrZUJ1dHRvbic7XG5cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuLnJlYWN0LWxpa2UnKS5mb3JFYWNoKGZ1bmN0aW9uKHNwYW4pe1xuICAgIGNvbnN0IGxpa2VzID0gK3NwYW4uZGF0YXNldC5saWtlcztcbiAgICBjb25zdCBpc0xpa2VkID0gK3NwYW4uZGF0YXNldC5pc0xpa2VkID09PSAxO1xuICAgIFJlYWN0RE9NLnJlbmRlcig8TGlrZUJ1dHRvbiBsaWtlcz17bGlrZXN9IGlzTGlrZWQ9e2lzTGlrZWR9Lz4sIHNwYW4pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==