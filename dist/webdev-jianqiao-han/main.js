(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n  <div class=\"container\">\n    <ul><a routerLink=\"/login\">Login</a></ul>\n    <!--<ul><a routerLink=\"/register\">Register</a></ul>-->\n    <!--<ul><a routerLink=\"/user/:uid\">Profile</a></ul>-->\n\n    <!--<ul><a routerLink=\"/user/:uid/website\"> WebSiteList </a></ul>-->\n    <!--<ul><a routerLink=\"/user/:uid/website/new\"> WebsiteNewComponent </a></ul>-->\n    <!--<ul><a routerLink=\"/user/:uid/website/:wid/edit\"> WebSiteEdit </a></ul>-->\n\n    <!--<ul><a routerLink=\"/user/:uid/website/:wid/page\"> PageListComponent </a></ul>-->\n    <!--<ul><a routerLink=\"/user/:uid/website/:wid/page/new\"> PageNewComponent </a></ul>-->\n    <!--<ul><a routerLink=\"/user/:uid/website/:wid/page/:pid\"> PageEditComponent </a></ul>-->\n\n    <!--<ul><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget\"> WidgetListComponent </a></ul>-->\n    <!--<ul><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/new\"> WidgetChooserComponent </a></ul>-->\n    <!--<ul><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\"> WidgetEditComponentWithId </a></ul>-->\n  </div>\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webdev-jianqiao-han';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");






















