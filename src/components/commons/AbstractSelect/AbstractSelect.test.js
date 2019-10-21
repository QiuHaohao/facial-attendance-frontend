import React from 'react';
import { mount } from 'enzyme';
import AbstractSelect from './AbstractSelect';

// eslint-disable-next-line no-undef
describe('AbstractSelect component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(
      <AbstractSelect
        options={[
          { value: 'lid1', name: 'Lab 1' },
          { value: 'lid1', name: 'Lab 1' }
        ]}
        onChange={() => {}}
      />
    );
  });
});
