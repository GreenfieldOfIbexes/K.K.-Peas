import React, { Component } from "react";
import "./Search.css";

export class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchStr: "",
		};
	}

	render() {
		return (
			<div className="searchContainer">
				<form action="">
					<input
						className="searchContainer_searchBar"
						type="text"
						value={this.state.value}
						placeholder="HAVE A QUESTION? SEARCH FOR ANSWER..."
					/>
					<div>
						<i className="material-icons">search</i>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
