import { connect } from "react-redux";
import newMainProduct from "../actions/newMainProduct.js";
import updateOutfit from "../actions/updateOutfit.js";
import newComparisonProduct from "../actions/newComparisonProduct.js";
import Card from "../components/related-compare/Card.jsx";
import removeFromOutfit from "../actions/removeFromOutfit.js";

// const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
	newMainProduct: (product) => {
		dispatch(newMainProduct(product));
	},
	updateOutfit: (product) => {
		dispatch(updateOutfit(product));
	},
	newComparisonProduct: (product) => {
		dispatch(newComparisonProduct(product));
	},
	removeFromOutfit: (product) => {
		console.log(product.id);
		dispatch(removeFromOutfit(product.id));
	},
});

const CardContainer = connect(
	null,
	mapDispatchToProps,
)(Card);

export default CardContainer;
