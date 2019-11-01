import Header from "../../components/R_R/Header/Header.jsx";
import { connect } from "react-redux";
import getReviews from "../../actions/getReviews.js";
import sortAction from "../../actions/sort.js"
import reviewCount from '../../action/reviewCount.js'

const mapStateToProps = (state, ownProps) => ({
    id: state.reviews.product,
    sort: state.sort,
    reviewCount: state.reviewCount
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    sortBy: (id, sort) => dispatch(getReviews(id,1,2, sort)),
    sort: (sort) => dispatch(sortAction(sort)),
    updateCount: (count) => dispatch(reviewCount(count))
});

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer