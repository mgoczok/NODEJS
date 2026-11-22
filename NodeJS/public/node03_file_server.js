let http = require("http");
let url = require("url");
let fs = require("fs");

http.createServer(function (req, res) {

    let fileName = "." + url.parse(req.url, true).pathname;

    fs.readFile(fileName, function (err, data) {

        if (err) {
            res.writeHead(404, {"Content-Type": "text/html"});
            return res.end("404 - file not found");
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();

    });

}).listen(8080);