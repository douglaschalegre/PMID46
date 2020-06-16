import { Request, Response } from 'express';
import knex from '../database/connection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/auth';

class loginsController {
    async admin(request: Request, response: Response) {
      const {
        user,
        pwd
      } = request.body;

      const admin = await knex('admin')
          .select('admin.*')
          .where('email', user)
          .first();
      
      if(!await bcrypt.compare(pwd, admin.password)){
        return response.status(400).send({ auth: false, error: 'Invalid user or password' });
      }

      const id = admin.id;
      const token = jwt.sign({id}, config.jwtSecret, {
        expiresIn: 3600
      })
      return response.json({
        auth: true,
        token: token
      });
    }

    async student(request: Request, response: Response) {
      const {
        user,
        pwd
      } = request.body;

      const students = await knex('students')
          .select('students.*')
          .where('email', user)
          .first();
      
      if(!await bcrypt.compare(pwd, students.password)){
        return response.status(400).send({ auth: false, error: 'Invalid user or password' });
      }

      const id = students.id;
      const token = jwt.sign({id}, config.jwtSecret, {
        expiresIn: 3600
      })
      return response.json({
        auth: true,
        token: token
      });
    }

    async psadmin(request: Request, response: Response) {
      const {
        user,
        pwd
      } = request.body;

      const psadmin = await knex('psadmin')
          .select('psadmin.*')
          .where('email', user)
          .first();
      
      if(!await bcrypt.compare(pwd, psadmin.password)){
        return response.status(400).send({ auth: false, error: 'Invalid user or password' });
      }
      const id = psadmin.id;
      const token = jwt.sign({id, user}, config.jwtSecret, {
        expiresIn: 3600
      })

      return response.json({
        auth: true,
        token: token
      });
    }
    
}

export default loginsController; 