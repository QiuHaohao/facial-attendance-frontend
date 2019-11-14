function seAttHandler(record, e, sessions) {
  const tempsessions = sessions;
  for (let i = 0; i < tempsessions.length; i += 1) {
    if (tempsessions[i].sid === record.sid) {
      tempsessions[i].attendance = e;
      break;
    }
  }
  return tempsessions;
}

function stAttHandler(record, e, students) {
  const tempstudentsA = students;
  for (let i = 0; i < tempstudentsA.length; i += 1) {
    if (tempstudentsA[i].mid === record.mid) {
      tempstudentsA[i].attendance = e;
      break;
    }
  }
  return tempstudentsA;
}

function seReHandler(record, e, sessions) {
  const tempsessions = sessions;
  for (let i = 0; i < tempsessions.length; i += 1) {
    if (tempsessions[i].sid === record.sid) {
      tempsessions[i].remark = e;
      break;
    }
  }
  return tempsessions;
}

function stReHandler(record, e, students) {
  const tempstudentsR = students;
  for (let i = 0; i < tempstudentsR.length; i += 1) {
    if (tempstudentsR[i].mid === record.mid) {
      tempstudentsR[i].remark = e;
      break;
    }
  }
  return tempstudentsR;
}

export default {
  seAttHandler,
  seReHandler,
  stAttHandler,
  stReHandler
};
