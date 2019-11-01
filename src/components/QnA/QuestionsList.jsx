import React, { useState } from "react";
import Question from "./Question";
import Buttons from "./Buttons";

const QuestionsList = ({
	displayedQuestions,
	showMoreQuestions,
	collapseQuestions,
	sortedQuestions,
	updateSortedQuestions,
}) => {
	return (
		<div className="questionsList_container">
			{displayedQuestions.map((question, index) => {
				return <Question key={index} question={question} />;
			})}
			<Buttons
				showMoreQuestions={showMoreQuestions}
				displayedQuestions={displayedQuestions}
				collapseQuestions={collapseQuestions}
				sortedQuestions={sortedQuestions}
				updateSortedQuestions={updateSortedQuestions}
			/>
		</div>
	);
};

export default QuestionsList;
