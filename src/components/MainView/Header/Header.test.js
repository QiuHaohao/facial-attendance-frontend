import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import { ProvideUser } from '../../../hooks/userHook';

import Header from './Header';

// eslint-disable-next-line no-undef
describe('Header component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(
      <ProvideUser>
        <Router>
          <Header />
        </Router>
      </ProvideUser>
    );
  });
});
