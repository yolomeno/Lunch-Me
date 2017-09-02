module.exports = function(sequelize, DataTypes) {
    var Order_line = sequelize.define("order_line", {
        order_id: {
            type: DataTypes.UUID,
            allowNull: false
          },
        item: {
            type: DataTypes.STRING
        },
        qty: {
            type: DataTypes.INTEGER
        },
        unit_type: {
            type: DataTypes.STRING
        }
    });
    return Order_line
    };
