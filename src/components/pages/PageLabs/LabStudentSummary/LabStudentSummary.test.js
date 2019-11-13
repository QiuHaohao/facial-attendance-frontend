import React from 'react';
import { mount } from 'enzyme';
import LabStudentSummary from './LabStudentSummary';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabStudentSummary component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    const match = {
      params: {
        id: 'U17872837D'
      }
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getStudentByMid').mockImplementation(() =>
      Promise.resolve({
        json: () => {}
      })
    );

    mount(<LabStudentSummary match={match} />);
  });
});
