/**
 * ExploreGateway.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Jul 28, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ExploreGateway from '../ExploreGateway'

test('renders ExploreGateway component', () => {
  render(
    <ExploreGateway />
  );

  const expectedNumChildrenComponent = 2;

  // Tests component has the expected number of children components present.
  const mainComponent = screen.getByTestId("ExploreGatewayComponentTestId");
  expect(mainComponent.children.length).toBeGreaterThanOrEqual(expectedNumChildrenComponent);

  // Tests explore gateway intro component to be present.
  const introComponent = screen.getByTestId("ExploreGatewayIntroTestId");
  expect(introComponent).toBeInTheDocument();

  // Tests explore gateway grid component to be present.
  const gridComponent = screen.getByTestId("ExploreGatewayGridTestId");
  expect(gridComponent).toBeInTheDocument();
});

test('ExploreGateway component snapshot', () => {
  const tree = renderer
    .create(
      <ExploreGateway />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
