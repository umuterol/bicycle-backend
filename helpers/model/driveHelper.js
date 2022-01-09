const calculateDrivePay = require("../drive/calculateDrivePay");
const { calculateTimeDifference, nowDate } = require('../date');
const asyncHandler = require("express-async-handler");

const driveAfterFindHandler = async (sequelize, data) => {
    if (!data) {
        return;
    }
    const isArray = Array.isArray(data);
    const { bicycle } = sequelize.models;

    if (isArray) {
        await manyDriveUpdate(data, bicycle);
    }
    else {
        await oneDriveUpdate(data, bicycle);
    }
}

module.exports = {
    driveAfterFindHandler,
};

const oneDriveUpdate = asyncHandler(
    async (data, bicycle) => {
        const { status } = data;
        if (status !== 'active')
            return;
        const { pay, minute } = await calculateInfoDrive(data, bicycle);
        await data.update({
            pay,
            minute,
        })
    }
)


const manyDriveUpdate = asyncHandler(
    async (data, bicycle) => {
        data.map(async (drive, index) => {
            await oneDriveUpdate(drive, bicycle);
        })
    }
)

const calculateInfoDrive = asyncHandler(
    async (drive, bicycle) => {
        const { start_time } = drive;
        const { price } = await bicycle.findByPk(drive.bicycle_id);
        const pay = calculateDrivePay(price, start_time);
        const minute = calculateTimeDifference(start_time);
        return { pay, minute };
    }
)