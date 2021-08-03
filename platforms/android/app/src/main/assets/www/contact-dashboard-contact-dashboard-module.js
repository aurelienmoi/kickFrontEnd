(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-dashboard-contact-dashboard-module"],{

/***/ "./src/app/members/contact-dashboard/_inc/library-profil/library-profil.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/library-profil/library-profil.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li *ngFor = \"let music of libraryTest\">\r\n  <div class=\"musicItem\">\r\n    <a [routerLink]=\"['/musicPlayer',music.musicId]\">\r\n      <div class=\"inlineBlock coverBlock\">\r\n        <img src=\"assets/img/defaultCover.png\" />\r\n      </div>\r\n      <div class=\"inlineBlock infosBlock\">\r\n        <p style=\"width:90px; white-space:nowrap; overflow: hidden;\">\r\n          <span class=\"musicLabel\">{{music.name}}</span><br />\r\n          <span class=\"artistLabel\">Artiste</span>\r\n        </p>\r\n      </div>\r\n      <div class=\"inlineBlock statsBlock\">\r\n        <p>\r\n          <span class=\"artistLabel\" style=\"margin-bottom:-20px;\">974 streams <ion-progress-bar color=\"success\" value=\"0.5\"></ion-progress-bar></span>\r\n        </p>\r\n      </div>\r\n    </a>\r\n    <div class=\"inlineBlock controlBlock\">\r\n      <p>\r\n        <span class=\"musicLabel\"><a><ion-icon class=\"marginRight\" name=\"heart-empty\"></ion-icon></a></span>\r\n        <a (click)=\"presentActionSheet()\"><ion-icon name=\"more\"></ion-icon></a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</li>\r\n<div *ngIf=\"!libraryTest.length\">\r\n  <ion-icon class=\"infoIcon\" name=\"information-circle-outline\"></ion-icon>\r\n  <p>Ce Kicker n'a pas encore mis de musique en ligne !</p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/members/contact-dashboard/_inc/library-profil/library-profil.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/library-profil/library-profil.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".musicItem {\n  background-color: none;\n  padding: 5px;\n  width: 100%;\n  text-align: left;\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n.infoIcon {\n  font-size: 80px;\n  color: lightgrey;\n  margin-top: 50px; }\n\n.coverBlock {\n  width: 55px;\n  margin-left: 5px;\n  margin-right: 10px; }\n\n.infosBlock {\n  height: 55px;\n  position: absolute;\n  margin-top: -12px; }\n\n.musicLabel, .artistLabel {\n  display: inline-block;\n  font-size: 13px; }\n\n.statsBlock {\n  height: 55px;\n  position: absolute;\n  left: 195px;\n  line-height: 37px; }\n\n.controlBlock {\n  height: 55px;\n  position: absolute;\n  left: 300px;\n  line-height: 37px; }\n\n.marginRight {\n  margin-right: 10px; }\n\n.musicLabel, .artistLabel {\n  display: inline-block;\n  font-size: 13px; }\n\n.musicLabel {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9jb250YWN0LWRhc2hib2FyZC9faW5jL2xpYnJhcnktcHJvZmlsL0Q6XFxXb3Jrc3BhY2VcXGtpY2tBcHBcXEtpY2thcHAvc3JjXFxhcHBcXG1lbWJlcnNcXGNvbnRhY3QtZGFzaGJvYXJkXFxfaW5jXFxsaWJyYXJ5LXByb2ZpbFxcbGlicmFyeS1wcm9maWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBcUI7RUFDckIsWUFBVztFQUNYLFdBQVU7RUFDVixnQkFBZTtFQUNmLGVBQWM7RUFDZCxrQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixnQkFBZSxFQUFBOztBQUtuQjtFQUNJLFdBQVU7RUFDVixnQkFBZTtFQUNmLGtCQUFpQixFQUFBOztBQUtyQjtFQUNJLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0kscUJBQW9CO0VBQ3BCLGVBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxxQkFBb0I7RUFDcEIsZUFBYyxFQUFBOztBQUdsQjtFQUNJLG1CQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9jb250YWN0LWRhc2hib2FyZC9faW5jL2xpYnJhcnktcHJvZmlsL2xpYnJhcnktcHJvZmlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBNVVNJQyBJVEVNIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5tdXNpY0l0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcclxufVxyXG5cclxuLmluZm9JY29uIHtcclxuICAgIGZvbnQtc2l6ZTo4MHB4O1xyXG4gICAgY29sb3I6bGlnaHRncmV5O1xyXG4gICAgbWFyZ2luLXRvcDo1MHB4O1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIENPVkVSIEJMT0NLIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5jb3ZlckJsb2NrIHtcclxuICAgIHdpZHRoOjU1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBJTkZPIEJMT0NLIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5pbmZvc0Jsb2NrIHtcclxuICAgIGhlaWdodDo1NXB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOi0xMnB4O1xyXG59XHJcblxyXG4ubXVzaWNMYWJlbCwgLmFydGlzdExhYmVsIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOjEzcHg7XHJcbn1cclxuXHJcbi5zdGF0c0Jsb2NrIHtcclxuICAgIGhlaWdodDo1NXB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OjE5NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MzdweDtcclxufVxyXG5cclxuLmNvbnRyb2xCbG9jayB7XHJcbiAgICBoZWlnaHQ6NTVweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDozMDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OjM3cHg7XHJcbn1cclxuXHJcbi5tYXJnaW5SaWdodCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLm11c2ljTGFiZWwsIC5hcnRpc3RMYWJlbCB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZToxM3B4O1xyXG59XHJcblxyXG4ubXVzaWNMYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/members/contact-dashboard/_inc/library-profil/library-profil.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/library-profil/library-profil.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LibraryProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryProfilComponent", function() { return LibraryProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LibraryProfilComponent = /** @class */ (function () {
    function LibraryProfilComponent(userService, authService, route) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.libraryTest = [];
    }
    LibraryProfilComponent.prototype.getMusics = function (ennemyUserId) {
        var _this = this;
        this.userService.getUserMusics(ennemyUserId).subscribe(function (data) {
            _this.userVisitedData = data.result;
            console.log(_this.libraryTest.length, data.musics.length);
            var n = 0;
            while (_this.libraryTest.length < data.musics.length) {
                _this.libraryTest[n] = data.musics[n];
                n++;
            }
        });
    };
    LibraryProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ennemyUserId = params.user_id;
            console.log(_this.ennemyUserId);
            _this.getMusics(_this.ennemyUserId);
        });
    };
    LibraryProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library-profil',
            template: __webpack_require__(/*! ./library-profil.component.html */ "./src/app/members/contact-dashboard/_inc/library-profil/library-profil.component.html"),
            styles: [__webpack_require__(/*! ./library-profil.component.scss */ "./src/app/members/contact-dashboard/_inc/library-profil/library-profil.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LibraryProfilComponent);
    return LibraryProfilComponent;
}());



