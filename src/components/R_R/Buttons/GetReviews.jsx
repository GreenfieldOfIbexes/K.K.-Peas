import React from "react"


class GetReviews extends React.Component {
    constructor(props){
        super(props)
        
        this.addReviews = this.addReviews.bind(this)
        this.collapse = this.collapse.bind(this)
    }

    addReviews(id){
        var count = this.props.reviewCount + 2
        if(count > this.props.reviews.length){
            count = this.props.reviews.length
        }
        this.props.updateCount(count)
    }

    collapse(id){
        this.props.updateCount()
        this.props.addReviews(id)
    }


    render() {
        return (
            <>
            {(this.props.reviews.length > this.props.reviewCount) ? <div className="review-button review-button-style" onClick={() => this.addReviews(this.props.id)}>More Reviews</div> : <div className="review-button-style" style={{border: 'none', cursor: 'default'}}/> }
            {(this.props.reviewCount > 2) ? <div className="review-button review-button-style" onClick={() => this.collapse(this.props.id)}>Collapse</div> : <div/>}
            </>
        )
    }
}

export default GetReviews