import React from 'react'
import StarRatings from 'react-star-ratings'
import {DEFAULT_RATING, DEFAULT_SIZE, DEFAULT_SPACING} from "./constants.js.js"

// give prop rating (#) for how many stars are filled
// give prop size ("#px") for how large you want the stars
// give prop spacing for ("#px") distance between stars

const Stars = props => {
    return (
        <StarRatings
            rating={props.rating || DEFAULT_RATING}
            starDimension={props.size || DEFAULT_SIZE}
            starSpacing={props.spacing || DEFAULT_SPACING}
            starRatedColor="black" 
            numberOfStars={5}

        />
    )
}


export default Stars;