import store from '../store.js'

const starFilter = (state = {}, action) => {
	switch (action.type) {
		case "STAR_FILTER":
			var filters = store.getState().starFilter
			filters.push(action.starFilter)
			return  filters
		default:
			return state;
	}
};

export default starFilter;
