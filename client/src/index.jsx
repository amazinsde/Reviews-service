import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import EachReview from './eachReview.jsx'; 
import BarChart from './barChart.jsx'; 
import styles from '../../public/Reviews.css';
import { compareReviewRating, getAvgRating } from '../helpers/helperFuncs.js'
import axios from 'axios'; 

class Reviews extends React.Component {

  constructor(props){
    super(props) 
    this.state = { 
      uuid: null, 
      reviews: [], 
      averageRating: 0
    }

    this.handleChange = this.handleChange.bind(this);
  } 

  // , { 
  //   params: { 
  //     id: 2
  //   }

  componentDidMount() { 
    // axios.get('api/oneReview', { 
    axios.get(`/oneReview/${2}`)
    .then(reviews => { 
      // console.log(`reviews procured db!`, reviews.data[0].uuid) 
      // set default sort of topreviews.
      // reviews.data.sort(compareReviewRating); 
      // console.log(reviews.data);
      
      // console.log(getAvgRating(reviews.data));
     
      // console.log(reviews.data, 'review . data');
      console.log(reviews.data);
      this.setState({
        reviews: reviews.data, 
        uuid: reviews.data[0].uuid, 
        averageRating: getAvgRating(reviews.data),
      })
    })
    .catch(err => console.log(`error retrieving reviews`))
  } 

  componentDidUpdate(prevProps, prevState) { 
    if (this.props.uuid !== prevProps.uuid) { 
      axios.get('/oneReview', { 
        params: { 
          uuid: this.props.uuid
        }
      })
      .then(reviews => { 
        // console.log(`reviews procured db!`, reviews.data[0].uuid) 
        // set default sort of topreviews.
        reviews.data.sort(compareReviewRating);
        this.setState({ 
          reviews: reviews.data, 
          uuid: reviews.data[0].uuid
        })
      })
      .catch(err => console.log(`error retrieving reviews`))
    }
  }

  handleChange(e) { 
    if ( e.target.value === 'Most Recent') { 
      let mostRecentRevs = [].concat(this.state.reviews)
      mostRecentRevs.sort((a,b)=> new Date(b.revDate).getTime() - new Date(a.revDate).getTime());
      // console.log(mostRecentRevs);
      this.setState({ 
        reviews: mostRecentRevs
      });
    } else { 
      let topReviews = [].concat(this.state.reviews); 
      topReviews.sort(compareReviewRating);
      this.setState({ 
        reviews: topReviews
      });
    }
  }

  render(){  
    const { reviews, averageRating } = this.state; 
    // npm install newrelic

    return ( 
      <>
      <div className={styles.reviewsContainer}>
        <div className='barChart'>
          <BarChart averageRating={ averageRating } reviews={ reviews } />
        </div>
        
        <div>
          <h4 className={styles.reviews}> Showing 1-{reviews.length} of {reviews.length} reviews </h4>
            <div className={styles.sortForm}>
              <form>
                <select onChange={this.handleChange}> 
                  <option value='Top Reviews'>Top Reviews</option>
                  <option value='Most Recent'>Most Recent</option>
                </select>
              </form>
            </div>
              { reviews.map((review, i) => <EachReview key={i} review={review} /> )}
        </div>
      </div>
      </>
    )}

}
window.Reviews = Reviews;
// ReactDOM.render(<Reviews/>, document.getElementById('reviews'));