import React from 'react'
import Review from './Review.jsx'

class ReviewList extends React.Component{
    render() {
        if(this.props.reviews.results === undefined){
            var review='no reviews'
        } else {
            var review = this.props.reviews.results[0]
        }
    return (
        <div>
            <Review review={review}/>
        </div>
    )
    }
}

export default ReviewList;