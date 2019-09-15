import axios from 'axios';

const config = require('./config.json');

function postBase64Image(base64Image) {
  return axios.post(config.urlBase + config.pathSession, {
    image: base64Image
  });
}

function getLabsByTid(tid) {
  return axios.get(`${config.urlBase + config.pathLab}?instructors=${tid}`);
}

function getToken(username, password) {
  return axios.post(`${config.urlBase + config.pathAuthToken}`, {
    username,
    password
  });
}

function verifyToken(token) {
  return axios.post(`${config.urlBase + config.pathAuthVerify}`, {
    token
  });
}

export default {
  postBase64Image,
  getToken,
  getLabsByTid,
  verifyToken
};
