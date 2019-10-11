import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function LabNav(props) {
  const itemStyle = {
    width: '50%',
    textAlign: 'center'
  };
  const { id, curPath } = props;
  const sessionPath = `/labs/${id}/sessions`;
  const studentPath = `/labs/${id}/students`;
  const validkeys = !!(curPath === sessionPath || curPath === studentPath);
  const targetKey = curPath === sessionPath ? '1' : '2';
  const selectedkeys = validkeys ? [targetKey] : null;
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      selectedKeys={selectedkeys}
    >
      <Menu.Item style={itemStyle} key="1">
        <Link to={sessionPath}>Sessions</Link>
      </Menu.Item>
      <Menu.Item style={itemStyle} key="2">
        <Link to={studentPath}>Students</Link>
      </Menu.Item>
    </Menu>
  );
}
LabNav.propTypes = {
  id: PropTypes.string.isRequired,
  curPath: PropTypes.string.isRequired
};

export default LabNav;
