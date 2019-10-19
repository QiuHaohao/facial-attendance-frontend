
import React from 'react';
import ReactDOM from 'react-dom';
import PrivateRoute from './PrivateRoute';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrivateRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});
