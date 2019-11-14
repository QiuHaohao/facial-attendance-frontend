import React from 'react';
import { mount } from 'enzyme';
import LabNameHolder from './LabNameHolder';

// eslint-disable-next-line no-undef
describe('LabNameHolder component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<LabNameHolder lname="CZ3002-TS5" />);
  });
});
