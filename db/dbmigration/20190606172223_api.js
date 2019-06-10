
exports.up = function(knex, Promise) {
  return knex.schema.createTable('body', table => {
      console.log('hi');
      table
       .increments('id')
       .primary()
       .notNullable()
      table 
       .text('revBody')
  }).createTable('reviews', table => {
      table
      .increments('id')
      .primary()
      .notNullable()
      table
      .string('revTitle')
      .notNullable()
      table
      .text('revName')
      .notNullable()
      table
      .integer('revBody_id')
      .unique()
      .references('body.id')
      table
      .date('revDate')
      .notNullable()
      table
      .integer('stars')
      .unsigned()
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTalbe('body')
    .dropTalbe('reviews')
};
