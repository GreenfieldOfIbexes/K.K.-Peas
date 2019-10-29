import Answer from "./Answer.jsx";
import React from "react";

const AnswersList = ({ answers }) => {
	const arrayfyAnswersObject = (obj) => {
		return Object.entries(obj);
	};

	return (
		<div className="answersList_container">
			{arrayfyAnswersObject(answers).map((answer, index) => {
				return <Answer key={index} answer={answer[1]} />;
			})}
		</div>
	);
};

export default AnswersList;
