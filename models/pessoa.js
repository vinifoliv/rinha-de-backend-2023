const Database = require('../db');
const database = new Database();

class Pessoa {
    constructor (apelido, nome, nascimento, stack) {
        this.apelido = apelido;
        this.nome = nome;
        this.nascimento = nascimento;
        this.stack = stack;
    }

    async insert() {
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

    static async readByTerm(termoBusca) {
        const client = await database.pool.connect();

        const text = `SELECT * FROM pessoas WHERE 
            apelido ILIKE '%' || $1 || '%' OR 
            nome ILIKE '%' || $1 || '%' OR 
            EXISTS (
                SELECT 1 FROM UNNEST(stack) AS item WHERE
                $1 ILIKE item
            )
        `;
        const values = [termoBusca];
        
        try {
            const result = await client.query(text, values);
            return result.rows;
        }
        catch (error) {
            throw new Error();
        }
        finally {
            client.release();
        }
    }

    static async readAll() {
        const client = await database.pool.connect();

        try {
            const result = await client.query('SELECT COUNT(*) FROM pessoas');
            return (result.rows[0]).count;  
        }
        catch (error) {
            throw new Error();
        }
    }
}

module.exports = Pessoa;