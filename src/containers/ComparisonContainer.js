import { connect } from "react-redux";
import Comparison from "../components/related-compare/Comparison.jsx";

const mapStateToProps = (state, ownProps) => ({
	mainProduct: state.mainProduct,
	comparisonProduct: state.comparisonProduct,
});

const ComparisonContainer = connect(mapStateToProps)(Comparison);

export default ComparisonContainer;
