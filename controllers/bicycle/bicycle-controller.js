const asyncHandler = require("express-async-handler");
const { errorMessage, successMessage } = require("../../helpers/resMessage");

const db = require('../../models');
const model = db.bicycle;
const Controller = require("../Controller");
const controller = new Controller(model);


const random_hex_code = async () => {
    let n, randomHexCode;
    while (true) {
        n = (Math.random() * 0xfffff * 1000000).toString(16);
        randomHexCode = n.slice(0, 6);
        const existingData = await model.findByPk(randomHexCode);
        if (!existingData)
            break;
    }
    return randomHexCode;
};


const create = async (req, res) => {
    const bicycleId = await random_hex_code();
    const data = {
        ...req.body,
        id: bicycleId,
    }
    try {
        const createdData = await model.create(data);
        console.log("createdData " + createdData)
        return successMessage(res, createdData, "Data created.");
    } catch (error) {
        return errorMessage(res, error, 400);
    }
};

module.exports = {
    create,
    getAllData: controller.getAllData,
    getDataByPk: controller.getDataByPk,
    updateData: controller.updateData,
    destroyData: controller.destroyData,
    getDataByQuery: controller.getDataByQuery,
    getDataByQueryOr: controller.getDataByQueryOr,
}