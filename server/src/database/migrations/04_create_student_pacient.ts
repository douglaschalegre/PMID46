import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('student_pacients', table => {
        table.increments('id').primary();
      
        table.integer('student_id').notNullable()
        .references('id').inTable('students');

        table.integer('pacient_id').notNullable()
        .references('id').inTable('pacients');

        table.date('appointment').notNullable();
        table.boolean('confirmed').notNullable();
        table.boolean('done').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('student_pacients');
}