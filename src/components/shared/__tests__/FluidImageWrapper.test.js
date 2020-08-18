/**
 * FluidImageWrapper.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import FluidImageWrapper from '../FluidImageWrapper'

const href = "https://google.com/image.jpg";
const src = "Some image";
const width = 520;

test('renders FluidImageWrapper component', () => {
  render(
    <FluidImageWrapper
      src={src}
      href={href}
      width={width}
      centered
    />
  );
});

test('FluidImageWrapper component snapshot', () => {
  const tree = renderer
    .create(
      <FluidImageWrapper
        src={src}
        href={href}
        width={width}
        centered
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
