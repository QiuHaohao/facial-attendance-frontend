import React from 'react';
import { mount } from 'enzyme';
import PageLoading from './PageLoading';

// eslint-disable-next-line no-undef
describe('PageLoading component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<PageLoading />);
  });
});
