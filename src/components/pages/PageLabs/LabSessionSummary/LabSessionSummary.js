/* eslint-disable react/display-name */
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Select, Input, Button, message } from 'antd';
import React, { useState, useEffect } from 'react';
import api from '../../../../api/api';
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
    const tempstudentsA = students;
    for (let i = 0; i < tempstudentsA.length; i += 1) {
      if (tempstudentsA[i].mid === record.mid) {
        tempstudentsA[i].attendance = e;
        break;
      }
    }
    setStudents(tempstudentsA);
  };

  const changeRemark = (record, e) => {
    const tempstudentsR = students;
    for (let i = 0; i < tempstudentsR.length; i += 1) {
      if (tempstudentsR[i].mid === record.mid) {
        tempstudentsR[i].remark = e;
        break;
      }
    }
    setStudents(tempstudentsR);
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
        <div>Loading...</div>
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

export default withRouter(LabSessionSummary);
