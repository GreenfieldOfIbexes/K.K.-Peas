import axios from 'axios'
import constants from '../constants.js'

const getReviews = (id, page, count = 2) => {
    const info = await axios.get(`${constants.API_URL}/reviews/${id}/list?page=${page}&count=${count}`)
    dispatch({
  type: 'GET_REVIEWS',
  reviews: info.data
    });
}

export default getReviews