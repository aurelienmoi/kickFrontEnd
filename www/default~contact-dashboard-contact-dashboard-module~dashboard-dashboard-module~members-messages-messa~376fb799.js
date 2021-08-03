(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contact-dashboard-contact-dashboard-module~dashboard-dashboard-module~members-messages-messa~376fb799"],{

/***/ "./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"kickBg\">\r\n  <ion-segment color=\"medium\">\r\n    <ion-segment-button checked value=\"home\" (click)=\"isOnMain()\">\r\n      <ion-label color=\"light\">Accueil</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"library\" (click)=\"isOnLibrary()\">\r\n      <ion-label color=\"light\">Musiques</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"notifications\" (click)=\"isOnNotifications()\">\r\n      <ion-label color=\"light\">Notifs</ion-label><ion-badge class=\"notifications\" color=\"danger\">66</ion-badge>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-toolbar>\r\n<app-main *ngIf=\"isOnMain\"></app-main>\r\n<app-library *ngIf=\"isOnLibrary\"></app-library>\r\n<app-notifications *ngIf=\"isOnNotifications\"></app-notifications>"

/***/ }),

/***/ "./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".staticToolbar {\n  position: fixed;\n  top: 245px;\n  width: 100%;\n  z-index: 3;\n  margin-top: -5px; }\n\n.paddingTop {\n  padding-top: 15px; }\n\n.profilMenu {\n  list-style-type: none;\n  padding: 0;\n  padding-bottom: 5px;\n  text-align: left;\n  border-bottom: 1px solid grey;\n  margin-bottom: 0px; }\n\n.profilMenu li {\n  display: inline-block;\n  margin: 5px;\n  font-weight: bold; }\n\n.profilMenuSeparator {\n  color: grey; }\n\n.notifications {\n  position: absolute;\n  right: 5px;\n  top: 0;\n  font-size: 10px; }\n\n.profilLink {\n  text-decoration: none;\n  color: #D6CEF4; }\n\n.profilMenu .active {\n  color: whitesmoke; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9jb250YWN0LWRhc2hib2FyZC9faW5jL3Byb2ZpbC1tZW51L0Q6XFxXb3Jrc3BhY2VcXGtpY2tBcHBcXEtpY2thcHAvc3JjXFxhcHBcXG1lbWJlcnNcXGNvbnRhY3QtZGFzaGJvYXJkXFxfaW5jXFxwcm9maWwtbWVudVxccHJvZmlsLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVU7RUFDVixVQUFTO0VBQ1QsZ0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBZ0IsRUFBQTs7QUFLcEI7RUFDSSxxQkFBcUI7RUFDckIsVUFBUztFQUNULG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLDZCQUE0QjtFQUM1QixrQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxxQkFBb0I7RUFDcEIsV0FBVTtFQUNWLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsTUFBSztFQUNMLGVBQWMsRUFBQTs7QUFLbEI7RUFDSSxxQkFBb0I7RUFDcEIsY0FBYSxFQUFBOztBQUdqQjtFQUNJLGlCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9jb250YWN0LWRhc2hib2FyZC9faW5jL3Byb2ZpbC1tZW51L3Byb2ZpbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBFTEVNRU5UUyBQTEFDRU1FTlQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnN0YXRpY1Rvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyNDVweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB6LWluZGV4OjM7XHJcbiAgICBtYXJnaW4tdG9wOi01cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nVG9wIHtcclxuICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUFJPRklMIE1FTlUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnByb2ZpbE1lbnUge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgcGFkZGluZy1ib3R0b206NXB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JleTtcclxuICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG59XHJcblxyXG4ucHJvZmlsTWVudSBsaSB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcblxyXG4ucHJvZmlsTWVudVNlcGFyYXRvciB7XHJcbiAgICBjb2xvcjpncmV5O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjVweDtcclxuICAgIHRvcDowO1xyXG4gICAgZm9udC1zaXplOjEwcHg7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gTElOSyBDT0xPUiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4ucHJvZmlsTGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOiNENkNFRjQ7XHJcbn1cclxuXHJcbi5wcm9maWxNZW51IC5hY3RpdmUge1xyXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfilMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilMenuComponent", function() { return ProfilMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilMenuComponent = /** @class */ (function () {
    function ProfilMenuComponent() {
        if (!this.isOnNotifications && !this.isOnLibrary) {
            this.isOnNotifications = false;
            this.isOnLibrary = false;
            this.isOnMain = true;
        }
    }
    ProfilMenuComponent.prototype.ngOnInit = function () { };
    ProfilMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profil-menu',
            template: __webpack_require__(/*! ./profil-menu.component.html */ "./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.component.html"),
            styles: [__webpack_require__(/*! ./profil-menu.component.scss */ "./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilMenuComponent);
    return ProfilMenuComponent;
}());



/***/ }),

