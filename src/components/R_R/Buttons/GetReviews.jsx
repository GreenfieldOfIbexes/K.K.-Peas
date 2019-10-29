import React from "react"


class GetReviews extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            count: 2
        }
        this.addReviews = this.addReviews.bind(this)
        this.collapse = this.collapse.bind(this)
    }

    addReviews(id){
        this.props.addReviews(id, 1, this.state.count + 2)
        const obj = {count: this.state.count + 2}
        this.setState(obj)
    }

    collapse(id){
        this.props.addReviews(id, 1, 2)
        this.setState({
            count: 2
        })
    }


    render() {
        return (
            <>
            <button className="review-button" onClick={() => this.addReviews(this.props.id)}>More Reviews</button>
            {(this.state.count) ? <button className="review-button" onClick={() => this.collapse(this.props.id)}></button>}
            </>
        )
    }
}

export default GetReviews