import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import { withRouter, Link } from 'react-router-dom';
import { Menu } from 'antd';

function AbstractLinkPathMenu(props) {
  const { location, items } = props;
  const selectedKeys = _.filter(
    [...items.keys()],
    key => items[key].path === location.pathname
  ).map(String);
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
      selectedKeys={selectedKeys}
    >
      {items.map((item, index) => (
        <Menu.Item key={String(index)}>
          <Link to={item.path}>{item.displayName}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

AbstractLinkPathMenu.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(AbstractLinkPathMenu);
