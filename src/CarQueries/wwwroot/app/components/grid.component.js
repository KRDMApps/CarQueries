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
require("../models");
var GridComponent = (function () {
    function GridComponent() {
        this.sorter = new Sorter();
    }
    GridComponent.prototype.sort = function (key) {
        this.sorter.sort(key, this.rows);
    };
    GridComponent = __decorate([
        core_1.Component({
            selector: 'grid',
            inputs: ['rows: rows', 'columns: columns'],
            templateUrl: './components/grid.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
var Column = (function () {
    function Column(name, descr) {
        this.name = name;
        this.descr = descr;
    }
    return Column;
}());
exports.Column = Column;
var Sorter = (function () {
    function Sorter() {
        this.direction = 1;
    }
    Sorter.prototype.sort = function (key, data) {
        var _this = this;
        if (this.key === key) {
            this.direction = this.direction * -1;
        }
        else {
            this.direction = 1;
        }
        this.key = key;
        data.sort(function (a, b) {
            if (a[key] === b[key]) {
                return 0;
            }
            else if (a[key] > b[key]) {
                return 1 * _this.direction;
            }
            else {
                return -1 * _this.direction;
            }
        });
    };
    return Sorter;
}());
exports.Sorter = Sorter;
