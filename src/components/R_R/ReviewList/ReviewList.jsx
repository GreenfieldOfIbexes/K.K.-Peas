import React from 'react'
import Review from './Review.jsx'
import {Row} from 'react-bootstrap'

class ReviewList extends React.Component{
    render() {
        if(this.props.reviews.results === undefined){
            var review='no reviews'
        } else {
            var review = this.props.reviews.results[0]
        }
    return (
        <Row className="justify-content-md-space-between">
            <Review review={review}/>
        </Row>
    )
    }
}

export default ReviewList;