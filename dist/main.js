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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var canvasEl = document.getElementById('canvas');\n  var ctx = canvasEl.getContext(\"2d\");\n  canvasEl.width = 600;\n  canvasEl.height = 800;\n  var keys = [];\n  var player = {\n    x: 300,\n    // player start pos x\n    y: 400,\n    // player start pos y\n    width: 83,\n    // width in px divide by col\n    height: 81,\n    frameX: 0,\n    frameY: 0,\n    speed: 5,\n    moving: false,\n    attacking: false // spriteFrame: 0\n\n  };\n  var playerImg = new Image();\n  playerImg.src = \"./imgs/alert_0.png\";\n  var background = new Image();\n  background.src = \"./imgs/background.jpg\";\n\n  function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n  }\n\n  function animate() {\n    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);\n    ctx.drawImage(background, 0, 0, canvasEl.width, canvasEl.height);\n    drawSprite(playerImg, 0, 0, playerImg.width, playerImg.height, player.x, player.y, playerImg.width, playerImg.height);\n    movePlayer(); // playerWalkAnimation();\n\n    requestAnimationFrame(animate);\n  }\n\n  animate();\n  window.addEventListener(\"keydown\", function (e) {\n    keys[e.code] = true;\n    player.moving = true;\n    console.log(keys);\n  });\n  window.addEventListener(\"keyup\", function (e) {\n    delete keys[e.code];\n    player.moving = false;\n  });\n\n  function movePlayer() {\n    if (keys[\"ArrowUp\"] && player.y > 50) {\n      player.y -= player.speed;\n    }\n\n    if (keys[\"ArrowDown\"] && player.y < 650) {\n      player.y += player.speed;\n    }\n\n    if (keys[\"ArrowLeft\"] && player.x > 15) {\n      player.x -= player.speed;\n    }\n\n    if (keys[\"ArrowRight\"] && player.x < 500) {\n      player.x += player.speed;\n    }\n  } // function playerWalkAnimation() {\n  //   if(player.frameX < 3 && player.moving) {\n  //     player.frameX++;\n  //   } else {\n  //     player.frameX = 0;\n  //   }\n  // }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImtleXMiLCJwbGF5ZXIiLCJ4IiwieSIsImZyYW1lWCIsImZyYW1lWSIsInNwZWVkIiwibW92aW5nIiwiYXR0YWNraW5nIiwicGxheWVySW1nIiwiSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kIiwiZHJhd1Nwcml0ZSIsImltZyIsInNYIiwic1kiLCJzVyIsInNIIiwiZFgiLCJkWSIsImRXIiwiZEgiLCJkcmF3SW1hZ2UiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwibW92ZVBsYXllciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpbmRvdyIsImUiLCJjb2RlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBakI7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVCxDQUFvQixJQUFwQixDQUFaO0FBRUFILEVBQUFBLFFBQVEsQ0FBQ0ksS0FBVCxHQUFpQixHQUFqQjtBQUNBSixFQUFBQSxRQUFRLENBQUNLLE1BQVQsR0FBa0IsR0FBbEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUVBLE1BQU1DLE1BQU0sR0FBRztBQUNiQyxJQUFBQSxDQUFDLEVBQUUsR0FEVTtBQUNMO0FBQ1JDLElBQUFBLENBQUMsRUFBRSxHQUZVO0FBRUo7QUFDVEwsSUFBQUEsS0FBSyxFQUFFLEVBSE07QUFHRjtBQUNYQyxJQUFBQSxNQUFNLEVBQUUsRUFKSztBQUtiSyxJQUFBQSxNQUFNLEVBQUUsQ0FMSztBQU1i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Q0MsQ0FBUCxHQUFXLEVBQXBDLEVBQXdDO0FBQ3RDRCxNQUFBQSxNQUFNLENBQUNDLENBQVAsSUFBWUQsTUFBTSxDQUFDSyxLQUFuQjtBQUNEOztBQUNELFFBQUlOLElBQUksQ0FBQyxZQUFELENBQUosSUFBc0JDLE1BQU0sQ0FBQ0MsQ0FBUCxHQUFXLEdBQXJDLEVBQTBDO0FBQ3hDRCxNQUFBQSxNQUFNLENBQUNDLENBQVAsSUFBWUQsTUFBTSxDQUFDSyxLQUFuQjtBQUNEO0FBQ0YsR0EvRHVELENBaUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRCxDQXpFRCIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY2FudmFzRWwud2lkdGggPSA2MDA7XG4gIGNhbnZhc0VsLmhlaWdodCA9IDgwMDtcbiAgY29uc3Qga2V5cyA9IFtdO1xuXG4gIGNvbnN0IHBsYXllciA9IHtcbiAgICB4OiAzMDAsIC8vIHBsYXllciBzdGFydCBwb3MgeFxuICAgIHk6IDQwMCwgIC8vIHBsYXllciBzdGFydCBwb3MgeVxuICAgIHdpZHRoOiA4MywgLy8gd2lkdGggaW4gcHggZGl2aWRlIGJ5IGNvbFxuICAgIGhlaWdodDogODEsXG4gICAgZnJhbWVYOiAwLFxuICAgIGZyYW1lWTogMCxcbiAgICBzcGVlZDogNSxcbiAgICBtb3Zpbmc6IGZhbHNlLFxuICAgIGF0dGFja2luZzogZmFsc2UsXG4gICAgLy8gc3ByaXRlRnJhbWU6IDBcbiAgfVxuICBjb25zdCBwbGF5ZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcGxheWVySW1nLnNyYyA9IFwiLi9pbWdzL2FsZXJ0XzAucG5nXCI7XG5cbiAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICBiYWNrZ3JvdW5kLnNyYyA9IFwiLi9pbWdzL2JhY2tncm91bmQuanBnXCI7XG5cbiAgZnVuY3Rpb24gZHJhd1Nwcml0ZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCBzWCwgc1ksIHNXLCBzSCwgZFgsIGRZLCBkVywgZEgpIFxuICB9XG4gXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpO1xuICAgIGRyYXdTcHJpdGUocGxheWVySW1nLCAwLCAwLCBwbGF5ZXJJbWcud2lkdGgsIHBsYXllckltZy5oZWlnaHQsIHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVySW1nLndpZHRoLCBwbGF5ZXJJbWcuaGVpZ2h0KTtcbiAgICBtb3ZlUGxheWVyKCk7XG4gICAgLy8gcGxheWVyV2Fsa0FuaW1hdGlvbigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfVxuICBhbmltYXRlKCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBrZXlzW2UuY29kZV0gPSB0cnVlO1xuICAgIHBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKGtleXMpO1xuICB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgZGVsZXRlIGtleXNbZS5jb2RlXTtcbiAgICBwbGF5ZXIubW92aW5nID0gZmFsc2U7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG1vdmVQbGF5ZXIoKSB7XG4gICAgaWYgKGtleXNbXCJBcnJvd1VwXCJdICYmIHBsYXllci55ID4gNTApIHtcbiAgICAgIHBsYXllci55IC09IHBsYXllci5zcGVlZDtcbiAgICB9XG4gICAgaWYgKGtleXNbXCJBcnJvd0Rvd25cIl0gJiYgcGxheWVyLnkgPCA2NTApIHtcbiAgICAgIHBsYXllci55ICs9IHBsYXllci5zcGVlZDtcbiAgICB9XG4gICAgaWYgKGtleXNbXCJBcnJvd0xlZnRcIl0gJiYgcGxheWVyLnggPiAxNSkge1xuICAgICAgcGxheWVyLnggLT0gcGxheWVyLnNwZWVkO1xuICAgIH1cbiAgICBpZiAoa2V5c1tcIkFycm93UmlnaHRcIl0gJiYgcGxheWVyLnggPCA1MDApIHtcbiAgICAgIHBsYXllci54ICs9IHBsYXllci5zcGVlZDtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiBwbGF5ZXJXYWxrQW5pbWF0aW9uKCkge1xuICAvLyAgIGlmKHBsYXllci5mcmFtZVggPCAzICYmIHBsYXllci5tb3ZpbmcpIHtcbiAgLy8gICAgIHBsYXllci5mcmFtZVgrKztcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcGxheWVyLmZyYW1lWCA9IDA7XG4gIC8vICAgfVxuICAvLyB9XG5cbn0pOyJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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