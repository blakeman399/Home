var request = require("request");
var appRouter = function (app) {

    app.get("/", function (req, res) {
        res.send("Hello World");
        console.log("Root Hit")
    });

    app.get("/pioff", function (req, res) {
        res.send("Pi is Shutting Down");
        console.log("ShutDown")
    });
    app.get("/pion", function (req, res) {
        res.send("Startup");
        console.log("Startup")
    });

    app.post("/pirestart", function (req, res) {
        var options = {
            method: 'POST',
            url: 'https://maker.ifttt.com/trigger/Shutoff/with/key/fz2RZ1YpjeTxZjyqqch7pPYOj8VnEdaayv1Un28E7V-',
            headers: {
                'postman-token': 'b4d2eeb2-c2d0-39ae-b528-41410975f1e0',
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
        });

    });

    app.get("/temp", function (req, res) {
        var tempVar = "60 Degrees"
        res.send("The Tempeture for this device is " + tempVar);
        console.log(tempVar)
    });


}

module.exports = appRouter;