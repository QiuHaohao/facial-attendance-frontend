import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import LabSessions from './LabSessions';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabSessions component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', async () => {
    const location = {
      pathname: '/labs/1_CZ3002-TS4/students'
    };

    const history = {
      push: ''
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getSessionsByLid').mockImplementation(() =>
      Promise.resolve([
        {
          sid: 1,
          time: '14:03',
          date: '11-03'
        },
        {
          sid: 2,
          time: '14:03',
          date: '11-04'
        }
      ])
    );
    await act(async () => {
      mount(<LabSessions history={history} location={location} />);
    });
  });
});
