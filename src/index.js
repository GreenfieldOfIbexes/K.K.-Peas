import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import store from "./store";
import newMainProduct from "./actions/newMainProduct";
import { Provider } from "react-redux";
import store from "./store.js";

store.dispatch(newMainProduct(1));

ReactDOM.render(
	<Provider>
		<App store={store} />
	</Provider>,
	document.getElementById("app"),
);
