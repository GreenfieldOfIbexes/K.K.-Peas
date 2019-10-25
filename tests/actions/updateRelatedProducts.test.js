import { testRelatedProducts } from "../testProducts.js";

test("related products action object is well-formed and corresponds to product 1's related object", async () => {
	const expectedRelProducts = testRelatedProducts;
	const actualRelProducts = await updateRelatedProducts(1);
	expect(actualRelProducts).toEqual(expectedRelProducts);
});
