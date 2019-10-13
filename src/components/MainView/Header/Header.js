import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';
import UserStatus from './UserStatus';
import { useUser } from '../../../hooks/userHook';

import AbstractLinkPathMenu from '../../commons/AbstractLinkPathMenu';

function Header() {
  const menuItemsSignedIn = [
    { displayName: 'Session', path: '/session' },
    { displayName: 'Lab Groups', path: '/labs' }
  ];
  const menuItemsNotSignedIn = [{ displayName: 'Sign in', path: '/signin' }];
  const user = useUser();
  return (
    <div className="header">
      <UserStatus />
      <AbstractLinkPathMenu
        items={user.isSignedIn ? menuItemsSignedIn : menuItemsNotSignedIn}
      />
    </div>
  );
}

export default withRouter(Header);
