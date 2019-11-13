import React from 'react';
import { mount } from 'enzyme';
import LabSessions from './LabSessions';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabSessions component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    const location = {
      pathname: '/labs/1_CZ3002-TS4/students'
    };

    const history = {
      push: ''
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getSessionsByLid').mockImplementation(() =>
      Promise.resolve({
        json: () => {}
      })
    );
    mount(<LabSessions history={history} location={location} />);
  });
});
