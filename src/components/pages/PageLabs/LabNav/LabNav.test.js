import React from 'react';
import { mount } from 'enzyme';
import LabNav from './LabNav';

// eslint-disable-next-line no-undef
describe('AbstractSelect component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<LabNav id="CZ3002-TS4" curPath="/labs/CZ3002-TS4/sessions" />);
  });
});
