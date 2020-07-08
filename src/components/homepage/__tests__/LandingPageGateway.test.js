/**
 * LandingPageGateway.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 08, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

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

test('LandingPageGateway component snapshot', () => {
  const tree = renderer
    .create(<LandingPageGateway />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
