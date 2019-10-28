import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Overview from "./Overview/Overview.jsx";
import R_R from "./R_R/R_R.jsx";
import QnA from "./QnA/QnA.jsx";
import DeckContainer from "../containers/DeckContainer.js";
import { testRelatedProducts } from "../../tests/testProducts.js";
import newMainProduct from "../actions/newMainProduct.js";

export class App extends Component {
	render() {
		return (
			<div>
				<Overview />
				<R_R />
				<QnA />
				<DeckContainer />
				<button onClick={() => newMainProduct(1)}>Click Me!</button>
			</div>
		);
	}
}

export default App;
