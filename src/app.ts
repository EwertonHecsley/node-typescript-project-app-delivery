import express from 'express';
import rota from './routes';
import { httpErrorMiddleware } from './middleware/http.error.middleware';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use(rota);

app.use(httpErrorMiddleware);

export default app;