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
        }
    };
    bicycle.init({
        userId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'bicycle',
    });
    return bicycle;
};