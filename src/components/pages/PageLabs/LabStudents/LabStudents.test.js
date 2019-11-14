import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import LabStudents from './LabStudents';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabStudents component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', async () => {
    const location = {
      pathname: '/labs/1_CZ3002-TS4/students'
    };

    const history = {
      push: ''
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getStudentsByLid').mockImplementation(() =>
      Promise.resolve([
        {
          name: 'XXX',
          mid: 'U27192812D',
          email: '000@gmail.com'
        },
        {
          name: 'XXX',
          mid: 'U83928390X',
          email: '111@gmail.com'
        }
      ])
    );
    await act(async () => {
      mount(<LabStudents history={history} location={location} />);
    });
  });
});
