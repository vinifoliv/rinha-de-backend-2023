const express = require('express');
const Pessoa = require('../models/pessoa')

const contagemPessoas = express.Router();

contagemPessoas.get('/contagem-pessoas', async (req, res) => {
    let cont = 0;

    try {
        cont = await Pessoa.readAll();
        res.status(200).send(cont);
    }
    catch(error) {
        res.status(200).send(cont);
    }
});

module.exports = contagemPessoas;