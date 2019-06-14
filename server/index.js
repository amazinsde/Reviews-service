require('newrelic');
require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express(); 
const cors = require('cors');
const port = process.env.PORT || 4000; 


const db = require('../db/index.js');
const dbMongo = require('../db/mongo.js');

app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/api/reviews', (req, res) => { 
//   res.send(`Hiiiiiiiiiiii`) 
// })

// app.get('/oneReview/:id', (req, res) => {
//   const reviewId = parseInt(req.params.id);
//   dbMongo.getReviewsMongoDb(reviewId, (err, reviews) => {
//     if(err) {
//       console.log('ERROR IN SERVER', err);
//     } else {
//       console.log('Response in server with MONGO', reviews) 
//       res.send(reviews);     
//     }
//   })
// });


app.get('/oneReview/:id', (req, res) => { 
  const reviewId = req.params.id;
  console.log('here is the reviewId', reviewId)
  // console.log(reviewUUID, `log on server side`)
  db.getReview(reviewId) 
  // console.log(reviewUUID) 
    .then(reviews => { 
      res.send(reviews)
      // console.log(reviews, `reviews on server`)
    })
    .catch(err => console.log(err, `err retrieving reviews`))
});

app.listen(port, () => { console.log(`listening at port ${port}`)});