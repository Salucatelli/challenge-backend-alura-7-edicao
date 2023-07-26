require("dotenv").config();
const dbConfig = require("../config/database.js");
const Depoimento = require("../models/Depoimento.js");
const Sequelize = require("sequelize");
const Destino = require("../models/Destino.js");
const sequelize = new Sequelize(dbConfig);

Depoimento.init(sequelize);
Destino.init(sequelize);

sequelize.authenticate().then(() => {
    console.log("DataBase Connected.")
}).catch((error) => {
    { message: error.message }
});