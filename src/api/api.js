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
        return { mid: s.mid, name: s.name, email: s.email };
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

function date(dt) {
  return dt.split('T')[0];
}

function timeInMin(dt) {
  const min = dt
    .split('T')[1]
    .split('.')[0]
    .split(':');
  return `${min[0]}:${min[1]}`;
}
function getSessionsByLid(lid) {
  return axios.get(`${config.urlBase + config.pathSessions + lid}`).then(res =>
    res.data.map(s => {
      return {
        sid: s.sid,
        time: timeInMin(s.session_time),
        date: date(s.session_time)
      };
    })
  );
}

function getSessionBySid(sid) {
  return axios.get(`${config.urlBase + config.pathSession + sid}`).then(s => {
    return {
      sid: s.data.sid,
      time: timeInMin(s.data.time),
      date: date(s.data.time),
      students: s.data.students
    };
  });
}

function getStudentByMid(mid) {
  return axios.get(`${config.urlBase + config.pathStudent + mid}`).then(s => {
    return {
      mid: s.data.mid,
      name: s.data.name,
      email: s.data.email,
      sessions: s.data.sessions
    };
  });
}

function saveStudentChangesBySid(students, sid) {
  return axios.post(`${config.urlBase + config.pathAttendanceSession}`, {
    sid,
    students
  });
}

function saveStudentChangesByMid(sessions, mid) {
  return axios.post(`${config.urlBase + config.pathStudents + mid}`, {
    sessions
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
  saveStudentChangesByMid
};
