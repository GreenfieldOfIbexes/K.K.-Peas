const reviews = (state = {}, action) => {
	switch (action.type) {
		case "SORT":
			return  action.sort
		default:
			return state;
	}
};

export default reviews;
