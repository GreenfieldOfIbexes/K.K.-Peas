import React from 'react'
import ReviewListContainer from '../../containers/R_R/ReviewListContainer.js'
import SummaryContainer from '../../containers/R_R/ReviewSummaryContainer.js'
import {Container, Row, Col} from 'react-bootstrap'

const R_R = () => (
	<div id="R_R">
		<Container>
			<Row>
				<Col md={10}>
					<SummaryContainer />
				</Col>
				<Col md="auto">
					<ReviewListContainer />
				</Col>
			</Row>
		</Container>
	</div>
);

export default R_R;
