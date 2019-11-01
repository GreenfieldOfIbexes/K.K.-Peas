import React, { useState, useEffect } from "react";
import QuestionsList from "./QuestionsList";
import Search from "./SearchBar/Search";
import "./style.css";

const QnA = (props) => {
	const [displayedQuestions, updateDisplayedQuestions] = useState([
		props.questions.results,
	]);
	const [filteredQuestion, updateFilteredQuestions] = useState([]);
	const [sortedQuestions, updateSortedQuestions] = useState([]);

	useEffect(() => {
		updateSortedQuestions(
			props.questions.results.sort((a, b) => {
				return b.question_helpfulness - a.question_helpfulness;
			}),
		);
	});

	useEffect(() => {
		updateDisplayedQuestions(sortedQuestions.slice(0, 4));
	}, [sortedQuestions]);

	const showMoreQuestionsOnClick = () => {
		if (sortedQuestions.length > displayedQuestions.length) {
			updateDisplayedQuestions(
				displayedQuestions.concat(
					sortedQuestions.slice(
						displayedQuestions.length,
						displayedQuestions.length + 2,
					),
				),
			);
		} else {
			console.log("no more questions");
		}
	};

	const collapseQuestions = () => {
		updateDisplayedQuestions(sortedQuestions.slice(0, 4));
	};

	return (
		<div
			className="qNaContainer"
			onClick={(e) => {
				props.clickHandler(e, "QnA");
			}}>
			<br />
			<h5 className="qNaContainer_title">QUESTIONS & ANSWERS</h5>
			<Search
				filteredQuestion={filteredQuestion}
				allQuestions={sortedQuestions}
				updateFilteredQuestions={updateFilteredQuestions}
				displayedQuestions={displayedQuestions}
				updateDisplayedQuestions={updateDisplayedQuestions}
			/>
			<QuestionsList
				displayedQuestions={displayedQuestions}
				showMoreQuestions={showMoreQuestionsOnClick}
				collapseQuestions={collapseQuestions}
				sortedQuestions={sortedQuestions}
				updateSortedQuestions={updateSortedQuestions}
			/>
		</div>
	);
};

export default QnA;
