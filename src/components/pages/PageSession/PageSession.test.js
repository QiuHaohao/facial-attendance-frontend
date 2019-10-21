import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import * as sessionHook from '../../../hooks/sessionHook';
import * as userHook from '../../../hooks/userHook';

import PageSession from './PageSession';

const renderWithIsOnGoing = isOnGoing => () => {
  const sessionStub = {
    isOnGoing
  };
  // eslint-disable-next-line no-undef
  jest.spyOn(sessionHook, 'useSession').mockImplementation(() => sessionStub);
  const userStub = {
    labs: []
  };
  // eslint-disable-next-line no-undef
  jest.spyOn(userHook, 'useUser').mockImplementation(() => userStub);
  mount(
    <MemoryRouter initialEntries={['/session']}>
      <PageSession />
    </MemoryRouter>
  );
};

// eslint-disable-next-line no-undef
describe('PageSession component', () => {
  // eslint-disable-next-line no-undef
  test(
    'renders without crashing when session isOnGoing',
    renderWithIsOnGoing(true)
  );

  // eslint-disable-next-line no-undef
  test(
    'renders without crashing when session not isOnGoing',
    renderWithIsOnGoing(false)
  );
});
