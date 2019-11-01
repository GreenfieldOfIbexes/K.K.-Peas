import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = ({
	updateFilteredQuestions,
	filteredQuestion,
	allQuestions,
	displayedQuestions,
	updateDisplayedQuestions,
}) => {
	const [searchStr, updateSearchStr] = useState("");

	const handleChange = (e) => {
		console.log({ searchStr });
		updateSearchStr(e.target.value);

		if (searchStr.length >= 3) {
			handleSubmit(e);
		}
	};

	const searchQuestions = () => {
		updateFilteredQuestions(
			allQuestions.filter((question) => {
				return question.question_body.includes(searchStr);
			}),
		);

		return filteredQuestion;
	};

	const handleSubmit = (e) => {
		console.log("handle submit running");
		e.preventDefault();

		updateDisplayedQuestions(searchQuestions());
	};

	return (
		<div className="searchContainer">
			<form className="searchContainer_form" onSubmit={handleSubmit}>
				<input
					className="searchContainer_searchBar"
					type="text"
					placeholder="HAVE A QUESTION? SEARCH FOR ANSWER..."
					value={searchStr}
					onChange={handleChange}
				/>
				<div className="searchContainer_icon_div">
					<i
						className="material-icons md-36 searchContainer_icon"
						onClick={handleSubmit}>
						search
					</i>
				</div>
			</form>
		</div>
	);
};

export default Search;
