import React from 'react'
import './Response.css'

const Response = props => {
    return (
        <div className="review-response">
            <div className="review-response-footer">
                Response from seller
            </div>
            <div className="review-response-text">
                {props.response}
            </div>
        </div>
    )
}

export default Response