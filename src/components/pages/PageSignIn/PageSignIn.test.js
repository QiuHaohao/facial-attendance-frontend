
import React from 'react';
import ReactDOM from 'react-dom';
import PageSignIn from './PageSignIn';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageSignIn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
