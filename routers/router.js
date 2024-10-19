const express = require('express');
const cors = require('cors');
const contagemPessoas = require('./contagemPessoas');
const pessoas = require('./pessoas');
const pessoasId = require('./pessoasId');

const router = express.Router();
router.use(cors({origin: '*'}));


router.use(contagemPessoas);
router.use(pessoas);
router.use(pessoasId);

module.exports = router;