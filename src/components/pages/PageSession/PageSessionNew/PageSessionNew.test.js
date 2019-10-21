import React from 'react';
import { mount } from 'enzyme';
import PageSessionNew from './PageSessionNew';

import * as userHook from '../../../../hooks/userHook';

// eslint-disable-next-line no-undef
describe('PageSessionNew component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    const userStub = {
      labs: [
        { lid: 1, course: 'CZ3002', group: 'TS5' },
        { lid: 2, course: 'CZ3002', group: 'TS4' }
      ]
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(userHook, 'useUser').mockImplementation(() => userStub);

    mount(<PageSessionNew />);
  });
});
