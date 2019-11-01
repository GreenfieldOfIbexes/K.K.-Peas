import outfitProducts from "../../src/reducers/outfitProducts.js";
import { testRelatedProducts } from "../testProducts.js";

describe("outfitProducts reducer is well-formed", () => {
	test("case: UPDATE_OUTFIT", () => {
		expect(
			outfitProducts([], {
				type: "UPDATE_OUTFIT",
				payload: testRelatedProducts,
			}),
		).toEqual(testRelatedProducts);
	});

	test("case: default case", () => {
		expect(outfitProducts([], { case: "ANYTHING_ELSE" })).toEqual([]);
	});
});