/***/ "./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfilMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilMenuModule", function() { return ProfilMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profil_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profil-menu.component */ "./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.component.ts");
/* harmony import */ var _dashboard_inc_main_main_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dashboard/_inc/main/main.module */ "./src/app/members/dashboard/_inc/main/main.module.ts");
/* harmony import */ var src_app_members_dashboard_inc_library_library_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/members/dashboard/_inc/library/library.module */ "./src/app/members/dashboard/_inc/library/library.module.ts");
/* harmony import */ var src_app_members_messages_inc_contacts_contacts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/members/messages/_inc/contacts/contacts.module */ "./src/app/members/messages/_inc/contacts/contacts.module.ts");
/* harmony import */ var _dashboard_inc_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../dashboard/_inc/notifications/notifications.module */ "./src/app/members/dashboard/_inc/notifications/notifications.module.ts");











var ProfilMenuModule = /** @class */ (function () {
    function ProfilMenuModule() {
    }
    ProfilMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _profil_menu_component__WEBPACK_IMPORTED_MODULE_6__["ProfilMenuComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _dashboard_inc_main_main_module__WEBPACK_IMPORTED_MODULE_7__["MainModule"],
                src_app_members_messages_inc_contacts_contacts_module__WEBPACK_IMPORTED_MODULE_9__["ContactsModule"],
                src_app_members_dashboard_inc_library_library_module__WEBPACK_IMPORTED_MODULE_8__["LibraryModule"],
                _dashboard_inc_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_10__["NotificationsModule"]
            ],
            exports: [
                _profil_menu_component__WEBPACK_IMPORTED_MODULE_6__["ProfilMenuComponent"]
            ]
        })
    ], ProfilMenuModule);
    return ProfilMenuModule;
}());



/***/ }),

/***/ "./src/app/members/dashboard/_inc/library/library.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/library/library.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle slogan componentTitle>Lier vos plateforme</ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-avatar>\r\n              <img src=\"assets/img/platforms/spotify.png\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-avatar>\r\n              <img src=\"assets/img/platforms/deezer.png\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-avatar>\r\n              <img src=\"assets/img/platforms/apple-music.png\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-avatar>\r\n              <img src=\"assets/img/platforms/youtube.png\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-avatar>\r\n              <img src=\"assets/img/platforms/soundcloud.png\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle slogan componentTitle>Librairie</ion-card-subtitle>\r\n    <ion-card-title class=\"titleColor\">Vos musiques</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <li *ngFor = \"let music of libraryTest\">\r\n      <div class=\"musicItem\">\r\n        <a [routerLink]=\"['/musicPlayer',music.musicId]\">\r\n          <div class=\"inlineBlock coverBlock\">\r\n            <img src=\"assets/img/defaultCover.png\" />\r\n          </div>\r\n          <div class=\"inlineBlock infosBlock\">\r\n            <p style=\"width:90px; white-space:nowrap; overflow: hidden;\">\r\n              <span class=\"musicLabel\" style=\"text-transform:capitalize;\">{{music.name}}</span><br />\r\n              <span class=\"artistLabel\">{{pseudo}}</span>\r\n            </p>\r\n          </div>\r\n          <div class=\"inlineBlock statsBlock\">\r\n            <p>\r\n              <span class=\"artistLabel\" style=\"margin-bottom:-20px;\">974 streams <ion-progress-bar color=\"success\" value=\"0.5\"></ion-progress-bar></span>\r\n            </p>\r\n          </div>\r\n        </a>\r\n        <div class=\"inlineBlock controlBlock\">\r\n          <p>\r\n            <ion-button (click)=\"dislikeMusic(music.musicId)\" fill=\"clear\" size=\"small\" class=\"noPadding\"><ion-icon color=\"light\" name=\"heart-empty\"></ion-icon></ion-button>\r\n            <ion-button fill=\"clear\" size=\"small\" class=\"noPadding\" (click)=\"presentActionSheet()\"><ion-icon color=\"light\" name=\"more\"></ion-icon></ion-button>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <div *ngIf=\"!libraryTest.length\">\r\n      <ion-icon class=\"infoIcon\" name=\"information-circle-outline\"></ion-icon>\r\n      <p>Vous n'avez pas encore publié de musique</p>\r\n    </div>\r\n    \r\n    \r\n    <div class=\"upload\">\r\n      <ion-button color=\"medium\" fill=\"clear\" strong (click)=presentModalUpload()>\r\n        <ion-icon name=\"add-circle-outline\"></ion-icon>&nbsp;Ajouter une musique\r\n      </ion-button>\r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>"

