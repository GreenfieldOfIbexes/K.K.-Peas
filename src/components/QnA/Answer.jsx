import React from "react";
import Moment from "moment";

const Answer = ({ answer = {} }) => {
	let date = answer.date.slice(0, 10);
	return (
		<div className="answerContainer">
			<p className="answerContainer_answer">
				<span className="answer_a">A:</span> {answer.body}
			</p>
			<div className="photos_container">
				{answer.photos
					? answer.photos.map((photo, i) => {
							return <img key={i} src={photo} className="answer_image" />;
					  })
					: ""}
			</div>
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
