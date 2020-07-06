import express from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import morgan from 'morgan';
import { errors } from 'celebrate';

import routes from './routes'
const app = express();
const acessLogStream = fs.createWriteStream(path.join(__dirname, 'acess.log'), {flags: 'a'})
app.use(morgan('common', {stream: acessLogStream}))
app.use(express.json());
app.use(cors());
app.use(routes);

app.use(errors());   

export default app;