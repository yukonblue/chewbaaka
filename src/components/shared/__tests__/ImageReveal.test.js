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

import ImageReveal from '../ImageReveal';

import coverImage from '../assets/cheetah-conservation-fund-logo.jpg'
import contentImage from '../assets/cheetah-conservation-fund-30-logo.svg'

test('renders ImageReveal compoent', () => {
  render(<ImageReveal coverImage={coverImage} contentImage={contentImage} size="small"/>);

  const imageRevealComponent = screen.getByTestId('ImageRevealComponentTestId');
  expect(imageRevealComponent).toBeInTheDocument();

  const imageRevealComponentVisiblePart = screen.getByTestId('ImageRevealComponentVisiblePartTestId');
  expect(imageRevealComponentVisiblePart).toBeInTheDocument();

  const imageRevealComponentHiddenPart = screen.getByTestId('ImageRevealComponentHiddenPartTestId');
  expect(imageRevealComponentHiddenPart).toBeInTheDocument();

  // TODO: test component props.
});
