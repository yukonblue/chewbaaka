/**
 * ExploreGateway.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Aug 06, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ExploreGateway from '../ExploreGateway'

import RouterWrapped from '../../../testing/RouterWrapped'

test('renders ExploreGateway component', () => {
  render(
    RouterWrapped(
      <ExploreGateway />
    )
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
      RouterWrapped(
        <ExploreGateway />
      )
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
