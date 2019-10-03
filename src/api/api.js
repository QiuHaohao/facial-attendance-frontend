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


function getSessionsByLid(lid){
  return axios
    .get(`${config.urlBase + config.pathSession}?lab=${lid}`)
    .then(res=>
      res.data.map(s=> {
        return { sid: s.session_id, venue: s,venue, time: s.time, date: s.date};
      }))
}

function getSessionBySid(sid){
  return axios
    .get(`${config.urlBase + config.pathSession}?session=${sid}`)
    .then(s=>
      {
        return { sid: s.session_id, venue: s.venue, time: s.time, date: s.date,students:s.students};
      })
}
//transfer problem for students?

function getStudentByMid(mid){
  return axios
  .get(`${config.urlBase + config.pathStudents}?student=${mid}`)
  .then(s=>
    {
      return { mid: s.matric_num, name: s.name, email: s.email, sessions: s.sessions};
    })
}

function saveStudentChangesBySid(students,sid){
  return axios.post(`${config.urlBase + config.pathSession}?session=${sid}`,{
    students: students
  })
} 

function saveStudentChangesByMid(sessions,mid){
  return axios.post(`${config.urlBase + config.pathStudents}?student=${mid}`,{
    sessions: sessions
  })
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
  getSessionsByLid,
  verifyToken,
  startSession,
  getSessionBySid,
  getStudentByMid,
  saveStudentChangesBySid,
  saveStudentChangesByMid,
};
