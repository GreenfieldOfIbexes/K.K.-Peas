import React, { Component } from "react";
import QuestionsContainer from "../../containers/Questions/questionsListContainer.js";
import "./style.css";

export class QnA extends Component {
	render() {
		return (
			<div className="qNaContainer">
				<br />
				<h5 className="qNaContainer_title">QUESTIONS & ANSWERS</h5>
				<QuestionsContainer />
			</div>
		);
	}
}

export default QnA;
