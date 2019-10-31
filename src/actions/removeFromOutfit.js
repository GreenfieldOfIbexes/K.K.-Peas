const removeFromOutfit = (productId) => {
	return {
		type: "REMOVE_FROM_OUTFIT",
		payload: productId,
	};
};

export default removeFromOutfit;
