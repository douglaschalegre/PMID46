import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('psadmin', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('role').notNullable();

    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('psadmin');
}