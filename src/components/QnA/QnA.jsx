import React, { useState, useEffect } from "react";
import QuestionsList from "./QuestionsList";
import Search from "./SearchBar/Search";
import "./style.css";

// export class QnA extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			searchStr: "",
// 			questionsCount: 4,
// 			questionsStartingIndex: 0,
// 			displayedQuestions: [],
// 			filteredQuestions: [],
// 		};

// 	// function to filter questions onm search
// 	// function to populate displayed
// 	// handle submit for search form
// 	// update Questions
// }

const QnA = (props) => {
	const [displayedQuestions, updateDisplayedQuestions] = useState([
		props.questions.results,
	]);

	useEffect(() => {
		updateDisplayedQuestions(props.questions.results.slice(0, 4));
	}, [props.questions.results]);

	const showMoreOnClick = () => {
		if (props.questions.results.length > displayedQuestions.length) {
			updateDisplayedQuestions(
				displayedQuestions.concat(
					props.questions.results.slice(
						displayedQuestions.length,
						displayedQuestions.length + 2,
					),
				),
			);
		} else {
			console.log("no more questions");
		}
	};
	return (
		<div className="qNaContainer">
			<br />
			<h5 className="qNaContainer_title">QUESTIONS & ANSWERS</h5>
			<Search />
			<QuestionsList
				questions={displayedQuestions}
				showMore={showMoreOnClick}
			/>
		</div>
	);
};

export default QnA;
