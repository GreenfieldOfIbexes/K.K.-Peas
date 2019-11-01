import React, { useState } from "react";
import QuestionFormModal from "./QuestionFormModal";

const Buttons = ({
	showMoreQuestions,
	displayedQuestions,
	collapseQuestions,
	sortedQuestions,
	updateSortedQuestions,
}) => {
	console.log({ sortedQuestions });
	console.log({ displayedQuestions });
	return (
		<div className="buttons_container">
			{sortedQuestions.length <= 4 ? (
				""
			) : sortedQuestions.length > displayedQuestions.length ? (
				<button
					onClick={showMoreQuestions}
					className="buttons buttons_showMore all_btns">
					MORE ANSWERED QUESTIONS
				</button>
			) : (
				<button
					onClick={collapseQuestions}
					className="buttons buttons_showMore all_btns">
					COLLAPSE
				</button>
			)}

			<QuestionFormModal
				sortedQuestions={sortedQuestions}
				updateSortedQuestions={updateSortedQuestions}
			/>
		</div>
	);
};

export default Buttons;
