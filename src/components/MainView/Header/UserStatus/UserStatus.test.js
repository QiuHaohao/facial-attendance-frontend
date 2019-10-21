import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import * as userHook from '../../../../hooks/userHook';
import * as sessionHook from '../../../../hooks/sessionHook';

import UserStatus from './UserStatus';

// eslint-disable-next-line no-undef
describe('UserStatus component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    const userStub = {
      isSignedIn: true
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(userHook, 'useUser').mockImplementation(() => userStub);
    const sessionStub = {
      isOnGoing: false
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(sessionHook, 'useSession').mockImplementation(() => sessionStub);
    mount(
      <Router>
        <UserStatus />
      </Router>
    );
  });
});
