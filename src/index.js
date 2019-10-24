import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import store from "./store";
import newMainProduct from "./actions/newMainProduct";
import { Provider } from "react-redux";

store.dispatch(newMainProduct(1));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app"),
);
