import React from 'react';

import './UserStatus.css';

import UserStatusSignedIn from './UserStatusSignedIn';
import UserStatusNotSignedIn from './UserStatusNotSignedIn';
import { useUser } from '../../../../hooks/userHook';

function UserStatus() {
  const user = useUser();
  if (user.isSignedIn) {
    return <UserStatusSignedIn />;
  }
  return <UserStatusNotSignedIn />;
}

export default UserStatus;
