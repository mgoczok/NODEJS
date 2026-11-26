const express = require("express");
const app = express();

app.get("/user/:id",
    (req, res, next) => {
        console.log("Request:", req.method, req.url);
        req.requestTime = Date.now();

        if (req.params.id === "0" || req.params.id === "5") {
            next();
        } else {
            next("route");
        }
    },
    (req, res) => {
        res.status(200).send(
            "Hello world! requestTime: " + req.requestTime +
            " id: " + req.params.id
        );
    }
);

// Alternatywna obsługa, gdy ID nie jest dozwolone
app.get("/user/:id", (req, res) => {
    res.status(403).send("Brak dostępu");
});

app.get("/*", (req, res) => {
    res.send("Hello World!");
});

app.listen(8080, () => {
    console.log("Server started");
});