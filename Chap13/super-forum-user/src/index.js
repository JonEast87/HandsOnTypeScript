"use strict";
exports.__esModule = true;
var express_1 = require("express");
var session = require("express-session");
// const session = require("express-session");
var connect_redis_1 = require("connect-redis");
var ioredis_1 = require("ioredis");
require("dotenv").config();
var app = (0, express_1["default"])();
var router = express_1["default"].Router();
var redis = new ioredis_1["default"]({
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD
});
var RedisStore = (0, connect_redis_1["default"])(session);
var redisStore = new RedisStore({
    client: redis
});
app.use(session({
    store: redisStore,
    name: process.env.COOKIE_NAME,
    sameSite: "Strict",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        path: "/",
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.use(router);
router.get("/", function (req, res, next) {
    if (!req.session.userid) {
        req.session.userid = req.query.userid;
        console.log("Userid is set");
        req.session.loadedCount = 0;
    }
    else {
        req.session.loadCount = Number(req.session.loadedCount) + 1;
    }
    res.send("userid: ".concat(req.session.userid, ", loadedCount: ").concat(req.session.loadedCount));
});
app.listen({ port: process.env.SERVER_PORT }, function () {
    console.log("Server ready on port ".concat(process.env.SERVER_PORT));
});
