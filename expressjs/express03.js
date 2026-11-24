const http = require("http");
const express = require("express");

const app = express();
const testRouter = require("./test_router")

app.get("/",(req,res) => {
    res.status(200).send("Hello World3");
});

app.use("/test", testRouter)

app.listen(8080, () => { console.log("serwer działa"); });