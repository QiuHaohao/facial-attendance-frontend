import React from 'react';
import { mount } from 'enzyme';
import ImageCapturer from './ImageCapturer';

// eslint-disable-next-line no-undef
describe('ImageCapturer component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(<ImageCapturer onPostImage={() => {}} />);
  });
});
