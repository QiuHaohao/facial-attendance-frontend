
import React from 'react';
import ReactDOM from 'react-dom';
import LabSessionSummary from './LabSessionSummary';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabSessionSummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});
