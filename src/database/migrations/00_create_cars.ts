import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('cars', table => {
    table.increments('id').primary();
    table.string('placa').notNullable();
    table.string('chassi').notNullable();
    table.string('renavam').notNullable();
    table.string('modelo').notNullable();
    table.decimal('marca').notNullable();
    table.decimal('ano').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('cars');
}

