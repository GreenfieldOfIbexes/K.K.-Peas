const sort = (state = {}, action) => {
	switch (action.type) {
		case "SORT":
			return  action.sort
		default:
			return state;
	}
};

export default sort;
