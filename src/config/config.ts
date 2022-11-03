import dotenv from 'dotenv';
import path from 'path';
import { ENV_CONSTANTS } from '../utils/constants/app.const'

const env = process.env.NODE_ENV?.trim();
dotenv.config({
  path: path.resolve(env === ENV_CONSTANTS.PRODUCTION ?
    `./dist/${env}.env` : `${env}.env`)
});

const config = {
    NODE_ENV: process.env.NODE_ENV || ENV_CONSTANTS.DEVELOPMENT,
    PORT: process.env.PORT || ENV_CONSTANTS.PORT,
    HOST: process.env.HOST || ENV_CONSTANTS.LOCALHOST,

}

export default config;