/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var canvasEl = document.getElementById('canvas');\n  var ctx = canvasEl.getContext(\"2d\");\n  canvasEl.width = 600;\n  canvasEl.height = 800;\n  var keys = [];\n  var player = {\n    x: 300,\n    // player start pos x\n    y: 400,\n    // player start pos y\n    width: 83,\n    // width in px divide by col\n    height: 81,\n    frameX: 0,\n    frameY: 0,\n    speed: 5,\n    moving: false,\n    attacking: false,\n    spriteFrame: 0\n  };\n  var playerImg = new Image();\n  playerImg.src = \"./imgs/standing.png\";\n  var background = new Image();\n  background.src = \"./imgs/background.jpg\";\n\n  function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n  }\n\n  function animate() {\n    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);\n    ctx.drawImage(background, 0, 0, canvasEl.width, canvasEl.height);\n    drawSprite(playerImg, 0, 0, playerImg.width, playerImg.height, player.x, player.y, playerImg.width, playerImg.height);\n    requestAnimationFrame(animate);\n  }\n\n  animate();\n  window.addEventListener(\"keydown\", keyPress);\n  window.addEventListener(\"keyup\", keyPress);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImtleXMiLCJwbGF5ZXIiLCJ4IiwieSIsImZyYW1lWCIsImZyYW1lWSIsInNwZWVkIiwibW92aW5nIiwiYXR0YWNraW5nIiwic3ByaXRlRnJhbWUiLCJwbGF5ZXJJbWciLCJJbWFnZSIsInNyYyIsImJhY2tncm91bmQiLCJkcmF3U3ByaXRlIiwiaW1nIiwic1giLCJzWSIsInNXIiwic0giLCJkWCIsImRZIiwiZFciLCJkSCIsImRyYXdJbWFnZSIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJrZXlQcmVzcyJdLCJtYXBwaW5ncyI6IkFBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBakI7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVCxDQUFvQixJQUFwQixDQUFaO0FBRUFILEVBQUFBLFFBQVEsQ0FBQ0ksS0FBVCxHQUFpQixHQUFqQjtBQUNBSixFQUFBQSxRQUFRLENBQUNLLE1BQVQsR0FBa0IsR0FBbEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUVBLE1BQU1DLE1BQU0sR0FBRztBQUNiQyxJQUFBQSxDQUFDLEVBQUUsR0FEVTtBQUNMO0FBQ1JDLElBQUFBLENBQUMsRUFBRSxHQUZVO0FBRUo7QUFDVEwsSUFBQUEsS0FBSyxFQUFFLEVBSE07QUFHRjtBQUNYQyxJQUFBQSxNQUFNLEVBQUUsRUFKSztBQUtiSyxJQUFBQSxNQUFNLEVBQUUsQ0FMSztBQU1iQyxJQUFBQSxNQUFNLEVBQUUsQ0FOSztBQU9iQyxJQUFBQSxLQUFLLEVBQUUsQ0FQTTtBQVFiQyxJQUFBQSxNQUFNLEVBQUUsS0FSSztBQVNiQyxJQUFBQSxTQUFTLEVBQUUsS0FURTtBQVViQyxJQUFBQSxXQUFXLEVBQUU7QUFWQSxHQUFmO0FBWUEsTUFBTUMsU0FBUyxHQUFHLElBQUlDLEtBQUosRUFBbEI7QUFDQUQsRUFBQUEsU0FBUyxDQUFDRSxHQUFWLEdBQWdCLHFCQUFoQjtBQUVBLE1BQU1DLFVBQVUsR0FBRyxJQUFJRixLQUFKLEVBQW5CO0FBQ0FFLEVBQUFBLFVBQVUsQ0FBQ0QsR0FBWCxHQUFpQix1QkFBakI7O0FBRUEsV0FBU0UsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUJDLEVBQXpCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUNDLEVBQXJDLEVBQXlDQyxFQUF6QyxFQUE2Q0MsRUFBN0MsRUFBaURDLEVBQWpELEVBQXFEQyxFQUFyRCxFQUF5RDtBQUN2RDNCLElBQUFBLEdBQUcsQ0FBQzRCLFNBQUosQ0FBY1QsR0FBZCxFQUFtQkMsRUFBbkIsRUFBdUJDLEVBQXZCLEVBQTJCQyxFQUEzQixFQUErQkMsRUFBL0IsRUFBbUNDLEVBQW5DLEVBQXVDQyxFQUF2QyxFQUEyQ0MsRUFBM0MsRUFBK0NDLEVBQS9DO0FBQ0Q7O0FBRUQsV0FBU0UsT0FBVCxHQUFtQjtBQUNqQjdCLElBQUFBLEdBQUcsQ0FBQzhCLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CaEMsUUFBUSxDQUFDSSxLQUE3QixFQUFvQ0osUUFBUSxDQUFDSyxNQUE3QztBQUNBSCxJQUFBQSxHQUFHLENBQUM0QixTQUFKLENBQWNYLFVBQWQsRUFBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0NuQixRQUFRLENBQUNJLEtBQXpDLEVBQWdESixRQUFRLENBQUNLLE1BQXpEO0FBQ0FlLElBQUFBLFVBQVUsQ0FBQ0osU0FBRCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCQSxTQUFTLENBQUNaLEtBQTVCLEVBQW1DWSxTQUFTLENBQUNYLE1BQTdDLEVBQXFERSxNQUFNLENBQUNDLENBQTVELEVBQStERCxNQUFNLENBQUNFLENBQXRFLEVBQXlFTyxTQUFTLENBQUNaLEtBQW5GLEVBQTBGWSxTQUFTLENBQUNYLE1BQXBHLENBQVY7QUFDQTRCLElBQUFBLHFCQUFxQixDQUFDRixPQUFELENBQXJCO0FBQ0Q7O0FBQ0RBLEVBQUFBLE9BQU87QUFFUEcsRUFBQUEsTUFBTSxDQUFDbkMsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNvQyxRQUFuQztBQUNBRCxFQUFBQSxNQUFNLENBQUNuQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ29DLFFBQWpDO0FBRUQsQ0F6Q0QiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGNhbnZhc0VsLndpZHRoID0gNjAwO1xuICBjYW52YXNFbC5oZWlnaHQgPSA4MDA7XG4gIGNvbnN0IGtleXMgPSBbXTtcblxuICBjb25zdCBwbGF5ZXIgPSB7XG4gICAgeDogMzAwLCAvLyBwbGF5ZXIgc3RhcnQgcG9zIHhcbiAgICB5OiA0MDAsICAvLyBwbGF5ZXIgc3RhcnQgcG9zIHlcbiAgICB3aWR0aDogODMsIC8vIHdpZHRoIGluIHB4IGRpdmlkZSBieSBjb2xcbiAgICBoZWlnaHQ6IDgxLFxuICAgIGZyYW1lWDogMCxcbiAgICBmcmFtZVk6IDAsXG4gICAgc3BlZWQ6IDUsXG4gICAgbW92aW5nOiBmYWxzZSxcbiAgICBhdHRhY2tpbmc6IGZhbHNlLFxuICAgIHNwcml0ZUZyYW1lOiAwXG4gIH1cbiAgY29uc3QgcGxheWVySW1nID0gbmV3IEltYWdlKCk7XG4gIHBsYXllckltZy5zcmMgPSBcIi4vaW1ncy9zdGFuZGluZy5wbmdcIjtcblxuICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gIGJhY2tncm91bmQuc3JjID0gXCIuL2ltZ3MvYmFja2dyb3VuZC5qcGdcIjtcblxuICBmdW5jdGlvbiBkcmF3U3ByaXRlKGltZywgc1gsIHNZLCBzVywgc0gsIGRYLCBkWSwgZFcsIGRIKSB7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCkgXG4gIH1cbiBcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgY2FudmFzRWwud2lkdGgsIGNhbnZhc0VsLmhlaWdodCk7XG4gICAgZHJhd1Nwcml0ZShwbGF5ZXJJbWcsIDAsIDAsIHBsYXllckltZy53aWR0aCwgcGxheWVySW1nLmhlaWdodCwgcGxheWVyLngsIHBsYXllci55LCBwbGF5ZXJJbWcud2lkdGgsIHBsYXllckltZy5oZWlnaHQpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfVxuICBhbmltYXRlKCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleVByZXNzKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlQcmVzcyk7XG5cbn0pOyJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;