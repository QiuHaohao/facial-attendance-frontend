/* istanbul ignore file */
import PropTypes from 'prop-types';
import React, { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';

import { message } from 'antd';

import api from '../api';

const userContext = createContext();

export const useUser = () => {
  return useContext(userContext);
};

function useProvideUser() {
  const [isSignedIn, setIsSignedIn] = useState(undefined);
  const [userName, setUserName] = useState(null);
  const [tid, setTid] = useState(null);
  const [labs, setLabs] = useState(null);

  const handleSuccessfulSignIn = res => {
    setUserName(res.data.user.username);
    setTid(res.data.user.id);
    setLabs(res.data.user.labs);
    axios.defaults.headers.common.Authorization = `JWT ${res.data.token}`;
    sessionStorage.setItem('jwtToken', res.data.token);
    setIsSignedIn(true);
  };

  const handleNoToken = () => {
    setIsSignedIn(false);
  };

  const verify = ({ token }) => {
    return api.verifyToken(token).then(handleSuccessfulSignIn, () => {
      setIsSignedIn(false);
    });
  };

  const signIn = ({ username, password }) => {
    return api.getToken(username, password).then(handleSuccessfulSignIn, () => {
      message.warning('Wrong Credential, try again!');
    });
  };

  const signOut = () => {
    setIsSignedIn(false);
    setUserName(null);
    setTid(null);
    // lid
    // displayName
    setLabs(null);
    delete axios.defaults.headers.common.Authorization;
    sessionStorage.removeItem('jwtToken');
  };

  useEffect(() => {
    if (isSignedIn === undefined) {
      const tokenInSessionStorage = sessionStorage.getItem('jwtToken');
      if (tokenInSessionStorage !== null) {
        verify({ token: tokenInSessionStorage });
      } else {
        handleNoToken(false);
      }
    }
  });

  return {
    userName,
    tid,
    labs,
    isSignedIn,
    signIn,
    signOut
  };
}

export function ProvideUser({ children }) {
  const user = useProvideUser();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

// GETTERS

export function getDisplayNameFromLab(lab) {
  return `${lab.course} - ${lab.group}`;
}

ProvideUser.propTypes = {
  children: PropTypes.element.isRequired
};
