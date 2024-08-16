import express from 'express';
import cors from 'cors';
import { config, freelancer, geral, login } from './routes/router.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/login', login);
app.use('/config', config);
app.use('/geral', geral);
app.use('/freelance', freelancer);

app.get('/', (req, res) => {
  res
    .status(200)
    .send({ api: 'API Prestador Web - Desenvolvida por Jederson Andre' });
});

export default app;
