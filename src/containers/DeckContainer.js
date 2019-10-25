import Deck from "../components/related-compare/Deck.jsx";
import { connect } from "react-redux";
import updateRelatedProducts from "../actions/updateRelatedProducets.js";

const mapStateToProps = (state, ownProps) => ({
	products: state.relatedProducts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateRelated: (productIDs) => {
		dispatch(updateRelatedProducts(productIDs));
	},
});

const DeckContainer = connect()(Deck);
// mapStateToProps,
// mapDispatchToProps,

export default DeckContainer;
