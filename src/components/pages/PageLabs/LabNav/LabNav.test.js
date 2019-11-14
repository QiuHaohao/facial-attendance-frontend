import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import LabNav from './LabNav';

// eslint-disable-next-line no-undef
describe('LabNav component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <LabNav id="1_CZ3002-TS4" curPath="/labs/1_CZ3002-TS4/sessions" />
      </MemoryRouter>
    );
  });
});
