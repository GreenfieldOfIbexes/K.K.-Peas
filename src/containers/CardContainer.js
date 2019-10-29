import { connect } from "react-redux";
import newMainProduct from "../actions/newMainProduct.js";
import updateOutfit from "../actions/updateOutfit.js";
import Card from "../components/related-compare/Card.jsx";

// const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
	newMainProduct: (product) => {
		dispatch(newMainProduct(product));
	},
	updateOutfit: (product) => {
		dispatch(updateOutfit(product));
	},
});

const CardContainer = connect(
	null,
	mapDispatchToProps,
)(Card);

export default CardContainer;
