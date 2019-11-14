import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import ConditionalRedirectRoute from './ConditionalRedirectRoute';

// eslint-disable-next-line no-undef
describe('ConditionalRedirectRoute component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(
      <Router>
        <ConditionalRedirectRoute
          path="/"
          when={true}
          to="/to"
          component={<div />}
        />
      </Router>
    );
  });
});
