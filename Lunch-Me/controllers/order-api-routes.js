var db = require("../models/index.js");

module.exports = function(app) {
    
    app.get("/api/order", function(req, res) {
        db.order.findAll({
          include: [db.Order_Line]
        }).then(function(dbOrder) {
          res.json(dbOrder);
        });
      });
    
      app.delete("/api/order/:id", function(req, res) {
        db.order.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbOrder) {
          res.json(dbOrder);
        });
      });
    
      app.put("/api/order", function(req, res) {
        db.order.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbOrder) {
            res.json(dbOrder);
          });
      });
    };