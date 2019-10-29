import React, { Component } from "react";
import Question from "./Question";
import Buttons from "./Buttons";

export class QuestionsList extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="questionsList_container">
				{this.props.questions.map((question, index) => {
					return <Question key={index} question={question} />;
				})}
				<Buttons />
			</div>
		);
	}
}

export default QuestionsList;
