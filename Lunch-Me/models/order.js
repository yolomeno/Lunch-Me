module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define("order", {
        order_name: {
            type: DataTypes.STRING
        },
        order_code: {
            type: DataTypes.INTEGER
        },
        created_by: {
            type: DataTypes.STRING
        },
        group_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN
        },
        start_time: {
            type: DataTypes.DATE
        },
        duration: {
            type: DataTypes.INTEGER
        }
    });
   
    return Order
    };