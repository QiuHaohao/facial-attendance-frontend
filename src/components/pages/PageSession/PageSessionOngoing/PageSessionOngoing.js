import React, { useMemo } from 'react';

import { Button, Modal } from 'antd';

import SessionDuration from './SessionDuration';
import ImageCapturer from './ImageCapturer';

import { getDisplayNameFromLab } from '../../../../hooks/userHook';
import { useSession } from '../../../../hooks/sessionHook';

import Statistic from '../../../commons/Statistic';

import AttendanceList from './AttendanceList';

import './PageSessionOngoing.css';

const { confirm } = Modal;

function PageSessionOngoing() {
  const session = useSession();

  return useMemo(() => {
    const showConfirm = () => {
      confirm({
        title: 'Do you want to end this session?',
        okText: 'Yes',
        cancelText: 'No',
        onOk: session.endSession
      });
    };
    return (
      <div className="page-session-ongoing">
        <div className="session-info">
          <div className="session-info-header">
            <Statistic
              title="Lab Group"
              value={getDisplayNameFromLab(session.lab)}
            />
            <Button type="danger" onClick={showConfirm}>
              End Session
            </Button>
          </div>
          <AttendanceList students={session.students} />
        </div>
        <div className="live-capture">
          <div className="live-capture-header">
            <div className="live-capture-title">Live Capture</div>
            <SessionDuration />
          </div>
          <ImageCapturer onPostImage={session.postImage} />
        </div>
      </div>
    );
  }, [session.lab, session.students, session.postImage, session.endSession]);
}

export default PageSessionOngoing;
