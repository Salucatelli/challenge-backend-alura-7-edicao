const express = require("express");
const depoimentos = require("./depoimentos.js");

const router = (app) => {
    app.use(
        express.json(),
        depoimentos
    );
    //Main Route
    app.get("/", (req, res) => {
        res.send("<h1>Seja Bem Vindo a API que desenvolvi para o Challenge de Backend da Alura 07/2023. Tente usar o endpoint '/depoimentos' para ver todos os depoimentos que estão cadastrados no banco de dados.<h1>")
    })
}

module.exports = router;