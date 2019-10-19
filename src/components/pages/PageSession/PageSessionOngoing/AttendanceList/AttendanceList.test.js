
import React from 'react';
import ReactDOM from 'react-dom';
import AttendanceList from './AttendanceList';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AttendanceList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
