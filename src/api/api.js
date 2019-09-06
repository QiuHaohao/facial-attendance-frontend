import axios from 'axios'

const config = require('./config.json')

function postBase64Image(base64Image) {
    return axios.post(
        config.urlBase + config.pathSession,
        {'image': base64Image}
    )
}

export default {
    postBase64Image
};
