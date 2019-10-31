import React from "react";
import AnswersList from "./AnswersList";
import Helpfulness from "./Helpfulness";
import AnswerFormModal from "./AnswerFormModal";

const Question = ({ question }) => {
	return (
		<div className="questionsContainer">
			<div className="questionsContainer__header">
				<p className="questionsContainer_question">
					Q: {question.question_body}
				</p>
				<div className="questionContainer_header_buttons">
					<Helpfulness helpfulnessCount={question.question_helpfulness} />
					<AnswerFormModal question={question} />
				</div>
			</div>
			<AnswersList answers={question.answers} />
		</div>
	);
};

export default Question;
