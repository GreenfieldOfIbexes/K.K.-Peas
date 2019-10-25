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

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateStyle: (index) => dispatch(newStyle(index)),
	cartHandler: (skuObj) => {
		dispatch(addToCart(skuObj));
		axios.post(`${constants.API_URL}/cart`, {
			user_session: localStorage.getItem("user_session"),
			product_id: skuObj.product_id,
		});
	},
	addToOutfitHandler: (productObject) => {},
});

const ProductInteractionContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductInteraction);

export default ProductInteractionContainer;
