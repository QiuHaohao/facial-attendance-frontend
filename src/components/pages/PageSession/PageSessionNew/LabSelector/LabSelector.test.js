import React from 'react';
import { mount } from 'enzyme';
import LabSelector from './LabSelector';

// eslint-disable-next-line no-undef
describe('LabSelector component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(
      <LabSelector
        labs={[
          { lid: 1, course: 'CZ3002', group: 'TS5' },
          { lid: 2, course: 'CZ3002', group: 'TS4' }
        ]}
      />
    );
  });
});
