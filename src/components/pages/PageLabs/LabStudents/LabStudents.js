import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import api from '../../../../api/api';
import LabNameHolder from '../LabNameHolder/LabNameHolder';
import '../PageLabs.css';

function LabStudents(props) {
  const defaultPath = props.location.pathname;
  const lid = defaultPath.split('/')[2].split('_')[0];
  const lname = defaultPath.split('/')[2].split('_')[1];

  const [students, setStudents] = useState(null);
  useEffect(() => {
    api.getStudentsByLid(lid).then(res => {
      setStudents(res);
    });
  }, [lid]);
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
      key: 'mid',
      align: 'center'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center'
    }
  ];

  const LinkTo = id => {
    props.history.push(`${defaultPath}/${id}`);
  };

  return (
    <div>
      <LabNameHolder lname={lname} />
      {students == null ? (
        <div className="loading-table">Loading...</div>
      ) : (
        <Table
          columns={columns}
          dataSource={students}
          pagination={{
            pageSize: 6,
            simple: true
          }}
          rowKey={record => record.mid}
          onRowClick={record => {
            LinkTo(record.mid);
          }}
          className="standard-table"
        />
      )}
    </div>
  );
}

LabStudents.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(LabStudents);
