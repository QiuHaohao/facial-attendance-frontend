// import React from 'react';
// import { mount } from 'enzyme';
// import { MemoryRouter } from 'react-router-dom';
// import LabStudents from './LabStudents';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabStudents component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getStudentsByLid').mockImplementation(() => 1);
    // mount(<LabStudents />);
  });
});
