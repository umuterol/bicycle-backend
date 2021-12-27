const bicyleController = require("./bicycle-controller");
const bicyleCoordsController = require("./bicycle-coords-controller");

module.exports = {
    ...bicyleController,
    coords: {
        ...bicyleCoordsController,
    }
}