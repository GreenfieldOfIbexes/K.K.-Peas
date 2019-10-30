import React from "react";
import Moment from "moment";
import Photos from "./Photos";
import Helpfulness from "./Helpfulness";
import Report from "./Report";

const Answer = ({ answer = {} }) => {
	return (
		<div className="answerContainer">
			<p className="answerContainer_answer">{answer.body}</p>
			<Photos photos={answer.photos} />
			<div className="answer_extras_container">
				<div className="answer_details">
					<p>by {answer.answerer_name}, &nbsp;</p>
					<p> {Moment(answer.date).format("ll")} &nbsp;</p>
				</div>
				<div className="answer_functionalDetails">
					<Helpfulness helpful={answer.helpfulness} />
					<Report />
				</div>
			</div>
		</div>
	);
};

export default Answer;
