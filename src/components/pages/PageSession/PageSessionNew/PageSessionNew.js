import React from 'react';

import { Redirect } from 'react-router-dom';

import { useSession } from '../../../../hooks/sessionHook';
import { useUser } from '../../../../hooks/userHook';

import LabSelector from './LabSelector';

import './PageSessionNew.css';

function PageSessionNew() {
  const user = useUser();
  const session = useSession();

  const renderRedirectToPageSessionOngoing = () =>
    session.isOnGoing ? <Redirect to="/session/ongoing" /> : null;
  return (
    <div className="page-session-new">
      {renderRedirectToPageSessionOngoing()}
      <LabSelector labs={user.labs} />
    </div>
  );
}

export default PageSessionNew;
