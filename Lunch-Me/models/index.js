'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./user.js')(sequelize, Sequelize);
db.group_user_member = require('./group_user_member.js')(sequelize, Sequelize);
db.group = require('./group.js')(sequelize, Sequelize);
db.order_line = require('./order_line.js')(sequelize, Sequelize);
db.order = require('./order.js')(sequelize, Sequelize);
db.sub_order = require('./sub_order.js')(sequelize, Sequelize);



db.group.belongsTo(db.group_user_member);
db.group_user_member.hasOne(db.group);

db.user.belongsTo(db.group_user_member);
db.group_user_member.hasOne(db.user);

db.user.belongsTo(db.order);
db.order.hasMany(db.user);

db.group.belongsTo(db.order);
db.order.hasOne(db.group);

db.order_line.belongsTo(db.order);
db.order.hasMany(db.order_line);

module.exports = db;
