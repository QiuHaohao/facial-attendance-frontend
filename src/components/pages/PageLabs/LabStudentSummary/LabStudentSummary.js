/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Select, Input, Button, message } from 'antd';
import api from '../../../../api/api';
import InputChangeHandler from '../InputChangeHandler/InputChangeHandler';

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
  }, [matricNO]);
  const changeAttendance = (record, e) => {
    setSessions(InputChangeHandler.seAttHandler(record, e, sessions));
  };

  const changeRemark = (record, e) => {
    setSessions(InputChangeHandler.seReHandler(record, e, sessions));
  };

  const saveChanges = () => {
    api.saveStudentChangesByMid(sessions, matricNO).then(
      () => {
        message.success('Saved successfully!');
      },
      () => {
        message.error('There was an error, please try again!');
      }
    );
  };

  const columns = [
    {
      title: 'Session ID',
      dataIndex: 'sid',
      key: 'sessionID',
      align: 'center',
      sorter: (a, b) => a.sid - b.sid,
      defaultSortOrder: 'descend'
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
      {sessions == null ? (
        <div className="loading-table">Loading...</div>
      ) : (
        <div>
          <Table
            columns={columns}
            dataSource={sessions}
            pageination={{
              pageSize: 5,
              simple: true
            }}
            rowKey={record => record.sid}
            className="standard-table"
          />
          <Button onClick={saveChanges} className="lab-save-button">
            Save
          </Button>
        </div>
      )}
    </div>
  );
}

LabStudentSummary.propTypes = {
  match: PropTypes.object.isRequired
};

export default LabStudentSummary;
