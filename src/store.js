import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index.js";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";

const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(thunk, promiseMiddleware)),
);

export default store;
