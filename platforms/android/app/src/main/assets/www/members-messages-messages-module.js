(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-messages-messages-module"],{

/***/ "./src/app/members/messages/messages.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/messages/messages.module.ts ***!
  \*****************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/members/messages/messages.page.ts");
/* harmony import */ var _inc_contacts_contacts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_inc/contacts/contacts.module */ "./src/app/members/messages/_inc/contacts/contacts.module.ts");
/* harmony import */ var src_app_members_contact_dashboard_inc_profil_menu_profil_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.module */ "./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.module.ts");
/* harmony import */ var src_app_members_layouts_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/members/_layouts/top-toolbar/top-toolbar.module */ "./src/app/members/_layouts/top-toolbar/top-toolbar.module.ts");
/* harmony import */ var src_app_members_dashboard_inc_main_main_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/members/dashboard/_inc/main/main.module */ "./src/app/members/dashboard/_inc/main/main.module.ts");
/* harmony import */ var src_app_members_layouts_nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/members/_layouts/nav-bar/nav-bar.module */ "./src/app/members/_layouts/nav-bar/nav-bar.module.ts");












var routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
    }
];
var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _inc_contacts_contacts_module__WEBPACK_IMPORTED_MODULE_7__["ContactsModule"],
                src_app_members_contact_dashboard_inc_profil_menu_profil_menu_module__WEBPACK_IMPORTED_MODULE_8__["ProfilMenuModule"],
                src_app_members_layouts_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_9__["TopToolbarModule"],
                src_app_members_dashboard_inc_main_main_module__WEBPACK_IMPORTED_MODULE_10__["MainModule"],
                src_app_members_layouts_nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_11__["NavBarModule"]
            ],
            declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());



/***/ }),

/***/ "./src/app/members/messages/messages.page.html":
/*!*****************************************************!*\
  !*** ./src/app/members/messages/messages.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"kickBg\">\r\n    <ion-title class=\"icon whiteSmoke\">Messagerie</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button disabled=\"false\" class=\"lightKick\" autoHide='false' (click)=\"presentPopover($event)\">\r\n        <ion-icon class=\"settingBtn\" name=\"settings\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button defaultHref=\"/dashboard\" color=\"light\" autoHide='false' text=\"\" icon=\"ios-arrow-forward\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<app-top-toolbar></app-top-toolbar>\r\n\r\n<ion-content>\r\n  <div class=\"ion-text-center mainDiv\">\r\n    <app-contacts></app-contacts>\r\n\r\n    <app-nav-bar></app-nav-bar>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/members/messages/messages.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/members/messages/messages.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".staticContent {\n  top: 0;\n  height: 12%; }\n\n.underStatic {\n  height: 30px; }\n\n.mainDiv {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZXNzYWdlcy9EOlxcV29ya3NwYWNlXFxraWNrQXBwXFxLaWNrYXBwL3NyY1xcYXBwXFxtZW1iZXJzXFxtZXNzYWdlc1xcbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksTUFBTTtFQUNOLFdBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVcsRUFBQTs7QUFHZjtFQUNJLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gRUxFTUVOVFMgUExBQ0VNRU5UIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5zdGF0aWNDb250ZW50IHtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDoxMiU7XHJcbn1cclxuXHJcbi51bmRlclN0YXRpYyB7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxufVxyXG5cclxuLm1haW5EaXYge1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/members/messages/messages.page.ts":
/*!***************************************************!*\
  !*** ./src/app/members/messages/messages.page.ts ***!
  \***************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layouts_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_layouts/top-toolbar/top-toolbar.component */ "./src/app/members/_layouts/top-toolbar/top-toolbar.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var MessagesPage = /** @class */ (function () {
    function MessagesPage(popover) {
        this.popover = popover;
    }
    MessagesPage.prototype.ngOnInit = function () {
    };
    MessagesPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popover.create({
                            component: _layouts_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["TopToolbarComponent"],
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
    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.page.html */ "./src/app/members/messages/messages.page.html"),
            styles: [__webpack_require__(/*! ./messages.page.scss */ "./src/app/members/messages/messages.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], MessagesPage);
    return MessagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=members-messages-messages-module.js.map