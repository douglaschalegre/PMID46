import {Request, Response} from 'express';
import knex from '../database/connection';

class collectsController {
    async index (request: Request, response: Response) {
        
        return response.json();
    }

    async show (request: Request, response: Response) {
       
        return response.json({});
    }

    async create (request: Request, response: Response) {
        
        return response.json()
    }
}

export default studentsController;