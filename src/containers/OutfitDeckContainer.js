import OutfitDeck from "../components/related-compare/OutfitDeck.jsx";
import { connect } from "react-redux";
import getRelatedProducts from "../actions/getRelatedProducts.js";

const mapStateToProps = (state, ownProps) => ({
	mainProduct: state.mainProduct,
	products: state.outfitProducts,
});

const OutfitDeckContainer = connect(mapStateToProps)(OutfitDeck);

export default OutfitDeckContainer;
