import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { mount } from 'enzyme';

import * as userHook from '../../../hooks/userHook';

import AbstractLinkPathMenu from './AbstractLinkPathMenu';

// eslint-disable-next-line no-undef
describe('AbstractLinkPathMenu component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    const menuItemsSignedIn = [
      { displayName: 'Session', path: '/session' },
      { displayName: 'Lab Groups', path: '/labs' }
    ];
    const userStub = {
      labs: [
        { lid: 1, course: 'CZ3002', group: 'TS5' },
        { lid: 2, course: 'CZ3002', group: 'TS4' }
      ]
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(userHook, 'useUser').mockImplementation(() => userStub);
    mount(
      <Router>
        <AbstractLinkPathMenu items={menuItemsSignedIn} />
      </Router>
    );
  });
});
