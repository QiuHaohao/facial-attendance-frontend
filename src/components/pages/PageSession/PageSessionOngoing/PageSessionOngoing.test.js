
import React from 'react';
import ReactDOM from 'react-dom';
import PageSessionOngoing from './PageSessionOngoing';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageSessionOngoing />, div);
  ReactDOM.unmountComponentAtNode(div);
});
