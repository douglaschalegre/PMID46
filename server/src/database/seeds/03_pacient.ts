import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('pacients').insert([
        { 
        name: 'Costa',
        specialization:'dentistica',
        tooth:'11',
        details:'refugiado da cracolandia',
        phone:'8298214848',
        created_by:1,
        taken:false
      },
      { 
        name: 'Maketero',
        specialization:'dentistica',
        tooth:'7',
        details:'dentes quebrados pois tentou comer um prato, sem sucesso.',
        phone:'8299991122',
        created_by:1,
        taken:false
      },

        
    ]);
};