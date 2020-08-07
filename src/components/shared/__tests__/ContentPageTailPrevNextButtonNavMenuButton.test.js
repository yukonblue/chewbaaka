/**
 * ContentPageTailPrevNextButtonNavMenuButton.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 01, 2020
 * Updated  : Aug 06, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ContentPageTailPrevNextButtonNavMenuButton from '../ContentPageTailPrevNextButtonNavMenuButton'

import RouterWrapped from '../../../testing/RouterWrapped'

const labelText = "Go Next Page";
const href = "/#top"

test('renders ContentPageTailPrevNextButtonNavMenuButton component', () => {
  render(
    RouterWrapped(
      <ContentPageTailPrevNextButtonNavMenuButton
        isRTL={true}
        label={labelText}
        href={href}
      />
    )
  );

  const labelElement = screen.getByText(labelText);
  expect(labelElement).toBeInTheDocument();
});

test('ContentPageTailPrevNextButtonNavMenuButton component snapshot', () => {
  const tree = renderer
    .create(
      RouterWrapped(
        <ContentPageTailPrevNextButtonNavMenuButton
          isRTL={true}
          label={labelText}
          href={href}
        />
      )
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
