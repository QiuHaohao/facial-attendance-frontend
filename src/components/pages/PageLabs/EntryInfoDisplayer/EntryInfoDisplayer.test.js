
import React from 'react';
import ReactDOM from 'react-dom';
import EntryInfoDisplayer from './EntryInfoDisplayer';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EntryInfoDisplayer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
