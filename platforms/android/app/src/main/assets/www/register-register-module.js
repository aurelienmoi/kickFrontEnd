(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");









var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__["MbscModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"secondBg\">\r\n    <ion-title class=\"pageTitle\"><img src=\"assets/img/signup.png\" style=\"height:20px; width:auto; margin-top:10px;\" /></ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button *ngIf=\"!snapStep\" (click)=\"changeStep()\" color=\"medium\">\r\n        <ion-icon name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n      <ion-back-button *ngIf=\"snapStep\" defaultHref=\"/home\" color=\"medium\" autoHide='false' text=\"\" icon=\"ios-arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen id=\"yellowBg\">\r\n  <div class=\"ion-padding ion-text-center mainDiv\" *ngIf=\"!onLoading\">\r\n    <form *ngIf=\"snapStep && isSnapSync\" (ngSubmit)=\"changeStep()\">\r\n      <div class=\"marginUnderSlg\"></div>\r\n      <ion-button color=\"snapchat\">Synchronisation avec Snapchat r??ussie !</ion-button>\r\n      <div class=\"marginUnderSlg\"></div>\r\n      <img src=\"{{snapUserAvatarUrl}}\" class=\"bmjLogo\"><br/>\r\n      <ion-chip color=\"snapchat\">\r\n        <ion-icon name=\"logo-snapchat\"></ion-icon>\r\n        <ion-label>{{snapUserPseudo}}</ion-label>\r\n      </ion-chip>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n      <p class=\"slogan gradientKick\">Choisis ton blaze Kick : </p>\r\n      <ion-input name=\"pseudo\" minlength=\"2\" maxlength=\"25\" #pseudo=\"ngModel\" [(ngModel)]=\"register.pseudo\" required type=\"text\"></ion-input>\r\n      <div class=\"marginUnderSlg\"></div>\r\n      <ion-button expand=\"full\" color=\"light\" type=\"submit\">Continuer</ion-button>\r\n    </form>\r\n\r\n    <form *ngIf=\"snapStep && !isSnapSync\" (ngSubmit)=\"changeStep()\">\r\n      <div class=\"marginUnderSlg\"></div>\r\n      <p class=\"slogan gradientKick\">Profite du bitmoji ! Connecte-toi avec</p>\r\n      <img src=\"assets/img/bitmojis.png\">\r\n      <div class=\"marginBetweenInputs\"></div>\r\n      <ion-button color=\"snapchat\" shape=\"round\" (click)=\"goToSnap()\"> <!-- routerLink=\"/snap-register\"-->\r\n        <img src=\"assets/icon/snapchat.png\" class=\"snapchatLogo\">\r\n        <span class=\"snapchat\">Snapchat</span>\r\n      </ion-button>\r\n      <div class=\"marginUnderSlg\"></div>\r\n      <h2 class=\"borderTitle\"><span class=\"spanSlogan\"><span class=\"slogan gradientKick\">Ou continue sans Snapchat</span></span></h2>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n      <p class=\"slogan gradientKick\">Choisis ton blaze Kick : </p>\r\n      <ion-input name=\"pseudo\" minlength=\"2\" maxlength=\"25\" #pseudo=\"ngModel\" [(ngModel)]=\"register.pseudo\" required type=\"text\" placeholder=\"Ton blaze\"></ion-input>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n      <ion-button expand=\"full\" color=\"light\" type=\"submit\">Continuer</ion-button>\r\n    </form>\r\n\r\n    <form (ngSubmit)=\"registerForm()\" *ngIf=\"!snapStep\">\r\n      <p class=\"slogan gradientKick\">{{slogan}}</p>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n      <img *ngIf=\"!isSnapSync\" src=\"assets/img/mainLogo.png\" class=\"mainLogo\">\r\n      <img *ngIf=\"isSnapSync\" src=\"{{snapUserAvatarUrl}}\" class=\"bmjLogo\" />\r\n      <div class=\"marginUnderSlg\"></div>\r\n      <p class=\"slogan\"><ion-text>{{userPseudo}}</ion-text></p>\r\n      <div class=\"marginUnderSlg\"></div>\r\n      <!-- USERNAME INPUT -->\r\n      <ion-text color=\"light\">@</ion-text><ion-input name=\"username\" type=\"text\" [pattern]=\"usernamePattern\" #username=\"ngModel\" [(ngModel)]=\"register.username\" required (ionFocus)=\"usernameInpFoc()\" (ionBlur)=\"usernameInpBlur()\" class=\"usernameInput bgInput\" placeholder=\"{{usernameInput}}\"></ion-input>\r\n      <ion-icon *ngIf = \"username.errors?.required\" style=\"color:transparent;\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!username.errors?.pattern && !username.errors?.required && !wrongUsername\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"username.errors?.pattern || wrongUsername\" color=\"danger\" name=\"close-circle\"></ion-icon>\r\n      <p class=\"inputMsg\" *ngIf=\"usernameOnFocus\">{{usernameMsg}}</p>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n\r\n      <!-- EMAIL INPUT -->\r\n      <ion-input name=\"email\" type=\"email\" [pattern]=\"emailPattern\" #email=\"ngModel\" [(ngModel)]=\"register.email\" required (ionFocus)=\"emailInpFoc()\" (ionBlur)=\"emailInpBlur()\" placeholder=\"{{emailInput}}\" class=\"emailInput bgInput\"></ion-input>\r\n      <ion-icon *ngIf = \"email.errors?.required\" style=\"color:transparent;\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!email.errors?.pattern && !email.errors?.required && !wrongMail\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"email.errors?.pattern || wrongMail\" color=\"danger\" name=\"close-circle\"></ion-icon>\r\n      <p class=\"inputMsg\" *ngIf=\"emailOnFocus\">{{emailMsg}}</p>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n\r\n      <!-- PASSWORD INPUT -->\r\n      <ion-input name=\"password\" type=\"password\" [pattern]=\"passwordPattern\" #password=\"ngModel\" [(ngModel)]=\"register.password\" required (ionFocus)=\"passwordInpFoc()\" (ionBlur)=\"passwordInpBlur()\" placeholder=\"{{passwordInput}}\" class=\"passInput bgInput\"></ion-input>\r\n      <ion-icon *ngIf = \"password.errors?.required\" style=\"color:transparent;\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!password.errors?.pattern && !password.errors?.required\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"password.errors?.pattern\" color=\"danger\" name=\"close-circle\"></ion-icon>\r\n\r\n      <!-- CONFIRM PASSWORD INPUT -->\r\n      <ion-input name=\"confirmPassword\" type=\"password\" [pattern]=\"passwordPattern\" #passwordConfirm=\"ngModel\" [(ngModel)]=\"register.passwordConfirm\" required (ionFocus)=\"passwordInpFoc()\" (ionBlur)=\"passwordInpBlur()\" (ionChange)=\"passwordConfChange()\" placeholder=\"{{passwordConfirmInput}}\" class=\"passInput bgInput\"></ion-input>\r\n      <ion-icon *ngIf = \"passwordConfirm.errors?.required\" style=\"color:transparent;\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!passwordConfirm.errors?.pattern && !passwordConfirm.errors?.required && passwordMatches\" color=\"success\" name=\"checkmark-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"passwordConfirm.errors?.pattern && !passwordMatches\" color=\"danger\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!passwordConfirm.errors?.pattern && !passwordMatches && !passwordConfirm.errors?.required\" color=\"danger\" name=\"close-circle\"></ion-icon>\r\n      <p class=\"inputMsg\" *ngIf=\"passwordOnFocus\">{{passwordMsg}}</p>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n      <!-- SUBMIT -->\r\n      <ion-button *ngIf=\"!passwordConfirm.errors?.pattern && !passwordConfirm.errors?.required && !password.errors?.pattern && !password.errors?.required && !email.errors?.pattern && !email.errors?.required && !username.errors?.pattern && !username.errors?.required && passwordMatches && !wrongMail && !wrongUsername && !logError\" expand=\"full\" color=\"light\" type=\"submit\">{{loginBtn}}</ion-button>\r\n      <ion-button *ngIf=\"passwordConfirm.errors?.pattern || passwordConfirm.errors?.required || password.errors?.pattern || password.errors?.required || email.errors?.pattern || email.errors?.required || username.errors?.pattern || username.errors?.required || !passwordMatches\" expand=\"full\" color=\"dark\" disabled>{{loginBtn}}</ion-button>\r\n      <ion-button disabled *ngIf=\"wrongMail\" expand=\"full\" color=\"danger\">{{wrongMailMsg}}</ion-button>\r\n      <ion-button disabled *ngIf=\"wrongUsername\" expand=\"full\" color=\"danger\">{{wrongUsernameMsg}}</ion-button>\r\n      <ion-button disabled *ngIf=\"logError\" expand=\"full\" color=\"danger\">{{logErrorMsg}}</ion-button>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n      <h2 class=\"inputMsg\">D??j?? un compte ? <ion-text color=\"success\" routerLink=\"/login\">Connexion</ion-text> ou <ion-text color=\"success\" routerLink=\"/reset-password\">Mot de passe oubli?? ?</ion-text></h2>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n    </form>\r\n\r\n    <!-- CGU -->\r\n    <div class=\"separator\">\r\n      <p class=\"footerFormMsg\">{{signupMsg}} <br><a href=\"http://kickapp.fr/cgu\"><ion-text color=\"success\">{{signupLink}} <ion-icon name=\"open\"></ion-icon></ion-text></a></p>\r\n    </div>\r\n  </div>\r\n  <img *ngIf=\"onLoading\" src=\"assets/img/loading.gif\" class=\"loadingImg\" />\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainDiv {\n  padding-top: 0; }\n\n.slogan {\n  margin-top: 20px; }\n\n.marginUnderSlg {\n  height: 45px; }\n\n.bmjLogo {\n  width: 130px;\n  height: auto;\n  border-radius: 50%; }\n\n.snapchatLogo {\n  width: 30px;\n  height: auto;\n  margin-right: 5px; }\n\n.borderTitle {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px solid #707070;\n  line-height: 0em;\n  margin: 10px 0 20px; }\n\n.borderTitle .spanSlogan {\n  background-color: #131313 !important;\n  padding: 0 10px; }\n\n.usernameInput {\n  width: 60%;\n  display: inline-block; }\n\n.emailInput {\n  width: 60%;\n  display: inline-block; }\n\n.passInput {\n  width: 40%;\n  display: inline-block;\n  margin-left: 10px; }\n\n.inputMsg {\n  font-size: small;\n  margin: 0; }\n\n.separator {\n  border-top: 1px solid black;\n  width: 70%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXFdvcmtzcGFjZVxca2lja0FwcFxca2lja2FwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQWEsRUFBQTs7QUFLakI7RUFDSSxnQkFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVc7RUFDWCxZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksb0NBQTJDO0VBQzNDLGVBQWMsRUFBQTs7QUFLbEI7RUFDSSxVQUFTO0VBQ1QscUJBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksVUFBUztFQUNULHFCQUFvQixFQUFBOztBQUd4QjtFQUNJLFVBQVM7RUFDVCxxQkFBb0I7RUFDcEIsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWU7RUFDZixTQUFRLEVBQUE7O0FBS1o7RUFDSSwyQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBHRU5FUkFMIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5tYWluRGl2IHtcclxuICAgIHBhZGRpbmctdG9wOjA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQkVGT1JFIEZPUk0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnNsb2dhbiB7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7IC8vIFNpemUgaW4gZ2xvYmFsLnNjc3NcclxufVxyXG5cclxuLm1hcmdpblVuZGVyU2xnIHtcclxuICAgIGhlaWdodDo0NXB4O1xyXG59XHJcblxyXG4uYm1qTG9nbyB7XHJcbiAgICB3aWR0aDoxMzBweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbn1cclxuXHJcbi5zbmFwY2hhdExvZ28ge1xyXG4gICAgd2lkdGg6MzBweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxufVxyXG5cclxuLmJvcmRlclRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDExMiwgMTEyLCAxMTIpOyBcclxuICAgIGxpbmUtaGVpZ2h0OiAwZW07XHJcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xyXG59IFxyXG4gXHJcbi5ib3JkZXJUaXRsZSAuc3BhblNsb2dhbiB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTksIDE5LCAxOSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6MCAxMHB4OyBcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBJTlBVVFMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnVzZXJuYW1lSW5wdXQge1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5lbWFpbElucHV0IHtcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGFzc0lucHV0IHtcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxufVxyXG5cclxuLmlucHV0TXNnIHtcclxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEFGVEVSIEZPUk0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnNlcGFyYXRvciB7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(http, router, alertController, route, toastController) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        this.route = route;
        this.toastController = toastController;
        // PATTERN INPUT
        this.register = {}; //n??cessaire pour utiliser nGmodel dans la page html
        this.emailPattern = "[A-Za-z0-9._+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"; // maybe delete % from email patter to a void SQL injections
        this.usernamePattern = "[A-Za-z0-9_-]{5,20}";
        this.passwordPattern = "^([a-zA-Z0-9@*#.!]{7,40})$";
        this.passwordConfirmPattern = "^([a-zA-Z0-9@*#.!]{7,40})$";
        this.pageTitle = "Inscription";
        this.slogan = "Plus qu'une petite ??tape...";
        this.usernameInput = "Nom d'utilisateur";
        this.emailInput = "Email";
        this.emailConfirmInput = "Confirmer";
        this.passwordInput = "Mot de passe";
        this.passwordConfirmInput = "Confirmer";
        this.passwordMsg = "7 ?? 40 caract??res. Caract??res sp??ciaux accept??s";
        this.emailMsg = "example@email.com";
        this.usernameMsg = "5 ?? 20 caract??res. Chiffres et underscore accept??s.";
        this.loginBtn = "Inscription";
        this.signupMsg = "En cliquant sur inscription, je reconnait avoir lu et approuv?? les";
        this.signupLink = "Conditions G??n??rales d'Utilisation";
        this.wrongMail = false;
        this.wrongMail1 = false;
        this.wrongUsername = false;
        this.logError = false;
        this.wrongMailMsg = "Email d??j?? enregistr??";
        this.wrongUsernameMsg = "Nom d'utilisateur d??j?? enregistr??";
        this.logErrorMsg = "Erreur lors de l'inscription";
        this.snapStep = false;
        this.isSnapSync = false;
        this.onLoading = false;
        this.goSnap = "connectSnap";
    }
    RegisterPage.prototype.ionViewWillEnter = function () {
    };
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.snapUserAvatarId = params.get('snapUserAvatarId');
            _this.snapUserId = params.get('snapUserId');
            _this.snapUserAvatarUrl = params.get('snapUserAvatarUrl');
            _this.snapUserPseudo = params.get('snapUserPseudo');
            console.log(_this.snapUserPseudo);
            if (_this.snapUserPseudo != null) {
                _this.isSnapSync = true;
            }
            _this.snapStep = true;
        });
    };
    RegisterPage.prototype.goToSnap = function () {
        this.router.navigate(['/home', this.goSnap]);
    };
    RegisterPage.prototype.registerForm = function () {
        var _this = this;
        this.onLoading = true;
        var data;
        if (this.isSnapSync) {
            data = {
                pseudo: this.register.pseudo,
                username: this.register.username,
                email: this.register.email,
                password: this.register.password,
                snapAvatarId: this.snapUserAvatarId,
                snapUserId: this.snapUserId,
                snapAvatarUrl: this.snapUserAvatarUrl,
                snapPseudo: this.snapUserPseudo
            };
        }
        else {
            data = {
                pseudo: this.register.pseudo,
                username: this.register.username,
                email: this.register.email,
                password: this.register.password
            };
        }
        this.http.post('https://https://kickserver.xyz/chatApp/registerMongoDB', data)
            .subscribe(function (response) {
            if (response.registeredIn === true) {
                // this.presentAlert("Inscription r??ussie!","","Vous pouvez d??sormais vous connecter sur kickapp")
                _this.onLoading = true;
                _this.presentToast();
                setTimeout(function () { _this.router.navigate(['login']); }, 2500);
                console.log('Operation validee', response.registeredIn);
            }
            else if (response.emailAlreadyExisting === true) {
                _this.onLoading = false;
                _this.wrongMail = true;
                setTimeout(function () { _this.wrongMail1 = true; }, 1000);
            }
            else if (response.usernameAlreadyExisting === true) {
                _this.onLoading = false;
                _this.wrongUsername = true;
                console.log(_this.wrongUsername);
            }
            console.log(response);
        }, function (err) {
            _this.onLoading = false;
            _this.logError = true;
        });
    };
    RegisterPage.prototype.changeStep = function () {
        this.snapStep = !this.snapStep;
        this.userPseudo = this.register.pseudo;
    };
    // onKey(event) {this.pseudo = event.target.value; console.log(inputValue)}
    RegisterPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Inscription complet??e ! Connecte-toi ?? pr??sent.',
                            duration: 2500
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.presentAlert = function (header, subHeader, message) {
        var alert = document.createElement('ion-alert');
        alert.header = header;
        alert.subHeader = subHeader;
        alert.message = message;
        alert.buttons = ['OK'];
        document.body.appendChild(alert);
        return alert.present();
    };
    RegisterPage.prototype.alertBitmoji = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Bitmoji',
                            message: 'Bitmoji n\'a pas encore ??t?? integr?? ?? Kick',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.wrongEmailRemove = function () {
        this.wrongMail1 = false;
    };
    RegisterPage.prototype.usernameInpFoc = function () {
        this.usernameOnFocus = true;
        this.wrongMail = false;
        this.wrongUsername = false;
        this.logError = false;
    };
    RegisterPage.prototype.usernameInpBlur = function () {
        this.usernameOnFocus = false;
    };
    RegisterPage.prototype.emailInpFoc = function () {
        this.emailOnFocus = true;
        this.wrongMail = false;
        this.wrongUsername = false;
        this.logError = false;
    };
    RegisterPage.prototype.emailInpBlur = function () {
        this.emailOnFocus = false;
    };
    RegisterPage.prototype.passwordInpFoc = function () {
        this.passwordOnFocus = true;
        this.wrongMail = false;
        this.wrongUsername = false;
        this.logError = false;
    };
    RegisterPage.prototype.passwordInpBlur = function () {
        this.passwordOnFocus = false;
    };
    RegisterPage.prototype.passwordConfChange = function () {
        if (this.register.password === this.register.passwordConfirm) {
            this.passwordMatches = true;
        }
        else {
            this.passwordMatches = false;
        }
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map