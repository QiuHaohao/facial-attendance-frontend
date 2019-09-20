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

  const handleSuccessfulSessionStart = (labObject, res) => {
    // should store the session ID when starting session
    setSid(res.data.sid);
    setLab(labObject);
    setStartTime(Date.now());
    setStudents(res.data.students);
    setIsOnGoing(true);
  };

  const handleSuccessfulSessionEnd = () => {
    // should clear the session ID when starting session
    setIsOnGoing(false);
    setSid(null);
    setStartTime(null);
    setStudents(null);
  };

  const startSession = labObject => {
    return api.startSession(labObject.lid).then(
      res => handleSuccessfulSessionStart(labObject, res),
      () => {
        message.error('Session Failed to Start!');
      }
    );
  };

  const endSession = () => {
    return api.endSession.then(handleSuccessfulSessionEnd);
  };

  const postImage = ({ base64Image }) => {
    return api.postBase64Image(base64Image).then(res => {
      setStudents(res.data);
    });
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
