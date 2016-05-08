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
require("./models");
var grid_component_1 = require("./grid.component");
var VehiclesComponent = (function () {
    function VehiclesComponent(service) {
        this.service = service;
        this.isLoading = false;
        //details: carQueryModels.Style[];
        this.selectedMake = "0";
        this.selectedModel = "0";
        this.selectedYear = "0";
        this.columns.push(new grid_component_1.Column("name", "Name"));
        this.columns.push(new grid_component_1.Column("equipmentType", "Equipment Type"));
        this.columns.push(new grid_component_1.Column("compressionRatio", "Compression Ratio"));
        this.columns.push(new grid_component_1.Column("cylinder", "Cylinder"));
        this.columns.push(new grid_component_1.Column("size", "Size"));
        this.columns.push(new grid_component_1.Column("displacement", "Displacement"));
        this.columns.push(new grid_component_1.Column("configuration", "Configuration"));
        this.columns.push(new grid_component_1.Column("fuelType", "Fuel Type"));
        this.columns.push(new grid_component_1.Column("horsepower", "Horsepower"));
        this.columns.push(new grid_component_1.Column("torque", "Torque"));
        this.columns.push(new grid_component_1.Column("totalValves", "Total Valves"));
        this.columns.push(new grid_component_1.Column("manufacturerEngineCode", "Manufacturer Engine Code"));
        this.columns.push(new grid_component_1.Column("type", "Type"));
        this.columns.push(new grid_component_1.Column("code", "Code"));
        this.columns.push(new grid_component_1.Column("compressorType", "Compressor Type"));
        this.columns.push(new grid_component_1.Column("rpm", "Rpm"));
        this.columns.push(new grid_component_1.Column("valve", "Valve"));
    }
    VehiclesComponent.prototype.onMakeSelect = function (selectedMake) {
        this.models = this.makes.filter(function (item) { return item.name == selectedMake; })[0].models;
    };
    VehiclesComponent.prototype.onModelSelect = function (selectedModel) {
        this.years = this.models.filter(function (item) { return item.name == selectedModel; })[0].years;
    };
    VehiclesComponent.prototype.ngOnInit = function () {
        this.getAllMakes();
    };
    VehiclesComponent.prototype.getAllMakes = function () {
        var _this = this;
        this.isLoading = true;
        this.service.getAllMakes(function (json) {
            if (json) {
                _this.makes = json.makes;
                _this.isLoading = false;
            }
        });
    };
    VehiclesComponent.prototype.getVehicleDetails = function () {
        var _this = this;
        this.isLoading = true;
        this.service.getVehicleDetails(function (json) {
            if (json) {
                //this.details = json.styles;
                _this.isLoading = false;
            }
        });
    };
    VehiclesComponent = __decorate([
        core_1.Component({
            selector: "vehicles",
            templateUrl: "/partial/vehicles",
            providers: [api_service_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], VehiclesComponent);
    return VehiclesComponent;
}());
exports.VehiclesComponent = VehiclesComponent;
