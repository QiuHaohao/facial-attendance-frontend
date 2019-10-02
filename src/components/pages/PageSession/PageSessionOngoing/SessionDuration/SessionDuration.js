import React, { useEffect, useState } from 'react';

import { durationUntilNowMilliSecondsToHHMMSS } from '../../../../../utils';
import { useSession } from '../../../../../hooks/sessionHook';

import Statistic from '../../../../commons/Statistic';

import './SessionDuration.css';

function SessionDuration() {
  const session = useSession();
  const [timeElasped, setTimeElasped] = useState(
    durationUntilNowMilliSecondsToHHMMSS(session.startTime)
  );

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      setTimeElasped(durationUntilNowMilliSecondsToHHMMSS(session.startTime));
    }, 1000);
    return () => clearInterval(intervalHandle);
  });
  return <Statistic title="Duration" value={timeElasped} />;
}

export default SessionDuration;
