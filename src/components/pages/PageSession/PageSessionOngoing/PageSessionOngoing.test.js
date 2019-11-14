import React from 'react';
import { mount } from 'enzyme';
import PageSessionOngoing from './PageSessionOngoing';

import * as sessionHook from '../../../../hooks/sessionHook';

// eslint-disable-next-line no-undef
describe('PageSessionOngoing component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    const sessionStub = {
      lab: 'CZ3002-TS5',
      postImage: () => {}
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(sessionHook, 'useSession').mockImplementation(() => sessionStub);
    mount(<PageSessionOngoing />);
  });
});
