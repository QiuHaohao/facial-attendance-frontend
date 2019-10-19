
import React from 'react';
import ReactDOM from 'react-dom';
import LabSelector from './LabSelector';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabSelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});
