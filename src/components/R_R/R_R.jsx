import React from 'react'
import ReviewList from './ReviewList.jsx'
import SummaryContainer from '../../containers/ReviewSummaryContainer.js'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const R_R = () => (
    <div id="R_R">
        <Container>
            <Row>
                <Col md={10}>
                    <SummaryContainer />
                </Col>
                <Col md="auto">
                    <ReviewList />
                </Col>
            </Row>
        </Container>
    </div>
)

export default R_R;