import React from 'react';
import { mount } from 'enzyme';
import EntryInfoDisplayer from './EntryInfoDisplayer';

// eslint-disable-next-line no-undef
describe('EntryInfoDisplayer component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(
      <EntryInfoDisplayer
        header={['Name', 'MatricNo', 'Email']}
        content={['Bob', 'U000000', 'bob000@gmail.com']}
      />
    );
  });
});
