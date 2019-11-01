

const starFilter = (state = {}, action) => {
	switch (action.type) {
		case "STAR_FILTER":
			return  action.starFilter
		default:
			return state;
	}
};

export default starFilter;
