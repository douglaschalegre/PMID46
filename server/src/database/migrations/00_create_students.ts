import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('students', table => {

        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('address');
        table.integer('adressNumber');
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.string('registration').unique().notNullable();
        table.string('phone').notNullable();
        table.string('email').notNullable();
        
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('students');
}