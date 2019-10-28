import ProductDescription from "../../components/Overview/ProductDescription/ProductDescription.jsx";
import { connect } from "react-redux";

const mapStateToProps = (
	{ mainProduct: { description, features } },
	ownProps,
) => ({
	description,
	features,
});

const ProductDescriptionContainer = connect(
	mapStateToProps,
	null,
)(ProductDescription);

export default ProductDescriptionContainer;
