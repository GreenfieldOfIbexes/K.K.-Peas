import getProductInfo from "../../src/actions/makeProductObj-possibleRefile.js";
import { testProduct } from "../testProducts.js";

test("should get a product object when given id", async () => {
	expect.assertions(1);
	const product = await getProductInfo(1);
	return expect(product).toEqual(testProduct);
});
