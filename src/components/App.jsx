import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Overview from "./Overview/Overview.jsx";
import R_R from "./R_R/R_R.jsx";
import QnA from "./QnA/QnA.jsx";

export class App extends Component {
	render() {
		return (
			<div>
				<Overview />
				<R_R />
				<QnA />
			</div>
		);
	}
}

export default App;
