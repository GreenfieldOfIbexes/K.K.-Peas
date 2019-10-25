import React, { Component } from "react";
import Search from "./SearchBar/Search.jsx";
import QuestionsContainer from "../../containers/questionsListContainer.js";
import "./style.css";

export class QnA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<div className="qNaErrorContainer">
					<br />
					<h5 className="qNaErrorContainer_error">
						Something went wrong with the search bar.
					</h5>
					<h5>QUESTIONS AND ANSWERS</h5>
					<QuestionsContainer />
				</div>
			);
		}

		return (
			<div className="qNaContainer">
				<br />
				<h5 className="qNaContainer_title">QUESTIONS AND ANSWERS</h5>
				<Search />
				<QuestionsContainer />
			</div>
		);
	}
}

export default QnA;
