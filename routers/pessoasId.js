const express = require('express');
const Pessoa = require('../models/pessoa');

const pessoasId = express.Router();

pessoasId.get('/pessoas/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const pessoa = await Pessoa.readById(id);
        pessoa.nascimento = pessoa.nascimento.toISOString().split('T')[0];
        
        if (pessoa) res.status(200).json(pessoa);
    }
    catch (error) {
        res.status(404).send();  
    }
});

module.exports = pessoasId;