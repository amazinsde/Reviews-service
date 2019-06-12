const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/amazincdc', { useNewUrlParser: true });

let schema = mongoose.Schema({
    id: Number,
    revTitle: String,
    revName: String,
    revBody: String,
    revDate: Date,
    stars: Number,
});

const createFakeReviews = (id) => ({
    id: id,
    revTitle: faker.lorem.sentence(),
    revName: faker.name.findName(),
    revBody_id: faker.lorem.paragraph(),
    revDate: faker.date.past(),
    stars: Math.floor(Math.random() * 6)
});

const Review = mongoose.model('reviews', schema);

// const records = [
//     {id: 'Bob',  revTitle: 'French, English', revName:},
//     {name: 'Mary', lang: 'English'}
// ];

const createReviewMongo = async () => {
    let idNumber = 9000001;
    
    const desiredFakeReviews = 1000000;

    for(let i = 1; i <= desiredFakeReviews; i++) {
      await createMongoosePromise(idNumber);
      idNumber = idNumber + 1;    
      
      if(i === desiredFakeReviews) {
        mongoose.connection.close();
      }
    }
}

let createMongoosePromise = (id) => {
  return new Promise ((resolve, reject) => {
    Review.create(createFakeReviews(id), (err) => {

      if(err) {
        reject(err);
      } else {
        resolve('data is inserted')
      }
    });
  });
}





createReviewMongo();




// Review.create(createFakeReviews(idNumber), (err) => {
//     if(err) {
//       console.log('error inserting data', err);
//     } 

//     if(i === desiredFakeReviews) {
//       mongoose.connection.close();
//     }

// })