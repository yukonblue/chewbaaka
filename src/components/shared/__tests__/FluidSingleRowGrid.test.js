/**
 * FluidSingleRowGrid.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render, screen } from '@testing-library/react'

import renderer from 'react-test-renderer'

import FluidSingleRowGrid from '../FluidSingleRowGrid'

const items = [
  "This is a title",
  "This is a subtitle",
  "This is a paragraph",
];

const getInstance = () => (
  <FluidSingleRowGrid>
    {
      items.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))
    }
  </FluidSingleRowGrid>
);

test('renders FluidSingleRowGrid component', () => {
  render(
    getInstance()
  );

  for (const [_, item] of items.entries()) {
    const itemElement = screen.getByText(item);
    expect(itemElement).toBeInTheDocument();
  }
});

test('FluidSingleRowGrid component snapshot', () => {
  const tree = renderer
    .create(
      getInstance()
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
