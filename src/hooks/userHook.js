import PropTypes from 'prop-types';
import React, { useState, useContext, createContext } from 'react';

const userContext = createContext();

export const useUser = () => {
  return useContext(userContext);
};

function useProvideUser() {
  const [userName, setUserName] = useState(null);
  const [tid, setTid] = useState(null);
  const [labs, setLabs] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const signIn = ({ username, password, remember }) => {
    console.log('user.signIn: ', username, password, remember);
    setUserName(username);
    setTid(1);
    setLabs([{ lid: 'AY1920_CZ3002_TS4' }, { lid: 'AY1920_CZ3002_TS5' }]);
    setIsSignedIn(true);
  };

  const signOut = () => {
    setUserName(null);
    setTid(null);
    setLabs(null);
    setIsSignedIn(false);
  };

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

ProvideUser.propTypes = {
  children: PropTypes.element.isRequired
};
