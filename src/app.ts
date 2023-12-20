import express from 'express';
import 'express-async-errors';
import rota from './routes';
import { httpErrorMiddleware } from './middleware/http.error.middleware';

const app = express();

app.use(express.json());

app.use(rota);

app.use(httpErrorMiddleware);

export default app;