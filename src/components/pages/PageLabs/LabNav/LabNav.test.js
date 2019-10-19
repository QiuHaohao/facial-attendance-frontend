
import React from 'react';
import ReactDOM from 'react-dom';
import LabNav from './LabNav';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
