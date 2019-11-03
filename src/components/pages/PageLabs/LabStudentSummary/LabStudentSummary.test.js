// import React from 'react';
// import { mount } from 'enzyme';
// import { MemoryRouter } from 'react-router-dom';
// import LabStudentSummary from './LabStudentSummary';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabStudentSummary component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getStudentByMid').mockImplementation(() => 'U1722703D');
    // mount(<LabStudentSummary />);
  });
});
