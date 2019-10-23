import React from "react"
import './Gauge.css'

const Gauge = props => {
    return(
        <div className="gauge">
            <div className="triangle" style={{left: props.percent || "60%", top: '-10px'}}/>
            <div className="rectangle" />
        </div>
    )
}


export default Gauge