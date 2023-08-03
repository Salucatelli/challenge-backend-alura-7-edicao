//DB
const Depoimentos = require("../models/Depoimento.js");

//Path
const path = require("path");
const fs = require("fs");

//External Functions
const randomArray = require("../functions/randomArray.js");

class DepoimentosController {
    static async verDepoimentos(req, res, next) {
        try {
            const data = await Depoimentos.findAll();

            const img = path.join(__dirname, "../images/0001-2627633620.png");
            return res.json(data);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async ver3Depoimentos(req, res, next) {
        const { count, rows } = await Depoimentos.findAndCountAll({
            limit: 3
        });
        const data = randomArray(rows);
        return res.status(200).json(data);
    }

    static async criarDepoimento(req, res, next) {
        let { data } = req.body;
        const { img } = req.files;
        data = JSON.parse(data);

        const uploadPath = path.join(__dirname, "../", "images", img.name);
        img.mv(uploadPath, function (error) {
            if (error) return console.log(error);
        })

        const dep = {
            nome: data.nome, depoimento: data.depoimento, img: img.name
        }

        try {
            await Depoimentos.create(dep);
            return res.status(200).json(dep);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async editarDepoimento(req, res, next) {
        const atualizado = req.body;
        const id = req.params.id;

        if (atualizado.img) return res.status(500).json({ error: "A imagem não pode ser alterada desta maneira." });
        try {
            await Depoimentos.update(atualizado, {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: "Atualizado Com sucesso!" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async apagarDepoimento(req, res, next) {
        const id = req.params.id;
        const imgPath = path.join(__dirname, "../", "images/");

        try {
            const data = await Depoimentos.findOne({ where: { id: Number(id) } })
            if (!data) {
                throw new Error("ERRO, Depoimento não encontrado");
            }
            const img = data.dataValues.img;
            fs.unlink(imgPath + img, function (err) {
                if (err) throw err;
                console.log("Arquivo Deletado")
            })

            await Depoimentos.destroy({ where: { id: Number(id) } });

            return res.status(200).json({ message: `Depoimento de id ${id} apagado com sucesso!` });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}


module.exports = DepoimentosController;