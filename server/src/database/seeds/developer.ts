import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('students').insert([
        { 
        name: 'Douglas',
        address:'Rua avenida exemplo',
        adressNumber:'1517',
        city:'Maceió',
        uf:'AL',
        registration:'1171513030',
        phone:'8298214848',
        email:'douglas@email.com',
      },
      { 
        name: 'Ragazzi',
        address:'Sem teto',
        adressNumber:'0000',
        city:'Maceió',
        uf:'AL',
        registration:'1171516969',
        phone:'82999787070',
        email:'ragazzi@email.com',
      },
        

    ]);
};