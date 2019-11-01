import relatedProducts from "../../src/reducers/relatedProducts.js";
import { testRelatedProducts } from "../testProducts.js";

describe("relatedProducts reducer is well-formed", () => {
	test("case: GET_RELATED_PRODUCTS", () => {
		expect(
			relatedProducts([], {
				type: "GET_RELATED_PRODUCTS",
				products: testRelatedProducts,
			}),
		).toEqual(testRelatedProducts);
	});

	test("case: default case", () => {
		expect(relatedProducts([], { case: "ANYTHING_ELSE" })).toEqual([]);
	});
});
