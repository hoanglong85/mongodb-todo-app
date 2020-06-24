/**
 * File path: utils/api.js
 */
import axios from 'axios'
import config from '../constant/config'

const SERVER_URL = config.serverURL

const callAPI = async (action, method = 'GET', data = null, timeout = 5000) => {
    return await axios({
        method: method,
        baseURL: `${SERVER_URL}`,
        url: `${action}`,
        data: data,
        timeout: timeout || 5000
    });//.catch(error => console.log('callAPI', error));
}

export default callAPI