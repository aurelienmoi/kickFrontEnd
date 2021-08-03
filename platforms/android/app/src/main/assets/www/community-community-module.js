(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["community-community-module"],{

/***/ "./src/app/members/community/community.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/members/community/community.module.ts ***!
  \*******************************************************/
/*! exports provided: CommunityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPageModule", function() { return CommunityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layouts_nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_layouts/nav-bar/nav-bar.module */ "./src/app/members/_layouts/nav-bar/nav-bar.module.ts");
/* harmony import */ var _layouts_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_layouts/top-toolbar/top-toolbar.module */ "./src/app/members/_layouts/top-toolbar/top-toolbar.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _community_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./community.page */ "./src/app/members/community/community.page.ts");









var routes = [
    {
        path: '',
        component: _community_page__WEBPACK_IMPORTED_MODULE_8__["CommunityPage"]
    }
];
var CommunityPageModule = /** @class */ (function () {
    function CommunityPageModule() {
    }
    CommunityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _layouts_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_2__["TopToolbarModule"],
                _layouts_nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_1__["NavBarModule"]
            ],
            declarations: [_community_page__WEBPACK_IMPORTED_MODULE_8__["CommunityPage"]]
        })
    ], CommunityPageModule);
    return CommunityPageModule;
}());



/***/ }),

/***/ "./src/app/members/community/community.page.html":
/*!*******************************************************!*\
  !*** ./src/app/members/community/community.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"kickBg\">\r\n    <ion-title class=\"icon whiteSmoke\">Communauté</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/dashboard\" class=\"lightKick\" autoHide='false'>\r\n        <ion-icon class=\"settingBtn\" name=\"ios-arrow-forward\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"yellowBg\">\r\n  <div class=\"ion-text-center mainDiv\">\r\n      <ion-item class=\"transparentToolbar\" *ngFor=\"let user of users\">\r\n        <div class=\"avatarContainer\"><img src=\"assets/img/bitmoji.png\" class=\"avatar\" /></div>\r\n        <ion-label><a class=\"titleColor\" [routerLink]=\"['/contactDashboard',user._id]\">{{user.username}}</a></ion-label>\r\n\r\n        <ion-button color=\"light\" fill=\"clear\" *ngIf=\"!checkInArray(userArr,user._id)\" (click)=\"followUser(user)\">\r\n          <ion-icon name=\"add-circle-outline\" class=\"marginRight_5\"></ion-icon>\r\n        </ion-button>        \r\n        <ion-button color=\"light\" fill=\"clear\" *ngIf=\"checkInArray(userArr,user._id)\" (click)=\"unfollowUser(user)\">\r\n          <ion-icon name=\"close-circle\" class=\"marginRight_5\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-button color=\"light\" fill=\"clear\" (click)=\"more(user._id, user.username)\">\r\n          <ion-icon src=\"assets/svg/ellipsis-vertical-sharp.svg\" class=\"marginRight_5\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n  </div>\r\n\r\n  <app-nav-bar></app-nav-bar>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/members/community/community.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/members/community/community.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".moreCss {\n  text-align: center; }\n\n.svgIcon {\n  width: 20px;\n  height: auto;\n  fill: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9jb21tdW5pdHkvRDpcXFdvcmtzcGFjZVxca2lja0FwcFxcS2lja2FwcC9zcmNcXGFwcFxcbWVtYmVyc1xcY29tbXVuaXR5XFxjb21tdW5pdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVTtFQUFFLFlBQVc7RUFBRSxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2NvbW11bml0eS9jb21tdW5pdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vcmVDc3Mge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5zdmdJY29uIHtcclxuICAgIHdpZHRoOjIwcHg7IGhlaWdodDphdXRvOyBmaWxsOndoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/members/community/community.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/community/community.page.ts ***!
  \*****************************************************/
/*! exports provided: CommunityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPage", function() { return CommunityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _members_messaging_messaging_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../members/messaging/messaging.page */ "./src/app/members/messaging/messaging.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var baseUrl = "https://https://kickserver.xyz";



var CommunityPage = /** @class */ (function () {
    function CommunityPage(actionSheetController, usersService, authService, modalController, router) {
        this.actionSheetController = actionSheetController;
        this.usersService = usersService;
        this.authService = authService;
        this.modalController = modalController;
        this.router = router;
        this.users = [];
        this.userArr = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__("" + baseUrl);
    }
    CommunityPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedInUser = this.authService.userData;
        this.getUsers();
        this.getUser();
        this.socket.on('refreshPage', function () {
            _this.getUsers();
            _this.getUser();
        });
    };
    CommunityPage.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getAllUsers().subscribe(function (data) {
            lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](data.result, { username: _this.loggedInUser.username });
            _this.users = data.result;
            console.log(_this.users);
        });
    };
    CommunityPage.prototype.getUser = function () {
        var _this = this;
        this.loggedInUser = this.authService.userData;
        console.log(this.loggedInUser);
        this.usersService.getUserById(this.loggedInUser.id).subscribe(function (data) {
            _this.userArr = data.result.following;
            console.log(data);
        });
    };
    CommunityPage.prototype.checkInArray = function (arr, id) {
        var result = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](arr, ['userFollowed._id', id]);
        if (result) {
            return true;
        }
        else {
            return false;
        }
    };
    CommunityPage.prototype.followUser = function (user) {
        var _this = this;
        console.log(typeof (user._id));
        this.usersService.followUser(user._id).subscribe(function (data) {
            console.log(data);
            _this.socket.emit('refresh', {});
        });
    };
    CommunityPage.prototype.unfollowUser = function (user) {
        //  console.log(user);
        var _this = this;
        this.usersService.unfollowUser(user._id).subscribe(function (data) {
            console.log(data);
            _this.socket.emit('refresh', {});
        });
    };
    CommunityPage.prototype.presentModalMessaging = function (usernameEntering) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _members_messaging_messaging_page__WEBPACK_IMPORTED_MODULE_7__["MessagingPage"],
                            componentProps: {
                                username: usernameEntering
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
    CommunityPage.prototype.more = function (userId, username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: username,
                            cssClass: 'moreCss',
                            buttons: [{
                                    text: 'Messages',
                                    icon: 'ios-send',
                                    handler: function () {
                                        _this.presentModalMessaging(username);
                                    }
                                },
                                {
                                    text: 'Annuler',
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
    CommunityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-community',
            template: __webpack_require__(/*! ./community.page.html */ "./src/app/members/community/community.page.html"),
            styles: [__webpack_require__(/*! ./community.page.scss */ "./src/app/members/community/community.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], CommunityPage);
    return CommunityPage;
}());



/***/ })

}]);
//# sourceMappingURL=community-community-module.js.map