const express = require('express');
const Pessoa = require('../models/pessoa');

const pessoasTermo = express.Router();

pessoasTermo.get('/pessoas', async (req, res) => {
    const termoBusca = req.query.t;
    if (!termoBusca) return res.status(400).send();

    try {
        const pessoas = await Pessoa.readByTerm(termoBusca);
        pessoas.map((pessoa) => pessoa.nascimento = pessoa.nascimento.toISOString().split('T')[0]);
        res.status(200).json(pessoas);
    }
    catch (error) {
        res.status(200).send([]);
    }
});

module.exports = pessoasTermo;