/**
 * ExploreGatewayGrid.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 04, 2020
 * Updated  : Aug 06, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ExploreGatewayGrid from '../ExploreGatewayGrid'

import RouterWrapped from '../../../testing/RouterWrapped'

test('renders ExploreGatewayGrid component', () => {
  render(
    RouterWrapped(
      <ExploreGatewayGrid />
    )
  );

  const expectedNumGridComponentChildren = 4;

  // Tests grid component has the expected number of children components present.
  const gridComponent = screen.getByTestId("ExploreGatewayGridTestId");
  expect(gridComponent.children.length).toBe(expectedNumGridComponentChildren);

  // Tests grid item components are present.
  const expectedGridItemTitles = [
    /History/i,
    /Biology/i,
    /Ecology/i,
    /Future/i,
  ];

  for ( const [_, expectedGridItemTitle] in expectedGridItemTitles.entries() ) {
    const gridItemComponentForTitle = screen.getByText(expectedGridItemTitle);
    expect(gridItemComponentForTitle).toBeInTheDocument();
  }
});

test('ExploreGatewayGrid component snapshot', () => {
  const tree = renderer
    .create(
      RouterWrapped(
        <ExploreGatewayGrid />
      )
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
