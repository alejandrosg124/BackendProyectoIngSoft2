import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Tamo arribaa');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Tamo en el puerto http://localhost:${PORT}`);
});