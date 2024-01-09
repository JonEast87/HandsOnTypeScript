"use strict";
exports.__esModule = true;
var express_1 = require("express");
require("dotenv").config();
console.log(process.env.NODE_ENV);
console.log(process.env.REDIS_HOST);
var app = (0, express_1["default"])();
app.listen({ port: process.env.SERVER_PORT }, function () {
    console.log("Server ready on port ".concat(process.env.SERVER_PORT));
});
