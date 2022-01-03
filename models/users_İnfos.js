'use strict';
const {
    Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users_infos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            users_infos.belongsTo(models.identity, {
                foreignKey: {
                    name: 'phone',
                    allowNull: false,
                },
                onDelete: 'cascade',
            })
        }
    };
    users_infos.init({
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
        }
    }, {
        sequelize,
        modelName: 'users_infos',
    });
    return users_infos;
};