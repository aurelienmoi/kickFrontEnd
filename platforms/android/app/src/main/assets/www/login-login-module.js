(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");









var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    },
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__["MbscModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"!onLoading\">\r\n  <ion-toolbar class=\"secondBg\">\r\n    <ion-title class=\"pageTitle\"><img src=\"assets/img/login.png\" style=\"height:20px; width:auto; margin-top:10px;\" /></ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" color=\"medium\" autoHide='false' text=\"\" icon=\"ios-arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen id=\"yellowBg\">\r\n  <form (ngSubmit)=\"login()\" *ngIf=\"!onLoading\">\r\n    <div class=\"ion-padding ion-text-center mainDiv\">\r\n      <img src=\"assets/img/mainLogo.png\" class=\"mainLogo\" />\r\n      <p class=\"slogan gradientKick\">{{slogan}}</p>\r\n      <div class=\"marginUnderSlg\"></div>\r\n\r\n      <ion-input autofocus=\"true\" placeholder=\"{{usernameInput}}\" class=\"bgInput\" type=\"text\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"loginForm.username\" required (ionFocus)=\"usernameInpFoc()\" (ionBlur)=\"usernameInpBlur()\" [pattern]=\"usernamePattern\"></ion-input>\r\n      <p class=\"inputMsg\" *ngIf=\"usernameOnFocus\">{{usernameMsg}}</p>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n\r\n      <ion-input autofocus=\"true\" placeholder=\"{{passwordInput}}\" class=\"bgInput\" type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"loginForm.password\" #password=\"ngModel\" required (ionFocus)=\"passwordInpFoc()\" (ionBlur)=\"passwordInpBlur()\" [pattern]=\"passwordPattern\"></ion-input>\r\n      <p class=\"inputMsg\" *ngIf=\"passwordOnFocus\">{{passwordMsg}}</p>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n\r\n      <ion-button disabled *ngIf=\"wrongLogin\" expand=\"full\" color=\"danger\">{{wrongLoginMsg}}</ion-button>\r\n      <ion-button *ngIf=\"!password.errors?.pattern && !password.errors?.required && !username.errors?.pattern && !username.errors?.required && !wrongLogin\" expand=\"full\" color=\"dark\" type=\"submit\">{{loginBtn}}</ion-button>\r\n      <ion-button *ngIf=\"password.errors?.pattern || password.errors?.required || username.errors?.pattern || username.errors?.required && !wrongLogin\" expand=\"full\" color=\"dark\" disabled>{{loginBtn}}</ion-button>\r\n      \r\n      <div class=\"marginBetweenBtns\"></div>\r\n      <div class=\"separator\">\r\n          <p class=\"footerFormMsg\">{{resetPassMsg}} <a class=\"greyLink\" routerLink=\"/reset-password\" routerDirection=\"forward\">{{resetPassLink}}</a></p>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <img *ngIf=\"onLoading\" src=\"assets/img/loading.gif\" class=\"loadingImg\" />\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n  \r\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainDiv {\n  padding-top: 55px; }\n\n.slogan {\n  margin-top: 50px; }\n\n.separator {\n  border-top: 1px solid black;\n  width: 45%;\n  margin-left: 54%; }\n\n.footerMsg {\n  font-size: small; }\n\n.inputMsg {\n  font-size: small;\n  margin: 0; }\n\n.greyLink {\n  color: #757171; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFdvcmtzcGFjZVxca2lja0FwcFxca2lja2FwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFlLEVBQUE7O0FBR25CO0VBQ0ksMkJBQTBCO0VBQzFCLFVBQVM7RUFDVCxnQkFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFlLEVBQUE7O0FBR25CO0VBQ0ksZ0JBQWU7RUFDZixTQUFRLEVBQUE7O0FBR1o7RUFDSSxjQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBHRU5FUkFMIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5tYWluRGl2IHtcclxuICAgIHBhZGRpbmctdG9wOjU1cHg7XHJcbn1cclxuXHJcbi5zbG9nYW4ge1xyXG4gICAgbWFyZ2luLXRvcDo1MHB4OyAvLyBTaXplIGluIGdsb2JhbC5zY3NzXHJcbn1cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDo0NSU7XHJcbiAgICBtYXJnaW4tbGVmdDo1NCU7XHJcbn1cclxuXHJcbi5mb290ZXJNc2cge1xyXG4gICAgZm9udC1zaXplOnNtYWxsO1xyXG59XHJcblxyXG4uaW5wdXRNc2cge1xyXG4gICAgZm9udC1zaXplOnNtYWxsO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi5ncmV5TGluayB7XHJcbiAgICBjb2xvcjpyZ2IoMTE3LCAxMTMsIDExMyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");





