import ProductInteraction from "../../components/Overview/ProductInteraction/ProductInteraction.jsx";
import newStyle from "../../actions/newStyle";
import { connect } from "react-redux";

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	mainProduct,
	view,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateStyle: (index) => dispatch(newStyle(index)),
});

const ProductInteractionContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductInteraction);

export default ProductInteractionContainer;
