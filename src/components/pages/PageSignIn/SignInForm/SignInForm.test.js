import React from 'react';
import { mount } from 'enzyme';
import SignInForm from './SignInForm';

// eslint-disable-next-line no-undef
describe('SignInForm component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<SignInForm />);
  });
});
