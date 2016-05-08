System.register(["angular2/core", "angular2/src/common/directives/core_directives", "./api.service", "../models"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_directives_1, api_service_1;
    var ApiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_directives_1_1) {
                core_directives_1 = core_directives_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            //import {Column} from "./grid.component";
            ApiComponent = (function () {
                //columns: any[];
                function ApiComponent(service) {
                    this.service = service;
                    this.isLoading = false;
                    //details: carQueryModels.Style[];
                    this.selectedMake = "0";
                    this.selectedModel = "0";
                    this.selectedYear = "0";
                    //this.columns.push(new Column("name", "Name"));
                    //this.columns.push(new Column("equipmentType", "Equipment Type"));
                    //this.columns.push(new Column("compressionRatio", "Compression Ratio"));
                    //this.columns.push(new Column("cylinder", "Cylinder"));
                    //this.columns.push(new Column("size", "Size"));
                    //this.columns.push(new Column("displacement", "Displacement"));
                    //this.columns.push(new Column("configuration", "Configuration"));
                    //this.columns.push(new Column("fuelType", "Fuel Type"));
                    //this.columns.push(new Column("horsepower", "Horsepower"));
                    //this.columns.push(new Column("torque", "Torque"));
                    //this.columns.push(new Column("totalValves", "Total Valves"));
                    //this.columns.push(new Column("manufacturerEngineCode", "Manufacturer Engine Code"));
                    //this.columns.push(new Column("type", "Type"));
                    //this.columns.push(new Column("code", "Code"));
                    //this.columns.push(new Column("compressorType", "Compressor Type"));
                    //this.columns.push(new Column("rpm", "Rpm"));
                    //this.columns.push(new Column("valve", "Valve"));
                }
                ApiComponent.prototype.onMakeSelect = function (selectedMake) {
                    this.models = this.makes.filter(function (item) { return item.name == selectedMake; })[0].models;
                };
                ApiComponent.prototype.onModelSelect = function (selectedModel) {
                    this.years = this.models.filter(function (item) { return item.name == selectedModel; })[0].years;
                };
                ApiComponent.prototype.ngOnInit = function () {
                    this.getAllMakes();
                };
                ApiComponent.prototype.getAllMakes = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.service.getAllMakes(function (json) {
                        if (json) {
                            _this.makes = json.makes;
                            _this.isLoading = false;
                        }
                    });
                };
                ApiComponent.prototype.getVehicleDetails = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.service.getVehicleDetails(function (json) {
                        if (json) {
                            //this.details = json.styles;
                            _this.isLoading = false;
                        }
                    });
                };
                ApiComponent = __decorate([
                    core_1.Component({
                        selector: "vehicles",
                        templateUrl: "/partial/vehicles",
                        providers: [api_service_1.ApiService],
                        directives: core_directives_1.CORE_DIRECTIVES
                    }), 
                    __metadata('design:paramtypes', [api_service_1.ApiService])
                ], ApiComponent);
                return ApiComponent;
            }());
            exports_1("ApiComponent", ApiComponent);
        }
    }
});
//# sourceMappingURL=vehicles.component.js.map