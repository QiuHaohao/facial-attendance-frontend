
import React from 'react';
import ReactDOM from 'react-dom';
import SessionDuration from './SessionDuration';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SessionDuration />, div);
  ReactDOM.unmountComponentAtNode(div);
});
