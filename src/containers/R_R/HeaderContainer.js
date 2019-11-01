import Header from "../../components/R_R/Header/Header.jsx";
import { connect } from "react-redux";
import getReviews from "../../actions/getReviews.js";
import sortAction from "../../actions/sort.js"
import reviewCount from '../../actions/reviewCount.js'
import removeFilter from '../../actions/removeFilter'

const mapStateToProps = (state, ownProps) => ({
    id: state.metaData.product_id,
    sort: state.sort,
    reviews: state.reviews,
    starFilters: state.starFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    sortBy: (id, sort) => dispatch(getReviews(id,1,2, sort)),
    sort: (sort) => dispatch(sortAction(sort)),
    updateCount: (count) => dispatch(reviewCount(count)),
    removeFilter: (value, filters) => dispatch(removeFilter(value, filters))
});

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer