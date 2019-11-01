import axios from 'axios'
import constants from '../constants.js'
import store from "../store"

const getReviews = (id, page = 1) => async (dispatch) => {
    var info
    var storage = []
    info = await axios.get(`${constants.API_URL}/reviews/${id}/list?page=${page}&count=10000000&sort=${store.getState().sort}`);

        if(store.getState().starFilter[0]){
            for(var review of info.data.results){
                for(var stars of store.getState().starFilter){
                    if(review.rating + '' === stars){
                        storage.push(review)
                    }
                }
            }
        } else {
            storage = info.data.results
        }

    console.log('storage', storage)

    dispatch({
        type: 'GET_REVIEWS',
        reviews: storage
    });
}

export default getReviews
