const outfitFromStorage = () => {
	const outfitKeys = Object.keys(localStorage);
	const results = [];
	for (let key of outfitKeys) {
		if (key !== "user_session") {
			results.push(JSON.parse(localStorage.getItem(key)));
		}
	}
	return results;
};

export default outfitFromStorage;
