const addToCart = ({ product_id, session_id, style_id, size }) => ({
	type: "ADD_TO_CART",
	product_id,
	session_id,
	style_id,
	size,
});

export default addToCart;
