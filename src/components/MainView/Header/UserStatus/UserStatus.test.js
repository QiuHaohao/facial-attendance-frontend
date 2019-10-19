
import React from 'react';
import ReactDOM from 'react-dom';
import UserStatus from './UserStatus';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserStatus />, div);
  ReactDOM.unmountComponentAtNode(div);
});
