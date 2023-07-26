const { Model, DataTypes } = require("sequelize");

class Destino extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.FLOAT,
            img: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }
}

module.exports = Destino;