import React, { Component } from "react";
import Question from "./Question";
import Search from "./SearchBar/Search";

export class QuestionsList extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		console.log("questionsListProps: ", this.props);
	}

	render() {
		return (
			<div className="questionsList_container">
				{this.props.questions.map((question, index) => {
					return <Question key={index} question={question} />;
				})}
			</div>
		);
	}
}

export default QuestionsList;
