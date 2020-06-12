import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('psadmin').insert([
        { 
        name: 'Douglas do posto de saúde',
        phone:'8298214848',
        email:'douglasps@email.com',
        password: 'password'
      },
   

    ]);
};