/***/ }),

/***/ "./src/app/members/dashboard/_inc/library/library.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/library/library.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".musicItem {\n  background-color: none;\n  padding: 5px;\n  width: 100%;\n  text-align: left;\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n.infoIcon {\n  font-size: 80px;\n  color: lightgrey;\n  margin-top: 50px; }\n\n.coverBlock {\n  width: 55px;\n  margin-left: 5px;\n  margin-right: 10px; }\n\n.infosBlock {\n  height: 55px;\n  position: absolute;\n  margin-top: -12px; }\n\n.musicLabel, .artistLabel {\n  display: inline-block;\n  font-size: 13px; }\n\n.statsBlock {\n  height: 55px;\n  position: absolute;\n  left: 180px;\n  line-height: 37px; }\n\n.controlBlock {\n  height: 55px;\n  position: absolute;\n  right: 0;\n  line-height: 37px; }\n\n.noPadding {\n  padding: -10px !important; }\n\n.marginRight {\n  margin-right: 10px; }\n\n.musicLabel, .artistLabel {\n  display: inline-block;\n  font-size: 13px; }\n\n.musicLabel {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9kYXNoYm9hcmQvX2luYy9saWJyYXJ5L0Q6XFxXb3Jrc3BhY2VcXGtpY2tBcHBcXEtpY2thcHAvc3JjXFxhcHBcXG1lbWJlcnNcXGRhc2hib2FyZFxcX2luY1xcbGlicmFyeVxcbGlicmFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsV0FBVTtFQUNWLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGtCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGdCQUFlLEVBQUE7O0FBS25CO0VBQ0ksV0FBVTtFQUNWLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQUE7O0FBS3JCO0VBQ0ksWUFBVztFQUNYLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxxQkFBb0I7RUFDcEIsZUFBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsV0FBVTtFQUNWLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsUUFBTztFQUNQLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLHlCQUF3QixFQUFBOztBQUc1QjtFQUNJLGtCQUFpQixFQUFBOztBQUdyQjtFQUNJLHFCQUFvQjtFQUNwQixlQUFjLEVBQUE7O0FBR2xCO0VBQ0ksbUJBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2Rhc2hib2FyZC9faW5jL2xpYnJhcnkvbGlicmFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gTVVTSUMgSVRFTSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4ubXVzaWNJdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bm9uZTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbn1cclxuXHJcbi5pbmZvSWNvbiB7XHJcbiAgICBmb250LXNpemU6ODBweDtcclxuICAgIGNvbG9yOmxpZ2h0Z3JleTtcclxuICAgIG1hcmdpbi10b3A6NTBweDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBDT1ZFUiBCTE9DSyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uY292ZXJCbG9jayB7XHJcbiAgICB3aWR0aDo1NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gSU5GTyBCTE9DSyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uaW5mb3NCbG9jayB7XHJcbiAgICBoZWlnaHQ6NTVweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDotMTJweDtcclxufVxyXG5cclxuLm11c2ljTGFiZWwsIC5hcnRpc3RMYWJlbCB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZToxM3B4O1xyXG59XHJcblxyXG4uc3RhdHNCbG9jayB7XHJcbiAgICBoZWlnaHQ6NTVweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDoxODBweDtcclxuICAgIGxpbmUtaGVpZ2h0OjM3cHg7XHJcbn1cclxuXHJcbi5jb250cm9sQmxvY2sge1xyXG4gICAgaGVpZ2h0OjU1cHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBsaW5lLWhlaWdodDozN3B4O1xyXG59XHJcblxyXG4ubm9QYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6LTEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hcmdpblJpZ2h0IHtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG59XHJcblxyXG4ubXVzaWNMYWJlbCwgLmFydGlzdExhYmVsIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOjEzcHg7XHJcbn1cclxuXHJcbi5tdXNpY0xhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/dashboard/_inc/library/library.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/library/library.component.ts ***!
  \*********************************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _members_upload_music_upload_music_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../members/upload-music/upload-music.page */ "./src/app/members/upload-music/upload-music.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(userService, authService, actionSheetController, modalController, http) {
        this.userService = userService;
        this.authService = authService;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.http = http;
        this.libraryTest = [];
    }
    ///////////// IONIC PAGE LIFECYCLE /////////////
    LibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.userData.id != undefined && this.authService.userData != undefined) {
            this.id = this.authService.userData.id;
            this.pseudo = this.authService.userData.pseudo;
        }
        else
            (this.authService.getUserByToken().subscribe(function (data) {
                _this.id = data.id;
            }));
        this.getMusics();
        this.getLikesByUserId();
    };
    LibraryComponent.prototype.ngOnDestroy = function () {
        console.log("library destroy");
    };
    LibraryComponent.prototype.getLikesByUserId = function () {
        //  this.userService.getLikesByUserId(this.id).subscribe(data => {
        //  console.log(data.result);
        // console.log("it works :)")
        //})
        console.log("it works !");
    };
    LibraryComponent.prototype.checkInArray = function (arr, id) {
        var result = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](arr, ['userFollowed._id', id]);
        if (result) {
            return true;
        }
        else {
            return false;
        }
    };
    LibraryComponent.prototype.likeMusic = function (musicId) {
        console.log("Like music process !");
        this.data = {
            musicId: musicId
        };
        this.http.post('https://https://kickserver.xyz/chatApp/likeMusic', this.data)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    LibraryComponent.prototype.dislikeMusic = function (musicId) {
        console.log("Like music process !");
        this.data = {
            musicId: musicId
        };
        this.http.post('https://https://kickserver.xyz/chatApp/dislikeMusic', this.data)
            .subscribe(function (response) {
            console.log("zblehh");
        });
    };
    LibraryComponent.prototype.getMusics = function () {
        var _this = this;
        this.userService.getUserMusics(this.id).subscribe(function (data) {
            console.log(data);
            console.log(_this.libraryTest.length, data.musics.length);
            var n = 0;
            while (_this.libraryTest.length < data.musics.length) {
                _this.libraryTest[n] = data.musics[n];
                n++;
            }
            if (_this.libraryTest.length == 0) {
                _this.emptyMusic = true;
            }
        });
    };
    LibraryComponent.prototype.presentModalUpload = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _members_upload_music_upload_music_page__WEBPACK_IMPORTED_MODULE_1__["UploadMusicPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            _this.getMusics();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LibraryComponent.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('UI THEMING');
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: "J'pourrais",
                                buttons: [{
                                        text: 'Supprimer',
                                        role: 'destructive',
                                        icon: 'trash',
                                        handler: function () {
                                            console.log('Delete clicked');
                                        }
                                    }, {
                                        text: 'Partager',
                                        icon: 'share',
                                        handler: function () {
                                            console.log('Share clicked');
                                        }
                                    }, {
                                        text: 'Lecture',
                                        icon: 'arrow-dropright-circle',
                                        handler: function () {
                                            console.log('Play clicked');
                                        }
                                    }, {
                                        text: 'Favoris',
                                        icon: 'heart',
                                        handler: function () {
                                            console.log('Favorite clicked');
                                        }
                                    }, {
                                        text: 'Cancel',
                                        icon: 'close',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    }]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/members/dashboard/_inc/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.scss */ "./src/app/members/dashboard/_inc/library/library.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/members/dashboard/_inc/library/library.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/library/library.module.ts ***!
  \******************************************************************/
/*! exports provided: LibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _library_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./library.component */ "./src/app/members/dashboard/_inc/library/library.component.ts");







var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _library_component__WEBPACK_IMPORTED_MODULE_6__["LibraryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            exports: [
                _library_component__WEBPACK_IMPORTED_MODULE_6__["LibraryComponent"]
            ]
        })
    ], LibraryModule);
    return LibraryModule;
}());