// client services




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_9__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_7__["PageEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_8__["PageListComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_15__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_13__["WebsiteEditComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_14__["WebsiteListComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_21__["WidgetListComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_23__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_24__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_22__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_25__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");













var appRoutes = [
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid/edit', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_2__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_3__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_1__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_10__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_11__["WidgetEditComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(_id, type, pageId, size, text, width, url) {
        this._id = _id;
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
        this.url = url;
        this.width = width;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/page.model.client */ "./src/app/models/page.model.client.ts");



var PageService = /** @class */ (function () {
    function PageService() {
        this.page = [
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('123', 'page123', '123', 'test page 123'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('456', 'page456', '456', 'test page 456'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_2__["Page"]('789', 'page789', '789', 'test page 789'),
        ];
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var new_page = {
            _id: Math.random().toString(),
            name: page.name,
            websiteId: page.websiteId,
            title: page.title,
        };
        this.page.push(page);
        return page;
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        for (var _i = 0, _a = this.page; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.websiteId === websiteId) {
                return page;
            }
        }
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var _i = 0, _a = this.page; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page._id === pageId) {
                return page;
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var i = 0; i < this.page.length; i++) {
            if (this.page[i]._id === pageId) {
                return this.page[i] = page;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var i = 0; i < this.page.length; i++) {
            if (this.page[i]._id === pageId) {
                this.page.splice(i, 1);
            }
        }
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    UserService.prototype.createUser = function () {
        return this._http.get(this.baseUrl + '/api/user/');
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId);
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        console.log('this is running');
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    };
    UserService.prototype.updateUser = function (user) {
        return this._http.put(this.baseUrl + '/api/user' + user._id, user);
    };
    UserService.prototype.deleteUserById = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user' + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/website.model.client */ "./src/app/models/website.model.client.ts");



var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('123', 'Facebook', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('234', 'Google', '239', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('345', 'Twitter', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('456', 'Tictok', '434', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_2__["Website"]('567', 'Instagram', '498', 'Lorem'),
        ];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var new_website = {
            _id: (new Date()).getTime() + '',
            name: website.name,
            developerId: website.developerId,
            description: website.description
        };
        this.websites.push(new_website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        for (var i in this.websites) {
            if (this.websites[i].developerId === userId) {
                return this.websites[i];
            }
        }
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i] = website;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                this.websites.splice(i, 1);
            }
        }
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");



var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'HEADER', '321', '2', 'GIZMODO', null, null),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'HTML', '321', '2', '<p>blalbla</p>', null, null),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtube.com/token'),
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.random().toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget.pageId === pageId) {
                return widget;
            }
        }
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget._id === widgetId) {
                return widget;
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                return this.widgets[i] = widget;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                this.widgets.splice(i, 1);
            }
        }
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas {\r\n  color: black;\r\n}\r\n\r\n.fa-user {\r\n  color: steelblue;\r\n}\r\n\r\n.form-group {\r\n  padding-top: 30px;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.row {\r\n  padding-top: 30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFzIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mYS11c2VyIHtcclxuICBjb2xvcjogc3RlZWxibHVlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div>\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\n    <a class=\"navbar-brand\" href=\"#\">Edit Pages</a>\n  </div>\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <i class=\"fas fa-check\"></i>\n  </ul>\n</nav>\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\"><b>Name</b></label>\n      <input [(ngModel)]=\"page.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"name\"\n             placeholder=\"Blog Post\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"title\"><b>Title</b></label>\n      <input [(ngModel)]=\"page.title\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"title\"\n             placeholder=\"Page Title\"/>\n    </div>\n    <a routerLink=\"/user/:uid/website/:wid/page\" class=\"btn btn-danger btn-block\">\n      Delete\n    </a>\n  </form>\n</div>\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, router) {
        this.pageService = pageService;
        this.router = router;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.page._id = params[':pid'];
            console.log('page id: ' + _this.page._id);
        });
        this.page = this.pageService.findPageById(this.page._id);
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-sm-10 {\r\n  color: steelblue;\r\n  font-weight: bold;\r\n}\r\n\r\n.fas {\r\n  color: black;\r\n}\r\n\r\n.fa-user {\r\n  color: steelblue;\r\n  float: right;\r\n}\r\n\r\n.fa-cog {\r\n  color: steelblue;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.row {\r\n  padding-top: 30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlL3BhZ2UtbGlzdC9wYWdlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtc20tMTAge1xyXG4gIGNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mYXMge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZhLXVzZXIge1xyXG4gIGNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZmEtY29nIHtcclxuICBjb2xvcjogc3RlZWxibHVlO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div>\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\n    <a class=\"navbar-brand\" href=\"#\">Pages</a>\n  </div>\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <i class=\"fas fa-plus\"></i>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-10\">Blog Post</div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\">Blogs</div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\">Home</div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\">About</div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\">Contact Us</div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\" *ngFor=\"let page of page\">\n    {{page.name}}\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activateRoute) {
        this.pageService = pageService;
        this.activateRoute = activateRoute;
        this.page = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.pageId = params._id;
        });
        // this.page = this.pageService.findPageById(this.pageId);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas {\r\n  color: black;\r\n}\r\n\r\n.fa-user {\r\n  color: steelblue;\r\n}\r\n\r\n.form-group {\r\n  padding-top: 30px;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.row {\r\n  padding-top: 30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXMge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZhLXVzZXIge1xyXG4gIGNvbG9yOiBzdGVlbGJsdWU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div>\r\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\r\n    <a class=\"navbar-brand\" href=\"#\">New Pages</a>\r\n  </div>\r\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\r\n    <i class=\"fas fa-check\"></i>\r\n  </ul>\r\n</nav>\r\n<div class=\"container\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\"><b>Name</b></label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             id=\"name\"\r\n             placeholder=\"Page Name\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"Description\"><b>Title</b></label>\r\n      <input type=\"email\"\r\n             class=\"form-control\"\r\n             id=\"Description\"\r\n             placeholder=\"Page Title\"/>\r\n    </div>\r\n  </form>\r\n</div>\r\n<nav class=\"navbar fixed-bottom\">\r\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\r\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNewComponent = /** @class */ (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  padding-top: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" name=\"username\" ngModel required #username=\"ngModel\"\n             placeholder=\"username\"/>\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\" name=\"password\" ngModel required #password='ngModel'\n             placeholder=\"password\"/>\n    </div>\n\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorFlag = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from LoginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredential(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                _this.router.navigate(['/user', user._id]);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  background: steelblue;\r\n}\r\n\r\n.fas {\r\n  color: white;\r\n}\r\n\r\n.container {\r\n  padding-top: 20px;\r\n}\r\n\r\n.form-group {\r\n  padding-top: 5px;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZDogc3RlZWxibHVlO1xyXG59XHJcblxyXG4uZmFzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand cl-text-white\" routerLink=\"\">Profile</a>\n    <a (click)=\"UpdateUser()\" class=\"btn-primary navbar-text pull-right\"><span>\n      <i class=\"fas fa-check\"></i>\n    </span></a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <h1>Profile</h1>\n\n  <div class=\"form-group\">\n    <label for=\"username\"><b>Username</b></label>\n    <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" id=\"username\"\n           placeholder=\"username\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\"><b>Email</b></label>\n    <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control\" id=\"email\"\n           placeholder=\"abcdefg@xxx.com\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"firstname\"><b>First Name</b></label>\n    <input [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control\" id=\"firstname\"\n           placeholder=\"first name\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"lastname\"><b>Last Name</b></label>\n    <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control\" id=\"lastname\"\n           placeholder=\"last name\"/>\n  </div>\n  <a routerLink=\"/user/:uid/website\" class=\"btn btn-primary btn-block\">Websites</a>\n  <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">Logout</a>\n\n</div>\n<nav class=\"navbar fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router, acRouter) {
        this.userService = userService;
        this.router = router;
        this.acRouter = acRouter;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]('000', 'alias', 'alias', 'alias', 'alias', 'alias@alias');
    }
    ProfileComponent.prototype.UpdateUser = function () {
        this.userService.updateUser(this.user).subscribe();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.user._id = params['uid'];
            console.log('user id: ' + _this.user._id);
        });
        this.userService.findUserById(this.user._id.toString())
            .subscribe(function (data) {
            console.log('in login comp...');
            console.log(data);
            _this.user = data;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  padding-top: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form>\n    <div class=\"form-group\">\n      <input type=\"text\"\n             class=\"form-control\"\n             placeholder=\"username\"/>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\"\n             class=\"form-control\"\n             placeholder=\"password\"/>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\"\n             class=\"form-control\"\n             placeholder=\"verify password\"/>\n    </div>\n  </form>\n\n  <a routerLink=\"/user/:uid\" class=\"btn btn-primary btn-block\">Register</a>\n  <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">Cancel</a>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  background: steelblue;\r\n}\r\n\r\n.fas {\r\n  color: white;\r\n}\r\n\r\n.fa-cog {\r\n  color: steelblue;\r\n}\r\n\r\n.form-group {\r\n  padding-top: 30px;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.row {\r\n  padding-top: 30px;\r\n}\r\n\r\n@media (orientation: landscape) {\r\n  .ib {\r\n    float: left;\r\n    width: 50%;\r\n  }\r\n\r\n  .fa-user {\r\n    visibility: hidden;\r\n  }\r\n\r\n  #w-left {\r\n    visibility: hidden;\r\n  }\r\n\r\n  #w-check {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n@media (orientation: portrait) {\r\n  #page1 {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XHJcbn1cclxuXHJcbi5mYXMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhLWNvZyB7XHJcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuaWIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmZhLXVzZXIge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgI3ctbGVmdCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAjdy1jaGVjayB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICNwYWdlMSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ib\" id=\"page1\">\n  <nav class=\"navbar\">\n    <div>\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\n      <a class=\"navbar-brand\" href=\"#\">Websites</a>\n    </div>\n    <ul class=\"navbar-nav ml-auto mt-lg-0\">\n      <i class=\"fas fa-plus\"></i>\n    </ul>\n  </nav>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-10 col-9\">Address Book App</div>\n      <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-10 col-9\">Blogger</div>\n      <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-10 col-9\">Blogging App</div>\n      <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-10 col-9\">Script Testing App</div>\n      <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n    </div>\n  </div>\n\n  <nav class=\"navbar fixed-bottom\">\n    <ul class=\"navbar-nav ml-auto mt-lg-0\">\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n    </ul>\n  </nav>\n\n</div>\n<div class=\"ib\" id=\"page2\">\n  <nav class=\"navbar navbar-expand-lg\">\n    <div>\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\" id=\"w-left\"></i></a>\n      <a class=\"navbar-brand\" href=\"#\">Edit Websites</a>\n    </div>\n    <ul class=\"navbar-nav ml-auto mt-lg-0\">\n      <i class=\"fas fa-check\" id=\"w-check\"></i>\n    </ul>\n  </nav>\n  <div class=\"container\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"name\"><b>Website Name</b></label>\n        <input [(ngModel)]=\"website.name\"\n               type=\"text\"\n               class=\"form-control\"\n               id=\"name\"\n               placeholder=\"Name\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"Description\"><b>Website Description</b></label>\n        <textarea class=\"form-control\" id=\"Description\" placeholder=\"Description\" rows=\"6\"></textarea>\n      </div>\n      <a routerLink=\"/register\" class=\"btn btn-danger btn-block\">\n        Delete\n      </a>\n    </form>\n  </div>\n  <nav class=\"navbar fixed-bottom\">\n    <ul class=\"navbar-nav ml-auto mt-lg-0\">\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, router) {
        this.websiteService = websiteService;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.website._id = params[':wid'];
        });
        this.website = this.websiteService.findWebsiteById(this.website._id);
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  background: steelblue;\r\n}\r\n\r\n.col-sm-10 {\r\n  color: steelblue;\r\n  font-weight: bold;\r\n}\r\n\r\n.fas {\r\n  color: white;\r\n}\r\n\r\n.fa-cog {\r\n  color: steelblue;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.row {\r\n  padding-top: 30px;\r\n}\r\n\r\n@media (orientation: landscape) {\r\n  .fa-plus {\r\n    visibility: hidden;\r\n  }\r\n\r\n  .fa-cog {\r\n    visibility: hidden;\r\n  }\r\n\r\n  .fa-user {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n@media (orientation: portrait) {\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93ZWJzaXRlL3dlYnNpdGUtbGlzdC93ZWJzaXRlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQ6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLmNvbC1zbS0xMCB7XHJcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZhcyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmEtY29nIHtcclxuICBjb2xvcjogc3RlZWxibHVlO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuZmEtcGx1cyB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuZmEtY29nIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5mYS11c2VyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n  <div>\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\n    <a class=\"navbar-brand\" href=\"#\">Websites</a>\n  </div>\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <i class=\"fas fa-plus\"></i>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-10 col-9\">Address Book App</div>\n    <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10 col-9\">Blogger</div>\n    <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10 col-9\">Blogging App</div>\n    <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10 col-9\">Script Testing App</div>\n    <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\" *ngFor=\"let website of websites\">\n    {{website.name}}\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default fixed-bottom\">\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
        });
        // this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  background: steelblue;\r\n}\r\n\r\n.fas {\r\n  color: white;\r\n}\r\n\r\n.fa-cog {\r\n  color: steelblue;\r\n}\r\n\r\n.form-group {\r\n  padding-top: 30px;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.row {\r\n  padding-top: 30px;\r\n}\r\n\r\n@media (orientation: landscape) {\r\n  .ib {\r\n    float: left;\r\n    width: 50%;\r\n  }\r\n\r\n  .fa-user {\r\n    visibility: hidden;\r\n  }\r\n\r\n  #w-left {\r\n    visibility: hidden;\r\n  }\r\n\r\n  #w-check {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n@media (orientation: portrait) {\r\n  #page1 {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQ6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLmZhcyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmEtY29nIHtcclxuICBjb2xvcjogc3RlZWxibHVlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC5pYiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZmEtdXNlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAjdy1sZWZ0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gICN3LWNoZWNrIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgI3BhZ2UxIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"ib\" id=\"page1\">\n  <nav class=\"navbar\">\n    <div>\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\n      <a class=\"navbar-brand\" href=\"#\">Websites</a>\n    </div>\n    <ul class=\"navbar-nav ml-auto mt-lg-0\">\n      <i class=\"fas fa-plus\"></i>\n    </ul>\n  </nav>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-10 col-9\">Address Book App</div>\n      <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-10 col-9\">Blogger</div>\n      <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-10 col-9\">Blogging App</div>\n      <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-10 col-9\">Script Testing App</div>\n      <div class=\"col-sm-2 col-3\"><i class=\"fas fa-cog\"></i></div>\n    </div>\n  </div>\n\n  <nav class=\"navbar fixed-bottom\">\n    <ul class=\"navbar-nav ml-auto mt-lg-0\">\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n    </ul>\n  </nav>\n</div>\n\n<div class=\"ib\" id=\"page2\">\n  <nav class=\"navbar\">\n    <div>\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\" id=\"w-left\"></i></a>\n      <a class=\"navbar-brand\" href=\"#\">New Websites</a>\n    </div>\n    <ul class=\"navbar-nav ml-auto mt-lg-0\">\n      <i class=\"fas fa-check\" id=\"w-check\"></i>\n    </ul>\n  </nav>\n\n  <div class=\"container\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"name\"><b>Name</b></label>\n        <input type=\"text\"\n               class=\"form-control\"\n               id=\"name\"\n               placeholder=\"Name\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"Description\"><b>Description</b></label>\n        <textarea class=\"form-control\" id=\"Description\" placeholder=\"Description\" rows=\"6\"></textarea>\n      </div>\n    </form>\n  </div>\n\n  <nav class=\"navbar fixed-bottom\">\n    <ul class=\"navbar-nav ml-auto mt-lg-0\">\n      <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n    </ul>\n  </nav>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent() {
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-sm-10 {\r\n  color: steelblue;\r\n  font-weight: bold;\r\n}\r\n\r\n.fas {\r\n  color: black;\r\n}\r\n\r\n.fa-user {\r\n  color: steelblue;\r\n  float: right;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.row {\r\n  padding-top: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWNob29zZXIvd2lkZ2V0LWNob29zZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtc20tMTAge1xyXG4gIGNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mYXMge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZhLXVzZXIge1xyXG4gIGNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div>\r\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\r\n    <a class=\"navbar-brand\" href=\"#\">Choose Widget</a>\r\n  </div>\r\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\r\n    <i class=\"fas fa-plus\"></i>\r\n  </ul>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">Header</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">Label</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">HTML</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">Text Input</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">Link</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">Button</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">Image</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">YouTube</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">Data Table</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-10\">Repeater</div>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\r\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\r\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.type\">\n  <h1> widget edit</h1>\n  <div *ngSwitchCase='header'>\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase='image'>\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase='youtube'>\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas {\r\n  color: black;\r\n}\r\n\r\n.fa-user {\r\n  color: steelblue;\r\n}\r\n\r\n.container {\r\n  padding-top: 40px;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1oZWFkZXIvd2lkZ2V0LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXMge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZhLXVzZXIge1xyXG4gIGNvbG9yOiBzdGVlbGJsdWU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div>\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\n    <a class=\"navbar-brand\" href=\"#\">Widget Edit</a>\n  </div>\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <i class=\"fas fa-check\"></i>\n  </ul>\n</nav>\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\"><b>Name</b></label>\n      <input [(ngModel)]=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"name\"\n             placeholder=\"Page Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"Description\"><b>Text</b></label>\n      <input [(ngModel)]=\"Description\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Description\"\n             placeholder=\"Page Title\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"number\"><b>Size</b></label>\n      <input [(ngModel)]=\"number\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"number\"\n             placeholder=\"Page Title\"/>\n    </div>\n    <a routerLink=\"/register\" class=\"btn btn-danger btn-block\"\n    >Delete</a>\n  </form>\n</div>\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas {\r\n  color: black;\r\n}\r\n\r\n.fa-user {\r\n  color: steelblue;\r\n}\r\n\r\n.container {\r\n  padding-top: 40px;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWltYWdlL3dpZGdldC1pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhcyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZmEtdXNlciB7XHJcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div>\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\n    <a class=\"navbar-brand\" href=\"#\">Widget Edit</a>\n  </div>\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <i class=\"fas fa-check\"></i>\n  </ul>\n</nav>\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\"><b>Name</b></label>\n      <input [(ngModel)]=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"name\"\n             placeholder=\"Page Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"Description\"><b>Text</b></label>\n      <input [(ngModel)]=\"Description\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Description\"\n             placeholder=\"Page Title\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"url\"><b>URL</b></label>\n      <input [(ngModel)]=\"url\"\n             type=\"url\"\n             class=\"form-control\"\n             id=\"url\"\n             placeholder=\"http://google.com\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"width\"><b>Width</b></label>\n      <input [(ngModel)]=\"width\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"width\"\n             placeholder=\"100%\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlFile1\"><b>Upload</b></label>\n      <input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">\n    </div>\n    <a routerLink=\"/register\" class=\"btn btn-primary btn-block\">Upload Image</a>\n    <a routerLink=\"/register\" class=\"btn btn-danger btn-block\">Delete</a>\n  </form>\n</div>\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fas {\r\n  color: black;\r\n}\r\n\r\n.fa-user {\r\n  color: steelblue;\r\n}\r\n\r\n.container {\r\n  padding-top: 40px;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFzIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mYS11c2VyIHtcclxuICBjb2xvcjogc3RlZWxibHVlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div>\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\n    <a class=\"navbar-brand\" href=\"#\">Widget Edit</a>\n  </div>\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <i class=\"fas fa-check\"></i>\n  </ul>\n</nav>\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\"><b>Name</b></label>\n      <input [(ngModel)]=\"name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"name\"\n             placeholder=\"Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"Description\"><b>Text</b></label>\n      <input [(ngModel)]=\"Description\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Description\"\n             placeholder=\"Title\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"url\"><b>URL</b></label>\n      <input [(ngModel)]=\"url\"\n             type=\"url\"\n             class=\"form-control\"\n             id=\"url\"\n             placeholder=\"http://google.com\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"width\"><b>Width</b></label>\n      <input [(ngModel)]=\"width\"\n             type=\"number\"\n             class=\"form-control\"\n             id=\"width\"\n             placeholder=\"\"/>\n    </div>\n    <a routerLink=\"/register\" class=\"btn btn-danger btn-block\">Delete</a>\n  </form>\n</div>\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  padding-top: 10px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.col-sm-10 {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\np {\r\n  font-weight: normal;\r\n}\r\n\r\n.fas {\r\n  color: black;\r\n}\r\n\r\n.fa-user {\r\n  color: steelblue;\r\n  float: right;\r\n}\r\n\r\n.fa-cog {\r\n  color: steelblue;\r\n}\r\n\r\n.navbar-brand {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.row {\r\n  padding-top: 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmNvbC1zbS0xMCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZmFzIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mYS11c2VyIHtcclxuICBjb2xvcjogc3RlZWxibHVlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmZhLWNvZyB7XHJcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div>\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-angle-left\"></i></a>\n    <a class=\"navbar-brand\" href=\"#\">Widget</a>\n  </div>\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <i class=\"fas fa-plus\"></i>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-10\"><h1>HUFFPOST</h1></div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\"><h2>Success On A Green New Deal Runs Through Public Lands</h2></div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <img src=\"https://media.mnn.com/assets/images/2015/08/union-wood-sunrise.jpg.653x0_q80_crop-smart.jpg\"\n           class=\"rounded float-left img-thumbnail\">\n    </div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\"><p>\n      Starting in 1933, during the heart of the Great Depression, hundreds of thousands of young, unmarried men went to\n      work for the Civilian Conservation Corps, one of several federal programs created as part of Franklin D.\n      Roosevelt’s New Deal. They built bridges, dams, roads, fire lookouts and other infrastructure.\n    </p></div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\"><h2>Why Himeji is Japan's Greatest Castle</h2></div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/cE0RAhEsbdg\" frameborder=\"0\"\n                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                allowfullscreen></iframe>\n      </div>\n    </div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-10\">\n      <p>\n        Himeji Castle is Japan's most famous castle; but does it live up to the hype? Ryotaro and I visit for the first\n        time as we continue our Journey Across Japan, visiting the world's largest suspension bridge along the way.\n      </p>\n    </div>\n    <div class=\"col-sm-2\"><i class=\"fas fa-cog\"></i></div>\n  </div>\n  <div class=\"row\" *ngFor=\"let widget of widgets\">\n    {{widget._id}}\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <ul class=\"navbar-nav ml-auto mt-lg-0\">\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-user\"></i></a>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetId = params._id;
        });
        // this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3200',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\git\webdev-jianqiao-han\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map