const { Model, DataTypes } = require("sequelize");

class Depoimento extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            depoimento: DataTypes.STRING,
            img: DataTypes.BLOB
        }, {
            sequelize: connection
        })
    }
}

module.exports = Depoimento;