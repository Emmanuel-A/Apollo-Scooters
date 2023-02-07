/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/app.ts":
/*!****************************!*\
  !*** ./src/scripts/app.ts ***!
  \****************************/
/***/ (() => {



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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _scripts_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/app */ "./src/scripts/app.ts");
/* harmony import */ var _scripts_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_app__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const scooterName = document.querySelectorAll('.product-card__title');
const partsImage = document.querySelectorAll('.product-modal__parts-image');
const partsChart = document.querySelector('.product-modal__parts-wrapper');
const partsInfo = document.querySelectorAll('.product-modal__parts');
const removePart = document.querySelectorAll('.product-modal__parts-remove');
const addtocart = (partsData) => {
    console.log('Adding to cart');
    fetch("/cart/add.js", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(partsData),
    })
        .then((response) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield response.json();
        console.log(result);
        return result;
    }))
        .catch((error) => {
        console.error("Error:", error);
    });
};
const addPart = (partID) => {
    partsInfo.forEach(($element) => {
        const partsDetailsID = $element.getAttribute('data-id');
        if (partID === partsDetailsID) {
            $element.classList.remove('hide');
            let addedPartsData = {};
            addedPartsData = {
                id: partID,
                quantity: 1,
            };
            addtocart(addedPartsData);
        }
    });
};
partsImage.forEach(($element) => {
    const partsImageID = $element.getAttribute('data-id');
    $element.addEventListener("click", () => {
        partsChart.classList.remove('hide');
        addPart(partsImageID);
    });
});
scooterName.forEach(($element) => {
    $element.addEventListener("click", () => {
        if (!$element.classList.contains('active')) {
            $element.classList.add('active');
        }
        else {
            $element.classList.remove('active');
        }
    });
});
removePart.forEach(($element) => {
    $element.addEventListener("click", () => {
        $element.parentElement.classList.add('hide');
        if (partsInfo.length === 0) {
            partsChart.classList.add('hide');
        }
    });
});

})();

/******/ })()
;