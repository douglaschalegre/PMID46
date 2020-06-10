import express from 'express';
import {celebrate, Joi} from 'celebrate';

import StudentsController from './controller/studentsController';

const routes = express.Router();

const studentsController = new StudentsController();

routes.post('/criarAluno',
 celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      address: Joi.string().required(),
      adressNumber: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      registration: Joi.string().required(),
      phone: Joi.string().required(),
      email: Joi.string().required(),
   })
 },{
   abortEarly: false
 }) ,studentsController.create);

routes.get('/index', studentsController.index);
routes.get('/index/:registration', studentsController.show);
 
export default routes