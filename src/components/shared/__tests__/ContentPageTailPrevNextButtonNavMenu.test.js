/**
 * ContentPageTailPrevNextButtonNavMenu.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 01, 2020
 * Updated  : Aug 06, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageTailPrevNextButtonNavMenu from '../ContentPageTailPrevNextButtonNavMenu'

import RouterWrapped from '../../../testing/RouterWrapped'

const pageTailNavMenu = {
  prevPage: {
    label: "Biology",
  },
  nextPage: {
    label: "Future"
  }
};

test('renders ContentPageTailPrevNextButtonNavMenu component', () => {
  render(
    RouterWrapped(
      <ContentPageTailPrevNextButtonNavMenu
        pageTailNavMenu={pageTailNavMenu}
      />
    )
  );

  const prevPageElement = screen.getByText(pageTailNavMenu.prevPage.label);
  expect(prevPageElement).toBeInTheDocument();

  const nextPageElement = screen.getByText(pageTailNavMenu.nextPage.label);
  expect(nextPageElement).toBeInTheDocument();
});

test('ContentPageTailPrevNextButtonNavMenu component snapshot', () => {
  const tree = renderer
    .create(
      RouterWrapped(
        <ContentPageTailPrevNextButtonNavMenu
          pageTailNavMenu={pageTailNavMenu}
        />
      )
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
