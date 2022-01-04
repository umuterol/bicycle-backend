'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class wallet_transactions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            wallet_transactions.belongsTo(models.wallet_transaction_type, {
                foreignKey: "transaction_type",
            })

            wallet_transactions.belongsTo(models.identity, {
                foreignKey: "tc",
            })
        }
    };
    wallet_transactions.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        transaction_amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'wallet_transactions',
        updatedAt: false,
    });
    return wallet_transactions;
};