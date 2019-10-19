
import React from 'react';
import ReactDOM from 'react-dom';
import AbstractSelect from './AbstractSelect';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AbstractSelect />, div);
  ReactDOM.unmountComponentAtNode(div);
});
