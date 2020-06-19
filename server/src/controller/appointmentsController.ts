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
            appointment,
        } = request.body;
        const confirmed = false;
        const done = false;

        const trx = await knex.transaction();

        const appointmentx = {
            student_id,
            pacient_id,
            appointment,
            confirmed,
            done
        }
        console.log(appointmentx)
        const insertedAppointment = await trx('student_pacients').insert(appointmentx);
        const pacientUpdate = await trx('pacients')
        .where('id', pacient_id)
        .update({
            taken: true
        })
        await trx.commit();

        return response.json({pacientUpdate, insertedAppointment});
    }

    async confirm(request: Request, response: Response) {
        
        const {
            appointment_id,
        } = request.body;

        const appointment = await knex('student_pacients')
        .where('id', appointment_id)
        .update({
            confirmed: true
        })

        return response.json({appointment});
    }

    async done(request: Request, response: Response) {
        
        const {
            appointment_id,
        } = request.body;

        const appointment = await knex('student_pacients')
        .where('id', appointment_id)
        .update({
            done: true
        })

        return response.json({appointment});
    }
}

export default appointmentsController;