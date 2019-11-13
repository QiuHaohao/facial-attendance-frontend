import React from 'react';
import { mount } from 'enzyme';
import LabSessionSummary from './LabSessionSummary';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabSessionSummary component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', async () => {
    const match = {
      params: {
        id: 1
      }
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getSessionBySid').mockImplementation(() =>
      Promise.resolve({
        json: () => {}
      })
    );
    mount(<LabSessionSummary match={match} />);
  });
});
