(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-snap-register-snap-register-module"],{

/***/ "./src/app/public/snap-register/snap-register.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/public/snap-register/snap-register.module.ts ***!
  \**************************************************************/
/*! exports provided: SnapRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapRegisterPageModule", function() { return SnapRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inc_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_inc/footer/footer.module */ "./src/app/public/_inc/footer/footer.module.ts");
/* harmony import */ var _snap_register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./snap-register.page */ "./src/app/public/snap-register/snap-register.page.ts");








var routes = [
    {
        path: '',
        component: _snap_register_page__WEBPACK_IMPORTED_MODULE_7__["SnapRegisterPage"]
    }
];
var SnapRegisterPageModule = /** @class */ (function () {
    function SnapRegisterPageModule() {
    }
    SnapRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _inc_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_snap_register_page__WEBPACK_IMPORTED_MODULE_7__["SnapRegisterPage"]]
        })
    ], SnapRegisterPageModule);
    return SnapRegisterPageModule;
}());



/***/ }),

/***/ "./src/app/public/snap-register/snap-register.page.html":
/*!**************************************************************!*\
  !*** ./src/app/public/snap-register/snap-register.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"secondBg\">\r\n    <ion-title class=\"pageTitle\"><img src=\"assets/img/signup.png\" style=\"height:20px; width:auto; margin-top:10px;\" /></ion-title>\r\n    <ion-button class=\"toolbarButton\" fill=\"clear\" color=\"medium\" routerLink=\"/home\" routerDirection=\"back\">\r\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen id=\"yellowBg\">\r\n  <div class=\"ion-padding ion-text-center mainDiv\">\r\n    <p class=\"slogan gradientKick\">{{slogan}}</p>\r\n    <div class=\"marginUnderSlg\"></div>\r\n    <form (ngSubmit)=\"registerForm()\">\r\n\r\n      <!-- PSEUDO INPUT -->\r\n      <ion-input name=\"pseudo\" type=\"text\" [pattern]=\"pseudoPattern\" #pseudo=\"ngModel\" [(ngModel)]=\"register.pseudo\" required (ionFocus)=\"pseudoInpFoc()\" (ionBlur)=\"pseudoInpBlur()\" placeholder=\"{{pseudoInput}}\" class=\"usernameInput bgInput\"></ion-input>\r\n      <ion-icon *ngIf = \"pseudo.errors?.required\" style=\"color:transparent;\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!pseudo.errors?.pattern && !pseudo.errors?.required\" style=\"color:green;\" name=\"checkmark-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"pseudo.errors?.pattern\" style=\"color:red;\" name=\"close-circle\"></ion-icon>\r\n      <p class=\"inputMsg\" *ngIf=\"pseudoOnFocus\">{{pseudoMsg}}</p>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n\r\n      <!-- USERNAME INPUT -->\r\n      <ion-input name=\"username\" type=\"text\" [pattern]=\"usernamePattern\" #username=\"ngModel\" [(ngModel)]=\"register.username\" required (ionFocus)=\"usernameInpFoc()\" (ionBlur)=\"usernameInpBlur()\" placeholder=\"{{usernameInput}}\" class=\"usernameInput bgInput\"></ion-input>\r\n      <ion-icon *ngIf = \"username.errors?.required\" style=\"color:transparent;\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!username.errors?.pattern && !username.errors?.required\" style=\"color:green;\" name=\"checkmark-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"username.errors?.pattern\" style=\"color:red;\" name=\"close-circle\"></ion-icon>\r\n      <p class=\"inputMsg\" *ngIf=\"usernameOnFocus\">{{usernameMsg}}</p>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n\r\n      <!-- EMAIL INPUT -->\r\n      <ion-input name=\"email\" type=\"email\" [pattern]=\"emailPattern\" #email=\"ngModel\" [(ngModel)]=\"register.email\" required (ionFocus)=\"emailInpFoc()\" (ionBlur)=\"emailInpBlur()\" placeholder=\"{{emailInput}}\" class=\"emailInput bgInput\"></ion-input>\r\n      <ion-icon *ngIf = \"email.errors?.required\" style=\"color:transparent;\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!email.errors?.pattern && !email.errors?.required\" style=\"color:green;\" name=\"checkmark-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"email.errors?.pattern\" style=\"color:red;\" name=\"close-circle\"></ion-icon>\r\n      <p class=\"inputMsg\" *ngIf=\"emailOnFocus\">{{emailMsg}}</p>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n\r\n      <!-- PASSWORD INPUT -->\r\n      <ion-input name=\"password\" type=\"password\" [pattern]=\"passwordPattern\" #password=\"ngModel\" [(ngModel)]=\"register.password\" required (ionFocus)=\"passwordInpFoc()\" (ionBlur)=\"passwordInpBlur()\" placeholder=\"{{passwordInput}}\" class=\"passInput bgInput\"></ion-input>\r\n      <ion-icon *ngIf = \"password.errors?.required\" style=\"color:transparent;\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!password.errors?.pattern && !password.errors?.required\" style=\"color:green;\" name=\"checkmark-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"password.errors?.pattern\" style=\"color:red;\" name=\"close-circle\"></ion-icon>\r\n\r\n      <!-- CONFIRM PASSWORD INPUT -->\r\n      <ion-input name=\"confirmPassword\" type=\"password\" [pattern]=\"passwordPattern\" #passwordConfirm=\"ngModel\" [(ngModel)]=\"register.passwordConfirm\" required (ionFocus)=\"passwordInpFoc()\" (ionBlur)=\"passwordInpBlur()\" (ionChange)=\"passwordConfChange()\" placeholder=\"{{passwordConfirmInput}}\" class=\"passInput bgInput\"></ion-input>\r\n      <ion-icon *ngIf = \"passwordConfirm.errors?.required\" style=\"color:transparent;\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!passwordConfirm.errors?.pattern && !passwordConfirm.errors?.required && passwordMatches\" style=\"color:green;\" name=\"checkmark-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"passwordConfirm.errors?.pattern && !passwordMatches\" style=\"color:red;\" name=\"close-circle\"></ion-icon>\r\n      <ion-icon *ngIf = \"!passwordConfirm.errors?.pattern && !passwordMatches && !passwordConfirm.errors?.required\" style=\"color:red;\" name=\"close-circle\"></ion-icon>\r\n      <p class=\"inputMsg\" *ngIf=\"passwordOnFocus\">{{passwordMsg}}</p>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n      <!-- SUBMIT -->\r\n      <ion-button *ngIf=\"!passwordConfirm.errors?.pattern && !passwordConfirm.errors?.required && !password.errors?.pattern && !password.errors?.required && !email.errors?.pattern && !email.errors?.required && !username.errors?.pattern && !username.errors?.required && passwordMatches\" expand=\"full\" color=\"tertiary\" type=\"submit\">{{loginBtn}}</ion-button>\r\n      <ion-button *ngIf=\"passwordConfirm.errors?.pattern || passwordConfirm.errors?.required || password.errors?.pattern || password.errors?.required || email.errors?.pattern || email.errors?.required || username.errors?.pattern || username.errors?.required || !passwordMatches\" expand=\"full\" color=\"tertiary\" disabled>{{loginBtn}}</ion-button>\r\n      <div class=\"marginBetweenInputs\"></div>\r\n    </form>\r\n\r\n    <!-- CGU -->\r\n    <div class=\"separator\">\r\n      <p class=\"footerFormMsg\">{{signupMsg}} <br><a href=\"http://kickapp.fr/cgu\">{{signupLink}} <ion-icon name=\"open\"></ion-icon></a></p>\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/public/snap-register/snap-register.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/public/snap-register/snap-register.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainDiv {\n  padding-top: 0; }\n\n.slogan {\n  margin-top: 20px; }\n\n.marginUnderSlg {\n  height: 45px; }\n\n.bmjLogo {\n  width: 100px;\n  height: auto;\n  border-radius: 50%; }\n\n.usernameInput {\n  width: 60%;\n  display: inline-block; }\n\n.emailInput {\n  width: 60%;\n  display: inline-block; }\n\n.passInput {\n  width: 40%;\n  display: inline-block;\n  margin-left: 10px; }\n\n.inputMsg {\n  font-size: small;\n  margin: 0; }\n\n.separator {\n  border-top: 1px solid black;\n  width: 70%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL3NuYXAtcmVnaXN0ZXIvRDpcXFdvcmtzcGFjZVxca2lja0FwcFxcS2lja2FwcC9zcmNcXGFwcFxccHVibGljXFxzbmFwLXJlZ2lzdGVyXFxzbmFwLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQWEsRUFBQTs7QUFLakI7RUFDSSxnQkFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVc7RUFDWCxZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBS3JCO0VBQ0ksVUFBUztFQUNULHFCQUFvQixFQUFBOztBQUd4QjtFQUNJLFVBQVM7RUFDVCxxQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxVQUFTO0VBQ1QscUJBQW9CO0VBQ3BCLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFlO0VBQ2YsU0FBUSxFQUFBOztBQUtaO0VBQ0ksMkJBQTBCO0VBQzFCLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zbmFwLXJlZ2lzdGVyL3NuYXAtcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBHRU5FUkFMIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5tYWluRGl2IHtcclxuICAgIHBhZGRpbmctdG9wOjA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQkVGT1JFIEZPUk0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnNsb2dhbiB7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7IC8vIFNpemUgaW4gZ2xvYmFsLnNjc3NcclxufVxyXG5cclxuLm1hcmdpblVuZGVyU2xnIHtcclxuICAgIGhlaWdodDo0NXB4O1xyXG59XHJcblxyXG4uYm1qTG9nbyB7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gSU5QVVRTIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi51c2VybmFtZUlucHV0IHtcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZW1haWxJbnB1dCB7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnBhc3NJbnB1dCB7XHJcbiAgICB3aWR0aDo0MCU7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1zZyB7XHJcbiAgICBmb250LXNpemU6c21hbGw7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBBRlRFUiBGT1JNIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/public/snap-register/snap-register.page.ts":
/*!************************************************************!*\
  !*** ./src/app/public/snap-register/snap-register.page.ts ***!
  \************************************************************/