/***/ }),

/***/ "./src/app/members/contact-dashboard/_inc/library-profil/library-profil.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/library-profil/library-profil.module.ts ***!
  \****************************************************************************************/
/*! exports provided: LibraryProfilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryProfilModule", function() { return LibraryProfilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _library_profil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./library-profil.component */ "./src/app/members/contact-dashboard/_inc/library-profil/library-profil.component.ts");







var LibraryProfilModule = /** @class */ (function () {
    function LibraryProfilModule() {
    }
    LibraryProfilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _library_profil_component__WEBPACK_IMPORTED_MODULE_6__["LibraryProfilComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ], exports: [
                _library_profil_component__WEBPACK_IMPORTED_MODULE_6__["LibraryProfilComponent"]
            ]
        })
    ], LibraryProfilModule);
    return LibraryProfilModule;
}());



/***/ }),

/***/ "./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"kickBg\">\r\n  <ion-segment color=\"medium\">\r\n    <ion-segment-button checked value=\"home\" (click)=\"onMain()\">\r\n      <ion-label color=\"light\">Accueil</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"library\" (click)=\"onLibrary()\">\r\n      <ion-label color=\"light\">Musiques</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-toolbar>\r\n\r\n<app-main *ngIf=\"isOnMain\"></app-main>\r\n<app-library-profil *ngIf=\"isOnLibrary\"></app-library-profil>"

/***/ }),

