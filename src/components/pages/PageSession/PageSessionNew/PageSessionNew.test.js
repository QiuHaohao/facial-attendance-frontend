
import React from 'react';
import ReactDOM from 'react-dom';
import PageSessionNew from './PageSessionNew';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageSessionNew />, div);
  ReactDOM.unmountComponentAtNode(div);
});
