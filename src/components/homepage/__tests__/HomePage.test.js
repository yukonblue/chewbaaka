/**
 * HomePage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 20, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import HomePage from '../HomePage'

import { config as appConfig } from '../../../config'

import { config } from '../config'

import RouterWrapped from '../../../testing/RouterWrapped'

test('renders HomePage component', () => {
  render(
    RouterWrapped(
      <HomePage
        appConfig={appConfig}
      />
    )
  );

  // Tests main title element is present.
  const mainTitleText = config.components["landingPageGateway"].constants["landingPageGatewayTitle"];
  const mainTitleElement = screen.getByText(mainTitleText);
  expect(mainTitleElement).toBeInTheDocument();

  // Tests main subtitle element is present.
  // NOTE: Disable this for now since the text is currently broken into multiple elements.
  // const mainSubtitleText = config.components["landingPageGateway"].constants["landingPageGatewaySubtitle"];
  // const mainSubtitleElement = screen.getByText(mainSubtitleText);
  // expect(mainSubtitleElement).toBeInTheDocument();

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
      RouterWrapped(
        <HomePage
          appConfig={appConfig}
        />
      )
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
