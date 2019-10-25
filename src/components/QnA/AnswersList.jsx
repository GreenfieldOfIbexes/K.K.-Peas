import React, { Component } from "react";
import Answer from "./Answer.jsx";

export class Answers extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.arrayfyObject = this.arrayfyObject.bind(this);
	}

	arrayfyObject(obj) {
		return Object.entries(obj);
	}

	render() {
		return (
			<div className="answersList_container">
				{this.arrayfyObject(this.props.answers).map((answer, index) => {
					return <Answer key={index} answer={answer[1]} />;
				})}
			</div>
		);
	}
}

export default Answers;
