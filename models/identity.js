'use strict';
const {
    Model,
} = require('sequelize');
const db = require("./index.js")
module.exports = (sequelize, DataTypes) => {
    class identity extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    identity.init({
        tc: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },
        birth: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.ENUM('confirmed', 'unconfirmed', 'blocked'),
            allowNull: false,
            defaultValue: 'unconfirmed',
        }
    }, {
        sequelize,
        modelName: 'identity',
        hooks: {
            afterCreate: async (identity) => {
                const { tc } = identity.dataValues;
                await sequelize.models.wallet.create({ tc })
            }
        }
    });

    return identity;
};