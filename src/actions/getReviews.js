import axios from 'axios'
import constants from '../constants.js'
import store from "../store"

const getReviews = (id, page = 1, count = 2, sort = 'relevant') => async (dispatch) => {
    var info
    var storage = []
    if(store.getState().starFilter){
         info = await axios.get(`${constants.API_URL}/reviews/${id}/list?page=${page}&count=10000000&sort=${sort}`);
        for(var stars of store.getState().starFilter){
            for(var review of info.data.results){
                if(review.rating === stars){
                    storage.push(review)
                }
            }
        }
    } else {
        info = await axios.get(`${constants.API_URL}/reviews/${id}/list?page=${page}&count=${count}&sort=${sort}`);
        storage = info.data
    }

    dispatch({
        type: 'GET_REVIEWS',
        reviews: storage
    });
}

export default getReviews
