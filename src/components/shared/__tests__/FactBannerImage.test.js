/**
 * FactBannerImage.test.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Aug 17, 2020
 * Updated  : Aug 17, 2020
 */

import React from 'react'

import { render } from '@testing-library/react'

import renderer from 'react-test-renderer'

import FactBannerImage from '../FactBannerImage'

const href = "https://google.com/image.jpg";
const src = "Some image";

test('renders FactBannerImage component', () => {
  render(
    <FactBannerImage
      src={src}
      href={href}
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
        large
        centered
      />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
