import express from 'express';
import rota from './routes';
const app = express();

app.use(express.json());

app.use(rota);

export default app;