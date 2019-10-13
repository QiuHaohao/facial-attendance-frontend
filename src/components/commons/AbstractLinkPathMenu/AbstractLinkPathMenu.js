import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import { withRouter, Link } from 'react-router-dom';
import { Menu } from 'antd';
import { useUser } from '../../../hooks/userHook';

function AbstractLinkPathMenu(props) {
  const { SubMenu } = Menu;
  const { location, items } = props;
  const selectedKeys = _.filter(
    [...items.keys()],
    key =>
      location.pathname.length >= items[key].path.length &&
      items[key].path === location.pathname.substr(0, items[key].path.length)
  ).map(String);
  const user = useUser();
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
      selectedKeys={selectedKeys}
    >
      {items.map((item, index) => {
        if (item.displayName === 'Lab Groups') {
          return (
            <SubMenu key={String(index)} title={item.displayName}>
              {user.labs.map(lab => (
                <Menu.Item key={`sub${lab.lid}`}>
                  <Link
                    to={`${item.path}/${lab.lid}${lab.course}-${lab.group}`}
                  >
                    {`${lab.course}-${lab.group}`}
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          );
        }

        return (
          <Menu.Item key={String(index)}>
            <Link to={item.path}>{item.displayName}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

AbstractLinkPathMenu.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(AbstractLinkPathMenu);
