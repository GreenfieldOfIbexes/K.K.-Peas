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

	const collapseAnswers = () => {
		updateDisplayedAllAnswers(allAnswers.slice(0, 2));
	};

	const isEmptyObj = (obj) => {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) return false;
		}
		return true;
	};

	return (
		<React.Fragment>
			{allAnswers.length > 0 ? (
				<div className="answersList_mainContainer">
					<span className="answer_a">A:&nbsp;</span>
					<div className="answersList_container">
						{displayedAnswers.map((answer, index) => {
							return <Answer key={index} answer={answer} />;
						})}
						{allAnswers.length <= 2 ? (
							""
						) : allAnswers.length > displayedAnswers.length ? (
							<button
								onClick={showMoreAnswersOnClick}
								className="answersList_btn all_btns">
								LOAD MORE ANSWERS
							</button>
						) : (
							<button
								onClick={collapseAnswers}
								className="answersList_btn all_btns">
								COLLAPSE
							</button>
						)}
						{/* {displayedAnswers.length <= allAnswers.length ? (
							<button
								onClick={showMoreAnswersOnClick}
								className="answersList_btn all_btns">
								LOAD MORE ANSWERS
							</button>
						) : (
							<button
								onClick={showMoreAnswersOnClick}
								className="answersList_btn all_btns">
								COLLAPSE
							</button>
						)} */}
					</div>
				</div>
			) : (
				""
			)}
		</React.Fragment>
	);
};

export default AnswersList;

// <button className="answersList_btn">LOAD MORE ANSWERS</button>
