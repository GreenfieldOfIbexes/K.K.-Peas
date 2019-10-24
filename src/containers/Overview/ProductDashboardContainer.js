import ProductDashboard from "../../components/Overview/ProductDashboard/ProductDashboard.jsx";
import { connect } from "react-redux";

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	mainProduct,
	view,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const ProductDashboardContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductDashboard);

export default ProductDashboardContainer;
