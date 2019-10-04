import axios from 'axios';

const config = require('./config.json');

function postBase64Image(sid, base64Image) {
  return axios
    .post(config.urlBase + config.pathImage, {
      sid,
      image: base64Image
    })
    .then(res =>
      res.data.map(item => {
        return { mid: item.student, status: item.status };
      })
    );
}

function getStudentsByLid(lid) {
  return axios
    .get(`${config.urlBase + config.pathStudents}?lab=${lid}`)
    .then(res =>
      res.data.map(s => {
        return { mid: s.matric_num, name: s.name, email: s.email };
      })
    );
}

function startSession(lid) {
  return axios.post(config.urlBase + config.pathSession, {
    lab: lid
  });
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
  getStudentsByLid,
  verifyToken,
  startSession
};
