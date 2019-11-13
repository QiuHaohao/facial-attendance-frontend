import React from 'react';
import { mount, shallow } from 'enzyme';
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
        json: () => {
          return {
            name: 'XX',
            email: '000@gmail.com',
            sessions: [
              {
                sid: 1,
                attendance: 'A',
                remark: ''
              }
            ]
          };
        }
      })
    );

    mount(<LabStudentSummary match={match} />);
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
