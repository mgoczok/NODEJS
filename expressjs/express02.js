const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.status(200).send("Hello world2!");
});

app.get("/route_get", (req,res) => {
    res.status(200).send("Hello world2! /route_get");
});

app.post("/route_post", (req,res) => {
    res.status(200).send("Hello world! - /route_post");
});

app.all("/route_all", (req,res) => {
    res.status(200).send("Hello world! - /route_all");
});



app.listen(8080, () => {console.log("Server started")});
