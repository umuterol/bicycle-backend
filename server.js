const express = require("express");
const app = express()
app.use(express.json())
const db = require("./models");
const apiRouters = require("./rooters")

app.use("/api", apiRouters)


app.listen(8080, () => {
    // db.sequelize.sync();
    // db.sequelize.sync({force:true});
    console.log("server started")
})

