import ProductDescription from "../../components/Overview/ProductDescription/ProductDescription.jsx";
import { connect } from "react-redux";

const mapStateToProps = ({ mainProduct: { description, features } }) => ({
	description,
	features,
});

const ProductDescriptionContainer = connect(mapStateToProps)(
	ProductDescription,
);

export default ProductDescriptionContainer;
