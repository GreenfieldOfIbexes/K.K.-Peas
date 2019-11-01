import starFilter from './starFilter.js'
import getReviews from './getReviews.js'
const removeFilter = (id) => async (dispatch) =>  {

    dispatch(starFilter({}))
    dispatch(getReviews(id))
}

export default removeFilter
