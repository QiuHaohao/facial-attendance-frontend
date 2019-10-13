import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Table } from 'antd';
import api from '../../../../api/api';
import LabNameHolder from '../LabNameHolder/LabNameHolder';

import '../PageLabs.css';

function LabSessions(props) {
  const defaultPath = props.location.pathname;
  const lid = defaultPath.split('/')[2][0];
  const lname = defaultPath.split('/')[2].substr(1);
  const [sessions, setSessions] = useState(null);

  useEffect(() => {
    api.getSessionsByLid(lid).then(res => {
      setSessions(res);
    });
  }, [lid]);

  const columns = [
    {
      title: 'SessionID',
      dataIndex: 'sid',
      key: 'sid',
      align: 'center',
      sorter: (a, b) => a.sid - b.sid,
      defaultSortOrder: 'descend'
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      align: 'center'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      align: 'center'
    }
  ];

  const LinkTo = id => {
    props.history.push(`${defaultPath}/${id}`);
    // tbc
  };
  return (
    <div>
      <LabNameHolder lname={lname} />
      {sessions == null ? (
        <div className="loading-table">Loading...</div>
      ) : (
        <Table
          columns={columns}
          dataSource={sessions}
          pagination={{
            pageSize: 5,
            simple: true
          }}
          rowKey={record => record.sid}
          onRowClick={record => {
            LinkTo(record.sid);
          }}
          className="standard-table"
        />
      )}
    </div>
  );
}

LabSessions.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(LabSessions);
