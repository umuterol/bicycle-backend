const express = require("express");
const app = express()
app.use(express.json())
const dotenv = require('dotenv');
dotenv.config({
    path: './config/setting.env'
})
const db = require("./models");
const apiRouters = require("./rooters")


app.use("/api", apiRouters)



app.listen(process.env.PORT, () => {
    // db.sequelize.sync();
    // db.sequelize.sync({force:true});
    console.log("server started")
})

