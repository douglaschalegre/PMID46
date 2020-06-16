import { Request, Response } from 'express';
import knex from '../database/connection';
import bcrypt from 'bcrypt';


class adminsController {
    async login(request: Request, response: Response) {
      const {
        user,
        pwd
      } = request.body;

      const admin = await knex('admin')
          .select('admin.*')
          .where('email', user)
          .first();
 
      if(!await bcrypt.compare(pwd, admin.password)){
        return response.status(400).send({ error: 'Invalid user or password' });
      }
      return response.json();
    }
}

export default adminsController; 