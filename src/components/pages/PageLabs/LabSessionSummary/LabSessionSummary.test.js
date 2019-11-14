import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
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
        date: '10-07',
        time: '14:03',
        students: [
          {
            mid: 'U2893828X',
            name: 'OOO',
            attendance: 'A',
            remark: ''
          },
          {
            mid: 'U2822238X',
            name: 'OdO',
            attendance: 'AB',
            remark: 'MC'
          }
        ]
      })
    );
    await act(async () => {
      mount(<LabSessionSummary match={match} />);
    });
  });
});