/***/ }),

/***/ "./src/app/members/dashboard/_inc/main/main.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/main/main.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle slogan gradientKick componentTitle>Carte Kick</ion-card-subtitle>\r\n    <ion-card-title class=\"titleColor\">Localisation</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <img src=\"assets/img/map.jpg\" />\r\n    <p class=\"location\">\r\n      <ion-icon name=\"pin\"></ion-icon>\r\n      Lyon, France\r\n    </p>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle slogan gradientKick componentTitle>Accomplissements</ion-card-subtitle>\r\n    <ion-card-title class=\"titleColor\">Vos badges</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <ion-chip outline color=\"primary\">\r\n      <ion-icon name=\"microphone\" color=\"primary\"></ion-icon>\r\n      <ion-label>Rappeur</ion-label>\r\n    </ion-chip>\r\n    <ion-chip outline color=\"secondary\">\r\n      <ion-icon name=\"save\" color=\"secondary\"></ion-icon>\r\n      <ion-label>Beatmaker</ion-label>\r\n    </ion-chip>\r\n    <ion-chip outline color=\"tertiary\">\r\n      <ion-icon name=\"medal\" color=\"tertiary\"></ion-icon>\r\n      <ion-label>Kicker populaire</ion-label>\r\n    </ion-chip>\r\n    <ion-chip outline color=\"dark\">\r\n      <ion-icon name=\"videocam\" color=\"dark\"></ion-icon>\r\n      <ion-label>Clip Maker</ion-label>\r\n    </ion-chip>\r\n    <ion-chip outline color=\"danger\">\r\n      <ion-icon name=\"radio\" color=\"danger\"></ion-icon>\r\n      <ion-label>Webradio</ion-label>\r\n    </ion-chip>\r\n    <ion-chip outline color=\"warning\">\r\n      <ion-icon name=\"podium\" color=\"warning\"></ion-icon>\r\n      <ion-label>Producteur</ion-label>\r\n    </ion-chip>\r\n    <ion-chip outline color=\"medium\">\r\n      <ion-icon name=\"cafe\" color=\"medium\"></ion-icon>\r\n      <ion-label>Auditeur</ion-label>\r\n    </ion-chip>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle slogan gradientKick componentTitle>Groupes</ion-card-subtitle>\r\n    <ion-card-title class=\"titleColor\">Vos groupes</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <p class=\"location\">Vous ne faites partie d'aucun groupe</p>\r\n  </ion-card-content>\r\n</ion-card>\r\n"

