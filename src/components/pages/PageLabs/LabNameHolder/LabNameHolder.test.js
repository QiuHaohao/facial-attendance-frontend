
import React from 'react';
import ReactDOM from 'react-dom';
import LabNameHolder from './LabNameHolder';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabNameHolder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
