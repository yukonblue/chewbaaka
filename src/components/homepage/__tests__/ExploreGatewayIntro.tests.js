/**
 * ExploreGatewayIntro.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 02, 2020
 * Updated  : Aug 08, 2021
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import ExploreGatewayIntro from '../ExploreGatewayIntro'

test('renders explore gateway intro', () => {
  render(
    <ExploreGatewayIntro />
  );

  // Tests component title is present.
  const componentTitleElement = screen.getByText(/Explore CCF’s Cheetah Museum/i);
  expect(componentTitleElement).toBeInTheDocument();
});

test('ExploreGatewayIntro component snapshot', () => {
  const tree = renderer
    .create(
      <ExploreGatewayIntro />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
