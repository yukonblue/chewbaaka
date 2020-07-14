/**
 * ContentPageSideNavMenu.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 06, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import ContentPageSideNavMenu from '../ContentPageSideNavMenu';

import { ContentPageSectionTitleToAnchorId } from '../ContentPageSectionAnchor'

const items = ["MenuItem1", "MenuItem2", "MenuItem3"];

test('renders ContentPageSideNavMenu component', () => {
  render(<ContentPageSideNavMenu items={items} />);

  const component = screen.getByTestId("ContentPageSideNavMenuComponentTestId");
  expect(component).toBeInTheDocument();

  // for (const [idx, item] of items.entries()) {
  //   const menuItemElement = screen.getByText(item);
  //   expect(menuItemElement).toBeInTheDocument();
  //   expect(menuItemElement.href).toBe("http://localhost/#"+ContentPageSectionTitleToAnchorId(item));
  // }
});

test('ContentPageSideNavMenu component snapshot', () => {
  const tree = renderer
    .create(
      <ContentPageSideNavMenu items={items} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
