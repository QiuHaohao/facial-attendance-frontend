import React from 'react';
import { mount } from 'enzyme';
import Logo from './Logo';

// eslint-disable-next-line no-undef
describe('Logo component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<Logo />);
  });
});
