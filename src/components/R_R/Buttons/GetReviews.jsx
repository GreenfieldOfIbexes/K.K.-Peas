import React from "react"


function getreviews() {
    await dispatch(getReviews)
}

const GetReviews = props => {

    return (
        <button className="review-button" onClick={this.getReviews}>More Reviews</button>
    )
}

export default GetReviews