
import React from 'react';
import ReactDOM from 'react-dom';
import LabStudents from './LabStudents';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabStudents />, div);
  ReactDOM.unmountComponentAtNode(div);
});
