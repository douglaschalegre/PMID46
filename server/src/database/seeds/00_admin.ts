import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('admin').insert([
        { 
        name: 'Douglas',
        phone:'8298214848',
        email:'douglas@email.com',
        password: 'password'
      },
   

    ]);
};