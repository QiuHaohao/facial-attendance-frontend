import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PageLabs from './PageLabs';

// eslint-disable-next-line no-undef
describe('PageLabs component', () => {
  // eslint-disable-next-line no-undef
  test('renders without crashing', () => {
    mount(
      <MemoryRouter initialEntries={['/labs/1_CZ3002-TS4/sessions']}>
        <PageLabs />
      </MemoryRouter>
    );
  });
});
