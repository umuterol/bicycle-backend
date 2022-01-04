'use strict';
const {
    Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class bicycle extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            bicycle.belongsTo(models.identity, {
                foreignKey: {
                    name: 'owner',
                    allowNull: false,
                },
            })
        }
    };
    bicycle.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('using', 'parked', 'notactive'),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'bicycle',
    });
    return bicycle;
};