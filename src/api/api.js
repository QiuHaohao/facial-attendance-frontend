import axios from 'axios';

const config = require('./config.json');

function postBase64Image(base64Image) {
  return axios
    .post(config.urlBase + config.pathSession, {
      image: base64Image
    })
    .then(() => {
      return [
        { mid: 'U1622139C', name: 'Qiu Haoze' },
        {
          mid: 'U1658131C',
          name: 'John Doe Alamak Name Very Damn Freaking Long'
        }
      ];
    });
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
