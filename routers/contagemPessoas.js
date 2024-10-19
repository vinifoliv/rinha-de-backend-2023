const express = require('express');
const cors = require('cors');

const contagemPessoas = express.Router();
contagemPessoas.use(cors({origin: '*'}));
require('dotenv').config();

contagemPessoas.get('/contagem-pessoas', async (req, res) => {
    res.send('Hello, world!');
});

module.exports = contagemPessoas;