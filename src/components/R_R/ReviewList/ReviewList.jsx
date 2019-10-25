import React from 'react'
import Review from './Review.jsx'
import './Review.css'

class ReviewList extends React.Component{
    render() {
        if(this.props.reviews.results === undefined){
            return (
                <div className="no-review">
                    No Reviews
                </div>
            )
        } else {
            var review = this.props.reviews.results[0]
        }
    return (
        <div className="reviews">
            {this.props.reviews.results.map((review) =>{
                return <Review review={review}/>
            })}
        </div>
    )
    }
}

export default ReviewList;