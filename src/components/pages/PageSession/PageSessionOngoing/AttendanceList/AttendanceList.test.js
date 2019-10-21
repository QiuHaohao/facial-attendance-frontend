import React from 'react';
import { mount } from 'enzyme';
import AttendanceList from './AttendanceList';

// eslint-disable-next-line no-undef
describe('AttendanceList component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<AttendanceList />);
  });
});
