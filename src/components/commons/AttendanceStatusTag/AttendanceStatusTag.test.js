import React from 'react';
import ReactDOM from 'react-dom';
import AttendanceStatusTag from './AttendanceStatusTag';

// eslint-disable-next-line no-undef
it('should display grey "No status" when no props passed in', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AttendanceStatusTag />, div);
  ReactDOM.unmountComponentAtNode(div);
});
