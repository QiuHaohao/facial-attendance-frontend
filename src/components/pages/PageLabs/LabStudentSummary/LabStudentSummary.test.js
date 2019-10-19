
import React from 'react';
import ReactDOM from 'react-dom';
import LabStudentSummary from './LabStudentSummary';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabStudentSummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});
