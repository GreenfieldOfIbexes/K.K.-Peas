import React from "react";
import Moment from "moment";
import Photos from "./Photos";

const Answer = ({ answer = {} }) => {
	let date = answer.date.slice(0, 10);
	return (
		<div className="answerContainer">
			<p className="answerContainer_answer">{answer.body}</p>
			<Photos photos={answer.photos} />
			<div className="answer_extras_container">
				<div className="answer_details">
					<p>by {answer.answerer_name}, &nbsp;</p>
					<p> {Moment(answer.date).format("ll")} |</p>
				</div>
				<div className="answer_helpulness">
					<p>&nbsp; helpful? |</p>
				</div>
				<div className="answer_Report">
					<p>&nbsp; Report</p>
				</div>
			</div>
		</div>
	);
};

export default Answer;
