"use strict";
exports.__esModule = true;
exports.helloService = exports.HelloService = void 0;
var HelloService = /** @class */ (function () {
    function HelloService() {
    }
    HelloService.prototype.sayHello = function () {
        return {
            hello: 'zevi'
        };
    };
    return HelloService;
}());
exports.HelloService = HelloService;
exports.helloService = new HelloService();
