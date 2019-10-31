import React from 'react'
import Review from './Review.jsx'
import './Review.css'

class ReviewList extends React.Component{
    render() {
        if(!this.props.reviews.results){
            return (
                <div className="no-review" style={{display: 'flex', justifyContent: "center", width: '100%'}}>
                    No Reviews
                </div>
            )
        } else {
           
    return (
        <div className="reviews">
            {this.props.reviews.results.map((review) =>{
                return <Review key={review.review_id} review={review}/>
            })}
        </div>
    )
    }
}
}

export default ReviewList;