/***/ "./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".staticToolbar {\n  position: fixed;\n  top: 250px;\n  width: 100%;\n  z-index: 3;\n  margin-top: -5px; }\n\n.profilMenu {\n  list-style-type: none;\n  padding: 0;\n  padding-bottom: 5px;\n  text-align: left;\n  border-bottom: 1px solid grey;\n  margin-bottom: 0px; }\n\n.profilMenu li {\n  display: inline-block;\n  margin: 5px;\n  font-weight: bold; }\n\n.profilMenuSeparator {\n  color: grey; }\n\n.profilLink {\n  text-decoration: none;\n  color: #D6CEF4; }\n\n.profilMenu .active {\n  color: whitesmoke; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9jb250YWN0LWRhc2hib2FyZC9faW5jL29wcG9uZW50LXByb2ZpbC1tZW51L0Q6XFxXb3Jrc3BhY2VcXGtpY2tBcHBcXEtpY2thcHAvc3JjXFxhcHBcXG1lbWJlcnNcXGNvbnRhY3QtZGFzaGJvYXJkXFxfaW5jXFxvcHBvbmVudC1wcm9maWwtbWVudVxcb3Bwb25lbnQtcHJvZmlsLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVU7RUFDVixVQUFTO0VBQ1QsZ0JBQWUsRUFBQTs7QUFLbkI7RUFDSSxxQkFBcUI7RUFDckIsVUFBUztFQUNULG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLDZCQUE0QjtFQUM1QixrQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxxQkFBb0I7RUFDcEIsV0FBVTtFQUNWLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVUsRUFBQTs7QUFLZDtFQUNJLHFCQUFvQjtFQUNwQixjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksaUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2NvbnRhY3QtZGFzaGJvYXJkL19pbmMvb3Bwb25lbnQtcHJvZmlsLW1lbnUvb3Bwb25lbnQtcHJvZmlsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEVMRU1FTlRTIFBMQUNFTUVOVCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uc3RhdGljVG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDI1MHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHotaW5kZXg6MztcclxuICAgIG1hcmdpbi10b3A6LTVweDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBQUk9GSUwgTUVOVSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4ucHJvZmlsTWVudSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmV5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcbi5wcm9maWxNZW51IGxpIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcbi5wcm9maWxNZW51U2VwYXJhdG9yIHtcclxuICAgIGNvbG9yOmdyZXk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gTElOSyBDT0xPUiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4ucHJvZmlsTGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOiNENkNFRjQ7XHJcbn1cclxuXHJcbi5wcm9maWxNZW51IC5hY3RpdmUge1xyXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: OpponentProfilMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpponentProfilMenuComponent", function() { return OpponentProfilMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OpponentProfilMenuComponent = /** @class */ (function () {
    function OpponentProfilMenuComponent() {
        if (!this.isOnNotifications && !this.isOnLibrary) {
            this.isOnNotifications = false;
            this.isOnLibrary = false;
            this.isOnMain = true;
        }
    }
    OpponentProfilMenuComponent.prototype.ngOnInit = function () { };
    OpponentProfilMenuComponent.prototype.onNotifications = function () {
        this.isOnNotifications = true;
        this.isOnLibrary = false;
        this.isOnMain = false;
    };
    OpponentProfilMenuComponent.prototype.onLibrary = function () {
        this.isOnNotifications = false;
        this.isOnLibrary = true;
        this.isOnMain = false;
    };
    OpponentProfilMenuComponent.prototype.onMain = function () {
        this.isOnNotifications = false;
        this.isOnLibrary = false;
        this.isOnMain = true;
    };
    OpponentProfilMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opponent-profil-menu',
            template: __webpack_require__(/*! ./opponent-profil-menu.component.html */ "./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.component.html"),
            styles: [__webpack_require__(/*! ./opponent-profil-menu.component.scss */ "./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpponentProfilMenuComponent);
    return OpponentProfilMenuComponent;
}());



/***/ }),

/***/ "./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: OpponentProfilMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpponentProfilMenuModule", function() { return OpponentProfilMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _opponent_profil_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opponent-profil-menu.component */ "./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_inc_main_main_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dashboard/_inc/main/main.module */ "./src/app/members/dashboard/_inc/main/main.module.ts");
/* harmony import */ var _library_profil_library_profil_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../library-profil/library-profil.module */ "./src/app/members/contact-dashboard/_inc/library-profil/library-profil.module.ts");









