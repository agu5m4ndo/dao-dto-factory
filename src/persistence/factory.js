const MensajeDaoSqlite = require('./DAOs/mensajeDAO.sqlite');
const ProductoDaoMariadb = require('./DAOs/productoDAO.mariadb');
const { logError } = require('../utils/logger');

class SQLFactory {
    /*
     * En otro proyecto puede preguntar sobre
     * qué base de datos utilizar para cada 
     * modelo
     */
    create(type) {
        switch (type) {
            case "message":
                return new MensajeDaoSqlite();
            case "product":
                return new ProductoDaoMariadb();
            default:
                logError.error(`No existe un DAO para ${type}`)
                break;
        }
    }
}

module.exports = SQLFactory;