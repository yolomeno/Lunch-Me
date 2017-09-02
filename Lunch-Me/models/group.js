module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("group", {
        group_name: {
            type: DataTypes.STRING
        },
        group_owner_id: {
            type: DataTypes.UUID,
            allowNull: false
          }
     
    });
    return Group
    };