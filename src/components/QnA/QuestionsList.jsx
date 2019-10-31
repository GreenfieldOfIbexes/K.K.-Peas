import React, { useState } from "react";
import Question from "./Question";
import Buttons from "./Buttons";

const QuestionsList = ({ questions, showMoreQuestions }) => {
	return (
		<div className="questionsList_container">
			{questions.map((question, index) => {
				return <Question key={index} question={question} />;
			})}
			<Buttons showMoreQuestions={showMoreQuestions} />
		</div>
	);
};

export default QuestionsList;
