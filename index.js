const express = require('express');
const cors = require('cors');
const router = require('./routers/router');

const app = express();
app.use(cors({origin: '*'}));
app.use(express.json());
require('dotenv').config();
app.use(router);
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));