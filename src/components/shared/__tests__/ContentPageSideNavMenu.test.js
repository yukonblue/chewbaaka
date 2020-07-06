/**
 * ContentPageSideNavMenu.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 06, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ContentPageSideNavMenu from '../ContentPageSideNavMenu';

test('renders ContentPageSideNavMenu component', () => {
  const items = ["Throughout History", "Range", "Current Threats"];

  render(<ContentPageSideNavMenu items={items} />);

  const component = screen.getByTestId("ContentPageSideNavMenuComponentTestId");
  expect(component).toBeInTheDocument();

  for (const [idx, item] of items.entries()) {
    const part = screen.getByText(item);
    expect(part).toBeInTheDocument();
  }
});
