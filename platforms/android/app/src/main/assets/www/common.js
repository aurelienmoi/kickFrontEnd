(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card-subtitle slogan gradientKick componentTitle>Carte Kick</ion-card-subtitle>\r\n<div class=\"mapContainer\" (click)=\"openFullMap()\">\r\n  <div class=\"onMap\" (click)=\"openFullMap()\">\r\n    <img [src]=\"bitmojiLink\" class=\"bmjLogo\"/>\r\n    <ion-text color=\"medium\" class=\"locLabel\">\r\n      <span style=\"font-size:10px;\">à Lyon, France</span>\r\n    </ion-text>\r\n    <div class=\"bottomDiv\" style=\"padding-top:10px;\"><p class=\"slogan gradientKick\">44 rappeurs dans cette ville</p></div>\r\n  </div>\r\n  <div class=\"dashboardMap\" style=\"background-image:url('assets/img/map.png')\" id=\"dashboardMap\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboardMap {\n  width: 100%;\n  height: 100%;\n  z-index: 990;\n  position: absolute;\n  border-radius: 17px; }\n\n.onMap {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1000; }\n\n.bmjLogo {\n  width: 23px;\n  height: auto;\n  margin: auto;\n  vertical-align: middle;\n  margin-top: 10%;\n  margin-bottom: 0px; }\n\n.locLabel {\n  background-color: white;\n  padding: 0 15px 0 15px;\n  border-radius: 30px; }\n\n.mapContainer {\n  width: 95%;\n  height: 150px;\n  max-height: 150px;\n  max-width: 500px;\n  margin: 0 auto;\n  position: relative;\n  border-radius: 17px; }\n\n.bottomDiv {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  background-color: white;\n  border-radius: 0 0 17px 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9kYXNoYm9hcmQvX2luYy9kYXNoYm9hcmQtbWFwL0Q6XFxXb3Jrc3BhY2VcXGtpY2tBcHBcXEtpY2thcHAvc3JjXFxhcHBcXG1lbWJlcnNcXGRhc2hib2FyZFxcX2luY1xcZGFzaGJvYXJkLW1hcFxcZGFzaGJvYXJkLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLGVBQWM7RUFDZCxrQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx1QkFBc0I7RUFBRSxzQkFBcUI7RUFBRSxtQkFBa0IsRUFBQTs7QUFHckU7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGNBQWE7RUFDYixrQkFBaUI7RUFDakIsbUJBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksa0JBQWlCO0VBQ2pCLE9BQU07RUFDTixTQUFRO0VBQ1IsV0FBVTtFQUNWLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsNEJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2Rhc2hib2FyZC9faW5jL2Rhc2hib2FyZC1tYXAvZGFzaGJvYXJkLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkYXNoYm9hcmRNYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4Ojk5MDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxN3B4O1xyXG59XHJcblxyXG4ub25NYXAge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6MTAwMDtcclxufVxyXG5cclxuLmJtakxvZ28ge1xyXG4gICAgd2lkdGg6MjNweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICBtYXJnaW4tdG9wOjEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG59XHJcblxyXG4ubG9jTGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgcGFkZGluZzowIDE1cHggMCAxNXB4OyBib3JkZXItcmFkaXVzOjMwcHg7XHJcbn1cclxuXHJcbi5tYXBDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OjE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOjUwMHB4O1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxN3B4O1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOnVybCgnYXNzZXRzL2ltZy9tYXAucG5nJyk7XHJcbn1cclxuXHJcbi5ib3R0b21EaXYge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICBib3R0b206MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjAgMCAxN3B4IDE3cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DashboardMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMapComponent", function() { return DashboardMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css");
/* harmony import */ var _node_modules_mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var baseURL = "https://https://kickserver.xyz";
var DashboardMapComponent = /** @class */ (function () {
    function DashboardMapComponent(http, router) {
        this.http = http;
        this.router = router;
        this.style = 'mapbox://styles/sheepbild/ck4ypwvod3t241cqlza366zmc';
        this.lng = 41.643065138213274;
        this.lat = 42.68595021382373;
        this.bitmojiLink = "assets/img/bitmoji.png";
        this.geoIsReady = false;
        console.log(this.geoIsReady);
    }
    DashboardMapComponent.prototype.ngOnInit = function () {
    };
    DashboardMapComponent.prototype.ngOnDestroy = function () {
        if (this.map) {
            this.map.remove();
        }
    };
    DashboardMapComponent.prototype.openFullMap = function () {
        this.router.navigateByUrl('/map');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DashboardMapComponent.prototype, "userId", void 0);
    DashboardMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-map',
            template: __webpack_require__(/*! ./dashboard-map.component.html */ "./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-map.component.scss */ "./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardMapComponent);
    return DashboardMapComponent;
}());



/***/ }),

