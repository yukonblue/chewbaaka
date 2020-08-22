/**
 * ContentPageTopNavMenuBar.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Aug 21, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageTopNavMenuBar from '../ContentPageTopNavMenuBar'

import RouterWrapped from '../../../testing/RouterWrapped'

test('renders ContentPageTopNavMenuBar component', () => {
  render(
    RouterWrapped(
      <ContentPageTopNavMenuBar
        pageTitle="Ecology"
      />
    )
  );

  const expectedMenuItemNames = ["Home", "History", "Biology", "Ecology", "Future"];

  const getExpectedMenuItemHref = (menuItemName) => ("/" + (menuItemName.toLowerCase() === "home" ? "" : menuItemName.toLowerCase()));

  for (const [_, menuItemName] of expectedMenuItemNames.entries()) {
    const menuItemElement = screen.getByText(menuItemName);
    expect(menuItemElement).toBeInTheDocument();
    expect(menuItemElement).toHaveAttribute('href', getExpectedMenuItemHref(menuItemName));
  }
});

test('ContentPageTopNavMenuBar component snapshot', () => {
  const tree = renderer
    .create(
      RouterWrapped(
        <ContentPageTopNavMenuBar
          pageTitle="Future"
        />
      )
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
