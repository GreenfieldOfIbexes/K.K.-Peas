import React, { Component } from "react";
import AnswersList from "./AnswersList";

export class Question extends Component {
	render() {
		return (
			<div className="questionsContainer">
				<p className="questionsContainer_question">
					Q: {this.props.question.question_body}
				</p>
				<AnswersList answers={this.props.question.answers} />
			</div>
		);
	}
}

export default Question;
