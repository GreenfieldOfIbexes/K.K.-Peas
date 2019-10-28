import React from 'react'
import Review from './Review.jsx'
import './Review.css'

class ReviewList extends React.Component{
    render() {
        console.log('inside list: ', this.props)
        if(!this.props.reviews.reviews){
            return (
                <div className="no-review" style={{display: 'flex', justifyContent: "center", width: '100%'}}>
                    No Reviews
                </div>
            )
        } else {
           
    return (
        <div className="reviews">
            {this.props.reviews.reviews.results.map((review) =>{
                return <Review review={review}/>
            })}
        </div>
    )
    }
}
}

export default ReviewList;