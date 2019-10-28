import React, { Component } from "react";
import "./Search.css";

export class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchStr: "",
			questions: [],
		};
		console.log("SearchBar props: ", this.props);
		// this.handleSubmit = this.handleSubmit.bind(this);
		// this.handleSearch = this.handleSearch.bind(this);
		// this.getSearchedQuestions = this.getSearchedQuestions.bind(this);
	}

	// getSearchedQuestions() {
	// 	console.log("getting stufff");
	// 	let searchResults = this.props.productQuestions.results.filter(
	// 		(question) => {
	// 			return question.question_body.includes(this.state.searchStr);
	// 		},
	// 	);
	// 	console.log("SearchResults: ", searchResults);
	// 	this.setState({
	// 		questions: searchResults,
	// 	});
	// }

	// handleSearch(e) {
	// 	console.log(e.target.value);
	// 	this.setState({
	// 		searchStr: e.target.value,
	// 	});
	// }

	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	console.log("state before submit: ", this.state);
	// 	this.getSearchedQuestions();
	// 	console.log("state after submit: ", this.state);
	// }

	render() {
		return (
			<div className="searchContainer">
				<form className="searchContainer_form" onSubmit={this.handleSubmit}>
					<input
						className="searchContainer_searchBar"
						// onChange={this.handleSearch}
						type="text"
						// value={this.state.value}
						placeholder="HAVE A QUESTION? SEARCH FOR ANSWER..."
					/>
					<div className="searchContainer_icon_div">
						<i
							className="material-icons md-36 searchContainer_icon"
							onClick={this.handleSubmit}>
							search
						</i>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
