const getProductInfo = require("../actions/makeProductObj-possibleRefile.js");

const updateRelatedProducts = (relatedProductIds) => {
	return (dispatch) => {
		relatedProductIds.forEach(async (id) => {
			const product = await getProductInfo.default(id);
			dispatch({
				type: "UPDATE_RELATED_PRODUCTS",
				product: product,
			});
		});
	};
};

export default updateRelatedProducts;
