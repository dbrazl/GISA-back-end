import express, { Express } from 'express';
import routes from './routes';

const PORT = process.env.PORT || 3002;

const app: Express = express();

app.use(express.json());
app.use(`/`, routes);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));