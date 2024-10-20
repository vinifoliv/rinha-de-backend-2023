const express = require('express');

const contagemPessoas = express.Router();

contagemPessoas.get('/contagem-pessoas', async (req, res) => {
    res.send('Hello, world!');
});

module.exports = contagemPessoas;