"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var all_accounts_component_1 = require('./all-accounts.component');
var api_service_1 = require('./api.service');
var AppComponent = (function () {
    function AppComponent(API) {
        this.API = API;
        this.data = {};
        this.title = 'Dromedar';
        this.apples = 4;
    }
    AppComponent.prototype.formSubmit = function () {
        sessionStorage.setItem('apiUrl', 'http://crmweb.cintutv.se/CWP2');
        var username = this.data.username, password = this.data.password;
    };
    AppComponent.prototype.oliver = function () {
        this.API
            .login('utb', '123')
            .done(function (res) {
            console.log(res);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                api_service_1.APIService
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'Home', component: AppComponent, useAsDefault: true },
            { path: '/AllAccounts', name: 'All Accounts', component: all_accounts_component_1.AllAccountsComponent }
        ]), 
        __metadata('design:paramtypes', [api_service_1.APIService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map