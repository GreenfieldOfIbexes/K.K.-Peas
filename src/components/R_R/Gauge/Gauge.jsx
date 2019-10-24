import React from "react"
import './Gauge.css'

const Gauge = props => {
    const percent = "" + (props.value / 5) * 100 + "%"
    return(
        <>
        <h6>{props.characteristic}</h6>
        <div className="labels">
            {props.labels.map((label) => {
                return <div className="label" >{label}</div>
            })}
        </div>
        <div className="gauge">
            <div className="triangle" style={{left: percent || "60%"}}/>
            <div className="rectangle" />
        </div>
        </>
    )
}


export default Gauge