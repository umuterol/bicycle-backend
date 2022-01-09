const { errorMessage, successMessage } = require("../../helpers/resMessage");

const db = require('../../models');
const model = db.wallet_transactions;
const Controller = require("../Controller");
const controller = new Controller(model);


const create = async (req, res, next) => {
    try {
        const data = await model.create(req.body, { res });
    } catch (error) {
        return errorMessage(res, error, 400);
    }
}

module.exports = {
    create,
}