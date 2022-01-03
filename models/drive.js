'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class drive extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            drive.belongsTo(models.users_infos, {
                foreignKey: "tc",
            })
            drive.belongsTo(models.bicycle, {
                foreignKey: "bicycle_id",
            })
        }
    };
    drive.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        pay: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
            allowNull: false,
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        start_lat: {
            type: DataTypes.STRING,
        },
        start_lng: {
            type: DataTypes.STRING,
        },
        finish_time: {
            type: DataTypes.DATE,
        },
        finish_lat: {
            type: DataTypes.STRING,
        },
        finish_lng: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.ENUM('finished', 'active'),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'drive',
        createdAt: false,
        updatedAt: false,
    });
    return drive;
};