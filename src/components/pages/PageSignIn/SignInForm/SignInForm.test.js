import React from 'react';
import { mount } from 'enzyme';
import SignInForm from './SignInForm';

// eslint-disable-next-line no-undef
describe('SignInForm component', () => {
  // eslint-disable-next-line no-undef
  test('click without crashing', () => {
    const wrapper = mount(<SignInForm />);
    wrapper
      .find('.ant-form-item-children > .login-form-button')
      .simulate('click');
  });
});
