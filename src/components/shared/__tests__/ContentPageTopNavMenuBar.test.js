/**
 * ContentPageTopNavMenuBar.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 06, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageTopNavMenuBar from '../ContentPageTopNavMenuBar'

import RouterWrapped from '../../../testing/RouterWrapped'

test('renders ContentPageTopNavMenuBar component', () => {
  render(
    RouterWrapped(
      <ContentPageTopNavMenuBar />
    )
  );

  const expectedMenuItemNames = ["Home", "History", "Biology", "Ecology", "Future"];

  for (const [_, expectedMenuItemName] of expectedMenuItemNames.entries()) {
    const menuItemElement = screen.getByText(expectedMenuItemName);
    expect(menuItemElement).toBeInTheDocument();
  }
});

test('ContentPageTopNavMenuBar component snapshot', () => {
  const tree = renderer
    .create(
      RouterWrapped(
        <ContentPageTopNavMenuBar />
      )
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
