const { logError, loggerConsole } = require('../../utils/logger');
const ContainerSQL = require('../containers/ContainerSQL');
const { options } = require('../../utils/mariadb')

class ProductoDaoMariadb extends ContainerSQL {
    constructor() {
        super('products', options);
    }
    async saveProduct(object) {
        let message = "";
        if (object.name == '') {
            message = "Name is blank";
        } else {
            if (object.price == '') {
                message = "Price is blank";
            } else {
                if (object.thumbnail == '') {
                    message = "Thumbnail is blank";
                }
            }
        }
        if (message != "") {
            loggerConsole.error(message);
            logError.error("Product error: " + message);
        } else {
            await super.save(object);
        }
    }

    async getProductById(id) {
        await super.getById(id);
    }

    async getAllProducts() {
        await super.getAll();
    }

    async deleteProductById(id) {
        await super.deleteById(id);
    }
}

module.exports = ProductoDaoMariadb;