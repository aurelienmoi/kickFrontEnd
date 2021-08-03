(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/members/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _inc_dashboard_map_dashboard_map_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_inc/dashboard-map/dashboard-map.module */ "./src/app/members/dashboard/_inc/dashboard-map/dashboard-map.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/members/dashboard/dashboard.page.ts");
/* harmony import */ var _layouts_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_layouts/top-toolbar/top-toolbar.module */ "./src/app/members/_layouts/top-toolbar/top-toolbar.module.ts");
/* harmony import */ var _contact_dashboard_inc_profil_menu_profil_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contact-dashboard/_inc/profil-menu/profil-menu.module */ "./src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.module.ts");
/* harmony import */ var _inc_main_main_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_inc/main/main.module */ "./src/app/members/dashboard/_inc/main/main.module.ts");
/* harmony import */ var _inc_library_library_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_inc/library/library.module */ "./src/app/members/dashboard/_inc/library/library.module.ts");
/* harmony import */ var src_app_members_layouts_nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/members/_layouts/nav-bar/nav-bar.module */ "./src/app/members/_layouts/nav-bar/nav-bar.module.ts");
/* harmony import */ var _inc_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_inc/notifications/notifications.module */ "./src/app/members/dashboard/_inc/notifications/notifications.module.ts");
/* harmony import */ var _streams_streams_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../streams/streams.module */ "./src/app/members/streams/streams.module.ts");








