import React, { useState } from "react";

const Buttons = ({ showMoreQuestions }) => {
	return (
		<div className="buttons_container">
			<button className="buttons buttons_showMore" onClick={showMoreQuestions}>
				MORE ANSWERED QUESTIONS
			</button>
			<button className="buttons buttons_addOne">
				ADD A QUESTION <span className="buttons_addOne_plus"> +</span>
			</button>
		</div>
	);
};

export default Buttons;
