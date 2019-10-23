import getProductInfo from "../../src/actions/makeProductObj-possibleRefile.js";
import { testProduct } from "../testProducts.js";
import newMainProduct from "../../src/actions/newMainProduct.js";

test("should return a thunk that dispatches well-formed NEW_MAIN_PRODUCT action", async () => {
	const expectedThunk = (dispatch) => {
		const productInfo = getProductInfo(1);
		dispatch({
			type: "NEW_MAIN_PRODUCT",
			productInfo: testProduct,
		});
	};
	const actualThunk = await newMainProduct(1);
	expect(JSON.stringify(expectedThunk)).toEqual(JSON.stringify(actualThunk));
});
