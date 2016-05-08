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
var router_1 = require('@angular/router');
var common_1 = require("@angular/common");
var static_component_1 = require("./components/static.component");
var vehicles_component_1 = require("./components/vehicles.component");
var dealers_component_1 = require("./components/dealers.component");
var inventory_component_1 = require("./components/inventory.component");
var editorials_component_1 = require("./components/editorials.component");
var media_component_1 = require("./components/media.component");
var AppComponent = (function () {
    function AppComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/']);
    };
    AppComponent.prototype.getLinkStyle = function (route) {
        return this.location.path().indexOf(route.path) > -1;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "/app/app.html",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/', component: static_component_1.StaticComponent },
            { path: '/vehicles', component: vehicles_component_1.VehiclesComponent },
            { path: '/dealers', component: dealers_component_1.DealersComponent },
            { path: '/inventory', component: inventory_component_1.InventoryComponent },
            { path: '/editorials', component: editorials_component_1.EditorialsComponent },
            { path: '/media', component: media_component_1.MediaComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
