const asyncHandler = require('express-async-handler')
const db = require('../../models');

const create = asyncHandler(
    async (req, res) => {
        const bodyData = req.body;
        const createdCoordsData = await db.coords.create({
            ...bodyData
        })

        return res.status(200)
            .json({
                status: true,
                data: createdCoordsData,
            })
    }
)

const getData = asyncHandler(async (req, res) => {
    const allBicyclesCoords = await db.coords.findAll();
    return res.status(200)
        .json({
            status: true,
            data: allBicyclesCoords,
        })
})

module.exports = {
    create,
    getData,
}