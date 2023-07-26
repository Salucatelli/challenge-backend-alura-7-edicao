const Destinos = require("../models/Destino.js");
const path = require("path");
const fs = require("fs");

class DestinosController {

    static async verDestinos(req, res, next) {
        try {
            const { nome } = req.query;

            if (!req.query.nome) {
                const data = await Destinos.findAll();
                return res.status(200).json(data);
            }
            const data = await Destinos.findAll({
                atributes: ["nome", "preco", "img"],
                where: { nome }
            })
            if (data[0] == null) {
                return res.status(500).json({ mensagem: "Nenhum destino foi encontrado!" });
            }

            return res.status(200).json(data);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async criarDestino(req, res, next) {
        let { data } = req.body;
        const { img } = req.files;
        data = JSON.parse(data);

        const uploadPath = path.join(__dirname, "../", "images", img.name);
        img.mv(uploadPath, function (error) {
            if (error) return console.log(error);
        })

        const dest = {
            nome: data.nome, preco: data.preco, img: img.name
        }

        try {
            const result = await Destinos.create(dest);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async editarDestino(req, res, next) {
        const dest = req.body;
        const id = req.params.id;

        if (dest.img) {
            return res.status(500).send("Não é possivel alterar a imagem!");
        }

        try {
            const data = await Destinos.update(dest, { where: { id: Number(id) } });
            return res.status(200).json({ message: "Atualizado com sucesso!" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async apagarDestino(req, res, next) {
        const id = req.params.id;
        const imgPath = path.join(__dirname, "../", "images/")
        try {
            const data = (await Destinos.findOne({ where: { id: Number(id) } })).dataValues.img;
            if (!data) {
                throw new Error("ERRO, Destino não encontrado");
            }
            const img = data;

            await Destinos.destroy({ where: { id: Number(id) } });
            fs.unlink(imgPath + img, function (err) {
                if (err) throw err;
                console.log("Arquivo Deletado")
            })
            return res.status(200).json("Deletado com sucesso!");

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = DestinosController;