import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import Stars from './Stars.jsx'

class ReviewSummary extends React.Component {

    render() {
    return (
    <Container>
        <Row>
            <Col>
                {this.props.avg_review}
            </Col>
            <Col>
                <Stars rating={this.props.avg_review}/>
            </Col>
        </Row>
    </Container>
    )}
}

export default ReviewSummary