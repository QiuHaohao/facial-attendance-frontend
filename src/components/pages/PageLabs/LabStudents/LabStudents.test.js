import React from 'react';
import { mount } from 'enzyme';
import LabStudents from './LabStudents';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabStudents component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    const location = {
      pathname: '/labs/1_CZ3002-TS4/students'
    };

    const history = {
      push: ''
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getStudentsByLid').mockImplementation(() =>
      Promise.resolve({
        json: () => {}
      })
    );
    mount(<LabStudents history={history} location={location} />);
  });
});
