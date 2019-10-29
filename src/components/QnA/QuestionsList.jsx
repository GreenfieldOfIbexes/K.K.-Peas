import React, { useState } from "react";
import Question from "./Question";
import Buttons from "./Buttons";

const QuestionsList = ({ questions, showMore }) => {
	return (
		<div className="questionsList_container">
			{questions.map((question, index) => {
				return <Question key={index} question={question} />;
			})}
			<Buttons showMore={showMore} />
		</div>
	);
};

export default QuestionsList;
