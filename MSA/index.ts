import express, { Express } from 'express';
import routes from './routes';

const PORT = process.env.PORT || 3003;
const API_VERSION = 'v1';

const app: Express = express();

app.use(express.json());
app.use(`/${API_VERSION}`, routes);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));