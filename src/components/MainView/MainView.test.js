
import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './MainView';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
