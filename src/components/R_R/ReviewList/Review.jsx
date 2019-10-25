import React from 'react'
import Stars from '../Stars.jsx'
import './Review.css'


const Review = props => {
    return (
        <>
        <div key={props.review.product_id} className='review-header-container'>
            <div>
                <Stars rating={props.review.rating} />
            </div>
            <div>
                {props.review.reviewer_name}, {props.review.date}
            </div>
        </div>
        <div className="review-title">
            {props.review.summary}
        </div>
        <div className="review-description">
            {props.review.body}
        </div>
        <div className="review-line" />
        </>
            
        
    )
}

export default Review