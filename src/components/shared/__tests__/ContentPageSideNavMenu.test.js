/**
 * ContentPageSideNavMenu.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 07, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ContentPageSideNavMenu from '../ContentPageSideNavMenu';

test('renders ContentPageSideNavMenu component', () => {
  const items = ["MenuItem1", "MenuItem2", "MenuItem3"];

  render(<ContentPageSideNavMenu items={items} />);

  const component = screen.getByTestId("ContentPageSideNavMenuComponentTestId");
  expect(component).toBeInTheDocument();

  for (const [idx, item] of items.entries()) {
    const menuItemElement = screen.getByText(item);
    expect(menuItemElement).toBeInTheDocument();
    expect(menuItemElement.href).toBe("http://localhost/#"+item);
  }
});
