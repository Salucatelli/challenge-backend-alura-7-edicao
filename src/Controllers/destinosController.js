//DB
const Destinos = require("../models/Destino.js");

//Path
const path = require("path");
const fs = require("fs");

//Img
const uploadImg = require("../functions/uploadImg.js");

//OpenAI
const openai = require("../config/aiConfig.js");

require("dotenv").config();


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

    static async verDestinoPorId(req, res, next) {
        try {
            const { id } = req.params;

            const data = await Destinos.findOne({
                where: { id: Number(id) }
            })

            if (data == null) {
                return res.status(500).json({ mensagem: "Nenhum destino foi encontrado!" });
            }

            return res.status(200).json(data);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async criarDestino(req, res, next) {
        let { data } = req.body;
        const { img1, img2 } = req.files;
        data = JSON.parse(data);

        if (!data.texto_descritivo) {
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `Faça um resumo sobre ${data.nome} enfatizando o porque este lugar é incrível. Utilize uma linguagem informal e até 100 caracteres no máximo em cada parágrafo. Crie 2 parágrafos neste resumo.`,
                max_tokens: 2042,
                temperature: 0.5
            });
            console.log(response.data.choices[0].text);
            data.texto_descritivo = response.data.choices[0].text;
        }

        const imgUpload = uploadImg(img1, img2);
        if (!imgUpload) {
            return res.status(500).json({ message: "ERRO - Não é possivel cadastrar uma imagem já existente." });
        }

        const dest = {
            nome: data.nome, meta: data.meta, texto_descritivo: data.texto_descritivo, img1: img1.name, img2: img2.name
        }

        try {
            const result = await Destinos.create(dest);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error)
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
            const data = (await Destinos.findOne({ where: { id: Number(id) } })).dataValues;
            const { img1, img2 } = data;
            console.log(img1, img2);

            if (!data) {
                throw new Error("ERRO, Destino não encontrado");
            }
            const img = data;

            await Destinos.destroy({ where: { id: Number(id) } });

            fs.unlink(imgPath + img1, function (err) {
                if (err) throw err;
                console.log("Arquivo Deletado")
            })
            fs.unlink(imgPath + img2, function (err) {
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