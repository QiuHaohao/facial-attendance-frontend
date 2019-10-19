
import React from 'react';
import ReactDOM from 'react-dom';
import PageLabs from './PageLabs';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageLabs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
