import React from "react";
import ReviewListContainer from "../../containers/R_R/ReviewListContainer.js";
import SummaryContainer from "../../containers/R_R/ReviewSummaryContainer.js";
import ButtonsContainer from "../../containers/R_R/ButtonsContainer.js";
import HeaderContainer from "../../containers/R_R/HeaderContainer.js";
import "./R_R.css";

const R_R = (props) => (
	<div
		id="R_R"
		onClick={(e) => {
			props.clickHandler(e, "R_R");
		}}>
		<div className="summary-container">
			<SummaryContainer />
		</div>
		<div className="list-container">
			<HeaderContainer />
			<ReviewListContainer />
			<div className="review-buttons-container">
				<ButtonsContainer />
			</div>
		</div>
	</div>
);

export default R_R;
