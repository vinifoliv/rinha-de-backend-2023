const express = require('express');
const cors = require('cors');
const Pessoa = require('../models/pessoa');

const pessoasId = express.Router();
pessoasId.use(cors({origin: '*'}));
pessoasId.use(express.json());
require('dotenv').config();

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