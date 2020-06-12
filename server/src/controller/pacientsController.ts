import { Request, Response } from 'express';
import knex from '../database/connection';

class pacientsController {
    async index(request: Request, response: Response) {
        const pacients = await knex('pacients')
            .select('pacients.*');
        return response.json(pacients);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const pacients = await knex('pacients').where('id', id);
        return response.json(pacients);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            specialization,
            phone,
            tooth,
            details,
            created_by
        } = request.body;

        const pacient = {
          name,
          specialization,
          phone,
          tooth,
          details,
          created_by
        }

        await knex('pacients').insert(pacient);

        return response.json(pacient);
    }
}

export default pacientsController;