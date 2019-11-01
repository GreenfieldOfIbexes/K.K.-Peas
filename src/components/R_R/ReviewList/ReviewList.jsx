import React from 'react'
import Review from './Review.jsx'
import './Review.css'

class ReviewList extends React.Component{
    render() {
        var reviews = []
        for(var i = 0;i < this.props.reviewCount; i++){
            reviews.push(this.props.reviews[i])
        }
        if(!this.props.reviews[0]){
            return (
                <div className="no-review" style={{display: 'flex', justifyContent: "center", width: '100%'}}>
                    No Reviews
                </div>
            )
        } else {
           
    return (
        <div className="reviews">
            {reviews.map((review) =>{
                if(review !== undefined){
                    return <Review key={review.review_id} review={review}/>
                }
            })}
        </div>
    )
    }
}
}

export default ReviewList;