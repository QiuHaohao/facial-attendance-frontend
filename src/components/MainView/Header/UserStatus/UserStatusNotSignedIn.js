import React from 'react';
import { withRouter } from 'react-router-dom';

function UserStatusNotSignedIn() {
  return (
    <div className="user-status user-status-not-signed-in">
      You are not signed in.
    </div>
  );
}

export default withRouter(UserStatusNotSignedIn);
