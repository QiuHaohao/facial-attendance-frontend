
import React from 'react';
import ReactDOM from 'react-dom';
import ImageCapturer from './ImageCapturer';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageCapturer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
