import React from 'react';
import { mount } from 'enzyme';
import LabSessionSummary from './LabSessionSummary';

// eslint-disable-next-line no-undef
describe('SignInForm component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<LabSessionSummary />);
  });
});
