/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var player = new Image();\n  player.src = \"../imgs/standing.png\";\n  var canvasEl = document.getElementById('canvas');\n  var ctx = canvasEl.getContext(\"2d\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3hELE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxLQUFKLEVBQWY7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxHQUFQLEdBQWEsc0JBQWI7QUFDQSxNQUFNQyxRQUFRLEdBQUdMLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixRQUF4QixDQUFqQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDRyxVQUFULENBQW9CLElBQXBCLENBQVo7QUFDRCxDQUxEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vc2NyaXB0cy9wbGF5ZXJcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBJbWFnZSgpO1xuICBwbGF5ZXIuc3JjID0gXCIuLi9pbWdzL3N0YW5kaW5nLnBuZ1wiXG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG59KTsiXSwibmFtZXMiOlsiUGxheWVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheWVyIiwiSW1hZ2UiLCJzcmMiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this.speed = 100;\n    this.x = 300; // player start pos x\n\n    this.y = 400; // player start pos y\n\n    this.attacking = false;\n    this.frameX = 0;\n    this.frameY = 0;\n    this.moving = false;\n  }\n\n  _createClass(Player, [{\n    key: \"drawSprite\",\n    value: function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n      ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n    } // document.addEventListener(\"keydown\", (e) => {\n    //   let dir = directionKeys[e]\n    // })\n    // movePlayer(pos) {\n    //   if () {\n    //     this.pos[0] += ;\n    //   }\n    // }\n\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFNQTtBQUNKLG9CQUFlO0FBQUE7O0FBQ2IsU0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxDQUFMLEdBQVMsR0FBVCxDQUZhLENBRUM7O0FBQ2QsU0FBS0MsQ0FBTCxHQUFTLEdBQVQsQ0FIYSxDQUdFOztBQUNmLFNBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDRDs7OztXQUNELG9CQUFXQyxHQUFYLEVBQWdCQyxFQUFoQixFQUFvQkMsRUFBcEIsRUFBd0JDLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQ0MsRUFBaEMsRUFBb0NDLEVBQXBDLEVBQXdDQyxFQUF4QyxFQUE0Q0MsRUFBNUMsRUFBZ0Q7QUFDOUNDLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjVixHQUFkLEVBQW1CQyxFQUFuQixFQUF1QkMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCQyxFQUEvQixFQUFtQ0MsRUFBbkMsRUFBdUNDLEVBQXZDLEVBQTJDQyxFQUEzQyxFQUErQ0MsRUFBL0M7QUFDRCxNQUlEO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJRiwrREFBZWhCLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuc3BlZWQgPSAxMDA7XG4gICAgdGhpcy54ID0gMzAwOyAvLyBwbGF5ZXIgc3RhcnQgcG9zIHhcbiAgICB0aGlzLnkgPSA0MDA7ICAvLyBwbGF5ZXIgc3RhcnQgcG9zIHlcbiAgICB0aGlzLmF0dGFja2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgfVxuICBkcmF3U3ByaXRlKGltZywgc1gsIHNZLCBzVywgc0gsIGRYLCBkWSwgZFcsIGRIKSB7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCkgXG4gIH1cblxuXG5cbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgLy8gICBsZXQgZGlyID0gZGlyZWN0aW9uS2V5c1tlXVxuICAgIFxuICAvLyB9KVxuXG4gIC8vIG1vdmVQbGF5ZXIocG9zKSB7XG4gIC8vICAgaWYgKCkge1xuICAvLyAgICAgdGhpcy5wb3NbMF0gKz0gO1xuICAvLyAgIH1cbiAgLy8gfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJzcGVlZCIsIngiLCJ5IiwiYXR0YWNraW5nIiwiZnJhbWVYIiwiZnJhbWVZIiwibW92aW5nIiwiaW1nIiwic1giLCJzWSIsInNXIiwic0giLCJkWCIsImRZIiwiZFciLCJkSCIsImN0eCIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;