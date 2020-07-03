/**
 * HomePage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Jul 03, 2020
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import HomePage from '../HomePage';

test('renders homepage', () => {
  render(<HomePage />);

  const mainTitleElement = screen.getByText(/Run cheetah run/i);
  expect(mainTitleElement).toBeInTheDocument();

  // Tests top nav bar component is present.
  const topNavBarComponent = screen.getByTestId("TopNavBarComponentTestId");
  expect(topNavBarComponent).toBeInTheDocument();

  // Tests landing page gateway component is present.
  const landingPageGatewayComponent = screen.getByTestId("LandingPageGateway");
  expect(landingPageGatewayComponent).toBeInTheDocument();

  // Tests explore gateway component is present.
  const exploreGatewayCompoent = screen.getByTestId("ExploreGatewayComponentTestId");
  expect(exploreGatewayCompoent).toBeInTheDocument();

  // Tests footer component is present.
  const footerComponent = screen.getByTestId("FooterComponentTestId");
  expect(footerComponent).toBeInTheDocument();
});
