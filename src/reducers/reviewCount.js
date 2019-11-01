const reviewCount = (state = {}, action) => {
	switch (action.type) {
		case "UPDATE_COUNT":
			return  action.count
		default:
			return state;
	}
};

export default reviewCount;
