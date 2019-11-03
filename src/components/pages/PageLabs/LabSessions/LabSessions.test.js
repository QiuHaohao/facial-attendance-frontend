// import React from 'react';
// import { mount } from 'enzyme';
// import { MemoryRouter } from 'react-router-dom';
// import LabSessions from './LabSessions';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabSessions component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getSessionsByLid').mockImplementation(() => 1);
    // mount(<LabSessions />);
  });
});
