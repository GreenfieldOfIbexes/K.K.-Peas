import React, { Component } from "react";
import SearchBar from "./SearchBar";
import QuestionsContainer from "../../containers/questionsListContainer.js";

export class QnA extends Component {
	render() {
		return (
			<div>
				<br />
				<h2>QUESTIONS AND ANSWERS</h2>
				<SearchBar />
				<QuestionsContainer />
			</div>
		);
	}
}

export default QnA;
