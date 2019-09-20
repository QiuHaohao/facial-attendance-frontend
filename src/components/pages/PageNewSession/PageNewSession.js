import React from 'react';

import { useUser } from '../../../hooks/userHook';

import LabSelector from './LabSelector';

import './PageNewSession.css';

function PageNewSession() {
  const user = useUser();
  return (
    <div className="page-new-session">
      <LabSelector labs={user.labs} />
    </div>
  );
}

export default PageNewSession;
