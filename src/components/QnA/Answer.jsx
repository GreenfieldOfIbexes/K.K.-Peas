import React from "react";

const Answer = ({ answer }) => {
	return (
		<div className="answerContainer">
			<p className="answerContainer_answer">
				<span className="answer_a">A:</span> {answer.body}
			</p>
		</div>
	);
};

export default Answer;
