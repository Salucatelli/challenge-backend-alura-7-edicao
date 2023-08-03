const { Model, DataTypes } = require("sequelize");

class Destino extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            meta: DataTypes.STRING,
            texto_descritivo: DataTypes.STRING,
            img1: DataTypes.STRING,
            img2: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }
}

module.exports = Destino;