/***/ }),

/***/ "./src/app/members/dashboard/_inc/main/main.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/main/main.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".location {\n  color: gray;\n  text-align: left; }\n\n.componentTitle {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9kYXNoYm9hcmQvX2luYy9tYWluL0Q6XFxXb3Jrc3BhY2VcXGtpY2tBcHBcXEtpY2thcHAvc3JjXFxhcHBcXG1lbWJlcnNcXGRhc2hib2FyZFxcX2luY1xcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixnQkFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2Rhc2hib2FyZC9faW5jL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbiB7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcblxyXG4uY29tcG9uZW50VGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/members/dashboard/_inc/main/main.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/main/main.component.ts ***!
  \***************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/members/dashboard/_inc/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/members/dashboard/_inc/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/members/dashboard/_inc/main/main.module.ts":
/*!************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/main/main.module.ts ***!
  \************************************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.component */ "./src/app/members/dashboard/_inc/main/main.component.ts");







var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            exports: [
                _main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/members/dashboard/_inc/notifications/notifications.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/notifications/notifications.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-subtitle slogan componentTitle>Quoi de beau ?</ion-card-subtitle>\r\n    <ion-card-title class=\"titleColor\">Notifications</ion-card-title>\r\n  </ion-card-header>\r\n\r\n  <ion-card-content>\r\n    <ion-list *ngIf = \"notifications.length > 0\">\r\n      <ion-item-sliding *ngFor = \"let data of notifications\">\r\n        <ion-item>\r\n          <ion-avatar slot=\"start\" [routerLink]=\"['/contactDashboard',data.senderId]\">\r\n            <img class=\"avatar\" src=\"assets/img/bitmoji.png\">\r\n          </ion-avatar>\r\n          <ion-label *ngIf=\"!data.read\" [routerLink]=\"['/contactDashboard',data.senderId]\">\r\n            <h2 class=\"dateFormat\">{{timeFromNow(data.created)}}</h2>\r\n            <p style=\"font-size:12px;\">{{data.message}}</p>\r\n          </ion-label>\r\n          <ion-label *ngIf=\"data.read\" [routerLink]=\"['/contactDashboard',data.senderId]\">\r\n            <h2 class=\"dateFormat\" style=\"color:rgb(168, 168, 168);\">{{timeFromNow(data.created)}}</h2>\r\n            <p style=\"color:rgb(168, 168, 168); font-size:12px;\">{{data.message}}</p>\r\n          </ion-label>\r\n          <ion-button *ngIf=\"!checkInArray(userArr,data.senderId)\" color=\"success\" (click)=\"followUser(data.senderId)\">S'abonner</ion-button>\r\n          <ion-button *ngIf=\"checkInArray(userArr,data.senderId)\" color=\"medium\" (click)=\"unfollowUser(data.senderId)\">Abonné</ion-button>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"danger\" (click)= \"deleteNotification(data)\">\r\n            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n    \r\n    \r\n    <div class = \"row\" *ngIf = \"notifications.length == 0\">\r\n      <h3 class=\"listHeader text\">\r\n        Vous n'avez aucune notification\r\n      </h3>\r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>"

/***/ }),

