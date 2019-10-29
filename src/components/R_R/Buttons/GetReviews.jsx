import React from "react"


class GetReviews extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            count: 4
        }
        this.addReviews = this.addReviews.bind(this)
    }

    addReviews(id){
        this.props.addReviews(id, 1, this.state.count)
        const obj = {page: this.state.count + 2}
        this.setState(obj)
    }
    render() {
        return (
            <button className="review-button" onClick={() => this.addReviews(this.props.id)}>More Reviews</button>
        )
    }
}

export default GetReviews