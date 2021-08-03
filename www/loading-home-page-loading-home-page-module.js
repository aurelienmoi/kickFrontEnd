(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loading-home-page-loading-home-page-module"],{

/***/ "./src/app/loading-home-page/loading-home-page.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/loading-home-page/loading-home-page.module.ts ***!
  \***************************************************************/
/*! exports provided: LoadingHomePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingHomePagePageModule", function() { return LoadingHomePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_home_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-home-page.page */ "./src/app/loading-home-page/loading-home-page.page.ts");







var routes = [
    {
        path: '',
        component: _loading_home_page_page__WEBPACK_IMPORTED_MODULE_6__["LoadingHomePagePage"]
    }
];
var LoadingHomePagePageModule = /** @class */ (function () {
    function LoadingHomePagePageModule() {
    }
    LoadingHomePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_loading_home_page_page__WEBPACK_IMPORTED_MODULE_6__["LoadingHomePagePage"]]
        })
    ], LoadingHomePagePageModule);
    return LoadingHomePagePageModule;
}());



/***/ }),

/***/ "./src/app/loading-home-page/loading-home-page.page.html":
/*!***************************************************************!*\
  !*** ./src/app/loading-home-page/loading-home-page.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content fullscreen id=\"yellowBg\" padding>\n  <div class=\"ion-padding ion-text-center mainDiv\">\n      <p class=\"slogan mainSlogan gradientKick\">{{slogan}}</p>\n    <img src=\"assets/img/mainLogo.png\" class=\"mainLogo\">\n    <div class=\"marginUnderSlg\"></div>\n\n  </div>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/loading-home-page/loading-home-page.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/loading-home-page/loading-home-page.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainDiv {\n  padding-top: 50px; }\n\n.mainSlogan {\n  margin-bottom: 40px; }\n\n.marginUnderSlg {\n  height: 40px; }\n\n.gradientKick {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy1ob21lLXBhZ2UvRDpcXFdvcmtzcGFjZVxca2lja0FwcFxca2lja2FwcC9zcmNcXGFwcFxcbG9hZGluZy1ob21lLXBhZ2VcXGxvYWRpbmctaG9tZS1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLG1CQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVcsRUFBQTs7QUFHZjtFQUNJLGdCQUFlO0VBQ2YsZUFBYztFQUNkLHlCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy1ob21lLXBhZ2UvbG9hZGluZy1ob21lLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBHRU5FUkFMIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5tYWluRGl2IHtcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbn1cclxuXHJcbi5tYWluU2xvZ2FuIHtcclxuICAgIG1hcmdpbi1ib3R0b206NDBweDsgLy8gU2l6ZSBpbiBnbG9iYWwuc2Nzc1xyXG59XHJcblxyXG4ubWFyZ2luVW5kZXJTbGcge1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbn1cclxuXHJcbi5ncmFkaWVudEtpY2sge1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/loading-home-page/loading-home-page.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/loading-home-page/loading-home-page.page.ts ***!
  \*************************************************************/
/*! exports provided: LoadingHomePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingHomePagePage", function() { return LoadingHomePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




var LoadingHomePagePage = /** @class */ (function () {
    function LoadingHomePagePage(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.slogan = "Rejoins la plus grande communauté rap de France !";
    }
    LoadingHomePagePage.prototype.ngOnInit = function () {
    };
    LoadingHomePagePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.authenticationService.authenticationState.subscribe(function (state) {
            if (state) {
                _this.router.navigate(['members', 'dashboard']);
            }
            else {
                _this.router.navigate(['home']);
            }
        });
    };
    LoadingHomePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-home-page',
            template: __webpack_require__(/*! ./loading-home-page.page.html */ "./src/app/loading-home-page/loading-home-page.page.html"),
            styles: [__webpack_require__(/*! ./loading-home-page.page.scss */ "./src/app/loading-home-page/loading-home-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoadingHomePagePage);
    return LoadingHomePagePage;
}());



/***/ })

}]);
//# sourceMappingURL=loading-home-page-loading-home-page-module.js.map