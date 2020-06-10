import { Request, Response } from 'express';
import knex from '../database/connection';

class studentsController {
    async index(request: Request, response: Response) {
        const students = await knex('students')
            .select('students.name')
            .select('students.registration')
            .select('students.email');
        return response.json(students);
    }

    async show(request: Request, response: Response) {
        const { registration } = request.params;
        const students = await knex('students').where('registration', registration)
        .select('students.id')
        .select('students.name')
        .select('students.address')
        .select('students.adressNumber')
        .select('students.city')
        .select('students.uf')
        .select('students.registration')
        .select('students.phone')
        return response.json(students);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            address,
            adressNumber,
            city,
            uf,
            registration,
            phone,
            email
        } = request.body;
        const password = registration

        const student = {
            name,
            address,
            adressNumber,
            city,
            uf,
            registration,
            phone,
            email,
            password
        }

        const insertedStudent = await knex('students').insert(student);

        return response.json(student);
    }
}

export default studentsController;