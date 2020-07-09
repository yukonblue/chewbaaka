/**
 * ContentPageTopNavMenuBar.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import ContentPageTopNavMenuBar from '../ContentPageTopNavMenuBar';

test('renders ContentPageTopNavMenuBar component', () => {
  render(<ContentPageTopNavMenuBar />);

  const expectedMenuItemNames = ["Home", "History", "Biology", "Ecology", "Future"];

  for (const [_, expectedMenuItemName] of expectedMenuItemNames.entries()) {
    const menuItemElement = screen.getByText(expectedMenuItemName);
    expect(menuItemElement).toBeInTheDocument();
  }
});

test('ContentPageTopNavMenuBar component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageTopNavMenuBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
