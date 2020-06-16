import { Request, Response } from 'express';
import knex from '../database/connection';

class appointmentsController {
    async index(request: Request, response: Response) {
      
      const student_pacients = await knex('student_pacients')
          .select('student_pacients.*')
          .where('student_id',)
      return response.json(student_pacients);
    }

    async create(request: Request, response: Response) {
        

        return response.json();
    }
}

export default appointmentsController;