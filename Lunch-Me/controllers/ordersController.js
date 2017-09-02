var path = require("path");

module.exports = function(app){

    app.get("/", function(req, res){
        // var message = "Login Page"
        // res.send(message);

        res.sendFile(path.join(__dirname, "../views/login.html"))

    });
}