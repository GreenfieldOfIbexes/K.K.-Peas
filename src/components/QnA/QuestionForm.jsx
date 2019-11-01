import React from "react";
import store from "../../store";

const QuestionForm = ({ question }) => {
	return (
		<div className="qna_container">
			<div className="qnaForm_headers_container">
				<h2 className="qnaForm_title">Ask Your Questions</h2>
				<h3>About {store.getState().mainProduct.name}</h3>
			</div>

			<form action="" className="qnaForm">
				<label htmlFor="" className="qnaForm_labels">
					Your Question: &#42;
					<textarea name="Answer" id="" cols="30" rows="5" required></textarea>
				</label>

				<label htmlFor="" className="qnaForm_labels">
					What is your nickname? &#42;
					<input type="text" placeholder="Example: jack543!" required />
				</label>

				<label htmlFor="" className="qnaForm_labels">
					Your Email: &#42;
					<input type="email" placeholder="Example: jack@email.com" required />
				</label>

				<label htmlFor="" className="qnaForm_labels">
					<input type="Submit" value="Submit Question" />
				</label>
			</form>
		</div>
	);
};

export default QuestionForm;
