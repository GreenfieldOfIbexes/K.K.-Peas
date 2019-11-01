import React, { useState } from "react";
import QuestionFormModal from "./QuestionFormModal";

const Buttons = ({ showMoreQuestions }) => {
	return (
		<div className="buttons_container">
			<button
				className="buttons buttons_showMore all_btns"
				onClick={showMoreQuestions}>
				MORE ANSWERED QUESTIONS
			</button>
			<QuestionFormModal />
		</div>
	);
};

export default Buttons;
