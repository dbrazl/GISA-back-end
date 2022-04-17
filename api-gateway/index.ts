import express, { Express } from 'express';
import routes from './routes';

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(`/`, routes);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));