import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import store from "./store";
import newMainProduct from "./actions/newMainProduct";
import { Provider } from "react-redux";
import queryString from "querystring";


let productId = queryString.parse(location.search)["?product"] || 1;

store.dispatch(newMainProduct(productId));


if (!window.localStorage.getItem("user_session")) {
	window.localStorage.setItem("user_session", Math.random());
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app"),
);
