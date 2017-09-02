module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        email: {
            type: DataTypes.STRING
        },
        user_name: {
            type: DataTypes.STRING
        },
        user_password: {
            type: DataTypes.STRING
        }
    });
    
    return User
    };
    