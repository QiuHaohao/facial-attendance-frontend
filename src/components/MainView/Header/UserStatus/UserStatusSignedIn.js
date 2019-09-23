import React from 'react';
import { Modal } from 'antd';

import { useUser } from '../../../../hooks/userHook';
import { useSession } from '../../../../hooks/sessionHook';

const { confirm } = Modal;

function UserStatusSignedIn() {
  const session = useSession();
  const user = useUser();
  const showConfirm = () => {
    confirm({
      title: 'Do you Want to sign out?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: user.signOut
    });
  };
  const logout = (
    <div className="sign-out" onClick={showConfirm}>
      Sign Out.
    </div>
  );
  return (
    <div className="user-status user-status-signed-in">
      {`Hi, ${user.userName}! `}
      {session.isOnGoing ? null : logout}
    </div>
  );
}

export default UserStatusSignedIn;
