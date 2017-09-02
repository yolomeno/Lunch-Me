var db = require("../models/index.js");

module.exports = function(app) {
    
      app.post("/api/order_line", function(req, res) {
        db.order_line.create({
            item: req.body.item,
            qty: req.body.qty,
            unit_type: req.body.unit_type
        }).then(function(dbOrder_line) {
          res.json(dbOrder_line);
        });
      });
    
      app.delete("/api/order_line/:id", function(req, res) {
        db.order_line.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbOrder_line) {
          res.json(dbOrder_line);
        });
      });
    
      app.put("/api/order_line", function(req, res) {
        db.order_line.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbOrder_line) {
            res.json(dbOrder_line);
          });
      });
    };