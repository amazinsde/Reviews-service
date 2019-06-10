const faker = require('faker');


const createFakeBody = () => ({
  revBody: faker.lorem.paragraph()
})

const createFakeReviews = (id) => ({
  revTitle: faker.lorem.sentence(),
  revName: faker.name.findName(),
  revBody_id: id,
  revDate: faker.date.past(),
  stars: Math.floor(Math.random() * 5)
})

exports.seed = async function(knex, Promise) {
  const desiredFakeReviews = 1000000;
  
  for (let i = 0; i < desiredFakeReviews; i++) {
    await knex('body')
      .insert(createFakeBody())
      .returning('id')
      .then(function(response) {
        return knex('reviews')
         .insert(createFakeReviews(response[0]));
      })
  }
}


// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
