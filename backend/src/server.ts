import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

/*******************************************************
 * Config Express server
 *******************************************************/
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

const app = NestFactory.create(ApplicationModule, server);
app.listen(3000, () => console.log('Application is listening on port 3000.'));