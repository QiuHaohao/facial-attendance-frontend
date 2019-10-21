import React from 'react';
import { mount } from 'enzyme';
import PageHome from './PageHome';

// eslint-disable-next-line no-undef
describe('PageHome component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<PageHome />);
  });
});
