(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-home-home-module"],{

/***/ "./src/app/public/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/public/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/public/home/home.page.ts");
/* harmony import */ var _inc_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../_inc/footer/footer.module */ "./src/app/public/_inc/footer/footer.module.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _inc_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/public/home/home.page.html":
/*!********************************************!*\
  !*** ./src/app/public/home/home.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen id=\"yellowBg\" padding>\r\n  <div class=\"ion-padding ion-text-center mainDiv\">\r\n      <p class=\"slogan mainSlogan gradientKick\">{{slogan}}</p>\r\n    <img src=\"assets/img/mainLogo.png\" class=\"mainLogo\">\r\n    <div class=\"marginUnderSlg\"></div>\r\n    <!-- CONNECTION BUTTON -->\r\n    <ion-button expand=\"block\" fill=\"outline\" color=\"medium\" routerLink=\"/login\" routerDirection=\"forward\">{{loginBtn}}</ion-button>\r\n    <div class=\"marginBetweenBtns\"></div>\r\n    <!-- SIGNUP BUTTON -->\r\n    <ion-button expand=\"block\" color=\"light\" routerLink=\"/register\" routerDirection=\"forward\">{{signUpLink}}</ion-button>\r\n    <!-- OTHER OPTIONS -->\r\n    <p class=\"slogan gradientKick\">Ou connecte toi avec</p>\r\n    <ion-button color=\"snapchat\" shape=\"round\" (click) = \"connectSnap()\"  routerDirection=\"forward\"> <!-- routerLink=\"/snap-register\"-->\r\n      <img src=\"assets/icon/snapchat.png\" class=\"snapchatLogo\">\r\n      <span class=\"snapchat\">Snapchat</span>\r\n    </ion-button>\r\n\r\n  </div>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/public/home/home.page.scss":
/*!********************************************!*\
  !*** ./src/app/public/home/home.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainDiv {\n  padding-top: 50px; }\n\n.mainSlogan {\n  margin-bottom: 40px; }\n\n.marginUnderSlg {\n  height: 40px; }\n\n.gradientKick {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: uppercase; }\n\n.snapchat {\n  color: #302f2f; }\n\n.snapchatLogo {\n  width: 30px;\n  height: auto;\n  margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2hvbWUvRDpcXFdvcmtzcGFjZVxca2lja0FwcFxcS2lja2FwcC9zcmNcXGFwcFxccHVibGljXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLG1CQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVcsRUFBQTs7QUFHZjtFQUNJLGdCQUFlO0VBQ2YsZUFBYztFQUNkLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLGNBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBHRU5FUkFMIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5tYWluRGl2IHtcclxuICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbn1cclxuXHJcbi5tYWluU2xvZ2FuIHtcclxuICAgIG1hcmdpbi1ib3R0b206NDBweDsgLy8gU2l6ZSBpbiBnbG9iYWwuc2Nzc1xyXG59XHJcblxyXG4ubWFyZ2luVW5kZXJTbGcge1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbn1cclxuXHJcbi5ncmFkaWVudEtpY2sge1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5zbmFwY2hhdCB7XHJcbiAgICBjb2xvcjpyZ2IoNDgsIDQ3LCA0Nyk7XHJcbn1cclxuXHJcbi5zbmFwY2hhdExvZ28ge1xyXG4gICAgd2lkdGg6MzBweDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/public/home/home.page.ts":
/*!******************************************!*\
  !*** ./src/app/public/home/home.page.ts ***!
  \******************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");





var HomePage = /** @class */ (function () {
    function HomePage(router, http, iab, route) {
        this.router = router;
        this.http = http;
        this.iab = iab;
        this.route = route;
        this.slogan = "Rejoins la plus grande communauté rap de France !";
        this.loginBtn = "Connexion";
        this.signUpMsg = "Tu n'as pas encore de compte ?";
        this.signUpLink = "Inscription";
        this.snapUserAvatarId = "BABABA";
        this.snapUserId = "";
        this.snapUserAvatarUrl = "https://sdk.bitmoji.com/render/panel/78d0f964-d545-475a-8fc2-272aeb2189ae-AXIwMG5qnDe4DPtH2X6PB2o58Bk~jg-v1.png?transparent=1&palette=1";
        this.snapUserPseudo = "Kick France";
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.goSnap = params.get('goSnap');
            if (_this.goSnap == "connectSnap") {
                _this.connectSnap();
            }
        });
    };
    HomePage.prototype.connectSnap = function () {
        var _this = this;
        console.log("button ok");
        var browser = this.iab.create("https://https://kickserver.xyz/login/snapchat", "_system", 'hideurlbar=yes'); //location=yes 
        browser.on("loadstop").subscribe(function (e) {
            if (e.url.indexOf("snapRegister") > -1) {
                _this.snapUserId = e.url.substring(e.url.indexOf("userId=") + 7, e.url.indexOf("userAvatarId=") - 1);
                _this.snapUserAvatarId = e.url.substring(e.url.indexOf("userAvatarId=") + 13, e.url.indexOf("userAvatarUrl=") - 1);
                _this.snapUserAvatarUrl = e.url.substring(e.url.indexOf("userAvatarUrl=") + 14, e.url.indexOf("userPseudo=") - 1);
                _this.snapUserPseudo = e.url.substring(e.url.indexOf("userPseudo=") + 11);
                _this.snapUserAvatarId = decodeURIComponent(_this.snapUserAvatarId);
                _this.snapUserId = decodeURIComponent(_this.snapUserId);
                _this.snapUserAvatarUrl = decodeURIComponent(_this.snapUserAvatarUrl);
                _this.snapUserPseudo = decodeURIComponent(_this.snapUserPseudo); // je décode aussi le pseudo car les espaces sont encodés, j'espere qu'on aura pas a le faire pour les ID sinon c'est la gigamerde
                _this.router.navigate(['/register', _this.snapUserAvatarId, _this.snapUserId, _this.snapUserAvatarUrl, _this.snapUserPseudo]);
                browser.close();
                browser.hide(); // sur cette ligne tu ferme le browser et en dessous tu navigate vers register et tu mets en parametre les infos snap que t'as besoin (toutes:))
            }
        });
        //this.http.get('http://localhost:3000/login/snapchat')
        //.subscribe(
        //(response : any) => {})
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/public/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/public/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=public-home-home-module.js.map