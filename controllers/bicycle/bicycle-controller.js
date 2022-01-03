const asyncHandler = require('express-async-handler')
const db = require('../../models');

const create = asyncHandler(
    async (req, res) => {
        const bodyData = req.body;
        const createdBicycleData = await db.bicycle.create({
            ...bodyData
        })

        return res.status(200)
            .json({
                status: true,
                data: createdBicycleData,
            })
    }
)

const getData = asyncHandler(async (req, res) => {
    const allBicycle = await db.bicycle.findAll();
    return res.status(200)
        .json({
            status: true,
            data: allBicycle,
        })
})

const getDataById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const bicycle = await db.bicycle.findByPk(id);
    return res.status(200)
        .json({
            status: true,
            data: bicycle,
        })
})


module.exports = {
    create,
    getData,
    getDataById,
}