import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import './Gauge.css'

const Gauge = props => {
    return(
        <Container>
            <div className="gauge">
                <Row>
                    {/* {props.names.map((name) => { */}
                        <Col>names</Col>
                    {/* })} */}
                </Row>
                <Row>
                    <div className="triangle" style={{left: props.percent || "60%", top: '-10px'}}/>
                    <div className="rectangle" />
                </Row>
            </div>
        </Container>
    )
}


export default Gauge