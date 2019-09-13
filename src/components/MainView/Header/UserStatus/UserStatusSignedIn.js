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
      <a onClick={showConfirm}>Sign Out.</a>
    </div>
  );
}

export default UserStatusSignedIn;
