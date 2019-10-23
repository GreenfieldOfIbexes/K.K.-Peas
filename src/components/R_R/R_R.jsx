import React from 'react'
import ReviewList from './ReviewList.jsx'
import SummaryContainer from '../containers/ReviewSummaryContainer.js'
import {Container, Row, Col} from 'react-bootstrap'

const R_R = () => (
    <div id="R_R">
        <Container>
            <Row>
                <Col>
                    <SummaryContainer />
                </Col>
                <Col>
                    <ReviewList />
                </Col>
            </Row>
        </Container>
    </div>
)

export default R_R;