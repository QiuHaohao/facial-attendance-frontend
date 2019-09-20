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

function getLabsByTid(tid) {
  return axios.get(`${config.urlBase + config.pathLab}?instructors=${tid}`);
}

function getStudentsByLid(lid) {
  console.log(`getStudentsByLid: ${lid}`);
  return new Promise(res =>
    res([
      { mid: 'U1622139C', name: 'Qiu Haoze' },
      {
        mid: 'U1658131C',
        name: 'John Doe Alamak Name Very Damn Freaking Long'
      }
    ])
  );
}

function startSession(lid) {
  console.log(`startSession: ${lid}`);
  return new Promise(res =>
    res({
      data: {
        sid: '1',
        students: [
          { mid: 'U1622139C', name: 'Qiu Haoze' },
          {
            mid: 'U1658131C',
            name: 'John Doe Alamak Name Very Damn Freaking Long'
          },
          { mid: 'U1622139C', name: 'Qiu Haoze' },
          {
            mid: 'U1658131C',
            name: 'John Doe Alamak Name Very Damn Freaking Long'
          },
          { mid: 'U1622139C', name: 'Qiu Haoze' },
          {
            mid: 'U1658131C',
            name: 'John Doe Alamak Name Very Damn Freaking Long'
          },
          { mid: 'U1622139C', name: 'Qiu Haoze' },
          {
            mid: 'U1658131C',
            name: 'John Doe Alamak Name Very Damn Freaking Long'
          },
          { mid: 'U1622139C', name: 'Qiu Haoze' },
          {
            mid: 'U1658131C',
            name: 'John Doe Alamak Name Very Damn Freaking Long'
          },
          { mid: 'U1622139C', name: 'Qiu Haoze' },
          {
            mid: 'U1658131C',
            name: 'John Doe Alamak Name Very Damn Freaking Long'
          }
        ]
      }
    })
  );
}

function endSession(sid) {
  console.log(`endSession: ${sid}`);
  return new Promise(res => res({}));
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
  getStudentsByLid,
  verifyToken,
  startSession,
  endSession
};
