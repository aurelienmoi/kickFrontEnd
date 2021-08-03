(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-map-map-module"],{

/***/ "./src/app/components/map/map.module.ts":
/*!**********************************************!*\
  !*** ./src/app/components/map/map.module.ts ***!
  \**********************************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/components/map/map.page.ts");
/* harmony import */ var src_app_components_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/top-toolbar/top-toolbar.module */ "./src/app/components/top-toolbar/top-toolbar.module.ts");
/* harmony import */ var src_app_components_nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/nav-bar/nav-bar.module */ "./src/app/components/nav-bar/nav-bar.module.ts");









var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_top_toolbar_top_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["TopToolbarModule"],
                src_app_components_nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_8__["NavBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/components/map/map.page.html":
/*!**********************************************!*\
  !*** ./src/app/components/map/map.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-toolbar></app-top-toolbar>\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"kickBg\">\r\n    <ion-title class=\"icon whiteSmoke\">Carte Kick</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button disabled=\"false\" class=\"lightKick\" autoHide='false' (click)=\"presentPopover($event)\">\r\n        <ion-icon class=\"settingBtn\" name=\"settings\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/dashboard\" color=\"light\" autoHide='false' text=\"\" icon=\"ios-arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"noScroll\">\r\n  <div class=\"map match-parent\" id=\"map\"></div>\r\n  <ion-toolbar class=\"kickBg toolbarTest\">\r\n    <ion-title>\r\n      <ion-button fill=\"clear\">\r\n        <ion-icon class=\"menuIcon\" color=\"light\" name=\"ios-arrow-up\"></ion-icon>\r\n      </ion-button>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <app-nav-bar></app-nav-bar>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/components/map/map.page.scss":
/*!**********************************************!*\
  !*** ./src/app/components/map/map.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 91.8%; }\n\n.my-custom-control {\n  text-transform: uppercase !important; }\n\n.toolbarTest {\n  position: absolute;\n  bottom: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvRDpcXFdvcmtzcGFjZVxca2lja0FwcFxca2lja2FwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFwXFxtYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkxLjglO1xyXG59XHJcbi5teS1jdXN0b20tY29udHJvbCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b29sYmFyVGVzdCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJvdHRvbTo1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/map/map.page.ts":
/*!********************************************!*\
  !*** ./src/app/components/map/map.page.ts ***!
  \********************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/top-toolbar/top-toolbar.component */ "./src/app/components/top-toolbar/top-toolbar.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/mapbox-gl/dist/mapbox-gl.css */ "./node_modules/mapbox-gl/dist/mapbox-gl.css");
/* harmony import */ var _node_modules_mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_members_messaging_messaging_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/members/messaging/messaging.page */ "./src/app/members/messaging/messaging.page.ts");













