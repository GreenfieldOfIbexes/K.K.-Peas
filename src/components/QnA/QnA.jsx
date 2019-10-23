import React, { Component } from 'react';
import SearchBar from './SearchBar';
import QuestionsList from './QuestionsList';

export class QnA extends Component {
	render() {
		return (
			<div>
				<h2>QUESTIONS AND ANSWERS</h2>
				<SearchBar />
				<QuestionsList />
			</div>
		);
	}
}

export default QnA;
