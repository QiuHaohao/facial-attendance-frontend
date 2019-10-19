
import React from 'react';
import ReactDOM from 'react-dom';
import Statistic from './Statistic';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Statistic />, div);
  ReactDOM.unmountComponentAtNode(div);
});
