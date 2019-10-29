import Header from "../../components/R_R/Header/Header.jsx";
import { connect } from "react-redux";
import getReviews from "../../actions/getReviews.js";
import sortAction from "../../actions/sort.js"

const mapStateToProps = (state, ownProps) => ({
    id: state.reviews.product,
    sort: state.sort
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    sortBy: (id, sort) => dispatch(getReviews(id,1,2, sort)),
    sort: (sort) => dispatch(sortAction(sort))
});

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer