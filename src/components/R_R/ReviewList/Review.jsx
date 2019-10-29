import React from 'react'
import Stars from '../Stars.jsx'
import Helpful from './Helpful.jsx'
import Report from './Report.jsx'
import './Review.css'


const Review = props => {
    return (
        <>
        <div className='review-header-container'>
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
        <div className="footer">
            <div className="helpful">
                <Helpful review={props.review}/>
            </div>
            <div className="report">
                <Report review={props.review}/>
            </div>
        </div>
        <div className="review-line" />
        </>
    )
}

export default Review