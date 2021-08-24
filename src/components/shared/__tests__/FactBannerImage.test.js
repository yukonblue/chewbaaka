/**
 * FactBannerImage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 23, 2021
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import FactBannerImage from '../FactBannerImage'

const href = "https://google.com/image.jpg";
const src = "Some image";
const width = 520;
const height = 320;

test('renders FactBannerImage component', () => {
  render(
    <FactBannerImage
      src={src}
      href={href}
      width={width}
      height={height}
      large
      centered
    />
  );
});

test('FactBannerImage component snapshot', () => {
  const tree = renderer
    .create(
      <FactBannerImage
        src={src}
        href={href}
        width={width}
        height={height}
        large
        centered
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
