import express from 'express';
import {celebrate, Joi} from 'celebrate';
import passport from 'passport';

import StudentsController from './controller/studentsController';
import PacientsController from './controller/pacientsController';

const routes = express.Router();

const studentsController = new StudentsController();
const pacientsController = new PacientsController();


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
routes.get('/Alunos', studentsController.index);
routes.get('/Alunos/:registration', studentsController.show);

routes.post('/criarPaciente',
celebrate({
   body: Joi.object().keys({
     name: Joi.string().required(),
     specialization: Joi.string().required(),
     tooth: Joi.string().required(),
     details: Joi.string(),
     phone: Joi.string().required(),
     created_by: Joi.number().required()
  })
},{
  abortEarly: false
}) ,pacientsController.create);
routes.get('/Pacientes', pacientsController.index);
routes.get('/Pacientes/:id', pacientsController.show);

export default routes