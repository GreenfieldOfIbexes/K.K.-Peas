import React from 'react'
import Stars from '../Stars.jsx'
import './Review.css'

const Review = props => {
    if(typeof props.review === 'string'){
        return (
            <div className="no-reviews">
                {props.review}
            </div>
        )
    }
    return (
        <div>
            <div className="review-header">
                <Stars rating={props.review.rating} />
            </div>
            <div className="review-header">
                {props.review.reviewer_name}, {props.review.date}
            </div>
        </div>
    )
}

export default Review