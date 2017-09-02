var db = require("../models/index.js");


module.exports = function(app) {

  app.get("/api/group/:id", function(req, res) {
    db.group.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbGroup) {
      res.json(dbGroup);
    });
  });

  app.post("/api/group", function(req, res) {
    db.group.create(req.body).then(function(dbGroup) {
      res.json(dbGroup);
    });
  });

  app.delete("/api/group/:id", function(req, res) {
    db.group.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGroup) {
      res.json(dbGroup);
    });
  });

  app.put("/api/group", function(req, res) {
    db.group.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbGroup) {
        res.json(dbGroup);
      });
  });
};