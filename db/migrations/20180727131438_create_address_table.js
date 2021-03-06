
exports.up = function(knex, Promise) {
  return knex.schema.createTable('listing_addresses', function(table) {
    table.increments('id').primary();
    table.string('street', 100);
    table.string('city', 100);
    table.string('province', 100);
    table.string('postal_code', 100);
    table.integer('listings_id');
    table.foreign('listings_id').references('listings.id');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('listing_addresses');
};
