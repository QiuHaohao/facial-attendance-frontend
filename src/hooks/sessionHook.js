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
  const [startTime, setStartTime] = useState(null);
  const [students, setStudents] = useState(null);
  const [midsOfStudentsPresent, setMidsOfStudentsPresent] = useState(null);

  const handleSuccessfulSessionStart = res => {
    // should store the session ID when starting session
    setIsOnGoing(true);
    setSid(res.data.sid);
    setStartTime(Date.now());
    setStudents(res.data.students);
  };

  const handleSuccessfulSessionEnd = () => {
    // should clear the session ID when starting session
    setIsOnGoing(false);
    setSid(null);
    setStartTime(null);
    setStudents(null);
    setMidsOfStudentsPresent(null);
  };

  const startSession = lid => {
    return api.startSession(lid).then(handleSuccessfulSessionStart, () => {
      message.error('Session Failed to Start!');
    });
  };

  const endSession = () => {
    return api.endSession.then(handleSuccessfulSessionEnd);
  };

  const postImage = ({ base64Image }) => {
    return api.postBase64Image(base64Image).then(res => {
      setMidsOfStudentsPresent(res.data.mids);
    });
  };

  useEffect(() => {
    // load from local storage and resume session?
  });

  return {
    isOnGoing,
    sid,
    startTime,
    students,
    midsOfStudentsPresent,
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
