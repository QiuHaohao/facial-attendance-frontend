import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { mount } from 'enzyme';

import * as sessionHook from '../../../hooks/sessionHook';
import * as userHook from '../../../hooks/userHook';

import Content from './Content';

const renderWithIsSignedInAndIsOnGoing = (isSignedIn, isOnGoing) => () => {
  const userStub = {
    isSignedIn,
    labs: [
      { lid: 1, course: 'CZ3002', group: 'TS5' },
      { lid: 2, course: 'CZ3002', group: 'TS4' }
    ]
  };
  // eslint-disable-next-line no-undef
  jest.spyOn(userHook, 'useUser').mockImplementation(() => userStub);
  const sessionStub = {
    isOnGoing
  };
  // eslint-disable-next-line no-undef
  jest.spyOn(sessionHook, 'useSession').mockImplementation(() => sessionStub);
  mount(
    <MemoryRouter initialEntries={['/']}>
      <Content />
    </MemoryRouter>
  );
};

// eslint-disable-next-line no-undef
describe('Content component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing when with all isSignedIn and isOnGoing configuration.', () => {
    renderWithIsSignedInAndIsOnGoing(true, true);
    renderWithIsSignedInAndIsOnGoing(true, false);
    renderWithIsSignedInAndIsOnGoing(false, true);
    renderWithIsSignedInAndIsOnGoing(false, false);
  });
});
