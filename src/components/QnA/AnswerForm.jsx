import React, { useState } from "react";
import store from "../../store";
import Axios from "axios";
import constants from "../../constants";

const AnswerForm = ({ question, handleClose }) => {
	const [body, updateAnswerStr] = useState("");
	const [name, updateNicknameStr] = useState("");
	const [email, updateEmailStr] = useState("");
	const [photos, updatePhotos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let answer = {
			body,
			name,
			email,
			photos,
		};
		return Axios.post(
			`${constants.API_URL}/qa/${question.question_id}/answers`,
			answer,
		);
	};

	const img = (event) => {
		var files = [...event.target.files];
		if (files) {
			if (files.length > 5 || photos.length > 5) {
				alert("Please select a maximum of 5 Images");
			} else {
				files.map((file) => {
					var reader = new FileReader();
					reader.onload = function(readerEvt) {
						var binaryString = readerEvt.target.result;
						var imageBase64 = btoa(binaryString);
						return Axios.post(
							"https://api.imgur.com/3/image",
							{ image: imageBase64 },
							{
								headers: {
									Authorization: "Client-ID 6e6d850fc03dd7f",
								},
							},
						)
							.then(({ data }) => {
								photos.push(data.data.link);
							})
							.catch((err) => {
								console.log(err);
							});
					};
					reader.readAsBinaryString(file);
				});
			}
		}
	};

	return (
		<div className="qnaForm_container">
			<div className="qnaForm_headers_container">
				<h2 className="qnaForm_title">Submit Your Answer</h2>
				<h3>{store.getState().mainProduct.name}</h3>
				<h4>Q: {question.question_body}</h4>
			</div>

			<form onSubmit={handleSubmit} className="qnaForm">
				<label htmlFor="" className="qnaForm_labels" value={body}>
					Your Answer: &#42;
					<textarea
						name="Answer"
						id=""
						cols="30"
						rows="5"
						value={body}
						onChange={(e) => {
							updateAnswerStr(e.target.value);
						}}
						required></textarea>
				</label>

				<label htmlFor="" className="qnaForm_labels">
					What is your nickname? &#42;
					<input
						type="text"
						placeholder="Example: jack543!"
						value={name}
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
						value={email}
						onChange={(e) => {
							updateEmailStr(e.target.value);
						}}
						required
					/>
				</label>

				<label htmlFor="" className="qnaForm_labels">
					Upload your photos:
					<input
						type="file"
						accept="image/*"
						multiple
						onChange={(e) => {
							e.persist();
							img(e);
						}}
					/>
				</label>

				<label htmlFor="" className="qnaForm_labels">
					<input type="Submit" value="Submit Answer" />
				</label>
			</form>
		</div>
	);
};

export default AnswerForm;
