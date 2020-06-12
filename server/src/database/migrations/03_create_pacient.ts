import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('pacient', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('specialization').notNullable();
        table.string('phone').notNullable();
        table.string('tooth').notNullable();
        table.string('details');
        
        table.integer('created_by').notNullable()
        .references('id').inTable('psadmin');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('pacient');
}