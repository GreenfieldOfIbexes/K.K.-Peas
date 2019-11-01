import React, { useState, useEffect } from "react";
import QuestionsList from "./QuestionsList";
import Search from "./SearchBar/Search";
import "./style.css";

const QnA = (props) => {
	const [displayedQuestions, updateDisplayedQuestions] = useState([
		props.questions.results,
	]);
	const [filteredQuestion, updateFilteredQuestions] = useState([]);

	useEffect(() => {
		updateDisplayedQuestions(props.questions.results.slice(0, 4));
	}, [props.questions.results]);

	const showMoreQuestionsOnClick = () => {
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
			<Search
				filteredQuestion={filteredQuestion}
				allQuestions={props.questions.results}
				updateFilteredQuestions={updateFilteredQuestions}
				displayedQuestions={displayedQuestions}
				updateDisplayedQuestions={updateDisplayedQuestions}
			/>
			<QuestionsList
				questions={displayedQuestions}
				showMoreQuestions={showMoreQuestionsOnClick}
			/>
		</div>
	);
};

export default QnA;
