import React from "react"


class GetReviews extends React.Component {
    constructor(props){
        super(props)
        
        this.addReviews = this.addReviews.bind(this)
        this.collapse = this.collapse.bind(this)
    }

    addReviews(id){
        this.props.addReviews(id, 1, this.props.reviewCount + 2)
        this.props.updateCount(this.props.reviewCount + 2)
    }

    collapse(id){
        this.props.updateCount()
        this.props.addReviews(id)
    }


    render() {
        return (
            <>
            <div className="review-button review-button-style" onClick={() => this.addReviews(this.props.id)}>More Reviews</div>
            {(this.state.count > 2) ? <div className="review-button review-button-style" onClick={() => this.collapse(this.props.id)}>Collapse</div> : <div/>}
            </>
        )
    }
}

export default GetReviews