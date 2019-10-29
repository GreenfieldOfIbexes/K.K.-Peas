import React from "react";
import AnswersList from "./AnswersList";

const Question = ({ question }) => {
	return (
		<div className="questionsContainer">
			<p className="questionsContainer_question">Q: {question.question_body}</p>
			{/* <AnswersList answers={question.answers} /> */}
		</div>
	);
};

export default Question;
