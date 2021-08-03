(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-about-about-module"],{

/***/ "./src/app/members/about/about.module.ts":
/*!***********************************************!*\
  !*** ./src/app/members/about/about.module.ts ***!
  \***********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/members/about/about.page.ts");
/* harmony import */ var src_app_members_layouts_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/members/_layouts/top-toolbar/top-toolbar.module */ "./src/app/members/_layouts/top-toolbar/top-toolbar.module.ts");








var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_members_layouts_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["TopToolbarModule"]
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/members/about/about.page.html":
/*!***********************************************!*\
  !*** ./src/app/members/about/about.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"kickBg\">\r\n    <ion-title class=\"icon whiteSmoke\">A propos</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/dashboard\" class=\"lightKick\" autoHide='false'>\r\n        <ion-icon class=\"settingBtn\" name=\"ios-arrow-forward\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-text-center mainDiv\">\r\n    <ion-item (click)=\"presentModalUsecase()\" color=\"secondary\">\r\n      <ion-icon slot=\"end\" name=\"tablet-portrait\"></ion-icon>\r\n      <ion-label>Fonctionnement de l'appli</ion-label>\r\n    </ion-item>\r\n    <ion-item (click)=\"presentModalTeam()\" color=\"primary\">\r\n      <ion-icon slot=\"end\" name=\"people\"></ion-icon>\r\n      <ion-label>L'équipe Kick</ion-label>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/members/about/about.page.scss":
/*!***********************************************!*\
  !*** ./src/app/members/about/about.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/members/about/about.page.ts":
/*!*********************************************!*\
  !*** ./src/app/members/about/about.page.ts ***!
  \*********************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _inc_about_usecase_about_usecase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_inc/about-usecase/about-usecase.page */ "./src/app/members/about/_inc/about-usecase/about-usecase.page.ts");
/* harmony import */ var _inc_modal_about_using_modal_about_using_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_inc/modal-about-using/modal-about-using.page */ "./src/app/members/about/_inc/modal-about-using/modal-about-using.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var AboutPage = /** @class */ (function () {
    function AboutPage(modalController) {
        this.modalController = modalController;
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage.prototype.presentModalTeam = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _inc_modal_about_using_modal_about_using_page__WEBPACK_IMPORTED_MODULE_2__["ModalAboutUsingPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AboutPage.prototype.presentModalUsecase = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _inc_about_usecase_about_usecase_page__WEBPACK_IMPORTED_MODULE_1__["AboutUsecasePage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/members/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/members/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=members-about-about-module.js.map