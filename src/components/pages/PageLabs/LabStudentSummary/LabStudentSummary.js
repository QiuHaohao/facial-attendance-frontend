/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table, Select, Input, Button } from 'antd';
import api from '../../../../api/api';

import EntryInfoDisplayer from '../EntryInfoDisplayer/EntryInfoDisplayer';

function LabStudentSummary(props) {
  const matricNO = props.match.params.id;
  const { Option } = Select;

  const [sessions, setSessions] = useState(null);
  const [studentInfo, setStudentInfo] = useState(null);

  useEffect(() => {
    api.getStudentByMid(matricNO).then(res => {
      setSessions(res.sessions);
      setStudentInfo({
        name: res.name,
        email: res.email
      });
    });
    return () => {
      setSessions(null);
      setStudentInfo(null);
    };
  }, []);
  const changeAttendance = (record, e) => {
    const tempsessions = sessions;
    for (let i = 0; i < tempsessions.length; i += 1) {
      if (tempsessions[i].sessionID === record.sid)
        tempsessions[i].attendance = e;
      break;
    }
    setSessions(tempsessions);
  };

  const changeRemark = (record, e) => {
    const tempsessions = sessions;
    for (let i = 0; i < tempsessions.length; i += 1) {
      if (tempsessions[i].sessionID === record.sid) tempsessions[i].remark = e;
      break;
    }
    setSessions(tempsessions);
  };

  const saveChanges = () => {
    api.saveStudentChangesByMid(sessions, matricNO);
  };

  const columns = [
    {
      title: 'Session ID',
      dataIndex: 'sid',
      key: 'sessionID',
      align: 'center'
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance',
      key: 'attendance',
      render: (attendance, record) => (
        <Select
          defaultValue={attendance}
          onChange={e => changeAttendance(record, e)}
          style={{ width: 200 }}
        >
          <Option value="A">Attended</Option>
          <Option value="L">Late</Option>
          <Option value="AB">Absence without valid reasons</Option>
          <Option value="MC">Missing with valid reasons</Option>
        </Select>
      ),
      align: 'center'
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
      key: 'remark',
      render: (remark, record) => (
        <Input
          placeholder="Remarks"
          defaultValue={remark}
          onBlur={e => changeRemark(record, e.target.value)}
        />
      ),
      align: 'center'
    }
  ];

  return (
    <div>
      {studentInfo == null ? (
        <div>Loading...</div>
      ) : (
        <EntryInfoDisplayer
          content={[studentInfo.name, matricNO, studentInfo.email]}
          header={['Name', 'Matric No', 'Email']}
        />
      )}
      <Table
        columns={columns}
        dataSource={sessions}
        pageination={{
          pageSize: '5',
          simple: true
        }}
        rowKey={record => record.sid}
        className="standard-table"
      />
      <Button onClick={saveChanges} className="lab-save-button">
        Save
      </Button>
    </div>
  );
}

LabStudentSummary.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(LabStudentSummary);
