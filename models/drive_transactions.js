'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class drive_transactions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            drive_transactions.belongsTo(models.drive_transaction_type, {
                foreignKey: "transaction_type",
            })
            drive_transactions.belongsTo(models.drive, {
                foreignKey: "drive_id",
            })
            drive_transactions.belongsTo(models.wallet_transactions, {
                foreignKey: {
                    name: "wallet_transaction_id",
                    allowNull: false,
                }
            })
        }
    };
    drive_transactions.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'drive_transactions',
        updatedAt: false,
    });
    return drive_transactions;
};