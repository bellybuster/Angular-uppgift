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
var APIService = (function () {
    function APIService() {
        this.baseURL = 'http://crmweb.cintutv.se/CWP2';
    }
    APIService.prototype.token = function () {
        return sessionStorage.getItem('token');
    };
    APIService.prototype.BaseAPISettings = function (options) {
        var baseSettings = {
            url: "" + this.baseURL + options.service,
            type: options.type,
            cache: false,
            headers: {
                'Authorization': "Bearer " + this.token(),
                'X-Requested-With': 'XMLHttpRequest'
            }
        };
        return Object.assign(options, baseSettings);
    };
    APIService.prototype.login = function (username, password) {
        var settings = this.BaseAPISettings({
            service: '/token',
            type: 'POST',
            data: {
                username: username,
                password: password,
                grant_type: 'password'
            }
        });
        delete settings.headers;
        return $.ajax(settings);
    };
    APIService.prototype.get = function (feedName, data) {
        var settings = this.BaseAPISettings({
            service: "/API/Feed/" + feedName,
            type: 'GET',
            data: data
        });
        return $.ajax(settings);
    };
    APIService.prototype.ninjaGet = function (feedName, data) {
        var settings = this.BaseAPISettings({
            service: "/API/AnonymousFeed/" + feedName,
            type: 'GET',
            data: data
        });
        delete settings.headers;
        return $.ajax(settings);
    };
    APIService = __decorate([
        core_1.Component({
            selector: 'api'
        }), 
        __metadata('design:paramtypes', [])
    ], APIService);
    return APIService;
}());
exports.APIService = APIService;
//# sourceMappingURL=api.service.js.map