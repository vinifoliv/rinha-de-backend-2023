const { Pool } = require('pg');
require('dotenv').config();

class Database {
    pool = new Pool({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST || 'localhost',
        port: process.env.POSTGRES_PORT,
        database: process.env.DATABASE
    });
}

module.exports = Database;