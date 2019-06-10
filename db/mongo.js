const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost:27017/amazincdc');


let schema = mongoose.Schema({
    id: Number,
    revTitle: String,
    revName: String,
    revBody: String,
    revDate: Date,
    stars: Number,
})


const createFakeReviews = (id) => ({
    id: id,
    revTitle: faker.lorem.sentence(),
    revName: faker.name.findName(),
    revBody_id: faker.lorem.paragraph(),
    revDate: faker.date.past(),
    stars: Math.floor(Math.random() * 5)
});

const Review = mongoose.model('Reviews', schema);

const createReviewMongo = () => {
    const desiredFakeReviews = 10;
    for(let i = 1; i <= desiredFakeReviews; i++) {
        Review.insertOne(createFakeReviews(), (err) => {
          if(err) {
            console.log('error inserting data', err);
          } 
        })
    }
}





createReviewMongo();


