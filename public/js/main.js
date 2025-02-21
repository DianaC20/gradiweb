/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

eval("document.addEventListener('scroll', function() {\r\n    const header = document.querySelector('.header');\r\n    if (window.scrollY > 250) { \r\n      header.classList.add('header--transparent');\r\n    } else {\r\n      header.classList.remove('header--transparent');\r\n    }\r\n  });\r\n  const menuToggle = document.querySelector('.header__toggle');\r\n  const menuList = document.querySelector('.header__list');\r\n  \r\n  menuToggle.addEventListener('click', () => {\r\n    menuList.classList.toggle('active');\r\n  });\r\n\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    function initializeMarquee(parentSelector) {\r\n      const marqueeWrapper = document.querySelector(`${parentSelector} .marquee__wrapper`);\r\n  \r\n      const textElement = marqueeWrapper.querySelector(\"div\");\r\n  \r\n      // Limpiar los clones anteriores antes de recalcular\r\n      while (marqueeWrapper.children.length > 1) {\r\n        marqueeWrapper.removeChild(marqueeWrapper.lastChild);\r\n      }\r\n  \r\n      const textWidth = textElement.offsetWidth;\r\n      const screenWidth = window.innerWidth;\r\n  \r\n      // Asegurarse de que siempre haya suficientes repeticiones\r\n      const repetitions = Math.ceil(screenWidth / textWidth) + 1; // Agregamos +2 para evitar espacios vacíos\r\n  \r\n      for (let i = 0; i < repetitions; i++) {\r\n        const clone = textElement.cloneNode(true);\r\n        marqueeWrapper.appendChild(clone);\r\n      }\r\n  \r\n      marqueeWrapper.style.width = `${repetitions * textWidth}px`;\r\n    }\r\n  \r\n    // Inicializar los marquees al cargar la página\r\n    initializeMarquee(\".marquee\"); // Primer marquee\r\n    initializeMarquee(\".marquee2\"); // Segundo marquee\r\n  \r\n    // Usar debounce para optimizar el evento resize\r\n    function debounce(func, delay) {\r\n      let timer;\r\n      return function (...args) {\r\n        clearTimeout(timer);\r\n        timer = setTimeout(() => func.apply(this, args), delay);\r\n      };\r\n    }\r\n  \r\n    // Escuchar el evento resize y ejecutar initializeMarquee para ambos marquees\r\n    window.addEventListener(\r\n      \"resize\",\r\n      debounce(function () {\r\n        initializeMarquee(\".marquee\"); // Actualizar el primer marquee\r\n        initializeMarquee(\".marquee2\"); // Actualizar el segundo marquee\r\n      }, 300)\r\n    );\r\n  \r\n    // View All\r\n    const cards = document.querySelectorAll('.conatiner-cards .inner-grid__card');\r\n    const viewAllBtn = document.getElementById('viewAllBtn');\r\n    const initialVisibleCards = 4;\r\n  \r\n    cards.forEach((card, index) => {\r\n      if (index >= initialVisibleCards) {\r\n        card.classList.add('d-none');\r\n      }\r\n    });\r\n  \r\n    viewAllBtn.addEventListener('click', () => {\r\n      cards.forEach(card => {\r\n        card.classList.remove('d-none');\r\n      });\r\n      viewAllBtn.style.display = 'none';\r\n    });\r\n  });\n\n//# sourceURL=webpack://shopify-simulator/./assets/js/app.js?");

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shopify-simulator/./assets/scss/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./assets/js/app.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/scss/app.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;