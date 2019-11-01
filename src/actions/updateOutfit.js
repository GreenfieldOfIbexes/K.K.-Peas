import outfitFromStorage from "./outfitFromStorage.js";

const updateOutfit = {
	addOutfitItem: (product) => {
		localStorage.setItem(product.id, JSON.stringify(product));
		return {
			type: "UPDATE_OUTFIT",
			payload: outfitFromStorage(),
		};
	},

	removeOutfitItem: (productId) => {
		localStorage.removeItem(productId);
		return {
			type: "UPDATE_OUTFIT",
			payload: outfitFromStorage(),
		};
	},

	clearOutfit: () => {
		localStorage.clear();
		return {
			type: "UPDATE_OUTFIT",
			payload: outfitFromStorage(),
		};
	},
};

export default updateOutfit;
