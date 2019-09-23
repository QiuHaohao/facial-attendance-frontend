import React from 'react';

import { Button, List } from 'antd';

import SessionDuration from './SessionDuration';
import ImageCapturer from './ImageCapturer';

import { useSession } from '../../../../hooks/sessionHook';

import Statistic from '../../../commons/Statistic';

import './PageSessionOngoing.css';

function PageSessionOngoing() {
  const session = useSession();
  return (
    <div className="page-session-ongoing">
      <div className="session-info">
        <div className="session-info-header">
          <Statistic title="Lab Group" value={session.lab.displayName} />
          <Button type="danger">End Session</Button>
        </div>
        <List
          className="student-list"
          dataSource={session.students}
          renderItem={student => (
            <List.Item className="student-list-item" key={student.mid}>
              <List.Item.Meta title={student.name} />
              <AttendanceStatusTag status={student.status} />
            </List.Item>
          )}
        />
      </div>
      <div className="live-capture">
        <div className="live-capture-header">
          <div className="live-capture-title">Live Capture</div>
          <SessionDuration />
        </div>
        <ImageCapturer />
      </div>
    </div>
  );
}

export default PageSessionOngoing;
