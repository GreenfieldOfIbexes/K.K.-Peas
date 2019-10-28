import React, { useState, useEffect } from "react";
import QuestionsList from "./QuestionsList";
import Search from "./SearchBar/Search";
import "./style.css";

// export class QnA extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			searchStr: "",
// 			questionsCount: 4,
// 			questionsStartingIndex: 0,
// 			displayedQuestions: [],
// 			filteredQuestions: [],
// 		};

// 	// function to filter questions onm search
// 	// function to populate displayed
// 	// handle submit for search form
// 	// update Questions
// }

const QnA = (props) => {
	console.log({ props });
	const [displayedQuestions, updateDisplayedQuestions] = useState([
		props.productQuestions.results,
	]);

	useEffect(() => {
		updateDisplayedQuestions(props.productQuestions.results.slice(0, 4));
	}, [props.productQuestions.results]);
	console.log({ displayedQuestions });
	return (
		<div className="qNaContainer">
			<br />
			<h5 className="qNaContainer_title">QUESTIONS & ANSWERS</h5>
			<Search />
			<QuestionsList questions={displayedQuestions} />
		</div>
	);
};

export default QnA;
