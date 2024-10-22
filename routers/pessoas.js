const express = require('express');
const cors = require('cors');
const Pessoa = require('../models/pessoa');

// Configurações
const pessoas = express.Router();
pessoas.use(cors({origin: '*'}));
pessoas.use(express.json());
require('dotenv').config();

// Rota
pessoas.post('/pessoas', async (req, res) => {
    const dados = req.body;

    const pessoa = new Pessoa(
        dados.apelido,
        dados.nome,
        dados.nascimento,
        dados.stack
    );

    if (!isNomeValid(pessoa.nome) || !isStackValid(pessoa.stack)) {
        res.status(400).send();
        return;
    }

    try {
        const row = await pessoa.insert();
        if (!row.id) throw new Error();

        res.set('Location', `/pessoas/${row.id}`)
        res.status(201).send();
    }
    catch (error) {
        console.log(error)
        res.status(422).send(error);
    }
});

function isNomeValid(nome) {
    if (!isNaN(nome)) return false;

    return true;
}

function isStackValid(stack) {
    if (stack) {
        stack.forEach((item) => {
            if (!isNaN(item)) return false;
        });
    }

    return true;
}

module.exports = pessoas;