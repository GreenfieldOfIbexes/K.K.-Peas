import React, { useState } from "react";
import store from "../../store";
import Axios from "axios";
import constants from "../../constants";
import getQuestions from "../../actions/getQuestions";

const QuestionForm = ({
	question,
	handleClose,
	updateSortedQuestions,
	sortedQuestions,
}) => {
	const [body, updateQuestionStr] = useState("");
	const [name, updateNicknameStr] = useState("");
	const [email, updateEmailStr] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let questionObj = {
			body,
			name,
			email,
		};
		Axios.post(
			`${constants.API_URL}/qa/${store.getState().mainProduct.id}`,
			questionObj,
		).then(() => {
			store.dispatch(getQuestions(store.getState().mainProduct.id));
		});

		handleClose();
	};

	return (
		<div className="qna_container">
			<div className="qnaForm_headers_container">
				<h2 className="qnaForm_title">Ask Your Questions</h2>
				<h3>About {store.getState().mainProduct.name}</h3>
			</div>

			<form action="" className="qnaForm" onSubmit={handleSubmit}>
				<label htmlFor="" className="qnaForm_labels">
					Your Question: &#42;
					<textarea
						name="Answer"
						id=""
						cols="30"
						rows="5"
						onChange={(e) => {
							updateQuestionStr(e.target.value);
						}}
						required></textarea>
				</label>

				<label htmlFor="" className="qnaForm_labels">
					What is your nickname? &#42;
					<input
						type="text"
						placeholder="Example: jack543!"
						onChange={(e) => {
							updateNicknameStr(e.target.value);
						}}
						required
					/>
				</label>

				<label htmlFor="" className="qnaForm_labels">
					Your Email: &#42;
					<input
						type="email"
						placeholder="Example: jack@email.com"
						onChange={(e) => {
							updateEmailStr(e.target.value);
						}}
						required
					/>
				</label>

				<label htmlFor="" className="qnaForm_labels">
					<input type="Submit" value="Submit Question" />
				</label>
			</form>
		</div>
	);
};

export default QuestionForm;
