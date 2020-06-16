import Knex from 'knex';
import bcrypt from 'bcrypt';

export async function seed(knex: Knex){
    await knex('admin').insert([
        { 
        name: 'Douglas',
        phone:'8298214848',
        email:'douglas@email.com',
        password: `${await bcrypt.hash('password', 10)}`,
        role: 'admin'
      },
   

    ]);
};