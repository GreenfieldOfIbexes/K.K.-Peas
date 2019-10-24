import React, { Component } from "react";
import Question from "./Question";
// import productQuestions from "../../reducers/questions";

export class QuestionsList extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		console.log("props: ", this.props);
	}

	render() {
		console.log("productQ: ", this.props.productQuestions);
		return (
			<div>
				<h1>A list of all questions!</h1>
				<p>{this.props.productQuestions[0].question_body}</p>
			</div>
		);
	}
}

export default QuestionsList;
