import React from 'react'
import StarRatings from 'react-star-ratings'

// give prop rating (#) for how many stars are filled
// give prop size ("#px") for how large you want the stars
// give prop spacing for ("#px") distance between stars

const Stars = props => {
    return (
        <StarRatings
            rating={props.rating || 3.653}
            starDimension={props.size || "20px"}
            starSpacing={props.spacing || "5px"}
            starRatedColor="black" 
            numberOfStars={5}

        />
    )
}


export default Stars;