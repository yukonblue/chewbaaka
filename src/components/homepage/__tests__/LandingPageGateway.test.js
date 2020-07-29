/**
 * LandingPageGateway.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 28, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import LandingPageGateway from '../LandingPageGateway'

import { config } from '../config'

test('renders LandingPageGateway component', () => {
  render(
    <LandingPageGateway
      config={config}
    />
  );

  const expectedLandingPageTitleText = config.components["landingPageGateway"].constants["landingPageGatewayTitle"];

  // Tests main title element to be present.
  const titleElement = screen.getByText(expectedLandingPageTitleText);
  expect(titleElement).toBeInTheDocument();

  // Tests subtitle element to be present.
  const subtitleElement = screen.getByTestId("LandingPageGatewayComponentSubtitlePartTestId");
  expect(subtitleElement).toBeInTheDocument();
});

test('LandingPageGateway component snapshot', () => {
  const tree = renderer
    .create(
      <LandingPageGateway
        config={config}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
