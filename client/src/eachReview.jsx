import React from 'react'; 
import { convertDate } from '../helpers/helperFuncs'; 
import StarRatings from 'react-star-ratings'; 
import styles from '../../public/Reviews.css'

const  EachReview = ({ review = {} }) => { 
  // review.formattedDate = convertDate(review.revDate); 
  // console.log(review.revDate, 'hello');
  // console.log(review.revBody_id, 'review two');

  return (
  <div className={styles.EachReview}>
    <div className={styles.avatarRow}>
      <img className={styles.revAvatars} src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" ></img>
      <div className={styles.revName}> {review.revName} </div>
    </div>
    <div className={styles.ratingRow}>
      <StarRatings
        rating={review.stars} 
        starRatedColor='#ffa700'
        numberOfStars={5}
        name='rating'
        starDimension='15px'
        starSpacing='0px'
      /><span className={styles.revTitle}> {review.revTitle} </span>
    </div>
    {/* <div className={styles.revDate}> {review.formattedDate} </div> */}
    <p className={styles.revBody}> {review.revBody} </p>
  </div >);
}; 

export default EachReview; 