'use strict';
const {
    Model,
} = require('sequelize');
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
        phone: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('confirmed', 'unconfirmed'),
            allowNull: false,
            defaultValue: 'unconfirmed',
        }
    }, {
        sequelize,
        modelName: 'identity',
    });
    return identity;
};