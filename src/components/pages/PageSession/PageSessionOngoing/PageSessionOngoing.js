import React from 'react';

import { Button, List, Modal } from 'antd';

import SessionDuration from './SessionDuration';
import ImageCapturer from './ImageCapturer';

import { getDisplayNameFromLab } from '../../../../hooks/userHook';
import { useSession } from '../../../../hooks/sessionHook';

import Statistic from '../../../commons/Statistic';
import AttendanceStatusTag from '../../../commons/AttendanceStatusTag';

import './PageSessionOngoing.css';

const { confirm } = Modal;

function PageSessionOngoing() {
  const session = useSession();
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
        <List
          className="student-list"
          dataSource={session.students}
          renderItem={student => (
            <List.Item className="student-list-item" key={student.mid}>
              <List.Item.Meta title={student.name} />
              <AttendanceStatusTag abbreviate status={student.status} />
            </List.Item>
          )}
        />
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
}

export default PageSessionOngoing;
