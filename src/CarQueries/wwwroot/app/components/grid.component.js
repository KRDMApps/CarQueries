System.register(['angular2/core', "../models"], function(exports_1, context_1) {
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
    var core_1;
    var Grid, Column, Sorter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            Grid = (function () {
                function Grid() {
                    this.sorter = new Sorter();
                }
                Grid.prototype.sort = function (key) {
                    this.sorter.sort(key, this.rows);
                };
                Grid = __decorate([
                    core_1.Component({
                        selector: 'grid',
                        inputs: ['rows: rows', 'columns: columns'],
                        templateUrl: './components/grid.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Grid);
                return Grid;
            }());
            exports_1("Grid", Grid);
            Column = (function () {
                function Column(name, descr) {
                    this.name = name;
                    this.descr = descr;
                }
                return Column;
            }());
            exports_1("Column", Column);
            Sorter = (function () {
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
            exports_1("Sorter", Sorter);
        }
    }
});
//# sourceMappingURL=grid.component.js.map