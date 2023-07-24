const express = require("express");
const DepoimentosController = require("../Controllers/depoimentosController.js");
const router = express.Router();

//GET Routes
router
    .get("/depoimentos", DepoimentosController.verDepoimentos)
    .get("/depoimentos-home", DepoimentosController.ver3Depoimentos);

//POST Routes
router.post("/depoimentos", DepoimentosController.criarDepoimento);

//PUT Routes
router.put("/depoimentos/:id", DepoimentosController.editarDepoimento);

//DELETE Routes
router.delete("/depoimentos/:id", DepoimentosController.apagarDepoimento);

//upload.single("file"),
module.exports = router;
