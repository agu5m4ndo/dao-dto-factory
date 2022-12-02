const ContainerSQL = require('../containers/ContainerSQL');
const { options } = require('../../utils/sqlite3');

class MensajeDaoSqlite extends ContainerSQL {
    constructor() {
        super('messages', options);
    }
    async saveMessage(object) {
        await super.save(object)
    }

    async getMessageById(id) {
        await super.getById(id);
    }

    async getAllMessages() {
        await super.getAll();
    }

    async deleteMessageById(id) {
        await super.deleteById(id);
    }
}

module.exports = MensajeDaoSqlite;