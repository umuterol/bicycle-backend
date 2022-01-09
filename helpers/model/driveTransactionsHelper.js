const startDrive = require("../drive/startDrive");
const finishDrive = require("../drive/finishDrive");
const calculateDrivePay = require("../drive/calculateDrivePay");

const driveTransactionAfterCreateHandler = async (sequelize, drive_transactions, options) => {
    const { transaction_type } = drive_transactions;
    const { req, res } = options;

    if (transaction_type === 'started') {
        startDrive(req, res, sequelize, drive_transactions)
    } else if (transaction_type === 'finished') {
        finishDrive(req, res, sequelize, drive_transactions)
    }
}

module.exports = {
    driveTransactionAfterCreateHandler
}

