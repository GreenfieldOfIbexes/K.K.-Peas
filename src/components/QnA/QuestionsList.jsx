import React, { Component } from "react";
import Question from "./Question";

export class QuestionsList extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="questionsList_container">
					{this.props.questions.map((question, index) => {
						return <Question key={index} question={question} />;
					})}
				</div>
			</div>
		);
	}
}

export default QuestionsList;
