'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class bicycle_coords extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            bicycle_coords.belongsTo(models.bicycle, {
                foreignKey: "bicycleId",
            })
        }
    };
    bicycle_coords.init({
        bicycleId: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        lat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lng: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'bicycle_coords',
        createdAt: false,
    });
    return bicycle_coords;
};