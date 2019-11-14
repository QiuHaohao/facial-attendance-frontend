import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import LabStudentSummary from './LabStudentSummary';
import api from '../../../../api/api';

// eslint-disable-next-line no-undef
describe('LabStudentSummary component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', async () => {
    const match = {
      params: {
        id: 'U17872837D'
      }
    };
    // eslint-disable-next-line no-undef
    jest.spyOn(api, 'getStudentByMid').mockImplementation(() =>
      Promise.resolve({
        name: 'XX',
        email: '000@gmail.com',
        sessions: [
          {
            sid: 1,
            attendance: 'A',
            remark: ''
          },
          {
            sid: 2,
            attendance: 'AB',
            remark: 'MC'
          }
        ]
      })
    );

    await act(async () => {
      mount(<LabStudentSummary match={match} />);
    });
  });

  // // eslint-disable-next-line no-undef
  // test('click save', () => {
  //   const match = {
  //     params: {
  //       id: 'U17872837D'
  //     }
  //   };
  //   const record = {
  //     sid: 5
  //   };
  //   // eslint-disable-next-line no-undef
  //   const component = shallow(<LabStudentSummary match={match} />);
  //   component.find('')
  // });
});
