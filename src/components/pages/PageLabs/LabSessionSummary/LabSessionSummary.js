/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import { Table, Select, Input, Button, message } from 'antd';
import React, { useState, useEffect } from 'react';
import api from '../../../../api/api';
import InputChangeHandler from '../InputChangeHandler/InputChangeHandler';
import EntryInfoDisplayer from '../EntryInfoDisplayer/EntryInfoDisplayer';

function LabSessionSummary(props) {
  const sessionID = props.match.params.id;
  const { Option } = Select;

  const [students, setStudents] = useState(null);
  const [sessionInfo, setSessionInfo] = useState(null);

  useEffect(() => {
    api.getSessionBySid(sessionID).then(res => {
      setSessionInfo({
        date: res.date,
        time: res.time
      });
      setStudents(res.students);
    });
  }, [sessionID]);
  const changeAttendance = (record, e) => {
    setStudents(InputChangeHandler.stAttHandler(record, e, students));
  };

  const changeRemark = (record, e) => {
    setStudents(InputChangeHandler.stReHandler(record, e, students));
  };

  const saveChanges = () => {
    api.saveStudentChangesBySid(students, sessionID).then(
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: 'Matric No.',
      dataIndex: 'mid',
      key: 'matricno',
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
      {sessionInfo == null ? (
        <div className="loading">Loading...</div>
      ) : (
        <EntryInfoDisplayer
          content={[sessionID, sessionInfo.date, sessionInfo.time]}
          header={['Session ID', 'Date', 'Time']}
        />
      )}
      {students == null ? (
        <div className="loading-table">Loading...</div>
      ) : (
        <div>
          <Table
            columns={columns}
            dataSource={students}
            pagination={{
              pageSize: 5,
              simple: true
            }}
            rowKey={record => record.mid}
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

LabSessionSummary.propTypes = {
  match: PropTypes.object.isRequired
};

export default LabSessionSummary;
