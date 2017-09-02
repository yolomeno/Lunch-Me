//KBlanchette - Setup Express Server
var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var db = require("./models/index.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static("./public"));

require("./controllers/ordersController")(app);

require("./controllers/group-api-routes.js")(app);
require("./controllers/order-api-routes.js")(app);
require("./controllers/order-line-api-routes.js")(app);
require("./controllers/user-api-routes.js")(app);
require("./controllers/htmlRoutes.js")(app);


db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });