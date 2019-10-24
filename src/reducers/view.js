import Redux from "redux";
import initialState from "./initialState";

const view = (state = initialState.view, action) => {
	switch (action.type) {
		case "NEW_MAIN_PRODUCT":
			const newState = Object.create(state);
			newState.style_index = 0;
			return newState;
		case "THUMBNAIL_CLICK":
			return Object.assign({}, state, {
				thumbnail_index: action.thumbnail_index,
			});
		case "NEW_STYLE":
			return Object.assign({}, state, {
				style_index: action.style_index,
			});
		default:
			return state;
	}
};

export default view;
