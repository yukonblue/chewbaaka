/**
 * HomePage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 04, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import HomePage from '../HomePage'

import { appConfig } from '../../../config'

import { config } from '../config'

test('renders HomePage component', () => {
  render(
    <HomePage
      appConfig={appConfig}
    />
  );

  // Tests main title element is present.
  const mainTitleText = config.components["landingPageGateway"].constants["landingPageGatewayTitle"];
  const mainTitleElement = screen.getByText(mainTitleText);
  expect(mainTitleElement).toBeInTheDocument();

  // Tests main subtitle element is present.
  const mainSubtitleText = config.components["landingPageGateway"].constants["landingPageGatewaySubtitle"];
  const mainSubtitleElement = screen.getByText(mainSubtitleText);
  expect(mainSubtitleElement).toBeInTheDocument();

  // Tests top nav bar component is present.
  const topNavBarComponent = screen.getByTestId("TopNavBarComponentTestId");
  expect(topNavBarComponent).toBeInTheDocument();

  // Tests landing page gateway component is present.
  const landingPageGatewayComponent = screen.getByTestId("LandingPageGatewayComponentTestId");
  expect(landingPageGatewayComponent).toBeInTheDocument();

  // Tests explore gateway component is present.
  const exploreGatewayCompoent = screen.getByTestId("ExploreGatewayComponentTestId");
  expect(exploreGatewayCompoent).toBeInTheDocument();

  // Tests footer component is present.
  const footerComponent = screen.getByTestId("FooterComponentTestId");
  expect(footerComponent).toBeInTheDocument();
});

test('HomePage snapshot', () => {
  const tree = renderer
    .create(
      <HomePage
        appConfig={config}
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
