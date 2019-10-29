import ProductInteraction from "../../components/Overview/ProductInteraction/ProductInteraction.jsx";
import newStyle from "../../actions/newStyle";
import { connect } from "react-redux";
import addToCart from "../../actions/addToCart";
import axios from "axios";
import constants from "../../constants";

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	mainProduct,
	view,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
	updateStyle: (index) => dispatch(newStyle(index)),
	cartHandler: (skuObj, user_session, noProducts) => {
		if (noProducts === false) {
			const actionObject = addToCart(skuObj);
			dispatch(actionObject);
			axios.post(`${constants.API_URL}/cart`, {
				product_id: skuObj.product_id,
				user_session,
			});
			return actionObject;
		}
	},
	addToOutfitHandler: (productObject) => {},
});

const ProductInteractionContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductInteraction);

export default ProductInteractionContainer;
