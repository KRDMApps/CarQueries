System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Make;
    return {
        setters:[],
        execute: function() {
            Make = (function () {
                function Make(id, name, niceName, models) {
                    this.id = id;
                    this.name = name;
                    this.niceName = niceName;
                    this.models = models;
                }
                return Make;
            }());
            exports_1("Make", Make);
        }
    }
});
//# sourceMappingURL=make.js.map