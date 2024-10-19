const express = require('express');
const cors = require('cors');
const Pessoa = require('../models/pessoa');

const pessoasId = express.Router();
pessoasId.use(cors({origin: '*'}));
pessoasId.use(express.json());
require('dotenv').config();

pessoasId.get('/pessoas/:id', async (res, req) => {
    const id = req.params.id;

    try {
        res.status(200).json();
    }
    catch (error) {
        res.status(404).send();
    }
});

module.exports = pessoas;