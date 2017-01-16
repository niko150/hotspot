exports.up = function(knex, Promise) {

  const query = knex.schema.createTableIfNotExists('users', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').unique().notNullable()
  })

  return query

};

exports.down = function(knex, Promise) {

  const query = knex.schema.dropTableIfExists('users')
  return query

};
