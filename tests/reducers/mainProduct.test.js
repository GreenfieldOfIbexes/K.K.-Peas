import mainProduct from "../../src/reducers/mainProduct.js";
import { testProduct } from "../testProducts.js";

describe("mainProduct reducer is well-formed", () => {
	test("case: MAIN_PRODUCT_INFO", () => {
		expect(
			mainProduct(
				{},
				{
					type: "MAIN_PRODUCT_INFO",
					productDetails: testProduct,
				},
			),
		).toEqual(testProduct);
	});

	test("case: default case", () => {
		expect(mainProduct({}, { case: "ANYTHING_ELSE" })).toEqual({});
	});
});
