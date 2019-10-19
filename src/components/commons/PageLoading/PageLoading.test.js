
import React from 'react';
import ReactDOM from 'react-dom';
import PageLoading from './PageLoading';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageLoading />, div);
  ReactDOM.unmountComponentAtNode(div);
});