var baseURL = "https://https://kickserver.xyz";
var LoginPage = /** @class */ (function () {
    function LoginPage(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        // Input patterns
        this.usernamePattern = "[A-Za-z0-9_-]{5,20}";
        this.passwordPattern = "^([a-zA-Z0-9@*#.!]{7,40})$";
        this.loginForm = {}; //nécessaire pour utiliser nGmodel dans la page html A REMETTRE 
        this.wrongLogs = false;
        this.pageTitle = "Connexion";
        this.slogan = "Bon retour parmi-nous";
        this.usernameInput = "Nom d'utilisateur";
        this.passwordInput = "Mot de passe";
        this.loginBtn = "Connexion";
        this.resetPassLink = "Mot de passe oublié ?";
        this.passwordMsg = "7 à 40 caractères";
        this.usernameMsg = "5 à 20 caractères";
        this.wrongLogin = false;
        this.onLoading = false;
        this.wrongLoginMsg = "Identifiants incorrects";
    }
    LoginPage.prototype.usernameInpFoc = function () {
        this.usernameOnFocus = true;
        this.wrongLogin = false;
    };
    LoginPage.prototype.usernameInpBlur = function () {
        this.usernameOnFocus = false;
    };
    LoginPage.prototype.passwordInpFoc = function () {
        this.passwordOnFocus = true;
        this.wrongLogin = false;
    };
    LoginPage.prototype.passwordInpBlur = function () {
        this.passwordOnFocus = false;
    };
    //------------------------------------------------------------------Login function--------------------------------------------------------
    LoginPage.prototype.login = function () {
        var _this = this;
        this.onLoading = true;
        var data = {
            username: this.loginForm.username,
            password: this.loginForm.password
        };
        // this.authService.logout(); If token isn't removed, add this line
        this.http.post(baseURL + "/chatApp/login", data)
            .subscribe(function (response) {
            console.log(response);
            if (response.loggedIn === true) {
                _this.rowUsername = response.username;
                _this.rowIsArtist = response.isArtiste;
                _this.rowIsBeatmaker = response.isBeatmaker;
                _this.rowBio = response.bio;
                _this.rowRegistrationDate = response.registrationDate;
                _this.rowId = response.id;
                _this.following = response.following;
                _this.followers = response.followers;
                _this.pseudo = response.pseudo;
                console.log("POST call successful value returned in body", response);
                var token = response.token;
                var expiresIn = response.expiresIn;
                _this.authService.login(token, expiresIn);
                _this.authService.loginDataStorage(_this.rowUsername, _this.rowIsArtist, _this.rowIsBeatmaker, _this.rowBio, _this.rowRegistrationDate, _this.rowId, _this.following, _this.followers, _this.pseudo);
                setTimeout(function () { _this.router.navigateByUrl('/members/dashboard'); }, 2500);
            }
            else {
                _this.wrongLogs = true;
            }
        }, function (err) {
            setTimeout(function () { _this.onLoading = false; _this.wrongLogin = true; }, 2500);
        });
    };
    LoginPage.prototype.checkTokenTest = function () {
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map