/***/ "./src/app/members/dashboard/_inc/notifications/notifications.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/notifications/notifications.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material-icons {\n  color: blue !important;\n  margin-right: 10px;\n  cursor: pointer; }\n\n.time {\n  margin-bottom: 10px !important;\n  font-style: italic; }\n\n.text {\n  text-align: center;\n  font-size: 18px !important; }\n\n.disabled {\n  color: white !important; }\n\n/* Notification Styling */\n\n.collection {\n  display: flex;\n  padding: 0; }\n\n.collection .collection-item.avatar {\n  height: auto;\n  padding: 0; }\n\n.collection-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.collection-item.avatar, .notificationContent {\n  padding: 10px;\n  padding-bottom: 0;\n  width: 100%;\n  height: 80%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.notificationContent img {\n  border-radius: 50%; }\n\n.notificationText {\n  display: flex;\n  flex-direction: column;\n  padding-left: 10px; }\n\n.time {\n  text-align: start; }\n\n.dateFormat::first-letter {\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9kYXNoYm9hcmQvX2luYy9ub3RpZmljYXRpb25zL0Q6XFxXb3Jrc3BhY2VcXGtpY2tBcHBcXEtpY2thcHAvc3JjXFxhcHBcXG1lbWJlcnNcXGRhc2hib2FyZFxcX2luY1xcbm90aWZpY2F0aW9uc1xcbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUF1QjtFQUN2QixrQkFBbUI7RUFDbkIsZUFBZ0IsRUFBQTs7QUFHcEI7RUFDSSw4QkFBK0I7RUFDL0Isa0JBQW1CLEVBQUE7O0FBSXZCO0VBQ0ksa0JBQWtCO0VBQ2xCLDBCQUEyQixFQUFBOztBQUUvQjtFQUNJLHVCQUF3QixFQUFBOztBQUc1Qix5QkFBQTs7QUFFQTtFQUVJLGFBQWE7RUFDYixVQUFVLEVBQUE7O0FBR2Q7RUFFSSxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBRUksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFFSSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBRUksa0JBQWtCLEVBQUE7O0FBR3RCO0VBRUksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFFSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx5QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvZGFzaGJvYXJkL19pbmMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGNvbG9yIDogYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0IDogMTBweDtcclxuICAgIGN1cnNvciA6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b20gOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXN0eWxlIDogaXRhbGljO1xyXG5cclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplIDogMThweCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXNhYmxlZCB7XHJcbiAgICBjb2xvciA6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE5vdGlmaWNhdGlvbiBTdHlsaW5nICovXHJcblxyXG4uY29sbGVjdGlvblxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbGxlY3Rpb24gLmNvbGxlY3Rpb24taXRlbS5hdmF0YXJcclxue1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbGxlY3Rpb24taXRlbVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2xsZWN0aW9uLWl0ZW0uYXZhdGFyLCAubm90aWZpY2F0aW9uQ29udGVudFxyXG57XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbkNvbnRlbnQgaW1nXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvblRleHRcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi50aW1lXHJcbntcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcblxyXG4uZGF0ZUZvcm1hdDo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/dashboard/_inc/notifications/notifications.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/notifications/notifications.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
        this.notifications = [];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__("https://https://kickserver.xyz");
        this.user = this.authService.userData;
        this.getUser();
        this.socket.on('refreshPage', function () {
            _this.getUser();
        });
        moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('fr');
    };
    NotificationsComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.notifications; _i < _a.length; _i++) {
            var data = _a[_i];
            this.markNotification(data);
        }
    };
    NotificationsComponent.prototype.followUser = function (userId) {
        var _this = this;
        this.usersService.followUser(userId).subscribe(function (data) {
            _this.socket.emit('refresh', {});
        });
    };
    NotificationsComponent.prototype.unfollowUser = function (userId) {
        var _this = this;
        this.usersService.unfollowUser(userId).subscribe(function (data) {
            _this.socket.emit('refresh', {});
        });
    };
    NotificationsComponent.prototype.checkInArray = function (arr, id) {
        var result = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](arr, ['userFollowed._id', id]);
        if (result) {
            return true;
        }
        else {
            return false;
        }
    };
    NotificationsComponent.prototype.getUser = function () {
        var _this = this;
        this.usersService.getUserById(this.user.id).subscribe(function (data) {
            _this.notifications = data.result.notifications.reverse();
            _this.userArr = data.result.following;
        });
    };
    NotificationsComponent.prototype.timeFromNow = function (time) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(time).fromNow();
    };
    NotificationsComponent.prototype.markNotification = function (data) {
        var _this = this;
        this.usersService.markNotification(data._id).subscribe(function (value) {
            _this.socket.emit('refresh', {});
        });
        console.log("notification marked !");
    };
    NotificationsComponent.prototype.deleteNotification = function (data) {
        var _this = this;
        this.usersService.markNotification(data._id, true).subscribe(function (value) {
            _this.socket.emit('refresh', {});
        });
    };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/members/dashboard/_inc/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/members/dashboard/_inc/notifications/notifications.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/members/dashboard/_inc/notifications/notifications.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/members/dashboard/_inc/notifications/notifications.module.ts ***!
  \******************************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.component */ "./src/app/members/dashboard/_inc/notifications/notifications.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            ],
            exports: [
                [_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]]
            ]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());



