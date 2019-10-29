import axios from 'axios'
import constants from '../constants.js'

const sortAction = (sort) => ({
    type: 'SORT',
    sort
})
export default sortAction
