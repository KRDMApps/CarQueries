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
var core_1 = require("@angular/core");
var api_service_1 = require("./api.service");
var MediaComponent = (function () {
    function MediaComponent(service) {
        this.service = service;
        this.apiOccurances = 0;
        this.isLoading = false;
    }
    MediaComponent.prototype.ngOnInit = function () {
        this.get();
    };
    MediaComponent.prototype.get = function () {
        var _this = this;
        this.isLoading = true;
        this.service.get(function (json) {
            if (json) {
                _this.data = json.numbers;
                _this.isLoading = false;
                _this.apiOccurances++;
            }
        });
    };
    MediaComponent = __decorate([
        core_1.Component({
            selector: "media",
            templateUrl: "/partial/media",
            providers: [api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], MediaComponent);
    return MediaComponent;
}());
exports.MediaComponent = MediaComponent;