/***/ }),

/***/ "./src/app/members/messages/_inc/contacts/contacts.component.html":
/*!************************************************************************!*\
  !*** ./src/app/members/messages/_inc/contacts/contacts.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\r\n  <ion-list-header class=\"listHeader\">\r\n    Conversations récentes\r\n  </ion-list-header>\r\n  <div *ngFor=\"let user of users\">\r\n    <ion-item (click)=\"presentModalMessaging(user._id)\"> <!--*ngIf=\"checkInArray(userArr,user._id)\"  thiss condition was here but not following isnt-->\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"avatar\" src=\"assets/img/bitmoji.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{user.pseudo}}</h2>\r\n        <p>{{user.lastMessage}}</p>\r\n      </ion-label>\r\n\r\n      <!-- <a class=\"iconSize\" [routerLink]=\"['/messaging', user.username]\">\r\n        <ion-icon name=\"chatboxes\" class=\"marginRight_5\"></ion-icon>\r\n      </a>\r\n      <a class=\"iconSize\" [routerLink]=\"['/map']\">\r\n      <ion-icon name=\"globe\" class=\"marginRight_5\"></ion-icon>\r\n      </a>\r\n      <a class=\"iconSize\" *ngIf=\"!checkInArray(userArr,user._id)\" (click)=\"followUser(user)\"><ion-icon name=\"person-add\" class=\"marginRight_5\"></ion-icon></a>        \r\n      <a class=\"iconSize\" *ngIf=\"checkInArray(userArr,user._id)\" (click)=\"unfollowUser(user)\"><ion-icon name=\"close\" class=\"marginRight_5\"></ion-icon></a> -->\r\n    </ion-item>\r\n  </div>\r\n</ion-list>\r\n\r\n\r\n  <!-- Skeleton screen -->\r\n<div *ngIf=\"!users\">\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </h3>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </p>\r\n        <p>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</div>"

/***/ }),

