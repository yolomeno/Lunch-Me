var db = require("../models/index.js");

module.exports = function(app) {
    
      app.post("/api/user", function(req, res) {
        db.user.create({
            email: req.body.email,
            user_name: req.body.user_name,
            user_password: req.body.user_password
          }).then(function(dbUser) {
          res.json(dbUser);
        });
      });

      app.get("/api/user/:user", function(req, res) {
        
        console.log(req.query);
        var userName = req.params.user;
        console.log("User Field" + userName);
        db.user.findOne({
          where: {
            user_name: userName
          }
        }).then(function(dbUser) {
          console.log(dbUser);
          res.json(dbUser);
        });
      });

      //app.get("/api/user/password", function(req, res) {
        //db.user.findOne({
          //where: {
            //user_password: req.params.password
          //}
        //}).then(function(dbUser) {
          //res.json(dbUser);
        //});
      //});
    
      app.delete("/api/user/:id", function(req, res) {
        db.user.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbUser) {
          res.json(dbUser);
        });
      });
    
      app.put("/api/user", function(req, res) {
        db.user.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbUser) {
            res.json(dbUser);
          });
      });
    };