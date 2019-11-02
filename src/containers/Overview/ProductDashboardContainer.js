import ProductDashboard from "../../components/Overview/ProductDashboard/ProductDashboard.jsx";
import { connect } from "react-redux";

const mapStateToProps = ({ mainProduct, view }, ownProps) => ({
	mainProduct,
	view,
});

const ProductDashboardContainer = connect(mapStateToProps)(ProductDashboard);

export default ProductDashboardContainer;
