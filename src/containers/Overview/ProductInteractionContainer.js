import ProductInteraction from "../../components/Overview/ProductInteraction/ProductInteraction.jsx";
import newStyle from "../../actions/newStyle";
import { connect } from "react-redux";
import addToCart from "../../actions/addToCart";
import axios from "axios";
import constants from "../../constants";
import updateOutfit from "../../actions/updateOutfit.js";

/*
	mapDispatchToProps passes "dispatch" down to the functions it contains. Keeping the function definitions outside of mapDispatchToProps allows for easier unit testing and greater modularity in general.
*/

// Change the style index in store
function _updateStyle(dispatch, index) {
	dispatch(newStyle(index));
}

// Add something to the cart
function _cartHandler(dispatch, skuObj, user_session, noProducts) {
	// As long as a product is selected...
	if (noProducts === false) {
		dispatch(addToCart(skuObj));
		// Post that bad larry to the Ay Pee Ayyeeeee!!!!!
		axios.post(`${constants.API_URL}/cart`, {
			product_id: skuObj.product_id,
			user_session,
		});
		return actionObject;
	}
}

// Adding the current product to the user's saved outfit
function _addToOutfitHandler(dispatch, productObject) {
	dispatch(updateOutfit.addOutfitItem(productObject));
}

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	mainProduct,
	view,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateStyle: (index) => _updateStyle(dispatch, index),
	cartHandler: (skuObj, user_session, noProducts) =>
		_cartHandler(dispatch, skuObj, user_session, noProducts),
	addToOutfitHandler: (productObject) =>
		_addToOutfitHandler(dispatch, productObject),
});

const ProductInteractionContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductInteraction);

export default ProductInteractionContainer;
