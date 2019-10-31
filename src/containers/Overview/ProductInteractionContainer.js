import ProductInteraction from "../../components/Overview/ProductInteraction/ProductInteraction.jsx";
import newStyle from "../../actions/newStyle";
import { connect } from "react-redux";
import addToCart from "../../actions/addToCart";
import axios from "axios";
import constants from "../../constants";
import store from "../../store";

// Change the style index in store
function updateStyle(index) {
	store.dispatch(newStyle(index));
}

// Add something to the cart
function cartHandler(skuObj, user_session, noProducts) {
	// As long as a product is selected...
	if (noProducts === false) {
		store.dispatch(addToCart(skuObj));
		// Post that bad larry to the Ay Pee Ayyeeeee!!!!!
		axios.post(`${constants.API_URL}/cart`, {
			product_id: skuObj.product_id,
			user_session,
		});
		return actionObject;
	}
}

function addToOutfitHandler(productObject) {}

// The boring redux stuff
const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	mainProduct,
	view,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateStyle,
	cartHandler,
	addToOutfitHandler,
});

const ProductInteractionContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductInteraction);

export default ProductInteractionContainer;
