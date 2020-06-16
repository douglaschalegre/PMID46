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
        
        const {
            pacient_id,
            student_id,
            date,
        } = request.params;
        const confirmed = false;
        const done = false;

        const trx = await knex.transaction();

        const appointment = {
            student_id,
            pacient_id,
            date,
            confirmed,
            done
        }

        const insertedAppointment = await trx('student_pacients').insert(appointment);
        const pacientUpdate = await trx('pacients')
        .where('id', pacient_id)
        .update({
            taken: true
        })
        await trx.commit();

        return response.json({pacientUpdate, insertedAppointment});
    }
}

export default appointmentsController;