// Components







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _inc_library_library_module__WEBPACK_IMPORTED_MODULE_11__["LibraryModule"],
                _contact_dashboard_inc_profil_menu_profil_menu_module__WEBPACK_IMPORTED_MODULE_9__["ProfilMenuModule"],
                _layouts_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_8__["TopToolbarModule"],
                _inc_main_main_module__WEBPACK_IMPORTED_MODULE_10__["MainModule"],
                src_app_members_layouts_nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_12__["NavBarModule"],
                _inc_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_13__["NotificationsModule"],
                _inc_dashboard_map_dashboard_map_module__WEBPACK_IMPORTED_MODULE_1__["DashboardMapModule"],
                _streams_streams_module__WEBPACK_IMPORTED_MODULE_14__["StreamsModule"]
            ],
            declarations: [
                _dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]
            ]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.html":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-toolbar></app-top-toolbar>\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"transparentToolbar\">\r\n    <ion-img slot=\"start\" src=\"assets/svg/kicklogo.png\" style=\"width:45px; height:auto; padding-left:15px;\"></ion-img>\r\n    <ion-title *ngIf=\"dataLoaded\" class=\"icon titleColor\">{{userDataDisplay[\"username\"]}}</ion-title>\r\n    <ion-title *ngIf=\"!dataLoaded\" class=\"icon titleColor\">\r\n      <ion-spinner name=\"dots\"></ion-spinner>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"false\" class=\"lightKick\" autoHide='false' (click)=\"presentPopover($event)\">\r\n        <ion-icon class=\"settingBtn\" name=\"settings\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"kickBg\">\r\n    <ion-segment color=\"medium\" mode=\"md\">\r\n      <ion-segment-button mode=\"md\" checked value=\"home\" (click)=\"onMain()\">\r\n        <ion-label color=\"light\">Accueil</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button mode=\"md\" value=\"library\" (click)=\"onLibrary()\">\r\n        <ion-label color=\"light\">Musiques</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button mode=\"md\" value=\"notifications\" (click)=\"onNotifications()\">\r\n        <ion-label color=\"light\"> Fil d'actu</ion-label>\r\n       <!-- <ion-badge class=\"notifications\" color=\"danger\">66</ion-badge>-->\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-text-center\">\r\n    <div class=\"width100 ion-text-center mainDiv\" style=\"background-image:url(assets/img/bgtest.jpg); min-height:100vh; background-size:cover; background-attachment: fixed;\">\r\n      <!-------------- APP MAIN -------------->\r\n      <div id=\"appMain\" *ngIf=\"isOnMain\">\r\n        <ion-card style=\"background:rgb(5, 3, 31);\">\r\n          <ion-card-content>\r\n            <!--------------- BITMOJI CONTAINER --------------->\r\n            <div class=\"spaceBmj\"></div>\r\n            <div class=\"bitmojiContainer\">\r\n              <p *ngIf=\"dataLoaded\" (click)=\"presentModalFollowers()\" class=\"followers inlineBlock\">Abonnés<br />\r\n                <ion-badge color=\"light\">{{userDataDisplay[\"followers\"]}}</ion-badge>\r\n              </p>\r\n              <p *ngIf=\"!dataLoaded\" class=\"followers inlineBlock\">Abonnés <br />\r\n                <ion-skeleton-text animated style=\"margin: 20%; width:50%; text-align:center;\"></ion-skeleton-text>\r\n              </p>\r\n              <ion-avatar *ngIf='userAvatar' (click)=\"chooseAvatar()\" class=\"bmjContainer inlineBlock\"><img [src]=\"userAvatar\"  onerror=\"this.onerror=null; this.src='../../assets/img/bitmoji.png';\" alt=\"Bitmoji\"\r\n                class=\"bmjLogo\"/></ion-avatar>\r\n                <ion-avatar *ngIf='!userAvatar' (click)=\"chooseAvatar()\" class=\"bmjContainer inlineBlock\"><img [src]=\"bitmojiLink\"\r\n                  class=\"bmjLogo\"/></ion-avatar>\r\n              <p *ngIf=\"dataLoaded\" (click)=\"presentModalFollowing()\" class=\"following inlineBlock\">Abonnements<br />\r\n                <ion-badge color=\"light\">{{userDataDisplay[\"following\"]}}</ion-badge>\r\n              </p>\r\n              <p *ngIf=\"!dataLoaded\" class=\"following inlineBlock\">Abonnements <br />\r\n                <ion-skeleton-text animated style=\"margin: 20%; width:50%; text-align:center;\"></ion-skeleton-text>\r\n              </p>\r\n            </div>\r\n\r\n            <!--------------- PROFIL INFORMATIONS --------------->\r\n            <!-- If the user has already chosen a pseudo : -->\r\n            <p class=\"stuck\">\r\n              <a *ngIf=\"dataLoaded\" (click)=\"changePseudo()\"><span\r\n                  class=\"pseudo\">{{userDataDisplay[\"pseudo\"]}}</span></a>\r\n              <a *ngIf=\"!dataLoaded\"><span class=\"pseudo\">\r\n                  <ion-skeleton-text animated style=\"width:100px; text-align:center; margin:auto;\"></ion-skeleton-text>\r\n                </span></a>\r\n            </p>\r\n\r\n            <div class=\"stuck\" *ngIf=\"!pseudoChanging\"></div>\r\n            <!-- If the user has already chosen a biography : -->\r\n            <p class=\"info\">\r\n              <a *ngIf=\"dataLoaded\" class=\"info greyKick\" (click)=\"changeBio()\">{{userDataDisplay[\"bio\"]}}</a>\r\n              <a *ngIf=\"!dataLoaded\" class=\"info greyKick\">\r\n                <ion-skeleton-text animated style=\"width:300px; text-align:center; margin:auto;\"></ion-skeleton-text>\r\n              </a>\r\n            </p>\r\n            <ion-chip *ngIf=\"dataLoaded && userDataDisplay.roles.listener\" outline color=\"primary\">\r\n              <ion-icon *ngIf=\"dataLoaded && userDataDisplay.roles.listener\" name=\"musical-notes\" color=\"primary\"></ion-icon>\r\n              <ion-label *ngIf=\"dataLoaded && userDataDisplay.roles.listener\" >Auditeur</ion-label>\r\n            </ion-chip>\r\n            <ion-chip *ngIf=\"dataLoaded && userDataDisplay.roles.rapper\"  outline color=\"primary\">\r\n              <ion-icon *ngIf=\"dataLoaded && userDataDisplay.roles.rapper\"  name=\"microphone\" color=\"primary\"></ion-icon>\r\n              <ion-label *ngIf=\"dataLoaded && userDataDisplay.roles.rapper\" >Rappeur</ion-label>\r\n            </ion-chip>\r\n            <ion-chip *ngIf=\"dataLoaded && userDataDisplay.roles.beatmaker\"  outline color=\"secondary\">\r\n              <ion-icon *ngIf=\"dataLoaded && userDataDisplay.roles.beatmaker\" name=\"save\" color=\"secondary\"></ion-icon>\r\n              <ion-label *ngIf=\"dataLoaded && userDataDisplay.roles.beatmaker\" >Beatmaker</ion-label>\r\n            </ion-chip>\r\n            <app-dashboard-map *ngIf=\"dataLoaded\" [userId]=\"userDataDisplay['id']\"></app-dashboard-map>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle slogan componentTitle>Groupes</ion-card-subtitle>\r\n            <ion-card-title class=\"titleColor\">Vos groupes</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <p class=\"location\">Vous ne faites partie d'aucun groupe</p>\r\n            <div class=\"upload\">\r\n              <ion-button color=\"medium\" fill=\"clear\" strong (click)=presentModalUpload()>\r\n                <ion-icon name=\"add-circle-outline\"></ion-icon>&nbsp;Créer un groupe\r\n              </ion-button>\r\n            </div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n      <!-------------- END APP MAIN -------------->\r\n      <app-library *ngIf=\"isOnLibrary\"></app-library>\r\n      <app-streams *ngIf=\"isOnNotifications\"></app-streams>\r\n      <app-nav-bar></app-nav-bar>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".staticContent {\n  top: 0; }\n\n.underStatic {\n  height: 80px; }\n\n.behindHeader {\n  height: 60px; }\n\n.followers {\n  position: relative;\n  top: -20px;\n  color: whitesmoke;\n  width: 90px; }\n\n.following {\n  position: relative;\n  top: -20px;\n  left: 10px;\n  color: whitesmoke;\n  width: 90px; }\n\n.width100 {\n  width: 100%;\n  position: absolute;\n  z-index: 300;\n  background-color: #131313; }\n\n.bmjLogo {\n  width: 65%;\n  margin: auto;\n  height: auto;\n  border-radius: 40%; }\n\n.bmjContainer {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  border: 1px solid whitesmoke;\n  text-align: center;\n  margin: auto;\n  padding-top: 3px; }\n\n.bitmojiContainer {\n  height: 80px; }\n\n.spaceBmj {\n  margin-top: 4px; }\n\n.stuck {\n  margin-bottom: 10px; }\n\n.info {\n  font-size: 14px;\n  margin-top: 2px;\n  width: 100%; }\n\n.pseudo {\n  font-size: 18px;\n  letter-spacing: 1.5px;\n  color: #b3b3b3; }\n\n.pseudoSeparator {\n  margin: auto;\n  width: 100%;\n  border-bottom: 1px solid #b3b3b3; }\n\n.infoSeparator {\n  width: 100%;\n  border-bottom: 1px solid #b3b3b3; }\n\n.usernameContent {\n  margin-top: 0; }\n\n.dataForm {\n  padding-top: 5px;\n  height: 30px; }\n\n.staticToolbar {\n  position: fixed;\n  top: 245px;\n  width: 100%;\n  z-index: 3;\n  margin-top: -5px; }\n\n.paddingTop {\n  padding-top: 15px; }\n\n.profilMenu {\n  list-style-type: none;\n  padding: 0;\n  padding-bottom: 5px;\n  text-align: left;\n  border-bottom: 1px solid grey;\n  margin-bottom: 0px; }\n\n.profilMenu li {\n  display: inline-block;\n  margin: 5px;\n  font-weight: bold; }\n\n.profilMenuSeparator {\n  color: grey; }\n\n.notifications {\n  position: absolute;\n  right: 5px;\n  top: 0;\n  font-size: 10px; }\n\n.profilLink {\n  text-decoration: none;\n  color: #D6CEF4; }\n\n.profilMenu .active {\n  color: whitesmoke; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9kYXNoYm9hcmQvRDpcXFdvcmtzcGFjZVxca2lja0FwcFxcS2lja2FwcC9zcmNcXGFwcFxcbWVtYmVyc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksTUFBTSxFQUFBOztBQUdWO0VBQ0ksWUFBVyxFQUFBOztBQUdmO0VBQ0ksWUFBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBZ0I7RUFDaEIsV0FBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLFdBQVUsRUFBQTs7QUFHZDtFQUNJLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsWUFBVztFQUNYLHlCQUE4QixFQUFBOztBQUtsQztFQUNJLFVBQVM7RUFDVCxZQUFXO0VBQ1gsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLDRCQUEyQjtFQUMzQixrQkFBaUI7RUFDakIsWUFBVztFQUNYLGdCQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBVyxFQUFBOztBQUdmO0VBQ0ksZUFBYyxFQUFBOztBQUtsQjtFQUNJLG1CQUFrQixFQUFBOztBQUd0QjtFQUFRLGVBQWM7RUFBRSxlQUFjO0VBQUUsV0FBVSxFQUFBOztBQUVsRDtFQUFVLGVBQWM7RUFBRSxxQkFBb0I7RUFBRSxjQUF3QixFQUFBOztBQUN4RTtFQUFtQixZQUFXO0VBQUUsV0FBVTtFQUFFLGdDQUEwQyxFQUFBOztBQUN0RjtFQUFpQixXQUFVO0VBQUUsZ0NBQTBDLEVBQUE7O0FBQ3ZFO0VBQW1CLGFBQVksRUFBQTs7QUFFL0I7RUFDSSxnQkFBZTtFQUNmLFlBQVcsRUFBQTs7QUFPZjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVTtFQUNWLFVBQVM7RUFDVCxnQkFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFnQixFQUFBOztBQUtwQjtFQUNJLHFCQUFxQjtFQUNyQixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsNkJBQTRCO0VBQzVCLGtCQUFpQixFQUFBOztBQUdyQjtFQUNJLHFCQUFvQjtFQUNwQixXQUFVO0VBQ1YsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxNQUFLO0VBQ0wsZUFBYyxFQUFBOztBQUtsQjtFQUNJLHFCQUFvQjtFQUNwQixjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksaUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBFTEVNRU5UUyBQTEFDRU1FTlQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnN0YXRpY0NvbnRlbnQge1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4udW5kZXJTdGF0aWMge1xyXG4gICAgaGVpZ2h0OjgwcHg7XHJcbn1cclxuXHJcbi5iZWhpbmRIZWFkZXIge1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcbn1cclxuXHJcbi5mb2xsb3dlcnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGNvbG9yOndoaXRlc21va2U7XHJcbiAgICB3aWR0aDo5MHB4O1xyXG59XHJcblxyXG4uZm9sbG93aW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBsZWZ0OjEwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xyXG4gICAgd2lkdGg6OTBweDtcclxufVxyXG5cclxuLndpZHRoMTAwIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6MzAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTksMTksMTkpO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEJJVE1PSkkgQ09OVEFJTkVSIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5ibWpMb2dvIHtcclxuICAgIHdpZHRoOjY1JTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOjQwJTtcclxufVxyXG5cclxuLmJtakNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDo3NXB4O1xyXG4gICAgaGVpZ2h0Ojc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGVzbW9rZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDozcHg7XHJcbn1cclxuXHJcbi5iaXRtb2ppQ29udGFpbmVyIHtcclxuICAgIGhlaWdodDo4MHB4O1xyXG59XHJcblxyXG4uc3BhY2VCbWoge1xyXG4gICAgbWFyZ2luLXRvcDo0cHg7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUFJPRklMIElORk9TIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5zdHVjayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHsgZm9udC1zaXplOjE0cHg7IG1hcmdpbi10b3A6MnB4OyB3aWR0aDoxMDAlO31cclxuXHJcbi5wc2V1ZG8geyBmb250LXNpemU6MThweDsgbGV0dGVyLXNwYWNpbmc6MS41cHg7IGNvbG9yOnJnYigxNzksIDE3OSwgMTc5KTsgfVxyXG4ucHNldWRvU2VwYXJhdG9yIHsgbWFyZ2luOmF1dG87IHdpZHRoOjEwMCU7IGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYigxNzksIDE3OSwgMTc5KTt9XHJcbi5pbmZvU2VwYXJhdG9yIHsgd2lkdGg6MTAwJTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiKDE3OSwgMTc5LCAxNzkpO31cclxuLnVzZXJuYW1lQ29udGVudCB7IG1hcmdpbi10b3A6MDsgfVxyXG5cclxuLmRhdGFGb3JtIHtcclxuICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFBST0ZJTCBNRU5VIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gRUxFTUVOVFMgUExBQ0VNRU5UIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5zdGF0aWNUb29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMjQ1cHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgei1pbmRleDozO1xyXG4gICAgbWFyZ2luLXRvcDotNXB4O1xyXG59XHJcblxyXG4ucGFkZGluZ1RvcCB7XHJcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFBST0ZJTCBNRU5VIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5wcm9maWxNZW51IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIHBhZGRpbmctYm90dG9tOjVweDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyZXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcclxufVxyXG5cclxuLnByb2ZpbE1lbnUgbGkge1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5cclxuLnByb2ZpbE1lbnVTZXBhcmF0b3Ige1xyXG4gICAgY29sb3I6Z3JleTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbnMge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICByaWdodDo1cHg7XHJcbiAgICB0b3A6MDtcclxuICAgIGZvbnQtc2l6ZToxMHB4O1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIExJTksgQ09MT1IgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLnByb2ZpbExpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBjb2xvcjojRDZDRUY0O1xyXG59XHJcblxyXG4ucHJvZmlsTWVudSAuYWN0aXZlIHtcclxuICAgIGNvbG9yOndoaXRlc21va2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layouts_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_layouts/top-toolbar/top-toolbar.component */ "./src/app/members/_layouts/top-toolbar/top-toolbar.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _followers_followers_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../followers/followers.page */ "./src/app/members/followers/followers.page.ts");
/* harmony import */ var _following_following_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../following/following.page */ "./src/app/members/following/following.page.ts");














