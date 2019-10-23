import React, { Component } from "react";
import Overview from "./Overview/Overview.jsx";
import R_R from "./R_R/R_R.jsx";

export class App extends Component {
	render() {
		return (
			<div>
				<Overview />

				
				<R_R />
			</div>
			
		);
	}
}

export default App;
