import { connect } from "react-redux";
import newMainProduct from "../actions/newMainProduct.js";
import newComparisonProduct from "../actions/newComparisonProduct.js";
import Card from "../components/related-compare/Card.jsx";
import updateOutfit from "../actions/updateOutfit.js";

// const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
	newMainProduct: (product) => {
		dispatch(newMainProduct(product));
	},
	addToOutfit: (product) => {
		dispatch(updateOutfit.addOutfitItem(product));
	},
	newComparisonProduct: (product) => {
		dispatch(newComparisonProduct(product));
	},
	removeFromOutfit: (productId) => {
		dispatch(updateOutfit.removeOutfitItem(productId));
	},
});

const CardContainer = connect(
	null,
	mapDispatchToProps,
)(Card);

export default CardContainer;
