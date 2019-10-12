import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import { List } from 'antd';

import AttendanceStatusTag from '../../../../commons/AttendanceStatusTag';

const order = {
  A: 0,
  L: 1,
  AB: 2,
  MC: 3
};

function AttendanceList(props) {
  const sortedStudents = _.sortBy(props.students, [
    student => order[student.status],
    'name'
  ]);
  return (
    <List
      className="student-list"
      dataSource={sortedStudents}
      renderItem={student => (
        <List.Item className="student-list-item" key={student.mid}>
          <List.Item.Meta title={student.name} />
          <AttendanceStatusTag abbreviate status={student.status} />
        </List.Item>
      )}
    />
  );
}

AttendanceList.propTypes = {
  students: PropTypes.array
};

export default AttendanceList;
