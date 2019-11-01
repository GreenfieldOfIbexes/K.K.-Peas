import Filter from "../../components/R_R/Header/Filters.jsx";
import { connect } from "react-redux";
import removeFilter from '../../actions/removeFilter'

const mapStateToProps = (state, ownProps) => ({
    id: state.metaData.product_id,
    starFilters: state.starFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeFilter: (value, filters) => dispatch(removeFilter(value, filters))
});

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterContainer