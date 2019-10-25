import React, { Component } from "react";

export class Answer extends Component {
	render() {
		return (
			<div className="answerContainer">
				<p className="answerContainer_answer">
					<span className="answer_a">A:</span> {this.props.answer.body}
				</p>
			</div>
		);
	}
}

export default Answer;
