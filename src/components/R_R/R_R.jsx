import React from 'react'
import ReviewListContainer from '../../containers/R_R/ReviewListContainer.js'
import SummaryContainer from '../../containers/R_R/ReviewSummaryContainer.js'
import {Container, Row, Col} from 'react-bootstrap'
import './R_R.css'

const R_R = () => (
	<div id="R_R">
		<div className="summary-container">
			<SummaryContainer />	
		</div>
		<div className="list-container">
			<ReviewListContainer />
		</div>
	</div>
);

export default R_R;