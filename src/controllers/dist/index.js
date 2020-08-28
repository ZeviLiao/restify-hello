"use strict";
exports.__esModule = true;
exports.CONTROLLERS = void 0;
var ping_1 = require("./ping");
var hello_1 = require("./hello");
exports.CONTROLLERS = [
    new ping_1.PingController(),
    new hello_1.HelloController()
];
