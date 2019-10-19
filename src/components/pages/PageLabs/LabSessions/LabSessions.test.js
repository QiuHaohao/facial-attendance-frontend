
import React from 'react';
import ReactDOM from 'react-dom';
import LabSessions from './LabSessions';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabSessions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
