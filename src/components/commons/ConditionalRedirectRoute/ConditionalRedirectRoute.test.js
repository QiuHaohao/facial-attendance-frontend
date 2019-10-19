
import React from 'react';
import ReactDOM from 'react-dom';
import ConditionalRedirectRoute from './ConditionalRedirectRoute';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConditionalRedirectRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});
