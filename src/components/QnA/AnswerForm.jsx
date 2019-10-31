import React from "react";

const AnswerForm = ({ question }) => {
	return (
		<div>
			<h2>Submit Your Answer</h2>
			<h3>Product Name</h3>
			<h4>{question.question_body}</h4>
			<form action="">
				<label htmlFor="">
					Your Answer
					<input type="text" />
				</label>
				<label htmlFor="">
					What is your nickname?
					<input type="text" />
				</label>
				<label htmlFor="">
					Your Email
					<input type="text" />
				</label>
				<label htmlFor="">
					Upload your photos
					<input type="text" />
				</label>
				<label htmlFor="">
					<input type="Submit" value="Submit Answer" />
				</label>
			</form>
		</div>
	);
};

export default AnswerForm;
