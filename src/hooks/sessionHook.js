/* istanbul ignore file */
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState, useContext, createContext, useEffect } from 'react';

import { message } from 'antd';

import api from '../api';

const sessionContext = createContext();

export const useSession = () => {
  return useContext(sessionContext);
};

function useProvideSession() {
  const [isOnGoing, setIsOnGoing] = useState(false);
  const [sid, setSid] = useState(null);
  const [lab, setLab] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [students, setStudents] = useState(null);

  const changeStudentStatus = ({ mid, status }, studentList) => {
    const index = _.findIndex(studentList, { mid });
    return [
      ...studentList.slice(0, index),
      { ...students[index], status },
      ...studentList.slice(index + 1)
    ];
  };

  const updateStudentStatus = statuses => {
    let newStudents = students;
    statuses.forEach(status => {
      newStudents = changeStudentStatus(status, newStudents);
    });
    if (!_.isEqual(newStudents, students)) {
      setStudents(newStudents);
    }
  };

  const handleSuccessfulSessionStart = (
    labObject,
    resStartSession,
    resStudents
  ) => {
    // should store the session ID when starting session
    setSid(resStartSession.data.sid);
    setLab(labObject);
    setStartTime(Date.now());
    setStudents(resStudents);
    setIsOnGoing(true);
  };

  const startSession = labObject => {
    return api.startSession(labObject.lid).then(
      resStartSession => {
        api.getStudentsByLid(labObject.lid).then(resStudents => {
          handleSuccessfulSessionStart(labObject, resStartSession, resStudents);
        });
      },
      () => {
        message.error('Session Failed to Start!');
      }
    );
  };

  const endSession = () => {
    api
      .endSession(sid)
      .then(res => console.log('Res', res), res => console.log('Rej', res));
    setIsOnGoing(false);
    setSid(null);
    setLab(null);
    setStartTime(null);
    setStudents(null);
  };

  const postImage = base64Image => {
    return api.postBase64Image(sid, base64Image).then(updateStudentStatus);
  };

  useEffect(() => {
    // load from local storage and resume session?
  });

  return {
    isOnGoing,
    sid,
    lab,
    startTime,
    students,
    startSession,
    endSession,
    postImage
  };
}

export function ProvideSession({ children }) {
  const user = useProvideSession();
  return (
    <sessionContext.Provider value={user}>{children}</sessionContext.Provider>
  );
}

ProvideSession.propTypes = {
  children: PropTypes.element.isRequired
};
