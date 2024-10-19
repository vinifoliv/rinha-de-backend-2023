const express = require('express');
const cors = require('cors');
const contagemPessoas = require('./contagemPessoas');
const pessoas = require('./pessoas');

const router = express.Router();
router.use(cors({origin: '*'}));


router.use(contagemPessoas);
router.use(pessoas);

module.exports = router;