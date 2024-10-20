const express = require('express');
const pessoas = require('./pessoas');
const pessoasId = require('./pessoasId');
const pessoasTermo = require('./pessoasTermo');
const contagemPessoas = require('./contagemPessoas');

const router = express.Router();

router.use(pessoas);
router.use(pessoasId);
router.use(pessoasTermo);
router.use(contagemPessoas);

module.exports = router;