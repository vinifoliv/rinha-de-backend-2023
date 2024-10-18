import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors)
const PORT = 3000;

app.get('/contagem-pessoas', async (req, res) => {
    
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));