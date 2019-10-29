import Deck from "../components/related-compare/Deck.jsx";
import { connect } from "react-redux";
import getRelatedProducts from "../actions/getRelatedProducts.js";

const mapStateToProps = (state, ownProps) => ({
	products: state.relatedProducts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const DeckContainer = connect(
	mapStateToProps,
	// mapDispatchToProps,
)(Deck);

export default DeckContainer;