/*! exports provided: SnapRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapRegisterPage", function() { return SnapRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SnapRegisterPage = /** @class */ (function () {
    function SnapRegisterPage(http, router, alertController) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        // PATTERN INPUT
        this.register = {}; //n??cessaire pour utiliser nGmodel dans la page html
        this.pseudoPattern = ".{2,25}";
        this.emailPattern = "[A-Za-z0-9._+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"; // maybe delete % from email patter to a void SQL injections
        this.usernamePattern = "[A-Za-z0-9_-]{5,20}";
        this.passwordPattern = "^([a-zA-Z0-9@*#.!]{7,40})$";
        this.passwordConfirmPattern = "^([a-zA-Z0-9@*#.!]{7,40})$";
        this.pageTitle = "Inscription";
        this.slogan = "Plus qu'une petite ??tape...";
        this.pseudoInput = "Blaze";
        this.usernameInput = "Nom d'utilisateur";
        this.emailInput = "Email";
        this.emailConfirmInput = "Confirmer";
        this.passwordInput = "Mot de passe";
        this.passwordConfirmInput = "Confirmer";
        this.pseudoMsg = "2 ?? 25 caract??res. Tous caract??res accept??s";
        this.passwordMsg = "7 ?? 40 caract??res. Caract??res sp??ciaux accept??s";
        this.emailMsg = "example@email.com";
        this.usernameMsg = "5 ?? 20 caract??res. Chiffres et underscore autoris??s";
        this.loginBtn = "Inscription";
        this.signupMsg = "En cliquant sur inscription, je reconnait avoir lu et approuv?? les";
        this.signupLink = "Conditions G??n??rales d'Utilisation";
    }
    SnapRegisterPage.prototype.registerForm = function () {
        var _this = this;
        console.log(this.register.email);
        var data = {
            username: this.register.username,
            email: this.register.email,
            password: this.register.password
        };
        this.http.post('https://https://kickserver.xyz/chatApp/registerMongoDB', data)
            .subscribe(function (response) {
            if (response.registeredIn === true) {
                _this.presentAlert("Inscription r??ussie!", "", "Vous pouvez d??sormais vous connecter sur kickapp");
                console.log('Operation validee', response.registeredIn);
                _this.router.navigate(['login']);
            }
            else if (response.emailAlreadyExisting === true) {
                _this.presentAlert("Inscription refus??e", '', "Email d??ja existant");
                console.log("email deja existant");
                //TODO ADD A MESSAGE THAT POPS TO SAY TO THE CLIENT EMAIL ALREADY  EXISTING
                // TODO ADD A MESAGE IF USERNAME ALREADY TAKEN?
            }
            else if (response.usernameAlreadyExisting === true) {
                _this.presentAlert("Inscription refus??e", '', "Nom d'utillisateur d??ja existant");
            }
            console.log(response);
        }, function (err) {
            alert("erreur lors de l'inscription");
        });
    };
    SnapRegisterPage.prototype.presentAlert = function (header, subHeader, message) {
        var alert = document.createElement('ion-alert');
        alert.header = header;
        alert.subHeader = subHeader;
        alert.message = message;
        alert.buttons = ['OK'];
        document.body.appendChild(alert);
        return alert.present();
    };
    SnapRegisterPage.prototype.pseudoInpFoc = function () {
        this.pseudoOnFocus = true;
    };
    SnapRegisterPage.prototype.pseudoInpBlur = function () {
        this.pseudoOnFocus = false;
    };
    SnapRegisterPage.prototype.usernameInpFoc = function () {
        this.usernameOnFocus = true;
    };
    SnapRegisterPage.prototype.usernameInpBlur = function () {
        this.usernameOnFocus = false;
    };
    SnapRegisterPage.prototype.emailInpFoc = function () {
        this.emailOnFocus = true;
    };
    SnapRegisterPage.prototype.emailInpBlur = function () {
        this.emailOnFocus = false;
    };
    SnapRegisterPage.prototype.passwordInpFoc = function () {
        this.passwordOnFocus = true;
    };
    SnapRegisterPage.prototype.passwordInpBlur = function () {
        this.passwordOnFocus = false;
    };
    SnapRegisterPage.prototype.passwordConfChange = function () {
        if (this.register.password === this.register.passwordConfirm) {
            this.passwordMatches = true;
        }
        else {
            this.passwordMatches = false;
        }
    };
    SnapRegisterPage.prototype.ngOnInit = function () {
    };
    SnapRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snap-register',
            template: __webpack_require__(/*! ./snap-register.page.html */ "./src/app/public/snap-register/snap-register.page.html"),
            styles: [__webpack_require__(/*! ./snap-register.page.scss */ "./src/app/public/snap-register/snap-register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], SnapRegisterPage);
    return SnapRegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-snap-register-snap-register-module.js.map