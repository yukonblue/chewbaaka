/**
 * LandingPageGateway.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 02, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import LandingPageGateway from '../LandingPageGateway';

test('renders landing page gateway', () => {
  render(<LandingPageGateway />);

  // Tests main title element to be present.
  const titleElement = screen.getByText("Run cheetah run");
  expect(titleElement).toBeInTheDocument();

  // Tests subtitle element to be present.
  const subtitleElement = screen.getByTestId("subtitle");
  expect(subtitleElement).toBeInTheDocument();
});
