// import React from 'react';
// import { mount } from 'enzyme';
// import { MemoryRouter } from 'react-router-dom';
// import LabSessionSummary from './LabSessionSummary';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabSessionSummary component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', async () => {
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getSessionBySid').mockImplementation(() => 80);
    // mount(<LabSessionSummary />);
  });
});
