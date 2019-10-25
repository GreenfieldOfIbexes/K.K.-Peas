import React from 'react'
import Stars from '../Stars.jsx'
import './Review.css'
import {Col} from 'react-bootstrap'

const Review = props => {
    if(typeof props.review === 'string'){
        return (
            <div className="no-reviews">
                {props.review}
            </div>
        )
    }
    return (
        <>
        <Col lg={10}>
            <Stars rating={props.review.rating} />
        </Col>
        <Col lg={5}>
            {props.review.reviewer_name, props.review.date}
        </Col>
        </>
            
        
    )
}

export default Review