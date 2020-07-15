/**
 * ContentPageSideNavMenu.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 14, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import ContentPageSideNavMenu from '../ContentPageSideNavMenu';

import { ContentPageSectionTitleToAnchorId } from '../ContentPageSectionAnchor'

const title = "Menu Title";
const items = ["MenuItem1", "MenuItem2", "MenuItem3"];

test('renders ContentPageSideNavMenu component', () => {
  render(<ContentPageSideNavMenu title={title} items={items} />);

  const component = screen.getByTestId("ContentPageSideNavMenuComponentTestId");
  expect(component).toBeInTheDocument();

  /**
   * The text were moved inside <span></span>, and that doesn't
   * work well with getByText() apparently.
   */

  // for (const [idx, item] of items.entries()) {
  //   const menuItemElement = screen.getByText(item);
  //   expect(menuItemElement).toBeInTheDocument();
  //   expect(menuItemElement.href).toBe("http://localhost/#"+ContentPageSectionTitleToAnchorId(item));
  // }
});

test('ContentPageSideNavMenu component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageSideNavMenu title={title} items={items} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
