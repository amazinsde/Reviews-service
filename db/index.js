// require('dotenv').config(); 

// const knex = require('knex')({
//   client: 'pg',
//   connection: process.env.DATABASE_URL
// });

// const getReview =  (reviewId) => {
//   return knex('reviews').join('body', 'reviews.revBody_id', 'body.id').select().where({'reviews.id' : reviewId })
//    .catch(err => {
//      console.log('there is an error', err)
//    })
// }

// const createReview = () => {
//   await knex('body')
//       .insert(createFakeBody())
//       .returning('id')
//       .then(function(response) {
//         return knex('reviews')
//          .insert(createFakeReviews(response[0]));
//   })
// }



// const updateReview = () => {

// }

// const deleteReview = () => {

// }

// knex('users')
//   .join('contacts', 'users.id', '=', 'contacts.user_id')
//   .select('users.id', 'contacts.phone')


// knex("users")
//         .insert({ first_name: "John", last_name: "Doe" })
//         .exec(function (err, id) {
//             knex("groups")
//                 .insert({ name: "Cool Group" })
//                 .exec(function (err, id) {
//                     // handle results
//                 });
//         });

// module.exports = {
//   getReview: getReview,
//   // createReview: createReview,
//   // updateReview: updateReview,
//   // deleteReview: deleteReview,
// }

// const knex = require('knex')({ 
//   client: 'pg', 
//   connection: { 
//     host: process.env.DB_HOST, 
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD, 
//     database: process.env.DB_NAME
//   }
// }); 

// const getOneRev = (reviewUUID) => {  
//   // console.log(reviewUUID, `log from db side`);
//   return knex('review').where({ 
//     uuid: reviewUUID
//     }).select()
//     // .then(() => console.log())
//     .catch((err => err))
// } 

// module.exports = { getOneRev }



//