var path = require("path");

module.exports = function(app) {

  app.get("/adding", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/addOrderLine.html"));
  });

  app.get("/confirming", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/confirmation.html"));
  });
  app.get("/creating", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/creators_page.html"));
  });

  app.get("/menu", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // app.use(function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/index.html"));
  // });
};
