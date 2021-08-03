(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-confirm-new-password-confirm-new-password-module"],{

/***/ "./src/app/public/confirm-new-password/confirm-new-password.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/public/confirm-new-password/confirm-new-password.module.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmNewPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmNewPasswordPageModule", function() { return ConfirmNewPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirm_new_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-new-password.page */ "./src/app/public/confirm-new-password/confirm-new-password.page.ts");







var routes = [
    {
        path: '',
        component: _confirm_new_password_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmNewPasswordPage"]
    }
];
var ConfirmNewPasswordPageModule = /** @class */ (function () {
    function ConfirmNewPasswordPageModule() {
    }
    ConfirmNewPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_confirm_new_password_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmNewPasswordPage"]]
        })
    ], ConfirmNewPasswordPageModule);
    return ConfirmNewPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/public/confirm-new-password/confirm-new-password.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/public/confirm-new-password/confirm-new-password.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>confirmNewPassword</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form (ngSubmit)= \"confirmNewPassword()\">\r\n\r\n    <ion-item>\r\n      <ion-label position =\"floating\" >changer de mot de passe</ion-label>\r\n      <ion-input type=\"password\" name= \"newPassword\"  #password=\"ngModel\" [(ngModel)]=\"newPassword.password\" required=\"true\" maxlength=\"40\"  minlength=\"7\" ></ion-input>\r\n      <div *ngIf =\"newPassword.errors?.minlength\" >Password 7 caracteres mini 40 maxi </div>\r\n    </ion-item>\r\n    <ion-button type=\"submit\" class=\"registerBtn\" expand=\"full\">Envoyer</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/public/confirm-new-password/confirm-new-password.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/public/confirm-new-password/confirm-new-password.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9jb25maXJtLW5ldy1wYXNzd29yZC9jb25maXJtLW5ldy1wYXNzd29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/confirm-new-password/confirm-new-password.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/public/confirm-new-password/confirm-new-password.page.ts ***!
  \**************************************************************************/
/*! exports provided: ConfirmNewPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmNewPasswordPage", function() { return ConfirmNewPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var baseURL = "https://https://kickserver.xyz";
var ConfirmNewPasswordPage = /** @class */ (function () {
    function ConfirmNewPasswordPage(http, route) {
        this.http = http;
        this.route = route;
        this.newPassword = {}; //necessary to use ngModel in our HTML
    }
    ConfirmNewPasswordPage.prototype.ngOnInit = function () {
    };
    ConfirmNewPasswordPage.prototype.confirmNewPassword = function () {
        var _this = this;
        var data = {
            password: this.newPassword.password
        };
        this.route.params.subscribe(function (params) {
            console.log(params);
            var userId = params.userId;
            var token = params.token;
            _this.http.post(baseURL + "/chatApp/receive_new_password/" + userId + "/" + token, data)
                .subscribe(function (response) {
                alert(response);
            });
        });
    };
    ConfirmNewPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-new-password',
            template: __webpack_require__(/*! ./confirm-new-password.page.html */ "./src/app/public/confirm-new-password/confirm-new-password.page.html"),
            styles: [__webpack_require__(/*! ./confirm-new-password.page.scss */ "./src/app/public/confirm-new-password/confirm-new-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ConfirmNewPasswordPage);
    return ConfirmNewPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-confirm-new-password-confirm-new-password-module.js.map