/***/ "./src/app/members/messages/_inc/contacts/contacts.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/members/messages/_inc/contacts/contacts.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconSize {\n  font-size: 23px;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZXNzYWdlcy9faW5jL2NvbnRhY3RzL0Q6XFxXb3Jrc3BhY2VcXGtpY2tBcHBcXEtpY2thcHAvc3JjXFxhcHBcXG1lbWJlcnNcXG1lc3NhZ2VzXFxfaW5jXFxjb250YWN0c1xcY29udGFjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsaUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lc3NhZ2VzL19pbmMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvblNpemUge1xyXG4gICAgZm9udC1zaXplOjIzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/members/messages/_inc/contacts/contacts.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/members/messages/_inc/contacts/contacts.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_members_messaging_messaging_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/members/messaging/messaging.page */ "./src/app/members/messaging/messaging.page.ts");







var baseUrl = "https://https://kickserver.xyz";


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(messageService, modalController, usersService, authService, popoverController) {
        this.messageService = messageService;
        this.modalController = modalController;
        this.usersService = usersService;
        this.authService = authService;
        this.popoverController = popoverController;
        this.users = [];
        this.userArr = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__("" + baseUrl);
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.authService.userData;
        this.getUserConversations();
        this.getUser();
        this.socket.on('refreshPage', function () {
            _this.getUserConversations();
            _this.getUser();
        });
    };
    ContactsComponent.prototype.presentModalMessaging = function (userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_members_messaging_messaging_page__WEBPACK_IMPORTED_MODULE_8__["MessagingPage"],
                            componentProps: {
                                user_id: userId
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContactsComponent.prototype.getUserConversations = function () {
        var _this = this;
        this.messageService.getUserConversations().subscribe(function (data) {
            _this.users = [];
            for (var i = 0; i < data.result.length; i++) {
                _this.users.push({ _id: data.result[i]._id, pseudo: data.result[i].pseudo, lastMessage: data.lastMessage[i] });
            }
            console.log(_this.users);
        });
    };
    ContactsComponent.prototype.getUser = function () {
        var _this = this;
        this.loggedInUser = this.authService.userData;
        // console.log(this.loggedInUser);
        this.usersService.getUserById(this.loggedInUser.id).subscribe(function (data) {
            _this.userArr = data.result.following;
            // console.log(data);
        });
    };
    ContactsComponent.prototype.followUser = function (user) {
        var _this = this;
        console.log(typeof (user._id));
        this.usersService.followUser(user._id).subscribe(function (data) {
            // console.log(data);
            _this.socket.emit('refresh', {});
        });
    };
    ContactsComponent.prototype.checkInArray = function (arr, id) {
        var result = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](arr, ['userFollowed._id', id]);
        if (result) {
            return true;
        }
        else {
            return false;
        }
    };
    ContactsComponent.prototype.unfollowUser = function (user) {
        // console.log(user);
        var _this = this;
        this.usersService.unfollowUser(user._id).subscribe(function (data) {
            console.log(data);
            _this.socket.emit('refresh', {});
        });
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/members/messages/_inc/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/members/messages/_inc/contacts/contacts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/members/messages/_inc/contacts/contacts.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/members/messages/_inc/contacts/contacts.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.component */ "./src/app/members/messages/_inc/contacts/contacts.component.ts");







var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            exports: [
                _contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"]
            ]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~contact-dashboard-contact-dashboard-module~dashboard-dashboard-module~members-messages-messa~376fb799.js.map