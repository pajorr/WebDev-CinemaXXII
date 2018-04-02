webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/MovieId.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieId; });
var MovieId = /** @class */ (function () {
    function MovieId() {
    }
    return MovieId;
}());



/***/ }),

/***/ "./src/app/Register.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
var Register = /** @class */ (function () {
    function Register() {
    }
    return Register;
}());



/***/ }),

/***/ "./src/app/SeatId.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeatId; });
var SeatId = /** @class */ (function () {
    function SeatId() {
    }
    return SeatId;
}());



/***/ }),

/***/ "./src/app/SignIn.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignIn; });
var SignIn = /** @class */ (function () {
    function SignIn() {
    }
    return SignIn;
}());



/***/ }),

/***/ "./src/app/Ticket.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ticket; });
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    return Ticket;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container jumbotron\">\r\n\t<div class=\"row\">\r\n\t\t<p>About Us</p>\r\n\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theatre_theatre_component__ = __webpack_require__("./src/app/theatre/theatre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transaction_transaction_component__ = __webpack_require__("./src/app/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'book', component: __WEBPACK_IMPORTED_MODULE_2__book_book_component__["a" /* BookComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'theatre', component: __WEBPACK_IMPORTED_MODULE_4__theatre_theatre_component__["a" /* TheatreComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'transaction', component: __WEBPACK_IMPORTED_MODULE_8__transaction_transaction_component__["a" /* TransactionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_9__user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            providers: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"margin-bottom :50px;\">\n  <app-navbar></app-navbar>\n</div>\n\n<div class=\"container-fluid\" style=\"background-color: black;\">\n\t<div>\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n\n<div>\n\t<app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.title = 'app';
        this.titleService.setTitle("CINEMA XXII");
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theatre_theatre_component__ = __webpack_require__("./src/app/theatre/theatre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__movie_movie_component__ = __webpack_require__("./src/app/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__transaction_transaction_component__ = __webpack_require__("./src/app/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__topup_topup_component__ = __webpack_require__("./src/app/topup/topup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_10__theatre_theatre_component__["a" /* TheatreComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__movie_movie_component__["a" /* MovieComponent */],
                __WEBPACK_IMPORTED_MODULE_17__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__transaction_transaction_component__["a" /* TransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_19__topup_topup_component__["a" /* TopupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('response')) {
            // if retrieveable = logged in
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/***/ (function(module, exports) {

module.exports = ".btn{\r\n\tbackground-color: white;\r\n\tcolor:black;\r\n\tmin-width: 300px;\r\n}\r\n\r\n.dropdown{\r\n\tmin-width: 300px;\r\n}"

/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"container\" style=\"background-color: white;\">\r\n\r\n<div class=\"row jumbotron\" align=\"center\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<p style=\"font-size: 50px\">Book</p>\r\n\t</div>\t\r\n</div>\r\n\r\n<div class=\"alert alert-dark\" role=\"alert\" align=\"center\">\r\n  <p>{{seatAlert}}</p>\r\n</div>\r\n\r\n<div class=\"row\" align=\"center\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"dropdown\">\r\n  \t\t\t\t<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" (click)=\"getMovies()\">Movies\r\n  \t\t\t\t<span class=\"caret\"></span></button>\r\n  \t\t\t\t<ul class=\"dropdown-menu\">\r\n    \t\t\t\t<li (click)=\"getTime(0)\"><a href=\"#\" onClick=\"return false;\">{{movie[0]}}</a></li>\r\n    \t\t\t\t<li (click)=\"getTime(1)\"><a href=\"#\" onClick=\"return false;\">{{movie[1]}}</a></li>\r\n    \t\t\t</ul>\r\n</div>\r\n\t\t</div>\r\n\t</div>\r\n<br>\r\n\r\n<div class=\"row\" align=\"center\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"dropdown\">\r\n  \t\t\t\t<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"(click)=\"setTime()\">Time\r\n  \t\t\t\t<span class=\"caret\"></span></button>\r\n  \t\t\t\t<ul class=\"dropdown-menu\">\r\n    \t\t\t\t<li (click)=\"getSeat(0)\"><a href=\"#\" onClick=\"return false;\">{{time[0]}}</a></li>\r\n    \t\t\t\t<li (click)=\"getSeat(1)\"><a href=\"#\" onClick=\"return false;\">{{time[1]}}</a></li>\r\n    \t\t\t</ul>\r\n</div>\r\n\t\t</div>\r\n\t</div>\r\n<br>\r\n\r\n<div class=\"row\" align=\"center\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"dropdown\">\r\n  \t\t\t\t<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"(click)=\"setSeat()\">Seat\r\n  \t\t\t\t<span class=\"caret\"></span></button>\r\n  \t\t\t\t<ul class=\"dropdown-menu\">\r\n    \t\t\t\t<li (click)=\"submitTicket(0)\"><a href=\"#\" onClick=\"return false;\">{{seat[0]}}</a></li>\r\n    \t\t\t\t<li (click)=\"submitTicket(1)\"><a href=\"#\" onClick=\"return false;\">{{seat[1]}}</a></li>\r\n    \t\t\t\t<li (click)=\"submitTicket(2)\"><a href=\"#\" onClick=\"return false;\">{{seat[2]}}</a></li>\r\n    \t\t\t</ul>\r\n</div>\r\n\t\t</div>\r\n\t</div>\r\n<br>\r\n\r\n\r\n\t<div class=\"row\" align=\"center\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"book()\">CONFIRM</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<br>\r\n\r\n\r\n\t\t<div class=\"col-sm-12\" align=\"center\">\r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"done()\" routerLink=\"\">DONE</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<br>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MovieId__ = __webpack_require__("./src/app/MovieId.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SeatId__ = __webpack_require__("./src/app/SeatId.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Ticket__ = __webpack_require__("./src/app/Ticket.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookComponent = /** @class */ (function () {
    function BookComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.movie = [];
        this.time = [];
        this.seat = [];
        this.seatAlert = "";
    }
    BookComponent.prototype.ngOnInit = function () {
        this.dataService.getMovieData()
            .subscribe();
    };
    BookComponent.prototype.getMovies = function () {
        for (var x = 0; x < 2; x++) {
            this.movie[x] = JSON.parse(localStorage.getItem('movieResponse'))[x].movie_name;
        }
    };
    BookComponent.prototype.getTime = function (tid) {
        this.mov = new __WEBPACK_IMPORTED_MODULE_3__MovieId__["a" /* MovieId */]();
        this.mov.movieId = JSON.parse(localStorage.getItem('movieResponse'))[tid].id;
        this.dataService.getMovieTime(this.mov).subscribe();
    };
    BookComponent.prototype.setTime = function () {
        for (var x = 0; x < 2; x++) {
            this.time[x] = JSON.parse(localStorage.getItem('timeResponse')).times[x].time;
        }
    };
    BookComponent.prototype.getSeat = function (mid) {
        this.seatVar = new __WEBPACK_IMPORTED_MODULE_4__SeatId__["a" /* SeatId */]();
        this.seatVar.seatId = JSON.parse(localStorage.getItem('timeResponse')).times[mid].id;
        this.dataService.getMovieSeat(this.seatVar).subscribe();
    };
    BookComponent.prototype.setSeat = function () {
        for (var x = 0; x < 3; x++) {
            this.seat[x] = JSON.parse(localStorage.getItem('seatResponse')).seats[x].position;
        }
    };
    BookComponent.prototype.submitTicket = function (tickid) {
        this.ticketVar = new __WEBPACK_IMPORTED_MODULE_5__Ticket__["a" /* Ticket */]();
        this.ticketVar.seats_id = JSON.parse(localStorage.getItem('seatResponse')).seats[tickid].id;
        localStorage.setItem('seatChosen', JSON.stringify(this.ticketVar.seats_id));
        this.dataService.postTicket(this.ticketVar).subscribe();
        if (localStorage.getItem('seatStatus') == 'taken') {
            this.seatAlert = "Seat taken, please choose another one.";
            console.log(this.seatAlert);
        }
        else {
            this.seatAlert = "";
        }
    };
    BookComponent.prototype.book = function () {
        this.dataService.bookTicket().subscribe();
    };
    BookComponent.prototype.done = function () {
        this.dataService.postTransaction().subscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__MovieId__["a" /* MovieId */])
    ], BookComponent.prototype, "mov", void 0);
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book.component.html"),
            styles: [__webpack_require__("./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    //nav
    function DataService(http) {
        this.http = http;
        this.returnCommentStatus = [];
        //user
        this.token = {};
        this.userName = {};
        this.userEmail = {};
        this.userPhone = {};
        //user
        //moviea
        this.movieResponse = [];
        this.timeResponse = [];
        this.seatResponse = [];
        this.transactionResponse = {};
        this.book = {};
        this.bookArg = [];
    }
    //book
    DataService.prototype.getMovieData = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token });
        return this.http.get('https://api.cinemaxxii.me/api/theatres', { headers: headers }).map(function (res) {
            console.log(res);
            _this.movieResponse = res;
            localStorage.setItem('movieResponse', JSON.stringify(_this.movieResponse));
            //this.movieName = res.["0"].movie_name;
            //localStorage.setItem('moviename', this.movieName);
        });
    };
    //book
    DataService.prototype.getMovieTime = function (mov) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token });
        return this.http.get('https://api.cinemaxxii.me/api/times/' + mov.movieId, { headers: headers }).map(function (res) {
            console.log(res);
            _this.timeResponse = res;
            localStorage.setItem('timeResponse', JSON.stringify(_this.timeResponse));
        });
    };
    //book
    DataService.prototype.getMovieSeat = function (seat) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token });
        return this.http.get('https://api.cinemaxxii.me/api/seats/' + seat.seatId, { headers: headers }).map(function (res) {
            console.log(res);
            _this.seatResponse = res;
            localStorage.setItem('seatResponse', JSON.stringify(_this.seatResponse));
        });
    };
    //get transaction
    DataService.prototype.getTransaction = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token });
        return this.http.get('https://api.cinemaxxii.me/api/utransactions/' + JSON.parse(localStorage.getItem('response')).data.user["0"].id, { headers: headers }).map(function (res) {
            console.log(res);
            _this.transactionResponse = res;
            localStorage.setItem('transactionResponse', JSON.stringify(_this.transactionResponse));
        });
    };
    //get the final data for transaction, not to post to ticket table (book)
    DataService.prototype.bookTicket = function () {
        var _this = this;
        //https://api.cinemaxxii.me/api/sticket/seatid
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token });
        return this.http.get('https://api.cinemaxxii.me/api/sticket/' + JSON.parse(localStorage.getItem('seatChosen')), { headers: headers }).map(function (res) {
            console.log(res);
            _this.book = res;
            localStorage.setItem('ticketResponse', JSON.stringify(_this.book));
            var bookuser = JSON.parse(localStorage.getItem('response')).data.user["0"].id;
            var bookticket = JSON.parse(localStorage.getItem('ticketResponse')).ticket.id;
            _this.bookArg = { "user_id": bookuser, "ticket_id": bookticket };
            localStorage.setItem('bookFinal', JSON.stringify(_this.bookArg));
        });
    };
    //book
    DataService.prototype.postTransaction = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token });
        var url = 'https://api.cinemaxxii.me/api/transactions';
        return this.http.post(url, JSON.parse(localStorage.getItem('bookFinal')), { headers: headers }).map(function (res) {
            console.log(res);
        });
    };
    //book
    DataService.prototype.postTicket = function (ticket) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('response')).data.token });
        var url = 'https://api.cinemaxxii.me/api/tickets';
        return this.http.post(url, ticket, { headers: headers }).map(function (res) {
            console.log(res);
            setTimeout(1500);
            if (res == "Failed, Seat is already booked") {
                localStorage.setItem('seatStatus', 'taken');
            }
            else {
                localStorage.setItem('seatStatus', 'free');
            }
        });
    };
    //signup
    DataService.prototype.postUser = function (register) {
        var url = 'https://api.cinemaxxii.me/api/register';
        return this.http.post(url, register).map(function (res) { return res; });
    };
    //login
    DataService.prototype.postSignIn = function (signin) {
        var _this = this;
        var response = {};
        //let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        var url = 'https://api.cinemaxxii.me/api/login';
        return this.http.post(url, signin).map(function (res) {
            console.log(res);
            response = res;
            localStorage.setItem('response', JSON.stringify(response));
            _this.token = JSON.parse(localStorage.getItem('response')).data.token;
            _this.userName = JSON.parse(localStorage.getItem('response')).data.user["0"].name;
            _this.userEmail = JSON.parse(localStorage.getItem('response')).data.user["0"].email;
            _this.userPhone = JSON.parse(localStorage.getItem('response')).data.user["0"].phone;
            localStorage.setItem('username', _this.userName);
            localStorage.setItem('useremail', _this.userEmail);
            localStorage.setItem('userphone', _this.userPhone);
            //console.log(localStorage['token']);
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer{\r\n\tbackground-color: #ff8c00;\r\n\tcolor: #222222;\r\n  \ttext-align: center;\r\n    position: absolute;\r\n    margin:0;\r\n \tpadding:0;\r\n  \twidth: 100%;\r\n\r\n}\r\n\r\nbody{background-color: #fff;}\r\n\r\n.social-icon {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.social-icon li{\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.social-icon a {\r\n  display: block;\r\n  width: 44px;\r\n  height: 44px;\r\n  line-height: 44px;\r\n  border-radius: 50%;\r\n  margin-right: 5px;\r\n}\r\n\r\n.social-icon a {\r\n  background: rgba(255, 255, 255, 0.85); /* social icon background color */\r\n  color: #000; /* social icon color */\r\n}\r\n\r\n.social-icon a:hover {\r\n  background: rgba(255, 255, 255, 0.25); /* social icon hover background color */\r\n  color: #fff; /* social icon hover color */\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid footer\" style=\"padding-bottom: 3px\">\r\n\t ⒸCINEMA XXII<ul class=\"social-icon animate\">\r\n                  <li><a href=\"https://www.facebook.com\" title=\"facebook\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li> <!-- change the link to social page and edit title-->\r\n                  <li><a href=\"https://www.twitter.com\" title=\"twitter\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                  <li><a href=\"https://www.google.com\" title=\"google plus\" target=\"_blank\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n                </ul>\r\n                \r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "@font-face{\r\n\tfont-family: GothamB;\r\n}\r\n\r\n@font-face{\r\n\tfont-family: GothamM;\r\n}\r\n\r\n.fullscreen{\r\n\tpadding-right:0;\r\n    padding-left:0;\r\n    margin-right:auto;\r\n    margin-left:auto\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    color: white;\r\n    font-size: 16px;\r\n    border-right: 2px solid black;\r\n    line-height: 100px;\r\n    font-family: GothamM;\r\n}\r\n\r\n.centerhot {\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    color: #ff8c00;\r\n    font-size: 30px;\r\n    border-right: 2px solid black;\r\n    line-height: 100px;\r\n    font-family: GothamB;\r\n}\r\n\r\n.center2{\r\n\ttext-align: center;\r\n    padding-top: 45px;\r\n    color: white;\r\n    font-size: 16px;\r\n    font-family: GothamM;\r\n}\r\n\r\n.feed{\r\n    color: white;\r\n    font-size: 16px;\r\n    font-family: GothamM;\r\n    text-align: center;\r\n    background-color:#303030;\r\n    border: solid 1px black; \r\n    border-radius: 10px; \r\n    background-color: #303030;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid fullscreen\">\n<div class=\"container\">\n  <div id=\"myCarousel\" class=\"carousel slide col-sm-12\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n\n      <div class=\"item active\">\n        <img src=\"assets\\images\\c.jpg\" alt=\"\" style=\"width:100%;\">\n        <!--<div class=\"carousel-caption\">\n          <h3>Los Angeles</h3>\n          <p>LA is always so much fun!</p>\n        </div>-->\n      </div>\n\n      <div class=\"item\">\n        <img src=\"assets\\images\\b.jpg\" alt=\"\" style=\"width:100%;\">\n        <!--<div class=\"carousel-caption\">\n          <h3>Chicago</h3>\n          <p>Thank you, Chicago!</p>\n        </div>-->\n      </div>\n    \n      <div class=\"item\">\n        <img src=\"assets\\images\\a.jpg\" alt=\"\" style=\"width:100%;\">\n        <!--<div class=\"carousel-caption\">\n          <h3>New York</h3>\n          <p>We love the Big Apple!</p>\n        </div>-->\n      </div>\n  \n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n<div class=\"container-fluid fullscreen\">\n    <div class=\"row\" style=\"background-color: #222222; height: 110px\"> \n        <div class=\"col-sm-2 centerhot\">WHAT'S HOT</div>   \n        <div class=\"col-sm-2 center\">TOMB RAIDER</div>  \n        <div class=\"col-sm-2 center\">STAR WARS</div>  \n        <div class=\"col-sm-2 center\">PRINCESS MONONOKE</div> \n        <div class=\"col-sm-2 center\">PACIFIC RIM</div>  \n        <div class=\"col-sm-2 center2\">ONCE UPON A TIME</div>   \n    </div>\n</div>\n\n<div class=\"container-fluid fullscreen\" style=\"background-color: #202020;\">\n    <div class=\"row\" style=\"padding-top: 10px;\">\n        <div class=\"col-sm-1\"></div>\n\n        <div class=\"col-sm-4 feed\">\n            <p style=\"font-size: 30px\">News</p>\n            <hr>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </div>\n\n        <div class=\"col-sm-2\"></div>\n\n        <div class=\"col-sm-4 feed\">\n            <p style=\"font-size: 30px\">Coming Soon</p>\n            <hr>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </div>\n\n        <div class=\"col-sm-1\"></div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login{\r\n\tbackground-color: white;\r\n}\r\n\r\n.btn-submit { border-color: black; background-color: white; }\r\n\r\n.jumbotron{font-size: 40px;}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container login\">\r\n\r\n\t<div class=\"row jumbotron\" align=\"center\">Login Page</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"Email\">Email:</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"signin.email\" class=\"form-control\" id=\"email\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"name\">Password:</label>\r\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"signin.password\" class=\"form-control\" id=\"password\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-submit\"  (click)=\"submitLogin(); redirect()\">LOGIN</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SignIn__ = __webpack_require__("./src/app/SignIn.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService) {
        this.dataService = dataService;
        this.responseStatus = [];
    }
    LoginComponent.prototype.submitLogin = function () {
        this.dataService.postSignIn(this.signin).subscribe(function () { return console.log('Login Completed'); });
        this.status = true;
        setTimeout(function () { return window.location.href = ""; }, 2000);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.signin = new __WEBPACK_IMPORTED_MODULE_2__SignIn__["a" /* SignIn */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__SignIn__["a" /* SignIn */])
    ], LoginComponent.prototype, "signin", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  movie works!\n</p>\n"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieComponent = /** @class */ (function () {
    function MovieComponent() {
    }
    MovieComponent.prototype.ngOnInit = function () {
    };
    MovieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie',
            template: __webpack_require__("./src/app/movie/movie.component.html"),
            styles: [__webpack_require__("./src/app/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\nborder-radius: 0px;\r\nmargin-bottom:0px;\r\n }\r\n\r\n\r\n@font-face{\r\n\tfont-family: GothamB;\r\n}\r\n\r\n\r\n@font-face{\r\n\tfont-family: GothamM;\r\n}\r\n\r\n\r\n.hfont{\r\n\tfont-family: GothamB;\r\n\tfont-size: 18px;\r\n\tcolor:#ffffff;\r\n}\r\n\r\n\r\n.lfont{\r\n\tfont-family: GothamB;\r\n\tfont-size: 40px;\r\n\tcolor: #ff8c00;\r\n}\r\n\r\n\r\n.login{\r\n\tfont-family: GothamM;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n\r\n.btn-danger { border-color: #ff8c00; background-color: #ff8c00; cursor:default; }\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = " <!--<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\n  <div class=container-fluid style=\"height:30px; background-color: #222222;\">\n\n        \n  </div>\n\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand lfont\" routerLink=\"/home\">CINEMA</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/home\"><div class=\"hfont\">HOME</div></a></li>\n      <li><a routerLink=\"/book\"><div class=\"hfont\">BOOK TICKETS</div></a></li>\n      <li><a routerLink=\"/theatre\"><div class=\"hfont\">NOW PLAYING</div></a></li>\n      <li><a routerLink=\"/about\"><div class=\"hfont\">ABOUT US</div></a></li>\n      <li><a routerLink=\"#\"><div class=\"login\">\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-danger\">LOGIN</button>\n                                    <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\">\n                                    <span class=\"caret\"></span></button>                    \n                                        <ul class=\"dropdown-menu\" role=\"menu\">\n                                          <li><a routerLink=\"/login\">SIGN IN</a></li>\n                                          <li><a routerLink=\"/signup\">SIGN UP</a></li>\n                                       </ul>\n                                </div>\n        \n                           </div>\n          </a>\n      </li>\n    </ul>\n  </div>\n</nav>-->\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\" >\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand lfont\" routerLink=\"/home\">CINEMA XXII</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/home\"><div class=\"hfont\">HOME</div></a></li>\n        <li><a routerLink=\"/book\"><div class=\"hfont\">BOOK TICKETS</div></a></li>\n        <li><a routerLink=\"/theatre\"><div class=\"hfont\">NOW PLAYING</div></a></li>\n        <li><a routerLink=\"/about\"><div class=\"hfont\">ABOUT US</div></a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <div *ngIf=\"isLogin\" style=\"padding-top: 5px; padding-right: 10px; padding-bottom: 2px;\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"logout()\">LOGOUT</button>\n        </div>\n\n         <div class=\"btn-group\" style=\"padding-top: 5px; padding-right: 10px; padding-bottom: 2px;\"  *ngIf=\"!isLogin\">\n                                    <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" >LOGIN\n                                    <span class=\"caret\"></span></button>                    \n                                        <ul class=\"dropdown-menu\" role=\"menu\">\n                                          <li><a routerLink=\"/login\">SIGN IN</a></li>\n                                          <li><a routerLink=\"/signup\">SIGN UP</a></li>\n                                       </ul>\n        </div>\n\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n           <li><a routerLink=\"/user\"><div class=\"hfont\">PROFILE</div></a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.isLogin = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLogin = JSON.parse(localStorage.getItem('response')).data.token ? true : false;
    };
    NavbarComponent.prototype.logout = function () {
        window.location.href = "/home";
        localStorage.clear();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "label{\r\n\tcolor: black;\r\n}\r\n\r\n.signup{\r\n\tbackground-color: white;\r\n}\r\n\r\n.btn-submit { border-color: black; background-color: white; }"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container signup\">\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Name:</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"register.name\" class=\"form-control\" id=\"name\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">E-mail:</label>\n\t\t\t\t<input type=\"email\" [(ngModel)]=\"register.email\" class=\"form-control\" id=\"email\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"password\">Password:</label>\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"register.password\" class=\"form-control\" id=\"password\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"phone\">Phone Number:</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"register.phone\" class=\"form-control\" id=\"phone\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"date\">Date of Birth:</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"register.dob\" class=\"form-control\" id=\"date\"  placeholder=\"yyyy/mm/dd\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-submit\"(click)=\"submitPost()\">SIGN UP</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Register__ = __webpack_require__("./src/app/Register.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(dataService) {
        this.dataService = dataService;
        this.responseStatus = [];
    }
    SignupComponent.prototype.submitPost = function () {
        var _this = this;
        this.dataService.postUser(this.register).subscribe(function (data) { return console.log(_this.responseStatus = data); }, function (err) { return console.log(err); }, function () { return console.log('Request Completed'); });
        this.status = true;
        setTimeout(function () { return window.location.href = ""; }, 2000);
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.register = new __WEBPACK_IMPORTED_MODULE_2__Register__["a" /* Register */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__Register__["a" /* Register */])
    ], SignupComponent.prototype, "register", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/theatre/theatre.component.css":
/***/ (function(module, exports) {

module.exports = "img{\r\nheight: 450px; \r\nwidth: 300px; \r\n-o-object-fit: contain; \r\n   object-fit: contain\r\n}\r\n\r\nfigcaption{\r\n\ttext-align: center;\r\n}\r\n\r\n@font-face{\r\n\tfont-family: GothamB;\r\n}\r\n\r\n.bfont{\r\n\tfont-family: GothamB;\r\n\tfont-size: 17px;\r\n\tcolor:#ffffff;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/theatre/theatre.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\n\t<div class=\"row\" style=\"padding-top: 10px; padding-bottom: 10px;\">\n\t\t\t\t<div class=\"col-sm-1\"></div>\n\t\t\t\t<div class=\"col-sm-10\" style=\"\"><input type=\"text\" size=\"128\" placeholder=\"Search here..\" style=\"border-radius: 5px\"></div>\n\t\t\t\t<div class=\"col-sm-1\"></div>\n\t</div>\n\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-1\"></div>\n\t\t\t\t\t<a routerLink=\"/blood\">\n\t\t\t\t<div class=\"col-sm-5\"><img src=\"assets\\images\\p1.jpg\"></div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a routerLink=\"/starwars\">\n\t\t\t\t<div class=\"col-sm-5\"><img src=\"assets\\images\\p2.jpg\"></div>\n\t\t\t\t\t</a>\n\t\t\t\t<div class=\"col-sm-1\"></div>\n\t</div>\n\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-1\"></div>\n\t\t\t\t\t<a routerLink=\"/mononoke\">\n\t\t\t\t<div class=\"col-sm-5\"><img src=\"assets\\images\\p3.jpg\"></div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a routerLink=\"/onceuponatime\">\n\t\t\t\t<div class=\"col-sm-5\"><img src=\"assets\\images\\p4.jpg\"></div>\n\t\t\t\t\t</a>\n\t\t\t\t<div class=\"col-sm-1\"></div>\n\t</div>\n</div>-->\n\n<script src=\"./../../assets/filter.js\"></script>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-1\"></div>\n\t\t<div class=\"col-sm-10\">\n\t\t\t<input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for movies..\" title=\"Type in a name\" size=\"128\" style=\"border-radius: 5px\">\n\t\t</div>\n\t\t<div class=\"col-sm-1\"></div>\n\t</div>\n\n\t<div class =\"row\"  style=\"color: white\">\n\t\t<div class=\"col-sm-10\" align=\"center\" style=\"padding-left: 150px\">\n\t\t<table id=\"myTable\">\n  \t\t\t<tr>\n    \t\t\t<td><img src=\"assets\\images\\p1.jpg\"> <figcaption><div class=\"bfont\">Tomb Raider</div></figcaption></td>\n  \t\t\t</tr>\n  \t\t\t<tr>\n  \t\t\t\t<td><img src=\"assets\\images\\p2.jpg\"> <figcaption><div class=\"bfont\">Pacific Rim</div></figcaption></td>\t\n  \t\t\t</tr>\n  \t\t\t<tr>\n  \t\t\t\t<td><img src=\"assets\\images\\p3.jpg\"> <figcaption><div class=\"bfont\">Princess Mononoke</div></figcaption></td>\n  \t\t\t</tr>\n  \t\t\t<tr>\n  \t\t\t\t<td><img src=\"assets\\images\\p4.jpg\"> <figcaption><div class=\"bfont\">Once Upon a Time in America</div></figcaption></td>\n  \t\t\t</tr>\n\t\t</table>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/theatre/theatre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheatreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TheatreComponent = /** @class */ (function () {
    function TheatreComponent() {
    }
    TheatreComponent.prototype.ngOnInit = function () {
    };
    TheatreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-theatre',
            template: __webpack_require__("./src/app/theatre/theatre.component.html"),
            styles: [__webpack_require__("./src/app/theatre/theatre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TheatreComponent);
    return TheatreComponent;
}());



/***/ }),

/***/ "./src/app/topup/topup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/topup/topup.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\tBalance:\n\t<br>\n\t<input type=\"text\" placeholder=\"Rupiah\" style=\"margin-left: 10px\">\n\t<br>\n\t<button type=\"button\" class=\"btn btn-default\">Top Up</button>\n</div>"

/***/ }),

/***/ "./src/app/topup/topup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopupComponent = /** @class */ (function () {
    function TopupComponent() {
    }
    TopupComponent.prototype.ngOnInit = function () {
    };
    TopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topup',
            template: __webpack_require__("./src/app/topup/topup.component.html"),
            styles: [__webpack_require__("./src/app/topup/topup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopupComponent);
    return TopupComponent;
}());



/***/ }),

/***/ "./src/app/transaction/transaction.component.css":
/***/ (function(module, exports) {

module.exports = ".form{\r\n\tbackground-color: white;\r\n}"

/***/ }),

/***/ "./src/app/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t\t<div align=\"center\">\n\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"transaction()\">Update</button>\n\t\t</div>\n<br>\n<div>\n\t<table border=\"1\" align=\"center\">\n\t\t<tr>\n\t\t\t<th>TICKET ID</th>\n\t\t\t<th>MOVIE NAME</th>\n\t\t\t<th>MOVIE TIME</th>\n\t\t\t<th>PRICE</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>{{TransactionId[0]}}</td>\n\t\t\t<td>{{MovieName[0]}}</td>\n\t\t\t<td>{{MovieTime[0]}}</td>\n\t\t\t<td>{{MoviePrice[0]}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>{{TransactionId[1]}}</td>\n\t\t\t<td>{{MovieName[1]}}</td>\n\t\t\t<td>{{MovieTime[1]}}</td>\n\t\t\t<td>{{MoviePrice[1]}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>{{TransactionId[2]}}</td>\n\t\t\t<td>{{MovieName[2]}}</td>\n\t\t\t<td>{{MovieTime[2]}}</td>\n\t\t\t<td>{{MoviePrice[2]}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>{{TransactionId[3]}}</td>\n\t\t\t<td>{{MovieName[3]}}</td>\n\t\t\t<td>{{MovieTime[3]}}</td>\n\t\t\t<td>{{MoviePrice[3]}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>{{TransactionId[4]}}</td>\n\t\t\t<td>{{MovieName[4]}}</td>\n\t\t\t<td>{{MovieTime[4]}}</td>\n\t\t\t<td>{{MoviePrice[4]}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>{{TransactionId[5]}}</td>\n\t\t\t<td>{{MovieName[5]}}</td>\n\t\t\t<td>{{MovieTime[5]}}</td>\n\t\t\t<td>{{MoviePrice[5]}}</td>\n\t\t</tr>\n\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(dataService) {
        this.dataService = dataService;
        this.TransactionId = [];
        this.MovieName = [];
        this.MovieTime = [];
        this.MoviePrice = [];
    }
    TransactionComponent.prototype.transaction = function () {
        var _this = this;
        this.dataService.getTransaction().subscribe();
        console.log('Transaction received');
        setTimeout(function () { return _this.getTransaction(); }, 1000);
    };
    TransactionComponent.prototype.getTransaction = function () {
        for (var x = 0; x < 6; x++) {
            this.TransactionId[x] = JSON.parse(localStorage.getItem('transactionResponse')).transactions[x].id;
            this.MovieName[x] = JSON.parse(localStorage.getItem('transactionResponse')).transactions[x].movie_name;
            this.MovieTime[x] = JSON.parse(localStorage.getItem('transactionResponse')).transactions[x].time;
            this.MoviePrice[x] = JSON.parse(localStorage.getItem('transactionResponse')).transactions[x].price;
        }
    };
    TransactionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TransactionComponent.prototype, "TransactionId", void 0);
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transaction',
            template: __webpack_require__("./src/app/transaction/transaction.component.html"),
            styles: [__webpack_require__("./src/app/transaction/transaction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-tabs { border-bottom: 2px solid #DDD; }\r\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover { border-width: 0; }\r\n    .nav-tabs > li > a { border: none; color: #666; }\r\n    .nav-tabs > li.active > a, .nav-tabs > li > a:hover { border: none; color: #4285F4 !important; background: transparent; }\r\n    .nav-tabs > li > a::after { content: \"\"; background: #4285F4; height: 2px; position: absolute; width: 100%; left: 0px; bottom: -1px; -webkit-transition: all 250ms ease 0s; transition: all 250ms ease 0s; -webkit-transform: scale(0); transform: scale(0); }\r\n    .nav-tabs > li.active > a::after, .nav-tabs > li:hover > a::after { -webkit-transform: scale(1); transform: scale(1); }\r\n    .tab-nav > li > a::after { background: #21527d none repeat scroll 0% 0%; color: #fff; }\r\n    .tab-pane { padding: 15px 0; }\r\n    .tab-content{padding:20px}\r\n    .card {background: #FFF none repeat scroll 0% 0%; -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); margin-bottom: 30px; }\r\n    body{ background: #EDECEC; padding:50px}"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" align=\"center\">\n\t<div class=\"row\">\n\t\t                                <div class=\"col-md-12\">\n                                    <!-- Nav tabs --><div class=\"card\">\n                                    <ul class=\"nav nav-tabs\" role=\"tablist\">\n                                        <li role=\"presentation\" class=\"active\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Profile</a></li>\n                                        <li role=\"presentation\"><a href=\"#transaction\" aria-controls=\"Transaction\" role=\"tab\" data-toggle=\"tab\">Transaction</a></li>\n                                        <li role=\"presentation\"><a href=\"#topup\" aria-controls=\"TopUp\" role=\"tab\" data-toggle=\"tab\">Top Up</a></li>\n                                    </ul>\n\n                                    <!-- Tab panes -->\n                                    <div class=\"tab-content\">\n                                        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"profile\">\n                                        \t<p>Username: {{username}}</p>\n                                        \t\n                                        \t<p>Email: {{useremail}}</p>\n                                        \t\n                                        \t<p>Phone Number: {{userphone}}</p>\n\n                                        </div>\n                                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"transaction\"><app-transaction></app-transaction></div>\n                                        <div role=\"tabpanel\" class=\"tab-pane\" id=\"topup\"><app-topup></app-topup></div>\n                                    </div>\n</div>\n                                </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(dataService) {
        this.dataService = dataService;
        this.username = {}; //needed to pass
        this.useremail = {};
        this.userphone = {};
    }
    UserComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem('username');
        this.useremail = localStorage.getItem('useremail');
        this.userphone = localStorage.getItem('userphone');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "username", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map