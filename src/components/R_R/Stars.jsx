import React from "react";
import StarRatings from "react-star-ratings";
import { DEFAULT_RATING, DEFAULT_SIZE, DEFAULT_SPACING } from "./constants.js";
import $ from 'jquery'
import {useEffect} from 'jquery'

// give prop rating (#) for how many stars are filled
// give prop size ("#px") for how large you want the stars
// give prop spacing ("#px") for distance between stars

const Stars = props => {
    if(props.select){
    useEffect(() => {
        $(".star-container:nth-of-type(2)").hover(function() {
            $(this).css('fill', 'red')
        })
    })
}
    return (
        <StarRatings
            rating={props.rating || DEFAULT_RATING}
            starDimension={props.size || DEFAULT_SIZE}
            starSpacing={props.spacing || DEFAULT_SPACING}
            starRatedColor="gold" 
            numberOfStars={5}
        />
    )
}

export default Stars;
