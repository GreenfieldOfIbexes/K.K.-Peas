import React, { Component } from "react";
import SearchBar from "./SearchBar";
import QuestionsContainer from "../../containers/questionsListContainer.js";

export class QnA extends Component {
	render() {
		return (
			<div>
				<br />
				<h5>QUESTIONS AND ANSWERS</h5>
				<SearchBar />
				<QuestionsContainer />
			</div>
		);
	}
}

export default QnA;
