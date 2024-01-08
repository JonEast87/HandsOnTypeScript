import express from "express";

console.log(process.env.NODE_ENV);
require("dotenv").config();

const app = express();

app.listen({ port: process.env.SERVER_PORT }, () => {
    console.log(`Server ready on port ${process.env.SERVER_PORT}`);
});