var OpponentProfilMenuModule = /** @class */ (function () {
    function OpponentProfilMenuModule() {
    }
    OpponentProfilMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _opponent_profil_menu_component__WEBPACK_IMPORTED_MODULE_1__["OpponentProfilMenuComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _dashboard_inc_main_main_module__WEBPACK_IMPORTED_MODULE_7__["MainModule"],
                _library_profil_library_profil_module__WEBPACK_IMPORTED_MODULE_8__["LibraryProfilModule"]
            ],
            exports: [
                _opponent_profil_menu_component__WEBPACK_IMPORTED_MODULE_1__["OpponentProfilMenuComponent"]
            ]
        })
    ], OpponentProfilMenuModule);
    return OpponentProfilMenuModule;
}());



/***/ }),

/***/ "./src/app/members/contact-dashboard/contact-dashboard.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/members/contact-dashboard/contact-dashboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: ContactDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDashboardPageModule", function() { return ContactDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _inc_opponent_profil_menu_opponent_profil_menu_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_inc/opponent-profil-menu/opponent-profil-menu.module */ "./src/app/members/contact-dashboard/_inc/opponent-profil-menu/opponent-profil-menu.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-dashboard.page */ "./src/app/members/contact-dashboard/contact-dashboard.page.ts");
/* harmony import */ var _layouts_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_layouts/top-toolbar/top-toolbar.module */ "./src/app/members/_layouts/top-toolbar/top-toolbar.module.ts");
/* harmony import */ var _inc_profil_menu_profil_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_inc/profil-menu/profil-menu.module */ "./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.module.ts");
/* harmony import */ var _dashboard_inc_main_main_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dashboard/_inc/main/main.module */ "./src/app/members/dashboard/_inc/main/main.module.ts");
/* harmony import */ var src_app_members_layouts_nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/members/_layouts/nav-bar/nav-bar.module */ "./src/app/members/_layouts/nav-bar/nav-bar.module.ts");
/* harmony import */ var _dashboard_inc_dashboard_map_dashboard_map_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dashboard/_inc/dashboard-map/dashboard-map.module */ "./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.module.ts");
/* harmony import */ var _inc_library_profil_library_profil_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_inc/library-profil/library-profil.module */ "./src/app/members/contact-dashboard/_inc/library-profil/library-profil.module.ts");














// module not existing
var routes = [
    {
        path: '',
        component: _contact_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["ContactDashboardPage"]
    }
];
var ContactDashboardPageModule = /** @class */ (function () {
    function ContactDashboardPageModule() {
    }
    ContactDashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                src_app_members_layouts_nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_11__["NavBarModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _dashboard_inc_main_main_module__WEBPACK_IMPORTED_MODULE_10__["MainModule"],
                _inc_profil_menu_profil_menu_module__WEBPACK_IMPORTED_MODULE_9__["ProfilMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _layouts_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_8__["TopToolbarModule"],
                _inc_opponent_profil_menu_opponent_profil_menu_module__WEBPACK_IMPORTED_MODULE_1__["OpponentProfilMenuModule"],
                _dashboard_inc_dashboard_map_dashboard_map_module__WEBPACK_IMPORTED_MODULE_12__["DashboardMapModule"],
                _inc_library_profil_library_profil_module__WEBPACK_IMPORTED_MODULE_13__["LibraryProfilModule"]
            ],
            declarations: [_contact_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["ContactDashboardPage"]]
        })
    ], ContactDashboardPageModule);
    return ContactDashboardPageModule;
}());



/***/ }),

