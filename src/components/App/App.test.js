import React from 'react';
import { mount } from 'enzyme';
import App from './App';

// eslint-disable-next-line no-undef
describe('App component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<App />);
  });
});
