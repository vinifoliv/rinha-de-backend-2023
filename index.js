const express = require('express');
const router = require('./routers/router');

const app = express();
app.use(router);
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));