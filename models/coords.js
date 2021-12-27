'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class coords extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            coords.belongsTo(models.bicycle, {
                foreignKey: {
                    name: "bicycleId",
                    allowNull: false,
                },
                onDelete: 'cascade',
            })
        }
    };
    coords.init({
        bicycleId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        lat: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        lng: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'coords',
        createdAt: false,
    });
    return coords;
};