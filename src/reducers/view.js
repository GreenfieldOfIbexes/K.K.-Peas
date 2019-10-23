import Redux from "redux";
import initialState from "./initialState";

const view = (state = [initialState.view], action) => {
	switch (action.type) {
		case "THUMBNAIL_CLICK":
			return Object.assign({}, state, {
				thumbnail_index: action.thumbnail_index,
			});
		default:
			return state;
	}
};

export default view;