/***/ "./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.module.ts ***!
  \******************************************************************************/
/*! exports provided: DashboardMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMapModule", function() { return DashboardMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-map.component */ "./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var DashboardMapModule = /** @class */ (function () {
    function DashboardMapModule() {
    }
    DashboardMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _dashboard_map_component__WEBPACK_IMPORTED_MODULE_1__["DashboardMapComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [
                _dashboard_map_component__WEBPACK_IMPORTED_MODULE_1__["DashboardMapComponent"]
            ]
        })
    ], DashboardMapModule);
    return DashboardMapModule;
}());



/***/ }),

/***/ "./src/app/public/_inc/footer/footer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/public/_inc/footer/footer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"behindFooter\"></div>\r\n\r\n<ion-footer *ngIf=\"!keyboard.isVisible\" class=\"ion-text-center secondBg\">\r\n\r\n  <p class=\"footerMsg gradientKick\">{{footerMessage}}</p>\r\n\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/public/_inc/footer/footer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/public/_inc/footer/footer.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerMsg {\n  font-size: small; }\n\nion-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  margin-top: auto; }\n\n.lightTheme ion-footer {\n  background-color: whitesmoke !important; }\n\n#darkTheme ion-footer {\n  background-color: #131313 !important; }\n\n.behindFooter {\n  height: 60px;\n  background-color: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL19pbmMvZm9vdGVyL0Q6XFxXb3Jrc3BhY2VcXGtpY2tBcHBcXEtpY2thcHAvc3JjXFxhcHBcXHB1YmxpY1xcX2luY1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVTtFQUNWLE9BQU07RUFDTixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx1Q0FBc0MsRUFBQTs7QUFHMUM7RUFDSSxvQ0FBMkMsRUFBQTs7QUFHL0M7RUFDSSxZQUFXO0VBQ1gsc0JBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvX2luYy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlck1zZyB7XHJcbiAgICBmb250LXNpemU6c21hbGw7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGxlZnQ6MDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi5saWdodFRoZW1lIGlvbi1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNkYXJrVGhlbWUgaW9uLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxOSwgMTksIDE5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmVoaW5kRm9vdGVyIHtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/public/_inc/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/public/_inc/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(keyboard) {
        this.keyboard = keyboard;
        this.footerMessage = "© Kick 2019. Tous droits réservés.";
    }
    FooterComponent.prototype.ngOnInit = function () { this.isKeyboardHide = true; };
    FooterComponent.prototype.keyboardCheck = function () {
        var _this = this;
        this.keyboard.onKeyboardShow().subscribe(function () {
            _this.isKeyboardHide = false;
            alert("Keyboard is showing ffs");
        });
        this.keyboard.onKeyboardHide().subscribe(function () {
            _this.isKeyboardHide = true;
        });
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/public/_inc/footer/footer.component.html"),
            providers: [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"]],
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/public/_inc/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/public/_inc/footer/footer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/public/_inc/footer/footer.module.ts ***!
  \*****************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.component */ "./src/app/public/_inc/footer/footer.component.ts");







var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            exports: [
                _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map