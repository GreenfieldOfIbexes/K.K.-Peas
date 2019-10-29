import axios from 'axios'
import constants from '../constants.js'

const getMetaData = (id) => async (dispatch) => {

    const info = await axios.get(`${constants.API_URL}/reviews/${id}/meta`);
    console.log('inside metadata action: ', info)
    dispatch({
        type: 'GET_META_DATA',
        metaData: info.data
    });
}

export default getMetaData

