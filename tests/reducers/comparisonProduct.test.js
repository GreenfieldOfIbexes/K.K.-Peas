import comparisonProduct from "../../src/reducers/comparisonProduct.js";
import { testProduct } from "../testProducts.js";

describe("comparisonProduct reducer is well-formed", () => {
	test("case: NEW_COMPARISON_PRODUCT", () => {
		expect(
			comparisonProduct(
				{},
				{
					type: "NEW_COMPARISON_PRODUCT",
					product: testProduct,
				},
			),
		).toEqual(testProduct);
	});

	test("case: default case", () => {
		expect(comparisonProduct({}, { case: "ANYTHING_ELSE" })).toEqual({});
	});
});
