import React, { Component } from "react";

export class Answer extends Component {
	render() {
		return (
			<div>
				<p>A: {this.props.answer.body}</p>
			</div>
		);
	}
}

export default Answer;
