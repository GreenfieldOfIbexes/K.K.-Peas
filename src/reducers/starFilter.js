

const starFilter = (state = {}, action) => {
	switch (action.type) {
		case "STAR_FILTER":
			console.log('filter state: ', state.starFilter)
			return  action.starFilter
		default:
			return state;
	}
};

export default starFilter;
