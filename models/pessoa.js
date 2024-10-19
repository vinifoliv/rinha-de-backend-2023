const Database = require('../db');

class Pessoa {
    constructor (apelido, nome, nascimento, stack) {
        this.apelido = apelido;
        this.nome = nome;
        this.nascimento = nascimento;
        this.stack = stack;
    }

    async insert() {
        const database = new Database();
        const client = await database.pool.connect();

        const text = 'INSERT INTO pessoas(apelido, nome, nascimento, stack) VALUES($1, $2, $3, $4) RETURNING id';
        const values = [
            this.apelido,
            this.nome,
            this.nascimento,
            this.stack
        ]

        try {
            const result = await client.query(text, values);
            return result.rows[0];
        }
        catch (error) {
            throw new Error(error);
        }
        finally {
            client.release();
        }
    }

    static async readById(id) {
        const database = new Database();
        const client = await database.pool.connect();

        const text = 'SELECT * FROM pessoas WHERE id = $1';
        const values = [id];

        try {
            const result = await client.query(text, values);
            return result.rows[0];
        }
        catch (error) {
            throw new Error();
        }
        finally {
            client.release();
        }
    }
}

module.exports = Pessoa;