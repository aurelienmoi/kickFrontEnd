(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"],{

/***/ "./src/app/reset-password/reset-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/reset-password/reset-password.page.ts");








var routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordPage"]
    }
];
var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__["MbscModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordPage"]]
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.page.html":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"secondBg\">\r\n    <ion-title class=\"pageTitle\"><img src=\"assets/img/reset.png\" style=\"height:20px; width:auto; margin-top:10px;\" /></ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/login\" color=\"medium\" autoHide='false' text=\"\" icon=\"ios-arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen id=\"yellowBg\">\r\n  <form (ngSubmit)=\"resetPasswordForm()\">\r\n    <div class=\"ion-padding ion-text-center mainDiv\">\r\n      <p class=\"slogan gradientKick\">Mot de passe oublié ?</p>\r\n      <p>Entrez votre email pour recevoir un lien de réinitialisation du mot de passe</p>\r\n      <div class=\"marginUnderSlg\"></div>\r\n      <ion-input placeholder=\"Email\" type=\"email\" class=\"bgInput\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"resetPassword.email\" [pattern] =\"emailPattern\" required=\"true\"></ion-input>\r\n      <p *ngIf = \"email.errors?.pattern\">Email non valide</p>\r\n    \r\n      <ion-button color=\"dark\" type=\"submit\" class=\"registerBtn\" expand=\"full\">Envoyer</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/reset-password/reset-password.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainDiv {\n  padding-top: 55px; }\n\n.slogan {\n  margin-top: 50px; }\n\n.marginUnderSlg {\n  height: 40px; }\n\n.separator {\n  border-top: 1px solid black;\n  width: 45%;\n  margin-left: 54%; }\n\n.footerMsg {\n  font-size: small; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvRDpcXFdvcmtzcGFjZVxca2lja0FwcFxca2lja2FwcC9zcmNcXGFwcFxccmVzZXQtcGFzc3dvcmRcXHJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBVyxFQUFBOztBQUdmO0VBQ0ksMkJBQTBCO0VBQzFCLFVBQVM7RUFDVCxnQkFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEdFTkVSQUwgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLm1haW5EaXYge1xyXG4gICAgcGFkZGluZy10b3A6NTVweDtcclxufVxyXG5cclxuLnNsb2dhbiB7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7IC8vIFNpemUgaW4gZ2xvYmFsLnNjc3NcclxufVxyXG5cclxuLm1hcmdpblVuZGVyU2xnIHtcclxuICAgIGhlaWdodDo0MHB4O1xyXG59XHJcblxyXG4uc2VwYXJhdG9yIHtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6NDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6NTQlO1xyXG59XHJcblxyXG4uZm9vdGVyTXNnIHtcclxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var baseURL = "https://https://kickserver.xyz";
var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(http, router) {
        this.http = http;
        this.router = router;
        this.emailPattern = "[A-Za-z0-9._+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"; // maybe delete % from email patter to a void SQL injections
        this.resetPassword = {}; //necessary to use ngModel in our HTML
    }
    // TODO : IF THE INPUT IS EMPTY IT TRIGGERS AN ERROR IN NODE THAT CANT BE HANDLDED, NEEDS TO BLOCK THE FORM AS LONG AS IT DOESNT HAVE A VALID EMAIL ENTERED
    ResetPasswordPage.prototype.resetPasswordForm = function () {
        var data = {
            email: this.resetPassword.email
        };
        console.log(data);
        this.http.post(baseURL + "/chatApp/reset-password", data)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    ResetPasswordPage.prototype.changePassword = function () {
        var data = this.resetPassword.password;
    };
    ResetPasswordPage.prototype.ngOnInit = function () {
    };
    ResetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.page.html */ "./src/app/reset-password/reset-password.page.html"),
            styles: [__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/reset-password/reset-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=reset-password-reset-password-module.js.map