var baseURL = "https://https://kickserver.xyz";
var DashboardPage = /** @class */ (function () {
    function DashboardPage(userService, authService, fileChooser, transfer, http, alertController, storage, modalController, platform, popover) {
        this.userService = userService;
        this.authService = authService;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.http = http;
        this.alertController = alertController;
        this.storage = storage;
        this.modalController = modalController;
        this.platform = platform;
        this.popover = popover;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_10__("" + baseURL);
        this.bitmojiLink = "assets/img/bitmoji.png";
        this.dataLoaded = false;
    }
    ///////////// IONIC PAGE LIFECYCLE /////////////
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on('refreshPage', function (data) {
            _this.updatePseudo();
            _this.updateBio();
        });
        if (!this.isOnNotifications && !this.isOnLibrary) {
            this.isOnNotifications = false;
            this.isOnLibrary = false;
            this.isOnMain = true;
        }
    };
    DashboardPage.prototype.ionViewWillEnter = function () {
        //   this.getUserAvatar();
        this.getUserData();
    };
    DashboardPage.prototype.ionViewDidEnter = function () {
        this.backButtonSub = this.platform.backButton.subscribeWithPriority(10000, function () { });
    };
    DashboardPage.prototype.ionViewWillLeave = function () {
        this.backButtonSub.unsubscribe();
    };
    DashboardPage.prototype.ionViewDidLeave = function () { };
    DashboardPage.prototype.ngOnDestroy = function () { };
    DashboardPage.prototype.onNotifications = function () {
        this.isOnNotifications = true;
        this.isOnLibrary = false;
        this.isOnMain = false;
    };
    DashboardPage.prototype.onLibrary = function () {
        this.isOnNotifications = false;
        this.isOnLibrary = true;
        this.isOnMain = false;
    };
    DashboardPage.prototype.onMain = function () {
        this.isOnNotifications = false;
        this.isOnLibrary = false;
        this.isOnMain = true;
    };
    DashboardPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popover.create({
                            component: _layouts_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["TopToolbarComponent"],
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
    DashboardPage.prototype.presentModalFollowing = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _following_following_page__WEBPACK_IMPORTED_MODULE_12__["FollowingPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DashboardPage.prototype.presentModalFollowers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _followers_followers_page__WEBPACK_IMPORTED_MODULE_11__["FollowersPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /////////// CHANGE PSEUDO FUNCTIONS ///////////
    DashboardPage.prototype.changePseudo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Modifier le pseudo',
                            message: 'C\'est sous ce pseudo que tu apparaitra sur Kick',
                            inputs: [
                                {
                                    name: 'pseudo',
                                    type: 'text',
                                    id: 'pseudo',
                                    value: this.userDataDisplay["pseudo"]
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Retour',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Confirm Ok');
                                        _this.changePseudoOk(data.pseudo);
                                    }
                                }
                            ]
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
    DashboardPage.prototype.changePseudoOk = function (pseudo) {
        var _this = this;
        this.data = {
            pseudoForm: pseudo,
            userId: this.authService.userData.id
        };
        this.userService.changePseudo(this.data).subscribe(function (res) {
            if (res.token) {
                _this.authService.clearToken();
                _this.authService.login(res.token, res.expiresIn);
                _this.socket.emit('refresh', {});
            }
            else {
                //MAYBE ADD HERE AN ALERT THAT PSEUDO CANT BE CHANGED
            }
        });
    };
    DashboardPage.prototype.updateBio = function () {
        var _this = this;
        this.userService.getUserById(this.authService.userData.id).subscribe(function (data) {
            console.log(data);
            _this.userDataDisplay.bio = data.result.bio;
            _this.authService.userData.bio = data.result.bio;
        });
    };
    DashboardPage.prototype.updatePseudo = function () {
        var _this = this;
        this.userService.getUserById(this.authService.userData.id).subscribe(function (data) {
            console.log(data);
            _this.userDataDisplay.pseudo = data.result.pseudo;
            _this.authService.userData.pseudo = data.result.pseudo;
        });
    };
    /////////// CHANGE BIO FUNCTIONS ///////////
    DashboardPage.prototype.changeBio = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Modifier la bio',
                            message: 'Ta bio apparaitra sur ton profil lorsqu\'un utilisateur se rendra sur ton profil',
                            inputs: [
                                {
                                    name: 'bio',
                                    type: 'text',
                                    id: 'bio',
                                    value: this.userDataDisplay["bio"]
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Retour',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Confirm Ok');
                                        _this.changeBioOk(data.bio);
                                    }
                                }
                            ]
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
    DashboardPage.prototype.changeBioOk = function (bio) {
        var _this = this;
        this.data = {
            bioForm: bio,
            userId: this.authService.userData.id
        };
        this.userService.changeBio(this.data).subscribe(function (res) {
            if (res.token) {
                _this.authService.clearToken();
                _this.authService.login(res.token, res.expiresIn);
                _this.socket.emit('refresh', {});
            }
            else {
                // ADD HERE MAYBE AN ALERT THAT BIO HASNT BEEN CHANGED
            }
        });
    };
    // OTHER FUNCTIONS
    DashboardPage.prototype.loginDataStorage = function (rowId, rowUsername, rowIsArtist, rowIsBeatmaker, rowBio, rowRegistrationDate, following, followers, pseudo, roles) {
        var loginData = {
            "id": rowId, "username": rowUsername, "isArtist": rowIsArtist, "isBeatmaker": rowIsBeatmaker, "bio": rowBio, "registrationDate": rowRegistrationDate, "following": following, "followers": followers, "pseudo": pseudo,
            "roles": roles
        };
        this.userData = loginData;
        this.userDataDisplay = loginData;
        this.dataLoaded = true;
    };
    DashboardPage.prototype.getUserData = function () {
        var _this = this;
        var data = "vide"; // this request will be intercepted and the token will be added automatically so we dont need to put it here
        this.http.post(baseURL + "/testToken", data).subscribe(function (res) {
            if (res.loggedIn !== true) {
                _this.logout();
            }
            else {
                console.log(res);
                _this.userAvatar = "https://https://kickserver.xyz/chatApp/getUserAvatar/" + res.id;
                _this.loginDataStorage(res.id, res.username, res.isArtiste, res.isBeatmaker, res.bio, res.registrationDate, res.following, res.followers, res.pseudo, res.roles);
            }
        });
    };
    DashboardPage.prototype.logout = function () {
        this.authService.logout();
    };
    DashboardPage.prototype.chooseFile = function () {
        this.fileChooser.open()
            .then(function (uri) { return console.log(uri); })
            .catch(function (e) { return console.log(e); });
    };
    DashboardPage.prototype.chooseAvatar = function () {
        var _this = this;
        this.storage.get("ACCES_TOKEN").then(function (res) {
            if (res) {
                var fileTransfer_1 = _this.transfer.create();
                var options_1 = {
                    fileKey: 'avatar',
                    fileName: 'CustomFile',
                    headers: {
                        'avatarName': 'myAvatar',
                        'x-access-token': res
                    }
                };
                _this.fileChooser.open({ "mime": "image/jpeg" })
                    .then(function (uri) { return fileTransfer_1.upload(uri, baseURL + "/chatApp/changeAvatar", options_1)
                    .then(function (data) {
                    alert(data + "avatar uploadé avec succes");
                }, function (err) {
                    alert("erreur pendant le traitement de votre image, merci de choisir un fichier au format jpeg");
                }); });
            }
            else {
                alert("une erreur est survenue pendant le transfert de votre image, merci de vous reconnecter");
                _this.authService.logout();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], DashboardPage.prototype, "content", void 0);
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/members/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/members/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["FileChooser"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map