import React from 'react';
import { mount } from 'enzyme';

import { ProvideSession } from '../../../../../hooks/sessionHook';

import SessionDuration from './SessionDuration';

// eslint-disable-next-line no-undef
describe('SessionDuration component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(
      <ProvideSession>
        <SessionDuration />
      </ProvideSession>
    );
  });
});
