import React from 'react';
import { Modal } from 'antd';

import { useUser } from '../../../../hooks/userHook';

const { confirm } = Modal;

function UserStatusSignedIn() {
  const user = useUser();
  const showConfirm = () => {
    confirm({
      title: 'Do you Want to sign out?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: user.signOut
    });
  };
  return (
    <div className="user-status user-status-signed-in">
      {`Hi, ${user.userName}! `}
      <div className="sign-out" onClick={showConfirm}>
        Sign Out.
      </div>
    </div>
  );
}

export default UserStatusSignedIn;
