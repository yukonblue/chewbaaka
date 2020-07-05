/**
 * ImageReveal.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 04, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import ImageRevealDetailedWithTextCover from '../ImageRevealDetailedWithTextCover';

import contentImage from '../assets/cheetah-conservation-fund-30-logo.svg'

test('renders ImageRevealDetailedWithTextCover compoent', () => {
  const title = "Acinonyx jubatus";

  const description = "Cheetah";

  render(
    <ImageRevealDetailedWithTextCover
      title={title}
      contentImage={contentImage}
      description={description}
    />
  );

  const imageRevealComponent = screen.getByTestId('ImageRevealDetailedWithTextCoverComponentTestId');
  expect(imageRevealComponent).toBeInTheDocument();

  // Tests visible part.
  const imageRevealComponentVisiblePart = screen.getByTestId('ImageRevealDetailedWithTextCoverComponentVisiblePartTestId');
  expect(imageRevealComponentVisiblePart).toBeInTheDocument();

  // Tests hidden part.
  const imageRevealComponentHiddenPart = screen.getByTestId('ImageRevealDetailedWithTextCoverComponentHiddenPartTestId');
  expect(imageRevealComponentHiddenPart).toBeInTheDocument();

  // Tests description text part.
  const imageRevealComponentTextDescriptionPart = screen.getByTestId('ImageRevealDetailedWithTextCoverComponentDescriptionTextPartTestId');
  expect(imageRevealComponentTextDescriptionPart).toBeInTheDocument();
  expect(imageRevealComponentTextDescriptionPart.textContent).toBe(description);

  // TODO: test component props.
});
