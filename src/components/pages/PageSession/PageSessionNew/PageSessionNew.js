import React from 'react';

import { useUser } from '../../../../hooks/userHook';

import LabSelector from './LabSelector';

import './PageSessionNew.css';

function PageSessionNew() {
  const user = useUser();

  return (
    <div className="page-session-new">
      <LabSelector labs={user.labs} />
    </div>
  );
}

export default PageSessionNew;
