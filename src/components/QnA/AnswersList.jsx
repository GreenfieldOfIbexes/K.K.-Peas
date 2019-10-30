import Answer from "./Answer.jsx";
import React, { useState, useEffect } from "react";

const AnswersList = ({ answers }) => {
	const [allAnswers, updateAllAnswers] = useState([]);
	const [displayedAnswers, updateDisplayedAllAnswers] = useState([]);

	useEffect(() => {
		updateAllAnswers(answers ? Object.values(answers) : []);
	}, [answers]);

	useEffect(() => {
		updateDisplayedAllAnswers(allAnswers.slice(0, 2));
	}, [allAnswers]);

	const showMoreAnswersOnClick = () => {
		updateDisplayedAllAnswers(allAnswers);
	};

	return (
		<div className="answersList_mainContainer">
			<span className="answer_a">A:&nbsp;</span>
			<div className="answersList_container">
				{displayedAnswers.map((answer, index) => {
					return <Answer key={index} answer={answer} />;
				})}
				{allAnswers.length > 2 ? (
					<button
						onClick={showMoreAnswersOnClick}
						className="answersList_btn all_btns">
						LOAD MORE ANSWERS
					</button>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default AnswersList;

// <button className="answersList_btn">LOAD MORE ANSWERS</button>
