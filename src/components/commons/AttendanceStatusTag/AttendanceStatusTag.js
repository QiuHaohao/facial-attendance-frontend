import PropTypes from 'prop-types';
import React from 'react';

import { Tag } from 'antd';

import { makeGetterWithDefault } from '../../../utils';

const statusTextMap = {
  A: 'Present',
  L: 'Late',
  AB: 'Absent w/o valid reason',
  MC: 'Absent w valid reason'
};

const statusAbbrMap = {
  A: 'A',
  L: 'L',
  AB: 'AB',
  MC: 'MC'
};

const colorMap = {
  A: 'green',
  L: 'gold',
  AB: 'red',
  MC: 'blue'
};

const getStatusTextMap = makeGetterWithDefault(statusTextMap, 'No status');

const getStatusAbbrMap = makeGetterWithDefault(statusAbbrMap, 'N');

const getColorMap = makeGetterWithDefault(colorMap, 'grey');

function AttendanceStatusTag(props) {
  const text = props.abbreviate
    ? getStatusAbbrMap(props.status)
    : getStatusTextMap(props.status);
  const color = getColorMap(props.status);
  return <Tag color={color}>{text}</Tag>;
}

AttendanceStatusTag.propTypes = {
  status: PropTypes.oneOf(['A', 'L', 'AB', 'MC', undefined]),
  abbreviate: PropTypes.bool
};

export default AttendanceStatusTag;