/***/ "./src/app/members/contact-dashboard/contact-dashboard.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/members/contact-dashboard/contact-dashboard.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-toolbar></app-top-toolbar>\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"transparentToolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/dashboard\" color=\"light\" autoHide='false' text=\"\" icon=\"ios-arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"dataLoaded\" class=\"icon titleColor\">{{ennemyUsername}}</ion-title>\r\n    <ion-title *ngIf=\"!dataLoaded\" class=\"icon titleColor\">\r\n      <ion-spinner name=\"dots\"></ion-spinner>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"false\" class=\"lightKick\" autoHide='false' (click)=\"presentPopover($event)\">\r\n        <ion-icon class=\"settingBtn\" name=\"settings\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"kickBg\">\r\n    <ion-segment color=\"medium\" mode=\"md\">\r\n      <ion-segment-button mode=\"md\" checked value=\"home\" (click)=\"onMain()\">\r\n        <ion-label color=\"light\">Profil</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button mode=\"md\" value=\"library\" (click)=\"onLibrary()\">\r\n        <ion-label color=\"light\">Musiques</ion-label>\r\n      </ion-segment-button>\r\n      <!--<ion-segment-button mode=\"md\" value=\"notifications\" (click)=\"onNotifications()\">\r\n        <ion-label color=\"light\">Notifs</ion-label>\r\n        <ion-badge class=\"notifications\" color=\"danger\">66</ion-badge>\r\n      </ion-segment-button>-->\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-text-center\">\r\n    <div class=\"width100 ion-text-center mainDiv\" style=\"background-image:url(assets/img/bgtest.jpg); min-height:100vh; background-size:cover; background-attachment: fixed;\">\r\n      <div id=\"appMain\" *ngIf=\"isOnMain\">\r\n        <ion-card style=\"background:rgb(5, 3, 31);\">\r\n          <ion-card-content>\r\n            <!--------------- BITMOJI CONTAINER --------------->\r\n            <div class=\"spaceBmj\"></div>\r\n            <div class=\"bitmojiContainer\">\r\n              <p *ngIf=\"dataLoaded\" class=\"followers inlineBlock\">Abonnés<br />\r\n                <ion-badge color=\"light\">{{followers}}</ion-badge>\r\n              </p>\r\n              <p *ngIf=\"!dataLoaded\" class=\"followers inlineBlock\">Abonnés <br />\r\n                <ion-skeleton-text animated style=\"margin: 20%; width:50%; text-align:center;\"></ion-skeleton-text>\r\n              </p>\r\n              <div class=\"bmjContainer inlineBlock\"><a><img [src]=\"bitmojiLink\"\r\n                    class=\"bmjLogo\"></a></div>\r\n              <p *ngIf=\"dataLoaded\" class=\"following inlineBlock\">Abonnements<br />\r\n                <ion-badge color=\"light\">{{following}}</ion-badge>\r\n              </p>\r\n              <p *ngIf=\"!dataLoaded\" class=\"following inlineBlock\">Abonnements <br />\r\n                <ion-skeleton-text animated style=\"margin: 20%; width:50%; text-align:center;\"></ion-skeleton-text>\r\n              </p>\r\n            </div>\r\n\r\n            <!--------------- PROFIL INFORMATIONS --------------->\r\n            <!-- If the user has already chosen a pseudo : -->\r\n            <p class=\"stuck\">\r\n              <a *ngIf=\"dataLoaded\"><span\r\n                  class=\"pseudo\">{{ennemyPseudo}}</span></a>\r\n              <a *ngIf=\"!dataLoaded\"><span class=\"pseudo\">\r\n                  <ion-skeleton-text animated style=\"width:100px; text-align:center; margin:auto;\"></ion-skeleton-text>\r\n                </span></a>\r\n            </p>\r\n            <p class=\"info\">\r\n              <a *ngIf=\"dataLoaded\" class=\"info greyKick\">{{ennemyBiography}}</a>\r\n              <a *ngIf=\"!dataLoaded\" class=\"info greyKick\">\r\n                <ion-skeleton-text animated style=\"width:300px; text-align:center; margin:auto;\"></ion-skeleton-text>\r\n              </a>\r\n            </p>\r\n            <!--\r\n              <app-dashboard-map *ngIf=\"dataLoaded\" [userId]=\"userDataDisplay['id']\"></app-dashboard-map>\r\n            -->\r\n            <!--<ion-chip *ngIf=\"dataLoaded && roles.listener\" outline color=\"primary\">\r\n              <ion-icon *ngIf=\"dataLoaded && roles.listener\" name=\"musical-notes\" color=\"primary\"></ion-icon>\r\n              <ion-label *ngIf=\"dataLoaded && roles.listener\">Auditeur</ion-label>\r\n            </ion-chip>\r\n            <ion-chip *ngIf=\"dataLoaded && roles.rapper\"  outline color=\"primary\">\r\n              <ion-icon *ngIf=\"dataLoaded && roles.rapper\"  name=\"microphone\" color=\"primary\"></ion-icon>\r\n              <ion-label *ngIf=\"dataLoaded && roles.rapper\">Rappeur</ion-label>\r\n            </ion-chip>\r\n            <ion-chip *ngIf=\"dataLoaded && roles.beatmaker\"  outline color=\"secondary\">\r\n              <ion-icon *ngIf=\"dataLoaded && roles.beatmaker\" name=\"save\" color=\"secondary\"></ion-icon>\r\n              <ion-label *ngIf=\"dataLoaded && roles.beatmaker\">Beatmaker</ion-label>\r\n            </ion-chip>-->\r\n            <div style=\"margin-top:15px;\"></div>\r\n            <app-dashboard-map *ngIf=\"dataLoaded\" [userId]=\"ennemyUserId\"></app-dashboard-map>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n      <app-library-profil *ngIf=\"isOnLibrary\"></app-library-profil>\r\n      <app-nav-bar></app-nav-bar>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/contact-dashboard/contact-dashboard.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/members/contact-dashboard/contact-dashboard.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".staticContent {\n  top: 0; }\n\n.underStatic {\n  height: 80px; }\n\n.behindHeader {\n  height: 60px; }\n\n.followers {\n  position: relative;\n  top: -20px;\n  color: whitesmoke;\n  width: 90px; }\n\n.following {\n  position: relative;\n  top: -20px;\n  left: 10px;\n  color: whitesmoke;\n  width: 90px; }\n\n.width100 {\n  width: 100%;\n  position: absolute;\n  z-index: 300;\n  background-color: #131313; }\n\n.bmjLogo {\n  width: 65%;\n  margin: auto;\n  height: auto;\n  border-radius: 40%; }\n\n.bmjContainer {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  border: 1px solid whitesmoke;\n  text-align: center;\n  margin: auto;\n  padding-top: 3px; }\n\n.bitmojiContainer {\n  height: 80px; }\n\n.spaceBmj {\n  margin-top: 4px; }\n\n.stuck {\n  margin-bottom: 10px; }\n\n.info {\n  font-size: 14px;\n  margin-top: 2px;\n  width: 100%; }\n\n.pseudo {\n  font-size: 18px;\n  letter-spacing: 1.5px;\n  color: #b3b3b3; }\n\n.pseudoSeparator {\n  margin: auto;\n  width: 100%;\n  border-bottom: 1px solid #b3b3b3; }\n\n.infoSeparator {\n  width: 100%;\n  border-bottom: 1px solid #b3b3b3; }\n\n.usernameContent {\n  margin-top: 0; }\n\n.dataForm {\n  padding-top: 5px;\n  height: 30px; }\n\n.staticToolbar {\n  position: fixed;\n  top: 245px;\n  width: 100%;\n  z-index: 3;\n  margin-top: -5px; }\n\n.paddingTop {\n  padding-top: 15px; }\n\n.profilMenu {\n  list-style-type: none;\n  padding: 0;\n  padding-bottom: 5px;\n  text-align: left;\n  border-bottom: 1px solid grey;\n  margin-bottom: 0px; }\n\n.profilMenu li {\n  display: inline-block;\n  margin: 5px;\n  font-weight: bold; }\n\n.profilMenuSeparator {\n  color: grey; }\n\n.notifications {\n  position: absolute;\n  right: 5px;\n  top: 0;\n  font-size: 10px; }\n\n.profilLink {\n  text-decoration: none;\n  color: #D6CEF4; }\n\n.profilMenu .active {\n  color: whitesmoke; }\n\n.opponentInformations {\n  padding-top: 15px;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center; }\n\n.opponentInformations .opponentUsername {\n  letter-spacing: 1.5px;\n  font-size: 18px;\n  color: #D6CEF4;\n  padding-bottom: 10px; }\n\n.opponentInformations .opponentBiography {\n  font-size: 15px;\n  color: #D6CEF4;\n  padding-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9jb250YWN0LWRhc2hib2FyZC9EOlxcV29ya3NwYWNlXFxraWNrQXBwXFxLaWNrYXBwL3NyY1xcYXBwXFxtZW1iZXJzXFxjb250YWN0LWRhc2hib2FyZFxcY29udGFjdC1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksTUFBTSxFQUFBOztBQUdWO0VBQ0ksWUFBVyxFQUFBOztBQUdmO0VBQ0ksWUFBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBZ0I7RUFDaEIsV0FBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLFdBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsWUFBVztFQUNYLHlCQUE4QixFQUFBOztBQUtsQztFQUNJLFVBQVM7RUFDVCxZQUFXO0VBQ1gsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLDRCQUEyQjtFQUMzQixrQkFBaUI7RUFDakIsWUFBVztFQUNYLGdCQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBVyxFQUFBOztBQUdmO0VBQ0ksZUFBYyxFQUFBOztBQUtsQjtFQUNJLG1CQUFrQixFQUFBOztBQUd0QjtFQUFRLGVBQWM7RUFBRSxlQUFjO0VBQUUsV0FBVSxFQUFBOztBQUVsRDtFQUFVLGVBQWM7RUFBRSxxQkFBb0I7RUFBRSxjQUF3QixFQUFBOztBQUN4RTtFQUFtQixZQUFXO0VBQUUsV0FBVTtFQUFFLGdDQUEwQyxFQUFBOztBQUN0RjtFQUFpQixXQUFVO0VBQUUsZ0NBQTBDLEVBQUE7O0FBQ3ZFO0VBQW1CLGFBQVksRUFBQTs7QUFFL0I7RUFDSSxnQkFBZTtFQUNmLFlBQVcsRUFBQTs7QUFPZjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVTtFQUNWLFVBQVM7RUFDVCxnQkFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFnQixFQUFBOztBQUtwQjtFQUNJLHFCQUFxQjtFQUNyQixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsNkJBQTRCO0VBQzVCLGtCQUFpQixFQUFBOztBQUdyQjtFQUNJLHFCQUFvQjtFQUNwQixXQUFVO0VBQ1YsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxNQUFLO0VBQ0wsZUFBYyxFQUFBOztBQUtsQjtFQUNJLHFCQUFvQjtFQUNwQixjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksaUJBQWdCLEVBQUE7O0FBR3BCO0VBRUksaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFFSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFHeEI7RUFFSSxlQUFlO0VBQ2YsY0FBYztFQUNkLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9jb250YWN0LWRhc2hib2FyZC9jb250YWN0LWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEVMRU1FTlRTIFBMQUNFTUVOVCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uc3RhdGljQ29udGVudCB7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi51bmRlclN0YXRpYyB7XHJcbiAgICBoZWlnaHQ6ODBweDtcclxufVxyXG5cclxuLmJlaGluZEhlYWRlciB7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxufVxyXG5cclxuLmZvbGxvd2VycyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOjkwcHg7XHJcbn1cclxuXHJcbi5mb2xsb3dpbmcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6MTBweDtcclxuICAgIGNvbG9yOndoaXRlc21va2U7XHJcbiAgICB3aWR0aDo5MHB4O1xyXG59XHJcblxyXG4ud2lkdGgxMDAge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgei1pbmRleDozMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxOSwxOSwxOSk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQklUTU9KSSBDT05UQUlORVIgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLmJtakxvZ28ge1xyXG4gICAgd2lkdGg6NjUlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6NDAlO1xyXG59XHJcblxyXG4uYm1qQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOjc1cHg7XHJcbiAgICBoZWlnaHQ6NzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHBhZGRpbmctdG9wOjNweDtcclxufVxyXG5cclxuLmJpdG1vamlDb250YWluZXIge1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbn1cclxuXHJcbi5zcGFjZUJtaiB7XHJcbiAgICBtYXJnaW4tdG9wOjRweDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBQUk9GSUwgSU5GT1MgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnN0dWNrIHtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG5cclxuLmluZm8geyBmb250LXNpemU6MTRweDsgbWFyZ2luLXRvcDoycHg7IHdpZHRoOjEwMCU7fVxyXG5cclxuLnBzZXVkbyB7IGZvbnQtc2l6ZToxOHB4OyBsZXR0ZXItc3BhY2luZzoxLjVweDsgY29sb3I6cmdiKDE3OSwgMTc5LCAxNzkpOyB9XHJcbi5wc2V1ZG9TZXBhcmF0b3IgeyBtYXJnaW46YXV0bzsgd2lkdGg6MTAwJTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiKDE3OSwgMTc5LCAxNzkpO31cclxuLmluZm9TZXBhcmF0b3IgeyB3aWR0aDoxMDAlOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2IoMTc5LCAxNzksIDE3OSk7fVxyXG4udXNlcm5hbWVDb250ZW50IHsgbWFyZ2luLXRvcDowOyB9XHJcblxyXG4uZGF0YUZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUFJPRklMIE1FTlUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBFTEVNRU5UUyBQTEFDRU1FTlQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnN0YXRpY1Rvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyNDVweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB6LWluZGV4OjM7XHJcbiAgICBtYXJnaW4tdG9wOi01cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nVG9wIHtcclxuICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUFJPRklMIE1FTlUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnByb2ZpbE1lbnUge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgcGFkZGluZy1ib3R0b206NXB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtcclxuICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG59XHJcblxyXG4ucHJvZmlsTWVudSBsaSB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcblxyXG4ucHJvZmlsTWVudVNlcGFyYXRvciB7XHJcbiAgICBjb2xvcjpncmV5O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjVweDtcclxuICAgIHRvcDowO1xyXG4gICAgZm9udC1zaXplOjEwcHg7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gTElOSyBDT0xPUiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4ucHJvZmlsTGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOiNENkNFRjQ7XHJcbn1cclxuXHJcbi5wcm9maWxNZW51IC5hY3RpdmUge1xyXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcclxufVxyXG5cclxuLm9wcG9uZW50SW5mb3JtYXRpb25zXHJcbntcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vcHBvbmVudEluZm9ybWF0aW9ucyAub3Bwb25lbnRVc2VybmFtZVxyXG57XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI0Q2Q0VGNDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ub3Bwb25lbnRJbmZvcm1hdGlvbnMgLm9wcG9uZW50QmlvZ3JhcGh5XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjRDZDRUY0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/members/contact-dashboard/contact-dashboard.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/members/contact-dashboard/contact-dashboard.page.ts ***!
  \*********************************************************************/
/*! exports provided: ContactDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDashboardPage", function() { return ContactDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_members_layouts_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/members/_layouts/top-toolbar/top-toolbar.component */ "./src/app/members/_layouts/top-toolbar/top-toolbar.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var ContactDashboardPage = /** @class */ (function () {
    function ContactDashboardPage(http, route, usersService, authService, popover) {
        this.http = http;
        this.route = route;
        this.usersService = usersService;
        this.authService = authService;
        this.popover = popover;
        this.rowPseudo = "pseudo";
        this.dataLoaded = false;
        this.bitmojiLink = "assets/img/bitmoji.png";
    }
    ContactDashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataLoaded = true;
            _this.ennemyUsername = params.pseudo;
            _this.ennemyUserId = params.user_id;
            _this.rowPseudo = _this.ennemyUserId;
            _this.usersService.getUserById(_this.ennemyUserId).subscribe(function (data) {
                console.log(data.result);
                _this.ennemyBiography = data.result.bio;
                _this.ennemyUsername = data.result.username;
                _this.ennemyPseudo = data.result.pseudo;
                _this.following = data.result.following.length;
                _this.followers = data.result.followers.length;
                _this.roles = params.roles;
                console.log(_this.roles);
            });
        });
        if (!this.isOnNotifications && !this.isOnLibrary) {
            this.isOnNotifications = false;
            this.isOnLibrary = false;
            this.isOnMain = true;
        }
    };
    ContactDashboardPage.prototype.onNotifications = function () {
        this.isOnNotifications = true;
        this.isOnLibrary = false;
        this.isOnMain = false;
    };
    ContactDashboardPage.prototype.onLibrary = function () {
        this.isOnNotifications = false;
        this.isOnLibrary = true;
        this.isOnMain = false;
    };
    ContactDashboardPage.prototype.onMain = function () {
        this.isOnNotifications = false;
        this.isOnLibrary = false;
        this.isOnMain = true;
    };
    ContactDashboardPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popover.create({
                            component: src_app_members_layouts_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["TopToolbarComponent"],
                            cssClass: 'popoverClass',
                            event: ev
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContactDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-dashboard',
            template: __webpack_require__(/*! ./contact-dashboard.page.html */ "./src/app/members/contact-dashboard/contact-dashboard.page.html"),
            styles: [__webpack_require__(/*! ./contact-dashboard.page.scss */ "./src/app/members/contact-dashboard/contact-dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]])
    ], ContactDashboardPage);
    return ContactDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-dashboard-contact-dashboard-module.js.map