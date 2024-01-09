import express from "express";

require("dotenv").config();

const app = express();

app.listen({ port: process.env.SERVER_PORT }, () => {
    console.log(`Server ready on port ${process.env.SERVER_PORT}`);
});