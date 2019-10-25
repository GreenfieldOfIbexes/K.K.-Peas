import Deck from "../components/related-compare/Deck.jsx";
import { connect } from "react-redux";
import updateRelatedProducts from "../actions/updateRelatedProducets.js";

const mapStateToProps = (state, ownProps) => ({
	products: state.relatedProducts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateRelated: () => {
		dispatch(updateRelatedProducts([2, 3, 8, 7]));
	},
});

const DeckContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Deck);

export default DeckContainer;