var baseURL = "https://https://kickserver.xyz";
var MapPage = /** @class */ (function () {
    function MapPage(http, geolocation2, router, popover, modalController, document) {
        this.http = http;
        this.geolocation2 = geolocation2;
        this.router = router;
        this.popover = popover;
        this.modalController = modalController;
        this.document = document;
        this.style = 'mapbox://styles/sheepbild/ck4ypwvod3t241cqlza366zmc';
        this.lng = 46.1390432;
        this.lat = 2.434848;
    }
    MapPage.prototype.ngOnInit = function () {
        this.ionicGeolocation();
        //this.postCoordinates();
        this.getCustomCoordinates();
    };
    MapPage.prototype.ionViewDidEnter = function () {
        this.buildMap();
    };
    MapPage.prototype.ionViewDidLeave = function () {
        this.map.remove();
    };
    MapPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popover.create({
                            component: _components_top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["TopToolbarComponent"],
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
    MapPage.prototype.ionicGeolocation = function () {
        this.geolocation2.getCurrentPosition().then(function (resp) {
            console.log(resp);
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation2.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    };
    MapPage.prototype.getCustomCoordinates = function () {
        var _this = this;
        this.http.get(baseURL + "/chatApp/getCoordinates").subscribe(function (res) {
            console.log(res.object1);
            _this.data = res.object1;
        });
    };
    MapPage.prototype.buildMap = function () {
        var _this = this;
        mapbox_gl__WEBPACK_IMPORTED_MODULE_6__["accessToken"] = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mapbox.accessToken;
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_6__["Map"]({
            container: 'map',
            style: this.style,
            center: [this.lat, this.lng],
            zoom: 4,
        });
        this.map.addControl(this.geolocate = new mapbox_gl__WEBPACK_IMPORTED_MODULE_6__["GeolocateControl"]({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_6__["NavigationControl"]());
        this.map.on('load', function (event) {
            var MyCustomControl = /** @class */ (function () {
                function MyCustomControl() {
                }
                MyCustomControl.prototype.onAdd = function (map) {
                    this.map = map;
                    this.container = document.createElement('ion-button');
                    this.container.className = 'my-custom-control';
                    this.container.innerHTML = '<ion-icon name="pin"></ion-icon>&nbsp;Bitmoji';
                    this.container.setAttribute("color", "dark");
                    this.container.setAttribute("style", "position:absolute; bottom:94px; right:40px;");
                    this.container.setAttribute("size", "small");
                    this.container.setAttribute("id", "myCustomId");
                    return this.container;
                };
                MyCustomControl.prototype.onRemove = function () {
                    this.container.parentNode.removeChild(this.container);
                    this.map = undefined;
                };
                return MyCustomControl;
            }());
            var myCustomControl = new MyCustomControl();
            _this.map.addControl(myCustomControl);
            document.getElementById("myCustomId").addEventListener("click", function () {
                _this.markFunction();
                _this.map.removeControl(myCustomControl);
            });
            //  this.geolocate.trigger();
            /*   this.geolocate.on('geolocate',  () =>  {
                 var userlocation2 = this.geolocate._lastKnownPosition.coords;
                 var userlocation= [this.geolocate._lastKnownPosition.coords.latitude, this.geolocate._lastKnownPosition.coords.longitude];
                // this.postCoordinates(userlocation)
                 console.log("geolocalisation en cours" , userlocation); })*/
            _this.map.addSource('customPoint', {
                type: 'geojson',
                data: _this.data,
                cluster: true,
                clusterMaxZoom: 14,
                clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
            });
            _this.map.addLayer({
                id: 'customPoint',
                type: 'circle',
                source: 'customPoint',
                filter: ['has', 'point_count'],
                paint: {
                    // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                    // with three steps to implement three types of circles:
                    //   * Blue, 20px circles when point count is less than 100
                    //   * Yellow, 30px circles when point count is between 100 and 750
                    //   * Pink, 40px circles when point count is greater than or equal to 750
                    'circle-color': [
                        'step',
                        ['get', 'point_count'],
                        '#51bbd6',
                        100,
                        '#f1f075',
                        750,
                        '#f28cb1'
                    ],
                    'circle-radius': [
                        'step',
                        ['get', 'point_count'],
                        20,
                        100,
                        30,
                        750,
                        40
                    ]
                }
            });
            _this.map.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'customPoint',
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': '{point_count_abbreviated}',
                    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                    'text-size': 12
                }
            });
            _this.map.addLayer({
                id: 'unclustered-point',
                type: 'circle',
                source: 'customPoint',
                filter: ['!', ['has', 'point_count']],
                paint: {
                    'circle-color': '#5f8394',
                    'circle-radius': 6,
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#fff'
                }
            });
            _this.map.on('click', 'unclustered-point', function (e) {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                var clusterId = e.features[0].properties.cluster_id;
                _this.userId = e.features[0].properties.userId;
                _this.userPseudo = e.features[0].properties.pseudo;
                console.log(_this.userId);
                console.log(_this.userPseudo);
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                _this.getPlaceName(coordinates).subscribe(function (res) {
                    console.log(res.features[0].place_name);
                    _this.placeName = res.features[0].place_name;
                    if (_this.placeName = res.features[0].place_name) {
                        new mapbox_gl__WEBPACK_IMPORTED_MODULE_6__["Popup"]()
                            .setLngLat(coordinates)
                            .setHTML("<p style=\"color:grey;\">" + _this.userPseudo + "," + _this.placeName + "</p><ion-button id='myBtn1' color=\"dark\">Profil</ion-button><ion-button id='myBtn' fill=\"clear\" color=\"dark\">Messages</ion-button>") //`<a class="verticalAlign" [routerLink]="['/contactDashboard',receiverId]">`
                            .addTo(_this.map);
                        _this.createListener();
                    }
                });
            });
        });
    };
    MapPage.prototype.createListener = function () {
        var _this = this;
        document.getElementById("myBtn1").addEventListener("click", function () {
            _this.router.navigate(['/contactDashboard', _this.userId]);
        });
        document.getElementById("myBtn").addEventListener("click", function () {
            _this.presentModalMessaging(_this.userId);
        });
    };
    MapPage.prototype.presentModalMessaging = function (userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_members_messaging_messaging_page__WEBPACK_IMPORTED_MODULE_11__["MessagingPage"],
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
    MapPage.prototype.markFunction = function () {
        var _this = this;
        this.wantsToMark = true;
        console.log("normalement c'est true putain", this.wantsToMark);
        this.map.once('click', function (event) {
            // console.log(event.lngLat);
            var marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_6__["Marker"]()
                .setLngLat(event.lngLat)
                .addTo(_this.map);
            //add modal or whatever to confirm the marker choice THEN TRIGGER THE postCoordinates(event.lngLat) 
            alert("confirmer le choix du marker");
            console.log(event.lngLat.lng);
            var coordinatesToPost = [event.lngLat.lng, event.lngLat.lat];
            _this.postCoordinates(coordinatesToPost);
        });
    };
    MapPage.prototype.postCoordinates = function (userCoordinates) {
        var data = {
            coordinates: userCoordinates
        };
        this.http.post(baseURL + "/chatApp/putCoordinates", data).subscribe(function (res) {
            console.log(res);
        });
    };
    MapPage.prototype.goBack = function () {
        console.log("wantstobackoff");
    };
    MapPage.prototype.getPlaceName = function (coordinates) {
        return this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + coordinates + ".json?types=place&access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mapbox.accessToken);
    };
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/components/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/components/map/map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            Document])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-map-map-module.js.map