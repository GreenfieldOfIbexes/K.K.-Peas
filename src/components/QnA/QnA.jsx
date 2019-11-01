import React, { useState, useEffect } from "react";
import QuestionsList from "./QuestionsList";
import Search from "./SearchBar/Search";
import "./style.css";

const QnA = (props) => {
	const [displayedQuestions, updateDisplayedQuestions] = useState([
		props.questions.results,
	]);
	const [filteredQuestion, updateFilteredQuestions] = useState([]);
	const [sortedQuestion, updateSortedQuestions] = useState([]);

	useEffect(() => {
		updateSortedQuestions(
			props.questions.results.sort((a, b) => {
				return b.question_helpfulness - a.question_helpfulness;
			}),
		);
	});

	useEffect(() => {
		updateDisplayedQuestions(sortedQuestion.slice(0, 4));
	}, [sortedQuestion]);

	const showMoreQuestionsOnClick = () => {
		if (sortedQuestion.length > displayedQuestions.length) {
			updateDisplayedQuestions(
				displayedQuestions.concat(
					sortedQuestion.slice(
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
				allQuestions={sortedQuestion}
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
