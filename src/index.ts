import express, { Express, Request, Response } from 'express';

import logger from './services/logger.service'
import morganMiddleware from './middlewares/morgon.middleware';
import config from './config/config';


const app: Express = express();

app.use(morganMiddleware);
app.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript Server');
});

app.listen(config.PORT, () => {
  logger.debug(`⚡️[server]: Server is running at https://localhost:${config.PORT}`);
  logger.info(process.env.NODE_ENV);
});
