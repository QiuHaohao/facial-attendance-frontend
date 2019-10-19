
import React from 'react';
import ReactDOM from 'react-dom';
import PageSession from './PageSession';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageSession />, div);
  ReactDOM.unmountComponentAtNode(div);
});
