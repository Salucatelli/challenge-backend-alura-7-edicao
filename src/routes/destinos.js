const express = require("express");
const DestinosController = require("../Controllers/destinosController.js");
const router = express.Router();


//GET Routes
router.get("/destinos", DestinosController.verDestinos);


//POST Routes
router.post("/destinos", DestinosController.criarDestino);


//PUT Routes
router.put("/destinos/:id", DestinosController.editarDestino);


//DELETE Routes
router.delete("/destinos/:id", DestinosController.apagarDestino);


module.exports = router;