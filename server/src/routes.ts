import express from 'express';
import {celebrate, Joi} from 'celebrate';
import checkJwt from './middleware/checkJwt'

import StudentsController from './controller/studentsController';
import PacientsController from './controller/pacientsController';
import LoginsController from './controller/loginsController';
import AppointmentsController from './controller/appointmentsController';

const routes = express.Router();

const studentsController = new StudentsController();
const pacientsController = new PacientsController();
const loginsController = new LoginsController();
const appointmentsController = new AppointmentsController();

// ADMIN PAGES
routes.post('/Admin/login',
celebrate({
  body: Joi.object().keys({
    user: Joi.string().required(),
    pwd: Joi.string().required()
 })
},{}), loginsController.admin);
routes.post('/Admin/criarAluno',
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
 }), studentsController.create);
routes.get('/Admin/Alunos', studentsController.index);
routes.get('/Admin/Alunos/:registration', studentsController.show);

// ADMIN WHO CREATES THE PACIENTS
routes.post('/Psadmin/login',
celebrate({
  body: Joi.object().keys({
    user: Joi.string().required(),
    pwd: Joi.string().required()
 })
},{}), loginsController.psadmin);
routes.post('/Adminps/criarPaciente', checkJwt, 
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

// APP & ADMIN
routes.get('/Pacientes', checkJwt, pacientsController.index);
routes.get('/Pacientes/:id', checkJwt, pacientsController.show);

// STUDENTS
routes.post('/login',
celebrate({
  body: Joi.object().keys({
    user: Joi.string().required(),
    pwd: Joi.string().required()
 })
},{}), loginsController.student);
routes.post('/criarConsulta', checkJwt, appointmentsController.create);

export default routes